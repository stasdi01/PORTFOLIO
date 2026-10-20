import type { Metadata } from "next";
import Content from "@content/dr-anamneza.mdx";
import { BackLink } from "@/components/site/BackLink";

export const metadata: Metadata = {
  title: "Dr Anamneza: Case Study",
  description:
    "How and why I built Dr Anamneza, a personal health record app for patients in Serbia: Row-Level Security instead of an API server, keeping health data out of everything shared, and the bug that silently lost sessions.",
};

export default function DrAnamnezaCaseStudy() {
  return (
    <article className="mx-auto max-w-3xl px-4 pt-28 pb-20 sm:px-6 md:pt-32">
      <BackLink href="/#projects">Back to projects</BackLink>
      <div className="mt-12">
        <Content />
      </div>
    </article>
  );
}
