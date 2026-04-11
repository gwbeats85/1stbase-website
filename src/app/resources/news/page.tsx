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
    <div className="min-h-screen bg-[#fdfcfb] flex flex-col">
      <LearningCenterNav />

      <main className="flex-1 max-w-5xl mx-auto px-6 md:px-10 py-12 w-full">
        <div className="mb-10">
          <span className="text-xs uppercase tracking-widest text-orange-500 font-semibold">News</span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-3 tracking-tight leading-[0.95]">
            AI News & Updates
          </h1>
          <p className="text-gray-500 max-w-xl">
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
                  ? "bg-gray-900 text-white"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-gray-400"
              }`}
            >
              {cat.label}
            </button>
          ))}
          <button
            onClick={() => setOfficialOnly(!officialOnly)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all border ${
              officialOnly
                ? "bg-blue-50 border-blue-200 text-blue-700"
                : "bg-white border-gray-200 text-gray-600 hover:border-gray-400"
            }`}
          >
            <span
              className={`w-3 h-3 rounded-full border-2 flex items-center justify-center ${
                officialOnly ? "border-blue-500 bg-blue-500" : "border-gray-300"
              }`}
            />
            Official sources only
          </button>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-4xl mb-3">📰</p>
            <p className="font-bold text-gray-600 mb-1">No news found</p>
            <button
              onClick={() => { setActiveCategory("all"); setOfficialOnly(false); }}
              className="mt-3 text-sm text-orange-500 font-semibold"
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
        <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-dashed border-gray-200 text-center">
          <p className="text-gray-500 text-sm font-medium">More news coming regularly</p>
          <p className="text-gray-400 text-xs mt-1">This section pulls from official release notes, blogs, and verified sources</p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
