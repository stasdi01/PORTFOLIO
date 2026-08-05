"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { site } from "@content/site";
import { GithubIcon, LinkedinIcon, ResumeIcon } from "./icons";

const links = [
  { label: "GitHub", href: site.github, Icon: GithubIcon, external: true },
  { label: "LinkedIn", href: site.linkedin, Icon: LinkedinIcon, external: true },
  { label: "Résumé", href: site.resumePath, Icon: ResumeIcon, external: false },
];

const linkClassName =
  "glow-hover flex items-center gap-2 rounded-xl border border-[var(--border)] px-3 py-2.5 text-foreground/60 transition-colors hover:border-[var(--border-hover)] hover:text-accent sm:px-5";

/**
 * Closing section: one primary action, the address in plain text underneath it
 * for anyone who'd rather copy it, then the same three links as the hero.
 */
export function Contact() {
  return (
    <section id="contact" className="px-4 py-14 sm:px-6 md:py-20">
      <motion.div
        className="mx-auto max-w-2xl text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, margin: "-80px" }}
      >
        <h2 className="heading-gradient section-heading mb-5 text-3xl font-bold sm:text-4xl md:mb-6 md:text-5xl">
          Get In Touch
        </h2>

        <p className="mb-8 text-base text-foreground/70 md:mb-12 md:text-lg">
          Whether it&rsquo;s a role, a question, or something you&rsquo;re
          building, I read everything and reply.
        </p>

        <div className="cosmic-card space-y-5 rounded-2xl p-5 sm:p-8 md:space-y-6">
          <a
            href={`mailto:${site.email}`}
            className="btn-primary inline-block w-full rounded-xl px-8 py-4 font-semibold sm:w-auto"
          >
            Send me an email
          </a>

          <p className="text-sm text-foreground/60">{site.email}</p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {links.map(({ label, href, Icon, external }) =>
              external ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={linkClassName}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  <span className="hidden sm:inline">{label}</span>
                </a>
              ) : (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className={linkClassName}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  <span className="hidden sm:inline">{label}</span>
                </Link>
              )
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
