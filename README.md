# 1st Base AI Website

Public website for `1stbaseai.com`.

This repo is the live site codebase, not just a content notebook. The current brand system is already reworked in code and the docs here should stay aligned with the source package at `~/1st-base-brand-package`.

## Current Brand System

- Graphite: `#151515`
- Cream: `#F5EBDD`
- Marker Blue: `#3B82F6`
- Highlight Yellow: `#FFE45E`
- Display: `Space Grotesk`
- Body: `Inter`
- Mono: `JetBrains Mono`

Primary brand asset sources:

- `~/1st-base-brand-package/README.md`
- `~/1st-base-brand-package/docs/asset-notes.md`
- `~/1st-base-brand-package/tokens/design-tokens.json`
- `~/1st-base-brand-package/claude-design-brand-asset/brand.manifest.json`

## Stack

- Next.js `16.2.2`
- React `19`
- TypeScript
- Tailwind CSS `4`
- Framer Motion

## Main Repo Docs

- [`brand-system.md`](./brand-system.md): brand rules used by this site
- [`website/content.md`](./website/content.md): source of truth for live site copy
- [`ROADMAP.md`](./ROADMAP.md): current business and site priorities
- [`DASHBOARD.md`](./DASHBOARD.md): operator view for content and publishing work
- [`CLAUDE.md`](./CLAUDE.md): repo-specific working rules

## App Structure

- `src/app/`: routes, metadata, page shells
- `src/components/ui/`: homepage and shared UI sections
- `src/data/`: structured content for resources, glossary, news, and similar data
- `public/`: static assets, icons, and images

## Working Rules

- Treat `~/1st-base-brand-package` as the brand source of truth.
- Do not mutate brand-package source assets casually.
- Keep final website text, logos, buttons, and UI in editable code/SVG.
- If brand copy or brand rules change, update the owning markdown file in this repo so docs and code do not drift again.

## Local Dev

```bash
npm run dev
```

Default local URL:

```text
http://localhost:3000
```

## Verification

Before handing back doc or UI changes:

```bash
npm run lint
```

For UI work, also run the site locally and verify the changed sections in-browser.
