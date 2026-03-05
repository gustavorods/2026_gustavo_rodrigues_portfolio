import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="apple-section" ref={ref}>
      <div className="apple-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="apple-link mb-4 uppercase tracking-widest text-xs">Contato</p>
          <h2 className="apple-heading mb-6">Vamos conversar.</h2>
          <p className="apple-body mb-12">
            Tem um projeto em mente ou quer trocar uma ideia? Ficarei feliz em ouvir.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a href="mailto:gustavo@email.com" className="apple-btn-primary">
              <Mail size={16} className="mr-2" />
              Email
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="apple-btn-secondary">
              <Github size={16} className="mr-2" />
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="apple-btn-secondary">
              <Linkedin size={16} className="mr-2" />
              LinkedIn
            </a>
            <a href="#" className="apple-btn-secondary">
              <Download size={16} className="mr-2" />
              Baixar CV
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="border-t mt-20">
        <div className="apple-container py-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Gustavo Rodrigues. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
