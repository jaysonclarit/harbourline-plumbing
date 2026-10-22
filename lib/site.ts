// Business facts: the single source for name, phone, hours and area.
// Only facts from CLAUDE.md live here. Anything else is marked [CONFIRM].

export const site = {
  name: "Harbourline Plumbing",
  owner: "Dan",
  ownerRole: "Licensed plumber and gasfitter",
  phone: {
    display: "0491 570 156",
    href: "tel:+61491570156",
    e164: "+61491570156",
  },
  area: "Newcastle and Lake Macquarie",
  locality: "Newcastle",
  region: "NSW",
  country: "AU",
  hours: {
    display: "Mon-Sat 7am-6pm",
    emergency: "24/7 emergency call-outs",
    // schema.org openingHoursSpecification
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "07:00",
    closes: "18:00",
  },
  services: [
    "Hot water",
    "Blocked drains",
    "Leaks & burst pipes",
    "Gas fitting",
    "Bathroom plumbing",
  ],
  licence: "NSW Licence No. 000000C (demo)", // [CONFIRM] real licence number
  url: "https://harbourline-plumbing.vercel.app", // [CONFIRM] production domain
  // Demo: keep the fictional business out of search results.
  // Set true for a real launch (Lighthouse SEO flags noindex pages).
  indexable: false,
} as const;
