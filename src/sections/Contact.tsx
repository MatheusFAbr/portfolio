import { Clock, ExternalLink, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/shared/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/constants/site";

export function Contact() {
  return (
    <section id="contato" className="section-y relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/4 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/8 blur-[150px]"
      />

      <div className="shell relative grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col gap-10 lg:col-span-5">
          <SectionHeading
            eyebrow="Vamos conversar"
            title="Tem um projeto em mente?"
            subtitle="Conte um pouco sobre o que você precisa. Normalmente respondo em até 24 horas."
          />

          <Reveal delay={0.1} className="flex flex-col gap-4">
            <a
              href={`mailto:${site.email}`}
              aria-label={`Enviar um e-mail para ${site.email}`}
              className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 transition-colors duration-300 hover:border-line-strong"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] bg-elevated text-ink-muted transition-colors duration-300 group-hover:text-accent">
                <Mail size={18} aria-hidden />
              </span>
              <span className="flex flex-col">
                <span className="text-sm text-ink-muted">E-mail</span>
                <span className="text-base font-medium text-ink">{site.email}</span>
              </span>
            </a>

            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir o perfil de Matheus Ferrari Abrahão no LinkedIn"
              className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 transition-colors duration-300 hover:border-line-strong"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] bg-elevated text-ink-muted transition-colors duration-300 group-hover:text-accent">
                <ExternalLink size={18} aria-hidden />
              </span>
              <span className="flex flex-col">
                <span className="text-sm text-ink-muted">LinkedIn</span>
                <span className="text-base font-medium text-ink">
                  Conectar no LinkedIn
                </span>
              </span>
            </a>

            <div className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-5 text-sm text-ink-muted">
              <span className="flex items-center gap-3">
                <MapPin size={16} aria-hidden className="shrink-0" />
                {site.location} — atendimento remoto
              </span>
              <span className="flex items-center gap-3">
                <Clock size={16} aria-hidden className="shrink-0" />
                Resposta em até 24 horas em dias úteis
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="lg:col-span-7">
          <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
