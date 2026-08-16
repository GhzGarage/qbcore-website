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
    dot: "bg-[#4ade80]",
    text: "text-[#4ade80]",
    border: "border-[#4ade80]/20",
    bg: "bg-[#4ade80]/5",
  },
  active: {
    dot: "bg-sky-400 animate-pulse",
    text: "text-sky-400",
    border: "border-sky-400/20",
    bg: "bg-sky-400/5",
  },
  planned: {
    dot: "bg-zinc-600",
    text: "text-zinc-500",
    border: "border-white/[0.06]",
    bg: "bg-white/[0.02]",
  },
};

export default function Roadmap() {
  return (
    <section className="py-28 px-6 border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-[#4ade80] tracking-widest uppercase mb-4">
            Roadmap
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-5">
            Where QBCore is headed.
          </h2>
          <p className="max-w-xl mx-auto text-zinc-500 leading-relaxed text-sm">
            Teams are being built around each platform. FiveM developers shape FiveM.
            Roblox developers shape Roblox. Verse developers shape UEFN.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((item) => {
            const s = statusStyles[item.status];
            return (
              <div
                key={item.phase}
                className={`rounded border ${s.border} ${s.bg} p-7`}
              >
                <div className="flex items-center gap-2 mb-5">
                  <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                  <span className={`font-mono text-[10px] tracking-widest uppercase ${s.text}`}>
                    {item.label}
                  </span>
                </div>
                <h3 className="text-white font-semibold mb-4">{item.phase}</h3>
                <ul className="space-y-2">
                  {item.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-zinc-700 shrink-0" />
                      <span className="text-zinc-500 text-sm">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
