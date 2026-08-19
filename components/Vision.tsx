export default function Vision() {
  return (
    <section className="py-28 px-6 border-t border-white/[0.04] grid-bg relative overflow-hidden">
      {/* Subtle glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(244,63,94,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="font-mono text-xs text-[#f43f5e] tracking-widest uppercase mb-12">
          The Vision
        </p>

        {/* Emotional conclusion */}
        <div className="space-y-3 mb-12">
          <p className="text-2xl sm:text-3xl text-zinc-500 font-light">
            The languages will change.
          </p>
          <p className="text-2xl sm:text-3xl text-zinc-400 font-light">
            The APIs will change.
          </p>
          <p className="text-2xl sm:text-3xl text-zinc-300 font-light">
            The games will change.
          </p>
          <p className="text-2xl sm:text-3xl text-white font-semibold">
            The QBCore philosophy shouldn&apos;t.
          </p>
        </div>

        <p className="text-zinc-400 text-base sm:text-lg leading-relaxed mb-14 max-w-2xl mx-auto">
          QBCore is building toward a recognizable standard for roleplay development
          across UGC ecosystems — allowing developers to learn new platforms without
          relearning the architecture of roleplay from scratch.
        </p>

        {/* Final tagline */}
        <div className="font-mono text-sm space-y-2 mb-12">
          <p className="text-zinc-400">
            <span className="text-[#f43f5e]">FiveM</span> built the foundation.
          </p>
          <p className="text-zinc-400">
            <span className="text-sky-400">Roblox</span> is the first expansion.
          </p>
          <p className="text-zinc-400">
            <span className="text-violet-400">UEFN</span> is next.
          </p>
        </div>

        <a
          href="https://github.com/qbcore-framework"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-12 px-8 rounded border border-[#f43f5e]/30 bg-[#f43f5e]/8 text-[#f43f5e] text-sm font-medium hover:bg-[#f43f5e]/15 hover:border-[#f43f5e]/50 transition-all"
        >
          View on GitHub
        </a>
      </div>
    </section>
  );
}
