"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { anchors, navItems } from "@/lib/nav";

// Menu button and drop-down panel for screens below lg, where the header has
// no room for the section links. Closes on a link tap, Escape, a tap outside,
// or when the screen widens to lg. Closed, the panel is `invisible`, so its
// links are out of the tab order and hidden from screen readers.
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const wide = window.matchMedia("(min-width: 64rem)");
    const onWide = () => wide.matches && setOpen(false);

    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    wide.addEventListener("change", onWide);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      wide.removeEventListener("change", onWide);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div ref={rootRef} className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}
        className="flex size-11 items-center justify-center rounded-control border-2 border-ink-900 text-ink-900 transition-colors hover:bg-ink-900 hover:text-sand-50"
      >
        <span className="sr-only">Menu</span>
        <Icon name={open ? "close" : "menu"} className="size-6" />
      </button>

      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-full border-b border-sand-300 bg-sand-50 shadow-soft transition-[opacity,transform,visibility] duration-200 ease-out-soft ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav aria-label="Menu" className="mx-auto w-full max-w-site px-gutter pb-6 pt-2">
          <ul className="divide-y divide-sand-300">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={close}
                  className="flex min-h-14 items-center justify-between font-display text-h3 font-semibold text-ink-900"
                >
                  {item.label}
                  <Icon name="arrow-right" className="size-5 text-harbour-600" />
                </a>
              </li>
            ))}
            {/* Below md the header has no number, so it lives here (and in the call bar). */}
            <li>
              <PhoneLink
                appearance="text"
                className="min-h-14 w-full text-h3 text-ink-900 [&>svg]:text-copper-600"
              />
            </li>
          </ul>
          <Button href={`#${anchors.quote}`} onClick={close} fullWidth size="lg" className="mt-4">
            Get my price
          </Button>
        </nav>
      </div>
    </div>
  );
}
