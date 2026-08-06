"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
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

type CategoryId = (typeof CATEGORIES)[number]["id"];

export default function VehicleCategories() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("otomobil");
  const [selectedBrandId, setSelectedBrandId] = useState<string | null>(null);

  const category = CATEGORIES.find((c) => c.id === activeCategory)!;
  const segments = category.segments as readonly string[];

  // Bu kategoride en az bir modeli olan markalar
  const brandsInCategory = manufacturers.filter((brand) =>
    models.some(
      (model) => model.manufacturerId === brand.id && segments.includes(model.segment)
    )
  );

  // Seçili marka + kategoriye ait modeller
  const modelsForSelectedBrand = selectedBrandId
    ? models
        .filter(
          (model) =>
            model.manufacturerId === selectedBrandId && segments.includes(model.segment)
        )
        .sort((a, b) => a.name.localeCompare(b.name, "tr"))
    : [];

  const selectedBrand = manufacturers.find((b) => b.id === selectedBrandId);

  function selectCategory(id: CategoryId) {
    setActiveCategory(id);
    setSelectedBrandId(null);
  }

  return (
    <section className="bg-neutral-950 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="font-display text-center text-3xl font-bold text-neutral-100 md:text-4xl">
          Araç Türüne Göre Seç
        </h2>

        <p className="mt-3 text-center text-neutral-400">
          Önce araç tipini, sonra markanı ve modelini seç.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => selectCategory(cat.id)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                activeCategory === cat.id
                  ? "border-orange-500 bg-orange-500/15 text-orange-400"
                  : "border-white/10 text-neutral-400 hover:border-white/20 hover:text-neutral-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="mt-10">
          {brandsInCategory.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-white/10 bg-neutral-900/40 p-10 text-center text-neutral-500">
              Bu kategoride henüz araç eklenmedi — yakında geliyor.
            </div>
          ) : !selectedBrandId ? (
            // 1. ADIM: Marka seç
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-5">
              {brandsInCategory.map((brand) => (
                <button
                  key={brand.id}
                  onClick={() => setSelectedBrandId(brand.id)}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-neutral-900 p-6 text-center transition hover:border-orange-500 hover:bg-neutral-800"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/30 bg-orange-500/10 font-display text-lg font-bold text-orange-400">
                    {getMonogram(brand.id, brand.name)}
                  </div>

                  <h3 className="font-semibold text-neutral-100 group-hover:text-orange-400">
                    {brand.name}
                  </h3>
                </button>
              ))}
            </div>
          ) : (
            // 2. ADIM: Model seç
            <div>
              <button
                onClick={() => setSelectedBrandId(null)}
                className="mb-6 flex items-center gap-1 text-sm font-semibold text-neutral-400 hover:text-orange-400"
              >
                <ChevronLeft size={18} />
                Markalara dön
              </button>

              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 font-display text-sm font-bold text-orange-400">
                  {selectedBrand ? getMonogram(selectedBrand.id, selectedBrand.name) : ""}
                </div>
                <h3 className="font-display text-xl font-bold text-neutral-100">
                  {selectedBrand?.name} Modelleri
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-5">
                {modelsForSelectedBrand.map((model) => (
                  <Link
                    key={model.id}
                    href={`/brands/${model.manufacturerId}/${model.id}`}
                    className="group flex items-center justify-center rounded-2xl border border-white/10 bg-neutral-900 p-6 text-center transition hover:border-orange-500 hover:bg-neutral-800"
                  >
                    <h3 className="font-display text-lg font-bold text-neutral-100 group-hover:text-orange-400">
                      {model.name}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
