import Image from "next/image";
import { BrowserFrame } from "./BrowserFrame";

// A browser-framed screenshot. Renders the real image via next/image at its
// natural aspect ratio when given a src, otherwise a labelled placeholder frame
// (never a broken img).
export function ScreenshotSlot({
  src,
  alt,
  label = "Screenshot",
  caption,
  url,
  width = 2000,
  height = 1150,
  className,
  onDark = false,
}: {
  src?: string;
  alt?: string;
  label?: string;
  caption?: string;
  url?: string;
  width?: number;
  height?: number;
  className?: string;
  /** Lightens the caption for use on a dark surface. */
  onDark?: boolean;
}) {
  return (
    <figure className={className}>
      <BrowserFrame url={url}>
        {src ? (
          <Image
            src={src}
            alt={alt ?? label}
            width={width}
            height={height}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="h-auto w-full"
          />
        ) : (
          <div className="flex aspect-video items-center justify-center bg-bg">
            <span className="px-6 text-center text-sm text-subtle">
              {label}
            </span>
          </div>
        )}
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
