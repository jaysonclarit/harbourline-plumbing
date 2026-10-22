"use client";

import { useEffect } from "react";

// Fades [data-reveal] elements up as they scroll into view. Mounted once, as
// the last child of the page (it edits attributes on the sections, so it must
// run after they hydrate). Safe by default:
// - Content is never hidden until this runs, so no-JS visitors see everything.
// - Anything already on screen is marked revealed first, so nothing flashes.
// - Does nothing for prefers-reduced-motion.
export function ScrollReveal() {
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const root = document.documentElement;
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    // Above or inside the viewport at load: show without animating.
    for (const el of elements) {
      if (el.getBoundingClientRect().top < window.innerHeight) el.dataset.revealed = "";
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.revealed = "";
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    for (const el of elements) {
      if (!("revealed" in el.dataset)) observer.observe(el);
    }
    root.dataset.revealReady = "";

    return () => {
      observer.disconnect();
      delete root.dataset.revealReady;
    };
  }, []);

  return null;
}
