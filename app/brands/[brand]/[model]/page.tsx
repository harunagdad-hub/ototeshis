import Link from "next/link";
import { generations } from "@/data/generations";

type Props = {
  params: Promise<{
    brand: string;
    model: string;
  }>;
};

export default async function ModelPage({ params }: Props) {
  const { brand, model } = await params;

  const list =
    generations[model as keyof typeof generations] ?? [];

  return (
    <main className="min-h-screen bg-neutral-950 text-white">

      <div className="mx-auto max-w-7xl p-10">

        <h1 className="mb-3 text-5xl font-bold capitalize">
          {model}
        </h1>

        <p className="mb-10 text-neutral-400">
          Kasa seçiniz
        </p>

        <div className="grid gap-6 md:grid-cols-3">

          {list.map((item) => (

            <Link
              key={item.id}
              href={`/brands/${brand}/${model}/${item.id}`}
              className="rounded-2xl border border-white/10 bg-neutral-900 p-8 transition hover:border-orange-500"
            >

              <h2 className="text-2xl font-bold">
                {item.name}
              </h2>

              <p className="mt-2 text-neutral-400">
                {item.years}
              </p>

            </Link>

          ))}

        </div>

      </div>

    </main>
  );
}