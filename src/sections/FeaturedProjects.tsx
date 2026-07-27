import Image from "next/image";
import { ArrowUpRight, ImageOff } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/constants/projects";
import type { Project } from "@/types";
import { cn } from "@/utils/cn";

function ProjectVisual({ project }: { project: Project }) {
  if (project.isPlaceholder) {
    return (
      <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-3 rounded-[20px] border border-dashed border-line-strong bg-surface text-ink-muted">
        <ImageOff size={22} aria-hidden />
        <p className="px-6 text-center text-sm">
          Imagem de {project.name} pendente
        </p>
      </div>
    );
  }

  return (
    <div className="group/media relative overflow-hidden rounded-[20px] border border-line bg-surface">
      <Image
        src={project.image}
        alt={`Interface do projeto ${project.name}`}
        width={1600}
        height={1000}
        sizes="(min-width: 1024px) 55vw, 100vw"
        className="aspect-[16/10] w-full object-cover transition-transform duration-[600ms] ease-[var(--ease-out-soft)] group-hover/media:scale-[1.04]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid place-items-center bg-base/40 opacity-0 transition-opacity duration-300 group-hover/media:opacity-100"
      >
        <span className="grid h-14 w-14 place-items-center rounded-full bg-accent text-base">
          <ArrowUpRight size={22} />
        </span>
      </div>
    </div>
  );
}

function ProjectEntry({ project, index }: { project: Project; index: number }) {
  const flipped = index % 2 === 1;
  const href = project.caseStudyLink ?? project.link;

  return (
    <Reveal className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
      <div
        className={cn(
          "relative lg:col-span-7",
          flipped ? "lg:order-2" : "lg:order-1",
        )}
      >
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir o projeto ${project.name}`}
            className="block"
          >
            <ProjectVisual project={project} />
          </a>
        ) : (
          <ProjectVisual project={project} />
        )}
      </div>

      <div
        className={cn(
          "flex flex-col gap-5 lg:col-span-5",
          flipped ? "lg:order-1" : "lg:order-2",
        )}
      >
        <div className="flex items-baseline gap-4">
          <span
            aria-hidden
            className="text-5xl font-bold leading-none tracking-tight text-ink/10 lg:text-6xl"
          >
            {project.order}
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            {project.category}
          </span>
        </div>

        <h3 className="text-3xl font-semibold tracking-tight text-ink lg:text-4xl">
          {project.name}
        </h3>

        <p className="text-base leading-relaxed text-ink-muted">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>

        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-accent"
          >
            Ver projeto
            <ArrowUpRight
              size={16}
              aria-hidden
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        )}
      </div>
    </Reveal>
  );
}

export function FeaturedProjects() {
  return (
    <section id="projetos" className="section-y">
      <div className="shell flex flex-col gap-16 lg:gap-24">
        <SectionHeading
          eyebrow="Trabalhos selecionados"
          title="Projetos que resolveram problemas reais"
          subtitle="Uma seleção curada dos trabalhos que melhor representam a forma como penso e construo produtos digitais."
        />

        <div className="flex flex-col gap-24 lg:gap-32">
          {projects.map((project, index) => (
            <ProjectEntry key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Peak-trust moment: the CTA lands right after the proof. */}
        <Reveal className="flex flex-col items-center gap-5 border-t border-line pt-16 text-center">
          <h3 className="max-w-xl text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            O próximo projeto dessa lista pode ser o seu.
          </h3>
          <ButtonLink href="#contato" size="lg">
            Iniciar um projeto
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
