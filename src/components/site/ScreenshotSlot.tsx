// A labeled placeholder frame for a screenshot that doesn't exist yet.
// Renders an empty state (never a broken <img>) so the layout is real while
// the image is still a TODO. Swap for next/image once the file exists.
export function ScreenshotSlot({
  label = "Screenshot",
  caption,
  className,
}: {
  label?: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className="flex aspect-video items-center justify-center rounded-md border border-dashed border-line bg-bg">
        <span className="px-6 text-center text-sm text-subtle">{label}</span>
      </div>
      {caption ? (
        <figcaption className="mt-2 text-sm text-subtle">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
