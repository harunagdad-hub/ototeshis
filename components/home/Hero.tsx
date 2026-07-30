import { Search, CarFront, Wrench, Cpu } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-black">
      {/* Arka plan ışıkları */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-500/20 blur-[150px]" />
        <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm text-orange-300">
          🚗 AI Destekli Otomobil Bilgi Platformu
        </span>

        <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
          Aracının <span className="text-orange-500">Kronik Arızalarını</span>
          <br />
          Saniyeler İçinde Öğren
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-neutral-400">
          Marka, model, motor kodu veya OBD hata kodu ile arama yap.
          Kronik arızaları, çözümleri ve tahmini tamir maliyetlerini tek ekranda görüntüle.
        </p>

        {/* Arama */}
        <div className="mt-10 flex w-full max-w-4xl flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl md:flex-row">

          <input
            className="h-14 flex-1 rounded-xl border border-white/10 bg-black/40 px-5 text-white outline-none"
            placeholder="Golf 7 DSG • P0420 • EA888 yağ eksiltme..."
          />

          <button className="flex h-14 items-center justify-center rounded-xl bg-orange-500 px-8 font-semibold hover:bg-orange-600">
            <Search className="mr-2 h-5 w-5" />
            Ara
          </button>

        </div>

        {/* İstatistikler */}
        <div className="mt-16 grid w-full max-w-6xl grid-cols-2 gap-5 md:grid-cols-4">

          <Stat icon={<CarFront />} value="150+" title="Marka" />
          <Stat icon={<CarFront />} value="10.000+" title="Model" />
          <Stat icon={<Wrench />} value="500.000+" title="Kronik Arıza" />
          <Stat icon={<Cpu />} value="20.000+" title="OBD Kodu" />

        </div>

      </div>
    </section>
  );
}

function Stat({
  icon,
  value,
  title,
}: {
  icon: React.ReactNode;
  value: string;
  title: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="mb-3 text-orange-400">{icon}</div>
      <div className="text-3xl font-bold">{value}</div>
      <div className="mt-2 text-neutral-400">{title}</div>
    </div>
  );
}