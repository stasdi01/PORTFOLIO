"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { site } from "@content/site";
import { projects } from "@content/projects";
import { FloatingIcon } from "./FloatingIcon";
import { GithubIcon, LinkedinIcon, ResumeIcon } from "./icons";

// The hand-placed foreground stars. Only the count matters here — each one is
// positioned by :nth-child in globals.css.
const BRIGHT_STARS = 14;

const socials = [
  { label: "LinkedIn", href: site.linkedin, Icon: LinkedinIcon, external: true },
  { label: "GitHub", href: site.github, Icon: GithubIcon, external: true },
  { label: "Résumé", href: site.resumePath, Icon: ResumeIcon, external: false },
];

/**
 * First viewport: a deep starfield with three drifting nebulae, the projects
 * orbiting as icons, and the name held in the centre. Moving the cursor pushes
 * the icons a few pixels through a soft spring, which gives the field depth
 * without ever moving the text.
 */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();
  const [isNarrow, setIsNarrow] = useState(false);

  // Parallax is a pointer affordance; skip the listener entirely on phones.
  useEffect(() => {
    const check = () => setIsNarrow(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 60, damping: 20 });
  const springY = useSpring(pointerY, { stiffness: 60, damping: 20 });

  const onMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (reduceMotion || isNarrow || frameRef.current) return;

    const { clientX, clientY } = event;
    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = null;
      const bounds = sectionRef.current?.getBoundingClientRect();
      if (!bounds) return;

      // Normalised to roughly -0.5..0.5 from the centre of the hero.
      pointerX.set((clientX - (bounds.left + bounds.width / 2)) / bounds.width);
      pointerY.set((clientY - (bounds.top + bounds.height / 2)) / bounds.height);
    });
  };

  useEffect(() => {
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={onMouseMove}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20 pb-12 sm:px-6 md:pb-0"
    >
      <div className="hero-starfield absolute inset-0 z-0" />

      <div className="hero-nebula hero-nebula-rose pointer-events-none absolute top-[-10%] left-1/2 z-[1] h-[550px] w-[800px] -translate-x-1/2 rounded-full blur-[100px]" />
      <div className="hero-nebula-blue pointer-events-none absolute right-[-5%] bottom-0 z-[1] h-[600px] w-[700px] rounded-full blur-[90px]" />
      <div className="hero-nebula-violet pointer-events-none absolute top-[2%] left-[-5%] z-[1] h-[500px] w-[650px] rounded-full blur-[80px]" />

      <div className="hero-stars z-[2]" />
      <div className="pointer-events-none absolute inset-0 z-[2]">
        {Array.from({ length: BRIGHT_STARS }, (_, i) => (
          <span key={i} className="hero-bright-star" />
        ))}
      </div>

      <div className="hero-vignette pointer-events-none absolute inset-0 z-[3]" />

      {projects.map((project) =>
        project.hero ? (
          <FloatingIcon
            key={project.slug}
            name={project.name}
            status={project.status}
            href={project.caseStudyUrl ?? `/projects#${project.slug}`}
            hero={project.hero}
            springX={springX}
            springY={springY}
          />
        ) : null
      )}

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="hero-headline-glow pointer-events-none absolute inset-x-0 top-1/4 -z-10 h-[500px] -translate-y-1/2" />

        <motion.h1
          className="mb-5 text-4xl font-bold sm:text-5xl md:mb-6 md:text-7xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Hi, I&rsquo;m{" "}
          <span className="hero-name-glow bg-gradient-to-r from-rose-300 via-accent to-rose-600 bg-clip-text text-transparent">
            {site.name}
          </span>
        </motion.h1>

        <motion.p
          className="mb-4 text-xl text-foreground/80 md:text-2xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          {site.headline}
        </motion.p>

        <motion.p
          className="mx-auto mb-8 max-w-2xl px-2 text-base text-foreground/60 md:mb-12 md:px-0 md:text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
        >
          {site.heroBlurb}
        </motion.p>

        <motion.div
          className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
        >
          <a
            href="#projects"
            className="btn-primary w-full rounded-xl px-8 py-3.5 text-center font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto sm:py-3"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="btn-outline w-full rounded-xl px-8 py-3.5 text-center font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto sm:py-3"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          className="mt-8 flex items-center justify-center gap-4 sm:gap-6 md:mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {socials.map(({ label, href, Icon, external }) => {
            const className =
              "inline-flex rounded p-2 text-foreground/60 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

            return (
              <div key={label} className="group relative">
                {external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={className}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                ) : (
                  <Link href={href} aria-label={label} className={className}>
                    <Icon className="h-6 w-6" />
                  </Link>
                )}
                <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-lg bg-accent px-3 py-1.5 text-sm whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {label}
                  <span className="absolute top-full left-1/2 -mt-1 -translate-x-1/2 border-4 border-transparent border-t-accent" />
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
