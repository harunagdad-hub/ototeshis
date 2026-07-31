import React from 'react';
import { engineFamilies, EngineFamily } from '@/data/database/engineFamilies';

interface PageProps {
  params: Promise<{
    family: string;
  }>;
}

export default async function EngineFamilyPage({ params }: PageProps) {
  const resolvedParams = await params;
  const familyId = resolvedParams.family.toUpperCase();

  const engineFamily = engineFamilies.find(
    (item: EngineFamily) => item.id.toUpperCase() === familyId || item.name.toUpperCase() === familyId
  );

  const displayName = engineFamily?.name || engineFamily?.title || resolvedParams.family;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold mb-4">
        {displayName}
      </h1>
      {engineFamily?.description && (
        <p className="text-lg text-gray-600 mb-6">{engineFamily.description}</p>
      )}
    </div>
  );
}
