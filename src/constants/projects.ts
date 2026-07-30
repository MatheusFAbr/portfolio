import type { Project } from "@/types";

/**
 * `technologies` is intentionally empty until each stack is confirmed — the
 * badge list simply renders nothing rather than showing filler text. Same for
 * `link`/`caseStudyLink`: without a URL the card shows no dead "Ver projeto".
 */
export const projects: Project[] = [
  {
    id: "urbanz",
    order: "01",
    name: "Urbanz",
    category: "Marca / Streetwear",
    description:
      "Marca de streetwear masculino de Juquiá que precisava existir online com a mesma presença que tem na rua. Vitrine editorial em preto e branco, com contato direto por WhatsApp para encurtar o caminho entre a visita e a venda.",
    technologies: [],
    image: "/images/projects/urbanz.jpg",
  },
  {
    id: "sylvaai",
    order: "02",
    name: "SylvaAI",
    category: "Aplicação Web / Visão Computacional",
    description:
      "Plantação florestal perde a árvore inteira quando a praga é notada tarde demais. Painel que analisa imagens de Pinus, classifica cada árvore entre saudável e infestada e reúne histórico, distribuição e evolução por período em uma tela só.",
    technologies: [],
    image: "/images/projects/sylvaai.jpg",
  },
  {
    id: "sylvatech",
    order: "03",
    name: "SylvaTech",
    category: "Site Institucional",
    description:
      "A camada de apresentação do projeto de monitoramento ambiental: explica a proposta, a tecnologia e a equipe para quem precisa entender a solução antes de decidir conversar.",
    technologies: [],
    image: "/images/projects/sylvatech.jpg",
  },
];
