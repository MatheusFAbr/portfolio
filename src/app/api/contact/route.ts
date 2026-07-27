import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { site } from "@/constants/site";

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => {
    const map: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return map[char];
  });

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Alguns campos precisam de ajuste." },
      { status: 422 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;

  // Fail loudly rather than pretending the message was delivered.
  if (!apiKey || !from) {
    console.error(
      "Contato não enviado: defina RESEND_API_KEY e CONTACT_FROM_EMAIL no ambiente.",
    );
    return NextResponse.json(
      { error: "O envio ainda não está configurado neste ambiente." },
      { status: 503 },
    );
  }

  const { name, email, projectType, message } = parsed.data;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: site.email,
      reply_to: email,
      subject: `Novo contato pelo site — ${name}`,
      html: `
        <h2>Novo contato pelo site</h2>
        <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
        <p><strong>Tipo de projeto:</strong> ${escapeHtml(projectType)}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    }),
  });

  if (!response.ok) {
    console.error("Resend respondeu com erro:", await response.text());
    return NextResponse.json(
      { error: "Não consegui enviar agora. Tente novamente ou me chame por e-mail." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
