import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github } from "lucide-react";
import SpotlightCard from "./ui/spotlight-card";
import { useLanguage } from "@/i18n/LanguageContext";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { renderRich } from "@/lib/richText";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 15,
    },
  },
};

const ProjectsSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="apple-section" ref={ref}>
      <div className="apple-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="apple-link mb-4 uppercase tracking-widest text-xs">{t.projects.label}</p>
          <h2 className="apple-heading">{t.projects.heading}</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="flex flex-wrap justify-center gap-8"
        >
          {t.projects.items.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="flex w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]"
            >
              <SpotlightCard className="flex flex-col h-full w-full !p-6 md:!p-8">
                <h3 className="text-lg font-bold mb-2 group-hover:text-sky-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2.5">
                    {t.projects.responsibilitiesLabel}
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1.5">
                    {project.responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-2">
                        <span className="text-sky-500 font-bold mt-0.5">•</span>
                        <span>{renderRich(r, "text-foreground font-semibold")}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.stacks.map((s) => (
                    <Tooltip key={s.name}>
                      <TooltipTrigger asChild>
                        <span className="apple-badge text-[10px] bg-secondary/80 font-medium px-2 py-0.5 rounded-md cursor-default hover:bg-sky-500/20 hover:text-sky-500 transition-colors duration-200">
                          {s.name}
                        </span>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-[240px] text-xs leading-relaxed">
                        {s.detail}
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-border/50 mt-auto">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="apple-link flex items-center gap-1.5 text-xs font-semibold hover:no-underline hover:text-sky-400">
                      <Github size={14} /> {t.projects.code}
                    </a>
                  )}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
