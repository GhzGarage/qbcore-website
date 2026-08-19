const platforms = [
  {
    name: "FiveM",
    lang: "Lua",
    note: "FiveM APIs",
    color: "text-accent",
    border: "border-accent/20",
    bg: "bg-accent/5",
  },
  {
    name: "Roblox",
    lang: "Luau",
    note: "Roblox Services",
    color: "text-sky-400",
    border: "border-sky-400/20",
    bg: "bg-sky-400/5",
  },
  {
    name: "UEFN",
    lang: "Verse",
    note: "UEFN / Fortnite APIs",
    color: "text-violet-400",
    border: "border-violet-400/20",
    bg: "bg-violet-400/5",
  },
];

export default function CrossPlatform() {
  return (
    <section id="cross-platform" className="py-20 px-6 border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-14">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
            Cross-Platform Philosophy
          </p>
          <h2 className="text-balance font-brand text-3xl sm:text-4xl font-bold text-white mb-5">
            The implementation changes.
            <br />
            <span className="text-zinc-400">The concepts stay familiar.</span>
          </h2>
          <p className="text-pretty max-w-2xl mx-auto text-zinc-500 leading-relaxed">
            Cross-platform does not mean one codebase running everywhere. Every
            platform receives its own native QBCore implementation using that
            platform&rsquo;s language, APIs, networking model, and tooling. The shared layer
            is the QBCore philosophy, concepts, and specification.
          </p>
        </div>

        {/* Philosophy statement */}
        <div className="reveal mb-12 p-5 rounded border border-white/[0.06] bg-white/[0.02] text-center">
          <p className="font-mono text-sm text-zinc-300">
            <span className="text-accent">Standardize semantics</span>,{" "}
            <span className="text-zinc-500">not syntax.</span>
          </p>
        </div>

        <div className="@container">
          <div className="reveal-stagger grid @sm:grid-cols-3 gap-4">
            {platforms.map((p) => (
              <div key={p.name} className={`rounded border ${p.border} ${p.bg} p-6`}>
                <p className={`font-mono text-xs tracking-widest uppercase font-bold mb-3 ${p.color}`}>
                  {p.name}
                </p>
                <div className="space-y-1">
                  <p className="text-zinc-300 text-sm font-mono">{p.lang}</p>
                  <p className="text-zinc-600 text-xs">{p.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-zinc-600 font-mono tracking-wide">
          Each implementation is native to its platform. &nbsp;None are ports of another.
        </p>
      </div>
    </section>
  );
}
