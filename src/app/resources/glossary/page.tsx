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
    <div className="min-h-screen flex flex-col bg-[var(--brand-canvas)]">
      <LearningCenterNav />

      <main className="flex-1 max-w-5xl mx-auto px-6 md:px-10 py-12 w-full">
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--brand-blue)]">Glossary</span>
          <h1 className="mt-2 mb-3 text-4xl font-black leading-[0.95] tracking-tight text-[var(--brand-graphite)] md:text-5xl">
            AI Glossary
          </h1>
          <p className="max-w-xl text-[color:var(--brand-muted)]">
            Plain-English definitions for every AI term you&apos;ll actually encounter. Tap any term for a full explanation with examples.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <svg className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--brand-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search terms..."
            className="w-full rounded-xl border border-[color:var(--brand-line)] bg-[var(--brand-surface)] py-3 pl-11 pr-4 text-sm text-[var(--brand-graphite)] placeholder:text-[color:var(--brand-muted)] transition-colors focus:border-[var(--brand-blue)] focus:outline-none"
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
                  ? "border border-[var(--brand-graphite)] bg-[var(--brand-graphite)] text-[var(--brand-cream)]"
                  : "border border-[color:var(--brand-line)] bg-[var(--brand-surface)] text-[var(--brand-graphite)] hover:border-[color:var(--brand-line-strong)]"
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
              activeLetter === "All" ? "bg-[var(--brand-blue)] text-[var(--brand-cream)]" : "text-[color:var(--brand-muted)] hover:text-[var(--brand-graphite)]"
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
                    ? "bg-[var(--brand-blue)] text-[var(--brand-cream)]"
                    : available
                    ? "text-[var(--brand-graphite)] hover:bg-[color:rgba(21,21,21,0.05)]"
                    : "cursor-not-allowed text-[color:rgba(21,21,21,0.18)]"
                }`}
              >
                {letter}
              </button>
            );
          })}
        </div>

        {/* Count */}
        <div className="mb-4 text-sm text-[color:var(--brand-muted)]">{filtered.length} term{filtered.length !== 1 ? "s" : ""}</div>

        {/* Terms List */}
        {filtered.length === 0 ? (
          <div className="py-16 text-center text-[color:var(--brand-muted)]">
            <svg className="mx-auto mb-2 h-8 w-8 text-[color:rgba(21,21,21,0.2)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <p className="font-medium text-[var(--brand-graphite)]">No terms found</p>
            <button
              onClick={() => { setQuery(""); setActiveTag("all"); setActiveLetter("All"); }}
              className="mt-3 text-sm font-semibold text-[var(--brand-blue)]"
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
                  className="overflow-hidden rounded-2xl border border-[color:var(--brand-line)] bg-[var(--brand-surface)] transition-all"
                >
                  <button
                    className="group flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-[color:rgba(59,130,246,0.05)]"
                    onClick={() => toggleExpand(term.id)}
                  >
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <span className="shrink-0 text-base font-black text-[var(--brand-graphite)] transition-colors group-hover:text-[var(--brand-blue)]">
                        {term.term}
                      </span>
                      <span className="hidden truncate text-sm leading-snug text-[color:var(--brand-muted)] md:block">
                        {term.one_line}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 ml-4">
                      <div className="hidden md:flex flex-wrap gap-1">
                        {term.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="rounded-full bg-[color:rgba(21,21,21,0.05)] px-2 py-0.5 text-xs text-[color:var(--brand-muted)]">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className={`text-[color:var(--brand-muted)] transition-transform ${isOpen ? "rotate-180" : ""}`}>
                        ↓
                      </span>
                    </div>
                  </button>

                  {/* Mobile one-liner */}
                  <div className="px-6 -mt-2 pb-3 text-sm text-[color:var(--brand-muted)] md:hidden">
                    {term.one_line}
                  </div>

                  {isOpen && (
                    <div className="border-t border-[color:var(--brand-line)] bg-[color:rgba(21,21,21,0.03)] px-6 pb-6 pt-5">
                      <p className="mb-4 text-sm leading-relaxed text-[var(--brand-graphite)]">{term.explanation}</p>
                      {term.example && (
                        <div className="mb-4 rounded-xl border border-[color:var(--brand-line)] bg-[var(--brand-surface)] p-4">
                          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[var(--brand-blue)]">Example</p>
                          <p className="whitespace-pre-wrap text-sm text-[var(--brand-graphite)]">{term.example}</p>
                        </div>
                      )}
                      {term.related_terms && term.related_terms.length > 0 && (
                        <div>
                          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[color:var(--brand-muted)]">Related terms</p>
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
                                  className="rounded-full bg-[color:rgba(59,130,246,0.08)] px-3 py-1 text-xs font-medium text-[var(--brand-blue)] transition-colors hover:bg-[color:rgba(59,130,246,0.14)]"
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
