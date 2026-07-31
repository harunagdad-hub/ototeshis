"use client";

import Link from "next/link";

export default function SearchBox() {
  return (
    <section className="mx-auto mt-12 max-w-7xl px-6">
      <div className="rounded-3xl border border-white/10 bg-neutral-900 p-8">

        <h2 className="font-display text-2xl font-bold text-neutral-100">
          Popüler Aramalar
        </h2>

        <p className="mt-2 text-neutral-400">
          En çok görüntülenen araçlar ve kronik arızalar
        </p>

        <div className="mt-8 flex flex-wrap gap-4">

          <Link
            href="/brands/volkswagen/golf/golf-7/16-tdi"
            className="rounded-full border border-white/10 px-5 py-3 font-mono text-sm text-neutral-300 hover:border-orange-500 hover:text-orange-400"
          >
            Golf 7 1.6 TDI
          </Link>

          <Link
            href="/brands/volkswagen/golf/golf-7/gti"
            className="rounded-full border border-white/10 px-5 py-3 font-mono text-sm text-neutral-300 hover:border-orange-500 hover:text-orange-400"
          >
            Golf 7 GTI
          </Link>

          <Link
            href="/obd/P0401"
            className="rounded-full border border-white/10 px-5 py-3 font-mono text-sm text-neutral-300 hover:border-orange-500 hover:text-orange-400"
          >
            P0401
          </Link>

          <Link
            href="/search"
            className="rounded-full bg-orange-500 px-5 py-3 font-semibold text-neutral-950 hover:bg-orange-400"
          >
            Tüm Aramaları Gör →
          </Link>

        </div>

      </div>
    </section>
  );
}
