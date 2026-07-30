import Link from "next/link";
import { models } from "@/data/models";

type Props = {
  params: Promise<{
    brand: string;
  }>;
};

export default async function BrandPage({ params }: Props) {
  const { brand } = await params;

  const brandModels =
    models[brand as keyof typeof models] ?? [];

  return (
    <main className="min-h-screen bg-neutral-950 text-white">

      <div className="mx-auto max-w-7xl p-10">

        <h1 className="mb-10 text-5xl font-bold capitalize">
          {brand}
        </h1>

        <div className="grid gap-6 md:grid-cols-3">

          {brandModels.map((model) => (

            <Link
              key={model.id}
              href={`/brands/${brand}/${model.id}`}
              className="rounded-2xl border border-white/10 bg-neutral-900 p-8 transition hover:border-orange-500 hover:bg-neutral-800"
            >

              <div className="text-5xl">
                🚗
              </div>

              <h2 className="mt-5 text-2xl font-bold">
                {model.name}
              </h2>

            </Link>

          ))}

        </div>

      </div>

    </main>
  );
}