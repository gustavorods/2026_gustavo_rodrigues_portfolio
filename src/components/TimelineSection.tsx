import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { renderRich } from "@/lib/richText";

interface TimelineItem {
  title: string;
  subtitle: string;
  period: string;
  items: string[];
}

interface Props {
  id: string;
  label: string;
  heading: string;
  data: TimelineItem[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

const TimelineSection = ({ id, label, heading, data }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id={id} className="apple-section" ref={ref}>
      <div className="apple-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="apple-link mb-4 uppercase tracking-widest text-xs">{label}</p>
          <h2 className="apple-heading bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground to-foreground/85 font-bold">
            {heading}
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Animated Vertical line drawing downwards (Centered on desktop) */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500 via-border to-border/20 origin-top md:-translate-x-1/2"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="space-y-12"
          >
            {data.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row items-stretch md:justify-between w-full min-h-[120px] group ${
                    isEven ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Sprung Timeline Node Dot (Centered on desktop) */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: idx * 0.15 + 0.25, type: "spring", stiffness: 250, damping: 14 }}
                    className="absolute left-2.5 md:left-1/2 top-1.5 md:-translate-x-1/2 w-3.5 h-3.5 rounded-full bg-sky-500 ring-4 ring-background z-10 transition-transform duration-300 group-hover:scale-125 group-hover:bg-blue-600"
                  />

                  {/* Left Column (Even Content / Odd Empty Spacer) */}
                  <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${
                    isEven ? "md:text-right md:pr-8 text-left" : "hidden md:block"
                  }`}>
                    {isEven && (
                      <div>
                        <span className="text-xs font-semibold text-sky-500 dark:text-sky-400 uppercase tracking-wider block mb-1.5">
                          {item.period}
                        </span>
                        <h3 className="text-lg font-bold mb-1 transition-colors duration-300 group-hover:text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-sm font-medium text-muted-foreground mb-4">
                          {item.subtitle}
                        </p>
                        <ul className="text-sm text-muted-foreground/90 space-y-2 inline-block text-left w-full">
                          {item.items.map((text, i) => (
                            <li key={i} className={`flex items-start gap-2.5 ${isEven ? "md:flex-row-reverse md:text-right" : ""}`}>
                              <span className="text-sky-500/50 font-bold mt-0.5">—</span>
                              <span>{renderRich(text)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Right Column (Odd Content / Even Empty Spacer) */}
                  <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${
                    !isEven ? "md:text-left md:pl-8 text-left" : "hidden md:block"
                  }`}>
                    {!isEven && (
                      <div>
                        <span className="text-xs font-semibold text-sky-500 dark:text-sky-400 uppercase tracking-wider block mb-1.5">
                          {item.period}
                        </span>
                        <h3 className="text-lg font-bold mb-1 transition-colors duration-300 group-hover:text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-sm font-medium text-muted-foreground mb-4">
                          {item.subtitle}
                        </p>
                        <ul className="text-sm text-muted-foreground/90 space-y-2 text-left w-full">
                          {item.items.map((text, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <span className="text-sky-500/50 font-bold mt-0.5">—</span>
                              <span>{renderRich(text)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
