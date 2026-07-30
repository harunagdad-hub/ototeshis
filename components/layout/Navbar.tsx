"use client";

import Link from "next/link";
import { CarFront, Search, User, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <Link href="/" className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500">

            <CarFront size={24} />

          </div>

          <div>

            <h1 className="text-xl font-bold tracking-wide">
              OTOTEŞHİS
            </h1>

            <p className="text-xs text-neutral-400">
              AI Car Diagnostics
            </p>

          </div>

        </Link>

        <nav className="hidden gap-8 md:flex">

          <Link href="/">Ana Sayfa</Link>

          <Link href="/brands">Markalar</Link>

          <Link href="/faults">Kronik Arızalar</Link>

          <Link href="/obd">OBD Kodları</Link>

          <Link href="/ai">AI Teşhis</Link>
<Link href="/search">Arama</Link>
        </nav>

        <div className="flex gap-3">

          <button className="rounded-xl bg-white/5 p-3">

            <Search size={20} />

          </button>

          <button className="rounded-xl bg-orange-500 p-3">

            <User size={20} />

          </button>

          <button className="rounded-xl bg-white/5 p-3 md:hidden">

            <Menu size={20} />

          </button>

        </div>

      </div>
    </header>
  );
}