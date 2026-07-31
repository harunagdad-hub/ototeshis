import React from 'react';
import Link from 'next/link';
import { FaultDatabase } from '@/data/database/faultDatabase';

interface FaultCardProps {
  fault: FaultDatabase;
}

export default function FaultCard({ fault }: FaultCardProps) {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-blue-500 transition-colors flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-100 text-blue-800">
            {fault.category}
          </span>
          <span className={`text-xs px-2 py-0.5 rounded font-medium ${
            fault.severity === 'CRITICAL_STOP' ? 'bg-red-100 text-red-800' :
            fault.severity === 'MODERATE_SERVICE_SOON' ? 'bg-amber-100 text-amber-800' :
            'bg-gray-100 text-gray-700'
          }`}>
            {fault.severity === 'CRITICAL_STOP' ? 'Kritik' : 'Servis'}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{fault.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{fault.shortDescription}</p>

        {fault.obdCodes.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {fault.obdCodes.map((code) => (
              <span key={code} className="text-xs font-mono bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
                {code}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="pt-2 border-t border-gray-100 mt-2">
        <Link
          href={`/faults/${fault.slug}`}
          className="text-sm font-semibold text-blue-600 hover:underline inline-flex items-center"
        >
          Detayları İncele →
        </Link>
      </div>
    </div>
  );
}
