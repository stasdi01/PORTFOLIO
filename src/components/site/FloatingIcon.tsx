"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "motion/react";
import type { HeroAccent, HeroIcon, ProjectStatus } from "@/lib/types";

const statusStyles: Record<ProjectStatus, string> = {
  Active: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
  Maintained: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
  Completed: "bg-foreground/10 text-foreground/50 border border-foreground/20",
};

const haloClass: Record<HeroAccent, string> = {
  emerald: "halo-emerald",
  violet: "halo-violet",
  blue: "halo-blue",
};

const litClass: Record<HeroAccent, string> = {
  emerald: "icon-lit-emerald",
  violet: "icon-lit-violet",
  blue: "icon-lit-blue",
};

const monogramClass: Record<HeroAccent, string> = {
  emerald: "monogram-emerald",
  violet: "monogram-violet",
  blue: "monogram-blue",
};

type Props = {
  name: string;
  status: ProjectStatus;
  href: string;
  hero: HeroIcon;
  /** Normalised cursor offset from the hero centre, already spring-smoothed. */
  springX: MotionValue<number>;
  springY: MotionValue<number>;
};

/**
 * One project orbiting the hero. Three motions compose: a slow vertical drift,
 * a slower horizontal one on a different period so the two never resync, and a
 * cursor parallax layered on top. Hovering scales it up and names it.
 */
export function FloatingIcon({
  name,
  status,
  href,
  hero,
  springX,
  springY,
}: Props) {
  const reduceMotion = useReducedMotion();
  const { drift, accent } = hero;

  const parallaxX = useTransform(springX, (v) => v * hero.parallaxFactor);
  const parallaxY = useTransform(springY, (v) => v * hero.parallaxFactor);

  return (
    <motion.div
      className={`absolute z-20 hidden sm:block pointer-events-none lg:pointer-events-auto ${hero.position}`}
      animate={reduceMotion ? {} : { y: drift.y }}
      transition={{
        duration: drift.yDuration,
        delay: drift.delay,
        repeat: Infinity,
        repeatType: "mirror",
        repeatDelay: drift.yRepeatDelay,
        ease: "easeInOut",
      }}
      style={{ x: parallaxX, y: parallaxY }}
    >
      <motion.div
        animate={reduceMotion ? {} : { x: drift.x }}
        transition={{
          duration: drift.xDuration,
          delay: drift.delay * 0.7 + 1.1,
          repeat: Infinity,
          repeatType: "mirror",
          repeatDelay: drift.xRepeatDelay,
          ease: "easeInOut",
        }}
      >
        <div className="group relative">
          <Link
            href={href}
            aria-label={`${name} — ${status}`}
            className="block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <motion.div
              className="relative"
              whileHover={reduceMotion ? {} : { scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div
                className={`icon-glow-pulse pointer-events-none absolute -inset-3 -z-10 rounded-full blur-lg ${haloClass[accent]}`}
              />
              <div
                className={`opacity-90 transition-opacity duration-300 group-hover:opacity-100 ${litClass[accent]}`}
              >
                {hero.iconSrc ? (
                  <Image
                    src={hero.iconSrc}
                    alt=""
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                ) : (
                  <span className={`monogram-tile ${monogramClass[accent]}`}>
                    {hero.monogram}
                  </span>
                )}
              </div>
            </motion.div>
          </Link>

          <div
            className={`pointer-events-none absolute left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 ${
              hero.tooltipBelow ? "top-full mt-3" : "bottom-full mb-3"
            }`}
          >
            {hero.tooltipBelow ? (
              <div className="mx-auto mb-1 h-2 w-2 translate-y-1 rotate-45 border-l border-t border-[var(--border)] bg-[var(--surface)]" />
            ) : null}

            <div className="flex flex-col items-center gap-1 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2 shadow-xl">
              <span className="text-sm font-semibold text-foreground">
                {name}
              </span>
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-medium ${statusStyles[status]}`}
              >
                {status}
              </span>
            </div>

            {hero.tooltipBelow ? null : (
              <div className="mx-auto mt-1 h-2 w-2 -translate-y-1 rotate-45 border-b border-r border-[var(--border)] bg-[var(--surface)]" />
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
