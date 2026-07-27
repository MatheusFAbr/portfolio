import { ArrowUpRight } from "lucide-react";
import { navLinks, site, socialLinks } from "@/constants/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface/50">
      <div className="shell grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
        <div className="flex flex-col gap-4 lg:col-span-5">
          <span className="text-lg font-semibold tracking-tight text-ink">
            {site.logo}
            <span className="text-accent">.</span>
          </span>
          <p className="max-w-sm text-base leading-relaxed text-ink-muted">
            Software feito para eliminar trabalho manual — não para adicionar mais
            uma ferramenta que ninguém usa.
          </p>
          <a
            href="#contato"
            className="group mt-2 inline-flex w-fit items-center gap-2 text-sm font-medium text-accent"
          >
            Iniciar um projeto
            <ArrowUpRight
              size={15}
              aria-hidden
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        <nav aria-label="Navegação do rodapé" className="lg:col-span-3">
          <h2 className="mb-4 text-sm font-medium text-ink">Navegação</h2>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ink-muted transition-colors duration-200 hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <h2 className="mb-4 text-sm font-medium text-ink">Contato</h2>
          <ul className="flex flex-col gap-3">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-label={link.ariaLabel}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="text-sm text-ink-muted transition-colors duration-200 hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="shell flex flex-col gap-2 py-6 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {site.name}
          </span>
          <span>{site.location}</span>
        </div>
      </div>
    </footer>
  );
}
