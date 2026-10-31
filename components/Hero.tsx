export default function Hero() {
  return (
    <section className="hero-shell relative overflow-hidden px-6 pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 65% 75% at 80% 35%, color-mix(in oklab, var(--accent) 12%, transparent), transparent 70%)" }} />
      <div className="hero-parallax relative max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_.8fr] gap-14 lg:gap-20 items-end">
        <div className="hero-stagger">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-7">QBCore / The next chapter</p>
          <h1 className="text-balance font-brand text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] mb-7">A new foundation for roleplay worlds.</h1>
          <p className="text-pretty max-w-xl text-lg sm:text-xl text-stone-300 leading-relaxed">QBCore is an open-source roleplay framework being built for Mantle, a platform where creators make multiplayer worlds and players explore them.</p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a href="#about" className="btn-glow inline-flex items-center justify-center h-12 px-7 rounded-xl text-sm font-semibold transition-transform hover:-translate-y-0.5">See how it fits together <span aria-hidden="true" className="ml-3">↓</span></a>
            <a href="https://discord.gg/mantlegame" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-12 px-7 rounded-xl border border-white/15 text-stone-300 text-sm font-medium transition-colors hover:bg-white/[0.04] hover:border-white/25">Join the community</a>
          </div>
        </div>
        <div className="reveal rounded-2xl border border-white/10 bg-white/[0.025] p-7 sm:p-9">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-6 mb-7">
            <span className="font-mono text-xs text-stone-400 uppercase tracking-widest">Project status</span>
            <span className="font-mono text-xs text-accent">In development</span>
          </div>
          <p className="font-brand text-2xl font-bold text-white leading-snug mb-4">A new QBCore version for Mantle.</p>
          <p className="text-stone-400 leading-relaxed text-sm">The new repository will be made public when it is ready.</p>
        </div>
      </div>
    </section>
  );
}
