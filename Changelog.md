# GG Website - Changelog

All notable changes to this project will be documented in this file.

Format based on [Keep a Changelog](https://keepachangelog.com/).

---

## [Unreleased]

### Phase 2 Tasks (Prioritized)

See: `docs/plans/2026-01-15-gg-website-phase2.md`

**🔴 CRITICAL - Performance (Do First):**
- [ ] `bundle-dynamic-imports` - Lazy load Terminal component with next/dynamic
- [ ] `bundle-barrel-imports` - Replace barrel imports with direct imports
- [ ] `client-event-listeners` - Remove duplicate keydown listener in page.tsx

**🟡 MEDIUM - Code Quality:**
- [ ] `rendering-conditional-render` - Replace `&&` with ternary operators
- [ ] `rendering-hoist-jsx` - Hoist static style object in GGLogo.tsx
- [ ] `rerender-dependencies` - Use useRef for onComplete callback in TypeWriter

**📝 Content:**
- [ ] Fill in About page bio (real content)
- [ ] Add real project details (2-3 projects)
- [ ] Update social media URLs (currently placeholders)
- [ ] Confirm tagline or update

**✨ Polish:**
- [ ] Refine animation timings
- [ ] SEO optimization (meta tags, OpenGraph)
- [ ] Add favicon

---

## [0.1.1] - 2026-01-15

### Added
- Performance audit report (`docs/audits/2026-01-15-vercel-audit.md`)
- Phase 2 planning document (`docs/plans/2026-01-15-gg-website-phase2.md`)

### Audited
- Ran Vercel React Best Practices audit
- Identified 3 critical, 5 medium issues
- Documented all findings with fix recommendations

---

## [0.1.0] - 2026-01-15

### Added
- **Full MVP Implementation + Deployment**
- 🚀 **Live at:** https://250115ggmf-website.vercel.app
- Terminal intro with typewriter animation
- GG lettermark with cyan glow effect
- Homepage with system boot → dashboard transition
- All page routes:
  - `/about` - Bio placeholder
  - `/projects` - Project cards
  - `/blog` - Empty state
  - `/links` - Curated resources
- Components:
  - Terminal + TypeWriter
  - GGLogo
  - Navigation (desktop)
  - MobileNav (hamburger)
  - Footer
  - SocialLinks
  - PageTransition
- Mobile responsive design
- Framer Motion animations throughout

### Technical
- Next.js 16.1.2 (App Router)
- React 19.2.3
- Tailwind CSS 4
- Framer Motion 12.26.2
- TypeScript
- Deployed to Vercel (production)

---

## [0.0.1] - 2026-01-15

### Added
- Project Brief with design decisions
- Design Spec document (`docs/2026-01-15-gg-website-design.md`)
- Implementation Plan (`docs/plans/2026-01-15-gg-website-mvp.md`)
- Project documentation structure:
  - CLAUDE.md (project guide)
  - Project_Status.md (current state)
  - Changelog.md (this file)
  - Reference.md (external resources)

### Decided
- Aesthetic: Minimal cyberpunk (black/white/cyan)
- Identity: GG lettermark (no avatar)
- Structure: Hybrid (homepage + separate pages)
- Tech: Next.js, TypeScript, Tailwind, Framer Motion
- Hosting: Vercel

---

## Template

```markdown
## [X.Y.Z] - YYYY-MM-DD

### Added
- New features

### Changed
- Changes to existing functionality

### Fixed
- Bug fixes

### Removed
- Removed features

### Decided
- Design/architecture decisions made
```
