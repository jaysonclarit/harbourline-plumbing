import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { brands } from "@/lib/content";

// Thin strip of placeholder logos (logoipsum.com), one warm grey so no logo
// shouts. No real brands in the demo. [CONFIRM] Swap for the brands Dan
// actually services and stocks.
export function Brands() {
  return (
    <section aria-labelledby="brands-title" className="border-b border-sand-300 bg-sand-50 py-12 md:py-14">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
        <h2
          id="brands-title"
          className="shrink-0 font-sans text-eyebrow font-semibold uppercase text-ink-600"
        >
          {brands.title}
        </h2>
        <ul className="grid flex-1 grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-10">
          {brands.logos.map((logo, i) => (
            <li key={logo.src} className="flex items-center justify-center">
              {/* SVGs are served as-is; there is nothing for the optimiser to do. */}
              <Image
                src={logo.src}
                alt={`Placeholder brand logo ${i + 1}`}
                width={logo.width}
                height={logo.height}
                unoptimized
                className="h-7 w-auto max-w-full object-contain opacity-80"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
