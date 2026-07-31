import { faultDatabase, FaultDatabase } from '@/data/database/faultDatabase';

function normalize(text: string): string {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/ı/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c');
}

export interface SearchResult {
  item: FaultDatabase;
  score: number;
}

export function searchFaults(query: string): FaultDatabase[] {
  if (!query || query.trim() === '') {
    return [];
  }

  const q = normalize(query.trim());

  const results: SearchResult[] = faultDatabase
    .map((item: FaultDatabase) => {
      let score = 0;

      if (normalize(item.title).includes(q)) score += 100;
      if (normalize(item.category).includes(q)) score += 60;
      if (item.shortDescription && normalize(item.shortDescription).includes(q)) score += 40;

      if (item.aliases && Array.isArray(item.aliases)) {
        item.aliases.forEach((alias: string) => {
          if (normalize(alias).includes(q)) score += 80;
        });
      }

      return { item, score };
    })
    .filter((result: SearchResult) => result.score > 0)
    .sort((a: SearchResult, b: SearchResult) => b.score - a.score);

  return results.map((result: SearchResult) => result.item);
}

// Varsayılan export ve genel arama alias'ı ekliyoruz
export const search = searchFaults;
export default searchFaults;
