import { Icon } from "@/components/ui/Icon";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { Section } from "@/components/ui/Section";
import { faq } from "@/lib/content";
import { anchors } from "@/lib/nav";
import { revealProps } from "@/lib/reveal";

// Native <details>: keyboard and screen reader support with no JavaScript.
export function FAQ() {
  return (
    <Section id={anchors.faq} tone="warm" aria-labelledby="faq-title">
      <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16" {...revealProps()}>
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 id="faq-title" className="text-h2">
            {faq.title}
          </h2>
          <p className="mt-4 text-body-lg text-ink-600">Something else on your mind?</p>
          <PhoneLink label="Call Dan" className="mt-5" />
        </div>

        <div className="space-y-3">
          {faq.items.map((item) => (
            <details
              key={item.q}
              className="group rounded-card bg-white px-5 shadow-soft transition-shadow sm:px-7"
            >
              <summary className="flex min-h-tap cursor-pointer list-none items-center justify-between gap-4 py-5 text-body-lg font-semibold [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-sand-100 text-harbour-600 transition-colors group-open:bg-harbour-600 group-open:text-white">
                  <Icon
                    name="chevron-down"
                    className="size-5 transition-transform duration-200 group-open:rotate-180"
                  />
                </span>
              </summary>
              <p className="max-w-prose pb-6 pr-12 text-ink-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
