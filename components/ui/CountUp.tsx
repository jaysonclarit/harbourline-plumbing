"use client";

import { useEffect, useRef } from "react";

// Counts a stat up from zero when it scrolls into view ("4.9", "15").
// Non-numbers ("24/7") fade in instead. Same rules as ScrollReveal:
// - The server renders the final value, so no-JS visitors see it.
// - Already on screen at load: left alone, so nothing flashes.
// - Does nothing for prefers-reduced-motion.
// Writes to the DOM directly so a frame-by-frame count never re-renders React.
// Screen readers get the final value; the moving one is hidden from them.

const DURATION = 1400;

export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (
      !el ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window) ||
      el.getBoundingClientRect().bottom < window.innerHeight
    ) {
      return;
    }

    const isNumber = /^\d+(\.\d+)?$/.test(value);
    const target = Number(value);
    const decimals = value.split(".")[1]?.length ?? 0;
    let frame = 0;

    // Below the fold, so the reset to zero (or the hide) is never seen.
    if (isNumber) el.textContent = (0).toFixed(decimals);
    else el.dataset.waiting = "";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        if (!isNumber) {
          delete el.dataset.waiting;
          return;
        }

        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / DURATION, 1);
          const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
          el.textContent = (target * eased).toFixed(decimals);
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 1 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      el.textContent = value;
      delete el.dataset.waiting;
    };
  }, [value]);

  return (
    <>
      <span
        ref={ref}
        aria-hidden="true"
        className="tabular-nums transition-opacity duration-700 ease-out-soft data-waiting:opacity-0"
      >
        {value}
      </span>
      <span className="sr-only">{value}</span>
    </>
  );
}
