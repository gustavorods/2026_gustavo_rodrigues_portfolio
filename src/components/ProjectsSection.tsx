import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Play } from "lucide-react";

interface Project {
  title: string;
  description: string;
  stacks: string[];
  responsibilities: string[];
  videoUrl?: string;
  deployUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "API de Gestão de Usuários",
    description:
      "API RESTful completa para gerenciamento de usuários com autenticação JWT, validação de dados e documentação Swagger.",
    stacks: ["Java", "Spring Boot", "MySQL", "Docker"],
    responsibilities: ["Arquitetura da API", "Implementação do CRUD", "Autenticação JWT", "Deploy com Docker"],
    githubUrl: "#",
    deployUrl: "#",
  },
  {
    title: "Sistema de E-commerce",
    description:
      "Plataforma backend de e-commerce com carrinho, pagamento e gestão de estoque em microserviços.",
    stacks: ["Java", "Spring Boot", "MariaDB", "Docker"],
    responsibilities: ["Microserviços", "Integração de pagamento", "Gestão de estoque"],
    githubUrl: "#",
    videoUrl: "#",
  },
  {
    title: "Dashboard Analytics",
    description:
      "Dashboard interativo para visualização de dados de negócio com gráficos em tempo real e filtros avançados.",
    stacks: ["React", "TypeScript", "Node.js", "Firebase"],
    responsibilities: ["Frontend completo", "Integração com APIs", "Gráficos interativos"],
    githubUrl: "#",
    deployUrl: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="apple-section" ref={ref}>
      <div className="apple-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
          className="text-center mb-16"
        >
          <p className="apple-link mb-4 uppercase tracking-widest text-xs">Projetos</p>
          <h2 className="apple-heading">O que construí.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.25, 0.1, 0, 1] }}
              className="apple-card group flex flex-col"
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:text-apple-blue transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                {project.description}
              </p>

              <div className="mb-4">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Responsabilidades
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {project.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-2">
                      <span className="text-apple-blue mt-1">•</span> {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.stacks.map((s) => (
                  <span key={s} className="apple-badge text-[10px]">
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="apple-link flex items-center gap-1">
                    <Github size={14} /> Code
                  </a>
                )}
                {project.deployUrl && (
                  <a href={project.deployUrl} target="_blank" rel="noopener noreferrer" className="apple-link flex items-center gap-1">
                    <ExternalLink size={14} /> Demo
                  </a>
                )}
                {project.videoUrl && (
                  <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="apple-link flex items-center gap-1">
                    <Play size={14} /> Vídeo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
