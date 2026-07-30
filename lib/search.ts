import { obdCodes } from "@/data/database/obdCodes";
import { faultDatabase } from "@/data/database/faultDatabase";
import { engineFamilies } from "@/data/database/engineFamilies";
import { manufacturers } from "@/data/database/manufacturers";
import { models } from "@/data/database/models";

export interface SearchResult {
  type: "manufacturer" | "model" | "engine" | "fault" | "obd";
  id: string;
  title: string;
  subtitle: string;
  href: string;
  score?: number;
}

function normalize(text: string) {
  return text
    .toLocaleLowerCase("tr")
    .replace(/ç/g, "c")
    .replace(/ğ/g, "g")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ş/g, "s")
    .replace(/ü/g, "u")
    .replace(/[^a-z0-9]/g, "");
}

export function searchDatabase(query: string): SearchResult[] {
  const q = normalize(query);

  if (!q) return [];

  const results: SearchResult[] = [];
  const added = new Set<string>();

  const addResult = (item: SearchResult) => {
    const key = `${item.type}-${item.id}`;

    if (added.has(key)) return;

    added.add(key);
    results.push(item);
  };

  // MARKALAR
  manufacturers.forEach((item) => {
    if (normalize(item.name).includes(q)) {
      addResult({
        type: "manufacturer",
        id: item.id,
        title: item.name,
        subtitle: "Marka",
        href: `/brands/${item.id}`,
        score: 20,
      });
    }
  });

  // MODELLER
  models.forEach((item) => {
    if (normalize(item.name).includes(q)) {
      addResult({
        type: "model",
        id: item.id,
        title: item.name,
        subtitle: "Model",
        href: `/brands/volkswagen/${item.id}`, // şimdilik
        score: 30,
      });
    }
  });

  // MOTOR AİLELERİ
  engineFamilies.forEach((item) => {
    const text = normalize(`${item.name} ${item.description}`);

    if (text.includes(q)) {
      addResult({
        type: "engine",
        id: item.id,
        title: item.name,
        subtitle: "Motor Ailesi",
        href: `/engines/${item.id}`,
        score: 40,
      });
    }
  });

  // KRONİK ARIZALAR
  faultDatabase.forEach((item) => {
    let score = item.priority ?? 0;

    if (normalize(item.title).includes(q)) score += 100;

    if (normalize(item.shortDescription).includes(q)) score += 40;

    item.aliases.forEach((alias) => {
      if (normalize(alias).includes(q)) score += 80;
    });

    item.keywords.forEach((keyword) => {
      if (normalize(keyword).includes(q)) score += 60;
    });

    item.symptoms.forEach((symptom) => {
      if (normalize(symptom).includes(q)) score += 50;
    });

    item.causes.forEach((cause) => {
      if (normalize(cause).includes(q)) score += 30;
    });

    item.solutions.forEach((solution) => {
      if (normalize(solution).includes(q)) score += 20;
    });

    item.obdCodes.forEach((code) => {
      if (normalize(code).includes(q)) score += 90;
    });

    item.affectedModels.forEach((model) => {
      if (normalize(model).includes(q)) score += 40;
    });

    item.affectedEngines.forEach((engine) => {
      if (normalize(engine).includes(q)) score += 40;
    });

    if (score > item.priority) {
      addResult({
        type: "fault",
        id: item.id,
        title: item.title,
        subtitle: item.shortDescription,
        href: `/faults/${item.slug}`,
        score,
      });
    }
  });

  // OBD KODLARI
  obdCodes.forEach((item) => {
    const text = normalize(`${item.code} ${item.title}`);

    if (text.includes(q)) {
      addResult({
        type: "obd",
        id: item.code,
        title: item.code,
        subtitle: item.title,
        href: `/obd/${item.code}`,
        score: 95,
      });
    }
  });

  return results
    .sort((a, b) => (b.score ?? 0) - (a.score ?? 0))
    .slice(0, 20);
}