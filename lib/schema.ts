// JSON-LD for search engines: Plumber (a LocalBusiness subtype) + FAQPage.
// Built from site.ts and content.ts so it can't drift from the page.
//
// No aggregateRating or review: the business is fictional, the reviews are
// labelled samples, and Google doesn't allow self-serving review markup on
// LocalBusiness anyway.

import { faq, serviceAreas } from "./content";
import { site } from "./site";

export function buildJsonLd() {
  const businessId = `${site.url}/#business`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Plumber",
        "@id": businessId,
        name: site.name,
        description: `${site.ownerRole} serving ${site.area}. ${site.hours.emergency}.`,
        url: site.url,
        telephone: site.phone.e164,
        image: `${site.url}/opengraph-image`,
        // Service-area business: locality only, no street address. [CONFIRM]
        address: {
          "@type": "PostalAddress",
          addressLocality: site.locality,
          addressRegion: site.region,
          addressCountry: site.country,
        },
        areaServed: [
          { "@type": "City", name: "Newcastle" },
          { "@type": "AdministrativeArea", name: "Lake Macquarie" },
          ...serviceAreas.suburbs.map((name) => ({ "@type": "Place", name })),
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: site.hours.days,
            opens: site.hours.opens,
            closes: site.hours.closes,
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Plumbing services",
          itemListElement: site.services.map((name) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#faq`,
        about: { "@id": businessId },
        mainEntity: faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };
}

// JSON.stringify doesn't escape "<", so a stray "</script>" could break out.
export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
