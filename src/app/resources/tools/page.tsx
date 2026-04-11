"use client";

import { useState, useMemo } from "react";
import { aiTools } from "@/data/resources";
import { useSaved } from "@/lib/use-saved";
import { LearningCenterNav } from "@/components/ui/learning-center-nav";
import { SiteFooter } from "@/components/ui/site-footer";

const audiences = ["all", "beginner", "intermediate", "advanced"] as const;
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
    beginner: "bg-green-50 text-green-700",
    intermediate: "bg-blue-50 text-blue-700",
    advanced: "bg-purple-50 text-purple-700",
    all: "bg-gray-50 text-gray-600",
  };

  return (
    <div className="min-h-screen bg-[#fdfcfb] flex flex-col">
      <LearningCenterNav />

      <main className="flex-1 max-w-6xl mx-auto px-6 md:px-10 py-12 w-full">
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs uppercase tracking-widest text-orange-500 font-semibold">Tools Directory</span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-3 tracking-tight leading-[0.95]">
            AI Tools Guide
          </h1>
          <p className="text-gray-500 max-w-xl">
            Every major AI tool — what it does, who it&apos;s for, and whether there&apos;s a free tier. Searchable and filterable.
          </p>
        </div>

        {/* Search + Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
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
              className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
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
                    ? "bg-gray-900 text-white"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-gray-400"
                }`}
              >
                {f.label}
              </button>
            ))}
            <div className="w-px bg-gray-200 mx-1" />
            {categoryFilters.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-orange-500 text-white"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-orange-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="mb-4 text-sm text-gray-400">
          {filteredTools.length} tool{filteredTools.length !== 1 ? "s" : ""} found
          {query && <span> for &ldquo;{query}&rdquo;</span>}
        </div>

        {/* Tool Cards Grid */}
        {filteredTools.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <svg className="w-10 h-10 mx-auto mb-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <p className="font-bold text-gray-600 mb-1">No tools found</p>
            <p className="text-sm">Try a different search or clear your filters</p>
            <button
              onClick={() => { setQuery(""); setActiveFilter("all"); setActiveCategory("All"); }}
              className="mt-4 text-sm font-semibold text-orange-500 hover:text-orange-600"
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
                  className="group flex flex-col bg-white border border-gray-100 rounded-2xl p-6 hover:border-orange-200 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-1.5 mb-2">
                        {tool.free_tier && (
                          <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                            Free
                          </span>
                        )}
                        <span
                          className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                            audienceBadge[tool.audience] ?? "bg-gray-50 text-gray-500"
                          }`}
                        >
                          {audienceLabel[tool.audience]}
                        </span>
                        {tool.featured && (
                          <span className="text-xs font-semibold text-orange-500 bg-orange-50 px-2 py-0.5 rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <h2 className="font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                        {tool.title}
                      </h2>
                      {tool.provider && (
                        <p className="text-xs text-gray-400 mt-0.5">{tool.provider}</p>
                      )}
                    </div>
                    {mounted && (
                      <button
                        onClick={() => toggle(tool.id)}
                        className={`ml-2 p-1.5 rounded-lg transition-colors shrink-0 ${
                          saved ? "text-orange-500 bg-orange-50" : "text-gray-300 hover:text-gray-500"
                        }`}
                        title={saved ? "Saved" : "Save this tool"}
                      >
                        <svg className="w-4 h-4" fill={saved ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                      </button>
                    )}
                  </div>

                  <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">{tool.summary}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {tool.tags.slice(0, 4).map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setActiveCategory(tag)}
                        className="text-xs text-gray-400 bg-gray-50 hover:bg-orange-50 hover:text-orange-500 px-2 py-0.5 rounded-full transition-colors"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                    <span className="text-xs text-gray-300">Updated {tool.updated_at}</span>
                    <div className="flex gap-2">
                      {tool.url && (
                        <a
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-orange-500 hover:text-orange-600 transition-colors"
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
        <div className="mt-16 p-8 bg-gray-900 rounded-3xl text-center">
          <p className="text-white font-bold text-xl mb-2">Can&apos;t decide which tool to start with?</p>
          <p className="text-gray-400 mb-6 text-sm max-w-md mx-auto">
            Book a free 30-min call — I&apos;ll build your personal AI toolkit based on your exact situation.
          </p>
          <a
            href="https://calendly.com/1stbaseai/30min"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3 rounded-full text-sm transition-colors"
          >
            Book a free call →
          </a>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
