export interface EngineOption {
  id: string;
  code: string;
  fuelType: 'BENZIN' | 'DIZEL' | 'LPG' | 'HIBRIIT' | 'ELEKTRIK';
  volume: string;
  powerHp: number;
  engineFamilyId: string;
}

export interface Generation {
  id: string;
  name: string;
  years: string;
  engines: EngineOption[];
}

export interface Model {
  id: string;
  name: string;
  generations: Generation[];
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  logoUrl?: string;
  models: Model[];
}

export const brandsDatabase: Brand[] = [
  {
    id: 'VOLKSWAGEN',
    name: 'Volkswagen',
    slug: 'volkswagen',
    models: [
      {
        id: 'GOLF',
        name: 'Golf',
        generations: [
          {
            id: 'GOLF_7',
            name: 'Golf VII (MK7)',
            years: '2012-2019',
            engines: [
              { id: '16_TDI', code: '1.6 TDI (EA288)', fuelType: 'DIZEL', volume: '1.6', powerHp: 110, engineFamilyId: 'VAG_16_TDI' },
              { id: '14_TSI', code: '1.4 TSI (EA211)', fuelType: 'BENZIN', volume: '1.4', powerHp: 125, engineFamilyId: 'VAG_14_TSI' },
              { id: '10_TSI', code: '1.0 TSI', fuelType: 'BENZIN', volume: '1.0', powerHp: 110, engineFamilyId: 'VAG_10_TSI' }
            ]
          },
          {
            id: 'GOLF_8',
            name: 'Golf VIII (MK8)',
            years: '2019-Gününüz',
            engines: [
              { id: '15_ETSI', code: '1.5 eTSI', fuelType: 'HIBRIIT', volume: '1.5', powerHp: 150, engineFamilyId: 'VAG_15_TSI' },
              { id: '20_TDI', code: '2.0 TDI', fuelType: 'DIZEL', volume: '2.0', powerHp: 150, engineFamilyId: 'VAG_20_TDI' }
            ]
          }
        ]
      },
      {
        id: 'PASSAT',
        name: 'Passat',
        generations: [
          {
            id: 'PASSAT_B8',
            name: 'Passat B8',
            years: '2014-2023',
            engines: [
              { id: '16_TDI', code: '1.6 TDI', fuelType: 'DIZEL', volume: '1.6', powerHp: 120, engineFamilyId: 'VAG_16_TDI' },
              { id: '20_TDI', code: '2.0 TDI', fuelType: 'DIZEL', volume: '2.0', powerHp: 150, engineFamilyId: 'VAG_20_TDI' },
              { id: '15_TSI', code: '1.5 TSI ACT', fuelType: 'BENZIN', volume: '1.5', powerHp: 150, engineFamilyId: 'VAG_15_TSI' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'BMW',
    name: 'BMW',
    slug: 'bmw',
    models: [
      {
        id: '3_SERIES',
        name: '3 Serisi',
        generations: [
          {
            id: 'F30',
            name: '3 Serisi (F30)',
            years: '2012-2019',
            engines: [
              { id: '320I_ED', code: '320i ED (N13B16)', fuelType: 'BENZIN', volume: '1.6', powerHp: 170, engineFamilyId: 'BMW_N13' },
              { id: '320D', code: '320d (N47 / B47)', fuelType: 'DIZEL', volume: '2.0', powerHp: 184, engineFamilyId: 'BMW_N47_B47' }
            ]
          },
          {
            id: 'G20',
            name: '3 Serisi (G20)',
            years: '2019-Gününüz',
            engines: [
              { id: '320I_G20', code: '320i (B48)', fuelType: 'BENZIN', volume: '1.6', powerHp: 170, engineFamilyId: 'BMW_B48' }
            ]
          }
        ]
      },
      {
        id: '5_SERIES',
        name: '5 Serisi',
        generations: [
          {
            id: 'G30',
            name: '5 Serisi (G30)',
            years: '2017-2023',
            engines: [
              { id: '520I', code: '520i (B48)', fuelType: 'BENZIN', volume: '1.6', powerHp: 170, engineFamilyId: 'BMW_B48' },
              { id: '520D', code: '520d (B47)', fuelType: 'DIZEL', volume: '2.0', powerHp: 190, engineFamilyId: 'BMW_B47' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'MERCEDES',
    name: 'Mercedes-Benz',
    slug: 'mercedes-benz',
    models: [
      {
        id: 'C_CLASS',
        name: 'C-Serisi',
        generations: [
          {
            id: 'W205',
            name: 'C-Serisi (W205)',
            years: '2014-2021',
            engines: [
              { id: 'C180', code: 'C 180 (M274 / M264)', fuelType: 'BENZIN', volume: '1.6', powerHp: 156, engineFamilyId: 'MB_M274' },
              { id: 'C200D', code: 'C 200 d (OM626 / OM654)', fuelType: 'DIZEL', volume: '1.6', powerHp: 136, engineFamilyId: 'MB_OM654' }
            ]
          }
        ]
      },
      {
        id: 'E_CLASS',
        name: 'E-Serisi',
        generations: [
          {
            id: 'W213',
            name: 'E-Serisi (W213)',
            years: '2016-2023',
            engines: [
              { id: 'E220D', code: 'E 220 d (OM654)', fuelType: 'DIZEL', volume: '2.0', powerHp: 194, engineFamilyId: 'MB_OM654' },
              { id: 'E200', code: 'E 200 (M264)', fuelType: 'BENZIN', volume: '2.0', powerHp: 197, engineFamilyId: 'MB_M264' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'AUDI',
    name: 'Audi',
    slug: 'audi',
    models: [
      {
        id: 'A4',
        name: 'A4',
        generations: [
          {
            id: 'A4_B9',
            name: 'A4 (B9)',
            years: '2015-2023',
            engines: [
              { id: '20_TDI', code: '2.0 TDI (EA288 Evo)', fuelType: 'DIZEL', volume: '2.0', powerHp: 190, engineFamilyId: 'VAG_20_TDI' },
              { id: '14_TFSI', code: '1.4 TFSI (EA211)', fuelType: 'BENZIN', volume: '1.4', powerHp: 150, engineFamilyId: 'VAG_14_TSI' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'RENAULT',
    name: 'Renault',
    slug: 'renault',
    models: [
      {
        id: 'MEGANE',
        name: 'Megane',
        generations: [
          {
            id: 'MEGANE_4',
            name: 'Megane IV',
            years: '2016-Gününüz',
            engines: [
              { id: '15_DCI', code: '1.5 dCi (K9K)', fuelType: 'DIZEL', volume: '1.5', powerHp: 110, engineFamilyId: 'RENAULT_15_DCI' },
              { id: '13_TCE', code: '1.3 TCe (H5H)', fuelType: 'BENZIN', volume: '1.3', powerHp: 140, engineFamilyId: 'RENAULT_13_TCE' }
            ]
          }
        ]
      },
      {
        id: 'CLIO',
        name: 'Clio',
        generations: [
          {
            id: 'CLIO_5',
            name: 'Clio V',
            years: '2019-Gününüz',
            engines: [
              { id: '10_TCU', code: '1.0 TCe / ECO-G', fuelType: 'LPG', volume: '1.0', powerHp: 100, engineFamilyId: 'RENAULT_10_TCE' },
              { id: '15_BLUE_DCI', code: '1.5 Blue dCi', fuelType: 'DIZEL', volume: '1.5', powerHp: 85, engineFamilyId: 'RENAULT_15_DCI' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'FIAT',
    name: 'Fiat',
    slug: 'fiat',
    models: [
      {
        id: 'EGEA',
        name: 'Egea',
        generations: [
          {
            id: 'EGEA_1',
            name: 'Egea (Type 356)',
            years: '2015-Gününüz',
            engines: [
              { id: '13_MULTIJET', code: '1.3 MultiJet II', fuelType: 'DIZEL', volume: '1.3', powerHp: 95, engineFamilyId: 'FIAT_13_MULTIJET' },
              { id: '16_MULTIJET', code: '1.6 MultiJet II', fuelType: 'DIZEL', volume: '1.6', powerHp: 120, engineFamilyId: 'FIAT_16_MULTIJET' },
              { id: '14_FIRE', code: '1.4 Fire', fuelType: 'BENZIN', volume: '1.4', powerHp: 95, engineFamilyId: 'FIAT_14_FIRE' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'TOYOTA',
    name: 'Toyota',
    slug: 'toyota',
    models: [
      {
        id: 'COROLLA',
        name: 'Corolla',
        generations: [
          {
            id: 'COROLLA_E210',
            name: 'Corolla (E210)',
            years: '2018-Gününüz',
            engines: [
              { id: '18_HYBRID', code: '1.8 Hybrid (2ZR-FXE)', fuelType: 'HIBRIIT', volume: '1.8', powerHp: 122, engineFamilyId: 'TOYOTA_18_HYBRID' },
              { id: '15_DYNAMIC_FORCE', code: '1.5 Dynamic Force', fuelType: 'BENZIN', volume: '1.5', powerHp: 125, engineFamilyId: 'TOYOTA_15_BENZIN' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'FORD',
    name: 'Ford',
    slug: 'ford',
    models: [
      {
        id: 'FOCUS',
        name: 'Focus',
        generations: [
          {
            id: 'FOCUS_4',
            name: 'Focus MK4',
            years: '2018-Gününüz',
            engines: [
              { id: '15_ECOBLUE', code: '1.5 EcoBlue', fuelType: 'DIZEL', volume: '1.5', powerHp: 120, engineFamilyId: 'FORD_15_ECOBLUE' },
              { id: '10_ECOBOOST', code: '1.0 EcoBoost', fuelType: 'BENZIN', volume: '1.0', powerHp: 125, engineFamilyId: 'FORD_10_ECOBOOST' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'HONDA',
    name: 'Honda',
    slug: 'honda',
    models: [
      {
        id: 'CIVIC',
        name: 'Civic',
        generations: [
          {
            id: 'CIVIC_FC5',
            name: 'Civic (FC5/FK7)',
            years: '2016-2021',
            engines: [
              { id: '16_I_VTEC', code: '1.6 i-VTEC (Eco/LPG)', fuelType: 'LPG', volume: '1.6', powerHp: 125, engineFamilyId: 'HONDA_16_VTEC' },
              { id: '15_VTEC_TURBO', code: '1.5 VTEC Turbo', fuelType: 'BENZIN', volume: '1.5', powerHp: 182, engineFamilyId: 'HONDA_15_TURBO' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'HYUNDAI',
    name: 'Hyundai',
    slug: 'hyundai',
    models: [
      {
        id: 'TUCSON',
        name: 'Tucson',
        generations: [
          {
            id: 'TUCSON_NX4',
            name: 'Tucson (NX4)',
            years: '2020-Gününüz',
            engines: [
              { id: '16_CRDI', code: '1.6 CRDi Smartstream', fuelType: 'DIZEL', volume: '1.6', powerHp: 136, engineFamilyId: 'HYUNDAI_16_CRDI' },
              { id: '16_T_GDI', code: '1.6 T-GDi', fuelType: 'BENZIN', volume: '1.6', powerHp: 180, engineFamilyId: 'HYUNDAI_16_TGDI' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'OPEL',
    name: 'Opel',
    slug: 'opel',
    models: [
      {
        id: 'ASTRA',
        name: 'Astra',
        generations: [
          {
            id: 'ASTRA_K',
            name: 'Astra K',
            years: '2015-2021',
            engines: [
              { id: '16_CDTI', code: '1.6 CDTi (Whisper Diesel)', fuelType: 'DIZEL', volume: '1.6', powerHp: 136, engineFamilyId: 'OPEL_16_CDTI' },
              { id: '14_TURBO', code: '1.4 Turbo', fuelType: 'BENZIN', volume: '1.4', powerHp: 150, engineFamilyId: 'OPEL_14_TURBO' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'PEUGEOT',
    name: 'Peugeot',
    slug: 'peugeot',
    models: [
      {
        id: '3008',
        name: '3008',
        generations: [
          {
            id: '3008_2',
            name: '3008 II',
            years: '2016-2023',
            engines: [
              { id: '12_PURETECH', code: '1.2 PureTech', fuelType: 'BENZIN', volume: '1.2', powerHp: 130, engineFamilyId: 'PSA_12_PURETECH' },
              { id: '15_BLUEHDI', code: '1.5 BlueHDi', fuelType: 'DIZEL', volume: '1.5', powerHp: 130, engineFamilyId: 'PSA_15_BLUEHDI' }
            ]
          }
        ]
      }
    ]
  }
];
