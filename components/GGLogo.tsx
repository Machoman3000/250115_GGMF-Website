"use client";

import { motion } from "framer-motion";

// Hoisted to avoid re-creating on each render
const lineStyle = {
  background:
    "linear-gradient(90deg, transparent 0%, #00FFFF 50%, transparent 100%)",
} as const;

export function GGLogo() {
  return (
    <div className="flex flex-col items-center">
      {/* GG Lettermark */}
      <motion.h1
        className="font-mono text-7xl font-bold tracking-widest text-white md:text-9xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          textShadow: [
            "0 0 0px #00FFFF",
            "0 0 10px #00FFFF",
            "0 0 0px #00FFFF",
          ],
        }}
        transition={{
          opacity: { duration: 0.8 },
          scale: { duration: 0.8 },
          textShadow: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        GG
      </motion.h1>

      {/* Decorative horizontal line */}
      <motion.div
        className="mt-4 h-px w-full max-w-xs"
        style={lineStyle}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: "easeOut",
        }}
      />
    </div>
  );
}
