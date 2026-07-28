import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  /** One business-benefit sentence. Never a technical definition. */
  benefit: string;
  /** Exactly three concrete deliverables. */
  deliverables: [string, string, string];
}

export type TechCategory =
  | "Frontend"
  | "Backend"
  | "Banco de Dados"
  | "DevOps"
  | "Design";

export interface Technology {
  id: string;
  name: string;
  category: TechCategory;
  /** Inline SVG path data rendered inside a 24x24 viewBox. */
  path: string;
}

export interface Project {
  id: string;
  order: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  caseStudyLink?: string;
  /** Marks placeholder content so unfinished entries are obvious in the UI and in code. */
  isPlaceholder?: boolean;
}

export interface ExperienceEntry {
  id: string;
  period: string;
  title: string;
  organization: string;
  description: string;
  current?: boolean;
  isPlaceholder?: boolean;
}
