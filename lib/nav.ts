// Section anchors shared by the header, footer, call bar and section components.
export const anchors = {
  main: "main",
  quote: "get-price",
  services: "services",
  howItWorks: "how-it-works",
  areas: "areas",
  faq: "faq",
} as const;

export const navItems = [
  { label: "Services", href: `#${anchors.services}` },
  { label: "How it works", href: `#${anchors.howItWorks}` },
  { label: "Areas", href: `#${anchors.areas}` },
  { label: "FAQ", href: `#${anchors.faq}` },
] as const;
