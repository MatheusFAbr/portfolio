import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/constants/site";

const facts = [
  {
    value: `Desde ${site.buildingSince}`,
    label: "construindo sistemas, entre formação técnica e projetos próprios",
  },
  {
    value: "Full-Stack",
    label: "da interface ao banco de dados, sem depender de terceiros no meio",
  },
  {
    value: site.location,
    label: "atendendo remoto para todo o Brasil",
  },
];

export function About() {
  return (
    <section id="sobre" className="section-y relative">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Sobre mim"
            title="Código é meio. O fim sempre foi resolver o problema."
          />
        </div>

        <div className="flex flex-col gap-8 lg:col-span-7">
          <Reveal delay={0.1} className="flex flex-col gap-6">
            <p className="text-lg leading-relaxed text-ink-muted">
              Meu ponto de virada não foi um curso nem um framework novo. Foi
              perceber, ainda durante a formação técnica, que{" "}
              <strong className="font-medium text-ink">
                programação não é escrever código — é uma ferramenta para resolver
                problema real
              </strong>
              . A ficha caiu quando os primeiros sistemas que construí passaram a
              substituir processo manual, organizar informação que vivia espalhada
              e devolver horas para quem antes fazia tudo na mão.
            </p>

            <p className="text-lg leading-relaxed text-ink-muted">
              Foi aí que decidi que era isso que eu queria fazer. E é o que orienta
              a forma como trabalho até hoje:{" "}
              <strong className="font-medium text-ink">
                antes da primeira linha de código, entender o processo
              </strong>{" "}
              — quem executa, onde trava, quanto custa o retrabalho. Tecnologia
              escolhida cedo demais vira problema caro depois.
            </p>

            <p className="text-lg leading-relaxed text-ink-muted">
              Trabalho bem com quem tem um processo funcionando no improviso e
              quer transformá-lo em algo confiável: pequenos negócios, times
              enxutos e projetos em início de operação. Se é o seu caso, o próximo
              bloco mostra exatamente onde eu entro.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
              {facts.map((fact) => (
                <div key={fact.value} className="flex flex-col gap-2 bg-surface p-6">
                  <dt className="text-xl font-semibold tracking-tight text-ink">
                    {fact.value}
                  </dt>
                  <dd className="text-sm leading-relaxed text-ink-muted">
                    {fact.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.3}>
            <a
              href="#servicos"
              className="group inline-flex items-center gap-2 text-sm font-medium text-accent"
            >
              Veja como aplico isso na prática
              <ArrowRight
                size={16}
                aria-hidden
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
