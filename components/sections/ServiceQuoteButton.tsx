"use client";

import { Button } from "@/components/ui/Button";
import { selectService } from "@/lib/lead";
import { anchors } from "@/lib/nav";

// Scrolls to the form (plain anchor, works without JS) and tags the service.
export function ServiceQuoteButton({ service }: { service: string }) {
  return (
    <Button
      href={`#${anchors.quote}`}
      variant="secondary"
      icon="arrow-right"
      aria-label={`Get a price for ${service.toLowerCase()}`}
      onClick={() => selectService(service)}
    >
      Get a price
    </Button>
  );
}
