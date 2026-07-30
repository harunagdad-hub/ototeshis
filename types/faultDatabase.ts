export interface FaultDatabase {
  id: string;

  slug: string;

  title: string;

  shortDescription: string;

  category:
    | "Motor"
    | "Turbo"
    | "Yakıt"
    | "Elektrik"
    | "Emisyon"
    | "Soğutma"
    | "Şanzıman";

  severity:
    | "Düşük"
    | "Orta"
    | "Yüksek";

  engineFamilies: string[];

  affectedEngines: string[];

  affectedModels: string[];

  obdCodes: string[];

  symptoms: string[];

  causes: string[];

  diagnostics: string[];

  solutions: string[];

  requiredParts: string[];

  preventiveMaintenance: string[];

  // Aramada kullanılacak kelimeler
  keywords: string[];

  // Alternatif isimler
  aliases: string[];

  // Arama önceliği (0-100)
  priority: number;

  // Bu arızanın sık görüldüğü araçlar
  commonVehicles?: string[];

  // Üretici servis bültenleri
  tsb?: string[];

  // Kaynaklar
  references?: string[];

  // Tahmini maliyet
  estimatedCost: {
    min: number;
    max: number;
    currency: "TRY";
  };

  repairTime: string;

  difficulty:
    | "Kolay"
    | "Orta"
    | "Zor";

  // Benzer arızalar
  relatedFaults: string[];
}