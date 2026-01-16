# GG Website - Changelog

All notable changes to this project will be documented in this file.

Format based on [Keep a Changelog](https://keepachangelog.com/).

---

## [Unreleased]

### Planned (Stage 2)
- Fill in About page content
- Add real project details
- Refine animations
- SEO optimization

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
