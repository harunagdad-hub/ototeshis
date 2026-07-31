export interface EngineFamily {
  id: string;
  name: string;
  title?: string;
  code?: string;
  brand: string;
  description?: string;
  [key: string]: any;
}

export const engineFamilies: EngineFamily[] = [
  {
    id: 'PSA_12_PURETECH',
    name: '1.2 PureTech',
    title: '1.2 PureTech',
    brand: 'PEUGEOT',
    description: 'PSA Grubu 1.2 litrelik 3 silindirli benzinli motor ailesi.'
  },
  {
    id: 'FIAT_13_MULTIJET',
    name: '1.3 MultiJet',
    title: '1.3 MultiJet',
    brand: 'FIAT',
    description: 'Fiat Grubu 1.3 litrelik turbo dizel motor ailesi.'
  },
  {
    id: 'RENAULT_15_DCI',
    name: '1.5 dCi',
    title: '1.5 dCi',
    brand: 'RENAULT',
    description: 'Renault Grubu 1.5 litrelik dCi dizel motor ailesi.'
  },
  {
    id: 'PSA_15_BLUEHDI',
    name: '1.5 BlueHDi',
    title: '1.5 BlueHDi',
    brand: 'CITROEN',
    description: 'PSA Grubu 1.5 litrelik BlueHDi dizel motor ailesi.'
  }
];
