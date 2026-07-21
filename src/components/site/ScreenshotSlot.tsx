import Image from "next/image";
import { BrowserFrame } from "./BrowserFrame";

// A browser-framed screenshot. Renders the real image via next/image when a
// `src` is given, otherwise a labelled placeholder frame (never a broken img).
export function ScreenshotSlot({
  src,
  alt,
  label = "Screenshot",
  caption,
  url,
  className,
  onDark = false,
}: {
  src?: string;
  alt?: string;
  label?: string;
  caption?: string;
  url?: string;
  className?: string;
  /** Lightens the caption for use on a dark surface. */
  onDark?: boolean;
}) {
  return (
    <figure className={className}>
      <BrowserFrame url={url}>
        <div className="relative aspect-video bg-bg">
          {src ? (
            <Image
              src={src}
              alt={alt ?? label}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-top"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="px-6 text-center text-sm text-subtle">
                {label}
              </span>
            </div>
          )}
        </div>
      </BrowserFrame>
      {caption ? (
        <figcaption
          className={`mt-2 text-sm ${onDark ? "text-bg/60" : "text-subtle"}`}
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
