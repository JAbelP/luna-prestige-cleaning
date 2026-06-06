# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run lint     # ESLint
```

No test suite is configured.

## Architecture

**Stack:** Next.js 16.2.7 · React 19.2.4 · TypeScript · Tailwind CSS v4

**Pages** (`src/app/`): `page.tsx` (home), `services/`, `about/`, `booking/`. All are server components except `booking/page.tsx` and `src/components/layout/Header.tsx`, which use `'use client'` for local state.

**Components** (`src/components/`):
- `ui/` — Button, Container, Section, ImagePlaceholder (primitives)
- `layout/` — Header, Footer

**Path alias:** `@/` → `src/`

## Styling conventions

Tailwind v4 is imported but used sparingly — only `Container` (`max-w-6xl mx-auto px-6`) and `Section` (`py-20 lg:py-28`) use Tailwind utility classes. Everything else uses **inline `style` props with CSS custom property references** (`var(--color-primary)`, `var(--font-display)`, etc.).

All design tokens live in `src/styles/tokens.css` and are imported by `globals.css`. Add new values there; never hardcode hex colors or font strings in component files.

**Responsive layout pattern** — breakpoints are handled by injecting a `<style>` block at the bottom of each component, using a named className on the grid container:

```tsx
<div style={{ gridTemplateColumns: '1fr' }} className="hero-grid">…</div>

<style>{`
  @media (min-width: 900px) {
    .hero-grid { grid-template-columns: 1fr 1fr !important; }
  }
`}</style>
```

Do not introduce Tailwind responsive prefixes (`md:`, `lg:`) — the codebase does not use that pattern.

## Images

All images go in `public/images/`. Next.js `<Image>` with `fill` + `objectFit: 'cover'` is the standard pattern for section images (see the Hero in `page.tsx`).

`ImagePlaceholder` (`src/components/ui/ImagePlaceholder.tsx`) is a dashed-border placeholder div that shows the target filename and dimensions. Replace a placeholder with a real `<Image>` once the asset exists.

## Button component

`Button` renders as a `<Link>` when `href` is provided, or a `<button>` otherwise. Variants: `primary` (dark green fill), `secondary` (gold outline), `accent` (gold fill). Hover states are wired via `onMouseEnter`/`onMouseLeave` directly on the element — there is no CSS `:hover` rule for buttons.
