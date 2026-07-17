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
      className={`overflow-hidden rounded-lg border border-line bg-card ${className ?? ""}`}
    >
      <div className="flex items-center gap-2 border-b border-line px-4 py-2">
        <span aria-hidden className="flex gap-2">
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
        </span>
        {url ? (
          <span className="truncate font-mono text-xs text-subtle">{url}</span>
        ) : null}
      </div>
      {children}
    </div>
  );
}
