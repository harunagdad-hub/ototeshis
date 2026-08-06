// Gerçek marka logosu dosyalarımız olmadığı için (ve telif hakkı
// risklerinden kaçınmak için) her markaya kendi temamıza uygun,
// ayırt edici bir kısa rozet (monogram) atıyoruz. Bu dosya BrandGrid,
// /brands sayfası ve kategori görünümü arasında paylaşılır.
export const BRAND_MONOGRAMS: Record<string, string> = {
  volkswagen: "VW",
  audi: "AU",
  seat: "SE",
  skoda: "ŠK",
  bmw: "BMW",
  renault: "RN",
  ford: "FD",
  mercedes: "MB",
  toyota: "TY",
  peugeot: "PG",
  opel: "OP",
  hyundai: "HY",
  fiat: "FT",
};

export function getMonogram(brandId: string, fallbackName: string): string {
  return BRAND_MONOGRAMS[brandId] ?? fallbackName.slice(0, 2).toUpperCase();
}
