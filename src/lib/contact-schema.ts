import { z } from "zod";

export const projectTypes = [
  "Site ou landing page",
  "Aplicação web / sistema",
  "Automação de processo",
  "UI/UX Design",
  "Ainda não sei definir",
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Digite seu nome para eu saber com quem falo."),
  email: z.email("Confira o e-mail — parece haver um caractere fora do lugar."),
  projectType: z.enum(projectTypes, {
    error: "Escolha a opção mais próxima do que você precisa.",
  }),
  message: z
    .string()
    .trim()
    .min(20, "Conte um pouco mais — a partir de 20 caracteres já consigo entender o contexto.")
    .max(2000, "Mensagem muito longa. Resuma o essencial e detalhamos na conversa."),
});

export type ContactInput = z.infer<typeof contactSchema>;
