import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gamepad2, Music, BookOpen, Dumbbell, Coffee, Plane } from "lucide-react";

const hobbies = [
  { icon: Gamepad2, label: "Games" },
  { icon: Music, label: "Música" },
  { icon: BookOpen, label: "Leitura" },
  { icon: Dumbbell, label: "Academia" },
  { icon: Coffee, label: "Café" },
  { icon: Plane, label: "Viagens" },
];

const HobbiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="apple-section bg-secondary/30" ref={ref}>
      <div className="apple-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
          className="text-center mb-16"
        >
          <p className="apple-link mb-4 uppercase tracking-widest text-xs">Tempo livre</p>
          <h2 className="apple-heading">Além do código.</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-3xl mx-auto">
          {hobbies.map((hobby, idx) => (
            <motion.div
              key={hobby.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.25, 0.1, 0, 1] }}
              className="apple-card flex flex-col items-center justify-center py-8 text-center"
            >
              <hobby.icon size={28} className="mb-3 text-muted-foreground" />
              <span className="text-xs font-medium">{hobby.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
