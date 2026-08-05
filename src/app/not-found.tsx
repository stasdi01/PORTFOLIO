import { BackLink } from "@/components/site/BackLink";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-start justify-center px-4 py-24 sm:px-6">
      <p className="text-gradient-cosmic font-mono text-xs font-semibold tracking-[0.18em] uppercase">
        404
      </p>
      <h1 className="heading-gradient mt-6 text-4xl font-bold md:text-6xl">
        Page not found
      </h1>
      <p className="mt-6 max-w-xl text-lg text-foreground/60">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
      </p>
      <div className="mt-12">
        <BackLink href="/">Back home</BackLink>
      </div>
    </main>
  );
}
