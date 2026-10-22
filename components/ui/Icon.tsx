import type { ReactNode, SVGProps } from "react";

// Hand-drawn 24px line icons. Stroke uses currentColor, so colour comes from text-*.
const paths = {
  phone: (
    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  ),
  "arrow-right": <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  "chevron-down": <path d="M6 9l6 6 6-6" />,
  star: (
    <path
      d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"
      fill="currentColor"
      stroke="none"
    />
  ),
  "map-pin": (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  "shield-check": (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  tag: (
    <>
      <path d="M3 12V4h8l9 9-8 8z" />
      <circle cx="7.5" cy="7.5" r="1.5" />
    </>
  ),
  sparkle: (
    <>
      <path d="M11 3l1.8 5.2L18 10l-5.2 1.8L11 17l-1.8-5.2L4 10l5.2-1.8z" />
      <path d="M19 15l.7 1.8 1.8.7-1.8.7L19 20l-.7-1.8-1.8-.7 1.8-.7z" />
    </>
  ),
  // Services
  "hot-water": (
    <>
      <rect x="6" y="3" width="12" height="16" rx="3" />
      <path d="M9 21v-2M15 21v-2" />
      <path d="M12 8c1.5 1.5 2 2.6 2 3.5a2 2 0 0 1-4 0c0-.9.5-2 2-3.5z" />
    </>
  ),
  drain: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8 9h8M7 12h10M8 15h8" />
    </>
  ),
  droplet: <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />,
  flame: (
    <path d="M12 3c3 3.5 6 6.5 6 10.5a6 6 0 0 1-12 0c0-2 1-3.5 2.5-5 .3 1.8 1.2 3 2.5 3.5C11 9 11 6 12 3z" />
  ),
  shower: (
    <>
      <path d="M5 21V7a3 3 0 0 1 6 0v1" />
      <path d="M8 8h6" />
      <path d="M9 12v1M11 14v1M13 12v1M13 16v1M15 14v1M11 18v1" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof paths;

type IconProps = Omit<SVGProps<SVGSVGElement>, "children"> & {
  name: IconName;
  /** Accessible name. Leave out when the icon sits next to text that says the same. */
  title?: string;
};

export function Icon({ name, title, className = "size-6", ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
      {...rest}
    >
      {title && <title>{title}</title>}
      {paths[name]}
    </svg>
  );
}
