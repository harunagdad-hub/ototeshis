"use client";

import Link from "next/link";

export default function SearchBox() {
  return (
    <section className="mx-auto mt-12 max-w-7xl px-6">
      <div className="rounded-3xl border border-white/10 bg-neutral-900 p-8">

        <h2 className="text-3xl font-bold text-white">
          Popüler Aramalar
        </h2>

        <p className="mt-2 text-neutral-400">
          En çok görüntülenen araçlar ve kronik arızalar
        </p>

        <div className="mt-8 flex flex-wrap gap-4">

          <Link
            href="/brands/volkswagen/golf/golf-7/16-tdi"
            className="rounded-full border border-white/10 px-5 py-3 hover:border-orange-500 hover:text-orange-400"
          >
            🚗 Golf 7 1.6 TDI
          </Link>

          <Link
            href="/brands/volkswagen/golf/golf-7/20-gti"
            className="rounded-full border border-white/10 px-5 py-3 hover:border-orange-500 hover:text-orange-400"
          >
            🔥 Golf GTI
          </Link>

          <Link
            href="/obd/P0420"
            className="rounded-full border border-white/10 px-5 py-3 hover:border-orange-500 hover:text-orange-400"
          >
            ⚠️ P0420
          </Link>

          <Link
            href="/search"
            className="rounded-full bg-orange-500 px-5 py-3 font-semibold text-white hover:bg-orange-600"
          >
            Tüm Aramaları Gör →
          </Link>

        </div>

      </div>
    </section>
  );
}