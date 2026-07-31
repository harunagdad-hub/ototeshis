export interface ObdCode {
  code: string;
  title: string;
  severity: 'CRITICAL_STOP' | 'MODERATE_SERVICE_SOON' | 'MINOR_CHECK_LATER';
  description: string;
  symptoms: string[];
  compatibleEngines: string[];
}

export const obdCodes: ObdCode[] = [
  {
    code: 'P0401',
    title: 'EGR Sistemi Yetersiz Akış (EGR Flow Insufficient)',
    severity: 'MODERATE_SERVICE_SOON',
    description: 'EGR valfi veya soğutucu kanalları kurum sebebiyle tıkanmış, egzoz gazı geri devirdaimi düşmüş.',
    symptoms: ['Siyah duman', 'Çekiş düşüklüğü', 'Yakıt tüketiminde artış'],
    compatibleEngines: ['EA288', 'RENAULT_15_DCI', 'FIAT_13_MULTIJET', 'FORD_15_TDCI']
  },
  {
    code: 'P0299',
    title: 'Turbo / Süperşarj Düşük Şarj Basıncı (Underboost)',
    severity: 'MODERATE_SERVICE_SOON',
    description: 'Turbo şarj sistemi motorun ihtiyaç duyduğu hedef hava basıncını üretemiyor.',
    symptoms: ['Ani güç kaybı', 'Rampa yukarı çekmeme', 'Islık veya hava kaçak sesi'],
    compatibleEngines: ['EA288', 'RENAULT_15_DCI', 'FORD_15_TDCI', 'PSA_15_BLUEHDI']
  },
  {
    code: 'P0016',
    title: 'Krank Mili / Eksantrik Mili Konum Korelasyonu',
    severity: 'CRITICAL_STOP',
    description: 'Krank ve eksantrik sensörleri arasındaki zamanlama uyuşmuyor. Triger sente atlamış veya zincir esnemiş olabilir.',
    symptoms: ['Geç çalışma / Marş almama', 'Sarsıntılı çalışma', 'Vuruntu sesi'],
    compatibleEngines: ['FIAT_13_MULTIJET', 'PSA_12_PURETECH', 'BMW_N47_B47']
  },
  {
    code: 'P20E8',
    title: 'AdBlue Redüktan Basıncı Çok Düşük',
    severity: 'MODERATE_SERVICE_SOON',
    description: 'AdBlue / SCR sisteminde pompa yeterli basınç oluşturamıyor.',
    symptoms: ['UREA ikazı', 'Motor arıza lambası', 'KM sayacı uyarısı'],
    compatibleEngines: ['PSA_15_BLUEHDI', 'EA288', 'FORD_15_TDCI']
  },
  {
    code: 'P0300',
    title: 'Rastgele / Çoklu Silindir Ateşleme Hatası',
    severity: 'MODERATE_SERVICE_SOON',
    description: 'Motor silindirlerinde ateşleme gerçekleşmiyor veya tekleme var.',
    symptoms: ['Titremeli çalışma', 'Rölanti dalgalanması', 'Çiğ benzin kokusu'],
    compatibleEngines: ['PSA_12_PURETECH', 'FIAT_14_FIRE', 'RENAULT_10_TCER']
  }
];
