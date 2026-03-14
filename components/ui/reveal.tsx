"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 28,
  once = true
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once, margin: "-120px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, clipPath: "inset(12% 0 0 0)" }}
      animate={
        isInView
          ? { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }
          : { opacity: 0, y, clipPath: "inset(12% 0 0 0)" }
      }
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
