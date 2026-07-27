import { Footer } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Experience } from "@/sections/Experience";
import { FeaturedProjects } from "@/sections/FeaturedProjects";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { TechStack } from "@/sections/TechStack";

/**
 * Section order mirrors the user journey: impact → context → offer → technical
 * validation → proof → credibility → conversion. Reordering here changes the
 * funnel, not just the layout.
 */
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <TechStack />
        <FeaturedProjects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
