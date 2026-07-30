import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { Fault } from "@/types/fault";

type Props = {
  fault: Fault;
  href: string;
};

export default function FaultCard({ fault, href }: Props) {
  const severityColor =
    fault.severity === "Yüksek"
      ? "red"
      : fault.severity === "Orta"
      ? "orange"
      : "green";

  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-white/10 bg-neutral-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-neutral-800"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white group-hover:text-orange-400">
          {fault.title}
        </h2>

        <Badge
          text={fault.severity}
          color={severityColor}
        />
      </div>

      <p className="mt-4 text-neutral-400">
        {fault.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {fault.obd.map((code) => (
          <span
            key={code}
            className="rounded-lg bg-neutral-800 px-3 py-1 text-sm"
          >
            {code}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm text-neutral-500">
          ⏱ {fault.repairTime}
        </span>

        <span className="font-semibold text-orange-400">
          Detay →
        </span>
      </div>
    </Link>
  );
}