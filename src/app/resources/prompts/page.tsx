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
    <div className="min-h-screen bg-[#EAE9E0] flex flex-col">
      <LearningCenterNav />

      <main className="flex-1 max-w-5xl mx-auto px-6 md:px-10 py-12 w-full">
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs uppercase tracking-widest text-[#c4622d] font-semibold">Prompts</span>
          <h1 className="text-4xl md:text-5xl font-black text-[#1a3738] mt-2 mb-3 tracking-tight leading-[0.95]">
            Prompt Library
          </h1>
          <p className="text-gray-500 max-w-xl">
            Copy, fill in the brackets, paste into any AI. These work with ChatGPT, Claude, and Gemini.
          </p>
        </div>

        {/* Search + Filters */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search prompts..."
              className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-[#1a3738] placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#c4622d] text-white"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-orange-300"
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
                    ? "bg-[#255253] text-white"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-gray-400"
                }`}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>

        {/* Count */}
        <div className="mb-4 text-sm text-gray-400">{filtered.length} prompt{filtered.length !== 1 ? "s" : ""}</div>

        {/* Prompt Cards */}
        <div className="space-y-4">
          {filtered.map((prompt) => (
            <div key={prompt.id} className="bg-white border border-gray-100 rounded-2xl overflow-hidden group">
              {/* Card header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-xs font-semibold text-[#c4622d] bg-orange-50 px-2.5 py-1 rounded-full">
                    {prompt.category}
                  </span>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                    prompt.audience === "beginner" ? "bg-green-50 text-green-600" :
                    prompt.audience === "intermediate" ? "bg-blue-50 text-blue-600" :
                    prompt.audience === "advanced" ? "bg-purple-50 text-purple-600" :
                    "bg-gray-50 text-gray-500"
                  }`}>
                    {prompt.audience}
                  </span>
                  <h2 className="font-bold text-[#1a3738] text-sm">{prompt.title}</h2>
                </div>
                <button
                  onClick={() => copyPrompt(prompt.id, prompt.prompt)}
                  className={`shrink-0 flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-full transition-all ${
                    copied === prompt.id
                      ? "bg-green-500 text-white"
                      : "bg-[#255253] hover:bg-[#183839] text-white"
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
                <pre className="text-xs text-gray-600 font-mono leading-relaxed whitespace-pre-wrap bg-gray-50 rounded-xl p-4 border border-gray-100">
                  {prompt.prompt}
                </pre>
                {prompt.tip && (
                  <p className="text-xs text-gray-400 mt-3 flex gap-1.5 items-start">
                    <svg className="w-3.5 h-3.5 text-[#c4622d] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {prompt.tip}
                  </p>
                )}
                {prompt.use_with && prompt.use_with.length > 0 && (
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-xs text-gray-400">Works with:</span>
                    {prompt.use_with.map((tool) => (
                      <span key={tool} className="text-xs text-gray-600 bg-gray-50 px-2 py-0.5 rounded-full font-medium">
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
            <svg className="w-8 h-8 mx-auto mb-2 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <p className="font-medium text-gray-600 mb-1">No prompts found</p>
            <button
              onClick={() => { setQuery(""); setActiveCategory("All"); setActiveAudience("all"); }}
              className="text-sm text-[#c4622d] font-semibold"
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
