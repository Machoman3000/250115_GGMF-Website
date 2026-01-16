"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface TypeWriterProps {
  text: string;
  delay?: number;
  onComplete?: () => void;
}

export function TypeWriter({ text, delay = 50, onComplete }: TypeWriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  // Store callback in ref to avoid dependency issues
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    // Reset when text changes
    setDisplayedText("");
    setIsComplete(false);

    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsComplete(true);
        onCompleteRef.current?.();
      }
    }, delay);

    return () => clearInterval(interval);
  }, [text, delay]);

  return (
    <span className="inline-flex items-center font-mono">
      <span>{displayedText}</span>
      <motion.span
        className="ml-0.5 inline-block h-[1em] w-[2px] bg-white"
        animate={{ opacity: isComplete ? [1, 0] : 1 }}
        transition={{
          duration: 0.5,
          repeat: isComplete ? Infinity : 0,
          repeatType: "reverse",
        }}
      />
    </span>
  );
}
