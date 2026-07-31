"use client";

import Link from "next/link";
import { Gauge, Search, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <Link href="/" className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-500/40 bg-orange-500/10 text-orange-400">
            <Gauge size={22} />
          </div>

          <div>
            <h1 className="font-display text-xl font-bold tracking-wide text-neutral-100">
              OTOTEŞHİS
            </h1>

            <p className="font-mono text-[11px] uppercase tracking-widest text-neutral-500">
              Arıza Teşhis Rehberi
            </p>
          </div>

        </Link>

        <nav className="hidden gap-8 text-sm text-neutral-300 md:flex">
          <Link href="/" className="hover:text-orange-400">Ana Sayfa</Link>
          <Link href="/brands" className="hover:text-orange-400">Markalar</Link>
          <Link href="/faults" className="hover:text-orange-400">Kronik Arızalar</Link>
          <Link href="/obd" className="hover:text-orange-400">OBD Kodları</Link>
          <Link href="/search" className="hover:text-orange-400">Arama</Link>
        </nav>

        <div className="flex gap-3">
          <Link
            href="/search"
            className="rounded-xl bg-white/5 p-3 text-neutral-300 hover:text-orange-400"
          >
            <Search size={20} />
          </Link>

          <button className="rounded-xl bg-white/5 p-3 text-neutral-300 md:hidden">
            <Menu size={20} />
          </button>
        </div>

      </div>
    </header>
  );
}
