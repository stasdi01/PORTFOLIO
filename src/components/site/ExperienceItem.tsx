import type { Experience } from "@/lib/types";

// Two-column entry: a meta column (company, role, mono date · location) beside
// the bullets, which read as plain paragraphs rather than a dotted list.
export function ExperienceItem({ item }: { item: Experience }) {
  const { company, role, period, location, bullets } = item;

  return (
    <article className="grid gap-4 sm:grid-cols-[200px_1fr] sm:gap-12">
      <div>
        <h3 className="font-serif text-subtitle text-ink">{company}</h3>
        <p className="mt-1 text-muted">{role}</p>
        <p className="mt-2 font-mono text-xs text-subtle">
          {period}
          {location ? ` · ${location}` : ""}
        </p>
      </div>
      <div className="flex flex-col gap-4 text-muted">
        {bullets.map((bullet, i) => (
          <p key={i} className="leading-relaxed">
            {bullet}
          </p>
        ))}
      </div>
    </article>
  );
}
