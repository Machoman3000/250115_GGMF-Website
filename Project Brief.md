# GG Personal Website

## Overview
- **Purpose:** Life page / digital homepage - central hub for social connections
- **Identity:** GG (symbol-based, no avatar)
- **Aesthetic:** Minimal cyberpunk - corporate/utilitarian, black & white
- **Tech Stack:** Next.js 14+ (App Router), TypeScript, Tailwind CSS, shadcn/ui
- **Hosting:** Vercel (auto-deploy from GitHub)
- **GitHub:** `Machoman3000/250115_GGMF-Website`
- **Status:** Brainstorming Complete → Ready for Design Spec

## Design Direction

### Visual Language
- **Colors:** Black background (#000), white text (#fff)
- **Font:** Bahnschrift (or Barlow/Space Grotesk web equivalent)
- **Monospace:** JetBrains Mono or Fira Code (terminal text)
- **Elements:**
  - `//////` border patterns
  - Barcode/system metadata aesthetic
  - Japanese + English mixed text
  - Geometric symbol (inverted triangle or custom)
  - Technical metadata text (RESOLUTION, FILETYPE style)

### Concept: "System Boot → Dashboard"
1. **Terminal Phase:** Black screen, typing animation, system UI appears
2. **Morph Phase:** Terminal dissolves, symbol appears, layout transforms
3. **Dashboard Phase:** Clean navigation, hover interactions, social CTAs

### Interactions
- Terminal intro with typewriter effect
- Scroll-triggered animations
- Hover states with system-UI feedback
- Touch-optimized for mobile (full experience)

## Site Structure

```
Homepage (/)        → Terminal intro → Hub with symbol + socials
├── /about          → Bio, background, interests
├── /projects       → Work showcase (2-3 for MVP)
├── /blog           → Thoughts/writing (MDX)
└── /links          → Curated resources
```

## Socials (Primary CTA)
- Twitter/X
- LinkedIn
- GitHub
- Instagram
- TikTok

## Stages

### Stage 1: MVP
- [ ] Homepage with terminal intro animation
- [ ] System boot → Dashboard transition
- [ ] All page routes (minimal/placeholder content)
- [ ] Social links prominent and functional
- [ ] Mobile responsive
- [ ] Deployed to Vercel

### Stage 2: Content & Polish
- [ ] Fill in About page content
- [ ] Add 2-3 projects
- [ ] Refine animations
- [ ] SEO optimization

### Stage 3: Blog & Expansion
- [ ] MDX blog setup
- [ ] First blog post
- [ ] Links page content

### Stage 4+: Enhancements
- [ ] Additional interactive features
- [ ] Performance optimization
- [ ] Custom domain

## Workflow Process

| Phase | Tool/Skill | Purpose |
|-------|------------|---------|
| 1. Brainstorm | `superpowers:brainstorming` | ✅ Complete |
| 2. Document | Design spec | Capture all decisions |
| 3. Plan | `superpowers:writing-plans` | Detailed implementation plan |
| 4. Setup | GitHub + structure | Foundation |
| 5. Build | `frontend-design` | Implement with TDD approach |
| 6. Verify | `superpowers:verification` | Confirm before claiming done |

## Testing Strategy
- Component tests: React Testing Library
- E2E tests: Playwright
- Visual verification: Manual
- Pre-completion: `superpowers:verification`

---

## Session Notes

### 2025-01-15
- Project folder created
- Initial scope: Next.js + portfolio/blog/contact

### 2026-01-15 (Brainstorming Session)
- Refined purpose: "Life page" central hub → social connections CTA
- Aesthetic: Minimal cyberpunk (black/white, industrial/utilitarian)
- Visual reference: Desktop wallpaper with barcode, Japanese text, geometric triangle
- Font: Bahnschrift
- Concept: "System Boot → Dashboard" with terminal intro
- Structure: Hybrid (homepage + separate pages)
- Identity: GG with geometric symbol (no avatar)
- Tech: Next.js + Tailwind + shadcn/ui
- Hosting: Vercel
- MVP: Full structure, minimal content
- Brainstorming complete → Ready for design spec
