import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/ui/CountUp";
import { Icon } from "@/components/ui/Icon";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { hero } from "@/lib/content";
import { anchors } from "@/lib/nav";
import { site } from "@/lib/site";

// Phone placement 2 of 4. A big photo with the copy laid into its quiet side.
// xl: the photo fills the right of a dark stage at its own 3:2 ratio, so the
// crop never changes; a dark wash over its left edge (the plain sandstone
// wall) holds the copy. The hands, tank and fittings stay clear of text.
// Below xl there isn't room beside the work, so the photo sits on top and
// fades into the dark panel holding the copy.
// Proof: a small stat row on dark under the buttons at every size (the
// user's call over "proof on light").
export function Hero() {
  return (
    <section aria-labelledby="hero-title">
      <div className="relative isolate overflow-hidden bg-ink-900 text-sand-50 xl:h-[clamp(40rem,50vw,53.75rem)]">
        <div className="relative aspect-[16/10] sm:aspect-[16/9] xl:absolute xl:inset-y-0 xl:right-0 xl:aspect-[1264/848] xl:h-full">
          <Image
            src={hero.photo.src}
            alt={hero.photo.alt}
            fill
            preload
            fetchPriority="high"
            sizes="(min-width: 1280px) 75vw, 100vw"
            className="object-cover"
          />
          {/* Below xl: fade the bottom into the copy panel. */}
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink-900 to-transparent xl:hidden" />
          {/* xl: darken the wall (left ~45% of the photo) so light text reads on it. */}
          <div className="absolute inset-y-0 left-0 hidden w-3/5 bg-gradient-to-r from-ink-900 via-ink-900/75 via-55% to-transparent xl:block" />
          {/* xl: darken the ledge under the tank so the intro reads bottom-right. */}
          <div className="absolute inset-x-0 bottom-0 hidden h-2/5 bg-gradient-to-t from-ink-900 via-ink-900/70 to-transparent xl:block" />
        </div>

        {/* lg+ grid: eyebrow, headline, buttons and small stats bottom-left;
            the intro bottom-right, right-aligned (at xl on the ledge under
            the tank). Below lg it's one column: eyebrow, headline, intro,
            buttons, stats. DOM order stays eyebrow → headline → intro. */}
        <Container className="relative -mt-6 pb-12 sm:-mt-10 sm:pb-16 lg:grid lg:grid-cols-[1fr_auto] lg:grid-rows-[1fr_auto_auto_auto_auto] lg:gap-x-10 lg:pb-20 xl:mt-0 xl:h-full xl:py-14">
          <p className="text-eyebrow font-semibold uppercase text-sand-300 lg:col-start-1 lg:row-start-2">
            {hero.eyebrow}
          </p>
          <h1
            id="hero-title"
            className="mt-4 max-w-[42rem] text-hero lg:col-start-1 lg:row-start-3 xl:text-[5rem]"
          >
            {hero.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-5 max-w-md text-body-lg text-sand-300 lg:col-start-2 lg:row-span-2 lg:row-start-4 lg:mt-0 lg:max-w-xs lg:self-end lg:text-right xl:text-sand-100">
            {hero.sub}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:col-start-1 lg:row-start-4 lg:mt-8">
            <Button href={`#${anchors.quote}`} size="lg" icon="arrow-right">
              Get my price
            </Button>
            <PhoneLink label={`Call Dan · ${site.phone.display}`} variant="on-dark" size="lg" />
          </div>

          {/* A small stat row under the buttons, on dark (the user's layout). */}
          <ul className="mt-8 grid grid-cols-3 divide-x divide-white/15 sm:flex lg:col-start-1 lg:row-start-5 lg:mt-10">
            {hero.stats.map((stat) => (
              <li key={stat.label} className="px-4 first:pl-0 sm:px-6">
                <p className="flex items-center gap-1.5 font-display text-2xl font-semibold leading-none">
                  <CountUp value={stat.value} />
                  {"stars" in stat && (
                    <>
                      <span className="sr-only"> out of 5</span>
                      <Icon name="star" className="size-3.5 text-gold-400" aria-hidden="true" />
                    </>
                  )}
                </p>
                <p className="mt-1.5 text-small text-sand-300">{stat.label}</p>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
