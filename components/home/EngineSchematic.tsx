export default function EngineSchematic() {
  return (
    <div className="relative w-full max-w-md">
      <svg
        viewBox="0 0 480 340"
        className="w-full text-neutral-500"
        fill="none"
      >
        {/* Motor bloğu */}
        <rect x="120" y="120" width="180" height="110" rx="10" stroke="currentColor" strokeWidth="1.5" />

        {/* Silindir başlıkları */}
        {[145, 180, 215, 250].map((cx) => (
          <rect key={cx} x={cx} y="95" width="20" height="28" rx="3" stroke="currentColor" strokeWidth="1.5" />
        ))}

        {/* Emme manifoldu (sol) */}
        <path d="M120 150 L70 150 L70 110 L45 110" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="45" cy="110" r="6" stroke="currentColor" strokeWidth="1.5" />

        {/* Egzoz hattı -> Turbo -> DPF (sağ) */}
        <path d="M300 160 L340 160 L340 185" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="355" cy="185" r="16" stroke="currentColor" strokeWidth="1.5" />
        <path d="M371 185 L410 185" stroke="currentColor" strokeWidth="1.5" />
        <rect x="410" y="170" width="50" height="30" rx="8" stroke="currentColor" strokeWidth="1.5" />

        {/* EGR geri dönüş hattı */}
        <path
          d="M340 160 C 300 60, 150 60, 120 150"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <rect x="222" y="55" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />

        {/* Taban çizgisi */}
        <line x1="20" y1="260" x2="460" y2="260" stroke="currentColor" strokeWidth="1" opacity="0.35" />

        {/* --- Arıza işaretçileri --- */}

        {/* EGR */}
        <g>
          <circle cx="230" cy="63" r="5" fill="var(--color-orange-500)" className="fault-marker-ring" />
          <circle cx="230" cy="63" r="5" fill="var(--color-orange-500)" />
          <line x1="238" y1="55" x2="270" y2="30" stroke="var(--color-orange-500)" strokeWidth="1" opacity="0.6" />
        </g>
        <text x="274" y="26" className="font-mono" fontSize="12" fill="var(--color-orange-400)">
          EGR
        </text>

        {/* Turbo */}
        <g>
          <circle cx="355" cy="185" r="5" fill="var(--color-red-500)" className="fault-marker-ring" />
          <circle cx="355" cy="185" r="5" fill="var(--color-red-500)" />
          <line x1="363" y1="185" x2="395" y2="230" stroke="var(--color-red-500)" strokeWidth="1" opacity="0.6" />
        </g>
        <text x="380" y="248" className="font-mono" fontSize="12" fill="var(--color-red-400)">
          Turbo
        </text>

        {/* DPF */}
        <g>
          <circle cx="435" cy="185" r="5" fill="var(--color-yellow-500)" className="fault-marker-ring" />
          <circle cx="435" cy="185" r="5" fill="var(--color-yellow-500)" />
          <line x1="435" y1="200" x2="435" y2="230" stroke="var(--color-yellow-500)" strokeWidth="1" opacity="0.6" />
        </g>
        <text x="412" y="248" className="font-mono" fontSize="12" fill="var(--color-yellow-400)">
          DPF
        </text>
      </svg>

      {/* Tarama çizgisi efekti */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
        <div className="animate-scan-sweep absolute top-0 h-full w-24 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent" />
      </div>
    </div>
  );
}
