"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { site } from "@content/site";
import {
  HomeIcon,
  UserIcon,
  CodeIcon,
  FolderIcon,
  BriefcaseIcon,
  MailIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MenuIcon,
  CloseIcon,
} from "./icons";

// Single-page anchor targets, in the order they appear down the page. Each id
// matches a section wrapper in page.tsx; "home" is the hero.
const navItems = [
  { id: "home", label: "Home", Icon: HomeIcon },
  { id: "about", label: "About", Icon: UserIcon },
  { id: "skills", label: "Skills", Icon: CodeIcon },
  { id: "projects", label: "Projects", Icon: FolderIcon },
  { id: "experience", label: "Experience", Icon: BriefcaseIcon },
  { id: "contact", label: "Contact", Icon: MailIcon },
] as const;

// Fixed forest-green sidebar: identity, availability, anchor nav with a
// scroll-spy active state, résumé download, and socials. Collapses to a top bar
// with a slide-in panel below the lg breakpoint.
export function Sidebar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  // Scroll-spy: mark the section currently nearest the top of the viewport as
  // active so the matching nav item highlights while scrolling.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const year = new Date().getFullYear();

  return (
    <>
      {/* Mobile top bar (below lg). */}
      <div className="fixed inset-x-0 top-0 z-40 flex items-center justify-between bg-sidebar px-4 py-3 text-sidebar-fg lg:hidden">
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/dimi.jpg"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 rounded-full object-cover"
          />
          <span className="font-semibold">{site.name}</span>
        </a>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="rounded-md p-1 text-sidebar-fg"
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {/* Backdrop for the mobile panel. */}
      {open ? (
        <button
          type="button"
          aria-hidden="true"
          tabIndex={-1}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-ink/40 lg:hidden"
        />
      ) : null}

      {/* The sidebar itself. Fixed on lg; a slide-in panel on mobile. */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-sidebar-line bg-sidebar px-6 py-8 text-sidebar-fg transition-transform duration-200 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Identity. */}
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3"
        >
          <Image
            src="/dimi.jpg"
            alt={site.name}
            width={52}
            height={52}
            className="rounded-full object-cover"
          />
          <span>
            <span className="block text-xl font-normal leading-tight">
              {site.name}
            </span>
            <span className="block text-sm text-sidebar-muted">{site.role}</span>
          </span>
        </a>

        {/* Availability pill. */}
        <p className="mt-6 flex items-center gap-2 rounded-lg bg-pill-dark px-3 py-2 text-sm">
          <span aria-hidden className="h-2 w-2 rounded-full bg-dot" />
          {site.availabilityShort}
        </p>

        {/* Anchor nav. */}
        <nav aria-label="Primary" className="mt-8 flex-1">
          <ul className="flex flex-col gap-1">
            {navItems.map(({ id, label, Icon }) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "true" : undefined}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                      isActive
                        ? "bg-sidebar-line text-sidebar-fg"
                        : "text-sidebar-muted hover:bg-sidebar-line/50 hover:text-sidebar-fg"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Résumé + socials + copyright. */}
        <div className="mt-8 border-t border-sidebar-line pt-6">
          <a
            href={site.resumePdfPath}
            download
            className="flex items-center justify-center gap-2 rounded-lg bg-sage px-4 py-2 text-sm font-medium text-sage-fg transition-all duration-150 hover:bg-sage/80"
          >
            <DownloadIcon className="h-4 w-4" />
            Download CV
          </a>
          <div className="mt-4 flex items-center gap-6 text-sm text-sidebar-muted">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-sidebar-fg"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-sidebar-fg"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
          <p className="mt-6 text-xs text-sidebar-muted">
            © {year} {site.name}
          </p>
        </div>
      </aside>
    </>
  );
}
