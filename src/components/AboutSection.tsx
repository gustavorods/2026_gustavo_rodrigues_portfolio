import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="apple-section" ref={ref}>
      <div className="apple-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="apple-link mb-4 uppercase tracking-widest text-xs">Sobre mim</p>
          <h2 className="apple-heading mb-8">
            Construindo o futuro,<br />uma API por vez.
          </h2>
          <p className="apple-body mb-6">
            Sou um desenvolvedor back-end apaixonado por criar sistemas robustos e escaláveis.
            Meu foco principal está em <strong className="text-foreground">Java</strong> e{" "}
            <strong className="text-foreground">Spring Boot</strong>, mas possuo experiência
            com múltiplas tecnologias tanto no backend quanto no frontend.
          </p>
          <p className="apple-body">
            Acredito na construção de APIs RESTful bem documentadas, arquiteturas limpas e
            código que resiste ao tempo. Busco constantemente aprimorar minhas habilidades
            em arquitetura de sistemas, boas práticas e novas tecnologias.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
