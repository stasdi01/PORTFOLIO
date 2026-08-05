import type { Metadata } from "next";
import Content from "@content/dormsy.mdx";
import { BackLink } from "@/components/site/BackLink";

export const metadata: Metadata = {
  title: "DormSy: Case Study",
  description:
    "How and why I built DormSy, a campus marketplace for Luther College: the architecture, the bugs that failed silently, and what going to market actually taught me.",
};

export default function DormSyCaseStudy() {
  return (
    <article className="mx-auto max-w-3xl px-4 pt-28 pb-20 sm:px-6 md:pt-32">
      <BackLink href="/#projects">Back to projects</BackLink>
      <div className="mt-12">
        <Content />
      </div>
    </article>
  );
}
