import React from 'react';
import Link from 'next/link';

// Örnek OBD kod verisi veya veritabanından gelen tip tanımı
interface ObdCode {
  code: string;
  title: string;
  description: string;
  severity: 'CRITICAL_STOP' | 'MODERATE_SERVICE_SOON' | 'MINOR_CHECK_LATER';
}

const obdCodes: ObdCode[] = [
  {
    code: 'P0300',
    title: 'Rastgele/Çoklu Silindir Ateşleme Hatası',
    description: 'Motor silindirlerinde düzensiz ateşleme algılandı.',
    severity: 'CRITICAL_STOP',
  },
  {
    code: 'P0420',
    title: 'Katalizör Sistemi Verimliliği Eşik Altında',
    description: 'Katalitik konvertör performansı beklenen düzeyin altında.',
    severity: 'MODERATE_SERVICE_SOON',
  },
  {
    code: 'P0135',
    title: 'Oksijen Sensörü Isıtıcı Devre Arızası',
    description: 'Oksijen sensörü ısıtıcı devresinde tepki alınamıyor.',
    severity: 'MINOR_CHECK_LATER',
  },
];

export default function ObdPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">OBD-II Arıza Kodları</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {obdCodes.map((obd) => {
          const severityColor =
            obd.severity === 'CRITICAL_STOP'
              ? 'bg-red-100 text-red-800 border-red-200'
              : obd.severity === 'MODERATE_SERVICE_SOON'
              ? 'bg-amber-100 text-amber-800 border-amber-200'
              : 'bg-blue-100 text-blue-800 border-blue-200';

          const severityText =
            obd.severity === 'CRITICAL_STOP'
              ? 'Acil / Kritik'
              : obd.severity === 'MODERATE_SERVICE_SOON'
              ? 'Orta Seviye'
              : 'Düşük Seviye';

          return (
            <div
              key={obd.code}
              className="p-5 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xl font-bold text-gray-900">{obd.code}</span>
                <span className={`text-xs px-2.5 py-1 rounded font-medium border ${severityColor}`}>
                  {severityText}
                </span>
              </div>
              <h2 className="text-base font-semibold text-gray-800 mb-2">
                {obd.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {obd.description}
              </p>
              <Link
                href={`/obd/${obd.code.toLowerCase()}`}
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Detayları Gör →
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
