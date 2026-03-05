import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

const TimelineSection = ({ id, label, heading, data }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id={id} className="apple-section" ref={ref}>
      <div className="apple-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
          className="text-center mb-16"
        >
          <p className="apple-link mb-4 uppercase tracking-widest text-xs">{label}</p>
          <h2 className="apple-heading">{heading}</h2>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {data.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.2, ease: [0.25, 0.1, 0, 1] }}
                className="relative pl-12 md:pl-16"
              >
                {/* Dot */}
                <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-foreground ring-4 ring-background" />

                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                  {item.period}
                </p>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{item.subtitle}</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {item.items.map((t, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-apple-blue mt-0.5">—</span> {t}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
