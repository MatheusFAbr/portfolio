import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "projurisadv-ai",
    order: "01",
    name: "ProjurisADV AI Integration",
    category: "IA aplicada / Automação de processos",
    description:
      "Integração entre Claude, n8n e a API REST do ProjurisADV para facilitar a consulta de informações jurídicas por meio de linguagem natural. A solução permite consultar pessoas, processos, andamentos e arquivos, reduzindo a necessidade de buscas manuais e tornando o acesso às informações mais rápido para a equipe.",
    technologies: [
      "Claude",
      "n8n",
      "MCP",
      "API REST",
      "Integração de sistemas",
    ],
    image: "/images/projects/projurisadv.jpg",
    caseStudyLink:
      "https://github.com/MatheusFAbr/projurisadv-ai-integration",
    isPlaceholder: true,
  },
  {
    id: "bubatag",
    order: "02",
    name: "Bubatag",
    category: "IoT / Monitoramento inteligente",
    description:
      "Projeto acadêmico voltado ao monitoramento de búfalos por meio de dispositivos IoT. A solução combina sensores e conectividade LoRaWAN para coletar informações fisiológicas e de localização, disponibilizando os dados em uma plataforma web com recursos de gestão e análise.",
    technologies: [
      "ESP32",
      "LoRaWAN",
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
    ],
    image: "/images/projects/bubatag.jpg",
    link: "https://bubatag-site.vercel.app",
    isPlaceholder: true,
  },
  {
    id: "urbanz",
    order: "03",
    name: "Urbanz",
    category: "Desenvolvimento Web",
    description:
      "Desenvolvimento de uma vitrine digital para uma marca de streetwear masculino. O projeto apresenta os produtos e a identidade visual da marca em uma experiência responsiva, com navegação simples e acesso direto ao contato comercial.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    image: "/images/projects/urbanz.jpg",
    link: "https://urbanz-site.vercel.app",
  },
];