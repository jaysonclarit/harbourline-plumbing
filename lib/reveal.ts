import type { CSSProperties } from "react";

// Spread onto an element to fade it up on scroll (see ScrollReveal).
// Index staggers siblings by 70ms, capped so long lists don't drag.
export function revealProps(index = 0) {
  return {
    "data-reveal": true,
    style: { "--reveal-delay": `${Math.min(index, 4) * 70}ms` } as CSSProperties,
  };
}
