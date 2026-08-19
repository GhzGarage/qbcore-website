import QBMark from "./QBMark";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden grid-bg">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, color-mix(in oklab, var(--accent) 4%, transparent) 0%, transparent 70%)",
        }}
      />

      <div className="hero-parallax relative z-10 max-w-4xl mx-auto">
        <div className="hero-stagger">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded border border-accent/20 bg-accent/5">
            <span className="block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs text-accent tracking-widest uppercase">
              Open Source Framework Ecosystem
            </span>
          </div>

          {/* Main heading */}
          <h1 className="mb-6 flex items-center justify-center gap-3 sm:gap-4">
            <QBMark className="h-12 sm:h-14 md:h-16 w-auto text-accent-dim shrink-0" />
            <span className="font-brand text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white lowercase leading-none">
              qbcore
            </span>
          </h1>

          <p className="text-balance font-brand text-xl sm:text-2xl md:text-3xl text-zinc-300 font-light leading-relaxed mb-4">
            One philosophy.
            <br />
            Multiple platforms.
            <br />
            <span className="text-white font-medium">Built for roleplay.</span>
          </p>

          <p className="text-pretty mt-8 max-w-2xl mx-auto text-base sm:text-lg text-zinc-500 leading-relaxed">
            QBCore began with FiveM. Now it is evolving into a cross-platform
            standard for building roleplay experiences across UGC ecosystems.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#specification"
              className="inline-flex items-center justify-center h-12 px-7 rounded border border-accent/40 bg-accent/10 text-accent text-sm font-medium transition-all duration-300 ease-out hover:bg-accent/20 hover:border-accent/60 hover:-translate-y-0.5 active:translate-y-0"
            >
              Explore the Specification
            </a>
            <a
              href="#platforms"
              className="inline-flex items-center justify-center h-12 px-7 rounded border border-white/10 text-zinc-300 text-sm font-medium transition-all duration-300 ease-out hover:bg-white/[0.04] hover:border-white/20 hover:-translate-y-0.5 active:translate-y-0"
            >
              View Platforms
            </a>
          </div>

          {/* Sub-tagline */}
          <p className="mt-14 font-mono text-xs text-zinc-600 tracking-widest">
            FiveM built the foundation. &nbsp;Roblox is the first expansion. &nbsp;UEFN is next.
          </p>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--background))",
        }}
      />
    </section>
  );
}
