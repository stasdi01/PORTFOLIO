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
    <div className="my-12 rounded-lg border border-line bg-card p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h3 className="font-serif text-subtitle text-ink">{title}</h3>
        {source ? (
          <a
            href={source.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-sm text-accent-strong"
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
      <p className="text-eyebrow font-semibold uppercase text-accent">
        {label}
      </p>
      {/* Reset the first paragraph's top margin so it sits tight under the label. */}
      <div className="mt-2 [&>p:first-child]:mt-0">{children}</div>
    </div>
  );
}
