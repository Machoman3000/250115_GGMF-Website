"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Terminal } from "@/components/terminal";
import { Navigation } from "@/components/layout";
import { GGLogo } from "@/components/GGLogo";
import { SocialLinks } from "@/components/SocialLinks";

export default function Home() {
  const [showTerminal, setShowTerminal] = useState(true);
  const [hasVisited, setHasVisited] = useState(false);

  // Check if user has visited before
  useEffect(() => {
    const visited = localStorage.getItem("gg-visited");
    if (visited) {
      setShowTerminal(false);
      setHasVisited(true);
    }
  }, []);

  const handleTerminalComplete = () => {
    localStorage.setItem("gg-visited", "true");
    setShowTerminal(false);
    setHasVisited(true);
  };

  // Skip on any key press
  useEffect(() => {
    const handleKeyDown = () => {
      if (showTerminal) {
        handleTerminalComplete();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showTerminal]);

  return (
    <>
      <AnimatePresence>
        {showTerminal && <Terminal onComplete={handleTerminalComplete} />}
      </AnimatePresence>

      {!showTerminal && (
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
              ////// GG.SYSTEM v1.0 //////
            </motion.div>
          </main>
        </motion.div>
      )}
    </>
  );
}
