// Bir motor kodunu ("EA211 EVO", "EA888 Gen3", "M270" gibi) faultDatabase.ts
// içindeki engineFamilies id'leriyle ("ea211", "ea888-gen3", "m270-m274")
// eşleştirmek için aday kimlikler üretir.
//
// Bazı motor kodları, ait oldukları motor ailesi kimliğiyle birebir
// örtüşmüyor (örn. "EP6" kodu "ep6-thp" ailesine, "1ZR-FE" kodu
// "toyota-petrol" ailesine karşılık geliyor). Bu tür durumlar için önce
// açık bir eşleştirme tablosuna bakılır; bulunamazsa otomatik
// normalize etme mantığına (küçük harf + boşluk->tire) geri dönülür.
const EXPLICIT_FAMILY_MAP: Record<string, string> = {
  m270: "m270-m274",
  m274: "m270-m274",
  "1zr-fe": "toyota-petrol",
  "2zr-fe": "toyota-petrol",
  "2nr-fe": "toyota-petrol",
  "1nd-tv": "toyota-diesel",
  ep6: "ep6-thp",
  thp: "ep6-thp",
  dv6: "dv6-bluehdi",
  bluehdi: "dv6-bluehdi",
};

export function engineFamilyCandidates(code: string): string[] {
  const normalized = code.toLowerCase().trim().replace(/\s+/g, "-");
  const candidates = [normalized];

  if (EXPLICIT_FAMILY_MAP[normalized]) {
    candidates.push(EXPLICIT_FAMILY_MAP[normalized]);
  }

  if (normalized.endsWith("-evo")) {
    candidates.push(normalized.replace(/-evo$/, ""));
  }

  return candidates;
}
