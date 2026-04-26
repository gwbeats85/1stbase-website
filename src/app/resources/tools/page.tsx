"use client";

import { useState, useMemo } from "react";
import { aiTools } from "@/data/resources";
import { useSaved } from "@/lib/use-saved";
import { LearningCenterNav } from "@/components/ui/learning-center-nav";
import { SiteFooter } from "@/components/ui/site-footer";

const filters = [
  { key: "all", label: "All Tools" },
  { key: "free", label: "Free Tier" },
  { key: "featured", label: "Featured" },
  { key: "beginner", label: "Beginner Pick" },
] as const;

const categoryFilters = [
  "All",
  "chat",
  "coding",
  "images",
  "research",
  "writing",
  "design",
  "search",
];

export default function ToolsPage() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [activeCategory, setActiveCategory] = useState("All");
  const { isSaved, toggle, mounted } = useSaved();

  const filteredTools = useMemo(() => {
    let results = aiTools;

    if (query) {
      const q = query.toLowerCase();
      results = results.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.summary.toLowerCase().includes(q) ||
          t.provider?.toLowerCase().includes(q) ||
          t.tags.some((tag) => tag.includes(q))
      );
    }

    if (activeFilter === "free") results = results.filter((t) => t.free_tier);
    if (activeFilter === "featured") results = results.filter((t) => t.featured);
    if (activeFilter === "beginner") results = results.filter((t) => t.audience === "beginner" || t.audience === "all");

    if (activeCategory !== "All") {
      results = results.filter((t) => t.tags.includes(activeCategory));
    }

    return results;
  }, [query, activeFilter, activeCategory]);

  const audienceLabel: Record<string, string> = {
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
    all: "All levels",
  };

  const audienceBadge: Record<string, string> = {
    beginner: "bg-[color:rgba(255,228,94,0.22)] text-[var(--brand-graphite)]",
    intermediate: "bg-[color:rgba(59,130,246,0.1)] text-[var(--brand-blue)]",
    advanced: "bg-[color:rgba(21,21,21,0.08)] text-[var(--brand-graphite)]",
    all: "bg-[color:rgba(21,21,21,0.05)] text-[color:var(--brand-muted)]",
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--brand-canvas)]">
      <LearningCenterNav />

      <main className="flex-1 max-w-6xl mx-auto px-6 md:px-10 py-12 w-full">
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--brand-blue)]">Tools Directory</span>
          <h1 className="mt-2 mb-3 text-4xl font-black leading-[0.95] tracking-tight text-[var(--brand-graphite)] md:text-5xl">
            AI Tools Guide
          </h1>
          <p className="max-w-xl text-[color:var(--brand-muted)]">
            Every major AI tool — what it does, who it&apos;s for, and whether there&apos;s a free tier. Searchable and filterable.
          </p>
        </div>

        {/* Search + Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--brand-muted)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tools, providers, use cases..."
              className="w-full rounded-xl border border-[color:var(--brand-line)] bg-[var(--brand-surface)] py-3 pl-11 pr-4 text-sm text-[var(--brand-graphite)] placeholder:text-[color:var(--brand-muted)] transition-colors focus:border-[var(--brand-blue)] focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[color:var(--brand-muted)] hover:text-[var(--brand-graphite)]"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filter chips */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === f.key
                    ? "border border-[var(--brand-graphite)] bg-[var(--brand-graphite)] text-[var(--brand-cream)]"
                    : "border border-[color:var(--brand-line)] bg-[var(--brand-surface)] text-[var(--brand-graphite)] hover:border-[color:var(--brand-line-strong)]"
                }`}
              >
                {f.label}
              </button>
            ))}
            <div className="mx-1 w-px bg-[color:var(--brand-line)]" />
            {categoryFilters.map((cat) => (
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
        </div>

        {/* Results count */}
        <div className="mb-4 text-sm text-[color:var(--brand-muted)]">
          {filteredTools.length} tool{filteredTools.length !== 1 ? "s" : ""} found
          {query && <span> for &ldquo;{query}&rdquo;</span>}
        </div>

        {/* Tool Cards Grid */}
        {filteredTools.length === 0 ? (
          <div className="py-20 text-center text-[color:var(--brand-muted)]">
            <svg className="mx-auto mb-3 h-10 w-10 text-[color:rgba(21,21,21,0.2)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <p className="mb-1 font-bold text-[var(--brand-graphite)]">No tools found</p>
            <p className="text-sm">Try a different search or clear your filters</p>
            <button
              onClick={() => { setQuery(""); setActiveFilter("all"); setActiveCategory("All"); }}
              className="mt-4 text-sm font-semibold text-[var(--brand-blue)] hover:text-[var(--brand-graphite)]"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTools.map((tool) => {
              const saved = mounted && isSaved(tool.id);
              return (
                <div
                  key={tool.id}
                  className="group flex flex-col rounded-2xl border border-[color:var(--brand-line)] bg-[var(--brand-surface)] p-6 transition-all hover:border-[color:rgba(59,130,246,0.28)] hover:shadow-[0_20px_44px_-30px_rgba(21,21,21,0.28)]"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-1.5 mb-2">
                        {tool.free_tier && (
                          <span className="rounded-full bg-[color:rgba(59,130,246,0.1)] px-2 py-0.5 text-xs font-semibold text-[var(--brand-blue)]">
                            Free
                          </span>
                        )}
                        <span
                          className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                            audienceBadge[tool.audience] ?? "bg-[color:rgba(21,21,21,0.05)] text-[color:var(--brand-muted)]"
                          }`}
                        >
                          {audienceLabel[tool.audience]}
                        </span>
                        {tool.featured && (
                          <span className="rounded-full bg-[color:rgba(255,228,94,0.22)] px-2 py-0.5 text-xs font-semibold text-[var(--brand-graphite)]">
                            Featured
                          </span>
                        )}
                      </div>
                      <h2 className="font-bold text-[var(--brand-graphite)] transition-colors group-hover:text-[var(--brand-blue)]">
                        {tool.title}
                      </h2>
                      {tool.provider && (
                        <p className="mt-0.5 text-xs text-[color:var(--brand-muted)]">{tool.provider}</p>
                      )}
                    </div>
                    {mounted && (
                      <button
                        onClick={() => toggle(tool.id)}
                        className={`ml-2 p-1.5 rounded-lg transition-colors shrink-0 ${
                          saved ? "bg-[color:rgba(59,130,246,0.1)] text-[var(--brand-blue)]" : "text-[color:rgba(21,21,21,0.28)] hover:text-[var(--brand-graphite)]"
                        }`}
                        title={saved ? "Saved" : "Save this tool"}
                      >
                        <svg className="w-4 h-4" fill={saved ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                      </button>
                    )}
                  </div>

                  <p className="mb-4 flex-1 text-sm leading-relaxed text-[color:var(--brand-muted)]">{tool.summary}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {tool.tags.slice(0, 4).map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setActiveCategory(tag)}
                        className="rounded-full bg-[color:rgba(21,21,21,0.05)] px-2 py-0.5 text-xs text-[color:var(--brand-muted)] transition-colors hover:bg-[color:rgba(59,130,246,0.08)] hover:text-[var(--brand-blue)]"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-[color:var(--brand-line)] pt-3">
                    <span className="text-xs text-[color:rgba(21,21,21,0.32)]">Updated {tool.updated_at}</span>
                    <div className="flex gap-2">
                      {tool.url && (
                        <a
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-[var(--brand-blue)] transition-colors hover:text-[var(--brand-graphite)]"
                        >
                          Open ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl bg-[linear-gradient(135deg,_var(--brand-graphite)_0%,_var(--brand-graphite-2)_100%)] p-8 text-center">
          <p className="mb-2 text-xl font-bold text-[var(--brand-cream)]">Can&apos;t decide which tool to start with?</p>
          <p className="mx-auto mb-6 max-w-md text-sm text-[color:rgba(245,235,221,0.72)]">
            Book a free 30-min call — I&apos;ll build your personal AI toolkit based on your exact situation.
          </p>
          <a
            href="https://calendly.com/1stbaseai/30min"
            className="inline-block rounded-full bg-[var(--brand-yellow)] px-7 py-3 text-sm font-bold text-[var(--brand-graphite)] transition-colors hover:bg-[color:var(--brand-yellow-deep)]"
          >
            Book a free call →
          </a>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
