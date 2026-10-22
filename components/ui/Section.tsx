import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

// sand: default page background. warm: alternate band. dark: the dark break.
// Reviews and proof sections use sand or warm, never dark.
export type SectionTone = "sand" | "warm" | "dark";

const tones: Record<SectionTone, string> = {
  sand: "bg-sand-50 text-ink-900",
  warm: "bg-sand-100 text-ink-900",
  // Teal focus ring is too faint on navy, so it turns light here.
  dark: "bg-ink-900 text-sand-50 [&_:focus-visible]:outline-sand-50",
};

type SectionProps = ComponentProps<"section"> & {
  tone?: SectionTone;
  containerClassName?: string;
};

export function Section({
  tone = "sand",
  className,
  containerClassName,
  children,
  ...rest
}: SectionProps) {
  return (
    // scroll-mt keeps anchored sections clear of the sticky header.
    <section className={cn("scroll-mt-20 py-section", tones[tone], className)} {...rest}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
