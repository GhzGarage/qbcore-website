import QBMark from "./QBMark";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center text-center px-6 pt-32 sm:pt-36 pb-20 overflow-hidden grid-bg">
      {/* Cinematic glow — crimson center, faint sky/violet accents echoing the
          platform colors used later in Cross-Platform / Platforms. */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 55% at 50% 42%, color-mix(in oklab, var(--accent) 9%, transparent) 0%, transparent 70%), " +
            "radial-gradient(ellipse 35% 35% at 15% 78%, color-mix(in oklab, #38bdf8 6%, transparent) 0%, transparent 70%), " +
            "radial-gradient(ellipse 35% 35% at 88% 12%, color-mix(in oklab, #a78bfa 6%, transparent) 0%, transparent 70%)",
        }}
      />

      <div className="hero-parallax relative z-10 max-w-4xl mx-auto">
        <div className="hero-stagger">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-10 px-3 py-1.5 rounded border border-accent/20 bg-accent/5">
            <span className="block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs text-accent tracking-widest uppercase">
              Open-Source Framework Ecosystem
            </span>
          </div>

          {/* Orbit diagram — QBCore at the center, FiveM / Roblox / UEFN orbiting it */}
          <div className="orbit-wrap mb-10" aria-hidden="true">
            <div className="orbit-ring ring-1" />
            <div className="orbit-ring ring-2 hidden md:block" />
            <div className="orbit-ring ring-3 hidden md:block" />
            <div className="orbit-node n1">
              <span className="orbit-node-label">FiveM</span>
            </div>
            <div className="orbit-node n2">
              <span className="orbit-node-label">Roblox</span>
            </div>
            <div className="orbit-node n3">
              <span className="orbit-node-label">UEFN</span>
            </div>
            <div className="orbit-center">
              <QBMark className="h-11 w-11 text-accent" />
            </div>
          </div>

          {/* Main heading */}
          <h1 className="font-brand text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-white lowercase leading-none mb-8">
            qbcore
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
            standard for building roleplay experiences across user-generated
            content (UGC) ecosystems.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#specification"
              className="btn-glow inline-flex items-center justify-center h-12 px-7 rounded text-sm font-semibold transition-transform duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0"
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
          <p className="mt-14 font-mono text-xs text-zinc-500 tracking-widest">
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
