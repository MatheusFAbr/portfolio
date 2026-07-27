"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { navLinks, site } from "@/constants/site";
import { useScrolledPast } from "@/hooks/useScrollPosition";
import { cn } from "@/utils/cn";

export function Navbar() {
  const scrolled = useScrolledPast(24);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[height,background-color,border-color,backdrop-filter] duration-300 ease-[var(--ease-out-soft)]",
        scrolled
          ? "h-16 border-b border-line bg-base/70 backdrop-blur-xl"
          : "h-20 border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Navegação principal"
        className="shell flex h-full items-center justify-between gap-6"
      >
        <a
          href="#top"
          className="text-base font-semibold tracking-tight text-ink"
        >
          {site.logo}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
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

        <div className="flex items-center gap-2">
          {/* Stays visible at every breakpoint — the contact CTA must never be
              hidden behind the mobile menu. */}
          <ButtonLink href="#contato" size="md" className="px-4 sm:px-6">
            Vamos conversar
          </ButtonLink>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label="Abrir o menu de navegação"
            className="grid h-10 w-10 place-items-center rounded-[10px] border border-line text-ink transition-colors duration-200 hover:border-line-strong md:hidden"
          >
            <Menu size={18} aria-hidden />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          id="menu-mobile"
          className="fixed inset-0 top-0 z-50 flex flex-col bg-base md:hidden"
        >
          <div className="shell flex h-20 items-center justify-between">
            <span className="text-base font-semibold tracking-tight text-ink">
              {site.logo}
              <span className="text-accent">.</span>
            </span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Fechar o menu"
              className="grid h-10 w-10 place-items-center rounded-[10px] border border-line text-ink"
            >
              <X size={18} aria-hidden />
            </button>
          </div>

          <ul className="shell flex flex-1 flex-col justify-center gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-3xl font-semibold tracking-tight text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="shell pb-12">
            <ButtonLink
              href="#contato"
              size="lg"
              className="w-full"
              onClick={() => setMenuOpen(false)}
            >
              Vamos conversar
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
