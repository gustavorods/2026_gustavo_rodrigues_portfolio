import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Github, Linkedin, ArrowDown, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";
import BackgroundCanvas from "./BackgroundCanvas";
import Magnetic from "./ui/magnetic";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  const roles = t.hero.roles;
  const [roleIndex, setRoleIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setRoleIndex(0);
  }, [roles]);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [roles]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Canvas Particle Grid */}
      <BackgroundCanvas />

      {/* Decorative ambient glowing gradient blobs */}
      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, 30, -30, 0],
                y: [0, -40, 40, 0],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-10 md:left-1/4 w-[280px] h-[280px] bg-sky-400/10 dark:bg-sky-500/10 rounded-full blur-[90px] pointer-events-none -z-10"
      />
      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, -40, 40, 0],
                y: [0, 30, -30, 0],
              }
        }
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-10 md:right-1/4 w-[320px] h-[320px] bg-blue-500/10 dark:bg-indigo-600/10 rounded-full blur-[110px] pointer-events-none -z-10"
      />

      {/* Subtle radial gradient overlay for premium lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,hsl(var(--background))_80%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-background pointer-events-none" />

      <div className="apple-container relative z-10 flex flex-col items-center text-center pt-20">
        {/* Photo with glowing interactive aura */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          className="mb-8 relative group cursor-pointer"
        >
          {/* Glowing Aura Background */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 opacity-20 blur-md group-hover:opacity-60 group-hover:blur-lg transition duration-500" />
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden ring-2 ring-white/10 dark:ring-white/20 shadow-2xl relative bg-background">
            <img
              src={profilePhoto}
              alt="Gustavo Rodrigues"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </motion.div>

        {/* Name with text gradient clipping */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="apple-heading mb-4 font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground to-foreground/75"
        >
          Gustavo Rodrigues
        </motion.h1>

        {/* Dynamic Rotating Subtitle (Stacked for perfect centering) */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="apple-subheading text-muted-foreground mb-6 flex flex-col items-center justify-center text-center"
        >
          <span className="font-semibold text-foreground/90">{t.hero.role}</span>
          <div className="relative h-[1.3em] overflow-hidden flex items-center justify-center mt-2.5 min-w-[280px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute text-sky-500 dark:text-sky-400 font-bold whitespace-nowrap text-center"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="apple-body max-w-2xl mb-10 text-muted-foreground/90 font-normal"
        >
          {t.hero.description}
        </motion.p>

        {/* Magnetic Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <Magnetic>
            <a href="#projects" className="apple-btn-primary shadow-lg shadow-primary/10">
              {t.hero.ctaProjects}
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#contact" className="apple-btn-secondary hover:shadow-md">
              <Mail size={16} className="mr-2" />
              {t.hero.ctaContact}
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-btn-secondary hover:shadow-md"
            >
              <Github size={16} className="mr-2" />
              GitHub
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-btn-secondary hover:shadow-md"
            >
              <Linkedin size={16} className="mr-2" />
              LinkedIn
            </a>
          </Magnetic>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={20} className="text-muted-foreground/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
