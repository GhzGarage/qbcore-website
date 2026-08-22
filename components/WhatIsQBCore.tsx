export default function WhatIsQBCore() {
  return (
    <section id="what-is-qbcore" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
              What Is QBCore?
            </p>
            <h2 className="text-balance font-brand text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
              Roleplay architecture sitting on top of the platform.
            </h2>
            <p className="text-pretty text-stone-400 leading-relaxed mb-4">
              QBCore is not a game engine, a hosting provider, or a marketplace. It is
              the roleplay architecture layer that lives between the platform you build
              on and the world your creators bring to life.
            </p>
            <p className="text-pretty text-stone-400 leading-relaxed">
              The platform handles the runtime, networking, hosting, and player
              identity. QBCore handles characters, accounts, roles, permissions,
              persistence, and the full vocabulary of roleplay systems. Creators then
              provide their world, rules, content, and stories.
            </p>
          </div>

          {/* Layer diagram */}
          <div className="reveal-stagger space-y-2 font-mono text-sm">
            <div className="rounded-xl border border-accent/20 bg-accent/5 p-5">
              <p className="text-accent text-xs tracking-widest uppercase font-bold mb-2">Platform</p>
              <p className="text-stone-400 text-xs leading-relaxed">
                Runtime · Networking · Hosting · Identity · Tools · Players
              </p>
            </div>

            <div className="flex items-center justify-center text-stone-400 text-lg">↓</div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-white text-xs tracking-widest uppercase font-bold mb-2">QBCore</p>
              <p className="text-stone-400 text-xs leading-relaxed">
                Characters · Roles · Economy · Persistence · Permissions · RP Systems
              </p>
            </div>

            <div className="flex items-center justify-center text-stone-400 text-lg">↓</div>

            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
              <p className="text-stone-300 text-xs tracking-widest uppercase font-bold mb-2">Creator</p>
              <p className="text-stone-400 text-xs leading-relaxed">
                World · Rules · Content · Stories · Gameplay
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
