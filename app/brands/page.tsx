import React from 'react';
import Link from 'next/link';
import { brandsDatabase } from '@/data/database/brands';

export default function BrandsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Markaya Göre Kronik Arızalar</h1>
      <p className="text-gray-600 mb-8">Aracınızın markasını seçerek ilgili model ve motor kronik arızalarına ulaşın.</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {brandsDatabase.map((brand) => (
          <Link
            key={brand.id}
            href={`/brands/${brand.slug}`}
            className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-blue-500 transition-all text-center group"
          >
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-700 mb-3 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
              {brand.name.substring(0, 2).toUpperCase()}
            </div>
            <span className="font-semibold text-gray-800 group-hover:text-blue-600">
              {brand.name}
            </span>
            <span className="text-xs text-gray-400 mt-1">
              {brand.models.length} Model
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
