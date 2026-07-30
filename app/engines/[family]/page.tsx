import { notFound } from "next/navigation";
import { engineFamilies } from "@/data/database/engineFamilies";
import { engines } from "@/data/database/engines";
import { faultDatabase } from "@/data/database/faultDatabase";

type Props = {
  params: Promise<{
    family: string;
  }>;
};

export default async function EngineFamilyPage({ params }: Props) {

  const { family } = await params;

  const engineFamily = engineFamilies.find(
    e => e.id === family
  );

  if (!engineFamily) return notFound();

  const familyEngines = engines.filter(
    e => e.family === family
  );

  const familyFaults = faultDatabase.filter(
    f => f.engineFamilies.includes(family)
  );

  return (
    <main className="mx-auto max-w-7xl p-10">

      <h1 className="text-5xl font-bold">
        {engineFamily.name}
      </h1>

      <p className="mt-4 text-neutral-400">
        {engineFamily.description}
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">

        <section className="rounded-2xl border border-white/10 bg-neutral-900 p-6">

          <h2 className="text-2xl font-bold">
            Motorlar
          </h2>

          <div className="mt-6 space-y-4">

            {familyEngines.map(engine => (

              <div
                key={engine.id}
                className="rounded-xl bg-neutral-800 p-4"
              >
                <div className="font-semibold">
                  {engine.name}
                </div>

                <div className="text-sm text-neutral-400">
                  {engine.power.join(", ")} HP
                </div>

              </div>

            ))}

          </div>

        </section>

        <section className="rounded-2xl border border-white/10 bg-neutral-900 p-6">

          <h2 className="text-2xl font-bold">
            Kronik Arızalar
          </h2>

          <div className="mt-6 space-y-4">

            {familyFaults.map(fault => (

              <div
                key={fault.id}
                className="rounded-xl bg-neutral-800 p-4"
              >
                <div className="font-semibold">
                  {fault.title}
                </div>

                <div className="text-sm text-neutral-400">
                  {fault.shortDescription}
                </div>

              </div>

            ))}

          </div>

        </section>

      </div>

    </main>
  );
}