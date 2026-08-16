const links = [
  {
    title: "Framework",
    items: [
      { label: "Platforms", href: "#platforms" },
      { label: "Specification", href: "#specification" },
      { label: "Domain Architecture", href: "#" },
      { label: "Design Principles", href: "#" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Documentation", href: "#" },
      { label: "GitHub", href: "https://github.com/qbcore-framework", external: true },
      { label: "Community", href: "#" },
      { label: "Roadmap", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-14 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-10 mb-14">
          {/* Brand */}
          <div>
            <p className="font-mono text-sm font-bold tracking-[0.2em] text-[#4ade80] uppercase mb-3">
              QB<span className="text-white">CORE</span>
            </p>
            <p className="text-zinc-600 text-xs leading-relaxed max-w-xs">
              Open-source roleplay framework ecosystem. One philosophy. Multiple platforms. Built for roleplay.
            </p>
          </div>

          {links.map((group) => (
            <div key={group.title}>
              <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-4">
                {group.title}
              </p>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={"external" in item && item.external ? "_blank" : undefined}
                      rel={"external" in item && item.external ? "noopener noreferrer" : undefined}
                      className="text-zinc-500 text-sm hover:text-zinc-300 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.04] pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-700 text-xs font-mono">
            QBCore — Open Source
          </p>
          <p className="text-zinc-700 text-xs">
            FiveM built the foundation. Roblox is the first expansion. UEFN is next.
          </p>
        </div>
      </div>
    </footer>
  );
}
