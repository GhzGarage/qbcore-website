export default function Vision() {
  return (
    <section id="faq" className="py-24 sm:py-32 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24">
        <div className="reveal">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-5">03 / What comes next</p>
          <h2 className="text-balance font-brand text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">Follow the project.</h2>
          <p className="text-pretty text-lg text-stone-400 leading-relaxed">Join the community for updates as QBCore takes shape.</p>
        </div>
        <div className="reveal">
          <div className="border-t border-white/10 py-6"><h3 className="font-brand text-xl font-bold text-white mb-3">When can I see the code?</h3><p className="text-stone-400 leading-relaxed">The new repository will appear in the QBCore GitHub organization when it is ready. There is no public release date yet.</p></div>
          <div className="border-t border-white/10 py-6"><h3 className="font-brand text-xl font-bold text-white mb-3">Where can I follow along?</h3><p className="text-stone-400 leading-relaxed">Join the Mantle community on Discord and follow QBCore on GitHub.</p></div>
          <div className="flex flex-col sm:flex-row gap-4 mt-5"><a href="https://github.com/qbcore-framework" target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center justify-center h-12 px-7 rounded-xl text-sm font-semibold">Visit GitHub</a><a href="https://discord.gg/mantlegame" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-12 px-7 rounded-xl border border-white/15 text-stone-300 text-sm font-medium hover:bg-white/[0.04]">Join Discord</a></div>
        </div>
      </div>
    </section>
  );
}
