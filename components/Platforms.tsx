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
    glow: "hover:shadow-[0_0_44px_-10px_var(--accent)] hover:border-accent/40",
  },
  {
    name: "RedM",
    status: "Established",
    statusColor: "text-accent",
    statusBorder: "border-accent/20",
    statusBg: "bg-accent/10",
    lang: "Lua + RedM APIs",
    tagline: "The next endeavor after FiveM.",
    description:
      "RedM is QBCore's implementation for Red Dead Redemption 2 — the endeavor that followed FiveM, built on that same Cfx.re framework. It reuses FiveM's Lua foundation and much of its architecture, adapted for RedM's APIs and setting. It is already established, not a future expansion.",
    cardBorder: "border-accent/15",
    accentColor: "text-accent",
    glow: "hover:shadow-[0_0_44px_-10px_var(--accent)] hover:border-accent/40",
  },
  {
    name: "Roblox",
    status: "In Active Development",
    statusColor: "text-steel",
    statusBorder: "border-steel/20",
    statusBg: "bg-steel/10",
    lang: "Luau + Roblox Services",
    tagline: "The first major expansion.",
    description:
      "Roblox is the first major QBCore expansion outside FiveM. It is implemented natively around Roblox services, networking, persistence, avatars, and development patterns. It is not a port of FiveM’s Lua code. The architecture feels familiar to QBCore developers while remaining natural to Roblox developers.",
    cardBorder: "border-steel/15",
    accentColor: "text-steel",
    glow: "hover:shadow-[0_0_44px_-10px_var(--steel)] hover:border-steel/40",
  },
  {
    name: "UEFN",
    status: "Research & Development",
    statusColor: "text-gold",
    statusBorder: "border-gold/20",
    statusBg: "bg-gold/10",
    lang: "Verse + UEFN / Fortnite APIs",
    tagline: "UEFN is next.",
    description:
      "UEFN is the next target platform. QBCore concepts will be translated into the Fortnite ecosystem using UEFN and native Verse patterns. The implementation is in early research and development.",
    cardBorder: "border-gold/15",
    accentColor: "text-gold",
    glow: "hover:shadow-[0_0_44px_-10px_var(--gold)] hover:border-gold/40",
  },
  {
    name: "CyberMP",
    status: "Under Evaluation",
    statusColor: "text-moss",
    statusBorder: "border-moss/20",
    statusBg: "bg-moss/10",
    lang: "Redscript + C# (.NET SDK)",
    tagline: "CyberMP is under evaluation.",
    description:
      "CyberMP is a multiplayer mod for Cyberpunk 2077, currently in semi-open beta. QBCore has not committed to a CyberMP implementation — it is being evaluated for whether Night City is a genuine fit, following the same selective-expansion principle applied to every platform.",
    cardBorder: "border-moss/15",
    accentColor: "text-moss",
    glow: "hover:shadow-[0_0_44px_-10px_var(--moss)] hover:border-moss/40",
  },
];

export default function Platforms() {
  return (
    <section id="platforms" className="py-28 px-6 border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
            Platforms
          </p>
          <h2 className="text-balance font-brand text-3xl sm:text-4xl font-bold text-white mb-5">
            One specification. Native everywhere.
          </h2>
          <p className="text-pretty max-w-xl mx-auto text-stone-400 leading-relaxed">
            Each platform receives its own QBCore implementation, built with that
            platform&rsquo;s language, APIs, and native patterns.
          </p>
        </div>

        <div className="@container">
          <div className="reveal-stagger grid @md:grid-cols-2 @xl:grid-cols-4 gap-5">
            {platforms.map((p) => (
              <div
                key={p.name}
                className={`rounded-xl border ${p.cardBorder} ${p.glow} bg-white/[0.02] p-7 flex flex-col transition-all duration-300 ease-out hover:bg-white/[0.04] hover:-translate-y-1`}
              >
                {/* Status badge */}
                <div className="mb-5">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium tracking-wider ${p.statusColor} ${p.statusBorder} ${p.statusBg} border`}
                  >
                    <span className="w-1 h-1 rounded-full bg-current" />
                    {p.status}
                  </span>
                </div>

                {/* Name */}
                <h3 className={`text-2xl font-bold font-mono mb-1 ${p.accentColor}`}>
                  {p.name}
                </h3>
                <p className="text-stone-400 text-xs font-mono mb-5">{p.lang}</p>

                {/* Description */}
                <p className="text-stone-400 text-sm leading-relaxed flex-1 mb-6">
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
