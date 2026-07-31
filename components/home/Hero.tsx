import { Search } from "lucide-react";
import EngineSchematic from "./EngineSchematic";

export default function Hero() {
  return (
    <section className="schematic-grid relative overflow-hidden bg-neutral-950">
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-10 h-96 w-96 rounded-full bg-orange-500/10 blur-[140px]" />
        <div className="absolute right-10 bottom-0 h-72 w-72 rounded-full bg-blue-500/15 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">

        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-orange-300">
            Arıza Teşhis Rehberi
          </span>

          <h1 className="font-display mt-6 text-4xl font-bold leading-tight text-neutral-100 md:text-6xl">
            Motorun Neyi{" "}
            <span className="text-orange-500">Şikayet Ediyor?</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-neutral-400">
            Marka, model, motor kodu veya OBD hata koduyla ara. Kronik arızaları,
            belirtilerini, çözüm yollarını ve tahmini tamir maliyetini tek
            ekranda gör.
          </p>

          <form action="/search" method="GET" className="mt-8 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl sm:flex-row">
            <input
              name="q"
              className="h-14 flex-1 rounded-xl border border-white/10 bg-neutral-950/60 px-5 font-mono text-sm text-neutral-100 outline-none placeholder:text-neutral-500"
              placeholder="Golf 7 1.6 TDI • P0401 • EA288..."
            />

            <button type="submit" className="flex h-14 items-center justify-center rounded-xl bg-orange-500 px-8 font-semibold text-neutral-950 transition hover:bg-orange-400">
              <Search className="mr-2 h-5 w-5" />
              Ara
            </button>
          </form>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6 font-mono text-sm text-neutral-400">
            <div>
              <div className="text-2xl font-semibold text-neutral-100">4</div>
              Marka
            </div>
            <div>
              <div className="text-2xl font-semibold text-neutral-100">8</div>
              Kronik Arıza
            </div>
            <div>
              <div className="text-2xl font-semibold text-neutral-100">2</div>
              OBD Kod Sayfası
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <EngineSchematic />
        </div>

      </div>
    </section>
  );
}
