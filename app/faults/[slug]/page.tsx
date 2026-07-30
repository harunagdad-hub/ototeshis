import { notFound } from "next/navigation";
import Link from "next/link";
import { faultDatabase } from "@/data/database/faultDatabase";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function FaultPage({ params }: Props) {
  const { slug } = await params;

  const fault = faultDatabase.find(
    (item) => item.id === slug || item.slug === slug
  );

  if (!fault) return notFound();

  return (
    <main className="mx-auto max-w-7xl p-10">

      <h1 className="text-5xl font-bold">
        {fault.title}
      </h1>

      <p className="mt-5 text-lg text-neutral-400">
        <div className="mt-8 grid gap-4 md:grid-cols-4">

  <div className="rounded-xl border border-white/10 bg-neutral-900 p-5">
    <div className="text-sm text-neutral-400">Kategori</div>
    <div className="mt-2 text-xl font-bold">
      {fault.category}
    </div>
  </div>

  <div className="rounded-xl border border-white/10 bg-neutral-900 p-5">
    <div className="text-sm text-neutral-400">Önem Derecesi</div>
    <div className="mt-2 text-xl font-bold text-red-400">
      {fault.severity}
    </div>
  </div>

  <div className="rounded-xl border border-white/10 bg-neutral-900 p-5">
    <div className="text-sm text-neutral-400">Tamir Süresi</div>
    <div className="mt-2 text-xl font-bold">
      {fault.repairTime}
    </div>
  </div>

  <div className="rounded-xl border border-white/10 bg-neutral-900 p-5">
    <div className="text-sm text-neutral-400">Zorluk</div>
    <div className="mt-2 text-xl font-bold">
      {fault.difficulty}
    </div>
  </div>

</div>
        {fault.shortDescription}
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">

        <section className="rounded-2xl border border-white/10 bg-neutral-900 p-6">
          <h2 className="text-2xl font-bold text-orange-400">
            Belirtiler
          </h2>

          <ul className="mt-5 space-y-3">
            {fault.symptoms.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-white/10 bg-neutral-900 p-6">
          <h2 className="text-2xl font-bold text-orange-400">
            Muhtemel Nedenler
          </h2>

          <ul className="mt-5 space-y-3">
            {fault.causes.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-white/10 bg-neutral-900 p-6">
          <h2 className="text-2xl font-bold text-orange-400">
            Çözüm
          </h2>

          <ul className="mt-5 space-y-3">
            {fault.solutions.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-white/10 bg-neutral-900 p-6">
          <h2 className="text-2xl font-bold text-orange-400">
            OBD Kodları
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            {fault.obdCodes.map((code) => (
              <Link
                key={code}
                href={`/obd/${code}`}
                className="rounded-lg bg-orange-500 px-4 py-2 font-semibold text-white hover:bg-orange-600"
              >
                {code}
              </Link>
            ))}
          </div>
        </section>

      </div>
<section className="mt-8 rounded-2xl border border-white/10 bg-neutral-900 p-6">
  <h2 className="text-2xl font-bold text-orange-400">
    Etkilenen Motorlar
  </h2>

  <div className="mt-5 flex flex-wrap gap-3">
    {fault.affectedEngines.map((engine) => (
      <span
        key={engine}
        className="rounded-full bg-orange-500/20 px-4 py-2"
      >
        {engine}
      </span>
    ))}
  </div>
</section>

<section className="mt-8 rounded-2xl border border-white/10 bg-neutral-900 p-6">
  <h2 className="text-2xl font-bold text-orange-400">
    Etkilenen Modeller
  </h2>

  <div className="mt-5 flex flex-wrap gap-3">
    {fault.affectedModels.map((model) => (
      <span
        key={model}
        className="rounded-full bg-white/10 px-4 py-2"
      >
        {model}
      </span>
    ))}
  </div>
</section>

<section className="mt-8 rounded-2xl border border-white/10 bg-neutral-900 p-6">
  <h2 className="text-2xl font-bold text-orange-400">
    Gerekli Parçalar
  </h2>

  <ul className="mt-5 space-y-3">
    {fault.requiredParts.map((part) => (
      <li key={part}>🔧 {part}</li>
    ))}
  </ul>
</section>

<section className="mt-8 rounded-2xl border border-white/10 bg-neutral-900 p-6">
  <h2 className="text-2xl font-bold text-orange-400">
    Koruyucu Bakım
  </h2>

  <ul className="mt-5 space-y-3">
    {fault.preventiveMaintenance.map((item) => (
      <li key={item}>✔ {item}</li>
    ))}
  </ul>
</section>
      <div className="mt-10 rounded-2xl border border-orange-500/20 bg-orange-500/10 p-8">

        <h2 className="text-2xl font-bold">
          Tahmini Tamir Maliyeti
        </h2>

        <p className="mt-4 text-3xl font-bold text-orange-400">
          ₺{fault.estimatedCost.min.toLocaleString("tr-TR")} - ₺{fault.estimatedCost.max.toLocaleString("tr-TR")}
        </p>

        <p className="mt-3 text-neutral-400">
          Tahmini Tamir Süresi: {fault.repairTime}
        </p>

        <p className="mt-2 text-neutral-400">
          Zorluk: {fault.difficulty}
        </p>

      </div>
<section className="mt-10 rounded-2xl border border-white/10 bg-neutral-900 p-6">

  <h2 className="text-2xl font-bold text-orange-400">
    İlgili Arızalar
  </h2>

  <div className="mt-6 grid gap-4 md:grid-cols-3">

    {fault.relatedFaults.map((id) => {

      const related = faultDatabase.find(
        (item) => item.id === id
      );

      if (!related) return null;

      return (
        <Link
          key={related.id}
          href={`/faults/${related.slug}`}
          className="rounded-xl border border-white/10 bg-black/30 p-5 transition hover:border-orange-500 hover:bg-neutral-800"
        >
          <div className="text-lg font-bold">
            {related.title}
          </div>

          <div className="mt-2 text-sm text-neutral-400">
            {related.shortDescription}
          </div>
        </Link>
      );

    })}

  </div>

</section>
    </main>
  );
}