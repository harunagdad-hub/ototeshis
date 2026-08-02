import Link from "next/link";
import { CarFront } from "lucide-react";
import { manufacturers } from "@/data/database/manufacturers";
import { models } from "@/data/database/models";

export default function BrandGrid() {
  // SEAT ve Škoda gibi henüz hiç modeli girilmemiş markaları gizle
  // (aksi halde tıklanınca boş sayfaya düşerlerdi).
  const availableBrands = manufacturers.filter((brand) =>
    models.some((model) => model.manufacturerId === brand.id)
  );

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

          {availableBrands.map((brand) => (
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

        </div>

      </div>
    </section>
  );
}
