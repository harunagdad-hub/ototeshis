export interface Fault {
  id: string;

  title: string;

  description: string;

  severity: "Düşük" | "Orta" | "Yüksek";

  symptoms: string[];

  causes: string[];

  solutions: string[];

  parts: string[];

  obd: string[];

  difficulty: "Kolay" | "Orta" | "Zor";

  repairTime: string;

  prevention: string[];

  estimatedCost?: string;

  engines?: string[];

  tags?: string[];
}