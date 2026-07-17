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
    <aside className="my-12 rounded-lg border border-line bg-card p-6">
      <dl className="grid gap-6 sm:grid-cols-2">
        <div>
          <dt className="eyebrow text-subtle">
            Role
          </dt>
          <dd className="mt-2 text-ink">{role}</dd>
        </div>
        <div>
          <dt className="eyebrow text-subtle">
            Timeline
          </dt>
          <dd className="mt-2 text-ink">{timeline}</dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="eyebrow text-subtle">
            Stack
          </dt>
          <dd className="mt-2">
            <StackList stack={stack} />
          </dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="eyebrow text-subtle">
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
                  className="link-underline text-ink hover:text-accent-strong"
                >
                  {label} ↗
                </a>
              ) : (
                <span key={label} className="text-sm text-subtle">
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
