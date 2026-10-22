import type { Metadata, Viewport } from "next";
import { Figtree, Fraunces } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { StickyCallBar } from "@/components/layout/StickyCallBar";
import { TrustStrip } from "@/components/layout/TrustStrip";
import { site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const title = `${site.name} | Plumber in ${site.area}`;
const description = `Licensed plumber and gasfitter in ${site.area}. Hot water, blocked drains, leaks, gas and bathrooms. Upfront price before we start. Call ${site.phone.display}.`;

// Open Graph and Twitter images come from app/opengraph-image.tsx.
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/",
    siteName: site.name,
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
  formatDetection: { telephone: false }, // we mark up the number ourselves
  robots: { index: site.indexable, follow: site.indexable },
};

export const viewport: Viewport = {
  themeColor: "#fbf6ee", // sand-50
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-AU"
      className={`${fraunces.variable} ${figtree.variable} antialiased`}
    >
      {/* Bottom padding matches the mobile call bar so it never covers the footer. */}
      <body className="min-h-dvh pb-[calc(var(--spacing-callbar)+env(safe-area-inset-bottom))] md:pb-0">
        <TrustStrip />
        <Header />
        {children}
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  );
}
