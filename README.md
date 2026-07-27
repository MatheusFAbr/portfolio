# Portfólio — Matheus Ferrari Abrahão

Portfólio pessoal e landing page de conversão. Desenvolvedor Full-Stack: sistemas web,
landing pages e automações de processo.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion ·
React Hook Form + Zod · Lucide React

## Rodando localmente

```bash
npm install
npm run dev
```

A aplicação sobe em `http://localhost:3000`.

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha:

| Variável | Para quê |
| --- | --- |
| `RESEND_API_KEY` | Chave da API do [Resend](https://resend.com), usada para entregar o formulário de contato. |
| `CONTACT_FROM_EMAIL` | Remetente verificado no Resend. |

Sem essas variáveis a rota `/api/contact` responde `503` com uma mensagem clara — ela
nunca finge que a mensagem foi enviada.

## Estrutura

```
src/
├── app/            rotas, layout, metadata, sitemap, robots e a API de contato
├── components/
│   ├── ui/         componentes de apresentação reutilizáveis (Button, Card, Field…)
│   └── shared/     Navbar, Footer e o formulário de contato
├── sections/       uma seção da landing page por arquivo
├── constants/      todo o conteúdo editável (dados, projetos, serviços, stack)
├── hooks/          hooks de comportamento
├── lib/            schema de validação do formulário
├── types/          interfaces compartilhadas
└── utils/          utilitários puros
```

Conteúdo e apresentação são separados de propósito: para publicar um projeto novo,
adicione um objeto em `src/constants/projects.ts` — nenhum componente precisa ser tocado.

## Conteúdo pendente

Itens marcados com `isPlaceholder: true` ainda precisam de conteúdo real:

- `src/constants/projects.ts` — imagens, descrições, categorias e links de Urbanz,
  SylvaTech e SylvaAI.
- `src/constants/experience.ts` — nome da empresa do estágio, curso e instituição.
- `src/constants/site.ts` — o campo `url` aponta para um domínio ainda não publicado;
  ele alimenta canonical, sitemap e Open Graph.

## Scripts

| Comando | Ação |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Sobe o build de produção |
| `npm run lint` | ESLint |
| `node scripts/generate-tech-icons.mjs` | Regenera `src/constants/technologies.ts` a partir do simple-icons |
