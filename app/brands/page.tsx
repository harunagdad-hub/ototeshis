import Link from "next/link";
import { manufacturers } from "@/data/database/manufacturers";
import { models } from "@/data/database/models";
import { getMonogram } from "@/lib/brandMonograms";

export default function BrandsPage() {
  const availableBrands = manufacturers.filter((brand) =>
    models.some((model) => model.manufacturerId === brand.id)
  );

  return (
    <main className="min-h-screen bg-neutral-950 p-10 text-white">
      <h1 className="font-display mb-8 text-5xl font-bold">
        Markalar
      </h1>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {availableBrands.map((brand) => (
          <Link
            key={brand.id}
            href={`/brands/${brand.id}`}
            className="group flex items-center gap-4 rounded-xl border border-white/10 bg-neutral-900 p-5 transition hover:border-orange-500 hover:bg-neutral-800"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 font-display text-sm font-bold text-orange-400">
              {getMonogram(brand.id, brand.name)}
            </div>

            <span className="font-semibold text-neutral-100 group-hover:text-orange-400">
              {brand.name}
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
