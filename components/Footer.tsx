import QBMark from "./QBMark";
import SocialLinks from "./SocialLinks";

const links = [
  {
    title: "Framework",
    items: [
      { label: "Platforms", href: "#platforms" },
      { label: "Specification", href: "#specification" },
      { label: "Domain Architecture", href: "#domain-architecture" },
      { label: "Design Principles", href: "#principles" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Documentation", href: "https://docs.qbcore.org/", external: true },
      { label: "GitHub", href: "https://github.com/qbcore-framework", external: true },
      { label: "Discord", href: "https://discord.gg/qbcore", external: true },
      { label: "Roadmap", href: "#roadmap" },
      { label: "Contact", href: "mailto:kakarot@qbcore.org", external: true },
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
            <div className="flex items-center gap-2 mb-3">
              <QBMark className="h-5 w-auto text-accent-dim" />
              <span className="font-brand text-base font-extrabold tracking-tight text-white lowercase">
                qbcore
              </span>
            </div>
            <p className="text-stone-400 text-xs leading-relaxed max-w-xs">
              Open-source roleplay framework ecosystem. One philosophy. Multiple platforms. Built for roleplay.
            </p>
            <SocialLinks />
          </div>

          {links.map((group) => (
            <div key={group.title}>
              <p className="font-mono text-[10px] text-stone-400 uppercase tracking-widest mb-4">
                {group.title}
              </p>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={"external" in item && item.external ? "_blank" : undefined}
                      rel={"external" in item && item.external ? "noopener noreferrer" : undefined}
                      className="text-stone-400 text-sm hover:text-stone-300 transition-colors"
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
          <p className="text-stone-400 text-xs font-mono">
            QBCore — Open Source
          </p>
          <p className="text-stone-400 text-xs">
            FiveM built the foundation. RedM followed. Roblox is the first expansion. UEFN is next. CyberMP is under evaluation.
          </p>
        </div>
      </div>
    </footer>
  );
}
