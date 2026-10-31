export default function WhatIsQBCore() {
  return (
    <>
      <section id="about" className="py-24 sm:py-32 px-6 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-24">
          <div className="reveal">
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-5">01 / The platform</p>
            <h2 className="text-balance font-brand text-4xl sm:text-5xl font-bold text-white leading-tight">A place to create and play.</h2>
          </div>
          <div className="reveal">
            <p className="text-pretty text-xl sm:text-2xl font-brand text-stone-200 leading-relaxed mb-6">Mantle brings worlds made in Unreal Engine 5 to players on PC.</p>
            <p className="text-pretty text-stone-400 leading-relaxed max-w-2xl">Creators build worlds in the Unreal Editor using a free plugin called Mantle Core. It helps them check and publish their worlds. Players can then join worlds through the Mantle PC app.</p>
            <a href="https://mantleplatform.com/#status" target="_blank" rel="noopener noreferrer" className="inline-flex mt-7 text-sm font-semibold text-accent hover:text-white transition-colors">See Mantle&apos;s current status <span aria-hidden="true" className="ml-2">↗</span></a>
            <div className="mt-10 grid sm:grid-cols-2 border-t border-white/10">
              <div className="py-6 sm:pr-8 border-b sm:border-b-0 sm:border-r border-white/10"><p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">For creators</p><a href="https://mantleplatform.com/" target="_blank" rel="noopener noreferrer" className="text-white font-brand text-lg font-semibold hover:text-accent transition-colors">Learn about the free Mantle Core plugin on Mantle&apos;s website <span aria-hidden="true">↗</span></a></div>
              <div className="py-6 sm:pl-8"><p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">For players</p><p className="text-white font-brand text-lg font-semibold">The app is in closed testing on Steam and Epic Games Store.</p></div>
            </div>
          </div>
        </div>
      </section>
      <section id="relationship" className="py-24 sm:py-32 px-6 border-t border-white/[0.06] bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="reveal max-w-3xl mb-14">
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-5">02 / The framework</p>
            <h2 className="text-balance font-brand text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">A foundation for roleplay creators.</h2>
            <p className="text-pretty text-lg text-stone-400 leading-relaxed">QBCore is shared software with roleplay systems creators can use to build their own experiences. The new version is being made for Mantle and will be open source, so its code can be shared and built upon.</p>
          </div>
          <div className="reveal border-t border-white/10 pt-8 max-w-3xl">
            <h3 className="font-brand text-xl font-bold text-white mb-3">A new focus</h3>
            <p className="text-stone-400 leading-relaxed">QBCore is withdrawing from all other platforms to focus on Mantle. This is a new version of the framework, with more details to come as development continues.</p>
          </div>
        </div>
      </section>
    </>
  );
}
