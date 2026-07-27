import type { ExperienceEntry } from "@/types";

/**
 * Ordered most recent first. Entries flagged `isPlaceholder` are missing details
 * (employer, course, institution) that must be filled in before going live.
 */
export const experience: ExperienceEntry[] = [
  {
    id: "estagio",
    period: "Mai 2026 — Atual",
    title: "Estagiário em Desenvolvimento",
    organization: "Empresa a definir",
    description:
      "Primeira experiência profissional na área, aplicando em produção o que até então vinha sendo construído em projetos acadêmicos.",
    current: true,
    isPlaceholder: true,
  },
  {
    id: "graduacao",
    period: "2024 — 2027",
    title: "Graduação em andamento",
    organization: "Instituição a definir",
    description:
      "Formação superior com conclusão prevista para julho de 2027, com foco em desenvolvimento de aplicações web e arquitetura de sistemas.",
    isPlaceholder: true,
  },
  {
    id: "tecnico",
    period: "2021 — 2023",
    title: "Técnico em Desenvolvimento de Sistemas",
    organization: "Ensino técnico integrado ao médio",
    description:
      "Três anos de formação técnica construindo sistemas do zero — o período em que a programação deixou de ser matéria e virou ferramenta de resolver problema.",
  },
];
