import {
  SiBootstrap,
  SiC,
  SiCplusplus,
  SiCss,
  SiDart,
  SiDjango,
  SiDocker,
  SiExpo,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiFlutter,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiJunit5,
  SiKotlin,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPycharm,
  SiPytorch,
  SiPython,
  SiRailway,
  SiReact,
  SiSpringboot,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";
import { TbBrandOpenai, TbSql } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import type { SkillGroup } from "@/lib/types";

// Everything here already appears somewhere else in the site's content — a
// résumé bullet, a project stack, or an internship — so the list stays honest.
// Grouped by what the work is, not by language/framework/tool.
export const skills: SkillGroup[] = [
  {
    title: "Languages",
    items: [
      { name: "Python", Icon: SiPython, color: "#3776ab" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
      { name: "Java", Icon: SiOpenjdk, color: "#f89820" },
      { name: "Kotlin", Icon: SiKotlin, color: "#7f52ff" },
      { name: "C", Icon: SiC, color: "#a8b9cc" },
      { name: "C++", Icon: SiCplusplus, color: "#00599c" },
      { name: "Dart", Icon: SiDart, color: "#0175c2" },
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      // Django's brand green (#092e20) is all but invisible on this
      // background, so the pill uses the lighter tone from its own docs.
      { name: "Django REST Framework", Icon: SiDjango, color: "#44b78b" },
      { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
      { name: "Spring Boot", Icon: SiSpringboot, color: "#6db33f" },
      { name: "Express", Icon: SiExpress, color: "#fafafa" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#5fa04e" },
      { name: "Flask", Icon: SiFlask, color: "#fafafa" },
      { name: "JWT", Icon: SiJsonwebtokens, color: "#fb015b" },
      { name: "SQL", Icon: TbSql, color: "#e38c00" },
    ],
  },
  {
    title: "Frontend & Mobile",
    items: [
      { name: "React", Icon: SiReact, color: "#61dafb" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#fafafa" },
      { name: "React Native", Icon: SiReact, color: "#61dafb" },
      { name: "Flutter", Icon: SiFlutter, color: "#02569b" },
      { name: "Expo", Icon: SiExpo, color: "#fafafa" },
      { name: "HTML", Icon: SiHtml5, color: "#e34f26" },
      { name: "CSS", Icon: SiCss, color: "#663399" },
      { name: "Bootstrap", Icon: SiBootstrap, color: "#7952b3" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169e1" },
      { name: "MySQL", Icon: SiMysql, color: "#4479a1" },
      { name: "Supabase", Icon: SiSupabase, color: "#3fcf8e" },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: "Docker", Icon: SiDocker, color: "#2496ed" },
      { name: "Git", Icon: SiGit, color: "#f05032" },
      { name: "Railway", Icon: SiRailway, color: "#fafafa" },
      { name: "JUnit", Icon: SiJunit5, color: "#25a162" },
      { name: "PyTorch", Icon: SiPytorch, color: "#ee4c2c" },
      { name: "OpenAI API", Icon: TbBrandOpenai, color: "#fafafa" },
      { name: "VS Code", Icon: VscVscode, color: "#007acc" },
      { name: "PyCharm", Icon: SiPycharm, color: "#21d789" },
    ],
  },
];
