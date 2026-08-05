"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { navSections, site } from "@content/site";

// Anchor ids matching the section wrappers in page.tsx.
const sectionIds = navSections.map((label) => label.toLowerCase());

/**
 * Fixed translucent bar over the whole page. Drops in on mount, scroll-spies
 * the section under a probe line 120px below the viewport top, and collapses
 * to an animated hamburger with a height-animated drawer under md.
 *
 * The sections it points at only exist on the home page, so away from "/" the
 * same items route back to "/#section" instead of trying to scroll.
 */
export function Navbar() {
  const [scrolledTo, setScrolledTo] = useState(sectionIds[0]);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const onHome = pathname === "/";

  // Off the home page none of these sections are on screen, so nothing is
  // current — derived rather than stored, so the effect only ever runs on "/".
  const active = onHome ? scrolledTo : "";

  useEffect(() => {
    if (!onHome) return;

    const onScroll = () => {
      // At the very bottom the last section is often too short to reach the
      // probe line, so claim it explicitly.
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 80
      ) {
        setScrolledTo(sectionIds[sectionIds.length - 1]);
        return;
      }

      const probe = window.scrollY + 120;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && probe >= section.offsetTop) {
          setScrolledTo(sectionIds[i]);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onHome]);

  const goTo = (id: string) => {
    if (!onHome) {
      router.push(`/#${id}`);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className="navbar-cosmic fixed top-0 z-50 w-full border-b border-[var(--border)] bg-background/90 backdrop-blur-md"
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => goTo(sectionIds[0])}
            className="text-gradient-cosmic name-glow cursor-pointer text-xl font-bold"
          >
            {site.name}
          </button>

          <div className="hidden gap-6 md:flex">
            {navSections.map((label) => {
              const id = label.toLowerCase();
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => goTo(id)}
                  aria-current={active === id ? "true" : undefined}
                  className={`cursor-pointer transition-colors ${
                    active === id
                      ? "font-semibold text-accent"
                      : "text-foreground/60 hover:text-accent"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded text-foreground/70 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden"
          >
            <motion.span
              className="block h-0.5 w-5 origin-center rounded-full bg-current"
              animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.22 }}
            />
            <motion.span
              className="block h-0.5 w-5 rounded-full bg-current"
              animate={{ opacity: open ? 0 : 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="block h-0.5 w-5 origin-center rounded-full bg-current"
              animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.22 }}
            />
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="mobile-drawer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[var(--border)] bg-background/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navSections.map((label) => {
                const id = label.toLowerCase();
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => {
                      goTo(id);
                      setOpen(false);
                    }}
                    className={`rounded-lg px-2 py-3 text-left text-base font-medium transition-colors ${
                      active === id
                        ? "bg-accent/5 text-accent"
                        : "text-foreground/60 hover:bg-accent/5 hover:text-accent"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
}
