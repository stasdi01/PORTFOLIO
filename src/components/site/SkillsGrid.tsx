import { skills } from "@content/skills";
import { StackList } from "./StackList";

// Skills as category cards: each group from content/skills.ts becomes a white
// card with its label and the items rendered as sage pills.
export function SkillsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {skills.map(({ label, items }) => (
        <div key={label} className="rounded-xl border border-line bg-card p-6">
          <h3 className="text-subtitle font-semibold text-ink">{label}</h3>
          <StackList stack={items} variant="pills" className="mt-4" />
        </div>
      ))}
    </div>
  );
}
