"use client";

import { useState, useEffect, useRef } from "react";
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
        className={`flex items-center bg-white rounded-2xl border-2 transition-all ${
          focused ? "border-orange-400 shadow-lg shadow-orange-500/10" : "border-white/20 shadow-xl"
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
          className="flex-1 px-4 py-4 text-gray-900 placeholder-gray-400 bg-transparent outline-none text-base"
        />
        <button
          onClick={() => handleSearch(query)}
          className="mr-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors shrink-0"
        >
          Search
        </button>
      </div>

      {/* Suggestions */}
      {showSuggestions && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-10">
          {query.length === 0 ? (
            <div className="p-3">
              <p className="text-xs text-gray-400 font-medium px-2 mb-2">Popular searches</p>
              {suggestions.slice(0, 6).map((s) => (
                <button
                  key={s}
                  className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors"
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
                  className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors"
                  onMouseDown={() => handleSearch(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          ) : (
            <div className="p-4 text-sm text-gray-400 text-center">
              Press Enter to search for &ldquo;{query}&rdquo;
            </div>
          )}
        </div>
      )}
    </div>
  );
}
