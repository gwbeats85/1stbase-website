"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

const suggestions = [
  "ChatGPT vs Claude",
  "What is RAG?",
  "free AI tools",
  "how to write better prompts",
  "AI for email",
  "Gemini pricing",
  "MCP explained",
  "beginner AI stack",
];

export function ResourcesHeroSearch() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const filtered = suggestions.filter((s) =>
    s.toLowerCase().includes(query.toLowerCase())
  );

  function handleSearch(q: string) {
    const term = q.trim();
    if (!term) return;
    // Route based on intent
    if (term.toLowerCase().includes("vs") || term.toLowerCase().includes("compare")) {
      router.push(`/resources/compare`);
    } else if (term.toLowerCase().includes("price") || term.toLowerCase().includes("cost") || term.toLowerCase().includes("pricing")) {
      router.push(`/resources/pricing`);
    } else if (term.toLowerCase().includes("prompt")) {
      router.push(`/resources/prompts`);
    } else if (term.toLowerCase().includes("glossary") || term.toLowerCase().includes("what is") || term.toLowerCase().includes("define")) {
      router.push(`/resources/glossary`);
    } else {
      router.push(`/resources/tools?q=${encodeURIComponent(term)}`);
    }
  }

  return (
    <div className="relative max-w-2xl mx-auto">
      <div
        className={`flex items-center rounded-[1.6rem] border-2 bg-[var(--brand-surface)] transition-all ${
          focused ? "border-[var(--brand-gold)] shadow-lg shadow-[rgba(24,56,57,0.12)]" : "border-[color:rgb(255_253_247_/_0.24)] shadow-xl"
        }`}
      >
        <svg
          className="ml-4 w-5 h-5 text-gray-400 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          ref={inputRef}
          aria-label="Search learning center content"
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => {
            setFocused(true);
            setShowSuggestions(true);
          }}
          onBlur={() => {
            setFocused(false);
            setTimeout(() => setShowSuggestions(false), 150);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch(query);
          }}
          placeholder="Search tools, terms, comparisons..."
          className="flex-1 bg-transparent px-4 py-4 text-base text-[var(--brand-ink)] outline-none placeholder:text-[color:var(--brand-muted)]"
        />
        <button
          onClick={() => handleSearch(query)}
          className="mr-2 shrink-0 rounded-xl bg-[var(--brand-gold)] px-5 py-2.5 text-sm font-bold text-[var(--brand-teal-deep)] transition-colors hover:bg-[var(--brand-amber)]"
        >
          Search
        </button>
      </div>

      {/* Suggestions */}
      {showSuggestions && (
        <div className="absolute left-0 right-0 top-full z-10 mt-2 overflow-hidden rounded-[1.6rem] border border-[color:var(--brand-line)] bg-[var(--brand-surface)] shadow-xl">
          {query.length === 0 ? (
            <div className="p-3">
              <p className="mb-2 px-2 text-xs font-medium text-[color:var(--brand-muted)]">Popular searches</p>
              {suggestions.slice(0, 6).map((s) => (
                <button
                  key={s}
                  className="w-full rounded-lg px-3 py-2 text-left text-sm text-[var(--brand-ink)] transition-colors hover:bg-[color:rgb(243_193_16_/_0.08)] hover:text-[var(--brand-teal)]"
                  onMouseDown={() => handleSearch(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          ) : filtered.length > 0 ? (
            <div className="p-3">
              {filtered.map((s) => (
                <button
                  key={s}
                  className="w-full rounded-lg px-3 py-2 text-left text-sm text-[var(--brand-ink)] transition-colors hover:bg-[color:rgb(243_193_16_/_0.08)] hover:text-[var(--brand-teal)]"
                  onMouseDown={() => handleSearch(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-sm text-[color:var(--brand-muted)]">
              Press Enter to search for &ldquo;{query}&rdquo;
            </div>
          )}
        </div>
      )}
    </div>
  );
}
