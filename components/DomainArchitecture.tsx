export default function DomainArchitecture() {
  return (
    <section id="domain-architecture" className="relative py-28 px-6 border-t border-white/[0.04] overflow-hidden">
      {/* Faint background glow, echoing the Hero/Vision treatment */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 45% at 75% 50%, color-mix(in oklab, var(--accent) 4%, transparent) 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
              Domain Architecture
            </p>
            <h2 className="text-balance font-brand text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Moving away from the monolithic PlayerData model.
            </h2>
            <p className="text-pretty text-stone-400 leading-relaxed mb-4">
              A Character is the persistent roleplay identity. It does not physically
              contain every gameplay system. Each QBCore domain owns its own concepts,
              authoritative state, rules, and supported operations.
            </p>
            <p className="text-pretty text-stone-400 leading-relaxed">
              Domains communicate through documented contracts rather than modifying one
              another&rsquo;s internals. This is a deliberate architectural boundary — not a
              stylistic preference.
            </p>
          </div>

          {/* Architecture diagram */}
          <div className="reveal-stagger font-mono text-sm">
            {/* Character root */}
            <div className="flex justify-center mb-2">
              <div className="px-5 py-3 rounded-xl border border-white/20 bg-white/[0.04] text-center">
                <p className="text-white text-xs font-bold tracking-widest uppercase">Character</p>
                <p className="text-stone-400 text-[10px] mt-0.5">Persistent RP Identity</p>
              </div>
            </div>

            {/* Connector line */}
            <div className="flex justify-center mb-2">
              <div className="w-px h-5 bg-stone-700" />
            </div>

            {/* Branch line */}
            <div className="relative flex justify-center mb-2">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-stone-700" />
            </div>

            {/* Three domains */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[
                { name: "Accounts", color: "text-emerald-400", border: "border-emerald-400/20", bg: "bg-emerald-400/5", glow: "hover:shadow-[0_0_28px_-8px_#34d399] hover:border-emerald-400/40" },
                { name: "Roles", color: "text-steel", border: "border-steel/20", bg: "bg-steel/5", glow: "hover:shadow-[0_0_28px_-8px_var(--steel)] hover:border-steel/40" },
                { name: "Inventory", color: "text-amber-400", border: "border-amber-400/20", bg: "bg-amber-400/5", glow: "hover:shadow-[0_0_28px_-8px_#fbbf24] hover:border-amber-400/40" },
              ].map((d) => (
                <div
                  key={d.name}
                  className={`rounded-xl border ${d.border} ${d.bg} ${d.glow} px-2 py-3 text-center transition-all duration-300 ease-out hover:-translate-y-0.5`}
                >
                  <p className={`text-[10px] font-bold tracking-widest uppercase ${d.color}`}>{d.name}</p>
                </div>
              ))}
            </div>

            {/* Connector */}
            <div className="flex justify-center mb-2">
              <div className="w-px h-5 bg-stone-700" />
            </div>

            {/* Lower domains */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { name: "Vehicles", color: "text-stone-300", border: "border-white/[0.06]", bg: "bg-white/[0.02]" },
                { name: "Organizations", color: "text-stone-300", border: "border-white/[0.06]", bg: "bg-white/[0.02]" },
                { name: "Housing", color: "text-stone-300", border: "border-white/[0.06]", bg: "bg-white/[0.02]" },
              ].map((d) => (
                <div key={d.name} className={`rounded-xl border ${d.border} ${d.bg} px-2 py-3 text-center`}>
                  <p className={`text-[10px] font-bold tracking-widest uppercase ${d.color}`}>{d.name}</p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-center text-[10px] text-stone-400 tracking-wide">
              Each domain owns its state and contracts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
