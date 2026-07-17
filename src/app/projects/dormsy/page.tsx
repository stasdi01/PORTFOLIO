import type { Metadata } from "next";
import Link from "next/link";
import Content from "@content/dormsy.mdx";

export const metadata: Metadata = {
  title: "DormSy: Case Study",
  description:
    "How and why I built DormSy, a campus marketplace for Luther College: the architecture, the bugs that failed silently, and what going to market actually taught me.",
};

export default function DormSyCaseStudy() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <Link
        href="/#projects"
        className="link-underline text-sm text-muted hover:text-accent-strong"
      >
        ← Back to work
      </Link>
      <div className="mt-12">
        <Content />
      </div>
    </article>
  );
}
