import type { Experience } from "@/lib/types";

// A timeline entry: a dot on the rail to the left, then a white card with the
// role, company, a date pill, and the bullets. The rail line is drawn by the
// wrapper in page.tsx so it runs continuously between entries.
export function ExperienceItem({ item }: { item: Experience }) {
  const { company, role, period, location, bullets } = item;

  return (
    <div className="relative pl-10">
      {/* Rail dot, centered on the vertical line drawn by the list wrapper. */}
      <span
        aria-hidden
        className="absolute left-0 top-6 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-bg bg-accent"
      />
      <article className="rounded-card border border-line bg-card p-6 shadow-md">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="font-sans text-xl font-normal text-ink">{role}</h3>
            <p className="mt-1 text-muted">
              {company}
              {location ? ` · ${location}` : ""}
            </p>
          </div>
          <span className="rounded-lg bg-sage px-4 py-2 text-xs font-medium text-sage-fg">
            {period}
          </span>
        </div>
        <ul className="mt-4 flex flex-col gap-2">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex gap-3 text-muted">
              <span
                aria-hidden
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60"
              />
              <span className="leading-relaxed">{bullet}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
