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
      "k9k",
    ],

    affectedEngines: [
      "1.6 TDI",
      "2.0 TDI",
      "1.5 dCi",
    ],

    affectedModels: [
      "Golf",
      "Passat",
      "A3",
      "A4",
      "Leon",
      "Octavia",
      "Caddy",
      "Clio",
      "Megane",
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
      "k9k",
    ],

    affectedEngines: [
      "1.6 TDI",
      "2.0 TDI",
      "1.5 dCi",
    ],

    affectedModels: [
      "Golf",
      "Passat",
      "A3",
      "A4",
      "Leon",
      "Octavia",
      "Caddy",
      "Clio",
      "Megane",
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
    "A4",
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
    "k9k",
  ],

  affectedEngines: [
    "1.6 TDI",
    "2.0 TDI",
    "1.4 TSI",
    "2.0 TSI",
    "1.5 dCi",
  ],

  affectedModels: [
    "Golf",
    "Passat",
    "A3",
    "A4",
    "Leon",
    "Octavia",
    "Clio",
    "Megane",
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
},
];
{
  id: "timing-chain",

  slug: "n47-zincir-kilavuzu-arizasi",

  title: "Zincir Kılavuzu (Timing Chain) Arızası",

  shortDescription:
    "Triger zincirinin gerginliğini kaybetmesi veya kılavuzların aşınması sonucu motor ciddi hasar görebilir.",

  category: "Motor",

  severity: "Yüksek",

  engineFamilies: [
    "n47",
    "n20",
  ],

  affectedEngines: [
    "320d",
    "520d",
    "320i",
    "528i",
  ],

  affectedModels: [
    "3 Serisi",
    "5 Serisi",
    "1 Serisi",
    "X1",
  ],

  obdCodes: [
    "P0016",
    "P0017",
  ],

  symptoms: [
    "Soğuk startta metalik tıkırtı sesi",
    "Motor arıza lambası",
    "Rölantide titreşim",
    "Ani güç kaybı",
  ],

  causes: [
    "Zincir kılavuzlarının plastik aşınması",
    "Zincir gerdiricisinin zayıflaması",
    "Düzensiz yağ değişimi",
  ],

  diagnostics: [
    "OBD taraması",
    "Zincir gerginlik kontrolü",
    "Triger kapağı sökülerek görsel kontrol",
  ],

  solutions: [
    "Zincir ve kılavuz setinin komple değişimi",
    "Gerdiricinin yenilenmesi",
    "Motor zamanlamasının yeniden ayarlanması",
  ],

  requiredParts: [
    "Timing Zinciri",
    "Zincir Kılavuzları",
    "Gerdirici",
  ],

  preventiveMaintenance: [
    "Yağ değişimlerini asla geciktirme",
    "Üreticinin önerdiği yağ viskozitesini kullan",
    "Erken uyarı seslerini ciddiye al",
  ],

  keywords: [
    "zincir",
    "timing chain",
    "tıkırtı sesi",
    "n47",
    "metalik ses",
  ],

  aliases: [
    "zincir kılavuzu arızası",
    "triger zinciri arızası",
    "n47 zincir sorunu",
  ],

  priority: 97,

  estimatedCost: {
    min: 15000,
    max: 40000,
    currency: "TRY",
  },

  repairTime: "6-10 Saat",

  difficulty: "Zor",

  relatedFaults: [
    "vanos",
  ],
},

{
  id: "swirl-flap",

  slug: "emme-manifoldu-kelebek-arizasi",

  title: "Emme Manifoldu Kelebek (Swirl Flap) Arızası",

  shortDescription:
    "Emme manifoldundaki hava yönlendirme kelebeklerinin kırılıp motor içine düşmesi ciddi hasara yol açabilir.",

  category: "Motor",

  severity: "Yüksek",

  engineFamilies: [
    "n47",
    "b47",
  ],

  affectedEngines: [
    "320d",
    "520d",
  ],

  affectedModels: [
    "3 Serisi",
    "5 Serisi",
    "1 Serisi",
  ],

  obdCodes: [
    "P2004",
    "P2015",
  ],

  symptoms: [
    "Rölantide düzensizlik",
    "Motor arıza lambası",
    "Çekiş kaybı",
    "Anormal emme sesi",
  ],

  causes: [
    "Plastik kelebeklerin zamanla kırılganlaşması",
    "Kelebek milinin aşınması",
    "Yaş ve kilometreye bağlı yorulma",
  ],

  diagnostics: [
    "Emme manifoldunun sökülerek kontrolü",
    "Endoskopla görsel muayene",
    "Canlı veri kontrolü",
  ],

  solutions: [
    "Kelebeksiz (delete) manifold ile değişim",
    "Orijinal manifold değişimi",
  ],

  requiredParts: [
    "Emme Manifoldu",
    "Contalar",
  ],

  preventiveMaintenance: [
    "Belirli kilometrede önleyici manifold değişimi",
    "Anormal ses/titreşimi ciddiye al",
  ],

  keywords: [
    "swirl flap",
    "kelebek",
    "emme manifoldu",
    "n47",
    "motor içine düşme",
  ],

  aliases: [
    "swirl flap arızası",
    "emme kelebeği kırılması",
  ],

  priority: 90,

  estimatedCost: {
    min: 8000,
    max: 20000,
    currency: "TRY",
  },

  repairTime: "3-5 Saat",

  difficulty: "Orta",

  relatedFaults: [
    "timing-chain",
    "egr",
  ],
},

{
  id: "vanos",

  slug: "vanos-solenoid-arizasi",

  title: "VANOS Solenoid Arızası",

  shortDescription:
    "Değişken supap zamanlama sisteminin (VANOS) solenoid valfinde oluşan arıza performans kaybına yol açar.",

  category: "Motor",

  severity: "Orta",

  engineFamilies: [
    "n20",
    "n47",
  ],

  affectedEngines: [
    "320i",
    "528i",
  ],

  affectedModels: [
    "3 Serisi",
    "5 Serisi",
    "1 Serisi",
  ],

  obdCodes: [
    "P0011",
    "P0021",
  ],

  symptoms: [
    "Rölantide düşük tork hissi",
    "Motor arıza lambası",
    "Çalışırken sarsıntı",
    "Devir yükselirken gecikme",
  ],

  causes: [
    "VANOS solenoid filtresinin tıkanması",
    "Solenoid contalarının aşınması",
    "Düşük yağ kalitesi/seviyesi",
  ],

  diagnostics: [
    "OBD taraması",
    "VANOS test modu ile kontrol",
    "Yağ basıncı testi",
  ],

  solutions: [
    "VANOS solenoid temizliği",
    "Solenoid ve conta değişimi",
    "Yağ ve filtre değişimi",
  ],

  requiredParts: [
    "VANOS Solenoidi",
    "Contalar",
  ],

  preventiveMaintenance: [
    "Düzenli yağ değişimi",
    "Kaliteli motor yağı kullan",
  ],

  keywords: [
    "vanos",
    "supap zamanlama",
    "solenoid",
    "tork kaybı",
  ],

  aliases: [
    "vanos arızası",
    "vanos solenoid hatası",
  ],

  priority: 85,

  estimatedCost: {
    min: 4000,
    max: 12000,
    currency: "TRY",
  },

  repairTime: "2-4 Saat",

  difficulty: "Orta",

  relatedFaults: [
    "timing-chain",
  ],
},

{
  id: "injector",

  slug: "k9k-enjektor-arizasi",

  title: "Enjektör Arızası (K9K 1.5 dCi)",

  shortDescription:
    "Yakıt enjektörlerinin aşınması veya tıkanması sonucu motor düzensiz çalışır ve güç kaybı yaşanır.",

  category: "Yakıt",

  severity: "Yüksek",

  engineFamilies: [
    "k9k",
  ],

  affectedEngines: [
    "1.5 dCi",
  ],

  affectedModels: [
    "Clio",
    "Megane",
    "Captur",
    "Duster",
  ],

  obdCodes: [
    "P0201",
    "P0263",
    "P0266",
  ],

  symptoms: [
    "Soğuk startta zor çalışma",
    "Rölantide titreşim ve düzensizlik",
    "Egzozdan beyaz/siyah duman",
    "Motor arıza lambası",
    "Yakıt tüketiminde belirgin artış",
  ],

  causes: [
    "Düşük kaliteli yakıt kullanımı",
    "Enjektör iğnesinin aşınması",
    "Enjektör contalarının sertleşmesi",
    "Yüksek kilometreye bağlı yorulma",
  ],

  diagnostics: [
    "OBD taraması",
    "Enjektör geri dönüş debisi testi",
    "Silindir denge testi",
    "Enjektör direnç ölçümü",
  ],

  solutions: [
    "Enjektör temizliği (ultrasonik)",
    "Arızalı enjektörün değişimi",
    "Enjektör contalarının yenilenmesi",
    "Yakıt filtresinin değişimi",
  ],

  requiredParts: [
    "Enjektör",
    "Enjektör Contası",
    "Yakıt Filtresi",
  ],

  preventiveMaintenance: [
    "Güvenilir istasyonlardan yakıt al",
    "Yakıt filtresini zamanında değiştir",
    "Depoyu sık sık iyice boşaltma",
  ],

  keywords: [
    "enjektör",
    "injector",
    "k9k",
    "dci",
    "beyaz duman",
    "güç kaybı",
    "titreşim",
  ],

  aliases: [
    "enjektör arızası",
    "yakıt enjektörü hatası",
    "dci enjektör sorunu",
  ],

  priority: 92,

  estimatedCost: {
    min: 3500,
    max: 15000,
    currency: "TRY",
  },

  repairTime: "2-4 Saat",

  difficulty: "Orta",

  relatedFaults: [
    "egr",
    "turbo",
  ],
},
{
  id: "coolant-leak",

  slug: "ecoboost-silindir-kapagi-catlamasi",

  title: "Silindir Kapağı Çatlaması / Soğutucu Sıvı Kaçağı (EcoBoost)",

  shortDescription:
    "Soğutma sistemindeki tasarım kaynaklı sızıntı, silindir kapağının çatlamasına ve motorun aşırı ısınmasına yol açar.",

  category: "Soğutma",

  severity: "Yüksek",

  engineFamilies: [
    "ecoboost",
  ],

  affectedEngines: [
    "1.0 EcoBoost",
  ],

  affectedModels: [
    "Fiesta",
    "Focus",
    "EcoSport",
    "Kuga",
  ],

  obdCodes: [
    "P1299",
    "P0217",
  ],

  symptoms: [
    "Soğutucu sıvı seviyesinin sürekli düşmesi",
    "Egzozdan beyaz duman",
    "Aşırı ısınma uyarısı",
    "Ani güç kaybı",
    "Motor arıza lambası",
  ],

  causes: [
    "Erken dönem degas (genleşme) hortumunun kırılganlaşması",
    "Termostat gövdesindeki tasarım hatası",
    "Silindir kapağındaki soğutma kanallarına sıvı sızması",
  ],

  diagnostics: [
    "Soğutma sistemi basınç testi",
    "OBD taraması (P1299/P0217 kontrolü)",
    "Silindir kapağı düzlük/çatlak kontrolü",
  ],

  solutions: [
    "Degas hortumu ve termostat gövdesinin yenilenmesi",
    "Çatlak tespit edilirse silindir kapağı değişimi (yeni kapak cıvataları ve contayla)",
    "Triger kayışı, su pompası ve termostatın aynı anda yenilenmesi",
  ],

  requiredParts: [
    "Silindir Kapağı",
    "Kapak Contası",
    "Degas Hortumu",
    "Termostat",
  ],

  preventiveMaintenance: [
    "Soğutucu sıvı seviyesini düzenli kontrol et",
    "İlk uyarı belirtisinde aracı sürmeye devam etme",
    "Üreticinin güncellenmiş parçalarıyla erken değişim yaptır",
  ],

  keywords: [
    "ecoboost",
    "silindir kapağı",
    "soğutucu sıvı",
    "aşırı ısınma",
    "beyaz duman",
    "coolant",
  ],

  aliases: [
    "silindir kapağı çatlaması",
    "ecoboost soğutucu kaçağı",
    "kafa çatlaması",
  ],

  priority: 91,

  estimatedCost: {
    min: 10000,
    max: 35000,
    currency: "TRY",
  },

  repairTime: "5-8 Saat",

  difficulty: "Zor",

  relatedFaults: [
    "turbo",
  ],
},

{
  id: "wet-belt",

  slug: "ecoblue-yag-banyolu-kayis-parcalanmasi",

  title: "Yağ Banyolu Kayış (Wet Belt) Parçalanması",

  shortDescription:
    "Yağ içinde çalışan triger kayışının zamanla parçalanıp yağ sistemini tıkaması, ciddi motor hasarına yol açar.",

  category: "Motor",

  severity: "Yüksek",

  engineFamilies: [
    "ecoblue",
  ],

  affectedEngines: [
    "1.5 EcoBlue",
    "2.0 EcoBlue",
  ],

  affectedModels: [
    "Focus",
    "Fiesta",
    "Kuga",
    "Mondeo",
    "Transit",
  ],

  obdCodes: [
    "P0016",
    "P0521",
  ],

  symptoms: [
    "Yağ basıncı uyarı lambası",
    "Rölantide düzensizlik",
    "Metalik ses",
    "Ani motor durması",
    "Çalıştırma zorluğu",
  ],

  causes: [
    "Yakıt seyrelmesi ve kurumun yağı kirletmesi",
    "Yağ değişim aralığının aşılması",
    "Kayış malzemesinin yağ içinde zamanla çözülmesi",
  ],

  diagnostics: [
    "Yağ filtresinde kayış parçacığı kontrolü",
    "Yağ basıncı testi",
    "OBD taraması",
    "Triger kapağı açılarak görsel kontrol",
  ],

  solutions: [
    "Kayışın önleyici olarak zamanında değiştirilmesi (üretici güncellemesine göre 6 yıl/100.000 km)",
    "Yağ sistemi komple temizliği (kayış parçacığı varsa)",
    "Yağ pompası süzgecinin kontrolü",
  ],

  requiredParts: [
    "Triger Kayışı (Yağ Banyolu)",
    "Gerdirici",
    "Motor Yağı ve Filtresi",
  ],

  preventiveMaintenance: [
    "Yağ değişimlerini asla geciktirme",
    "Üreticinin güncellenmiş kayış değişim aralığına uy",
    "Kısa mesafe kullanımını sınırla (yakıt seyrelmesini azaltır)",
  ],

  keywords: [
    "wet belt",
    "yağ banyolu kayış",
    "triger kayışı",
    "ecoblue",
    "yağ basıncı",
  ],

  aliases: [
    "wet belt arızası",
    "yağlı kayış parçalanması",
    "ecoblue triger sorunu",
  ],

  priority: 96,

  estimatedCost: {
    min: 6000,
    max: 50000,
    currency: "TRY",
  },

  repairTime: "4-6 Saat",

  difficulty: "Zor",

  relatedFaults: [
    "egr",
    "dpf",
  ],
}

];
