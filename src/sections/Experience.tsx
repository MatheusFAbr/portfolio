import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/constants/experience";
import { cn } from "@/utils/cn";

export function Experience() {
  return (
    <section id="experiencia" className="section-y bg-surface/30">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Trajetória"
            title="Uma linha reta desde 2021"
            subtitle="Formação técnica, graduação e agora a prática profissional — construindo sistemas de forma contínua, não por impulso."
          />
        </div>

        <ol className="relative lg:col-span-7">
          <span
            aria-hidden
            className="absolute left-[5px] top-2 h-[calc(100%-1rem)] w-px bg-line"
          />

          {experience.map((entry, index) => (
            <li key={entry.id} className="relative pb-12 pl-8 last:pb-0">
              <span
                aria-hidden
                className={cn(
                  "absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border-2",
                  entry.current
                    ? "border-accent bg-accent"
                    : "border-line-strong bg-base",
                )}
              />

              <Reveal delay={index * 0.08} className="flex flex-col gap-2">
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-accent">
                  {entry.period}
                </span>

                <h3 className="text-xl font-semibold tracking-tight text-ink">
                  {entry.title}
                </h3>

                <p className="text-sm font-medium text-ink-muted">
                  {entry.organization}
                </p>

                <p className="max-w-xl text-base leading-relaxed text-ink-muted">
                  {entry.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
