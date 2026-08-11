import Link from "next/link";
import { Gauge } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-3">

          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/40 bg-orange-500/10 text-orange-400">
                <Gauge size={18} />
              </div>
              <h2 className="font-display text-lg font-bold text-neutral-100">
                OTOTEŞHİS
              </h2>
            </div>

            <p className="mt-4 max-w-xs text-sm text-neutral-500">
              Marka, model, motor kodu veya OBD hata koduna göre kronik arıza
              rehberi.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-neutral-400">
              Hızlı Linkler
            </h3>

            <div className="mt-4 flex flex-col gap-2 text-sm text-neutral-500">
              <Link href="/brands" className="hover:text-orange-400">Markalar</Link>
              <Link href="/faults" className="hover:text-orange-400">Kronik Arızalar</Link>
              <Link href="/obd" className="hover:text-orange-400">OBD Kodları</Link>
              <Link href="/search" className="hover:text-orange-400">Arama</Link>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-neutral-400">
              Uyarı
            </h3>

            <p className="mt-4 text-sm text-neutral-500">
              Buradaki bilgiler genel bir rehber niteliğindedir; kesin teşhis
              ve onarım için mutlaka yetkili bir servise veya uzman bir
              tamirciye başvurun.
            </p>
          </div>

        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center font-mono text-xs text-neutral-600">
          © {year} Ototeşhis · Ağdaş Yazılım tarafından geliştirildi
        </div>

      </div>
    </footer>
  );
}
