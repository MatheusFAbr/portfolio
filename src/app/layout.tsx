import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@/constants/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Desenvolvedor Full-Stack em Juquiá-SP. Sistemas web, landing pages e automações que eliminam processo manual e devolvem horas para a sua equipe.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role} | Web, Full-Stack e Automações`,
    template: `%s | ${site.shortName}`,
  },
  description,
  keywords: [
    "desenvolvedor full-stack",
    "automação de processos",
    "desenvolvimento web",
    "landing page",
    "Next.js",
    "Juquiá SP",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.shortName,
    title: `${site.name} — ${site.role}`,
    description,
    images: [
      {
        url: "/images/hero-portrait.jpeg",
        width: 1122,
        height: 1402,
        alt: `Retrato de ${site.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description,
    images: ["/images/hero-portrait.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  url: site.url,
  image: `${site.url}/images/hero-portrait.jpeg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Juquiá",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  sameAs: [site.linkedin, site.github],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
