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
      "om651",
      "toyota-diesel",
      "dv6-bluehdi",
      "cdti",
      "crdi",
      "multijet",
    ],

    affectedEngines: [
      "1.6 TDI",
      "2.0 TDI",
      "1.5 dCi",
      "OM651",
      "D-4D",
      "BlueHDi",
      "CDTI",
      "CRDi",
      "MultiJet",
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
      "C Serisi",
      "Corolla",
      "308",
      "Astra",
      "i20",
      "Egea",
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
      "om651",
      "toyota-diesel",
      "dv6-bluehdi",
      "cdti",
      "crdi",
      "multijet",
    ],

    affectedEngines: [
      "1.6 TDI",
      "2.0 TDI",
      "1.5 dCi",
      "OM651",
      "D-4D",
      "BlueHDi",
      "CDTI",
      "CRDi",
      "MultiJet",
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
      "C Serisi",
      "Corolla",
      "308",
      "Astra",
      "i20",
      "Egea",
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
    "om651",
    "cdti",
    "multijet",
  ],

  affectedEngines: [
    "1.6 TDI",
    "2.0 TDI",
    "1.4 TSI",
    "2.0 TSI",
    "1.5 dCi",
    "OM651",
    "CDTI",
    "MultiJet",
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
    "C Serisi",
    "Astra",
    "Egea",
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
    "dv6-bluehdi",
  ],

  affectedEngines: [
    "320d",
    "520d",
    "BlueHDi",
  ],

  affectedModels: [
    "3 Serisi",
    "5 Serisi",
    "1 Serisi",
    "308",
    "208",
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

  title: "Enjektör Arızası (Dizel Common Rail)",

  shortDescription:
    "Yakıt enjektörlerinin aşınması veya tıkanması sonucu motor düzensiz çalışır ve güç kaybı yaşanır.",

  category: "Yakıt",

  severity: "Yüksek",

  engineFamilies: [
    "k9k",
    "om651",
  ],

  affectedEngines: [
    "1.5 dCi",
    "OM651",
  ],

  affectedModels: [
    "Clio",
    "Megane",
    "Captur",
    "Duster",
    "C Serisi",
    "E Serisi",
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
},

{
  id: "timing-chain-mb",

  slug: "m270-zincir-kam-ayari-arizasi",

  title: "Zincir Gerdiricisi ve Kam Ayarlayıcı Arızası (M270/M274)",

  shortDescription:
    "Zincir gerdiricisinin yağ basıncını kaybetmesi ve kam mili ayarlayıcılarının aşınması motor titremesine ve zamanlama hatasına yol açar.",

  category: "Motor",

  severity: "Yüksek",

  engineFamilies: [
    "m270-m274",
  ],

  affectedEngines: [
    "M270",
    "M274",
  ],

  affectedModels: [
    "C Serisi",
    "E Serisi",
    "A Serisi",
    "GLA",
  ],

  obdCodes: [
    "P001685",
    "P0016",
  ],

  symptoms: [
    "Soğuk startta metalik tıkırtı sesi",
    "Motor arıza lambası",
    "Uzun çalıştırma süresi (crank)",
    "Rölantide titreşim",
  ],

  causes: [
    "Hidrolik zincir gerdiricisinin gece boyunca yağ basıncını kaybetmesi",
    "Kam mili ayarlayıcı (tone ring) aşınması",
    "Düzensiz yağ değişimi",
  ],

  diagnostics: [
    "OBD taraması (P001685 kontrolü)",
    "Zincir gerginlik kontrolü",
    "Kam/krank senkronizasyon testi",
  ],

  solutions: [
    "Zincir, gerdirici ve kılavuz setinin komple değişimi",
    "Kam mili ayarlayıcı (solenoid) değişimi",
    "Gerekirse kam mili değişimi",
  ],

  requiredParts: [
    "Timing Zinciri",
    "Zincir Gerdiricisi",
    "Kam Mili Ayarlayıcı Solenoidi",
  ],

  preventiveMaintenance: [
    "Üreticinin onayladığı (MB-approved) yağı kullan",
    "Yağ değişimlerini asla geciktirme",
    "Soğuk startta ilk saniyelerdeki sesi ciddiye al",
  ],

  keywords: [
    "zincir",
    "m270",
    "m274",
    "tıkırtı sesi",
    "kam ayarlayıcı",
    "p001685",
  ],

  aliases: [
    "zincir gerdiricisi arızası",
    "kam ayarlayıcı arızası",
    "m274 zincir sorunu",
  ],

  priority: 95,

  estimatedCost: {
    min: 12000,
    max: 35000,
    currency: "TRY",
  },

  repairTime: "5-8 Saat",

  difficulty: "Zor",

  relatedFaults: [
    "timing-chain-thp",
  ],
},

{
  id: "timing-chain-thp",

  slug: "ep6-thp-zincir-gerdirici-arizasi",

  title: "Zincir Gerdiricisi Arızası (EP6/THP)",

  shortDescription:
    "Hidrolik zincir gerdiricisinin gece boyunca basıncını kaybetmesi, zincirin gevşemesine ve zamanla uzamasına yol açar.",

  category: "Motor",

  severity: "Yüksek",

  engineFamilies: [
    "ep6-thp",
  ],

  affectedEngines: [
    "1.6 THP",
    "EP6",
  ],

  affectedModels: [
    "308",
    "208",
    "3008",
    "508",
  ],

  obdCodes: [
    "P0016",
    "P0017",
  ],

  symptoms: [
    "Soğuk startta zincir sesi (birkaç saniye sonra kaybolur)",
    "Motor arıza lambası",
    "Yakıt tüketiminde artış",
    "Güç kaybı ve sarsıntı",
  ],

  causes: [
    "Hidrolik gerdiricinin gece boyunca yağını boşaltması",
    "Zincirin zamanla uzaması (özellikle 2012 öncesi üretim)",
    "Düzensiz yağ değişimi",
  ],

  diagnostics: [
    "Soğuk start sesi kontrolü",
    "OBD taraması (P0016/P0017)",
    "Uzun vadeli yakıt trim (LTFT) kontrolü",
  ],

  solutions: [
    "Güncellenmiş zincir kiti (kılavuz, gerdirici, zincir) ile komple değişim",
    "Kam/krank dişlisi aşınmışsa değişim",
  ],

  requiredParts: [
    "Timing Zinciri",
    "Zincir Gerdiricisi",
    "Zincir Kılavuzları",
  ],

  preventiveMaintenance: [
    "5W-30 önerilen yağı düzenli değiştir",
    "Soğuk startta motoru hemen yüksek devirde zorlama",
  ],

  keywords: [
    "thp",
    "ep6",
    "zincir",
    "prince motor",
    "gerdirici",
  ],

  aliases: [
    "thp zincir arızası",
    "ep6 zincir gerdirici sorunu",
    "prince motor zincir sorunu",
  ],

  priority: 94,

  estimatedCost: {
    min: 9000,
    max: 25000,
    currency: "TRY",
  },

  repairTime: "4-6 Saat",

  difficulty: "Zor",

  relatedFaults: [
    "timing-chain-mb",
  ],
},

{
  id: "oil-consumption",

  slug: "toyota-yag-tuketimi-piston-segmani",

  title: "Aşırı Yağ Tüketimi (Piston Segmanı)",

  shortDescription:
    "Piston segmanlarının tasarımı kaynaklı yağı yakması sonucu motor yağ seviyesi beklenenden hızlı düşer.",

  category: "Motor",

  severity: "Orta",

  engineFamilies: [
    "toyota-petrol",
  ],

  affectedEngines: [
    "1ZR-FE",
    "2ZR-FE",
  ],

  affectedModels: [
    "Corolla",
    "Yaris",
    "Auris",
  ],

  obdCodes: [
    "P0300",
    "P0171",
  ],

  symptoms: [
    "Yağ seviyesinin normalden hızlı düşmesi",
    "Egzozdan hafif mavi duman",
    "Yağ seviyesi uyarı lambası",
    "Bazı durumlarda misfire",
  ],

  causes: [
    "Piston segmanlarının yağ sıyırma performansının yetersizliği",
    "Kısa mesafe kullanımına bağlı karbon birikimi",
    "Motorun optimum çalışma sıcaklığına ulaşamaması",
  ],

  diagnostics: [
    "Yağ tüketim testi (üretici prosedürüne göre)",
    "Kompresyon testi",
    "Boroskopla silindir içi görsel kontrol",
  ],

  solutions: [
    "Güncellenmiş piston segman setiyle değişim (ağır vakalarda)",
    "Düzenli otoyol sürüşü ile karbon temizliği",
    "Yağ seviyesinin sık kontrolü ve gerektiğinde takviye",
  ],

  requiredParts: [
    "Piston Segman Seti",
    "Motor Yağı",
  ],

  preventiveMaintenance: [
    "Yağ seviyesini her 1000 km'de bir kontrol et",
    "Ara sıra uzun/otoyol sürüşü yap",
    "Üreticinin önerdiği yağ tipini kullan",
  ],

  keywords: [
    "yağ tüketimi",
    "segman",
    "mavi duman",
    "1zr",
    "2zr",
  ],

  aliases: [
    "yağ yakma",
    "piston segmanı arızası",
    "aşırı yağ tüketimi",
  ],

  priority: 82,

  estimatedCost: {
    min: 8000,
    max: 30000,
    currency: "TRY",
  },

  repairTime: "8-12 Saat",

  difficulty: "Zor",

  relatedFaults: [],
},

{
  id: "water-pump",

  slug: "devir-daim-su-pompasi-arizasi",

  title: "Devir Daim (Su Pompası) Arızası",

  shortDescription:
    "Su pompası ve termostat muhafazasındaki plastik gövdenin ısı çevrimleriyle çatlaması sonucu soğutucu sıvı sızıntısı ve aşırı ısınma oluşur.",

  category: "Soğutma",

  severity: "Yüksek",

  engineFamilies: [
    "ea211",
    "ea288",
    "ea888-gen3",
  ],

  affectedEngines: [
    "1.4 TSI",
    "1.5 TSI",
    "2.0 TDI",
    "2.0 TSI",
  ],

  affectedModels: [
    "Golf",
    "Passat",
    "A3",
    "A4",
    "T-Roc",
    "Q3",
  ],

  obdCodes: [
    "P0217",
    "P0128",
  ],

  symptoms: [
    "Soğutucu sıvı seviyesinin günler içinde yavaşça düşmesi",
    "Aralıklı düşük soğutucu sıvı uyarısı",
    "Motor önünde tatlımsı soğutucu sıvı kokusu",
    "Su pompası çevresinde pembe/turuncu leke",
    "Aşırı ısınma göstergesi",
  ],

  causes: [
    "Su pompası ve termostat muhafazasının plastik gövdesinin tekrarlanan ısı çevrimleriyle çatlaması",
    "Conta ve contaların zamanla sertleşip sızdırması",
    "Elektrikli pompa motorunun yıpranması",
  ],

  diagnostics: [
    "Soğutma sistemi basınç testi",
    "Pompa/termostat gövdesi çevresinde görsel sızıntı kontrolü",
    "OBD taraması (P0217/P0128 kontrolü)",
  ],

  solutions: [
    "Su pompası + termostat muhafazasının güncellenmiş komple kit ile değişimi",
    "Soğutma sistemini boşaltıp doldurma ve havasını alma",
  ],

  requiredParts: [
    "Su Pompası",
    "Termostat Muhafazası",
    "Soğutucu Sıvı",
  ],

  preventiveMaintenance: [
    "Soğutucu sıvı seviyesini düzenli kontrol et",
    "Düşük soğutucu sıvı uyarısını asla görmezden gelme",
    "60-80.000 km civarında güncellenmiş gövde kitiyle önleyici değişim düşün",
  ],

  keywords: [
    "devir daim",
    "su pompası",
    "soğutucu sıvı kaçağı",
    "aşırı ısınma",
    "termostat",
  ],

  aliases: [
    "devir daim arızası",
    "su pompası arızası",
    "soğutma sistemi kaçağı",
  ],

  priority: 93,

  estimatedCost: {
    min: 4000,
    max: 15000,
    currency: "TRY",
  },

  repairTime: "2-4 Saat",

  difficulty: "Orta",

  relatedFaults: [
    "carbon-build-up",
  ],
},

{
  id: "carbon-build-up",

  slug: "emme-supabi-karbon-birikimi",

  title: "Emme Supabı Karbon Birikimi (TSI)",

  shortDescription:
    "Direkt enjeksiyonlu TSI motorlarda yakıtın emme supaplarını yıkamaması sonucu zamanla karbon birikip hava akışını kısıtlar.",

  category: "Motor",

  severity: "Orta",

  engineFamilies: [
    "ea211",
    "ea888-gen3",
  ],

  affectedEngines: [
    "1.4 TSI",
    "2.0 TSI",
    "2.0 TSI GTI",
  ],

  affectedModels: [
    "Golf",
    "A3",
    "T-Roc",
    "Q3",
  ],

  obdCodes: [
    "P0300",
    "P0301",
  ],

  symptoms: [
    "Özellikle soğuk startta rölanti sarsıntısı",
    "Gaza basınca tereddüt/duraksama",
    "Güç kaybı hissi",
    "Aralıklı misfire (ateşleme boşluğu) kodları",
    "Yakıt tüketiminde artış",
  ],

  causes: [
    "Direkt enjeksiyonda yakıtın emme supaplarının arkasından hiç geçmemesi (yıkama etkisi olmaması)",
    "Karter havalandırma (PCV) sisteminden gelen yağ buharının supaplara yapışıp sertleşmesi",
    "Kısa mesafe/şehir içi kullanımın birikimi hızlandırması",
  ],

  diagnostics: [
    "Boroskop ile emme supaplarının görsel kontrolü",
    "Silindir denge/kompresyon testi",
    "OBD taraması (misfire kodları)",
  ],

  solutions: [
    "Ceviz kabuğu (walnut blasting) ile supap temizliği",
    "Emme manifoldu sökülerek manuel karbon temizliği",
  ],

  requiredParts: [
    "Emme Manifoldu Contası",
  ],

  preventiveMaintenance: [
    "Sadece kısa mesafe kullanmaktan kaçın, ara sıra otoyolda yüksek devir yaptır",
    "60-80.000 km'de önleyici emme supabı temizliği yaptır",
    "Düzenli yağ değişimi ile PCV sisteminden gelen yağ buharını azalt",
  ],

  keywords: [
    "karbon birikimi",
    "tsi",
    "direkt enjeksiyon",
    "rölanti sarsıntısı",
    "misfire",
  ],

  aliases: [
    "emme supabı kirlenmesi",
    "karbon temizliği",
    "valve karbonlanması",
  ],

  priority: 78,

  estimatedCost: {
    min: 3000,
    max: 8000,
    currency: "TRY",
  },

  repairTime: "3-5 Saat",

  difficulty: "Orta",

  relatedFaults: [
    "water-pump",
  ],
}

];
