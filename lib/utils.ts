// Bir motor kodunu ("EA211 EVO", "EA888 Gen3" gibi) faultDatabase.ts içindeki
// engineFamilies id'leriyle ("ea211", "ea888-gen3") eşleştirmek için aday
// kimlikler üretir. "EVO" varyantları için önce tam eşleşmeyi, bulamazsa
// temel aileyi (EVO'suz halini) dener.
export function engineFamilyCandidates(code: string): string[] {
  const normalized = code.toLowerCase().trim().replace(/\s+/g, "-");
  const candidates = [normalized];

  if (normalized.endsWith("-evo")) {
    candidates.push(normalized.replace(/-evo$/, ""));
  }

  return candidates;
}
