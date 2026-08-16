"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "Platforms", href: "#platforms" },
  { label: "Specification", href: "#specification" },
  { label: "Documentation", href: "#" },
  { label: "GitHub", href: "https://github.com/qbcore-framework", external: true },
  { label: "Community", href: "#" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0d0f]/90 backdrop-blur border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="font-mono text-sm font-bold tracking-[0.2em] text-[#4ade80] uppercase group-hover:text-white transition-colors">
            QB<span className="text-white">CORE</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-5 bg-zinc-400 transition-all ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
          <span className={`block h-px w-5 bg-zinc-400 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-5 bg-zinc-400 transition-all ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d0d0f]/95 backdrop-blur border-b border-white/[0.06] px-6 pb-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              className="block py-3 text-sm text-zinc-400 hover:text-white border-b border-white/[0.04] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
