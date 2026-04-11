"use client";

import { useState, useMemo } from "react";
import { glossaryTerms } from "@/data/resources";
import { LearningCenterNav } from "@/components/ui/learning-center-nav";
import { SiteFooter } from "@/components/ui/site-footer";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const audienceTags = ["all", "beginner", "technical", "foundational", "practical"];

export default function GlossaryPage() {
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [activeTag, setActiveTag] = useState("all");
  const [activeLetter, setActiveLetter] = useState("All");

  const filtered = useMemo(() => {
    let results = glossaryTerms;
    if (query) {
      const q = query.toLowerCase();
      results = results.filter(
        (t) =>
          t.term.toLowerCase().includes(q) ||
          t.one_line.toLowerCase().includes(q) ||
          t.explanation.toLowerCase().includes(q)
      );
    }
    if (activeTag !== "all") {
      results = results.filter((t) => t.tags.includes(activeTag));
    }
    if (activeLetter !== "All") {
      results = results.filter((t) => t.term[0].toUpperCase() === activeLetter);
    }
    return results;
  }, [query, activeTag, activeLetter]);

  const availableLetters = new Set(glossaryTerms.map((t) => t.term[0].toUpperCase()));

  function toggleExpand(id: string) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="min-h-screen bg-[#fdfcfb] flex flex-col">
      <LearningCenterNav />

      <main className="flex-1 max-w-5xl mx-auto px-6 md:px-10 py-12 w-full">
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs uppercase tracking-widest text-orange-500 font-semibold">Glossary</span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-3 tracking-tight leading-[0.95]">
            AI Glossary
          </h1>
          <p className="text-gray-500 max-w-xl">
            Plain-English definitions for every AI term you&apos;ll actually encounter. Tap any term for a full explanation with examples.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search terms..."
            className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
          />
        </div>

        {/* Filter tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {audienceTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTag === tag
                  ? "bg-gray-900 text-white"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-gray-400"
              }`}
            >
              {tag === "all" ? "All terms" : tag}
            </button>
          ))}
        </div>

        {/* A-Z Jump */}
        <div className="flex flex-wrap gap-1 mb-8">
          <button
            onClick={() => setActiveLetter("All")}
            className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
              activeLetter === "All" ? "bg-orange-500 text-white" : "text-gray-400 hover:text-gray-700"
            }`}
          >
            All
          </button>
          {alphabet.map((letter) => {
            const available = availableLetters.has(letter);
            return (
              <button
                key={letter}
                onClick={() => available && setActiveLetter(letter)}
                disabled={!available}
                className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                  activeLetter === letter
                    ? "bg-orange-500 text-white"
                    : available
                    ? "text-gray-600 hover:bg-gray-100"
                    : "text-gray-200 cursor-not-allowed"
                }`}
              >
                {letter}
              </button>
            );
          })}
        </div>

        {/* Count */}
        <div className="mb-4 text-sm text-gray-400">{filtered.length} term{filtered.length !== 1 ? "s" : ""}</div>

        {/* Terms List */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <p className="text-3xl mb-2">🔍</p>
            <p className="font-medium text-gray-600">No terms found</p>
            <button
              onClick={() => { setQuery(""); setActiveTag("all"); setActiveLetter("All"); }}
              className="mt-3 text-sm text-orange-500 font-semibold"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            {filtered.map((term) => {
              const isOpen = expanded.has(term.id);
              return (
                <div
                  key={term.id}
                  className="bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all"
                >
                  <button
                    className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors group"
                    onClick={() => toggleExpand(term.id)}
                  >
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <span className="font-black text-gray-900 text-base shrink-0 group-hover:text-orange-500 transition-colors">
                        {term.term}
                      </span>
                      <span className="text-gray-400 text-sm leading-snug truncate hidden md:block">
                        {term.one_line}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 ml-4">
                      <div className="hidden md:flex flex-wrap gap-1">
                        {term.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-xs text-gray-300 bg-gray-50 px-2 py-0.5 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className={`text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}>
                        ↓
                      </span>
                    </div>
                  </button>

                  {/* Mobile one-liner */}
                  <div className="md:hidden px-6 -mt-2 pb-3 text-gray-400 text-sm">
                    {term.one_line}
                  </div>

                  {isOpen && (
                    <div className="px-6 pb-6 border-t border-gray-50 pt-5 bg-gray-50/50">
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">{term.explanation}</p>
                      {term.example && (
                        <div className="bg-white rounded-xl p-4 border border-gray-100 mb-4">
                          <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">Example</p>
                          <p className="text-sm text-gray-600 whitespace-pre-wrap">{term.example}</p>
                        </div>
                      )}
                      {term.related_terms && term.related_terms.length > 0 && (
                        <div>
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Related terms</p>
                          <div className="flex flex-wrap gap-2">
                            {term.related_terms.map((rel) => {
                              const found = glossaryTerms.find((t) => t.id === rel);
                              return (
                                <button
                                  key={rel}
                                  onClick={() => {
                                    if (found) {
                                      setQuery(found.term);
                                      setExpanded(new Set([found.id]));
                                    }
                                  }}
                                  className="text-xs text-orange-500 bg-orange-50 hover:bg-orange-100 px-3 py-1 rounded-full font-medium transition-colors"
                                >
                                  {found ? found.term : rel}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
