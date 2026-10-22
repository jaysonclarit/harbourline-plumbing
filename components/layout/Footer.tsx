import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { anchors, navItems } from "@/lib/nav";
import { site } from "@/lib/site";
import { Logo } from "./Logo";

// Phone placement 4 of 4. Carries the licence line and the "Demo concept" label.
export function Footer() {
  return (
    <footer className="bg-ink-900 text-sand-50 [&_:focus-visible]:outline-sand-50">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8 md:py-16">
        <div>
          <Logo tone="dark" />
          <p className="mt-4 max-w-xs text-sand-300">
            {site.ownerRole} serving {site.area}.
          </p>
        </div>

        <div>
          <h2 className="font-sans text-eyebrow font-semibold uppercase text-sand-300">
            Contact
          </h2>
          <ul className="mt-3 space-y-1">
            <li>
              {/* Same size as the lines below it; weight and colour mark it out. */}
              <PhoneLink appearance="text" className="text-sand-50" />
            </li>
            <li className="flex items-center gap-2 text-sand-300">
              <Icon name="clock" className="size-5 shrink-0" />
              {site.hours.display}
            </li>
            <li className="mt-2 flex items-center gap-2 text-sand-300">
              <Icon name="map-pin" className="size-5 shrink-0" />
              {site.locality} {site.region}
            </li>
          </ul>
          <p className="mt-3 flex items-center gap-2 font-semibold">
            <Icon name="flame" className="size-5 shrink-0 text-copper-400" />
            24/7 emergencies
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-sans text-eyebrow font-semibold uppercase text-sand-300">
            On this page
          </h2>
          <ul className="mt-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-tap items-center underline-offset-4 hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`#${anchors.quote}`}
                className="inline-flex min-h-tap items-center underline-offset-4 hover:underline"
              >
                Get my price
              </a>
            </li>
          </ul>
        </nav>
      </Container>

      {/* Giant wordmark, decoration only. Font size is in container units so the
          word spans the container edge to edge at every width; the mask fades
          it out toward the bottom rule. Optical size is pinned so Fraunces keeps
          the same width-to-size ratio on phones. overflow-hidden is a safety net. */}
      <Container aria-hidden="true" className="overflow-hidden">
        <div className="@container">
          {/* Word drawn by ::before so contrast checks skip this decorative text. */}
          <p
            data-word={site.name.split(" ")[0]}
            className="select-none whitespace-nowrap text-center font-display text-[length:22.1cqw] font-semibold leading-[0.85] [font-variation-settings:'opsz'_144] tracking-[-0.04em] text-sand-50/[0.14] [mask-image:linear-gradient(to_bottom,black_20%,transparent_95%)] before:content-[attr(data-word)]"
          />
        </div>
      </Container>

      <div className="border-t border-sand-50/15">
        <Container className="flex flex-col gap-3 py-6 text-small text-sand-300 md:flex-row md:items-center md:justify-between">
          <p className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-sand-300/60 px-2.5 py-0.5 text-eyebrow font-semibold uppercase text-sand-50">
              Demo concept
            </span>
            <span>
              {site.name} is a fictional business. Designed and built by Jayson Clarit.
            </span>
          </p>
          <p className="md:text-right">{site.licence}</p>
        </Container>
      </div>
    </footer>
  );
}
