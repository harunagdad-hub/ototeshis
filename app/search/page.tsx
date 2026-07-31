'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { searchFaults } from '@/lib/search';
import { FaultDatabase } from '@/data/database/faultDatabase';

function SearchContent() {
  const searchParams = useSearchParams();
  const queryParam = searchParams.get('q') || '';
  const [query, setQuery] = useState(queryParam);
  const [results, setResults] = useState<FaultDatabase[]>([]);

  useEffect(() => {
    setQuery(queryParam);
    if (queryParam) {
      const res = searchFaults(queryParam);
      setResults(res);
    } else {
      setResults([]);
    }
  }, [queryParam]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(query.trim())}`;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Arama Sonuçları</h1>

      <form onSubmit={handleSearch} className="mb-8 flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Arıza veya kod ara (ör. Titreme, P0300)..."
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Ara
        </button>
      </form>

      {queryParam && (
        <p className="text-sm text-gray-500 mb-6">
          &quot;{queryParam}&quot; araması için {results.length} sonuç bulundu.
        </p>
      )}

      <div className="space-y-4">
        {results.map((fault) => (
          <div key={fault.slug} className="p-5 bg-white border border-gray-200 rounded-lg shadow-sm">
            <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded font-medium mb-2 inline-block">
              {fault.category}
            </span>
            <h2 className="text-xl font-bold text-gray-900 mb-1">
              <Link href={`/faults/${fault.slug}`} className="hover:underline">
                {fault.title}
              </Link>
            </h2>
            <p className="text-gray-600 text-sm mb-3">{fault.shortDescription}</p>
            <Link
              href={`/faults/${fault.slug}`}
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              Detayları İncele →
            </Link>
          </div>
        ))}

        {queryParam && results.length === 0 && (
          <div className="p-8 text-center text-gray-500 bg-gray-50 rounded-lg border border-gray-200">
            Aramanızla eşleşen herhangi bir arıza kaydı bulunamadı.
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-8">Yükleniyor...</div>}>
      <SearchContent />
    </Suspense>
  );
}
