import { writeFileSync } from "node:fs";
import * as icons from "simple-icons";

const stack = [
  // Frontend
  ["typescript", "TypeScript", "Frontend"],
  ["javascript", "JavaScript", "Frontend"],
  ["react", "React", "Frontend"],
  ["nextdotjs", "Next.js", "Frontend"],
  ["tailwindcss", "Tailwind CSS", "Frontend"],

  // Backend
  ["python", "Python", "Backend"],
  ["nodedotjs", "Node.js", "Backend"],
  ["express", "Express", "Backend"],
  ["fastapi", "FastAPI", "Backend"],

  // Banco de Dados
  ["postgresql", "PostgreSQL", "Banco de Dados"],
  ["mysql", "MySQL", "Banco de Dados"],
  ["mongodb", "MongoDB", "Banco de Dados"],

  // IA e Automação
  ["n8n", "n8n", "IA e Automação"],
  ["claude", "Claude / Anthropic", "IA e Automação"],
  ["googlegemini", "Google Gemini", "IA e Automação"],

  // DevOps
  ["docker", "Docker", "DevOps"],
  ["git", "Git", "DevOps"],
  ["vercel", "Vercel", "DevOps"],

  // Design
  ["figma", "Figma", "Design"],
];

const iconAliases = {
  n8n: "siN8n",
  claude: "siClaude",
  googlegemini: "siGooglegemini",
};

const toKey = (slug) =>
  iconAliases[slug] ??
  "si" + slug.charAt(0).toUpperCase() + slug.slice(1);

const entries = stack.map(([slug, name, category]) => {
  const icon = icons[toKey(slug)];

  if (!icon) {
    throw new Error(
      `O ícone "${slug}" não foi encontrado na versão instalada de simple-icons.`,
    );
  }

  return {
    id: slug,
    name,
    category,
    path: icon.path,
  };
});

const file = `import type { Technology } from "@/types";

export const technologies: Technology[] = ${JSON.stringify(entries, null, 2)};
`;

writeFileSync(
  new URL("../src/constants/technologies.ts", import.meta.url),
  file,
  "utf8",
);

console.log(`Wrote ${entries.length} technologies.`);
