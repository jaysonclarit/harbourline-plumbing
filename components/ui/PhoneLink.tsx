import { cn } from "@/lib/cn";
import { site } from "@/lib/site";
import { Button, type ButtonSize, type ButtonVariant } from "./Button";
import { Icon } from "./Icon";

// The phone number always comes from site.ts. Used in header, hero, final CTA,
// footer and the sticky mobile call bar.

type PhoneLinkProps = {
  /** Visible text. Defaults to the number itself. */
  label?: string;
  appearance?: "button" | "text";
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
};

export function PhoneLink({
  label = site.phone.display,
  appearance = "button",
  variant = "primary",
  size,
  fullWidth,
  className,
}: PhoneLinkProps) {
  // Screen readers hear the number even when the visible label is "Call Dan".
  const ariaLabel = label.includes(site.phone.display)
    ? undefined
    : `${label} on ${site.phone.display}`;

  if (appearance === "text") {
    return (
      <a
        href={site.phone.href}
        aria-label={ariaLabel}
        className={cn(
          "inline-flex min-h-tap items-center gap-2 font-semibold underline-offset-4 hover:underline",
          className,
        )}
      >
        <Icon name="phone" className="size-5 shrink-0" />
        {label}
      </a>
    );
  }

  return (
    <Button
      href={site.phone.href}
      aria-label={ariaLabel}
      icon="phone"
      iconPosition="start"
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      className={className}
    >
      {label}
    </Button>
  );
}
