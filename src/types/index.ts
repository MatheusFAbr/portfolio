import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  benefit: string;
  deliverables: [string, string, string];
}

export type TechCategory =
  | "Frontend"
  | "Backend"
  | "Banco de Dados"
  | "DevOps"
  | "Design"
  | "IA e Automação";

export interface Technology {
  id: string;
  name: string;
  category: TechCategory;
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