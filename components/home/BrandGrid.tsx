import Link from "next/link";
import { CarFront } from "lucide-react";
import { manufacturers } from "@/data/database/manufacturers";

// Yakında eklenecek markalar — henüz veri tabanında yok, ama kullanıcıya
// yol haritasını göstermek için soluk/pasif olarak listelenir.
const upcoming = [
  "Mercedes-Benz",
  "Toyota",
  "Peugeot",
  "Opel",
  "Hyundai",
  "Fiat",
];

export default function BrandGrid() {
  return (
    <section className="bg-neutral-950 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="font-display text-center text-3xl font-bold text-neutral-100 md:text-4xl">
          Marka Seç
        </h2>

        <p className="mt-3 text-center text-neutral-400">
          Aracının markasını seçerek kronik arızalara ulaş.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-5">

          {manufacturers.map((brand) => (
            <Link
              key={brand.id}
              href={`/brands/${brand.id}`}
              className="group rounded-2xl border border-white/10 bg-neutral-900 p-6 transition hover:border-orange-500 hover:bg-neutral-800"
            >
              <div className="mb-4 text-orange-400">
                <CarFront size={32} />
              </div>

              <h3 className="font-semibold text-neutral-100 group-hover:text-orange-400">
                {brand.name}
              </h3>
            </Link>
          ))}

          {upcoming.map((brand) => (
            <div
              key={brand}
              className="rounded-2xl border border-white/5 bg-neutral-900/40 p-6 opacity-50"
            >
              <div className="mb-4 text-neutral-600">
                <CarFront size={32} />
              </div>

              <h3 className="font-semibold text-neutral-500">
                {brand}
              </h3>

              <span className="mt-1 inline-block font-mono text-[11px] uppercase tracking-widest text-neutral-600">
                Yakında
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
