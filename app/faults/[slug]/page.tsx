import React from 'react';
import Link from 'next/link';
import { faultDatabase } from '@/data/database/faultDatabase';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function FaultDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const fault = faultDatabase.find(
    (f) => f.slug.toLowerCase() === resolvedParams.slug.toLowerCase()
  );

  if (!fault) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-6">
        <Link href="/brands" className="text-sm text-blue-600 hover:underline">
          ← Markalara Dön
        </Link>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className={`px-3 py-1 rounded text-xs font-semibold ${
            fault.severity === 'CRITICAL_STOP' ? 'bg-red-100 text-red-800' :
            fault.severity === 'MODERATE_SERVICE_SOON' ? 'bg-amber-100 text-amber-800' :
            'bg-blue-100 text-blue-800'
          }`}>
            {fault.severity === 'CRITICAL_STOP' ? 'Kritik Risk — Acil Müdahale' : 'Servis Kontrolü Önerilir'}
          </span>
          <span className="inline-block bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded font-medium">
            {fault.category}
          </span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{fault.title}</h1>
        <p className="text-gray-600 text-base leading-relaxed mb-6">{fault.shortDescription}</p>

        {fault.obdCodes.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">İlişkili OBD-II Kodları</h3>
            <div className="flex flex-wrap gap-2">
              {fault.obdCodes.map((code) => (
                <span key={code} className="bg-gray-900 text-green-400 font-mono text-sm px-3 py-1 rounded-md">
                  {code}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            ⚠️ Yaygın Belirtiler (Semptomlar)
          </h2>
          <ul className="space-y-2">
            {fault.symptoms.map((symptom, idx) => (
              <li key={idx} className="flex items-start text-sm text-gray-700">
                <span className="text-blue-500 mr-2">•</span>
                {symptom}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            🛠️ Çözüm Önerisi & Onarım
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            {fault.solutionSummary}
          </p>
        </div>
      </div>
    </div>
  );
}
