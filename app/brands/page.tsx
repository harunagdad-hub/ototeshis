import Link from "next/link";
import { cars } from "@/data/cars";

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 p-10 text-white">
      <h1 className="mb-8 text-5xl font-bold">
        Markalar
      </h1>

      <div className="grid gap-4 md:grid-cols-3">
        {cars.map((brand) => (
          <Link
            key={brand.id}
            href={`/brands/${brand.id}`}
            className="rounded-xl border border-white/10 bg-neutral-900 p-5 transition hover:border-orange-500 hover:bg-neutral-800"
          >
            🚗 {brand.name}
          </Link>
        ))}
      </div>
    </main>
  );
}
