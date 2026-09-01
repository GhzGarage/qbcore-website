const roadmapPlatforms = [
  {
    name: "FiveM",
    status: "Established",
    dot: "border-accent bg-accent",
    pill: "text-accent border-accent/40 bg-accent/10",
  },
  {
    name: "RedM",
    status: "Established",
    dot: "border-accent bg-accent",
    pill: "text-accent border-accent/40 bg-accent/10",
  },
  {
    name: "Roblox",
    status: "Active",
    dot: "border-steel bg-steel",
    pill: "text-steel border-steel/40 bg-steel/10",
  },
  {
    name: "UEFN",
    status: "R&D",
    dot: "border-gold",
    pill: "text-gold border-gold/40 bg-gold/5 border-dashed",
  },
  {
    name: "CyberMP",
    status: "Evaluating",
    dot: "border-moss",
    pill: "text-moss border-moss/40 bg-moss/5 border-dashed",
  },
];

export default function Hero() {
  return (
    <section className="hero-shell relative min-h-screen flex flex-col items-center text-center px-6 pt-32 sm:pt-36 pb-20 overflow-hidden">
      {/* Cinematic glow — rust center, faint steel/gold/moss accents echoing
          the platform colors used later in Cross-Platform / Platforms. */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 55% at 50% 42%, color-mix(in oklab, var(--accent) 10%, transparent) 0%, transparent 70%), " +
            "radial-gradient(ellipse 35% 35% at 15% 78%, color-mix(in oklab, var(--steel) 7%, transparent) 0%, transparent 70%), " +
            "radial-gradient(ellipse 35% 35% at 88% 12%, color-mix(in oklab, var(--gold) 7%, transparent) 0%, transparent 70%), " +
            "radial-gradient(ellipse 30% 30% at 90% 85%, color-mix(in oklab, var(--moss) 6%, transparent) 0%, transparent 70%)",
        }}
      />

      <div className="hero-parallax relative z-10 max-w-4xl mx-auto">
        <div className="hero-stagger">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-10 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5">
            <span className="block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs text-accent tracking-widest uppercase">
              Open-Source Framework Ecosystem
            </span>
          </div>

          {/* Roadmap strip — position on the line is the roadmap order;
              filled dot + solid pill for a shipped platform, hollow dot +
              dashed pill for one not yet committed to. */}
          <div className="roadmap-strip mb-10" aria-hidden="true">
            <div className="roadmap-strip-line" />
            <div className="roadmap-strip-track">
              {roadmapPlatforms.map((p) => (
                <div key={p.name} className="roadmap-strip-item">
                  <span className={`roadmap-strip-dot ${p.dot}`} />
                  <span className={`roadmap-strip-pill ${p.pill}`}>{p.name}</span>
                  <span className="roadmap-strip-status">{p.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Main heading */}
          {/* The visible wordmark carries no keyword context on its own, so
              the descriptive half of the h1 is screen-reader/crawler-only.
              sr-only is absolutely positioned and clipped, so the rendered
              wordmark is unchanged. */}
          <h1 className="font-brand text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-white lowercase leading-none mb-8">
            qbcore
            <span className="sr-only">
              {" "}
              — the cross-platform open-source roleplay framework for FiveM,
              RedM, Roblox and UEFN
            </span>
          </h1>

          <p className="text-balance font-brand text-xl sm:text-2xl md:text-3xl text-stone-300 font-normal leading-relaxed mb-4">
            One philosophy.
            <br />
            Multiple platforms.
            <br />
            <span className="text-white font-medium">Built for roleplay.</span>
          </p>

          <p className="text-pretty mt-8 max-w-2xl mx-auto text-base sm:text-lg text-stone-400 leading-relaxed">
            QBCore began with FiveM. RedM followed, extending that same
            foundation natively. Now it is evolving into a cross-platform
            standard for building roleplay experiences across user-generated
            content (UGC) ecosystems.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#specification"
              className="btn-glow inline-flex items-center justify-center h-12 px-7 rounded-xl text-sm font-semibold transition-transform duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0"
            >
              Explore the Specification
            </a>
            <a
              href="#platforms"
              className="inline-flex items-center justify-center h-12 px-7 rounded-xl border border-white/10 text-stone-300 text-sm font-medium transition-all duration-300 ease-out hover:bg-white/[0.04] hover:border-white/20 hover:-translate-y-0.5 active:translate-y-0"
            >
              View Platforms
            </a>
          </div>

          {/* Sub-tagline */}
          <p className="mt-14 font-mono text-xs text-stone-400 tracking-widest">
            FiveM built the foundation. &nbsp;RedM followed. &nbsp;Roblox is the first expansion. &nbsp;UEFN is next. &nbsp;CyberMP is under evaluation.
          </p>
        </div>
      </div>

      {/* Bottom fade — stays fully transparent for the first ~60% of the
          band and only darkens over the last stretch, right against the
          section's own bottom padding. The old version darkened from the
          very top of the band, which reached up into the sub-tagline text
          above it and made that line dim/hard to read whenever this part
          of the page was scrolled toward the middle of the viewport. */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, transparent 60%, var(--background) 100%)",
        }}
      />
    </section>
  );
}
