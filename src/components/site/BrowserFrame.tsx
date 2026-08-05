// A browser-chrome wrapper (traffic-light dots + optional address bar) so
// product screenshots read as shipped software. Dots stay neutral grey to
// keep the single-accent rule.
export function BrowserFrame({
  url,
  children,
  className,
}: {
  url?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] ${className ?? ""}`}
    >
      <div className="flex items-center gap-2 border-b border-[var(--border)] px-4 py-2">
        <span aria-hidden className="flex gap-2">
          <span className="h-2 w-2 rounded-full bg-foreground/15" />
          <span className="h-2 w-2 rounded-full bg-foreground/15" />
          <span className="h-2 w-2 rounded-full bg-foreground/15" />
        </span>
        {url ? (
          <span className="truncate font-mono text-xs text-foreground/40">{url}</span>
        ) : null}
      </div>
      {children}
    </div>
  );
}
