import type { MDXComponents } from "mdx/types";

// Element styling for MDX prose (the case study). Kept here rather than pulling
// in @tailwindcss/typography so the reading column matches the design tokens
// exactly. Custom block components (QuickFacts, ProblemFix, …) are imported
// directly inside the .mdx files.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1
        className="heading-gradient text-4xl font-bold md:text-5xl"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="mt-16 mb-6 text-2xl font-bold text-foreground md:text-3xl"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="mt-10 mb-4 text-xl font-bold text-foreground/90"
        {...props}
      />
    ),
    p: (props) => (
      <p className="mt-6 leading-relaxed text-foreground/70" {...props} />
    ),
    a: (props) => (
      <a
        className="font-medium text-accent underline-offset-4 transition-colors hover:text-accent-hover hover:underline"
        {...props}
      />
    ),
    ul: (props) => (
      <ul
        className="mt-6 flex list-disc flex-col gap-2 pl-6 text-foreground/70 marker:text-accent/60"
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        className="mt-6 flex list-decimal flex-col gap-2 pl-6 text-foreground/70 marker:text-foreground/40"
        {...props}
      />
    ),
    li: (props) => <li className="leading-relaxed" {...props} />,
    strong: (props) => (
      <strong className="font-semibold text-foreground" {...props} />
    ),
    em: (props) => <em className="italic" {...props} />,
    code: (props) => (
      <code
        className="rounded bg-foreground/10 px-1 font-mono text-sm text-foreground/90"
        {...props}
      />
    ),
    hr: (props) => (
      <hr className="my-12 border-[var(--border)]" {...props} />
    ),
    ...components,
  };
}
