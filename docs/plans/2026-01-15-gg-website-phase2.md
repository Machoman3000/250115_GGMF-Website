# GG Website Phase 2 Implementation Plan

> **For Claude:** Use `superpowers:executing-plans` to implement this plan task-by-task

**Goal:** Optimize performance, fix code quality issues from audit, and add real content.

**Prerequisite:** Phase 1 (MVP) complete and deployed.

**Audit Reference:** `docs/audits/2026-01-15-vercel-audit.md`

---

## Overview

| Category | Tasks | Priority |
|----------|-------|----------|
| Performance Fixes | 3 | 🔴 CRITICAL |
| Code Quality | 3 | 🟡 MEDIUM |
| Content | 4 | 📝 USER INPUT NEEDED |
| Polish | 3 | ✨ NICE TO HAVE |

---

## Phase 2A: Performance Fixes (CRITICAL)

### Task 2A.1: Dynamic Import Terminal Component

**File:** `app/page.tsx`

**Problem:** Terminal component is bundled even for repeat visitors who skip it.

**Implementation:**

```typescript
// Before
import { Terminal } from "@/components/terminal";

// After
import dynamic from 'next/dynamic';

const Terminal = dynamic(
  () => import('@/components/terminal/Terminal').then(mod => ({ default: mod.Terminal })),
  { ssr: false }
);
```

**Verification:**
```bash
npm run build
# Check .next/static chunks - Terminal should be separate
```

---

### Task 2A.2: Replace Barrel Imports with Direct Imports

**Files to update:**

| File | Current | Replace With |
|------|---------|--------------|
| `app/page.tsx:5` | `@/components/terminal` | `@/components/terminal/Terminal` |
| `app/page.tsx:6` | `@/components/layout` | `@/components/layout/Navigation` |
| `app/about/page.tsx:1` | `@/components/layout` | Direct imports |
| `app/projects/page.tsx:1` | `@/components/layout` | Direct imports |
| `app/blog/page.tsx:1` | `@/components/layout` | Direct imports |
| `app/links/page.tsx:1` | `@/components/layout` | Direct imports |

**Example:**
```typescript
// Before
import { Navigation, Footer } from "@/components/layout";

// After
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
```

**Note:** Keep the barrel files (`index.ts`) for now - they don't hurt if not imported.

---

### Task 2A.3: Remove Duplicate Keydown Listener

**File:** `app/page.tsx:30-39`

**Problem:** Both `app/page.tsx` and `Terminal.tsx` add keydown listeners. Terminal handles this internally.

**Fix:** Remove the useEffect that adds keydown listener from `app/page.tsx`.

```typescript
// DELETE this entire useEffect block from app/page.tsx
useEffect(() => {
  const handleKeyDown = () => {
    if (showTerminal) {
      handleTerminalComplete();
    }
  };

  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, [showTerminal]);
```

---

## Phase 2B: Code Quality (MEDIUM)

### Task 2B.1: Replace && with Ternary Operators

**Files:** `app/page.tsx`, `components/terminal/Terminal.tsx`

**app/page.tsx:44-45:**
```typescript
// Before
{showTerminal && <Terminal onComplete={handleTerminalComplete} />}

// After
{showTerminal ? <Terminal onComplete={handleTerminalComplete} /> : null}
```

**app/page.tsx:47:**
```typescript
// Before
{!showTerminal && (
  <motion.div>...</motion.div>
)}

// After
{!showTerminal ? (
  <motion.div>...</motion.div>
) : null}
```

**components/terminal/Terminal.tsx:98-107:**
```typescript
// Before
{currentLineIndex < BOOT_LINES.length &&
  !completedLines.includes(BOOT_LINES[currentLineIndex]) && (
    <p>...</p>
  )}

// After
{currentLineIndex < BOOT_LINES.length &&
  !completedLines.includes(BOOT_LINES[currentLineIndex]) ? (
    <p>...</p>
  ) : null}
```

---

### Task 2B.2: Hoist Static Style Object in GGLogo

**File:** `components/GGLogo.tsx`

**Implementation:**
```typescript
// Add at module level (before the component)
const lineStyle = {
  background:
    "linear-gradient(90deg, transparent 0%, #00FFFF 50%, transparent 100%)",
} as const;

// In component, replace inline style:
<motion.div
  className="mt-4 h-px w-full max-w-xs"
  style={lineStyle}  // Use the hoisted constant
  initial={{ scaleX: 0 }}
  animate={{ scaleX: 1 }}
  transition={{
    duration: 0.8,
    delay: 0.5,
    ease: "easeOut",
  }}
/>
```

---

### Task 2B.3: Use useRef for onComplete Callback

**File:** `components/terminal/TypeWriter.tsx`

**Implementation:**
```typescript
import { useState, useEffect, useRef } from "react";

export function TypeWriter({ text, delay = 50, onComplete }: TypeWriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  // Store callback in ref to avoid dependency issues
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
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
        onCompleteRef.current?.();  // Use ref instead of direct callback
      }
    }, delay);

    return () => clearInterval(interval);
  }, [text, delay]);  // Remove onComplete from deps

  // ... rest of component
}
```

---

## Phase 2C: Content (USER INPUT NEEDED)

> **Note:** These tasks require real content from the user.

### Task 2C.1: Update Social Media URLs

**File:** `components/SocialLinks.tsx`

**Current placeholders:**
```typescript
const socialLinks = [
  { abbr: "X", href: "https://twitter.com/YOUR_HANDLE", label: "Twitter/X" },
  { abbr: "LI", href: "https://linkedin.com/in/YOUR_HANDLE", label: "LinkedIn" },
  { abbr: "GH", href: "https://github.com/YOUR_HANDLE", label: "GitHub" },
  { abbr: "IG", href: "https://instagram.com/YOUR_HANDLE", label: "Instagram" },
  { abbr: "TT", href: "https://tiktok.com/@YOUR_HANDLE", label: "TikTok" },
];
```

**Action:** Replace `YOUR_HANDLE` with actual usernames.

---

### Task 2C.2: Fill in About Page Bio

**File:** `app/about/page.tsx`

**Current placeholders:**
- `[ Bio placeholder - Add your story here ]`
- `[ What you're working on, learning, or building ]`
- `[ Interest placeholder 1-4 ]`

**Action:** Replace with real content.

---

### Task 2C.3: Add Real Project Details

**File:** `app/projects/page.tsx`

**Current:** Placeholder projects with fake descriptions.

**Action:** Replace with 2-3 real projects including:
- Title
- Description
- Technologies used
- Link (optional)

---

### Task 2C.4: Confirm or Update Tagline

**File:** `app/page.tsx:66`

**Current:** "Building the future, one commit at a time."

**Action:** Confirm this tagline or provide alternative.

---

## Phase 2D: Polish (NICE TO HAVE)

### Task 2D.1: Add Favicon

**Location:** `app/favicon.ico` or `public/favicon.ico`

**Options:**
1. Simple "GG" text favicon
2. Cyan-on-black icon
3. Geometric shape

---

### Task 2D.2: SEO Optimization

**File:** `app/layout.tsx`

**Add OpenGraph and Twitter meta tags:**
```typescript
export const metadata: Metadata = {
  title: "GG",
  description: "Digital homepage of GG",
  openGraph: {
    title: "GG",
    description: "Digital homepage of GG",
    url: "https://250115ggmf-website.vercel.app",
    siteName: "GG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GG",
    description: "Digital homepage of GG",
  },
};
```

---

### Task 2D.3: Refine Animation Timings

**Review and adjust:**
- Terminal typing speed (currently 50ms/char)
- Auto-skip delay (currently 8s)
- GG logo glow animation speed
- Page transition durations

---

## Verification Checklist

After completing all tasks:

- [ ] `npm run build` succeeds with no errors
- [ ] `npm run lint` passes
- [ ] All pages load correctly
- [ ] Terminal animation works (first visit)
- [ ] Terminal skips (repeat visit)
- [ ] All social links work
- [ ] Mobile navigation works
- [ ] Re-run `/vercel-react-best-practices` - should show fewer issues

---

## Deployment

After verification:

```bash
git add .
git commit -m "feat: phase 2 - performance optimizations and content updates"
git push origin main
# Vercel auto-deploys from main
```

---

## Summary

**Total Tasks:** 13
- Phase 2A (Critical): 3 tasks
- Phase 2B (Medium): 3 tasks
- Phase 2C (Content): 4 tasks (needs user input)
- Phase 2D (Polish): 3 tasks

**Recommended Order:**
1. 2A.1-2A.3 (Performance - do first)
2. 2B.1-2B.3 (Code quality)
3. 2C.1-2C.4 (Content - when ready)
4. 2D.1-2D.3 (Polish - optional)

---

*Plan created: 2026-01-15*
*Based on: Vercel React Best Practices Audit*
