// Tech stack renderer. Two idioms: "line" (mono middot-separated, used on the
// résumé and case study) and "pills" (sage chips, used on the home project
// cards and skills grid).
export function StackList({
  stack,
  className,
  variant = "line",
}: {
  stack: string[];
  className?: string;
  variant?: "line" | "pills";
}) {
  if (variant === "pills") {
    return (
      <ul className={`flex flex-wrap gap-2 ${className ?? ""}`}>
        {stack.map((item) => (
          <li
            key={item}
            className="rounded-md bg-sage px-3 py-1 text-sm font-medium text-sage-fg"
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p className={`font-mono text-sm text-subtle ${className ?? ""}`}>
      {stack.join(" · ")}
    </p>
  );
}
