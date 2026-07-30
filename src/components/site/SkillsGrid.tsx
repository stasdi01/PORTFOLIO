import { skills } from "@content/skills";
import { StackList } from "./StackList";

// Skills as category cards: each group from content/skills.ts becomes a white
// card with its label and the items rendered as sage pills.
export function SkillsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {skills.map(({ label, items }) => (
        <div
          key={label}
          className="rounded-card border border-line bg-card p-6 shadow-md"
        >
          <h3 className="font-sans text-xl font-normal text-ink">{label}</h3>
          <StackList stack={items} variant="pills" className="mt-4" />
        </div>
      ))}
    </div>
  );
}
