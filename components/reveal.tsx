"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { motionDuration, motionEase, revealViewport } from "@/lib/motion";

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={revealViewport}
      transition={{ duration: reduced ? motionDuration.instant : motionDuration.reveal, delay: reduced ? 0 : delay, ease: motionEase.standard }}
    >
      {children}
    </motion.div>
  );
}
