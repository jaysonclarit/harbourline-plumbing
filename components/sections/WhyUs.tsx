import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { whyUs } from "@/lib/content";
import { revealProps } from "@/lib/reveal";

export function WhyUs() {
  return (
    <Section tone="warm" aria-labelledby="why-us-title">
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start" {...revealProps()}>
          <p className="text-eyebrow font-semibold uppercase text-harbour-600">{whyUs.eyebrow}</p>
          <h2 id="why-us-title" className="mt-3 text-h2">
            {whyUs.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </div>

        {/* White cards on the warm band, icon chip top-left, like the hero stat tiles. */}
        <ul className="grid gap-4 sm:grid-cols-2 lg:gap-5">
          {whyUs.items.map((item, i) => (
            <li
              key={item.title}
              className="flex gap-4 rounded-card bg-white p-5 shadow-soft sm:flex-col sm:gap-6 sm:p-7"
              {...revealProps(i + 1)}
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-control bg-sand-100 text-copper-600">
                <Icon name={item.icon} className="size-6" />
              </span>
              <div>
                <h3 className="text-h3">{item.title}</h3>
                <p className="mt-1 text-ink-600 sm:mt-2">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
