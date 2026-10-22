import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

// 1200px max width with fluid 20 → 32px side gutters.
export function Container({ className, ...rest }: ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-site px-gutter", className)} {...rest} />;
}
