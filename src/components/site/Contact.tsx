"use client";

import { site } from "@content/site";
import { MailIcon, MapPinIcon, SendIcon, DownloadIcon } from "./icons";

// Contact form + info cards. The form has no backend by design: on submit it
// builds a prefilled mailto: and hands off to the visitor's email client, so
// email stays the real channel while the UI matches the reference.
export function Contact() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "");

    const body = `${message}\n\n— ${name}${email ? ` (${email})` : ""}`;
    const href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject || "Portfolio inquiry"
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  const fieldClass =
    "w-full rounded-lg border border-line bg-bg px-4 py-3 text-ink placeholder:text-subtle focus:border-accent focus:outline-none";

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Form card. */}
      <form
        onSubmit={handleSubmit}
        className="rounded-xl border border-line bg-card p-6"
      >
        <div className="flex flex-col gap-4">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium">Name</span>
            <input
              name="name"
              type="text"
              required
              placeholder="Your name"
              className={fieldClass}
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium">Email</span>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              className={fieldClass}
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium">Subject</span>
            <input
              name="subject"
              type="text"
              placeholder="Project inquiry"
              className={fieldClass}
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium">Message</span>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Tell me what you're building…"
              className={`${fieldClass} resize-y`}
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 font-medium text-sidebar-fg transition-colors hover:bg-accent-strong"
          >
            <SendIcon className="h-4 w-4" />
            Send message
          </button>
        </div>
      </form>

      {/* Info cards + availability. */}
      <div className="flex flex-col gap-4">
        <a
          href={`mailto:${site.email}`}
          className="flex items-center gap-4 rounded-xl border border-line bg-card p-6 transition-colors hover:border-ink"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-sidebar-fg">
            <MailIcon className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-sm text-subtle">Email</span>
            <span className="block text-ink">{site.email}</span>
          </span>
        </a>

        <div className="flex items-center gap-4 rounded-xl border border-line bg-card p-6">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-sidebar-fg">
            <MapPinIcon className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-sm text-subtle">Location</span>
            <span className="block text-ink">{site.location}</span>
          </span>
        </div>

        <div className="rounded-xl bg-accent p-6 text-sidebar-fg">
          <h3 className="font-semibold text-sidebar-fg">
            Open to opportunities
          </h3>
          <p className="mt-2 text-sm text-sidebar-muted">
            {site.availability}
          </p>
          <a
            href={site.resumePdfPath}
            download
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-sage px-4 py-2 text-sm font-medium text-sage-fg transition-colors hover:bg-sidebar-fg"
          >
            <DownloadIcon className="h-4 w-4" />
            Download résumé
          </a>
        </div>
      </div>
    </div>
  );
}
