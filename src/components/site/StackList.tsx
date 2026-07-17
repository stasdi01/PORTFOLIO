// Tech stack rendered as a mono, middot-separated line — the developer-résumé
// idiom, used on project cards, quick facts, and the résumé.
export function StackList({
  stack,
  className,
}: {
  stack: string[];
  className?: string;
}) {
  return (
    <p className={`font-mono text-sm text-subtle ${className ?? ""}`}>
      {stack.join(" · ")}
    </p>
  );
}
