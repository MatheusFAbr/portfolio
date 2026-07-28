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
      {/* No grid texture or backlight glow in this section: either one would trace
          the portrait's rectangle and break the blend into the black background. */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 h-[460px] w-[560px] translate-x-1/3 rounded-full bg-accent/8 blur-[150px]"
      />

      <div className="shell relative grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="order-2 lg:order-1 lg:col-span-6">
          <Image
            src="/images/hero-portrait.jpeg"
            alt={`Retrato de ${site.name}, ${site.role.toLowerCase()}`}
            width={1122}
            height={1402}
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-auto w-full max-w-md object-cover mx-auto lg:mx-0 lg:max-w-none"
            style={{
              // Feathers the outer edges so the photo dissolves into the page
              // instead of ending on a straight cut.
              maskImage:
                "radial-gradient(115% 105% at 42% 45%, #000 55%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(115% 105% at 42% 45%, #000 55%, transparent 100%)",
            }}
          />
        </div>

        <div className="order-1 flex flex-col items-start gap-7 lg:order-2 lg:col-span-6">
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

            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
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
