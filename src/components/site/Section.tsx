// Consistent section wrapper: a large heading with a short accent rule, an
// optional lead paragraph, and content. Shares the 96px vertical rhythm, the
// content max-width, and an anchor scroll offset across the page.
export function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-label`}
      className="scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-5xl">
        <h2 id={`${id}-label`} className="text-title font-semibold">
          {title}
        </h2>
        <span className="heading-rule" aria-hidden />
        {subtitle ? (
          <p className="mt-6 max-w-2xl text-muted">{subtitle}</p>
        ) : null}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
