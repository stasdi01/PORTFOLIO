// Decisions and tradeoffs, formatted as decision → why → tradeoff → what I'd
// reconsider. Stacked blocks (not a real table) so it reads cleanly on mobile.
export function DecisionTable({
  rows,
}: {
  rows: {
    decision: string;
    why: string;
    tradeoff?: string;
    reconsider: string;
  }[];
}) {
  return (
    <div className="my-12 flex flex-col gap-6">
      {rows.map((row) => (
        <div
          key={row.decision}
          className="rounded-lg border border-line bg-card p-6"
        >
          <p className="font-serif text-subtitle text-ink">{row.decision}</p>
          <dl className="mt-4 flex flex-col gap-4">
            <div>
              <dt className="eyebrow text-accent-strong">Why</dt>
              <dd className="mt-2 text-muted">{row.why}</dd>
            </div>
            {row.tradeoff ? (
              <div>
                <dt className="eyebrow text-subtle">Tradeoff</dt>
                <dd className="mt-2 text-muted">{row.tradeoff}</dd>
              </div>
            ) : null}
            <div>
              <dt className="eyebrow text-subtle">What I&rsquo;d reconsider</dt>
              <dd className="mt-2 text-muted">{row.reconsider}</dd>
            </div>
          </dl>
        </div>
      ))}
    </div>
  );
}
