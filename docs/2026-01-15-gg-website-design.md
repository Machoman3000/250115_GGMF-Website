# GG Personal Website - Design Specification

**Date:** 2026-01-15
**Status:** Approved (Brainstorming Complete)
**Version:** 1.0

---

## 1. Project Overview

### Purpose
A personal "life page" serving as a digital homepage and central hub for GG's online presence. The primary call-to-action is driving social connections.

### Identity
- **Name:** GG
- **Visual Mark:** Geometric symbol (inverted triangle or custom design)
- **No avatar** - identity is abstract/mysterious

### Target Audience
Anyone discovering GG online who wants to learn more and connect.

---

## 2. Aesthetic & Visual Language

### Core Aesthetic: "Minimal Cyberpunk"
Not neon-heavy cyberpunk, but corporate/utilitarian cyberpunk - like accessing a near-future personal system.

### Colors
```css
--bg-primary: #000000;      /* Pure black */
--text-primary: #FFFFFF;    /* Pure white */
--accent-cyan: #00FFFF;     /* Cyan - interactive elements, highlights */
```

### Typography
| Role | Font | Fallback |
|------|------|----------|
| Primary | Bahnschrift | Barlow, Space Grotesk |
| Monospace | JetBrains Mono | Fira Code |
| Japanese | System default | - |

### Visual Elements
From the reference image:
- `//////` slash border patterns
- Barcode graphics with alphanumeric codes
- Japanese katakana mixed with English (デスクトップ style)
- Technical metadata labels (RESOLUTION:, FILETYPE:)
- Geometric shapes (inverted triangle as personal mark)
- High contrast, minimal color palette

### Tone
Clean, mysterious, technical - accessing a personal system rather than visiting a traditional website.

---

## 3. User Experience Concept

### "System Boot → Dashboard"

The experience unfolds in three phases:

#### Phase 1: Terminal (Landing)
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  > INITIALIZING GG.SYSTEM...                           │
│  > LOADING MODULES...                                  │
│  > ESTABLISHING CONNECTION...                          │
│  > ACCESS GRANTED_                                     │
│                                                         │
│                    [ENTER]                              │
│                                                         │
└─────────────────────────────────────────────────────────┘
```
- Black screen, white blinking cursor
- Text types out character by character
- System UI elements fade in (barcode, borders)
- User clicks/taps or waits ~3s to proceed

#### Phase 2: Morph (Transition)
- Terminal text dissolves with glitch/fade effect
- GG symbol (triangle) appears center stage
- Elements rearrange into main layout
- Duration: ~1.5s

#### Phase 3: Dashboard (Main Hub)
```
┌─────────────────────────────────────────────────────────┐
│  ////// GG.SYSTEM v1.0 //////        [≡] MENU         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│                        ▽                                │
│                       GG                                │
│                                                         │
│              [ Building the future ]                    │
│                                                         │
│     ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐       │
│     │  X  │  │ LI  │  │ GH  │  │ IG  │  │ TT  │       │
│     └─────┘  └─────┘  └─────┘  └─────┘  └─────┘       │
│                                                         │
│  ─────────────────────────────────────────────────────  │
│                                                         │
│     ABOUT    PROJECTS    BLOG    LINKS                 │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 4. Site Structure

### Routes
```
/                   → Homepage (Terminal → Dashboard)
/about              → Bio, background, interests
/projects           → Work showcase
/blog               → Thoughts/writing (MDX)
/links              → Curated resources
```

### Navigation
- **Desktop:** Top nav bar with route links
- **Mobile:** Hamburger menu or bottom nav
- **Footer:** Social links on all pages

### Page Layouts

#### Homepage
- Terminal intro (skippable after first visit via localStorage)
- Central symbol + name
- Brief tagline
- Social links (prominent)
- Quick nav to sections

#### About
- Bio text (who is GG?)
- Interests/hobbies section
- Background/what you do

#### Projects
- Grid or list of 2-3 projects
- Each: title, description, image/screenshot, link
- System-UI styled cards

#### Blog
- List of posts (MDX-powered)
- Date, title, brief excerpt
- Individual post pages

#### Links
- Curated list of resources
- Categories optional
- External links with icons

---

## 5. Interactive Features

### Terminal Intro
- Typewriter effect (adjustable speed)
- Skip button for returning visitors
- localStorage flag to auto-skip after first visit

### Hover States
- Border glow or highlight
- Subtle scale transform
- System-UI feedback (like selecting a file)

### Scroll Animations
- Fade-in as elements enter viewport
- Subtle parallax optional
- Stagger effect for lists

### Page Transitions
- Smooth fade or slide
- Maintain performance (no jank)

### Mobile Touch
- Tap = hover state trigger
- Swipe gestures for navigation (optional)
- Touch targets: minimum 44px

---

## 6. Technical Specification

### Stack
| Layer | Technology |
|-------|------------|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Components | shadcn/ui |
| Animation | Framer Motion |
| Blog | MDX |
| Hosting | Vercel |
| Version Control | GitHub |

### Project Structure
```
gg-website/
├── app/
│   ├── page.tsx              # Homepage
│   ├── about/page.tsx
│   ├── projects/page.tsx
│   ├── blog/
│   │   ├── page.tsx          # Blog index
│   │   └── [slug]/page.tsx   # Individual posts
│   ├── links/page.tsx
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── terminal/
│   │   ├── Terminal.tsx
│   │   └── TypeWriter.tsx
│   ├── layout/
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── MobileNav.tsx
│   ├── ui/                   # shadcn/ui components
│   ├── SocialLinks.tsx
│   ├── ProjectCard.tsx
│   └── BlogCard.tsx
├── content/
│   └── blog/                 # MDX blog posts
├── lib/
│   ├── utils.ts
│   └── mdx.ts
├── public/
│   ├── fonts/
│   └── images/
├── styles/
│   └── fonts.css
├── docs/                     # Design & planning docs
├── CLAUDE.md
├── .env.local
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

### Performance Targets
- Lighthouse Performance: 90+
- First Contentful Paint: <1.5s
- Time to Interactive: <3.5s

---

## 7. MVP Scope (Stage 1)

### Must Have
- [ ] Homepage with terminal intro animation
- [ ] System boot → Dashboard transition
- [ ] GG symbol display
- [ ] Social links (all 5 platforms)
- [ ] Navigation to all pages
- [ ] All page routes with placeholder content
- [ ] Mobile responsive (full experience)
- [ ] Deployed to Vercel

### Nice to Have (can defer)
- [ ] Skip intro for returning visitors
- [ ] Cursor effects
- [ ] Advanced scroll animations

### Out of Scope for MVP
- Blog posts (empty state is fine)
- Project content (placeholder cards)
- Analytics
- Custom domain

---

## 8. Testing Strategy

### Component Tests (React Testing Library)
- Terminal typewriter renders correctly
- Navigation links work
- Social links open correct URLs

### E2E Tests (Playwright)
- Full user flow: landing → navigate → click social
- Mobile responsive checks
- Animation completion

### Manual Verification
- Visual design matches spec
- Interactions feel right
- Performance acceptable

---

## 9. Resolved Questions

1. **GG Symbol:** ✅ GG lettermark with subtle animations (minimalist)
2. **Accent Color:** ✅ Subtle cyan (#00FFFF) for interactive elements
3. **Japanese Text:** ✅ English only (keep it simple)
4. **Domain:** ✅ Use Vercel default for MVP, custom domain later (suggestions: gg.systems, gg.page, ggmf.dev)

---

## 10. Parallelization Strategy

### Sequential (must be in order)
1. Project setup (GitHub, Next.js init)
2. Core layout (Navigation, Footer, base styles)
3. Terminal component

### Parallel (after core layout)
- /about page
- /projects page
- /blog page
- /links page

### Parallel (throughout)
- Documentation updates
- Git commits (periodic)
- Content writing

### Git Commit Points
1. After project setup (initial commit)
2. After core layout complete
3. After terminal component
4. After each page route
5. After animations working
6. Before/after major features

### Terminal Strategy
- **Terminal 1:** Orchestrator (planning, questions, reviewing)
- **Terminal 2:** Implementation (coding, building)
- **Terminal 3 (optional):** Testing/verification

---

## 11. Next Steps

1. ✅ Brainstorming complete
2. ✅ Design spec documented
3. → Use `superpowers:writing-plans` for detailed implementation plan
4. → Setup GitHub repo and project structure
5. → Begin MVP implementation

---

*This document serves as the source of truth for the GG website project.*
