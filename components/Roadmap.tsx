const items = [
  {
    phase: "Foundation",
    status: "complete",
    label: "Complete",
    points: [
      "FiveM framework established",
      "Core architecture defined",
      "Developer ecosystem built",
      "Open-source foundation laid",
    ],
  },
  {
    phase: "Expansion",
    status: "active",
    label: "In Progress",
    points: [
      "QBCore Specification drafted",
      "Roblox native implementation",
      "Domain-driven architecture",
      "Cross-platform team model",
    ],
  },
  {
    phase: "Next",
    status: "planned",
    label: "Planned",
    points: [
      "UEFN / Verse implementation",
      "Specification v1 published",
      "Platform-specific developer teams",
      "Additional UGC platforms evaluated",
    ],
  },
];

const statusStyles: Record<string, { dot: string; text: string; border: string; bg: string }> = {
  complete: {
    dot: "bg-accent",
    text: "text-accent",
    border: "border-accent/20",
    bg: "bg-accent/5",
  },
  active: {
    dot: "bg-steel animate-pulse",
    text: "text-steel",
    border: "border-steel/20",
    bg: "bg-steel/5",
  },
  planned: {
    dot: "bg-stone-600",
    text: "text-stone-500",
    border: "border-white/[0.06]",
    bg: "bg-white/[0.02]",
  },
};

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-28 px-6 border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
            Roadmap
          </p>
          <h2 className="text-balance font-brand text-3xl sm:text-4xl font-bold text-white mb-5">
            Where QBCore is headed.
          </h2>
          <p className="text-pretty max-w-xl mx-auto text-stone-500 leading-relaxed text-sm">
            Teams are being built around each platform. FiveM developers shape FiveM.
            Roblox developers shape Roblox. Verse developers shape UEFN.
          </p>
        </div>

        <div className="@container">
          <div className="reveal-stagger grid @md:grid-cols-3 gap-5">
            {items.map((item) => {
              const s = statusStyles[item.status];
              return (
                <div
                  key={item.phase}
                  className={`rounded-xl border ${s.border} ${s.bg} p-7`}
                >
                  <div className="flex items-center gap-2 mb-5">
                    <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                    <span className={`font-mono text-[10px] tracking-widest uppercase ${s.text}`}>
                      {item.label}
                    </span>
                  </div>
                  <h3 className="font-brand text-white font-bold mb-4">{item.phase}</h3>
                  <ul className="space-y-2">
                    {item.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-stone-700 shrink-0" />
                        <span className="text-stone-500 text-sm">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
