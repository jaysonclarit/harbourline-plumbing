import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

// Wordmark: copper badge with a harbour wave, name stacked so it fits beside
// the phone button at 375px.
export function Logo({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name}, back to top`}
      className={cn("inline-flex min-h-tap items-center gap-2.5", className)}
    >
      <svg viewBox="0 0 40 40" className="size-9 shrink-0 sm:size-10" aria-hidden="true" focusable="false">
        <rect width="40" height="40" rx="11" className="fill-copper-600" />
        <path
          d="M9 22c2.8-3 5.6-3 8.4 0s5.6 3 8.4 0 3.6-2.4 5.2-1.2"
          fill="none"
          stroke="white"
          strokeWidth="2.75"
          strokeLinecap="round"
        />
        <path d="M11 14h18" stroke="white" strokeWidth="2.75" strokeLinecap="round" opacity=".55" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.125rem] font-semibold tracking-tight sm:text-[1.3125rem]",
            tone === "light" ? "text-ink-900" : "text-sand-50",
          )}
        >
          Harbourline
        </span>{" "}
        {/* The space keeps "Harbourline Plumbing" matching the link's aria-label. */}
        <span
          className={cn(
            "mt-1 text-eyebrow font-semibold uppercase",
            tone === "light" ? "text-harbour-600" : "text-sand-300",
          )}
        >
          Plumbing
        </span>
      </span>
    </Link>
  );
}
