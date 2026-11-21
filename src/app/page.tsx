import { ContactSection } from "@/components/contact-section";
import { AudienceSection } from "@/components/audience-section";
import { ExperienceSection } from "@/components/experience-section";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { SiteHeader } from "@/components/site-header";
import { ServicesSection } from "@/components/services-section";
import { SkillsSection } from "@/components/skills-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AudienceSection />
        <ServicesSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </>
  );
}
