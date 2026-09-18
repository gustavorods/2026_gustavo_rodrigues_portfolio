import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
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
  hidden: { opacity: 0, y: 20 },
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

const AboutSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="apple-section" ref={ref}>
      <div className="apple-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p variants={itemVariants} className="apple-link mb-4 uppercase tracking-widest text-xs">
            {t.about.label}
          </motion.p>
          <motion.h2 variants={itemVariants} className="apple-heading mb-8 bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground to-foreground/80 font-bold">
            {t.about.headingLine1}<br />{t.about.headingLine2}
          </motion.h2>
          <motion.p variants={itemVariants} className="apple-body mb-6 leading-relaxed">
            {renderRich(t.about.paragraph1, "text-foreground font-semibold")}
          </motion.p>
          <motion.p variants={itemVariants} className="apple-body leading-relaxed">
            {renderRich(t.about.paragraph2, "text-foreground font-semibold")}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
