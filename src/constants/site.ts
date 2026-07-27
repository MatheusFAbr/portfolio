export const site = {
  name: "Matheus Ferrari Abrahão",
  shortName: "Matheus Abrahão",
  logo: "Abrahão",
  role: "Desenvolvedor Full-Stack",
  location: "Juquiá, SP",
  email: "mferrariabr@gmail.com",
  linkedin: "https://www.linkedin.com/in/matheus-ferrari-abrahao",
  github: "https://github.com/MatheusFAbr",

  /** First year writing code professionally-oriented projects. Drives the "desde {X}" copy. */
  buildingSince: 2021,

  availability: {
    open: true,
    label: "Disponível para novos projetos",
  },

  /** Update once a custom domain is live — used for canonical URLs, sitemap and Open Graph. */
  url: "https://matheusabrahao.dev",
} as const;

export const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Experiência", href: "#experiencia" },
] as const;

export const socialLinks = [
  {
    label: "LinkedIn",
    href: site.linkedin,
    ariaLabel: "Abrir o perfil de Matheus Ferrari Abrahão no LinkedIn",
  },
  {
    label: "GitHub",
    href: site.github,
    ariaLabel: "Ver os repositórios de Matheus Ferrari Abrahão no GitHub",
  },
  {
    label: "E-mail",
    href: `mailto:${site.email}`,
    ariaLabel: `Enviar um e-mail para ${site.email}`,
  },
] as const;
