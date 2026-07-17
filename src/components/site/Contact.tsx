import { site } from "@content/site";

// Plain email link; no form, by design.
export function Contact() {
  return (
    <div>
      <p className="max-w-xl text-muted">
        The best way to reach me is email. Whether it&rsquo;s a role, a question,
        or something you&rsquo;re building, I read everything and reply.
      </p>
      <a
        href={`mailto:${site.email}`}
        className="link-underline mt-6 inline-block font-serif text-title text-ink hover:text-accent-strong"
      >
        {site.email}
      </a>
    </div>
  );
}
