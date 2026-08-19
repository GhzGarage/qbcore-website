const platforms = [
  {
    name: "FiveM",
    status: "Established",
    statusColor: "text-accent",
    statusBorder: "border-accent/20",
    statusBg: "bg-accent/10",
    lang: "Lua + FiveM APIs",
    tagline: "FiveM built the foundation.",
    description:
      "FiveM is the foundation of QBCore. It is where the framework established its architecture, ecosystem, concepts, and developer community. The expansion of QBCore does not mean FiveM is being abandoned or replaced.",
    cardBorder: "border-accent/15",
    accentColor: "text-accent",
  },
  {
    name: "Roblox",
    status: "In Active Development",
    statusColor: "text-sky-400",
    statusBorder: "border-sky-400/20",
    statusBg: "bg-sky-400/10",
    lang: "Luau + Roblox Services",
    tagline: "The first major expansion.",
    description:
      "Roblox is the first major QBCore expansion outside FiveM. It is implemented natively around Roblox services, networking, persistence, avatars, and development patterns. It is not a port of FiveM's Lua code. The architecture feels familiar to QBCore developers while feeling natural to Roblox developers.",
    cardBorder: "border-sky-400/15",
    accentColor: "text-sky-400",
  },
  {
    name: "UEFN",
    status: "Research & Development",
    statusColor: "text-violet-400",
    statusBorder: "border-violet-400/20",
    statusBg: "bg-violet-400/10",
    lang: "Verse + UEFN / Fortnite APIs",
    tagline: "UEFN is next.",
    description:
      "UEFN is the next target platform. QBCore concepts will be translated into the Fortnite ecosystem using UEFN and native Verse patterns. The implementation is in early research and development.",
    cardBorder: "border-violet-400/15",
    accentColor: "text-violet-400",
  },
];

export default function Platforms() {
  return (
    <section id="platforms" className="py-28 px-6 border-t border-white/[0.04] grid-bg">
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
            Platforms
          </p>
          <h2 className="text-balance font-brand text-3xl sm:text-4xl font-bold text-white mb-5">
            One specification. Native everywhere.
          </h2>
          <p className="text-pretty max-w-xl mx-auto text-zinc-500 leading-relaxed">
            Each platform receives its own QBCore implementation, built with that
            platform&apos;s language, APIs, and native patterns.
          </p>
        </div>

        <div className="@container">
          <div className="reveal-stagger grid @md:grid-cols-3 gap-5">
            {platforms.map((p) => (
              <div
                key={p.name}
                className={`rounded border ${p.cardBorder} bg-white/[0.02] p-7 flex flex-col hover:bg-white/[0.04] transition-colors`}
              >
                {/* Status badge */}
                <div className="mb-5">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-mono font-medium tracking-wider ${p.statusColor} ${p.statusBorder} ${p.statusBg} border`}
                  >
                    <span className="w-1 h-1 rounded-full bg-current" />
                    {p.status}
                  </span>
                </div>

                {/* Name */}
                <h3 className={`text-2xl font-bold font-mono mb-1 ${p.accentColor}`}>
                  {p.name}
                </h3>
                <p className="text-zinc-600 text-xs font-mono mb-5">{p.lang}</p>

                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed flex-1 mb-6">
                  {p.description}
                </p>

                {/* Tagline */}
                <p className={`font-mono text-xs ${p.accentColor} tracking-wide border-t border-white/[0.04] pt-5`}>
                  {p.tagline}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
