import { Button } from "@/components/ui/Button";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { anchors } from "@/lib/nav";

// Mobile only: call and quote always one tap away. Body gets matching bottom
// padding in layout.tsx so this never covers the footer.
export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-sand-300 bg-sand-50/95 pb-[env(safe-area-inset-bottom)] shadow-soft backdrop-blur-sm md:hidden">
      {/* Minus the 1px top border, so the whole bar equals the body padding. */}
      <div className="grid h-[calc(var(--spacing-callbar)-1px)] grid-cols-2 items-center gap-2 px-3">
        <PhoneLink label="Call Dan" fullWidth />
        <Button href={`#${anchors.quote}`} variant="secondary" fullWidth>
          Get my price
        </Button>
      </div>
    </div>
  );
}
