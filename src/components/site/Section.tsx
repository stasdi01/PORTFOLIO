// Consistent section wrapper: an accent eyebrow label plus content, with the
// vertical rhythm (96px) and max width shared across the home page.
export function Section({
  id,
  eyebrow,
  children,
}: {
  id: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-label`}
      className="border-t border-line py-24"
    >
      <div className="mx-auto max-w-3xl px-6">
        <h2
          id={`${id}-label`}
          className="text-eyebrow font-sans font-semibold uppercase text-accent"
        >
          {eyebrow}
        </h2>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
