"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/about", label: "ABOUT" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/blog", label: "BLOG" },
  { href: "/links", label: "LINKS" },
];

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-mono text-2xl font-bold tracking-tight">
          <motion.span
            className="text-white"
            whileHover={{ color: "#00FFFF" }}
            transition={{ duration: 0.2 }}
          >
            GG
          </motion.span>
        </Link>

        {/* Nav Links - Hidden on mobile */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <motion.span
                  className="font-mono text-sm text-white tracking-wider cursor-pointer"
                  whileHover={{ color: "#00FFFF" }}
                  transition={{ duration: 0.2 }}
                >
                  {link.label}
                </motion.span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
