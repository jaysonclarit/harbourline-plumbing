import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { darkBreak } from "@/lib/content";
import { anchors } from "@/lib/nav";
import { revealProps } from "@/lib/reveal";

// The one dark band. A single promise, said plainly, with a small quote card
// that shows it. The card is decoration (aria-hidden): the sub already says it,
// and it names no prices so it can't be read as a real quote.
export function DarkBreak() {
  return (
    <Section tone="dark" aria-labelledby="dark-break-title" className="overflow-hidden">
      <div className="grid items-center gap-12 md:grid-cols-[1fr_minmax(0,24rem)] md:gap-16" {...revealProps()}>
        <div>
          <h2 id="dark-break-title" className="text-display">
            {darkBreak.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-5 max-w-prose text-body-lg text-sand-300">{darkBreak.sub}</p>
          <div className="mt-8">
            <Button href={`#${anchors.quote}`} variant="light" size="lg" icon="arrow-right">
              Get my price
            </Button>
          </div>
        </div>

        <div aria-hidden="true" className="relative mx-auto w-full max-w-sm md:mx-0">
          {/* Second sheet peeking out behind, for depth. */}
          <div className="absolute inset-0 translate-x-3 translate-y-3 rotate-3 rounded-card bg-copper-600" />
          <div className="relative -rotate-2 rounded-card bg-sand-50 p-6 text-ink-900 shadow-soft sm:p-7">
            <div className="flex items-center justify-between">
              <p className="text-eyebrow font-semibold uppercase text-harbour-600">Your price</p>
              <span className="rounded-full bg-sand-100 px-2.5 py-1 text-eyebrow font-semibold uppercase text-ink-600">
                Fixed
              </span>
            </div>
            <p className="mt-4 font-display text-h3 font-semibold">Hot water replacement</p>
            <dl className="mt-5 space-y-3 border-y border-dashed border-sand-300 py-5 text-small">
              <div className="flex justify-between gap-4">
                <dt className="text-ink-600">Parts and labour</dt>
                <dd className="font-semibold">Included</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink-600">Clean-up</dt>
                <dd className="font-semibold">Included</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink-600">Surprises</dt>
                <dd className="font-semibold">None</dd>
              </div>
            </dl>
            <p className="mt-5 flex items-center gap-2.5 font-semibold text-success">
              <span className="flex size-7 items-center justify-center rounded-full bg-success text-white">
                <Icon name="check" className="size-4" />
              </span>
              Agreed before we start
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
