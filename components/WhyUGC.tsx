const platformProvides = [
  "Runtime & Game Engine",
  "Networking",
  "Hosting & Infrastructure",
  "Player Identity",
  "Creation Tools",
  "Player Ecosystem & Distribution",
];

const criteria = [
  "Meaningful UGC ecosystem",
  "Developers can build substantial experiences",
  "Roleplay fits naturally",
  "QBCore provides genuine value",
  "Platform supports native implementation",
];

export default function WhyUGC() {
  return (
    <section className="py-28 px-6 border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-[#4ade80] tracking-widest uppercase mb-4">
            Why UGC Platforms?
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-5">
            Focus on roleplay architecture,
            <br />
            <span className="text-zinc-400">not runtime engineering.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-zinc-500 leading-relaxed">
            QBCore is not attempting to become a general-purpose game engine. UGC
            platforms already provide the foundation. QBCore focuses on what sits on
            top: the architecture of roleplay.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <div className="rounded border border-white/[0.06] bg-white/[0.02] p-7">
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-5">
              The platform provides
            </p>
            <ul className="space-y-3">
              {platformProvides.map((item) => (
                <li key={item} className="flex items-center gap-3 text-zinc-400 text-sm">
                  <span className="w-1 h-1 rounded-full bg-zinc-700 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded border border-[#4ade80]/10 bg-[#4ade80]/[0.03] p-7">
            <p className="font-mono text-xs text-[#4ade80] uppercase tracking-widest mb-5">
              QBCore focuses on
            </p>
            <ul className="space-y-3">
              {[
                "Characters & Persistence",
                "Roles & Capabilities",
                "Accounts & Economy",
                "Permissions & Authority",
                "Roleplay Systems Architecture",
                "The QBCore Specification",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-zinc-300 text-sm">
                  <span className="w-1 h-1 rounded-full bg-[#4ade80]/60 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Selective expansion */}
        <div className="rounded border border-white/[0.06] p-7">
          <h3 className="text-white font-medium mb-2">Selective expansion.</h3>
          <p className="text-zinc-500 text-sm leading-relaxed mb-5">
            QBCore does not need to exist on every possible platform. A future platform
            should only receive a QBCore implementation where it genuinely makes sense.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {criteria.map((c) => (
              <div key={c} className="flex items-start gap-2.5">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-[#4ade80]/50 shrink-0" />
                <p className="text-zinc-500 text-xs">{c}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-xs text-zinc-600 italic">
            &ldquo;The goal isn&rsquo;t to collect platform logos.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
