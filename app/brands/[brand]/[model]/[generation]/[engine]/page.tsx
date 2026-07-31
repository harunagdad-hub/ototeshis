import React from 'react';
import Link from 'next/link';
import { faultDatabase } from '@/data/database/faultDatabase';
import { brandsDatabase } from '@/data/database/brands';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    brand: string;
    model: string;
    generation: string;
    engine: string;
  }>;
}

export default async function EngineFaultsPage({ params }: PageProps) {
  const resolvedParams = await params;
  
  const brand = brandsDatabase.find(
    (b) => b.slug.toLowerCase() === resolvedParams.brand.toLowerCase()
  );
  if (!brand) notFound();

  const model = brand.models.find(
    (m) => m.id.toLowerCase() === resolvedParams.model.toLowerCase()
  );
  if (!model) notFound();

  const generation = model.generations.find(
    (g) => g.id.toLowerCase() === resolvedParams.generation.toLowerCase()
  );
  if (!generation) notFound();

  const engine = generation.engines.find(
    (e) => e.id.toLowerCase() === resolvedParams.engine.toLowerCase()
  );
  if (!engine) notFound();

  // Motor ailesine ait arızaları filtreleme
  const engineFaults = faultDatabase.filter((f) =>
    f.engineFamilies.includes(engine.engineFamilyId)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href={`/brands/${brand.slug}`} className="text-sm text-blue-600 hover:underline">
          ← {brand.name} Modellerine Dön
        </Link>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8 shadow-sm">
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">Motor Detayı</span>
        <h1 className="text-3xl font-bold text-gray-900 mt-1">{brand.name} {model.name}</h1>
        <p className="text-gray-600 mt-1">
          {generation.name} ({generation.years}) — <strong className="text-gray-800">{engine.code}</strong>
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-4">Bu Motora Ait Kronik Arızalar ({engineFaults.length})</h2>

      {engineFaults.length === 0 ? (
        <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 text-gray-600">
          Bu motor seçeneği için henüz raporlanmış belirgin bir kronik arıza bulunmamaktadır.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {engineFaults.map((fault) => (
            <div key={fault.slug} className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-blue-500 transition-colors">
              <span className={`inline-block px-2.5 py-0.5 rounded text-xs font-medium mb-3 ${
                fault.severity === 'CRITICAL_STOP' ? 'bg-red-100 text-red-800' :
                fault.severity === 'MODERATE_SERVICE_SOON' ? 'bg-amber-100 text-amber-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                {fault.severity === 'CRITICAL_STOP' ? 'Kritik Risk' : 'Servis Kontrolü'}
              </span>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{fault.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{fault.shortDescription}</p>

              {fault.obdCodes.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {fault.obdCodes.map((code) => (
                    <span key={code} className="text-xs font-mono bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
                      {code}
                    </span>
                  ))}
                </div>
              )}

              <Link
                href={`/faults/${fault.slug}`}
                className="text-sm font-semibold text-blue-600 hover:underline inline-flex items-center"
              >
                Arıza Detayını Göre →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
