import QBMark from "./QBMark";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-14 px-6">
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <QBMark className="h-5 w-auto text-accent-dim" />
            <span className="font-brand text-base font-extrabold tracking-tight text-white lowercase">qbcore</span>
          </div>
          <p className="text-stone-400 text-xs leading-relaxed max-w-xs">The flagship open-source roleplay framework for Mantle.</p>
          <SocialLinks />
        </div>
        <div>
          <p className="font-mono text-[10px] text-stone-400 uppercase tracking-widest mb-4">Explore</p>
          <ul className="space-y-2.5 text-sm text-stone-400">
            <li><a href="#about" className="hover:text-stone-300">Mantle</a></li>
            <li><a href="#relationship" className="hover:text-stone-300">The framework</a></li>
            <li><a href="#faq" className="hover:text-stone-300">Next steps</a></li>
            <li><a href="https://github.com/qbcore-framework" target="_blank" rel="noopener noreferrer" className="hover:text-stone-300">GitHub</a></li>
            <li><a href="https://discord.gg/mantlegame" target="_blank" rel="noopener noreferrer" className="hover:text-stone-300">Discord</a></li>
            <li><a href="mailto:kakarot@qbcore.org" className="hover:text-stone-300">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
