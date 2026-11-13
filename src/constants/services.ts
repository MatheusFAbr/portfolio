import {
  Blocks,
  BrainCircuit,
  Layers,
  Workflow,
} from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "ai-solutions",
    icon: BrainCircuit,
    title: "Soluções com Inteligência Artificial",
    benefit:
      "Aplicações de IA que ajudam pessoas e equipes a acessar informações, executar tarefas e resolver problemas do dia a dia.",
    deliverables: [
      "Assistentes e agentes de IA",
      "Integração com modelos como Claude e Gemini",
      "Soluções com APIs e ferramentas externas",
    ],
  },
  {
    id: "automations",
    icon: Workflow,
    title: "Automações e Integrações",
    benefit:
      "Conecte ferramentas e elimine tarefas repetitivas para reduzir trabalho manual e tornar processos mais eficientes.",
    deliverables: [
      "Workflows com n8n e APIs REST",
      "Integração entre plataformas e sistemas",
      "Automação de consultas e operações",
    ],
  },
  {
    id: "systems",
    icon: Layers,
    title: "Sistemas e Aplicações",
    benefit:
      "Soluções desenvolvidas para necessidades específicas, com organização, segurança e foco na experiência de quem utiliza.",
    deliverables: [
      "Aplicações web e APIs",
      "Integração com bancos de dados",
      "Sistemas de gestão e ferramentas internas",
    ],
  },
  {
    id: "web",
    icon: Blocks,
    title: "Sites e Plataformas Web",
    benefit:
      "Presença digital profissional e aplicações web responsivas, desenvolvidas para apresentar marcas, produtos e serviços.",
    deliverables: [
      "Sites institucionais e landing pages",
      "Interfaces responsivas",
      "Integração com formulários e serviços externos",
    ],
  },
];