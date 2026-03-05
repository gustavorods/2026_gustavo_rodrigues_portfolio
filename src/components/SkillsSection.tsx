import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SkillCategory {
  title: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    title: "Backend",
    skills: ["Java", "Spring Boot", "Node.js", "PHP", "Laravel", "Python", "Kotlin", "C++"],
  },
  {
    title: "Frontend",
    skills: ["Angular", "React", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Testes",
    skills: ["Jest", "JUnit"],
  },
  {
    title: "Banco de Dados",
    skills: ["MySQL", "MariaDB", "Firebase"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "Vercel", "Aiven"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="apple-section bg-secondary/30" ref={ref}>
      <div className="apple-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
          className="text-center mb-16"
        >
          <p className="apple-link mb-4 uppercase tracking-widest text-xs">Habilidades</p>
          <h2 className="apple-heading">Tecnologias que domino.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: catIdx * 0.1,
                ease: [0.25, 0.1, 0, 1],
              }}
              className="apple-card"
            >
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-5">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="apple-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
