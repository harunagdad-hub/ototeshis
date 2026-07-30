import Link from "next/link";

const brands = [
  "Volkswagen",
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Toyota",
  "Honda",
  "Ford",
  "Renault",
  "Peugeot",
  "Opel",
  "Hyundai",
  "Kia",
  "Skoda",
  "Seat",
  "Volvo",
  "Mazda",
  "Nissan",
  "Tesla",
  "Fiat",
  "Citroen",
];

export default function BrandGrid() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold text-white">
          Marka Seç
        </h2>

        <p className="mt-3 text-center text-neutral-400">
          Aracının markasını seçerek kronik arızalara ulaş.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-5">

          {brands.map((brand) => (
            <Link
              key={brand}
              href={`/brands/${brand.toLowerCase().replace(/\s+/g, "-")}`}
              className="group rounded-2xl border border-white/10 bg-neutral-900 p-6 transition hover:border-orange-500 hover:bg-neutral-800"
            >
              <div className="mb-4 text-4xl">🚗</div>

              <h3 className="font-semibold text-white group-hover:text-orange-400">
                {brand}
              </h3>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}