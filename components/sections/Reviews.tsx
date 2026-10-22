import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { reviews } from "@/lib/content";
import { revealProps } from "@/lib/reveal";

// Proof on a light warm background. The "Sample reviews" tag sits right above
// the heading, and the cards carry no star ratings, so the demo never implies a
// real score or real customers.
const avatarTones = ["bg-harbour-600", "bg-copper-600", "bg-ink-900"];

export function Reviews() {
  return (
    <Section tone="warm" aria-labelledby="reviews-title">
      <div className="mx-auto max-w-2xl text-center" {...revealProps()}>
        <p className="inline-flex rounded-full border border-ink-600/40 px-3 py-1 text-eyebrow font-semibold uppercase text-ink-600">
          {reviews.label}
        </p>
        <h2 id="reviews-title" className="mt-4 text-h2">
          {reviews.title}
        </h2>
      </div>

      <ul className="mt-12 grid gap-5 md:grid-cols-3 lg:gap-6">
        {reviews.items.map((review, i) => (
          <li key={review.name} {...revealProps(i)}>
            {/* Left-aligned like a note: big copper quote mark, the words, then
                who said it below a hairline. */}
            <figure className="flex h-full flex-col rounded-image bg-white p-7 shadow-soft ring-1 ring-sand-300/60 sm:p-8">
              <span
                aria-hidden="true"
                className="-mb-4 -mt-2 block h-14 font-display text-[5rem] leading-none text-copper-600"
              >
                &ldquo;
              </span>
              <blockquote className="mb-7 font-display text-h3 font-medium">{review.quote}</blockquote>
              <figcaption className="mt-auto flex items-center gap-3 border-t border-sand-100 pt-5">
                <span
                  aria-hidden="true"
                  className={`flex size-10 items-center justify-center rounded-full font-display text-body-lg font-semibold text-white ${avatarTones[i % avatarTones.length]}`}
                >
                  {review.name[0]}
                </span>
                <span>
                  <span className="block font-semibold text-ink-900">{review.name}</span>
                  <span className="flex items-center gap-1 text-small text-ink-600">
                    <Icon name="map-pin" className="size-3.5" />
                    {review.suburb}
                  </span>
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Section>
  );
}
