import Link from "next/link";
import { obdCodes } from "@/data/database/obdCodes";
import Badge from "@/components/ui/Badge";

export default function OBDIndexPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <h1 className="text-5xl font-bold">
          OBD-II Hata Kodları
        </h1>

        <p className="mt-4 text-xl text-neutral-400">
          Motor arıza lambasında karşılaşabileceğin standart hata kodları ve anlamları.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {obdCodes.map((obd) => {
            const severityColor =
              obd.severity === "Yüksek"
                ? "red"
                : obd.severity === "Orta"
                ? "orange"
                : "green";

            return (
              <Link
                key={obd.code}
                href={`/obd/${obd.code}`}
                className="group block rounded-2xl border border-white/10 bg-neutral-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-neutral-800"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white group-hover:text-orange-400">
                    {obd.code}
                  </h2>

                  <Badge
                    text={obd.severity}
                    color={severityColor}
                  />
                </div>

                <p className="mt-2 text-neutral-300">
                  {obd.title}
                </p>

                <p className="mt-4 text-sm text-neutral-500">
                  {obd.system}
                </p>
              </Link>
            );
          })}
        </div>

      </div>
    </main>
  );
}
