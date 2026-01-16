"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeWriter } from "./TypeWriter";

interface TerminalProps {
  onComplete: () => void;
}

const BOOT_LINES = [
  "> INITIALIZING GG.SYSTEM...",
  "> LOADING MODULES...",
  "> ESTABLISHING CONNECTION...",
  "> ACCESS GRANTED",
];

const LINE_DELAY = 200; // ms between lines
const AUTO_SKIP_DELAY = 6000; // 6 seconds
const HINT_DELAY = 1500; // 1.5 seconds before hint appears

export function Terminal({ onComplete }: TerminalProps) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [completedLines, setCompletedLines] = useState<string[]>([]);
  const [showEnterButton, setShowEnterButton] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleExit = useCallback(() => {
    if (isExiting) return;
    setIsExiting(true);
    // Wait for fade out animation before calling onComplete
    setTimeout(onComplete, 500);
  }, [isExiting, onComplete]);

  // Handle line completion
  const handleLineComplete = useCallback(() => {
    const justCompletedLine = BOOT_LINES[currentLineIndex];

    // Add to completed lines
    setCompletedLines((prev) => [...prev, justCompletedLine]);

    // Check if all lines are done
    if (currentLineIndex >= BOOT_LINES.length - 1) {
      // All lines complete, show enter button
      setTimeout(() => {
        setShowEnterButton(true);
      }, LINE_DELAY);
    } else {
      // Move to next line after delay
      setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
      }, LINE_DELAY);
    }
  }, [currentLineIndex]);

  // Auto-skip timer
  useEffect(() => {
    const timer = setTimeout(handleExit, AUTO_SKIP_DELAY);
    return () => clearTimeout(timer);
  }, [handleExit]);

  // Hint timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(true);
    }, HINT_DELAY);
    return () => clearTimeout(timer);
  }, []);

  // Skip on any key press
  useEffect(() => {
    const handleKeyDown = () => handleExit();
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleExit]);

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={handleExit}
        >
          {/* Terminal content */}
          <div className="flex flex-col items-start gap-2 px-8">
            {/* Completed lines (static) */}
            {completedLines.map((line, index) => (
              <p key={index} className="font-mono text-lg text-white md:text-xl">
                {line}
              </p>
            ))}

            {/* Current line being typed */}
            {currentLineIndex < BOOT_LINES.length &&
            !completedLines.includes(BOOT_LINES[currentLineIndex]) ? (
              <p className="font-mono text-lg text-white md:text-xl">
                <TypeWriter
                  text={BOOT_LINES[currentLineIndex]}
                  delay={30}
                  onComplete={handleLineComplete}
                />
              </p>
            ) : null}

            {/* Enter button */}
            <AnimatePresence>
              {showEnterButton ? (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={handleExit}
                  className="mt-6 border border-white/40 px-6 py-2 font-mono text-lg text-white transition-colors hover:border-accent-cyan hover:text-accent-cyan md:text-xl"
                >
                  [ ENTER ]
                </motion.button>
              ) : null}
            </AnimatePresence>
          </div>

          {/* Skip hint */}
          <AnimatePresence>
            {showHint ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-8 font-mono text-sm text-white"
              >
                Press any key or click to skip
              </motion.p>
            ) : null}
          </AnimatePresence>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
