export default function BrandsPage() {
  const brands = [
    "Volkswagen",
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Toyota",
    "Ford",
    "Renault",
  ];

  return (
    <main className="min-h-screen bg-neutral-950 p-10 text-white">
      <h1 className="mb-8 text-5xl font-bold">
        Markalar
      </h1>

      <div className="grid gap-4 md:grid-cols-3">
        {brands.map((brand) => (
          <div
            key={brand}
            className="rounded-xl border border-white/10 bg-neutral-900 p-5"
          >
            🚗 {brand}
          </div>
        ))}
      </div>
    </main>
  );
}