import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./Icon";

// Labels always say what happens next ("Get my price", "Call Dan"). Never "Submit".

export type ButtonVariant = "primary" | "secondary" | "on-dark" | "light";
export type ButtonSize = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-control font-semibold text-center " +
  "transition-colors duration-200 ease-out-soft disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-copper-600 text-white shadow-soft hover:bg-copper-700",
  secondary:
    "border-2 border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-sand-50",
  "on-dark":
    "border-2 border-sand-50 text-sand-50 hover:bg-sand-50 hover:text-ink-900",
  // Solid main action on a dark or copper band.
  light: "bg-sand-50 text-ink-900 shadow-soft hover:bg-white",
};

const sizes: Record<ButtonSize, string> = {
  md: "min-h-tap px-5 text-body",
  lg: "min-h-14 px-7 text-body-lg",
};

type StyleOptions = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  fullWidth,
  className,
}: StyleOptions = {}) {
  return cn(base, variants[variant], sizes[size], fullWidth && "w-full", className);
}

type CommonProps = StyleOptions & {
  children: ReactNode;
  icon?: IconName;
  iconPosition?: "start" | "end";
};

type LinkProps = CommonProps & Omit<ComponentProps<"a">, keyof CommonProps> & { href: string };
type NativeButtonProps = CommonProps &
  Omit<ComponentProps<"button">, keyof CommonProps> & { href?: undefined };

export type ButtonProps = LinkProps | NativeButtonProps;

export function Button(props: ButtonProps) {
  const { variant, size, fullWidth, className, children, icon, iconPosition = "end", ...rest } =
    props;
  const classes = buttonClasses({ variant, size, fullWidth, className });
  const iconEl = icon && <Icon name={icon} className="size-5 shrink-0" />;
  const content = (
    <>
      {iconPosition === "start" && iconEl}
      {children}
      {iconPosition === "end" && iconEl}
    </>
  );

  if (rest.href !== undefined) {
    return (
      <a className={classes} {...(rest as ComponentProps<"a">)}>
        {content}
      </a>
    );
  }

  const { type = "button", ...buttonRest } = rest as ComponentProps<"button">;
  return (
    <button type={type} className={classes} {...buttonRest}>
      {content}
    </button>
  );
}
