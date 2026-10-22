import { Icon, type IconName } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { howItWorks } from "@/lib/content";
import { anchors } from "@/lib/nav";
import { revealProps } from "@/lib/reveal";

// Four steps, each an icon in a circle. A line joins the circles: across the
// top on desktop, down the left on mobile.
const icons: IconName[] = ["phone", "clock", "tag", "check"];

export function HowItWorks() {
  return (
    <Section id={anchors.howItWorks} aria-labelledby="how-it-works-title">
      <div className="mx-auto max-w-2xl text-center" {...revealProps()}>
        <h2 id="how-it-works-title" className="text-h2">
          {howItWorks.title}
        </h2>
        <p className="mt-4 text-body-lg text-ink-600">{howItWorks.sub}</p>
      </div>

      <div className="relative mt-12 lg:mt-16">
        <span
          aria-hidden="true"
          className="absolute bottom-8 left-8 top-8 w-0.5 bg-sand-300 md:inset-x-[12.5%] md:bottom-auto md:top-8 md:h-0.5 md:w-auto"
        />
        <ol className="relative grid gap-6 md:grid-cols-4 md:gap-5 lg:gap-6">
          {howItWorks.steps.map((step, i) => (
            <li
              key={step}
              className="flex items-center gap-5 md:flex-col md:gap-0 md:text-center"
              {...revealProps(i)}
            >
              <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-white text-copper-600 shadow-soft ring-8 ring-sand-50">
                <Icon name={icons[i] ?? "check"} className="size-7" />
              </span>
              <div className="md:mt-6">
                <p className="text-eyebrow font-semibold uppercase text-harbour-600">Step {i + 1}</p>
                <p className="mt-1 text-body-lg font-semibold">{step}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
