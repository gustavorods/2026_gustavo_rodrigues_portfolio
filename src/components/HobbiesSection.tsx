import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gamepad2, Music, ChefHat, PawPrint, Footprints } from "lucide-react";
import SpotlightCard from "./ui/spotlight-card";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "./ui/tooltip";
import { useLanguage } from "@/i18n/LanguageContext";

const hobbyIcons = [Gamepad2, Music, ChefHat, PawPrint, Footprints];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const HobbiesSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hobbies = t.hobbies.items.map((hobby, i) => ({ ...hobby, icon: hobbyIcons[i] }));

  return (
    <section className="apple-section bg-secondary/20" ref={ref}>
      <div className="apple-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="apple-link mb-4 uppercase tracking-widest text-xs">{t.hobbies.label}</p>
          <h2 className="apple-heading">{t.hobbies.heading}</h2>
        </motion.div>

        <TooltipProvider delayDuration={150}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-3xl mx-auto"
          >
            {hobbies.map((hobby) => (
              <Tooltip key={hobby.label}>
                <TooltipTrigger asChild>
                  <motion.div
                    variants={itemVariants}
                    whileHover="hover"
                    className="flex h-full w-full"
                  >
                    <SpotlightCard className="flex flex-col items-center justify-center py-8 text-center h-full w-full !p-4 cursor-default select-none">
                      <motion.div
                        variants={{
                          hover: {
                            rotate: [0, -10, 10, -5, 5, 0],
                            scale: 1.15,
                            transition: { duration: 0.45, ease: "easeInOut" }
                          }
                        }}
                        className="mb-3 text-muted-foreground group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors duration-300"
                      >
                        <hobby.icon size={28} />
                      </motion.div>
                      <span className="text-xs font-semibold tracking-wide text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                        {hobby.label}
                      </span>
                    </SpotlightCard>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{hobby.description}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </motion.div>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default HobbiesSection;
