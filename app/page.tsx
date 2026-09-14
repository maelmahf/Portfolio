import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { ProjectShowcase } from "@/components/project-showcase";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ContactSection } from "@/components/sections/contact-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />
      <Hero />
      <ProjectShowcase />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
