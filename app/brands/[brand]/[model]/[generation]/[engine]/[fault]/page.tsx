import { faults } from "@/data/faults";
import Breadcrumb from "@/components/common/Breadcrumb";
import PageHeader from "@/components/common/PageHeader";
import Badge from "@/components/ui/Badge";

type Props = {
  params: Promise<{
    brand: string;
    model: string;
    generation: string;
    engine: string;
    fault: string;
  }>;
};

export default async function FaultPage({ params }: Props) {
  const { brand, model, generation, engine, fault } = await params;

  const list = faults[engine as keyof typeof faults] ?? [];
  const item = list.find((f) => f.id === fault);

  if (!item) {
    return (
      <main className="min-h-screen bg-neutral-950 text-white p-10">
        <h1 className="text-3xl font-bold">
          Arıza bulunamadı.
        </h1>
      </main>
    );
  }

  const severityColor =
    item.severity === "Yüksek"
      ? "red"
      : item.severity === "Orta"
      ? "orange"
      : "green";

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-10">

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
          title={item.title}
          subtitle={item.description}
        />

        <Badge
          text={item.severity}
          color={severityColor}
        />

        <div className="mt-10 grid gap-8 md:grid-cols-2">

          <section className="rounded-2xl bg-neutral-900 p-6">
            <h2 className="mb-4 text-xl font-bold">Belirtiler</h2>

            <ul className="space-y-2">
              {item.symptoms.map((s) => (
                <li key={s}>• {s}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl bg-neutral-900 p-6">
            <h2 className="mb-4 text-xl font-bold">Muhtemel Nedenler</h2>

            <ul className="space-y-2">
              {item.causes.map((c) => (
                <li key={c}>• {c}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl bg-neutral-900 p-6">
            <h2 className="mb-4 text-xl font-bold">Çözüm</h2>

            <ul className="space-y-2">
              {item.solutions.map((s) => (
                <li key={s}>• {s}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl bg-neutral-900 p-6">
            <h2 className="mb-4 text-xl font-bold">OBD-II Kodları</h2>

            <div className="flex flex-wrap gap-3">
              {item.obd.map((code) => (
                <span
                  key={code}
                  className="rounded-lg bg-neutral-800 px-3 py-2"
                >
                  {code}
                </span>
              ))}
            </div>
          </section>

        </div>

      </div>
    </main>
  );
}