import { notFound } from "next/navigation";
import { obdCodes } from "@/data/database/obdCodes";

type Props = {
  params: Promise<{
    code: string;
  }>;
};

export default async function OBDPage({ params }: Props) {

  const { code } = await params;

  const obd = obdCodes.find(
    x => x.code.toLowerCase() === code.toLowerCase()
  );

  if (!obd) return notFound();

  return (
    <div className="mx-auto max-w-5xl p-10">

      <h1 className="text-5xl font-bold">
        {obd.code}
      </h1>

      <p className="mt-4 text-xl text-neutral-300">
        {obd.title}
      </p>

      <p className="mt-8 text-neutral-400">
        {obd.description}
      </p>

    </div>
  );
}