# 🚀 Portfólio — Matheus Ferrari Abrahão

Meu portfólio pessoal desenvolvido para apresentar meus projetos, experiência e serviços como desenvolvedor Full-Stack. Além de funcionar como vitrine profissional, ele também foi pensado como uma landing page de conversão para clientes interessados em desenvolvimento de sistemas, landing pages e automações.

## ✨ Tecnologias

* **Next.js 16 (App Router)**
* **TypeScript**
* **Tailwind CSS v4**
* **Framer Motion**
* **React Hook Form**
* **Zod**
* **Lucide React**

---

## 📦 Executando o projeto

Clone o repositório e instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O projeto estará disponível em:

```
http://localhost:3000
```

---

## ⚙️ Variáveis de ambiente

Para que o formulário de contato funcione corretamente, crie um arquivo `.env.local` a partir do `.env.example`.

| Variável             | Descrição                                                                  |
| -------------------- | -------------------------------------------------------------------------- |
| `RESEND_API_KEY`     | Chave da API do Resend utilizada para envio dos e-mails.                   |
| `CONTACT_FROM_EMAIL` | Endereço de e-mail verificado no Resend que será utilizado como remetente. |

> **Observação:** caso essas variáveis não estejam configuradas, a rota `/api/contact` responderá com **503**, informando que o serviço de envio não está disponível.

---

## 📁 Estrutura do projeto

```text
src/
├── app/            # Rotas, layout, metadata, sitemap, robots e API de contato
├── components/
│   ├── shared/     # Navbar, Footer, formulário e componentes compartilhados
│   └── ui/         # Componentes reutilizáveis de interface
├── constants/      # Conteúdos editáveis (projetos, stack, serviços, etc.)
├── hooks/          # Hooks personalizados
├── lib/            # Schemas de validação
├── sections/       # Seções da landing page
├── types/          # Tipagens compartilhadas
└── utils/          # Funções utilitárias
```

Uma das ideias do projeto foi separar completamente **conteúdo** de **apresentação**. Assim, adicionar ou editar projetos normalmente exige apenas alterar os arquivos dentro de `src/constants`, sem precisar modificar os componentes.

---

## 📜 Scripts disponíveis

| Comando                                | Descrição                                                                    |
| -------------------------------------- | ---------------------------------------------------------------------------- |
| `npm run dev`                          | Inicia o servidor de desenvolvimento                                         |
| `npm run build`                        | Gera a versão de produção                                                    |
| `npm run start`                        | Executa o build de produção                                                  |
| `npm run lint`                         | Executa o ESLint                                                             |
| `node scripts/generate-tech-icons.mjs` | Atualiza automaticamente os ícones das tecnologias utilizando o Simple Icons |

---

## 📌 Status

O projeto está em constante evolução. Novas funcionalidades, melhorias de performance e novos projetos serão adicionados conforme meu crescimento profissional.

---

## 📄 Licença

Este projeto foi desenvolvido para fins de portfólio pessoal. Sinta-se à vontade para utilizá-lo como referência de estudos, mas não copie integralmente seu conteúdo.
