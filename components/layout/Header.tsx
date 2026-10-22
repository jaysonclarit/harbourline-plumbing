import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { anchors, navItems } from "@/lib/nav";
import { site } from "@/lib/site";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

// Sticky header. Phone placement 1 of 4.
// Mobile: logo + menu button (number inside the menu). md: number + "Get my price".
// lg: section nav replaces the menu button.
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-sand-300 bg-sand-50/95 backdrop-blur-sm">
      <a
        href={`#${anchors.main}`}
        className="sr-only focus:not-sr-only focus:absolute focus:left-gutter focus:top-2 focus:z-50 focus:rounded-control focus:bg-ink-900 focus:px-4 focus:py-3 focus:text-sand-50"
      >
        Skip to content
      </a>
      <Container className="flex items-center justify-between gap-3 py-3">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-tap items-center rounded-control px-3 font-medium text-ink-900 transition-colors hover:bg-sand-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Wrapper owns show/hide so it never fights the components' inline-flex.
            Below md the number moves into the menu; the sticky call bar covers it. */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden items-center gap-4 md:flex">
            <PhoneLink
              appearance="text"
              label={`Call ${site.phone.display}`}
              className="text-ink-900"
            />
            <Button href={`#${anchors.quote}`}>Get my price</Button>
          </div>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
