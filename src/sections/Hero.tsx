import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/constants/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-28 pb-20 lg:pt-32"
    >
      {/* Decorative depth layers — never announced to assistive tech. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-veil opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/12 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-base"
      />

      <div className="shell relative grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col items-start gap-7 lg:col-span-7">
          {site.availability.open && (
            <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/80 py-1.5 pl-2.5 pr-4 text-sm text-ink-muted backdrop-blur">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {site.availability.label}
            </span>
          )}

          <div className="flex flex-col gap-6">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              {site.role}
            </span>

            <h1 className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl xl:text-7xl">
              Transformo processo manual em{" "}
              <span className="text-accent">software que trabalha sozinho</span>.
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-ink-muted">
              Sistemas e automações para quem já perdeu tempo demais com planilha
              solta, retrabalho e processo que só existe na cabeça de alguém.{" "}
              <strong className="font-medium text-ink">
                Do primeiro código ao sistema rodando
              </strong>{" "}
              — sem atalho e sem caixa-preta.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="#contato" size="lg">
              Iniciar um projeto
            </ButtonLink>
            <ButtonLink href="#projetos" variant="secondary" size="lg">
              Ver projetos
            </ButtonLink>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-6 rounded-[32px] bg-accent/10 blur-3xl"
          />
          <div className="relative overflow-hidden rounded-[24px] border border-line bg-surface">
            <Image
              src="/images/hero-portrait.jpeg"
              alt={`Retrato de ${site.name}, ${site.role.toLowerCase()}`}
              width={1122}
              height={1402}
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="h-auto w-full object-cover"
            />
            {/* Fades the photo into the page background instead of ending on a hard edge. */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base/85 via-base/10 to-transparent"
            />
          </div>
        </div>
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para a seção Sobre"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-faint transition-colors duration-200 hover:text-ink-muted lg:flex"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Role</span>
        <ArrowDown size={16} className="animate-bounce" aria-hidden />
      </a>
    </section>
  );
}
