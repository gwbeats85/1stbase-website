# 1st Base — Business HQ

Agent instructions for this folder. Read this before touching anything here.

**What this folder is:** The business brain for 1st Base — Will's AI education brand. This is NOT the code repo (that's `~/Projects/openclaw-dash` and `openclaw-overlay`). This folder covers the creator business: community, content, newsletter, website copy, branding, and business planning.

---

## Who Will Is

**Will Sanchez** — self-taught, building with AI, based in Vancouver WA. He teaches regular people how to use AI through short-form video, tutorials, and community. His angle is: real person, real tools, no hype. He figures it out and shows you how.

**Voice:** Direct, first-person, plain English. Confident. Specific. Never corporate, never bro-marketing. One-liner: *"I teach people how to use AI."*

---

## What 1st Base Is

**1st Base** is Will's AI education brand. Two sides:

1. **The Product** — AI agent dashboard app (`openclaw-dash`) + Home Plate overlay widget (`openclaw-overlay`). Private, building toward launch.
2. **The Creator Business** — what this folder covers:
   - Short-form content (tutorials, feature reviews, tips)
   - Skool community (paid or free, lessons + resources)
   - Newsletter (AI digest for regular people)
   - Website (1stbaseai.com)

**Target audience:** General tech/AI enthusiasts. Curious but not deep devs. People who want to use AI tools, not just read about them.

---

## Folder Structure

```
1st-base/
├── CLAUDE.md                        ← this file
├── brand-identity/
│   └── brand-system.md              ← colors, fonts, logo rules, voice ✅ DONE
├── business/
│   ├── business-plan.md             ← full plan, model, revenue, goals
│   └── financials.md                ← pricing, costs, projections
├── website/
│   ├── content.md                   ← final copy for every page section
│   └── pages/                       ← per-page drafts if needed
├── newsletter/
│   └── template.md                  ← structure + format for each issue
├── community/
│   ├── overview.md                  ← Skool setup, structure, pricing
│   └── lessons/                     ← one file per lesson
├── content/
│   ├── strategy.md                  ← pillars, posting cadence, platforms
│   ├── digest-filters.md            ← AI digest custom search config for 1st Base content
│   └── ideas/                       ← video/post ideas, one file per idea
└── tools.md                         ← tools Will uses and wants to use
```

---

## How to Work in Each Section

### brand-identity/brand-system.md
The source of truth for all visual decisions. **Always check this before generating copy, design direction, or any visual asset.** Key facts:
- Logo: upward triangle (home plate shape), orange `#f97316`
- Font: Geist Sans, weight 900 for headlines
- Buttons: pill shaped (999px radius)
- Voice: direct, plain, never hyped

### business/business-plan.md
Full business plan. Sections: executive summary, problem/solution, target audience, revenue model, competitive landscape, go-to-market, goals + milestones. Keep updated as decisions get made. Note the date of any major decision change.

### website/content.md
Final approved copy for 1stbaseai.com. Each section of the site gets its own `##` heading. This is the source of truth for what goes on the live site — the dev repo should match this. When copy changes here, flag it needs to sync to the code.

### newsletter/template.md
The format/structure for each newsletter issue. Think of it as the skeleton Will fills in each week. Should be easy enough to produce in under an hour.

### community/
Skool.com community setup. `overview.md` covers structure, pricing, what's in each tier. `lessons/` has one file per lesson — include: title, objective, outline, resource files list, recording notes. Will has existing tutorials to migrate here.

### content/
- `strategy.md` — content pillars, platform priorities, posting cadence
- `digest-filters.md` — custom keywords, sources, and scoring weights to tune the AI digest specifically for 1st Base content ideas
- `ideas/` — one file per video/post idea. Format: title, hook, outline, tools shown, resources to link

### tools.md
Every tool Will uses or is evaluating. Organized by category. Include: what it does, plan/tier, how it's used in the 1st Base workflow, link.

---

## Current Tool Stack

| Tool | Category | Notes |
|------|----------|-------|
| Affinity Designer | Design | Logos, graphics, thumbnails |
| Adobe Fresco | Illustration | Vector art |
| Recordly | Screen Recording | Tutorial + feature review recordings |
| Claude Code | AI / Dev | Main daily driver, this tool |
| Codex | AI / Dev | OpenAI coding agent |
| Gemini + Google AI Studio | AI | Paid plan + free tier |
| NotebookLM | Research / Podcast | AI digest generation |

---

## Current Priorities (update this as things shift)

1. Business plan — write it out properly
2. Logo finalize — Affinity Designer, based on brand-system.md
3. Website copy — final content for all sections
4. Newsletter template — format + first issue
5. Skool community — structure + migrate existing lessons
6. Content strategy — pillars, cadence, digest filters
7. Tools.md — document the full stack

---

## Rules for This Folder

- **Brand-system.md is law.** Never suggest colors, fonts, or voice that contradict it.
- **Audience first.** Everything written here should be understood by a non-developer. No jargon without explanation.
- **Keep it actionable.** Business plans that don't ship are useless. Favor concrete next steps over theory.
- **One source of truth.** If something changes (pricing, audience, name), update the one file that owns it. Don't let drift happen across multiple files.
- **Lessons go in community/lessons/** — not scattered in random notes.
- **Content ideas go in content/ideas/** — one file per idea, even if it's just a working title and a hook.
- **Website copy lives in website/content.md** — not in a random note, not in a chat.
- When Will says "update the plan" or "add this to the site" — find the right file, update it, confirm what changed.
