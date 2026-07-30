import { notFound } from "next/navigation";
import { faultDatabase } from "@/data/database/faultDatabase";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function FaultPage({ params }: Props) {
  const { slug } = await params;

  const fault = faultDatabase.find(
    (item) => item.slug === slug
  );

  if (!fault) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">

      <h1 className="text-5xl font-bold">
        {fault.title}
      </h1>

      <p className="mt-4 text-xl text-neutral-400">
        {fault.shortDescription}
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">

        <Section title="Belirtiler" items={fault.symptoms} />

        <Section title="Nedenleri" items={fault.causes} />

        <Section title="Teşhis" items={fault.diagnostics} />

        <Section title="Çözüm" items={fault.solutions} />

        <Section title="Gerekli Parçalar" items={fault.requiredParts} />

        <Section
          title="Önleyici Bakım"
          items={fault.preventiveMaintenance}
        />

      </div>

      <div className="mt-12 rounded-2xl border border-orange-500/20 bg-orange-500/10 p-8">

        <h2 className="text-2xl font-bold">
          Tahmini Tamir Maliyeti
        </h2>

        <p className="mt-3 text-3xl font-black text-orange-400">
          {fault.estimatedCost.min.toLocaleString("tr-TR")} ₺ -
          {" "}
          {fault.estimatedCost.max.toLocaleString("tr-TR")} ₺
        </p>

        <div className="mt-6 flex gap-6">

          <div>
            <div className="text-neutral-500">
              Tamir Süresi
            </div>

            <div className="font-semibold">
              {fault.repairTime}
            </div>
          </div>

          <div>
            <div className="text-neutral-500">
              Zorluk
            </div>

            <div className="font-semibold">
              {fault.difficulty}
            </div>
          </div>

        </div>

      </div>

    </main>
  );
}

function Section({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-900 p-6">

      <h2 className="mb-4 text-2xl font-bold">
        {title}
      </h2>

      <ul className="space-y-2">

        {items.map((item) => (
          <li key={item}>
            • {item}
          </li>
        ))}

      </ul>

    </div>
  );
}