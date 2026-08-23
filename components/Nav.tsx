"use client";
import { useEffect, useRef, useState } from "react";
import QBMark from "./QBMark";

const links = [
  { label: "Specification", href: "#specification" },
  { label: "Platforms", href: "#platforms" },
  { label: "Documentation", href: "https://docs.qbcore.org/", external: true },
  { label: "GitHub", href: "https://github.com/qbcore-framework", external: true },
  { label: "Community", href: "https://discord.gg/qbcore", external: true },
  { label: "Contact", href: "mailto:kakarot@qbcore.org", external: true },
];

// Only in-page anchors participate in scroll-spy; external links never light up.
const sectionIds = links
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

  // Scroll-spy: track which in-page section is currently centered in view.
  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
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
          <nav ref={navRef} className="relative hidden md:flex items-center gap-8">
            {indicator && (
              <span
                className="absolute -bottom-2 h-px bg-accent transition-all duration-300 ease-out"
                style={{ left: indicator.left, width: indicator.width }}
                aria-hidden="true"
              />
            )}
            {links.map((l) => {
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
            className="md:hidden flex flex-col gap-1.5 p-2"
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
          className="md:hidden m-0 mt-16 w-full border-b border-white/[0.06] bg-background/95 backdrop-blur px-6 pb-6 pt-2 [inset:auto_0_auto_0] [position:fixed]"
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
