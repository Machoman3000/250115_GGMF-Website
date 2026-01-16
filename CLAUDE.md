# GG Website - Claude Code Project Guide

> **Purpose:** This file is Claude's "memory" for this project. It points to all relevant documents and provides quick context.

## Quick Context

- **Project:** Personal website for GG
- **Aesthetic:** Minimal cyberpunk (black/white/cyan)
- **Tech:** Next.js 16, TypeScript, Tailwind CSS 4, Framer Motion
- **GitHub:** `Machoman3000/250115_GGMF-Website`
- **Hosting:** Vercel

## Key Documents

| Document | Purpose | Path |
|----------|---------|------|
| **Project Brief** | High-level overview & decisions | `Project Brief.md` |
| **Design Spec** | Full visual & UX specification | `docs/2026-01-15-gg-website-design.md` |
| **MVP Plan (Stage 1)** | Original build guide (complete) | `docs/plans/2026-01-15-gg-website-mvp.md` |
| **Phase 2 Plan** | Current implementation plan | `docs/plans/2026-01-15-gg-website-phase2.md` |
| **Performance Audit** | Vercel best practices audit | `docs/audits/2026-01-15-vercel-audit.md` |
| **Project Status** | Current state & blockers | `Project_Status.md` |
| **Changelog** | History of changes | `Changelog.md` |
| **Reference** | External docs & resources | `Reference.md` |

## Current Status

**Stage 1 (MVP):** ✅ COMPLETE + DEPLOYED
**Stage 2:** 🔜 NEXT (Performance + Content)
**Live URL:** https://250115ggmf-website.vercel.app

### What's Next (Phase 2)

See: `docs/plans/2026-01-15-gg-website-phase2.md`

1. **Performance fixes** (3 critical issues from audit)
2. **Code quality** (3 medium issues)
3. **Content** (social links, bio, projects - needs user input)
4. **Polish** (SEO, favicon, animations)

## Skills to Use

- `superpowers:executing-plans` - For task execution
- `frontend-design` - For UI components
- `superpowers:verification` - Before claiming done
- `workflows:compound` - After solving problems (compound engineering)

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # ESLint
npm test         # Tests (when configured)
```

## Code Style

- TypeScript strict mode
- Functional components
- Tailwind for styling
- Small, focused components
- Conventional commits

## Colors

```css
--bg: #000000        /* Black */
--text: #FFFFFF      /* White */
--accent: #00FFFF    /* Cyan */
```

## File Structure (Actual)

```
250115_GGMF-Website/
├── CLAUDE.md              ← You are here
├── Project Brief.md       ← Overview & decisions
├── Project_Status.md      ← Current state
├── Changelog.md           ← History
├── Reference.md           ← External resources
├── docs/
│   ├── 2026-01-15-gg-website-design.md
│   ├── audits/
│   │   └── 2026-01-15-vercel-audit.md  ← Performance audit
│   └── plans/
│       ├── 2026-01-15-gg-website-mvp.md     ← Stage 1 (complete)
│       └── 2026-01-15-gg-website-phase2.md  ← Stage 2 (current)
├── app/
│   ├── layout.tsx
│   ├── page.tsx           ← Homepage (terminal → dashboard)
│   ├── about/page.tsx
│   ├── blog/page.tsx
│   ├── projects/page.tsx
│   └── links/page.tsx
├── components/
│   ├── GGLogo.tsx
│   ├── SocialLinks.tsx
│   ├── PageTransition.tsx
│   ├── terminal/
│   │   ├── Terminal.tsx
│   │   └── TypeWriter.tsx
│   └── layout/
│       ├── Navigation.tsx
│       ├── MobileNav.tsx
│       └── Footer.tsx
├── public/
└── [config: package.json, tailwind.config.ts, etc.]
```

## When Starting a New Session

1. Read this file first
2. Check `Project_Status.md` for current state
3. Reference the Implementation Plan for next steps
4. Use appropriate skills for the task

---

*Last updated: 2026-01-15*
