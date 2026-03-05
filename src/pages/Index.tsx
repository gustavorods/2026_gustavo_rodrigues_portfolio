import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TimelineSection from "@/components/TimelineSection";
import HobbiesSection from "@/components/HobbiesSection";
import ContactSection from "@/components/ContactSection";

const educationData = [
  {
    title: "Universidade XYZ",
    subtitle: "Bacharelado em Ciência da Computação",
    period: "2020 — 2024",
    items: [
      "Projeto de conclusão com foco em arquitetura de microserviços",
      "Participação em hackathons e competições de programação",
      "Monitoria em disciplinas de programação",
    ],
  },
  {
    title: "Escola Técnica ABC",
    subtitle: "Técnico em Informática",
    period: "2017 — 2019",
    items: [
      "Fundamentos de programação e lógica",
      "Desenvolvimento de projetos web",
      "Primeiro contato com Java e banco de dados",
    ],
  },
];

const experienceData = [
  {
    title: "Desenvolvedor Back-End",
    subtitle: "Empresa de Tecnologia",
    period: "2023 — Presente",
    items: [
      "Desenvolvimento de APIs RESTful com Java e Spring Boot",
      "Implementação de testes unitários e de integração",
      "Participação em code reviews e definição de arquitetura",
      "Integração com serviços externos e bancos de dados",
    ],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TimelineSection
        id="education"
        label="Formação"
        heading="Onde aprendi."
        data={educationData}
      />
      <TimelineSection
        id="experience"
        label="Experiência"
        heading="Onde trabalhei."
        data={experienceData}
      />
      <HobbiesSection />
      <ContactSection />
    </div>
  );
};

export default Index;
