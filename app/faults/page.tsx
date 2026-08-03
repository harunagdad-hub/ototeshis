import { faultDatabase } from "@/data/database/faultDatabase";
import FaultCard from "@/components/cards/FaultCard";
import PageHeader from "@/components/common/PageHeader";

export default function FaultsIndexPage() {
  const sorted = [...faultDatabase].sort(
    (a, b) => (b.priority ?? 0) - (a.priority ?? 0)
  );

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <PageHeader
          title="Kronik Arızalar"
          subtitle={`${sorted.length} kronik arıza — belirtileri, nedenleri ve tahmini tamir maliyetiyle birlikte.`}
        />

        <div className="grid gap-6 md:grid-cols-2">
          {sorted.map((fault) => (
            <FaultCard
              key={fault.id}
              fault={fault}
              href={`/faults/${fault.slug}`}
            />
          ))}
        </div>

      </div>
    </main>
  );
}
