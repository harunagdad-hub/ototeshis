import { FaultDatabase } from "@/types/faultDatabase";

export const faultDatabase: FaultDatabase[] = [
  {
    id: "egr",

    slug: "egr-valfi-kurumlanmasi",

    title: "EGR Valfi Kurumlanması",

    shortDescription:
      "Egzoz gazı devridaim sisteminde kurum birikmesi.",

    category: "Emisyon",

    severity: "Yüksek",

    engineFamilies: [
      "ea288",
      "ea189",
      "ea188",
    ],

    affectedEngines: [
      "1.6 TDI",
      "2.0 TDI",
    ],

    affectedModels: [
      "Golf",
      "Passat",
      "A3",
      "Leon",
      "Octavia",
      "Caddy",
    ],

    obdCodes: [
      "P0401",
      "P0402",
      "P0403",
    ],

    symptoms: [
      "Motor arıza lambası",
      "Çekiş kaybı",
      "Yakıt tüketimi artışı",
      "Siyah duman",
      "Rölanti düzensizliği",
    ],

    causes: [
      "EGR kurumlanması",
      "Vakum kaçağı",
      "EGR motoru arızası",
      "Kalitesiz yakıt",
    ],

    diagnostics: [
      "OBD taraması",
      "Canlı veri kontrolü",
      "EGR adaptasyonu",
      "Vakum testi",
    ],

    solutions: [
      "EGR temizliği",
      "EGR adaptasyonu",
      "Conta değişimi",
      "Gerekirse EGR değişimi",
    ],

    requiredParts: [
      "EGR Valfi",
      "EGR Contası",
      "Vakum Hortumu",
    ],

    preventiveMaintenance: [
      "Kaliteli yakıt kullan",
      "Periyodik bakım yaptır",
      "Ara sıra uzun yol yap",
    ],

    keywords: [
      "çekiş kaybı",
      "motor arıza lambası",
      "yakıt tüketimi",
      "yakıt fazla",
      "siyah duman",
      "rölanti",
      "gaz yemiyor",
      "egzoz",
    ],

    aliases: [
      "egr",
      "egr valfi",
      "egzoz gazı devridaim",
      "egzoz gazı dönüşüm sistemi",
    ],

    priority: 95,

    estimatedCost: {
      min: 6000,
      max: 12000,
      currency: "TRY",
    },

    repairTime: "2-3 Saat",

    difficulty: "Orta",

    relatedFaults: [
      "dpf",
      "maf",
      "turbo",
    ],
  },

  {
    id: "dpf",

    slug: "dpf-tikanmasi",

    title: "DPF (Dizel Partikül Filtresi) Tıkanması",

    shortDescription:
      "Dizel partikül filtresinin kurum nedeniyle dolması ve egzoz akışını kısıtlaması.",

    category: "Emisyon",

    severity: "Yüksek",

    engineFamilies: [
      "ea288",
      "ea189",
      "ea188",
    ],

    affectedEngines: [
      "1.6 TDI",
      "2.0 TDI",
    ],

    affectedModels: [
      "Golf",
      "Passat",
      "A3",
      "Leon",
      "Octavia",
      "Caddy",
    ],

    obdCodes: [
      "P2002",
      "P2463",
      "P2458",
    ],

    symptoms: [
      "DPF lambası",
      "Motor arıza lambası",
      "Performans kaybı",
      "Yakıt tüketiminde artış",
      "Rejenerasyonun sıklaşması",
      "Araç yüksek devirde çalışıyor",
    ],

    causes: [
      "Kısa mesafe kullanımı",
      "Eksik rejenerasyon",
      "Kalitesiz motor yağı",
      "DPF'nin dolması",
    ],

    diagnostics: [
      "OBD taraması",
      "DPF doluluk oranını kontrol et",
      "Egzoz diferansiyel basıncını ölç",
      "Zorunlu rejenerasyon testi",
    ],

    solutions: [
      "Zorunlu rejenerasyon yap",
      "Profesyonel DPF temizliği",
      "Basınç sensörünü kontrol et",
      "Gerekirse DPF değiştir",
    ],

    requiredParts: [
      "DPF",
      "DPF Basınç Sensörü",
      "Egzoz Sıcaklık Sensörü",
    ],

    preventiveMaintenance: [
      "Haftada en az bir kez uzun yol yap",
      "Low SAPS motor yağı kullan",
      "Rejenerasyonu yarıda kesme",
    ],

    keywords: [
      "dpf",
      "partikül filtresi",
      "rejenerasyon",
      "performans kaybı",
      "egzoz",
      "dpf lambası",
      "motor arıza lambası",
    ],

    aliases: [
      "dizel partikül filtresi",
      "partikül filtresi",
      "dpf filtresi",
    ],

    priority: 94,

    estimatedCost: {
      min: 8000,
      max: 25000,
      currency: "TRY",
    },

    repairTime: "3-5 Saat",

    difficulty: "Orta",

    relatedFaults: [
      "egr",
      "turbo",
      "maf",
    ],
    },
{
  id: "maf",

  slug: "maf-sensoru-arizasi",

  title: "MAF Sensörü Arızası",

  shortDescription:
    "Hava akış sensörünün yanlış veri göndermesi sonucu motor performansı düşer.",

  category: "Motor",

  severity: "Orta",

  engineFamilies: [
    "ea288",
    "ea211",
    "ea888",
  ],

  affectedEngines: [
    "1.6 TDI",
    "2.0 TDI",
    "1.4 TSI",
    "2.0 TSI",
  ],

  affectedModels: [
    "Golf",
    "Passat",
    "A3",
    "Leon",
    "Octavia",
  ],

  obdCodes: [
    "P0100",
    "P0101",
    "P0102",
    "P0103",
  ],

  symptoms: [
    "Çekiş kaybı",
    "Rölanti düzensizliği",
    "Yakıt tüketiminde artış",
    "Motor arıza lambası",
    "Gaz yememe",
  ],

  causes: [
    "Kirli sensör",
    "Elektrik bağlantı problemi",
    "Sensör arızası",
  ],

  diagnostics: [
    "OBD taraması",
    "Canlı veri kontrolü",
    "MAF gram/s ölçümü",
  ],

  solutions: [
    "MAF sensörünü temizle",
    "Elektrik tesisatını kontrol et",
    "Sensörü değiştir",
  ],

  requiredParts: [
    "MAF Sensörü",
  ],

  preventiveMaintenance: [
    "Hava filtresini zamanında değiştir",
    "Kaliteli filtre kullan",
  ],

  keywords: [
    "maf",
    "hava akış",
    "hava sensörü",
    "debimetre",
    "çekiş kaybı",
    "motor lambası",
  ],

  aliases: [
    "hava debimetresi",
    "hava akış sensörü",
  ],

  priority: 89,

  estimatedCost: {
    min: 2500,
    max: 9000,
    currency: "TRY",
  },

  repairTime: "30 Dakika",

  difficulty: "Kolay",

  relatedFaults: [
    "egr",
    "turbo",
    "dpf",
  ],
},
{
     id: "turbo",

  slug: "turbo-basinci-dusuk",

  title: "Turbo Basınç Düşüklüğü",

  shortDescription:
    "Turbo sisteminin yeterli basınç üretememesi sonucu performans kaybı oluşur.",

  category: "Turbo",

  severity: "Yüksek",

  engineFamilies: [
    "ea288",
    "ea189",
    "ea211",
    "ea888",
  ],

  affectedEngines: [
    "1.6 TDI",
    "2.0 TDI",
    "1.4 TSI",
    "2.0 TSI",
  ],

  affectedModels: [
    "Golf",
    "Passat",
    "A3",
    "Leon",
    "Octavia",
  ],

  obdCodes: [
    "P0299",
    "P0234",
  ],

  symptoms: [
    "Çekiş kaybı",
    "Turbo sesi",
    "Islık sesi",
    "Motor arıza lambası",
    "Siyah duman",
  ],

  causes: [
    "Turbo aşınması",
    "Vakum kaçağı",
    "Intercooler hortumu",
    "Aktüatör arızası",
  ],

  diagnostics: [
    "Turbo basınç testi",
    "Canlı veri kontrolü",
    "Vakum hattı kontrolü",
  ],

  solutions: [
    "Turbo revizyonu",
    "Vakum kaçağını gider",
    "Aktüatör değişimi",
  ],

  requiredParts: [
    "Turbo",
    "Vakum Hortumu",
    "Intercooler Hortumu",
  ],

  preventiveMaintenance: [
    "Kaliteli motor yağı kullan",
    "Motoru yüksek yükten sonra hemen durdurma",
  ],

  keywords: [
    "turbo",
    "çekiş kaybı",
    "boost",
    "ıslık",
    "basınç",
    "performans",
  ],

  aliases: [
    "turbo arızası",
    "boost hatası",
  ],

  priority: 93,

  estimatedCost: {
    min: 12000,
    max: 45000,
    currency: "TRY",
  },

  repairTime: "5-8 Saat",

  difficulty: "Zor",

  relatedFaults: [
    "egr",
    "dpf",
    "maf",
  ],
}

];