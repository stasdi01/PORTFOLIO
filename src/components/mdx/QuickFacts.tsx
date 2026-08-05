import { StackList } from "@/components/site/StackList";

// Quick-facts panel for the top of the case study: role, timeline, stack, links.
// Links without an href render as clearly marked placeholders.
export function QuickFacts({
  role,
  timeline,
  stack,
  links,
}: {
  role: string;
  timeline: string;
  stack: string[];
  links: { label: string; href?: string }[];
}) {
  return (
    <aside className="cosmic-card my-12 rounded-xl p-6">
      <dl className="grid gap-6 sm:grid-cols-2">
        <div>
          <dt className="font-mono text-xs font-semibold tracking-[0.18em] text-foreground/40 uppercase">
            Role
          </dt>
          <dd className="mt-2 text-foreground/80">{role}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs font-semibold tracking-[0.18em] text-foreground/40 uppercase">
            Timeline
          </dt>
          <dd className="mt-2 text-foreground/80">{timeline}</dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="font-mono text-xs font-semibold tracking-[0.18em] text-foreground/40 uppercase">
            Stack
          </dt>
          <dd className="mt-2">
            <StackList stack={stack} />
          </dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="font-mono text-xs font-semibold tracking-[0.18em] text-foreground/40 uppercase">
            Links
          </dt>
          <dd className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
            {links.map(({ label, href }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 underline-offset-4 transition-colors hover:text-accent hover:underline"
                >
                  {label} ↗
                </a>
              ) : (
                <span key={label} className="text-sm text-foreground/40">
                  {label}: TODO(dimi) add URL
                </span>
              ),
            )}
          </dd>
        </div>
      </dl>
    </aside>
  );
}
