import type { Experience } from "@/lib/types";

// One role: header (role, company, period) then impact bullets.
export function ExperienceItem({ item }: { item: Experience }) {
  const { company, role, period, bullets } = item;

  return (
    <article className="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-baseline">
      <h3 className="text-subtitle font-serif">
        {role}
        <span className="text-muted"> · {company}</span>
      </h3>
      <p className="text-sm text-subtle sm:text-right">{period}</p>

      <ul className="mt-4 flex list-none flex-col gap-2 text-muted sm:col-span-2">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex gap-2">
            <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
