"use client";

import { useState, useMemo } from "react";
import { newsItems } from "@/data/resources";
import { LearningCenterNav } from "@/components/ui/learning-center-nav";
import { SiteFooter } from "@/components/ui/site-footer";
import { NewsCard } from "@/components/ui/news-card";

const categories = [
  { key: "all", label: "All" },
  { key: "product-update", label: "Product Updates" },
  { key: "industry", label: "Industry" },
  { key: "research", label: "Research" },
  { key: "policy", label: "Policy" },
];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [officialOnly, setOfficialOnly] = useState(false);

  const filtered = useMemo(() => {
    let results = newsItems;
    if (activeCategory !== "all") results = results.filter((n) => n.category === activeCategory);
    if (officialOnly) results = results.filter((n) => n.official);
    return results;
  }, [activeCategory, officialOnly]);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--brand-canvas)]">
      <LearningCenterNav />

      <main className="flex-1 max-w-5xl mx-auto px-6 md:px-10 py-12 w-full">
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--brand-blue)]">News</span>
          <h1 className="mt-2 mb-3 text-4xl font-black leading-[0.95] tracking-tight text-[var(--brand-graphite)] md:text-5xl">
            AI News & Updates
          </h1>
          <p className="max-w-xl text-[color:var(--brand-muted)]">
            Curated updates from official sources — product releases, research, and industry changes that actually matter.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.key
                  ? "border border-[var(--brand-graphite)] bg-[var(--brand-graphite)] text-[var(--brand-cream)]"
                  : "border border-[color:var(--brand-line)] bg-[var(--brand-surface)] text-[var(--brand-graphite)] hover:border-[color:var(--brand-line-strong)]"
              }`}
            >
              {cat.label}
            </button>
          ))}
          <button
            onClick={() => setOfficialOnly(!officialOnly)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all border ${
              officialOnly
                ? "border-[color:rgba(59,130,246,0.24)] bg-[color:rgba(59,130,246,0.1)] text-[var(--brand-blue)]"
                : "border-[color:var(--brand-line)] bg-[var(--brand-surface)] text-[var(--brand-graphite)] hover:border-[color:var(--brand-line-strong)]"
            }`}
          >
            <span
              className={`w-3 h-3 rounded-full border-2 flex items-center justify-center ${
                officialOnly ? "border-[var(--brand-blue)] bg-[var(--brand-blue)]" : "border-[color:var(--brand-line-strong)]"
              }`}
            />
            Official sources only
          </button>
        </div>

        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="mb-1 font-bold text-[var(--brand-graphite)]">No news found</p>
            <button
              onClick={() => { setActiveCategory("all"); setOfficialOnly(false); }}
              className="mt-3 text-sm font-semibold text-[var(--brand-blue)]"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        )}

        {/* Coming soon note */}
        <div className="mt-12 rounded-2xl border border-dashed border-[color:var(--brand-line)] bg-[color:rgba(21,21,21,0.03)] p-6 text-center">
          <p className="text-sm font-medium text-[var(--brand-graphite)]">More news coming regularly</p>
          <p className="mt-1 text-xs text-[color:var(--brand-muted)]">This section pulls from official release notes, blogs, and verified sources</p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
