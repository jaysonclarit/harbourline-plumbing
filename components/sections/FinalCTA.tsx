import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { finalCta } from "@/lib/content";
import { anchors } from "@/lib/nav";
import { revealProps } from "@/lib/reveal";
import { site } from "@/lib/site";

// Phone placement 3 of 4. A copper panel inset on sand, so it reads apart from
// the navy footer below. White on copper-600 is 5.4:1. The soft glow only
// darkens toward copper-700, so contrast can only go up where text sits.
export function FinalCTA() {
  return (
    <section aria-labelledby="final-cta-title" className="bg-sand-100 px-3 pb-16 pt-3 sm:px-5 sm:pb-20 sm:pt-5 lg:pb-24">
      <Container
        className="relative isolate overflow-hidden rounded-image bg-copper-600 py-section text-center text-white [&_:focus-visible]:outline-sand-50"
        {...revealProps()}
      >
        <span
          aria-hidden="true"
          className="absolute inset-x-0 -bottom-1/2 -z-10 mx-auto aspect-square w-[min(64rem,160%)] rounded-full bg-[radial-gradient(closest-side,var(--color-copper-700),transparent)]"
        />
        <h2 id="final-cta-title" className="text-display">
          {finalCta.headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p className="mx-auto mt-5 max-w-prose text-body-lg">{finalCta.sub}</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <PhoneLink label={`Call ${site.phone.display}`} variant="light" size="lg" />
          <Button href={`#${anchors.quote}`} variant="on-dark" size="lg" icon="arrow-right">
            Get my price
          </Button>
        </div>
      </Container>
    </section>
  );
}
