import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

/** Pill control for stepping back up a level. Its arrow slides left on hover. */
export function BackLink({ href, children }: Props) {
  return (
    <Link href={href} className="btn-back">
      <span aria-hidden className="arrow">
        ←
      </span>
      {children}
    </Link>
  );
}
