import { Check } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/constants/services";

export function Services() {
  return (
    <section id="servicos" className="section-y relative bg-surface/30">
      <div className="shell flex flex-col gap-14">
        <SectionHeading
          eyebrow="O que eu faço"
          title="Soluções completas, do design à automação"
          subtitle="Cada projeto começa com uma pergunta simples: qual problema de negócio estamos resolvendo? A tecnologia certa vem depois."
          align="center"
          className="mx-auto"
        />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.id} delay={index * 0.08} className="h-full">
                <Card className="group flex h-full flex-col gap-5">
                  <span className="grid h-11 w-11 place-items-center rounded-[10px] border border-line bg-elevated text-ink-muted transition-colors duration-300 group-hover:border-accent/40 group-hover:text-accent">
                    <Icon size={20} aria-hidden />
                  </span>

                  <h3 className="text-xl font-semibold tracking-tight text-ink">
                    {service.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-ink-muted">
                    {service.benefit}
                  </p>

                  <ul className="mt-auto flex flex-col gap-2.5 border-t border-line pt-5">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-ink-muted">
                        <Check
                          size={15}
                          aria-hidden
                          className="mt-0.5 shrink-0 text-accent"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
