"use client";
import { useEffect } from "react";

/**
 * Arms the .reveal / .reveal-stagger fade-in effect. This intentionally
 * replaces a pure-CSS animation-timeline: view() approach: that version
 * looked right on first scroll-through, but because it's a live scroll
 * timeline rather than a one-shot trigger, scrolling back up past an
 * already-revealed section faded it back toward invisible — which read
 * as a bug, not an effect.
 *
 * Progressive enhancement is still the rule: elements are opacity: 1 by
 * default in the CSS. This component only ever adds "reveal-pending"
 * (which is what actually hides them) immediately before it starts
 * observing, and permanently removes it — unobserving — the first time
 * each element scrolls into view. No JS, an old browser without
 * IntersectionObserver, or prefers-reduced-motion: reduce all fall back
 * to "everything is simply visible," never to "stuck invisible."
 */
export default function RevealObserver() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal, .reveal-stagger")
    );
    if (targets.length === 0) return;

    targets.forEach((el) => el.classList.add("reveal-pending"));

    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.remove("reveal-pending");
            obs.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
