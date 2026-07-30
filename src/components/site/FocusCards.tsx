import { about } from "@content/about";
import { ServerIcon, HeartPulseIcon, UsersIcon, CodeIcon } from "./icons";

// Maps the `icon` string on each focus entry to a component. Keeping this here
// lets the content file stay plain data.
const iconFor: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> =
  {
    server: ServerIcon,
    heart: HeartPulseIcon,
    users: UsersIcon,
    code: CodeIcon,
  };

// The 2×2 "what I focus on" grid beside the About prose — white cards, each an
// icon, title, and one honest line.
export function FocusCards() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {about.focus.map(({ icon, title, body }) => {
        const Icon = iconFor[icon] ?? CodeIcon;
        return (
          <li
            key={title}
            className="rounded-xl border border-line bg-card p-6"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-sage text-sage-fg">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-semibold text-ink">{title}</h3>
            <p className="mt-2 text-sm text-muted">{body}</p>
          </li>
        );
      })}
    </ul>
  );
}
