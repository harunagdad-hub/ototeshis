import { Fault } from "@/types/fault";

export const faults: Record<string, Fault[]> = {
  "16-tdi": [
    {
      id: "egr",

      title: "EGR Valfi Kurumlanması",

      description:
        "EGR valfinde kurum birikmesi nedeniyle çekiş kaybı ve motor arıza lambası oluşabilir.",

      severity: "Yüksek",

      symptoms: [
        "Çekiş kaybı",
        "Motor arıza lambası",
        "Yakıt tüketiminde artış",
        "Rölanti düzensizliği",
        "Gaz yememe",
      ],

      causes: [
        "Kurum birikmesi",
        "Kısa mesafe kullanımı",
        "Kalitesiz yakıt",
        "EGR valfinin sıkışması",
      ],

      solutions: [
        "OBD-II hata kodlarını kontrol et",
        "EGR valfini sökerek temizle",
        "Vakum hortumlarını kontrol et",
        "Adaptasyon işlemini yap",
        "Gerekirse EGR valfini değiştir",
      ],

      parts: [
        "EGR Valfi",
        "EGR Contası",
        "Vakum Hortumu",
      ],

      obd: [
        "P0401",
        "P0402",
        "P0403",
      ],

      difficulty: "Orta",

      repairTime: "2-3 Saat",

      prevention: [
        "Kaliteli yakıt kullan",
        "Periyodik bakım yaptır",
        "Ara sıra uzun yol yap",
      ],

      estimatedCost: "6.000 - 12.000 TL",

      engines: ["EA288"],

      tags: [
        "EGR",
        "Emisyon",
        "Dizel",
      ],
    },

    {
      id: "dpf",

      title: "DPF Tıkanması",

      description:
        "Dizel Partikül Filtresinin dolması sonucu performans düşüklüğü oluşur.",

      severity: "Yüksek",

      symptoms: [
        "DPF lambası",
        "Performans kaybı",
        "Yakıt tüketiminde artış",
        "Araç rejenerasyona giriyor",
      ],

      causes: [
        "Kısa mesafe kullanım",
        "Eksik rejenerasyon",
        "Kalitesiz motor yağı",
      ],

      solutions: [
        "Zorunlu rejenerasyon",
        "DPF doluluk oranını ölç",
        "Profesyonel temizlik",
        "Gerekirse değiştir",
      ],

      parts: [
        "DPF",
        "Basınç Sensörü",
      ],

      obd: [
        "P2002",
        "P2463",
      ],

      difficulty: "Orta",

      repairTime: "3 Saat",

      prevention: [
        "Haftada bir uzun yol",
        "Low SAPS motor yağı",
      ],

      estimatedCost: "8.000 - 25.000 TL",

      engines: ["EA288"],

      tags: [
        "DPF",
        "Egzoz",
      ],
    },

    {
      id: "turbo",

      title: "Turbo Basınç Düşüklüğü",

      description:
        "Turbo sisteminde oluşan kaçak veya aktüatör arızası nedeniyle güç kaybı yaşanır.",

      severity: "Yüksek",

      symptoms: [
        "Çekiş kaybı",
        "Islık sesi",
        "Siyah duman",
        "Motor arıza lambası",
      ],

      causes: [
        "Turbo aşınması",
        "Vakum kaçağı",
        "Intercooler hortumu",
      ],

      solutions: [
        "Turbo basıncını ölç",
        "Vakum hattını kontrol et",
        "Turbo boşluğunu kontrol et",
        "Gerekirse turbo revizyonu yap",
      ],

      parts: [
        "Turbo",
        "Vakum Hortumu",
        "Intercooler Hortumu",
      ],

      obd: [
        "P0299",
      ],

      difficulty: "Zor",

      repairTime: "5-7 Saat",

      prevention: [
        "Kaliteli yağ kullan",
        "Turbo soğutmasına dikkat et",
      ],

      estimatedCost: "15.000 - 45.000 TL",

      engines: ["EA288"],

      tags: [
        "Turbo",
      ],
    },
  ],
};