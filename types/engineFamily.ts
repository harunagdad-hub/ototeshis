export interface EngineFamily {
  id: string;

  name: string;

  manufacturer: string;

  fuel: "Benzin" | "Dizel" | "Hibrit" | "Elektrik";

  years: string;

  description: string;

  commonFaults: string[];
}