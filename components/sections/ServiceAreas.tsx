import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { serviceAreas } from "@/lib/content";
import { anchors } from "@/lib/nav";
import { revealProps } from "@/lib/reveal";
import { site } from "@/lib/site";

// Heading and hours on the left; suburbs in one white card on the right, in
// columns so the list scans like a road directory rather than a tag cloud.
export function ServiceAreas() {
  return (
    <Section id={anchors.areas} aria-labelledby="areas-title">
      <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16" {...revealProps()}>
        <div>
          <h2 id="areas-title" className="text-h2">
            {serviceAreas.title}
          </h2>
          <p className="mt-3 text-body-lg text-ink-600">{site.area}</p>
          <ul className="mt-6 space-y-2 text-small font-semibold">
            <li className="flex items-center gap-2">
              <Icon name="clock" className="size-5 text-harbour-600" />
              {site.hours.display}
            </li>
            <li className="flex items-center gap-2">
              <Icon name="phone" className="size-5 text-copper-600" />
              {site.hours.emergency}
            </li>
          </ul>
        </div>

        {/* Two columns: ten suburbs make five even rows. */}
        <ul className="grid grid-cols-2 gap-x-6 rounded-image bg-white px-5 py-3 shadow-soft sm:px-8 sm:py-5 lg:gap-x-10">
          {serviceAreas.suburbs.map((suburb) => (
            <li
              key={suburb}
              className="flex items-center gap-2 border-b border-sand-100 py-3.5 font-medium [&:nth-last-child(-n+2)]:border-0"
            >
              <Icon name="map-pin" className="size-4 shrink-0 text-harbour-600" />
              {suburb}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
