"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { GGLogo } from "@/components/GGLogo";
import { SocialLinks } from "@/components/SocialLinks";

// Lazy load Terminal - only needed on first visit
const Terminal = dynamic(
  () => import("@/components/terminal/Terminal").then((mod) => mod.Terminal),
  { ssr: false }
);

// Check localStorage for previous visit (client-side only)
function getInitialTerminalState(): boolean {
  if (typeof window === "undefined") return true;
  return !localStorage.getItem("gg-visited");
}

export default function Home() {
  const [showTerminal, setShowTerminal] = useState(getInitialTerminalState);

  const handleTerminalComplete = () => {
    localStorage.setItem("gg-visited", "true");
    setShowTerminal(false);
  };

  return (
    <>
      <AnimatePresence>
        {showTerminal ? <Terminal onComplete={handleTerminalComplete} /> : null}
      </AnimatePresence>

      {!showTerminal ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navigation />

          <main className="flex min-h-screen flex-col items-center justify-center px-4 pt-16">
            {/* Main content */}
            <div className="flex flex-col items-center gap-8">
              <GGLogo />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-mono text-sm text-white/60"
              >
                Building the future, one commit at a time.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <SocialLinks />
              </motion.div>
            </div>

            {/* System UI decoration */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-8 font-mono text-xs text-white/20"
            >
              {"////// GG.SYSTEM v1.0 //////"}
            </motion.div>
          </main>
        </motion.div>
      ) : null}
    </>
  );
}
