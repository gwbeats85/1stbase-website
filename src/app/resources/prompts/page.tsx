"use client";

import { useState, useMemo } from "react";
import { promptLibrary } from "@/data/resources";
import { LearningCenterNav } from "@/components/ui/learning-center-nav";
import { SiteFooter } from "@/components/ui/site-footer";

const categories = ["All", ...Array.from(new Set(promptLibrary.map((p) => p.category)))];
const audiences = [
  { key: "all", label: "All levels" },
  { key: "beginner", label: "Beginner" },
  { key: "intermediate", label: "Intermediate" },
  { key: "advanced", label: "Advanced" },
];

export default function PromptsPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeAudience, setActiveAudience] = useState("all");
  const [copied, setCopied] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let results = promptLibrary;
    if (query) {
      const q = query.toLowerCase();
      results = results.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tags.some((t) => t.includes(q))
      );
    }
    if (activeCategory !== "All") results = results.filter((p) => p.category === activeCategory);
    if (activeAudience !== "all") results = results.filter((p) => p.audience === activeAudience);
    return results;
  }, [query, activeCategory, activeAudience]);

  function copyPrompt(id: string, text: string) {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <div className="min-h-screen flex flex-col bg-[var(--brand-canvas)]">
      <LearningCenterNav />

      <main className="flex-1 max-w-5xl mx-auto px-6 md:px-10 py-12 w-full">
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--brand-blue)]">Prompts</span>
          <h1 className="mt-2 mb-3 text-4xl font-black leading-[0.95] tracking-tight text-[var(--brand-graphite)] md:text-5xl">
            Prompt Library
          </h1>
          <p className="max-w-xl text-[color:var(--brand-muted)]">
            Copy, fill in the brackets, paste into any AI. These work with ChatGPT, Claude, and Gemini.
          </p>
        </div>

        {/* Search + Filters */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <svg className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--brand-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search prompts..."
              className="w-full rounded-xl border border-[color:var(--brand-line)] bg-[var(--brand-surface)] py-3 pl-11 pr-4 text-sm text-[var(--brand-graphite)] placeholder:text-[color:var(--brand-muted)] transition-colors focus:border-[var(--brand-blue)] focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "border border-[var(--brand-blue)] bg-[var(--brand-blue)] text-[var(--brand-cream)]"
                    : "border border-[color:var(--brand-line)] bg-[var(--brand-surface)] text-[var(--brand-graphite)] hover:border-[color:rgba(59,130,246,0.28)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            {audiences.map((a) => (
              <button
                key={a.key}
                onClick={() => setActiveAudience(a.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeAudience === a.key
                    ? "border border-[var(--brand-graphite)] bg-[var(--brand-graphite)] text-[var(--brand-cream)]"
                    : "border border-[color:var(--brand-line)] bg-[var(--brand-surface)] text-[var(--brand-graphite)] hover:border-[color:var(--brand-line-strong)]"
                }`}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>

        {/* Count */}
        <div className="mb-4 text-sm text-[color:var(--brand-muted)]">{filtered.length} prompt{filtered.length !== 1 ? "s" : ""}</div>

        {/* Prompt Cards */}
        <div className="space-y-4">
          {filtered.map((prompt) => (
            <div key={prompt.id} className="group overflow-hidden rounded-2xl border border-[color:var(--brand-line)] bg-[var(--brand-surface)]">
              {/* Card header */}
              <div className="flex items-center justify-between border-b border-[color:var(--brand-line)] px-6 py-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="rounded-full bg-[color:rgba(59,130,246,0.1)] px-2.5 py-1 text-xs font-semibold text-[var(--brand-blue)]">
                    {prompt.category}
                  </span>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                    prompt.audience === "beginner" ? "bg-[color:rgba(255,228,94,0.22)] text-[var(--brand-graphite)]" :
                    prompt.audience === "intermediate" ? "bg-[color:rgba(59,130,246,0.1)] text-[var(--brand-blue)]" :
                    prompt.audience === "advanced" ? "bg-[color:rgba(21,21,21,0.08)] text-[var(--brand-graphite)]" :
                    "bg-[color:rgba(21,21,21,0.05)] text-[color:var(--brand-muted)]"
                  }`}>
                    {prompt.audience}
                  </span>
                  <h2 className="text-sm font-bold text-[var(--brand-graphite)]">{prompt.title}</h2>
                </div>
                <button
                  onClick={() => copyPrompt(prompt.id, prompt.prompt)}
                  className={`shrink-0 flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-full transition-all ${
                    copied === prompt.id
                      ? "bg-[var(--brand-blue)] text-[var(--brand-cream)]"
                      : "bg-[var(--brand-graphite)] text-[var(--brand-cream)] hover:bg-[var(--brand-graphite-2)]"
                  }`}
                >
                  {copied === prompt.id ? (
                    <><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Copied</>
                  ) : (
                    <>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copy
                    </>
                  )}
                </button>
              </div>

              {/* Prompt text */}
              <div className="px-6 py-5">
                <pre className="font-mono text-xs leading-relaxed whitespace-pre-wrap rounded-xl border border-[color:var(--brand-line)] bg-[color:rgba(21,21,21,0.03)] p-4 text-[var(--brand-graphite)]">
                  {prompt.prompt}
                </pre>
                {prompt.tip && (
                  <p className="mt-3 flex items-start gap-1.5 text-xs text-[color:var(--brand-muted)]">
                    <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--brand-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {prompt.tip}
                  </p>
                )}
                {prompt.use_with && prompt.use_with.length > 0 && (
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-xs text-[color:var(--brand-muted)]">Works with:</span>
                    {prompt.use_with.map((tool) => (
                      <span key={tool} className="rounded-full bg-[color:rgba(21,21,21,0.05)] px-2 py-0.5 text-xs font-medium text-[var(--brand-graphite)]">
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <svg className="mx-auto mb-2 h-8 w-8 text-[color:rgba(21,21,21,0.2)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <p className="mb-1 font-medium text-[var(--brand-graphite)]">No prompts found</p>
            <button
              onClick={() => { setQuery(""); setActiveCategory("All"); setActiveAudience("all"); }}
              className="text-sm font-semibold text-[var(--brand-blue)]"
            >
              Clear filters
            </button>
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
