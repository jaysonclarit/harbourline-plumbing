import { Button } from "@/components/ui/Button";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { Photo } from "@/components/ui/Photo";
import { Section } from "@/components/ui/Section";
import { meetDan } from "@/lib/content";
import { anchors } from "@/lib/nav";
import { revealProps } from "@/lib/reveal";
import { site } from "@/lib/site";

// Photo with a copper block offset behind it (never on it), then Dan's line
// as a pull quote, his story and both ways to get in touch.
export function MeetDan() {
  return (
    <Section tone="warm" aria-labelledby="meet-dan-title">
      <div className="grid items-center gap-14 md:grid-cols-[2fr_3fr] lg:gap-20" {...revealProps()}>
        <div className="relative max-md:mx-auto max-md:w-full max-md:max-w-sm">
          <div aria-hidden="true" className="absolute -bottom-4 -left-4 h-2/3 w-2/3 rounded-image bg-copper-600 sm:-bottom-5 sm:-left-5" />
          <Photo
            src={meetDan.photo}
            alt={meetDan.photoAlt}
            sizes="(min-width: 1200px) 430px, (min-width: 768px) 36vw, 384px"
            className="aspect-[4/5]"
            position="object-top"
          />
        </div>

        <div>
          <p className="text-eyebrow font-semibold uppercase text-harbour-600">{site.ownerRole}</p>
          <h2 id="meet-dan-title" className="mt-3 text-h2">
            {meetDan.title}
          </h2>

          <figure className="mt-8 border-l-4 border-copper-600 pl-5 sm:pl-6">
            <blockquote className="font-display text-[clamp(1.625rem,1.39rem+1vw,2.25rem)] font-semibold leading-tight">
              &ldquo;{meetDan.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-2 text-small text-ink-600">{site.owner}</figcaption>
          </figure>

          {meetDan.paragraphs.map((text) => (
            <p key={text} className="mt-6 max-w-prose text-body-lg">
              {text}
            </p>
          ))}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PhoneLink label="Call Dan" size="lg" />
            <Button href={`#${anchors.quote}`} variant="secondary" size="lg" icon="arrow-right">
              Get my price
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
