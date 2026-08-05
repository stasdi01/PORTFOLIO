// A single bug write-up: titled container holding labelled Problem / Diagnosis
// / Fix parts (and an optional Aside). Parts are authored as MDX children, so
// inline `code` and emphasis render through the shared element styles.
export function ProblemFix({
  title,
  source,
  children,
}: {
  title: string;
  source?: { href: string; label: string };
  children: React.ReactNode;
}) {
  return (
    <div className="cosmic-card my-12 rounded-xl p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
        {source ? (
          <a
            href={source.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent underline-offset-4 transition-colors hover:text-accent-hover hover:underline"
          >
            {source.label} ↗
          </a>
        ) : null}
      </div>
      <div className="mt-6 flex flex-col gap-6">{children}</div>
    </div>
  );
}

// One labelled part inside a ProblemFix. Label is an accent eyebrow;
// the body is MDX prose (no extra top margin on its first paragraph).
export function Part({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-gradient-cosmic font-mono text-xs font-semibold tracking-[0.18em] uppercase">{label}</p>
      {/* Reset the first paragraph's top margin so it sits tight under the label. */}
      <div className="mt-2 [&>p:first-child]:mt-0">{children}</div>
    </div>
  );
}
