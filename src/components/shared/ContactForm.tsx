"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheck, LoaderCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FieldShell, Input, Select, Textarea } from "@/components/ui/Field";
import { contactSchema, projectTypes, type ContactInput } from "@/lib/contact-schema";
import { site } from "@/constants/site";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  const onSubmit = async (values: ContactInput) => {
    setStatus("sending");
    setServerError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error ?? "Não consegui enviar sua mensagem agora.");
      }

      setStatus("sent");
      reset();
    } catch (error) {
      setStatus("error");
      setServerError(
        error instanceof Error ? error.message : "Algo deu errado no envio.",
      );
    }
  };

  if (status === "sent") {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 rounded-2xl border border-accent/30 bg-accent/5 p-8"
      >
        <CircleCheck className="text-accent" aria-hidden />
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold tracking-tight text-ink">
            Mensagem enviada.
          </h3>
          <p className="text-base leading-relaxed text-ink-muted">
            Recebi seu contato e normalmente respondo em até 24 horas. Se for
            urgente, me chame direto em {site.email}.
          </p>
        </div>
        <Button variant="secondary" onClick={() => setStatus("idle")}>
          Enviar outra mensagem
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <FieldShell id="name" label="Seu nome" error={errors.name?.message}>
        <Input
          id="name"
          autoComplete="name"
          placeholder="Como devo te chamar?"
          hasError={Boolean(errors.name)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          {...register("name")}
        />
      </FieldShell>

      <FieldShell id="email" label="Seu melhor e-mail" error={errors.email?.message}>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="nome@empresa.com.br"
          hasError={Boolean(errors.email)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email")}
        />
      </FieldShell>

      <FieldShell
        id="projectType"
        label="O que você precisa"
        error={errors.projectType?.message}
      >
        <Select
          id="projectType"
          defaultValue=""
          hasError={Boolean(errors.projectType)}
          aria-invalid={Boolean(errors.projectType)}
          aria-describedby={errors.projectType ? "projectType-error" : undefined}
          {...register("projectType")}
        >
          <option value="" disabled>
            Selecione uma opção
          </option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>
      </FieldShell>

      <FieldShell id="message" label="Conte o contexto" error={errors.message?.message}>
        <Textarea
          id="message"
          rows={5}
          placeholder="Qual processo está travando hoje? O que já tentaram antes?"
          hasError={Boolean(errors.message)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
      </FieldShell>

      {serverError && (
        <p role="alert" className="text-sm text-danger">
          {serverError} Se preferir, me chame direto em{" "}
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>
          .
        </p>
      )}

      <Button type="submit" size="lg" disabled={status === "sending"}>
        {status === "sending" ? (
          <>
            <LoaderCircle size={17} className="animate-spin" aria-hidden />
            Enviando...
          </>
        ) : (
          <>
            <Send size={17} aria-hidden />
            Enviar mensagem
          </>
        )}
      </Button>
    </form>
  );
}
