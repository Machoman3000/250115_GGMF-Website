# GG Website MVP Implementation Plan

> **For Claude:** REQUIRED SUB-SKILLS:
> - Use `superpowers:executing-plans` to implement this plan task-by-task
> - Use `frontend-design` skill for all UI components and styling work

**Goal:** Build a minimal cyberpunk personal website with terminal intro animation, GG lettermark, and social links as the primary CTA.

**Architecture:** Next.js 14 App Router with TypeScript. Static pages with client-side animations via Framer Motion. Tailwind CSS + shadcn/ui for styling. MDX for future blog posts.

**Tech Stack:** Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, Vercel

**Design Reference:** See `docs/2026-01-15-gg-website-design.md` for full visual spec.

---

## Phase 1: Project Setup (Sequential)

### Task 1.1: Initialize Git Repository

**Context:** We have an empty GitHub repo at `Machoman3000/250115_GGMF-Website`. We'll initialize locally and push.

**Step 1: Navigate to project directory**

```bash
cd "/Users/gg/Desktop/Obsidian_Vault/AI Obsidian/1. Projects/250115_GGMF-Website"
```

Note: The docs folder already exists. We'll initialize Next.js here alongside the docs.

**Step 2: Initialize git**

```bash
git init
git remote add origin https://github.com/Machoman3000/250115_GGMF-Website.git
```

**Step 3: Create .gitignore**

Create: `.gitignore`

```gitignore
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

**Step 4: Initial commit**

```bash
git add .gitignore
git commit -m "chore: initial commit with gitignore"
```

---

### Task 1.2: Create Next.js Project

**Step 1: Initialize Next.js with TypeScript and Tailwind**

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --use-npm
```

When prompted:
- Would you like to use TypeScript? **Yes**
- Would you like to use ESLint? **Yes**
- Would you like to use Tailwind CSS? **Yes**
- Would you like to use `src/` directory? **No**
- Would you like to use App Router? **Yes**
- Would you like to customize import alias? **Yes** → `@/*`

**Step 2: Verify installation**

```bash
npm run dev
```

Expected: Server starts at http://localhost:3000

**Step 3: Commit**

```bash
git add .
git commit -m "chore: initialize Next.js 14 with TypeScript and Tailwind"
```

---

### Task 1.3: Install Dependencies

**Step 1: Install shadcn/ui**

```bash
npx shadcn@latest init
```

When prompted:
- Style: **Default**
- Base color: **Neutral**
- CSS variables: **Yes**

**Step 2: Install Framer Motion**

```bash
npm install framer-motion
```

**Step 3: Install fonts (optional - if using Google Fonts fallback)**

```bash
npm install @fontsource/barlow @fontsource/jetbrains-mono
```

**Step 4: Commit**

```bash
git add .
git commit -m "chore: add shadcn/ui, framer-motion, fonts"
```

---

### Task 1.4: Setup CLAUDE.md

**Context:** Project-specific instructions for Claude Code.

Create: `CLAUDE.md`

```markdown
# GG Website - Claude Code Instructions

## Project Overview
Personal website for GG with minimal cyberpunk aesthetic. Terminal intro → Dashboard layout.

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS + shadcn/ui
- Framer Motion (animations)

## Key Commands
- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm test` - Run tests (when configured)

## Design Reference
See `docs/2026-01-15-gg-website-design.md` for full visual specification.

## Code Style
- Use TypeScript strict mode
- Prefer functional components
- Use Tailwind for styling (avoid inline styles)
- Keep components small and focused

## Colors
- Background: #000000 (black)
- Text: #FFFFFF (white)
- Accent: #00FFFF (cyan)

## Git Workflow
- Conventional commits (feat:, fix:, chore:, docs:)
- Commit after each completed task
- Push periodically to remote
```

**Step 2: Commit**

```bash
git add CLAUDE.md
git commit -m "docs: add CLAUDE.md project instructions"
```

---

### Task 1.5: Setup Base Styles

**Step 1: Update Tailwind config with custom colors**

Modify: `tailwind.config.ts`

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#FFFFFF",
        accent: {
          cyan: "#00FFFF",
        },
      },
      fontFamily: {
        sans: ["Barlow", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

**Step 2: Update global styles**

Modify: `app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 0%;
    --foreground: 0 0% 100%;
    --accent-cyan: 180 100% 50%;
  }

  body {
    @apply bg-background text-foreground;
    font-family: "Barlow", system-ui, sans-serif;
  }

  /* Custom selection color */
  ::selection {
    @apply bg-accent-cyan text-background;
  }
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  @apply bg-background;
}

::-webkit-scrollbar-thumb {
  @apply bg-foreground/20 rounded;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-foreground/40;
}
```

**Step 3: Verify styles**

```bash
npm run dev
```

Expected: Black background, white text when viewing localhost:3000

**Step 4: Commit**

```bash
git add tailwind.config.ts app/globals.css
git commit -m "style: configure base colors and typography"
```

---

### Task 1.6: Push to GitHub

**Step 1: Push all commits**

```bash
git push -u origin main
```

**Step 2: Verify on GitHub**

Visit: https://github.com/Machoman3000/250115_GGMF-Website

Expected: All files visible, commits showing

---

## Phase 2: Core Layout (Sequential)

### Task 2.1: Create Layout Structure

**Step 1: Create components directory structure**

```bash
mkdir -p components/layout components/ui components/terminal
```

**Step 2: Create root layout**

Modify: `app/layout.tsx`

```typescript
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GG",
  description: "Digital homepage of GG",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
```

**Step 3: Commit**

```bash
git add .
git commit -m "feat: setup root layout structure"
```

---

### Task 2.2: Create Navigation Component

**Step 1: Create Navigation component**

Create: `components/layout/Navigation.tsx`

```typescript
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { href: "/about", label: "ABOUT" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/blog", label: "BLOG" },
  { href: "/links", label: "LINKS" },
];

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-mono text-xl font-bold tracking-wider">
            <motion.span
              whileHover={{ color: "#00FFFF" }}
              transition={{ duration: 0.2 }}
            >
              GG
            </motion.span>
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative font-mono text-sm tracking-wider text-foreground/70 transition-colors hover:text-foreground"
              >
                <motion.span
                  whileHover={{ color: "#00FFFF" }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                </motion.span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
```

**Step 2: Create index export**

Create: `components/layout/index.ts`

```typescript
export { Navigation } from "./Navigation";
```

**Step 3: Commit**

```bash
git add components/layout/
git commit -m "feat: add Navigation component with hover effects"
```

---

### Task 2.3: Create Footer Component

**Step 1: Create Footer component**

Create: `components/layout/Footer.tsx`

```typescript
export function Footer() {
  return (
    <footer className="border-t border-foreground/10 py-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-mono text-sm text-foreground/50">
            ////// GG.SYSTEM v1.0 //////
          </p>
          <p className="font-mono text-xs text-foreground/30">
            © {new Date().getFullYear()} GG. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

**Step 2: Update index export**

Modify: `components/layout/index.ts`

```typescript
export { Navigation } from "./Navigation";
export { Footer } from "./Footer";
```

**Step 3: Commit**

```bash
git add components/layout/
git commit -m "feat: add Footer component"
```

---

### Task 2.4: Create Social Links Component

**Step 1: Create SocialLinks component**

Create: `components/SocialLinks.tsx`

```typescript
"use client";

import { motion } from "framer-motion";

const socials = [
  {
    name: "Twitter/X",
    href: "https://twitter.com/YOUR_HANDLE",
    icon: "X",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/YOUR_HANDLE",
    icon: "LI",
  },
  {
    name: "GitHub",
    href: "https://github.com/YOUR_HANDLE",
    icon: "GH",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/YOUR_HANDLE",
    icon: "IG",
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@YOUR_HANDLE",
    icon: "TT",
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-4">
      {socials.map((social) => (
        <motion.a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center border border-foreground/20 font-mono text-sm transition-colors hover:border-accent-cyan hover:text-accent-cyan"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title={social.name}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
}
```

**Step 2: Commit**

```bash
git add components/SocialLinks.tsx
git commit -m "feat: add SocialLinks component with hover animations"
```

---

## Phase 3: Terminal Component (Sequential)

### Task 3.1: Create Typewriter Effect

**Step 1: Create TypeWriter component**

Create: `components/terminal/TypeWriter.tsx`

```typescript
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypeWriterProps {
  text: string;
  delay?: number;
  onComplete?: () => void;
}

export function TypeWriter({ text, delay = 50, onComplete }: TypeWriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, delay, text, onComplete]);

  return (
    <span className="font-mono">
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="ml-1 inline-block h-5 w-2 bg-foreground"
      />
    </span>
  );
}
```

**Step 2: Commit**

```bash
git add components/terminal/TypeWriter.tsx
git commit -m "feat: add TypeWriter component with cursor animation"
```

---

### Task 3.2: Create Terminal Intro Component

**Step 1: Create Terminal component**

Create: `components/terminal/Terminal.tsx`

```typescript
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeWriter } from "./TypeWriter";

interface TerminalProps {
  onComplete: () => void;
}

const bootSequence = [
  "> INITIALIZING GG.SYSTEM...",
  "> LOADING MODULES...",
  "> ESTABLISHING CONNECTION...",
  "> ACCESS GRANTED",
];

export function Terminal({ onComplete }: TerminalProps) {
  const [currentLine, setCurrentLine] = useState(0);
  const [showEnter, setShowEnter] = useState(false);

  const handleLineComplete = () => {
    if (currentLine < bootSequence.length - 1) {
      setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
      }, 300);
    } else {
      setTimeout(() => {
        setShowEnter(true);
      }, 500);
    }
  };

  // Auto-skip after 5 seconds if user doesn't interact
  useEffect(() => {
    const timeout = setTimeout(() => {
      onComplete();
    }, 8000);

    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background p-8"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Terminal content */}
      <div className="w-full max-w-xl space-y-2 font-mono text-sm sm:text-base">
        {bootSequence.slice(0, currentLine + 1).map((line, index) => (
          <div key={index} className="text-foreground/80">
            {index < currentLine ? (
              <span>{line}</span>
            ) : (
              <TypeWriter
                text={line}
                delay={30}
                onComplete={handleLineComplete}
              />
            )}
          </div>
        ))}
      </div>

      {/* Enter prompt */}
      <AnimatePresence>
        {showEnter && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 border border-foreground/30 px-8 py-3 font-mono text-sm tracking-wider transition-colors hover:border-accent-cyan hover:text-accent-cyan"
            onClick={onComplete}
          >
            [ ENTER ]
          </motion.button>
        )}
      </AnimatePresence>

      {/* Skip hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 font-mono text-xs text-foreground/30"
      >
        Press any key or click to skip
      </motion.p>
    </motion.div>
  );
}
```

**Step 2: Create index export**

Create: `components/terminal/index.ts`

```typescript
export { Terminal } from "./Terminal";
export { TypeWriter } from "./TypeWriter";
```

**Step 3: Commit**

```bash
git add components/terminal/
git commit -m "feat: add Terminal intro component with boot sequence"
```

---

## Phase 4: Homepage Integration (Sequential)

### Task 4.1: Create GG Lettermark Component

**Step 1: Create GGLogo component**

Create: `components/GGLogo.tsx`

```typescript
"use client";

import { motion } from "framer-motion";

export function GGLogo() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1
        className="font-mono text-7xl font-bold tracking-widest sm:text-9xl"
        animate={{
          textShadow: [
            "0 0 0px #00FFFF",
            "0 0 10px #00FFFF",
            "0 0 0px #00FFFF",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        GG
      </motion.h1>

      {/* Decorative elements */}
      <motion.div
        className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
    </motion.div>
  );
}
```

**Step 2: Commit**

```bash
git add components/GGLogo.tsx
git commit -m "feat: add GGLogo component with glow animation"
```

---

### Task 4.2: Create Homepage

**Step 1: Create homepage with terminal intro**

Modify: `app/page.tsx`

```typescript
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
                className="font-mono text-sm text-foreground/60"
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
              className="absolute bottom-8 font-mono text-xs text-foreground/20"
            >
              ////// GG.SYSTEM v1.0 //////
            </motion.div>
          </main>
        </motion.div>
      )}
    </>
  );
}
```

**Step 2: Test the homepage**

```bash
npm run dev
```

Expected:
1. Terminal boot sequence plays
2. After completion, GG logo appears with social links
3. Refresh page - terminal should skip (localStorage)

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: implement homepage with terminal intro and dashboard"
```

---

### Task 4.3: Push Progress

**Step 1: Push to GitHub**

```bash
git push origin main
```

---

## Phase 5: Page Routes (Parallel-able)

> **Note:** Tasks 5.1-5.4 can be done in parallel after Phase 4 is complete.

### Task 5.1: Create About Page

**Step 1: Create about page**

Create: `app/about/page.tsx`

```typescript
import { Navigation, Footer } from "@/components/layout";

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen px-4 pt-24 pb-16">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-8 font-mono text-3xl font-bold tracking-wider">
            ABOUT
          </h1>

          <div className="space-y-6 font-mono text-foreground/80">
            <p>
              [ Bio placeholder - Add your story here ]
            </p>

            <div className="border-l-2 border-accent-cyan pl-4">
              <h2 className="mb-2 text-sm text-foreground/50">CURRENTLY</h2>
              <p>Building things, learning stuff.</p>
            </div>

            <div className="border-l-2 border-foreground/20 pl-4">
              <h2 className="mb-2 text-sm text-foreground/50">INTERESTS</h2>
              <ul className="list-inside list-disc space-y-1 text-sm">
                <li>Cyberpunk aesthetics</li>
                <li>Technology</li>
                <li>[ Add more ]</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
```

**Step 2: Commit**

```bash
git add app/about/
git commit -m "feat: add About page with placeholder content"
```

---

### Task 5.2: Create Projects Page

**Step 1: Create projects page**

Create: `app/projects/page.tsx`

```typescript
import { Navigation, Footer } from "@/components/layout";

const projects = [
  {
    title: "Project One",
    description: "Description of your first project.",
    tech: ["React", "TypeScript"],
    link: "#",
  },
  {
    title: "Project Two",
    description: "Description of your second project.",
    tech: ["Next.js", "Tailwind"],
    link: "#",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen px-4 pt-24 pb-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 font-mono text-3xl font-bold tracking-wider">
            PROJECTS
          </h1>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                className="group border border-foreground/20 p-6 transition-colors hover:border-accent-cyan"
              >
                <h2 className="mb-2 font-mono text-lg font-bold group-hover:text-accent-cyan">
                  {project.title}
                </h2>
                <p className="mb-4 font-mono text-sm text-foreground/60">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="border border-foreground/10 px-2 py-1 font-mono text-xs text-foreground/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
```

**Step 2: Commit**

```bash
git add app/projects/
git commit -m "feat: add Projects page with project cards"
```

---

### Task 5.3: Create Blog Page

**Step 1: Create blog index page**

Create: `app/blog/page.tsx`

```typescript
import { Navigation, Footer } from "@/components/layout";

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen px-4 pt-24 pb-16">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-8 font-mono text-3xl font-bold tracking-wider">
            BLOG
          </h1>

          <div className="border border-dashed border-foreground/20 p-8 text-center">
            <p className="font-mono text-foreground/40">
              [ No posts yet ]
            </p>
            <p className="mt-2 font-mono text-xs text-foreground/20">
              Coming soon...
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
```

**Step 2: Commit**

```bash
git add app/blog/
git commit -m "feat: add Blog page with empty state"
```

---

### Task 5.4: Create Links Page

**Step 1: Create links page**

Create: `app/links/page.tsx`

```typescript
import { Navigation, Footer } from "@/components/layout";

const links = [
  {
    category: "RESOURCES",
    items: [
      { title: "Link One", href: "#", description: "Description" },
      { title: "Link Two", href: "#", description: "Description" },
    ],
  },
  {
    category: "TOOLS",
    items: [
      { title: "Tool One", href: "#", description: "Description" },
    ],
  },
];

export default function LinksPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen px-4 pt-24 pb-16">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-8 font-mono text-3xl font-bold tracking-wider">
            LINKS
          </h1>

          <div className="space-y-8">
            {links.map((section) => (
              <div key={section.category}>
                <h2 className="mb-4 font-mono text-sm text-foreground/50">
                  {section.category}
                </h2>
                <div className="space-y-2">
                  {section.items.map((link) => (
                    <a
                      key={link.title}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block border border-foreground/10 p-4 transition-colors hover:border-accent-cyan"
                    >
                      <span className="font-mono font-bold hover:text-accent-cyan">
                        {link.title}
                      </span>
                      <span className="ml-2 font-mono text-xs text-foreground/40">
                        → {link.description}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
```

**Step 2: Commit**

```bash
git add app/links/
git commit -m "feat: add Links page with categorized resources"
```

---

### Task 5.5: Push All Pages

**Step 1: Push to GitHub**

```bash
git push origin main
```

---

## Phase 6: Polish & Deploy (Sequential)

### Task 6.1: Add Page Transitions

**Step 1: Create PageTransition wrapper**

Create: `components/PageTransition.tsx`

```typescript
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
```

**Step 2: Commit**

```bash
git add components/PageTransition.tsx
git commit -m "feat: add PageTransition component for smooth navigation"
```

---

### Task 6.2: Mobile Navigation

**Step 1: Create MobileNav component**

Create: `components/layout/MobileNav.tsx`

```typescript
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/about", label: "ABOUT" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/blog", label: "BLOG" },
  { href: "/links", label: "LINKS" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sm:hidden">
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
        aria-label="Toggle menu"
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          className="h-0.5 w-6 bg-foreground"
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="h-0.5 w-6 bg-foreground"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          className="h-0.5 w-6 bg-foreground"
        />
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute left-0 right-0 top-16 border-b border-foreground/10 bg-background"
          >
            <nav className="flex flex-col p-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="py-3 font-mono text-sm tracking-wider text-foreground/70 transition-colors hover:text-accent-cyan"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
```

**Step 2: Update Navigation to include mobile nav**

Modify: `components/layout/Navigation.tsx` - add MobileNav import and render it for small screens.

**Step 3: Commit**

```bash
git add components/layout/
git commit -m "feat: add MobileNav component with hamburger menu"
```

---

### Task 6.3: Final Build Check

**Step 1: Run production build**

```bash
npm run build
```

Expected: Build succeeds with no errors

**Step 2: Test production build locally**

```bash
npm run start
```

Expected: Site works correctly at localhost:3000

**Step 3: Commit any fixes**

```bash
git add .
git commit -m "fix: resolve any build issues"
```

---

### Task 6.4: Deploy to Vercel

**Step 1: Install Vercel CLI (if not installed)**

```bash
npm i -g vercel
```

**Step 2: Deploy**

```bash
vercel
```

Follow prompts:
- Link to existing project? **No**
- Project name? **gg-website**
- Directory? **./**

**Step 3: Get production URL**

```bash
vercel --prod
```

Expected: Deployment URL like `gg-website.vercel.app`

**Step 4: Commit deployment config**

```bash
git add .
git commit -m "chore: add Vercel deployment configuration"
git push origin main
```

---

## Phase 7: Verification

### Task 7.1: Manual Testing Checklist

**Desktop:**
- [ ] Terminal intro plays on first visit
- [ ] Terminal skips on subsequent visits
- [ ] GG logo animates with glow effect
- [ ] All navigation links work
- [ ] Social links open in new tabs
- [ ] Hover effects work on all interactive elements
- [ ] All pages load correctly

**Mobile:**
- [ ] Hamburger menu works
- [ ] Terminal intro works on mobile
- [ ] Touch targets are accessible (44px+)
- [ ] Layout is responsive

**Performance:**
- [ ] Lighthouse score 90+
- [ ] No console errors
- [ ] Smooth animations (60fps)

---

## Summary

**Total Tasks:** 24
**Estimated Time:** 3-4 hours (for experienced developer)

**Commits Made:**
1. Initial commit with gitignore
2. Initialize Next.js
3. Add dependencies
4. Add CLAUDE.md
5. Configure base styles
6. Setup root layout
7. Add Navigation
8. Add Footer
9. Add SocialLinks
10. Add TypeWriter
11. Add Terminal intro
12. Add GGLogo
13. Implement homepage
14. Add About page
15. Add Projects page
16. Add Blog page
17. Add Links page
18. Add PageTransition
19. Add MobileNav
20. Build fixes
21. Vercel deployment

**Files Created:**
- 15+ component files
- 5 page routes
- Configuration files

---

*Plan complete. Ready for execution.*
