"use client";

import { useState } from "react";
import Link from "next/link";
import { Gauge, Search, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/brands", label: "Markalar" },
  { href: "/faults", label: "Kronik Arızalar" },
  { href: "/obd", label: "OBD Kodları" },
  { href: "/search", label: "Arama" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>

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
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-orange-400">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-3">
          <Link
            href="/search"
            className="rounded-xl bg-white/5 p-3 text-neutral-300 hover:text-orange-400"
          >
            <Search size={20} />
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menü"
            className="rounded-xl bg-white/5 p-3 text-neutral-300 md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {open && (
        <nav className="border-t border-white/10 bg-neutral-950 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-neutral-200 hover:bg-white/5 hover:text-orange-400"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
