import { Photo } from "@/components/ui/Photo";
import { Section } from "@/components/ui/Section";
import { services } from "@/lib/content";
import { anchors } from "@/lib/nav";
import { revealProps } from "@/lib/reveal";
import { ServiceQuoteButton } from "./ServiceQuoteButton";

// Five cards: 1 col on mobile, 2 on tablet (last one full width),
// 3 + 2 on desktop with the bottom pair stretched to fill the row.
// Wider cards get a wider crop so photo heights stay close across a row.
const layout = [
  { span: "lg:col-span-2", aspect: "aspect-[4/3]", sizes: "third" },
  { span: "lg:col-span-2", aspect: "aspect-[4/3]", sizes: "third" },
  { span: "lg:col-span-2", aspect: "aspect-[4/3]", sizes: "third" },
  { span: "lg:col-span-3", aspect: "aspect-[4/3] lg:aspect-[16/9]", sizes: "half" },
  { span: "md:col-span-2 lg:col-span-3", aspect: "aspect-[4/3] md:aspect-[16/9]", sizes: "wide" },
] as const;

const sizes = {
  third: "(min-width: 1200px) 365px, (min-width: 1024px) 30vw, (min-width: 768px) 45vw, calc(100vw - 3rem)",
  half: "(min-width: 1200px) 560px, (min-width: 768px) 45vw, calc(100vw - 3rem)",
  wide: "(min-width: 1200px) 560px, (min-width: 1024px) 45vw, (min-width: 768px) 90vw, calc(100vw - 3rem)",
};

export function Services() {
  return (
    <Section id={anchors.services} aria-labelledby="services-title">
      <p className="text-eyebrow font-semibold uppercase text-harbour-600">{services.eyebrow}</p>
      <h2 id="services-title" className="mt-3 text-h2" {...revealProps()}>
        {services.headline.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h2>

      {/* Photo on top, words underneath: nothing sits over the work. */}
      <ul className="mt-10 grid gap-x-5 gap-y-12 md:grid-cols-2 lg:mt-14 lg:grid-cols-6 lg:gap-x-6 lg:gap-y-14">
        {services.items.map((item, i) => (
          <li key={item.name} className={`flex flex-col ${layout[i].span}`} {...revealProps(i)}>
            <Photo
              src={item.photo}
              alt={item.photoAlt}
              sizes={sizes[layout[i].sizes]}
              className={`shadow-soft ${layout[i].aspect}`}
            />
            <h3 className="mt-5 text-h3">{item.name}</h3>
            <p className="mt-2 max-w-prose text-ink-600">{item.body}</p>
            <div className="mt-auto pt-5">
              <ServiceQuoteButton service={item.name} />
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
