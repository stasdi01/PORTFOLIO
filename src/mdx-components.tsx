import type { MDXComponents } from "mdx/types";

// Element styling for MDX prose (the case study). Kept here rather than pulling
// in @tailwindcss/typography so the reading column matches the design tokens
// exactly. Custom block components (QuickFacts, ProblemFix, …) are imported
// directly inside the .mdx files.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1 className="text-display font-serif" {...props} />
    ),
    h2: (props) => (
      <h2 className="mt-24 mb-6 text-title font-serif" {...props} />
    ),
    h3: (props) => (
      <h3 className="mt-12 mb-4 text-subtitle font-serif" {...props} />
    ),
    p: (props) => (
      <p className="mt-6 leading-relaxed text-muted" {...props} />
    ),
    a: (props) => (
      <a
        className="link-underline font-medium text-accent-strong"
        {...props}
      />
    ),
    ul: (props) => (
      <ul className="mt-6 flex list-disc flex-col gap-2 pl-6 text-muted marker:text-subtle" {...props} />
    ),
    ol: (props) => (
      <ol className="mt-6 flex list-decimal flex-col gap-2 pl-6 text-muted marker:text-subtle" {...props} />
    ),
    li: (props) => <li className="leading-relaxed" {...props} />,
    strong: (props) => (
      <strong className="font-semibold text-ink" {...props} />
    ),
    em: (props) => <em className="italic" {...props} />,
    code: (props) => (
      <code
        className="rounded bg-line/70 px-1 font-mono text-sm text-ink"
        {...props}
      />
    ),
    hr: (props) => <hr className="my-12" {...props} />,
    ...components,
  };
}
