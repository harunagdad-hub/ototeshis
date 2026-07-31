export interface FaultDatabase {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  symptoms: string[];       // Belirtiler
  obdCodes: string[];       // OBD-II Arıza Kodları
  engineFamilies: string[]; // İlgili motor aileleri
  severity: 'CRITICAL_STOP' | 'MODERATE_SERVICE_SOON' | 'MINOR_CHECK_LATER';
  aliases?: string[];
  solutionSummary: string;
}

export const faultDatabase: FaultDatabase[] = [
  // --- VOLKSWAGEN / AUDI / SEAT / SKODA (VAG) ---
  {
    slug: 'vag-16-tdi-dpf-egr-tikanikligi',
    title: '1.6 TDI DPF ve EGR Valfi Tıkanıklığı',
    category: 'VAG Group (1.6 TDI - EA288 / EA189)',
    shortDescription: 'Şehir içi kısa mesafe kullanımında DPF dolması ve EGR valfinde aşırı kurum birikmesi.',
    symptoms: [
      'Motor arıza lambası ve DPF (partikül filtresi) ışığının yanması',
      'Aracın çekişten düşmesi ve koruma moduna (Limp Mode) geçmesi',
      'Rölantide yüksek devirde çalışma ve yakıt tüketiminde artış',
      'Egzozdan siyah veya koyu renk duman gelmesi'
    ],
    obdCodes: ['P2463', 'P0401', 'P2002', 'P0403'],
    engineFamilies: ['VAG_16_TDI'],
    severity: 'MODERATE_SERVICE_SOON',
    aliases: ['dpf tıkandı', 'egr arızası', '1.6 tdi çekiş düşüklüğü', 'partikül filtresi'],
    solutionSummary: 'EGR valfi temizliği/değişimi, DPF rejenerasyonu veya profesyonel kimyasal temizlik.'
  },
  {
    slug: 'vag-14-tsi-zincir-uzamasi-sent kaymasi',
    title: '1.4 TSI Triger Zincir Uzaması ve Sente Kayması',
    category: 'VAG Group (1.4 TSI EA111)',
    shortDescription: 'Eski nesil 1.4 TSI motorlarda triger zincirinin esnemesi sonucu sente kayması ve motorda hasar riski.',
    symptoms: [
      'İlk soğuk çalıştırmada (özellikle sabahları) motordan gelen metalik şıngırtı/tıkırtı sesi',
      'Rölantide sarsıntılı çalışma ve tekleme',
      'Motor arıza lambasının yanması'
    ],
    obdCodes: ['P0016', 'P0300', 'P0301', 'P0302'],
    engineFamilies: ['VAG_14_TSI'],
    severity: 'CRITICAL_STOP',
    aliases: ['tsi zincir sesi', 'triger zinciri uzaması', '1.4 tsi tıkırtı'],
    solutionSummary: 'Triger zincir seti, gergiler ve vanos dişlilerinin yetkili serviste revize set ile değiştirilmesi.'
  },

  // --- BMW ---
  {
    slug: 'bmw-n13-yag-sogutucu-ve-termostat-arizasi',
    title: 'BMW N13 Motor Yağ Soğutucu ve Termostat Arızası',
    category: 'BMW (320i ED / 116i - N13B16)',
    shortDescription: 'Yüksek çalışma sıcaklığı nedeniyle yağ soğutucu contalarının çürümesi ve soğutma sıvısına yağ karışması.',
    symptoms: [
      'Genişleme kutusunda (yedek su deposu) çamurumsu yağ kalıntıları',
      'Motor su seviyesi uyarısı ve aşırı ısınma (hararet) eğilimi',
      'Termostatın açık/kapalı kalması sonucu kaloriferin ısıtmaması'
    ],
    obdCodes: ['P0597', 'P0128', 'P0234'],
    engineFamilies: ['BMW_N13'],
    severity: 'CRITICAL_STOP',
    aliases: ['n13 hararet', 'bmw suya yağ karıştırma', '320i ed yağ soğutucu'],
    solutionSummary: 'Yağ soğutucu kütüğü ve contalarının değişimi, soğutma sisteminin kimyasal ile yıkanması.'
  },
  {
    slug: 'bmw-n47-triger-zincir-kopmasi',
    title: 'BMW N47 Motor Arka Triger Zinciri Aşınması',
    category: 'BMW (320d / 520d / X3 - N47)',
    shortDescription: 'Triger zincirinin motorun arka tarafında bulunması ve gergilerin zayıflığı nedeniyle zincir kopma riski.',
    symptoms: [
      'Motorun arka kısmından (göğüs tarafından) gelen sürekli sürtünme ve zincir sesi',
      'Devir arttıkça yükselen tıkırtı',
      'Motorun aniden durması ve tekrar çalışmaması'
    ],
    obdCodes: ['P0015', 'P0340', 'P0011'],
    engineFamilies: ['BMW_N47_B47'],
    severity: 'CRITICAL_STOP',
    aliases: ['n47 zincir sesi', '320d triger zinciri', 'bmw zincir kopması'],
    solutionSummary: 'Motor indirilerek triger zincir seti, gergiler ve paletlerin komple yenilenmesi.'
  },

  // --- RENAULT / DACIA ---
  {
    slug: 'renault-15-dci-enjektor-ve-turbo-hortumu',
    title: '1.5 dCi Enjektör Geri Dönüş ve Turbo Borusu Yırtılması',
    category: 'Renault / Dacia (1.5 dCi - K9K)',
    shortDescription: 'Yüksek kilometreli 1.5 dCi motorlarda enjektör kütük arızaları ve turbo basınç borusu yırtıkları.',
    symptoms: [
      'Enjektör arızası uyarısı (Enjection Control / Check Injection)',
      'Hızlanmada aniden gelen ıslık veya hava üfleme sesi',
      'Egzozdan aşırı siyah duman ve ani güç kaybı'
    ],
    obdCodes: ['P0201', 'P0202', 'P0299', 'P2263'],
    engineFamilies: ['RENAULT_15_DCI'],
    severity: 'MODERATE_SERVICE_SOON',
    aliases: ['1.5 dci enjektör', 'enjeksiyonu kontrol ettirin', 'megane turbo hortumu'],
    solutionSummary: 'Enjektörlerin kodlanması veya revizyonu, yırtık turbo intercooler hortumunun değişimi.'
  },

  // --- FIAT ---
  {
    slug: 'fiat-13-multijet-zincir-ve-egr-sorunu',
    title: '1.3 MultiJet Triger Zinciri Gevşemesi ve Yağ Yakma',
    category: 'Fiat / Opel (1.3 MultiJet / CDTi)',
    shortDescription: 'Eski yağ kullanımı veya geç bakım nedeniyle triger zincirinin uzaması ve yağ eksiltme.',
    symptoms: [
      'İlk çalıştırmada 2-3 saniye süren şiddetli şıngırtı sesi',
      'Yağ çubuğunda sürekli seviye düşüşü',
      'Motorun sesli ve sarsıntılı çalışması'
    ],
    obdCodes: ['P0016', 'P0685', 'P0101'],
    engineFamilies: ['FIAT_13_MULTIJET'],
    severity: 'CRITICAL_STOP',
    aliases: ['egea zincir sesi', '1.3 multijet yağ yakma', 'fiat triger'],
    solutionSummary: 'Triger zincir setinin değişimi, kaliteli 5W-30/0W-30 tam sentetik yağ kullanımı.'
  },

  // --- PEUGEOT / CITROEN / OPEL (PSA) ---
  {
    slug: 'psa-12-puretech-triger-kayis-erimesi',
    title: '1.2 PureTech Islak Triger Kayışı (Belt-in-Oil) Ufalanması',
    category: 'PSA Group (1.2 PureTech)',
    shortDescription: 'Motor yağı içinde çalışan triger kayışının zamanla çözülerek yağ süzgecini (süzgeci) tıkaması.',
    symptoms: [
      'Düşük motor yağ basıncı uyarısı (Oil Pressure Low)',
      'Fren pedalının sertleşmesi (Vakum pompası tıkanıklığı)',
      'Yağ dolum kapağından bakıldığında kayış kenarlarında çatlama ve tüylenme'
    ],
    obdCodes: ['P15A8', 'P15A1', 'P0171'],
    engineFamilies: ['PSA_12_PURETECH'],
    severity: 'CRITICAL_STOP',
    aliases: ['puretech triger erimesi', '1.2 puretech yağ basıncı', 'peugeot triger kayışı'],
    solutionSummary: 'Triger kayışının revize tip ile değişimi, karter sökülerek yağ pompasının ve süzgecinin temizlenmesi.'
  },

  // --- TOYOTA ---
  {
    slug: 'toyota-18-hybrid-egr-ve-inverter-soğutma',
    title: '1.8 Hybrid EGR Soğutucu Tıkanması ve İnverter Isınması',
    category: 'Toyota (Corolla / Prius 1.8 Hybrid)',
    shortDescription: 'Yüksek kilometrede EGR soğutucusunun kurumla dolması sonucu motorun vuruntulu çalışması.',
    symptoms: [
      'İlk benzinli motora geçişte şiddetli sarsıntı ve vuruntu sesi',
      'Soğutma sıvısı eksiltme',
      'Hybrid sistem uyarısı (Check Hybrid System)'
    ],
    obdCodes: ['P0401', 'P14B5', 'P0A80'],
    engineFamilies: ['TOYOTA_18_HYBRID'],
    severity: 'MODERATE_SERVICE_SOON',
    aliases: ['corolla hybrid vuruntu', 'toyota egr tıkanması', 'prius hybrid hatası'],
    solutionSummary: 'EGR manifoldu ve soğutucusunun detaylı temizliği, hibrit fan filtresinin bakımı.'
  },

  // --- HONDA ---
  {
    slug: 'honda-15-turbo-yag-seyrelmesi-dilution',
    title: '1.5 VTEC Turbo Yağ Seyrelmesi (Oil Dilution)',
    category: 'Honda (Civic FK7 / CR-V 1.5 Turbo)',
    shortDescription: 'Soğuk havalarda ve kısa mesafeli sürüşlerde yakıtın yağa karışarak yağ seviyesini yükseltmesi.',
    symptoms: [
      'Yağ çubuğunda seviyenin MAX çizgisinin üzerine çıkması ve keskin benzin kokusu',
      'Motorun geç ısınması',
      'Rölantide düzensizlik'
    ],
    obdCodes: ['P0172', 'P0300'],
    engineFamilies: ['HONDA_15_TURBO'],
    severity: 'MINOR_CHECK_LATER',
    aliases: ['honda benzin kokusu', 'civic yağ yükselmesi', '1.5 vtec oil dilution'],
    solutionSummary: 'Kısa mesafe sürüşlerden kaçınmak, en güncel ECU yazılımını yükletmek ve yağı sık değiştirmek.'
  },

  // --- FORD ---
  {
    slug: 'ford-15-ecoblue-triger-kayis-kopmasi',
    title: '1.5 EcoBlue Yağ İçi Triger Kayışı Aşınması',
    category: 'Ford (Focus MK4 / Kuga 1.5 EcoBlue)',
    shortDescription: 'Motor yağı içinde çalışan triger kayışının ömründen önce yıpranarak kopma riski oluşturması.',
    symptoms: [
      'Motor kapağı bölgesinden gelen ıslık veya sürtünme sesi',
      'Yağ basınç ikaz lambasının aralıklı yanması',
      'Motorun aniden stop etmesi'
    ],
    obdCodes: ['P06DC', 'P0011', 'P0016'],
    engineFamilies: ['FORD_15_ECOBLUE'],
    severity: 'CRITICAL_STOP',
    aliases: ['ecoblue triger', 'ford focus triger kopması', '1.5 ecoblue yağ basıncı'],
    solutionSummary: 'Triger kayışının her 60.000-80.000 km aralığında periyodik olarak kontrolü ve değişimi.'
  }
];
