"use client";

import { Resource } from "@/data/resources";
import { useSaved } from "@/lib/use-saved";
import Link from "next/link";

export function FeaturedResourceCard({ resource }: { resource: Resource }) {
  const { isSaved, toggle, mounted } = useSaved();
  const saved = mounted && isSaved(resource.id);

  const audienceLabel: Record<string, string> = {
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
    all: "All levels",
  };

  return (
    <div className="group flex flex-col bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#e8b99a] hover:shadow-md transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1.5">
            {resource.provider && (
              <span className="text-xs text-gray-400 font-medium">{resource.provider}</span>
            )}
            {resource.free_tier && (
              <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                Free tier
              </span>
            )}
            <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">
              {audienceLabel[resource.audience]}
            </span>
          </div>
          <h3 className="font-bold text-[#1a3738] group-hover:text-[#c4622d] transition-colors">
            {resource.title}
          </h3>
        </div>
        {mounted && (
          <button
            onClick={() => toggle(resource.id)}
            className={`ml-3 p-1.5 rounded-lg transition-colors shrink-0 ${
              saved ? "text-[#c4622d] bg-orange-50" : "text-gray-300 hover:text-gray-500"
            }`}
            title={saved ? "Saved" : "Save"}
          >
            <svg className="w-4 h-4" fill={saved ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
        )}
      </div>

      <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{resource.summary}</p>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {resource.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        {resource.url && (
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#c4622d] hover:text-[#a8521f] transition-colors shrink-0 ml-3"
          >
            Open ↗
          </a>
        )}
      </div>

      <div className="mt-3 pt-3 border-t border-gray-50">
        <span className="text-xs text-gray-300">Updated {resource.updated_at}</span>
      </div>
    </div>
  );
}
