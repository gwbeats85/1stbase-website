# 1st Base AI Website

Agent instructions for this repo.

## What This Repo Is

This folder is the public website codebase for `1stbaseai.com`.

It is not the old business-brain folder and it is not the abandoned app/dashboard work. Treat this repo as the place where brand presentation, site copy, and the actual Next.js implementation meet.

## Source Of Truth Order

For anything brand-related, use this order:

1. `~/1st-base-brand-package/`
2. [`brand-system.md`](./brand-system.md)
3. [`website/content.md`](./website/content.md)
4. current site implementation in `src/`

If docs and code disagree, fix the drift instead of guessing.

## Current Brand Facts

- Palette: graphite `#151515`, cream `#F5EBDD`, marker blue `#3B82F6`, highlight yellow `#FFE45E`
- Fonts: `Space Grotesk`, `Inter`, `JetBrains Mono`
- Logo source: `~/1st-base-brand-package/1b-logo-main.svg`
- Logo rule: keep the mark mostly one-color and use the raw mark by default, not a rounded-square app badge
- UI rule: final text, logos, buttons, and cards stay editable in code/SVG

## Messaging Anchor

- One-liner: `I Teach People How To Use AI`
- Core promise: practical AI lessons, resources, and help for regular people
- Strong supporting line: `The tools change. The fundamentals don't.`
- Tone: direct, plain English, useful, no hype

## Repo Structure

```text
src/app/              routes, metadata, page shells
src/components/ui/    homepage sections and shared UI
src/data/             structured content and datasets
website/content.md    source of truth for live copy
brand-system.md       source of truth for visual rules in this repo
content/              publishing and idea pipeline notes
learning/             learning notes and lesson drafts
ops/                  recurring task and workflow notes
```

## Working Rules

- Read the brand package before changing brand docs.
- Do not edit files inside `~/1st-base-brand-package` unless the task explicitly says to.
- If you update site copy in code, update [`website/content.md`](./website/content.md).
- If you update colors, typography, or logo usage in code, update [`brand-system.md`](./brand-system.md).
- Keep docs practical. No vague marketing filler and no stale template text.
- Verify changes with lint and local inspection before calling the work done.
