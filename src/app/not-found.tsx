import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col items-start px-6 py-24">
      <p className="eyebrow text-accent-strong">404</p>
      <h1 className="mt-6 text-display font-serif">
        Page not found<span className="text-accent">.</span>
      </h1>
      <p className="mt-6 max-w-xl text-subtitle text-muted">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
      </p>
      <Link
        href="/"
        className="link-underline mt-12 font-medium text-accent-strong"
      >
        ← Back home
      </Link>
    </main>
  );
}
