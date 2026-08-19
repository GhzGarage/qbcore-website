export default function Vision() {
  return (
    <section className="py-28 px-6 border-t border-white/[0.04] grid-bg relative overflow-hidden">
      {/* Subtle glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, color-mix(in oklab, var(--accent) 3%, transparent) 0%, transparent 70%)",
        }}
      />

      <div className="reveal-stagger relative z-10 max-w-3xl mx-auto text-center">
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-12">
          The Vision
        </p>

        {/* Emotional conclusion */}
        <div className="font-brand space-y-3 mb-12">
          <p className="text-2xl sm:text-3xl text-zinc-500 font-light">
            The languages will change.
          </p>
          <p className="text-2xl sm:text-3xl text-zinc-400 font-light">
            The APIs will change.
          </p>
          <p className="text-2xl sm:text-3xl text-zinc-300 font-light">
            The games will change.
          </p>
          <p className="text-2xl sm:text-3xl text-white font-extrabold">
            The QBCore philosophy shouldn&apos;t.
          </p>
        </div>

        <p className="text-pretty text-zinc-400 text-base sm:text-lg leading-relaxed mb-14 max-w-2xl mx-auto">
          QBCore is building toward a recognizable standard for roleplay development
          across UGC ecosystems — allowing developers to learn new platforms without
          relearning the architecture of roleplay from scratch.
        </p>

        {/* Final tagline */}
        <div className="font-mono text-sm space-y-2 mb-12">
          <p className="text-zinc-400">
            <span className="text-accent">FiveM</span> built the foundation.
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
          className="btn-glow inline-flex items-center justify-center h-12 px-8 rounded text-sm font-semibold transition-transform hover:-translate-y-0.5 active:translate-y-0"
        >
          View on GitHub
        </a>
      </div>
    </section>
  );
}
