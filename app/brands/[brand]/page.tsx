import React from 'react';
import Link from 'next/link';
import { brandsDatabase } from '@/data/database/brands';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    brand: string;
  }>;
}

export default async function BrandModelsPage({ params }: PageProps) {
  const resolvedParams = await params;
  const brand = brandsDatabase.find(
    (b) => b.slug.toLowerCase() === resolvedParams.brand.toLowerCase()
  );

  if (!brand) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/brands" className="text-sm text-blue-600 hover:underline">
          ← Tüm Markalara Dön
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-2">{brand.name} Modelleri</h1>
      <p className="text-gray-600 mb-8">İncelemek istediğiniz {brand.name} modelini seçin.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {brand.models.map((model) => (
          <div key={model.id} className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">{model.name}</h2>
            
            <div className="space-y-3">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">
                Jenerasyonlar
              </span>
              {model.generations.map((gen) => (
                <div key={gen.id} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-800">{gen.name}</span>
                    <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded">
                      {gen.years}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {gen.engines.map((eng) => (
                      <Link
                        key={eng.id}
                        href={`/brands/${brand.slug}/${model.id.toLowerCase()}/${gen.id.toLowerCase()}/${eng.id.toLowerCase()}`}
                        className="text-xs bg-white border border-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600 transition-colors"
                      >
                        {eng.code}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
