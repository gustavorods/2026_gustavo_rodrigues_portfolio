import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />

      <div className="apple-container relative z-10 flex flex-col items-center text-center pt-20">
        {/* Photo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
          className="mb-8"
        >
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden ring-1 ring-border shadow-2xl">
            <img
              src={profilePhoto}
              alt="Gustavo Rodrigues"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0, 1] }}
          className="apple-heading mb-4"
        >
          Gustavo Rodrigues
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.1, 0, 1] }}
          className="apple-subheading text-muted-foreground mb-6"
        >
          Back-End Developer | Java & Spring Boot
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0, 1] }}
          className="apple-body max-w-2xl mb-10"
        >
          Desenvolvedor especializado em construir APIs robustas, sistemas escaláveis e
          arquiteturas backend de alta performance com Java e Spring Boot.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.25, 0.1, 0, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a href="#projects" className="apple-btn-primary">
            Ver Projetos
          </a>
          <a href="#contact" className="apple-btn-secondary">
            <Mail size={16} className="mr-2" />
            Contato
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-btn-secondary"
          >
            <Github size={16} className="mr-2" />
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-btn-secondary"
          >
            <Linkedin size={16} className="mr-2" />
            LinkedIn
          </a>
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
            <ArrowDown size={20} className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
