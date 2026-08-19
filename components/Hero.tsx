export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden grid-bg">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(244,63,94,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded border border-[#f43f5e]/20 bg-[#f43f5e]/5">
          <span className="block w-1.5 h-1.5 rounded-full bg-[#f43f5e] animate-pulse" />
          <span className="font-mono text-xs text-[#f43f5e] tracking-widest uppercase">
            Open Source Framework Ecosystem
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-mono text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-none">
          QB<span className="text-[#f43f5e]">CORE</span>
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-zinc-300 font-light leading-relaxed mb-4">
          One philosophy.
          <br />
          Multiple platforms.
          <br />
          <span className="text-white font-medium">Built for roleplay.</span>
        </p>

        <p className="mt-8 max-w-2xl mx-auto text-base sm:text-lg text-zinc-500 leading-relaxed">
          QBCore began with FiveM. Now it is evolving into a cross-platform
          standard for building roleplay experiences across UGC ecosystems.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#specification"
            className="inline-flex items-center justify-center h-12 px-7 rounded border border-[#f43f5e]/40 bg-[#f43f5e]/10 text-[#f43f5e] text-sm font-medium hover:bg-[#f43f5e]/20 hover:border-[#f43f5e]/60 transition-all"
          >
            Explore the Specification
          </a>
          <a
            href="#platforms"
            className="inline-flex items-center justify-center h-12 px-7 rounded border border-white/10 text-zinc-300 text-sm font-medium hover:bg-white/[0.04] hover:border-white/20 transition-all"
          >
            View Platforms
          </a>
        </div>

        {/* Sub-tagline */}
        <p className="mt-14 font-mono text-xs text-zinc-600 tracking-widest">
          FiveM built the foundation. &nbsp;Roblox is the first expansion. &nbsp;UEFN is next.
        </p>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #0d0d0f)",
        }}
      />
    </section>
  );
}
