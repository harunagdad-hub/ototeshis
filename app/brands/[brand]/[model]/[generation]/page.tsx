import Link from "next/link";
import { engines } from "@/data/engines";

type Props = {
  params: Promise<{
    brand: string;
    model: string;
    generation: string;
  }>;
};

export default async function GenerationPage({ params }: Props) {
  const { brand, model, generation } = await params;

  const list = engines[generation as keyof typeof engines] ?? [];

  return (
    <main className="min-h-screen bg-neutral-950 text-white">

      <div className="mx-auto max-w-7xl p-10">

        <h1 className="text-5xl font-bold capitalize">
          {generation.replace(/-/g, " ")}
        </h1>

        <p className="mt-3 text-neutral-400 text-lg">
          Motor seçiniz
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {list.map((engine) => (

            <Link
              key={engine.id}
              href={`/brands/${brand}/${model}/${generation}/${engine.id}`}
              className="rounded-2xl border border-white/10 bg-neutral-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-neutral-800"
            >

              <h2 className="text-2xl font-bold text-white">
                {engine.name}
              </h2>

              <div className="mt-5 space-y-2 text-sm">

                <p className="text-neutral-300">
                  ⚙️ <span className="font-semibold">Motor:</span> {engine.code}
                </p>

                <p className="text-neutral-300">
                  ⛽ <span className="font-semibold">Yakıt:</span> {engine.fuel}
                </p>

                {"power" in engine && (
                  <p className="text-neutral-300">
                    🚀 <span className="font-semibold">Güç:</span> {engine.power}
                  </p>
                )}

                {"years" in engine && (
                  <p className="text-neutral-300">
                    📅 <span className="font-semibold">Yıllar:</span> {engine.years}
                  </p>
                )}

              </div>

              <div className="mt-6 rounded-lg bg-orange-500 py-2 text-center font-semibold text-white transition hover:bg-orange-600">
                Kronik Arızaları Gör →
              </div>

            </Link>

          ))}

        </div>

      </div>

    </main>
  );
}