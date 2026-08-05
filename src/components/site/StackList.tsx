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
            className="rounded-full bg-foreground/5 px-3 py-1 text-sm text-foreground/70"
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p className={`font-mono text-sm text-foreground/50 ${className ?? ""}`}>
      {stack.join(" · ")}
    </p>
  );
}
