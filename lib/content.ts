// Page copy from copy.md, as typed data. Business facts (phone, hours, area)
// come from site.ts. Claims not in CLAUDE.md's facts are marked [CONFIRM].

export const hero = {
  eyebrow: "Newcastle & Lake Macquarie plumber",
  // Set by hand: one idea per line, breaks like speech.
  headline: ["Hot water out?", "Drain blocked?", "Dan's on his way."],
  sub: "Licensed plumber and gasfitter. On time, upfront price before we start, and we clean up after.",
  stats: [
    // Facts from CLAUDE.md only, no invented numbers.
    { tag: "Emergencies", value: "24/7", label: "emergency call-outs" },
    { tag: "Hours", value: "Mon-Sat", label: "7am-6pm" },
    { tag: "Licence", value: "Licensed", label: "plumber and gasfitter" },
  ],
  photo: {
    src: "/img/hero.webp",
    alt: "Gloved hands tightening a brass fitting with a shifter on a white hot water tank, mounted on a sandstone wall with copper pipes",
  },
} as const;

// Section headlines marked "not in copy.md" were written for this build. [CONFIRM]

export const services = {
  eyebrow: "Services",
  headline: ["Pick your problem.", "Get a price."], // not in copy.md
  items: [
    // Photos are AI-generated for the demo. [CONFIRM] Replace with real job photos.
    {
      name: "Hot water",
      body: "Repairs and same-day replacements. Electric, gas and heat pump.", // [CONFIRM] same-day
      photo: "/img/service-hot-water.webp",
      photoAlt:
        "Gloved hands tightening a brass valve where copper pipes come out of the bottom of a white hot water tank on a weatherboard wall",
    },
    {
      name: "Blocked drains",
      body: "Cleared with a jetter and camera, so we find the cause, not just the clog.",
      photo: "/img/service-drains.webp",
      photoAlt:
        "Plumber feeding a jetter hose into a drain opening in a paved backyard, the cap set aside, garden and lawn behind",
    },
    {
      name: "Leaks & burst pipes",
      body: "Found and fixed fast, before the water damage spreads.",
      photo: "/img/service-leaks.webp",
      photoAlt:
        "Gloved hands tightening a brass joint on a wet copper pipe under a laundry tub, a folded towel underneath",
    },
    {
      name: "Gas fitting",
      body: "Cooktops, heaters and gas leaks, done by a licensed gasfitter.",
      photo: "/img/service-gas.webp",
      photoAlt:
        "Gloved hands with a spanner on a yellow-handled gas valve under a stainless gas cooktop in a timber kitchen",
    },
    {
      name: "Bathroom plumbing",
      body: "Taps, toilets, showers and full renovation rough-ins.",
      photo: "/img/service-bathroom.webp",
      photoAlt:
        "Gloved hands fitting a brushed-chrome wall tap above a round basin on a timber vanity, a spirit level beside it",
    },
  ],
} as const;

export const darkBreak = {
  headline: ["No surprises", "on the bill."],
  sub: "You get a fixed price before any work starts.",
} as const;

export const whyUs = {
  eyebrow: "Why choose us",
  headline: ["What you can", "count on."], // not in copy.md
  items: [
    { icon: "tag", title: "Upfront fixed pricing", body: "You say yes before we start." },
    { icon: "clock", title: "On time, or we call ahead", body: "No waiting around all day." },
    { icon: "sparkle", title: "Clean worksite", body: "Shoe covers on, mess gone when we leave." },
    { icon: "shield-check", title: "Licensed and insured", body: "Plumbing and gas, NSW." },
  ],
} as const;

// Demo jobs for a fictional business. [CONFIRM] Replace with real jobs.
export const recentJobs = {
  title: "Recent jobs",
  items: [
    {
      title: "Hot water swap",
      suburb: "Merewether",
      body: "Old unit out, new one running same day.",
      photo: "/img/job-hotwater.webp",
      photoAlt:
        "New white hot water unit on a red-brick wall with copper pipes, the rusty old tank lying on a drop sheet below with a few tools",
    },
    {
      title: "Blocked sewer",
      suburb: "Lambton",
      // [CONFIRM] rewritten to match the photo (trench + new PVC pipe).
      // copy.md had: "Tree roots cleared, camera checked."
      body: "Tree roots dug out, new pipe laid.",
      photo: "/img/job-drain.webp",
      // Keeps both tins in the 4:3 crop.
      photoPosition: "object-[30%_50%]",
      photoAlt:
        "Open trench across a lawn with new white PVC pipe laid in sand, a pile of dug-up tree roots and a spade on one side, pink and blue tins of pipe primer and glue on the other",
    },
    {
      title: "Burst pipe",
      suburb: "Charlestown",
      body: "Found behind the wall, fixed in 2 hours.",
      photo: "/img/job-pipe.webp",
      photoAlt:
        "Wall cut open between timber studs, showing a copper pipe joined with a brass coupling and lit by a small work light",
    },
  ],
} as const;

export const reviews = {
  // CLAUDE.md: must be labelled "Sample reviews". The label sits above the
  // heading as a tag, so it is the first thing read in the section.
  label: "Sample reviews",
  title: "What customers say", // not in copy.md
  items: [
    { quote: "Hot water died at 7am, Dan had a new system in by lunch.", name: "Sarah", suburb: "Adamstown" },
    { quote: "Gave me the price before he started and stuck to it.", name: "Mick", suburb: "Kotara" },
    {
      quote: "Turned up on time and left the bathroom cleaner than he found it.",
      name: "Priya",
      suburb: "Hamilton",
    },
  ],
} as const;

export const howItWorks = {
  title: "How it works",
  sub: "From your first call to a fixed problem, in four steps.", // not in copy.md
  steps: [
    "Call or send the form",
    "Dan calls back and books a time",
    "Fixed price before we start",
    "Fixed, cleaned up, done",
  ],
} as const;

export const meetDan = {
  title: "Meet Dan",
  quote: "I answer my own phone.", // moved here from the hero
  paragraphs: [
    "Dan is a licensed plumber and gasfitter working across Newcastle and Lake Macquarie. He started Harbourline because he was sick of customers waiting all day for a no-show.",
    // [CONFIRM] small team
    "Small team, his own phone, his own name on every job.",
  ],
  photo: "/img/dan.webp",
  photoAlt:
    "Dan, seen from behind in a navy polo and shorts, carrying a toolbox past his white ute toward a weatherboard house",
} as const;

export const serviceAreas = {
  title: "Service areas",
  suburbs: [
    "Merewether",
    "Adamstown",
    "Hamilton",
    "Lambton",
    "New Lambton",
    "Kotara",
    "Charlestown",
    "Mayfield",
    "Wallsend",
    "Warners Bay",
  ],
} as const;

// Also feeds the FAQPage JSON-LD, so the page and the schema always match.
export const faq = {
  title: "FAQ",
  items: [
    {
      q: "How fast can you get here?",
      a: "Same day for most jobs. Emergencies 24/7.", // [CONFIRM] same day
    },
    {
      q: "Do you charge a call-out fee?",
      a: "You get the full price on the phone or on arrival, before any work starts.", // [CONFIRM]
    },
    {
      q: "Are you licensed?",
      a: "Yes, licensed plumber and gasfitter in NSW, fully insured.",
    },
    {
      q: "Do you work weekends?",
      a: "Saturdays 7am to 6pm, and emergencies any time.",
    },
    {
      q: "Can you replace my hot water system today?",
      a: "Usually, yes. We carry common units on the ute.", // [CONFIRM] stock on the ute
    },
  ],
} as const;

export const finalCta = {
  headline: ["Water where", "it shouldn't be?"],
  sub: "Call Dan now, or get a price in 20 seconds.",
} as const;

export const leadForm = {
  title: "Get my price",
  note: "Takes 20 seconds. Dan calls you back.",
  // Restated from elsewhere on the page and site.ts, so nothing new is claimed.
  points: [
    { icon: "phone", text: "Dan calls you back himself" },
    { icon: "tag", text: "Fixed price before we start" },
    { icon: "clock", text: "Mon-Sat 7am-6pm, 24/7 for emergencies" },
  ],
  button: "Get my price",
  pendingButton: "Sending…",
  fields: {
    name: { label: "Your name", autoComplete: "name" },
    phone: { label: "Phone", autoComplete: "tel" },
    suburb: { label: "Suburb", autoComplete: "address-level2" },
  },
} as const;
