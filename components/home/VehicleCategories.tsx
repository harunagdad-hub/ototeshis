"use client";

import { useState } from "react";
import Link from "next/link";
import { manufacturers } from "@/data/database/manufacturers";
import { models } from "@/data/database/models";
import { getMonogram } from "@/lib/brandMonograms";

// Segment kodlarını 3 üst kategoriye eşliyoruz. Caddy/Doblo/Transporter
// gibi ticari araçlar (LCV/Van) ayrı bir sekme istenmediği için
// "Otomobil" altında toplanıyor.
const CATEGORIES = [
  { id: "otomobil", label: "Otomobil", segments: ["B", "C", "D", "E", "LCV", "Van"] },
  { id: "suv", label: "SUV / Arazi / Pick-up", segments: ["SUV"] },
  { id: "elektrik", label: "Elektrikli Araçlar", segments: ["EV"] },
] as const;

export default function VehicleCategories() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]["id"]>("otomobil");

  const activeCategory = CATEGORIES.find((c) => c.id === active)!;

  const matchingModels = models
    .filter((model) => (activeCategory.segments as readonly string[]).includes(model.segment))
    .map((model) => {
      const brand = manufacturers.find((m) => m.id === model.manufacturerId);
      return { ...model, brandName: brand?.name ?? model.manufacturerId };
    });

  return (
    <section className="bg-neutral-950 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="font-display text-center text-3xl font-bold text-neutral-100 md:text-4xl">
          Araç Türüne Göre Seç
        </h2>

        <p className="mt-3 text-center text-neutral-400">
          Önce araç tipini, sonra model ve markanı seç.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                active === cat.id
                  ? "border-orange-500 bg-orange-500/15 text-orange-400"
                  : "border-white/10 text-neutral-400 hover:border-white/20 hover:text-neutral-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="mt-10">
          {matchingModels.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-white/10 bg-neutral-900/40 p-10 text-center text-neutral-500">
              Bu kategoride henüz araç eklenmedi — yakında geliyor.
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-5">
              {matchingModels.map((model) => (
                <Link
                  key={`${model.manufacturerId}-${model.id}`}
                  href={`/brands/${model.manufacturerId}/${model.id}`}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-neutral-900 p-5 text-center transition hover:border-orange-500 hover:bg-neutral-800"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 font-display text-sm font-bold text-orange-400">
                    {getMonogram(model.manufacturerId, model.brandName)}
                  </div>

                  <div>
                    <h3 className="font-semibold text-neutral-100 group-hover:text-orange-400">
                      {model.name}
                    </h3>
                    <p className="mt-0.5 text-xs text-neutral-500">
                      {model.brandName}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
