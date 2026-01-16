"use client";

import { motion } from "framer-motion";

const socialLinks = [
  { abbr: "X", href: "https://twitter.com/YOUR_HANDLE", label: "Twitter/X" },
  { abbr: "LI", href: "https://linkedin.com/in/YOUR_HANDLE", label: "LinkedIn" },
  { abbr: "GH", href: "https://github.com/YOUR_HANDLE", label: "GitHub" },
  { abbr: "IG", href: "https://instagram.com/YOUR_HANDLE", label: "Instagram" },
  { abbr: "TT", href: "https://tiktok.com/@YOUR_HANDLE", label: "TikTok" },
];

export function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-4">
      {socialLinks.map((link) => (
        <motion.a
          key={link.abbr}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="flex h-12 w-12 items-center justify-center border border-white/20 font-mono text-sm font-medium text-white transition-colors hover:border-cyan-400 hover:text-cyan-400"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {link.abbr}
        </motion.a>
      ))}
    </div>
  );
}
