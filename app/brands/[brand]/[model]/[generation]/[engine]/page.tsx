import { engines } from "@/data/engines";
import { faultDatabase } from "@/data/database/faultDatabase";
import { engineFamilyCandidates } from "@/lib/utils";
import FaultCard from "@/components/cards/FaultCard";
import Breadcrumb from "@/components/common/Breadcrumb";
import PageHeader from "@/components/common/PageHeader";

type Props = {
  params: Promise<{
    brand: string;
    model: string;
    generation: string;
    engine: string;
  }>;
};

export default async function EnginePage({ params }: Props) {
  const { brand, model, generation, engine } = await params;

  const generationEngines =
    engines[generation as keyof typeof engines] ?? [];

  const engineInfo = generationEngines.find((e) => e.id === engine);

  const candidates = engineInfo
    ? engineFamilyCandidates(engineInfo.code)
    : [];

  const list = faultDatabase.filter((fault) =>
    fault.engineFamilies.some((family) => candidates.includes(family))
  );

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <Breadcrumb
          items={[
            { label: "Markalar", href: "/brands" },
            { label: brand, href: `/brands/${brand}` },
            { label: model, href: `/brands/${brand}/${model}` },
            {
              label: generation,
              href: `/brands/${brand}/${model}/${generation}`,
            },
            {
              label: engine.toUpperCase(),
              href: `/brands/${brand}/${model}/${generation}/${engine}`,
            },
          ]}
        />

        <PageHeader
          title={`${generation.replace(/-/g, " ").toUpperCase()} • ${engine.toUpperCase()}`}
          subtitle="Bu motor için tespit edilen kronik arızalar"
        />

        {list.length === 0 ? (
          <div className="rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-8">
            <h2 className="text-xl font-bold text-yellow-400">
              Henüz veri yok
            </h2>

            <p className="mt-3 text-neutral-300">
              Bu motor için kronik arıza verileri henüz eklenmedi.
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {list.map((fault) => (
              <FaultCard
                key={fault.id}
                fault={fault}
                href={`/faults/${fault.slug}`}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
