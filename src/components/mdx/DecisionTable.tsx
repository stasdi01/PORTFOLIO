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
          className="cosmic-card rounded-xl p-6"
        >
          <p className="text-lg font-bold text-foreground">{row.decision}</p>
          <dl className="mt-4 flex flex-col gap-4">
            <div>
              <dt className="text-gradient-cosmic font-mono text-xs font-semibold tracking-[0.18em] uppercase">Why</dt>
              <dd className="mt-2 text-foreground/70">{row.why}</dd>
            </div>
            {row.tradeoff ? (
              <div>
                <dt className="font-mono text-xs font-semibold tracking-[0.18em] text-foreground/40 uppercase">Tradeoff</dt>
                <dd className="mt-2 text-foreground/70">{row.tradeoff}</dd>
              </div>
            ) : null}
            <div>
              <dt className="font-mono text-xs font-semibold tracking-[0.18em] text-foreground/40 uppercase">What I&rsquo;d reconsider</dt>
              <dd className="mt-2 text-foreground/70">{row.reconsider}</dd>
            </div>
          </dl>
        </div>
      ))}
    </div>
  );
}
