import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const SpotlightCard = ({ children, className = "", onClick }: SpotlightCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={`group relative rounded-2xl border border-border/80 bg-card p-6 md:p-8 overflow-hidden transition-all duration-500 hover:border-sky-500/30 hover:shadow-xl hover:-translate-y-1 hover:shadow-sky-500/5 ${className}`}
    >
      {/* Dynamic Background Spotlight Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.08),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Light border reflection glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          border: "1px solid transparent",
          backgroundImage: useMotionTemplate`
            radial-gradient(
              150px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.35),
              transparent 80%
            )
          `,
          WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "destination-out",
          maskComposite: "exclude",
        }}
      />

      <div className="relative z-10 flex flex-col h-full">{children}</div>
    </div>
  );
};

export default SpotlightCard;
