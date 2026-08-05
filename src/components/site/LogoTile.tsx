import Image from "next/image";

/**
 * Backing colour for the tile. Real marks come in two flavours — light-on-dark
 * and dark-on-light — and the tile has to match the one it holds or the logo
 * sits in a contrasting frame.
 */
export type LogoTone = "dark" | "light" | "surface";

const toneClass: Record<LogoTone, string> = {
  dark: "bg-black",
  light: "bg-white",
  surface: "bg-background/90",
};

type Props = {
  /** Path under /public. Falls back to initials when absent. */
  src?: string;
  /** Organisation name — used for the alt text and the initials fallback. */
  name: string;
  /** Rendered pixel size; also what next/image is asked for. */
  size: number;
  tone?: LogoTone;
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
export function LogoTile({
  src,
  name,
  size,
  tone = "dark",
  className = "",
}: Props) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[var(--border)] ${toneClass[tone]} ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={`${name} logo`}
          width={size}
          height={size}
          className="h-full w-full object-contain p-1"
        />
      ) : (
        <span className="text-xs font-bold tracking-wide text-foreground/50">
          {initials(name)}
        </span>
      )}
    </span>
  );
}
