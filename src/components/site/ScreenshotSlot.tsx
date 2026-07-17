import { BrowserFrame } from "./BrowserFrame";

// A browser-framed placeholder for a screenshot that doesn't exist yet.
// Renders an empty state (never a broken <img>) so the layout is real while
// the image is still a TODO. Swap the inner div for next/image once the file
// exists.
export function ScreenshotSlot({
  label = "Screenshot",
  caption,
  url,
  className,
}: {
  label?: string;
  caption?: string;
  url?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <BrowserFrame url={url}>
        <div className="flex aspect-video items-center justify-center bg-bg">
          <span className="px-6 text-center text-sm text-subtle">{label}</span>
        </div>
      </BrowserFrame>
      {caption ? (
        <figcaption className="mt-2 text-sm text-subtle">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
