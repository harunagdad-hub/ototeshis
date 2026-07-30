export interface Fault {
  id: string;
  title: string;
  symptoms: string[];
  causes: string[];
  solutions: string[];
  estimatedCostMin: number;
  estimatedCostMax: number;
  difficulty: "Kolay" | "Orta" | "Zor";
}

export interface Engine {
  id: string;
  name: string;
  code: string;
  faults: Fault[];
}

export interface Generation {
  id: string;
  name: string;
  years: string;
  engines: Engine[];
}

export interface Model {
  id: string;
  name: string;
  generations: Generation[];
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  models: Model[];
}