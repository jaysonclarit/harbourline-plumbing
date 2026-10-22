import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/lib/site";

// Thin strip above the header that scrolls away. Facts only, from site.ts.
// No phone here: the number stays in its four set places.
// Mobile: just the 24/7 line. md: all three.
const items = [
  { icon: "clock", text: site.hours.emergency },
  { icon: "shield-check", text: site.ownerRole },
  { icon: "map-pin", text: site.area.replace(" and ", " & ") },
] as const;

export function TrustStrip() {
  return (
    <div className="bg-ink-900 text-sand-50">
      <Container>
        <ul className="flex min-h-9 items-center justify-center gap-x-8 py-1.5 text-[0.8125rem] font-medium md:justify-between">
          {items.map((item, i) => (
            <li
              key={item.text}
              className={`items-center gap-2 ${i === 0 ? "flex" : "hidden md:flex"}`}
            >
              <Icon name={item.icon} className="size-4 text-copper-400" />
              {item.text}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
