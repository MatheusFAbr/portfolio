import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { technologies } from "@/constants/technologies";

export function TechStack() {
  return (
    <section id="tecnologias" className="section-y">
      <div className="shell flex flex-col gap-14">
        <SectionHeading
          eyebrow="Ferramentas"
          title="A stack que sustenta as entregas"
          subtitle="Tecnologias maduras e amplamente adotadas — a escolha vem depois do problema, nunca antes dele."
        />

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5 xl:gap-4">
          {technologies.map((tech, index) => (
            <Reveal key={tech.id} delay={Math.min(index, 10) * 0.03}>
              <div className="group flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl border border-line bg-surface p-3 text-center transition-[border-color,transform] duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:border-accent/40">
                <svg
                  role="img"
                  aria-label={tech.name}
                  viewBox="0 0 24 24"
                  className="h-7 w-7 fill-ink-faint transition-colors duration-300 group-hover:fill-accent sm:h-8 sm:w-8"
                >
                  <path d={tech.path} />
                </svg>

                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-ink sm:text-sm">
                    {tech.name}
                  </span>
                  <span className="text-[11px] text-ink-muted">{tech.category}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
