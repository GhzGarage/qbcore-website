const principles = [
  {
    number: "01",
    title: "Platform Native",
    description:
      "Use each host ecosystem the way it was designed to be used. Don’t fight the platform.",
  },
  {
    number: "02",
    title: "Familiar Concepts",
    description:
      "Developers moving between implementations should recognize the architecture even if the syntax is different.",
  },
  {
    number: "03",
    title: "Domain Ownership",
    description:
      "Each domain owns its state, rules, and mutation contracts. No domain reaches into another’s internals.",
  },
  {
    number: "04",
    title: "Authority First",
    description:
      "Protected state is controlled by trusted authority. Clients request, they do not dictate authoritative outcomes.",
  },
  {
    number: "05",
    title: "Open by Default",
    description:
      "The framework ecosystem and specification remain open foundations. Not a paid SaaS product.",
  },
  {
    number: "06",
    title: "Selective Expansion",
    description:
      "QBCore only expands to platforms where it genuinely makes sense and can provide real value.",
  },
];

export default function Principles() {
  return (
    <section id="principles" className="py-28 px-6 border-t border-white/[0.04] grid-bg">
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
            Design Principles
          </p>
          <h2 className="text-balance font-brand text-3xl sm:text-4xl font-bold text-white mb-5">
            The values behind every decision.
          </h2>
        </div>

        <div className="@container">
          <div className="reveal-stagger grid @sm:grid-cols-2 @lg:grid-cols-3 gap-px bg-white/[0.04]">
            {principles.map((p) => (
              <div key={p.number} className="bg-background p-7 hover:bg-white/[0.02] transition-colors">
                <p className="font-mono text-[10px] text-zinc-700 mb-3 tracking-widest">{p.number}</p>
                <h3 className="font-brand text-white font-bold text-sm mb-3">{p.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
