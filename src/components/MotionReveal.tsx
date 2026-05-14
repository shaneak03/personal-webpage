"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const motionEase = [0.22, 1, 0.36, 1] as const;

interface MotionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export default function MotionReveal({
  children,
  className,
  delay = 0,
  y = 28,
}: MotionRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{
        duration: 0.7,
        delay,
        ease: motionEase,
      }}
    >
      {children}
    </motion.div>
  );
}
