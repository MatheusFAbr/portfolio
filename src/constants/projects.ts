import type { Project } from "@/types";

/**
 * PLACEHOLDER CONTENT — every entry below is flagged `isPlaceholder: true`.
 *
 * To publish a real project: drop the screenshot in /public/images/projects/,
 * point `image` at it, rewrite `description` around the business outcome, fill in
 * `link`/`caseStudyLink`, then remove the `isPlaceholder` flag. The section renders
 * straight from this array — no component or style changes needed to add a fourth
 * or fifth project.
 */
export const projects: Project[] = [
  {
    id: "urbanz",
    order: "01",
    name: "Urbanz",
    category: "A definir",
    description:
      "Descrição pendente. Escreva 2–3 linhas sobre o problema de negócio que o projeto resolveu e o resultado que ele gerou — não sobre a stack usada.",
    technologies: ["A definir"],
    image: "/images/projects/urbanz.jpg",
    isPlaceholder: true,
  },
  {
    id: "sylvatech",
    order: "02",
    name: "SylvaTech",
    category: "A definir",
    description:
      "Descrição pendente. Escreva 2–3 linhas sobre o problema de negócio que o projeto resolveu e o resultado que ele gerou — não sobre a stack usada.",
    technologies: ["A definir"],
    image: "/images/projects/sylvatech.jpg",
    isPlaceholder: true,
  },
  {
    id: "sylvaai",
    order: "03",
    name: "SylvaAI",
    category: "A definir",
    description:
      "Descrição pendente. Escreva 2–3 linhas sobre o problema de negócio que o projeto resolveu e o resultado que ele gerou — não sobre a stack usada.",
    technologies: ["A definir"],
    image: "/images/projects/sylvaai.jpg",
    isPlaceholder: true,
  },
];
