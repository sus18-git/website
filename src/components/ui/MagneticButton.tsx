"use client";

import { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function MagneticButton({
  children,
  primary = false,
  className = "",
}: {
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useSpring(0, { stiffness: 400, damping: 25 });
  const y = useSpring(0, { stiffness: 400, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const xPos = (clientX - (left + width / 2)) * 0.3;
    const yPos = (clientY - (top + height / 2)) * 0.3;
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      whileTap={{ scale: 0.95 }}
      className={`relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide uppercase transition-colors duration-300 overflow-hidden rounded-full ${primary
          ? "bg-[#ff0000]/10 text-[#ff0000] border border-[#ff0000]/50 drop-shadow-[0_0_12px_rgba(255,0,0,0.4)] hover:bg-[#ff0000]/20 hover:border-[#ff0000]"
          : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
        } ${className}`}
    >
      <span className="relative z-10 pointer-events-none">{children}</span>
      {primary && (
        <motion.div
          className="absolute inset-0 bg-[#ff0000]/20 blur-2xl pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  );
}
