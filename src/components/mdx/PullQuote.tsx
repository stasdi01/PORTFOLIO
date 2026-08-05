// A large pulled statement, set in Fraunces with an accent rule.
export function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-12 border-l-2 border-accent pl-6 text-2xl font-bold text-foreground md:text-3xl">
      {children}
    </blockquote>
  );
}
