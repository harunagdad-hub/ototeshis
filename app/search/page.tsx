"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search, CarFront, Wrench, Cpu } from "lucide-react";
import { searchDatabase } from "@/lib/search";

function SearchPageInner() {
  const params = useSearchParams();
  const [query, setQuery] = useState(params.get("q") ?? "");

  const filtered = searchDatabase(query);

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">

        {/* Başlık */}
        <div className="text-center">
          <h1 className="text-5xl font-black md:text-6xl">
            Akıllı <span className="text-orange-500">Arama</span>
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-neutral-400">
            Marka, model, motor ailesi, OBD-II hata kodu veya kronik arıza adı ile arama yapın.
          </p>
        </div>

        {/* Arama Kutusu */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-neutral-900/70 p-4 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col gap-4 md:flex-row">

            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500" />

              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Golf 7, EA288, P0401, EGR, Turbo..."
                className="h-14 w-full rounded-2xl border border-white/10 bg-black/40 pl-12 pr-4 text-white outline-none transition focus:border-orange-500"
              />
            </div>

            <button className="h-14 rounded-2xl bg-orange-500 px-8 font-semibold text-white transition hover:bg-orange-600">
              Ara
            </button>

          </div>

          {/* Popüler Aramalar */}
          <div className="mt-4 flex flex-wrap gap-2">
            {["Golf 7", "EA288", "P0401", "EGR", "Turbo"].map((item) => (
              <button
                key={item}
                onClick={() => setQuery(item)}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-300 transition hover:border-orange-500 hover:text-orange-400"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* İstatistikler */}
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">

          <Stat icon={<CarFront className="h-5 w-5" />} value="11" label="Marka" />

          <Stat icon={<CarFront className="h-5 w-5" />} value="26" label="Model" />

          <Stat icon={<Wrench className="h-5 w-5" />} value="13" label="Arıza" />

          <Stat icon={<Cpu className="h-5 w-5" />} value="2" label="OBD Kodu" />

        </div>

        {/* Sonuçlar */}
        <div className="mt-12">

          {query.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-white/10 bg-neutral-900/40 p-10 text-center text-neutral-500">
              Aramaya başlamak için yukarıdaki kutuya bir marka, model, motor veya OBD kodu yazın.
            </div>
          ) : (
            <div className="space-y-4">

              {filtered.map((item) => (
                <Link
                  key={`${item.type}-${item.id}`}
                  href={item.href}
                  className="group block rounded-2xl border border-white/10 bg-neutral-900 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-neutral-800"
                >

                  <div className="flex items-start justify-between gap-4">

                    <div>
                      <h2 className="text-xl font-bold group-hover:text-orange-400">
                        {item.title}
                      </h2>

                      <p className="mt-2 text-neutral-400">
                        {item.subtitle}
                      </p>
                    </div>

                    <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs font-semibold text-orange-300">
                      {item.type}
                    </span>

                  </div>

                </Link>
              ))}

              {filtered.length === 0 && (
                <div className="rounded-2xl border border-white/10 bg-neutral-900 p-8 text-center text-neutral-500">
                  <p className="text-lg">Sonuç bulunamadı.</p>
                  <p className="mt-2 text-sm">
                    Farklı bir marka, motor ailesi veya OBD kodu deneyin.
                  </p>
                </div>
              )}

            </div>
          )}

        </div>

      </div>
    </main>
  );
}

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-900 p-5 text-center">
      <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/20 text-orange-400">
        {icon}
      </div>

      <div className="text-2xl font-bold">{value}</div>

      <div className="mt-1 text-sm text-neutral-400">{label}</div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={null}>
      <SearchPageInner />
    </Suspense>
  );
}
