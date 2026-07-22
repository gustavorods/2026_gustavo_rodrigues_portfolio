import { motion, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";

interface MagneticProps {
  children: React.ReactElement;
  range?: number;
  strength?: number;
}

export const Magnetic = ({ children, range = 60, strength = 0.35 }: MagneticProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || prefersReducedMotion) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    // Check if the cursor is within the magnetic active range
    const distance = Math.hypot(distanceX, distanceY);
    if (distance < range) {
      // Pull element toward cursor
      setPosition({ x: distanceX * strength, y: distanceY * strength });
    } else {
      // Snap back
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
