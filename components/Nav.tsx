"use client";
import { useEffect, useRef, useState } from "react";
import QBMark from "./QBMark";

type NavLink = {
  label: string;
  href: string;
  external?: boolean;
  // Shown in the horizontal desktop bar. Everything else is menu-only.
  // The bar has a hard width budget: at the lg breakpoint it has 851px
  // between the wordmark and the right edge, and these eight labels plus
  // their 32px gaps come to 698px. Adding a ninth (Architecture, the
  // widest remaining, at 76px + gap) needs 806px and leaves 45px of
  // slack — too little to survive a font fallback or browser zoom. Add
  // one here only by removing one.
  primary?: boolean;
};

const links: NavLink[] = [
  { label: "About", href: "#about", primary: true },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Specification", href: "#specification", primary: true },
  { label: "Architecture", href: "#architecture" },
  { label: "Platforms", href: "#platforms", primary: true },
  { label: "UGC Platforms", href: "#ugc" },
  { label: "Principles", href: "#principles" },
  { label: "Roadmap", href: "#roadmap", primary: true },
  { label: "Tooling", href: "#tooling" },
  { label: "Funding", href: "#support", primary: true },
  { label: "Vision", href: "#vision" },
  { label: "Documentation", href: "https://docs.qbcore.org/", external: true, primary: true },
  { label: "GitHub", href: "https://github.com/qbcore-framework", external: true, primary: true },
  { label: "Discord", href: "https://discord.gg/qbcore", external: true, primary: true },
  { label: "Contact", href: "mailto:kakarot@qbcore.org", external: true },
];

// The menu lists every section; the bar lists the primary ones.
const desktopLinks = links.filter((l) => l.primary);

// Only in-page anchors participate in scroll-spy, and only the ones the
// bar actually renders — the sliding indicator has nothing to sit under
// for a menu-only section.
const sectionIds = desktopLinks
  .filter((l) => !l.external)
  .map((l) => l.href.slice(1));

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);

  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: the active link is the last section whose top has passed
  // the middle of the viewport.
  //
  // This replaced an IntersectionObserver with rootMargin "-45% 0px -45%",
  // which could not work here. That root is a band 10% of the viewport
  // tall — 90px at 900px — while these sections run 588px to 1487px, so
  // intersectionRatio peaked at 0.15 and never reached the observer's own
  // 0.25 threshold. Only threshold 0 ever fired, leaving the spy dependent
  // on catching a single edge-crossing per section; a smooth scroll that
  // cleared the band between animation frames coalesced enter and exit into
  // one batch reporting isIntersecting: false, which the callback discarded,
  // stranding the indicator on the previous link. The longest jumps in the
  // bar failed most often.
  //
  // Reading positions instead is immune to that: it does not care how fast
  // the scroll moved or how tall a section is, only where things are now.
  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const middle = window.innerHeight / 2;
      // sectionIds is in document order, so the last match wins — which
      // keeps the nearest preceding link lit while scrolling through a
      // section the bar does not list, instead of blanking the indicator.
      let current: string | null = null;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= middle) current = id;
      }
      setActiveId(current);
    };

    // Coalesce to one measurement per frame; scroll fires far more often.
    const onScroll = () => {
      if (frame === 0) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame !== 0) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Position the sliding indicator under the active link.
  useEffect(() => {
    if (!activeId || !navRef.current) {
      setIndicator(null);
      return;
    }
    const link = linkRefs.current[`#${activeId}`];
    if (!link) {
      setIndicator(null);
      return;
    }
    const navRect = navRef.current.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    setIndicator({ left: linkRect.left - navRect.left, width: linkRect.width });
  }, [activeId]);

  // Sync the hamburger icon with the popover's native open/close state.
  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    const onToggle = (e: Event) => {
      const evt = e as ToggleEvent;
      setMenuOpen(evt.newState === "open");
    };
    menu.addEventListener("toggle", onToggle as EventListener);
    return () => menu.removeEventListener("toggle", onToggle as EventListener);
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Background layer, kept permanently mounted with backdrop-blur and
            the bottom border always present — only opacity crossfades on
            scroll. Toggling backdrop-blur/border on and off via conditional
            classes forces Chromium to create/destroy the backdrop-filter
            compositor layer on every threshold crossing, which reads as a
            one-frame white flash right at the top of the page. Animating
            opacity on an always-present layer avoids that entirely. */}
        <div
          className={`absolute inset-0 bg-background/90 backdrop-blur border-b border-white/[0.06] transition-opacity duration-300 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <QBMark className="h-6 w-auto text-accent-dim" />
            <span className="font-brand text-lg font-extrabold tracking-tight text-white lowercase">
              qbcore
            </span>
          </a>

          {/* Desktop nav */}
          <nav ref={navRef} className="relative hidden lg:flex items-center gap-8">
            {indicator && (
              <span
                className="absolute -bottom-2 h-px bg-accent transition-all duration-300 ease-out"
                style={{ left: indicator.left, width: indicator.width }}
                aria-hidden="true"
              />
            )}
            {desktopLinks.map((l) => {
              const isActive = !l.external && activeId === l.href.slice(1);
              return (
                <a
                  key={l.label}
                  ref={(el) => {
                    linkRefs.current[l.href] = el;
                  }}
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noopener noreferrer" : undefined}
                  className={`text-sm transition-colors ${
                    isActive ? "text-white" : "text-stone-400 hover:text-white"
                  }`}
                  aria-current={isActive ? "true" : undefined}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>

          {/* Mobile menu trigger — native Popover API */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            popoverTarget="mobile-menu"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block h-px w-5 bg-stone-400 transition-all ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
            <span className={`block h-px w-5 bg-stone-400 transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-5 bg-stone-400 transition-all ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
          </button>
        </div>

        {/* Mobile menu — native popover, gets light-dismiss + top-layer for free */}
        <div
          ref={menuRef}
          id="mobile-menu"
          popover="auto"
          className="lg:hidden m-0 mt-16 w-full max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-b border-white/[0.06] bg-background/95 backdrop-blur px-6 pb-6 pt-2 [inset:auto_0_auto_0] [position:fixed]"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              className="block py-3 text-sm text-stone-400 hover:text-white border-b border-white/[0.04] transition-colors"
              popoverTargetAction="hide"
              popoverTarget="mobile-menu"
            >
              {l.label}
            </a>
          ))}
        </div>
      </header>
    </>
  );
}
