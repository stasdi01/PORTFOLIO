import Image from "next/image";

type Props = {
  /** Path under /public. Falls back to initials when absent. */
  src?: string;
  /** Organisation name — used for the alt text and the initials fallback. */
  name: string;
  /** Rendered pixel size; also what next/image is asked for. */
  size: number;
  className?: string;
};

/**
 * First letter of each of the first two words, e.g. "Luther College" → "LC".
 * Words are matched on letters and digits only, so separators in names like
 * "SkyIT / GBCS Group" don't end up in the tile.
 */
function initials(name: string) {
  return (name.match(/[a-z0-9]+/gi) ?? [])
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

/**
 * Square organisation mark. Renders the logo when one exists and a bordered
 * initials tile when it doesn't, so a missing asset never leaves a hole in the
 * card.
 */
export function LogoTile({ src, name, size, className = "" }: Props) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[var(--border)] bg-black ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={`${name} logo`}
          width={size}
          height={size}
          className="object-contain p-1.5"
        />
      ) : (
        <span className="text-xs font-bold tracking-wide text-foreground/50">
          {initials(name)}
        </span>
      )}
    </span>
  );
}
