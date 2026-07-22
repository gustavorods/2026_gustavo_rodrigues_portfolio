import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import Magnetic from "./ui/magnetic";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useLanguage } from "@/i18n/LanguageContext";

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

const ContactSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="apple-section" ref={ref}>
      <div className="apple-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.p variants={itemVariants} className="apple-link mb-4 uppercase tracking-widest text-xs">
            {t.contact.label}
          </motion.p>
          <motion.h2 variants={itemVariants} className="apple-heading mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground to-foreground/80 font-bold">
            {t.contact.heading}
          </motion.h2>
          <motion.p variants={itemVariants} className="apple-body mb-12 leading-relaxed">
            {t.contact.description}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <Magnetic>
              <a href="mailto:gustavo@email.com" className="apple-btn-primary shadow-lg shadow-primary/10">
                <Mail size={16} className="mr-2" />
                {t.contact.email}
              </a>
            </Magnetic>
            <Magnetic>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="apple-btn-secondary hover:shadow-md">
                <Github size={16} className="mr-2" />
                GitHub
              </a>
            </Magnetic>
            <Magnetic>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="apple-btn-secondary hover:shadow-md">
                <Linkedin size={16} className="mr-2" />
                LinkedIn
              </a>
            </Magnetic>
            <DropdownMenu>
              <Magnetic>
                <DropdownMenuTrigger className="apple-btn-secondary hover:shadow-md outline-none">
                  <Download size={16} className="mr-2" />
                  {t.contact.downloadCv}
                </DropdownMenuTrigger>
              </Magnetic>
              <DropdownMenuContent align="center">
                <DropdownMenuItem asChild className="cursor-pointer">
                  <a href="/resume-pt.pdf" download>
                    {t.contact.downloadCvPt}
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <a href="/resume-en.pdf" download>
                    {t.contact.downloadCvEn}
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="border-t mt-20">
        <div className="apple-container py-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Gustavo Rodrigues. {t.contact.footer}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
