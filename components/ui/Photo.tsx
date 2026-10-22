import Image from "next/image";
import { cn } from "@/lib/cn";

// Image slot: a rounded frame with next/image filling it (object-cover).
// Never put text over a photo: captions and cards sit outside the frame.

type PhotoProps = {
  src: string;
  alt: string;
  /** Frame aspect and sizing classes, e.g. "aspect-[4/5]". */
  className?: string;
  /** object-position classes for the crop, e.g. "object-top" or "object-[30%_50%]". */
  position?: string;
  sizes: string;
  /** Preload above-the-fold images and fetch them at high priority (Next 16 replacement for `priority`). */
  preload?: boolean;
};

export function Photo({ src, alt, className, position, sizes, preload }: PhotoProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-image bg-sand-100", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        preload={preload}
        fetchPriority={preload ? "high" : undefined}
        className={cn("object-cover", position)}
      />
    </div>
  );
}
