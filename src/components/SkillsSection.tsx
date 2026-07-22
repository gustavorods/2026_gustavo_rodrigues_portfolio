import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SpotlightCard from "./ui/spotlight-card";
import { useLanguage } from "@/i18n/LanguageContext";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const SkillsSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="apple-section bg-secondary/20" ref={ref}>
      <div className="apple-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="apple-link mb-4 uppercase tracking-widest text-xs">{t.skills.label}</p>
          <h2 className="apple-heading">{t.skills.heading}</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="flex flex-wrap justify-center gap-8"
        >
          {t.skills.categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={itemVariants}
              className="flex w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]"
            >
              <SpotlightCard className="flex flex-col h-full w-full !p-6 md:!p-8">
                <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-6 pb-2 border-b border-border/40">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.08, y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 12 }}
                      className="apple-badge cursor-default select-none bg-secondary/80 hover:bg-sky-500/10 hover:text-sky-500 dark:hover:text-sky-400 font-medium transition-colors duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
