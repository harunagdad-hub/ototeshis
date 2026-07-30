export interface OBDCode {

  code: string;

  title: string;

  description: string;

  severity: "Düşük" | "Orta" | "Yüksek";

  system: string;

  symptoms: string[];

  causes: string[];

  diagnostics: string[];

  solutions: string[];

  relatedFaults: string[];

  engineFamilies: string[];

}