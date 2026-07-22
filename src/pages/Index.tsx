import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TimelineSection from "@/components/TimelineSection";
import HobbiesSection from "@/components/HobbiesSection";
import ContactSection from "@/components/ContactSection";
import { useLanguage } from "@/i18n/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TimelineSection
        id="education"
        label={t.timeline.educationLabel}
        heading={t.timeline.educationHeading}
        data={t.timeline.education}
      />
      <TimelineSection
        id="experience"
        label={t.timeline.experienceLabel}
        heading={t.timeline.experienceHeading}
        data={t.timeline.experience}
      />
      <HobbiesSection />
      <ContactSection />
    </div>
  );
};

export default Index;
