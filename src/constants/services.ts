import { Blocks, Layers, MonitorSmartphone, Workflow } from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "ui-ux",
    icon: MonitorSmartphone,
    title: "UI/UX Design",
    benefit:
      "Interfaces que as pessoas entendem sem manual — porque cada tela é desenhada a partir da tarefa que o usuário precisa concluir.",
    deliverables: [
      "Pesquisa e mapeamento do fluxo do usuário",
      "Protótipo navegável de alta fidelidade",
      "Design system consistente e reaproveitável",
    ],
  },
  {
    id: "web",
    icon: Blocks,
    title: "Sites e Landing Pages",
    benefit:
      "Presença digital que carrega rápido, aparece no Google e conduz o visitante até o contato — em vez de só existir.",
    deliverables: [
      "Site institucional ou landing page de conversão",
      "Responsivo de verdade, do celular ao monitor grande",
      "SEO técnico e performance otimizados na entrega",
    ],
  },
  {
    id: "full-stack",
    icon: Layers,
    title: "Aplicações Full-Stack",
    benefit:
      "Sistemas sob medida para quando a planilha já não dá conta e nenhuma ferramenta pronta encaixa no seu processo.",
    deliverables: [
      "Frontend, API e banco de dados integrados",
      "Autenticação e controle de permissões",
      "Painéis de gestão com os dados que importam",
    ],
  },
  {
    id: "automacoes",
    icon: Workflow,
    title: "Automações Inteligentes",
    benefit:
      "Elimine horas de trabalho manual repetitivo e deixe sua equipe focar no que realmente importa.",
    deliverables: [
      "Integração entre sistemas e ferramentas",
      "Fluxos automatizados de atendimento e vendas",
      "Relatórios e processos sem intervenção manual",
    ],
  },
];
