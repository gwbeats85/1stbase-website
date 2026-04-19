"use client";

import { Resource } from "@/data/resources";
import { useSaved } from "@/lib/use-saved";

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
    <div className="group flex flex-col rounded-[1.8rem] border border-[color:var(--brand-line)] bg-[var(--brand-surface)] p-6 transition-all hover:-translate-y-0.5 hover:border-[color:rgb(243_193_16_/_0.35)] hover:shadow-[0_20px_44px_-30px_rgba(24,56,57,0.5)]">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1.5">
            {resource.provider && (
              <span className="text-xs font-medium text-[color:var(--brand-muted)]">{resource.provider}</span>
            )}
            {resource.free_tier && (
              <span className="rounded-full bg-[color:rgb(37_82_83_/_0.08)] px-2 py-0.5 text-xs font-semibold text-[var(--brand-teal)]">
                Free tier
              </span>
            )}
            <span className="rounded-full bg-[color:rgb(36_82_83_/_0.06)] px-2 py-0.5 text-xs font-medium text-[color:var(--brand-muted)]">
              {audienceLabel[resource.audience]}
            </span>
          </div>
          <h3 className="font-bold text-[var(--brand-teal)] transition-colors group-hover:text-[var(--brand-coral)]">
            {resource.title}
          </h3>
        </div>
        {mounted && (
          <button
            onClick={() => toggle(resource.id)}
            className={`ml-3 p-1.5 rounded-lg transition-colors shrink-0 ${
              saved ? "bg-[color:rgb(242_84_76_/_0.1)] text-[var(--brand-coral)]" : "text-[color:rgb(33_71_72_/_0.28)] hover:text-[var(--brand-teal)]"
            }`}
            title={saved ? "Saved" : "Save"}
            aria-label={saved ? "Remove from saved resources" : "Save resource"}
          >
            <svg className="w-4 h-4" fill={saved ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
        )}
      </div>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-[color:var(--brand-muted)]">{resource.summary}</p>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {resource.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full bg-[color:rgb(36_82_83_/_0.06)] px-2 py-0.5 text-xs text-[color:var(--brand-muted)]">
              {tag}
            </span>
          ))}
        </div>
        {resource.url && (
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 shrink-0 text-xs font-semibold text-[var(--brand-teal)] transition-colors hover:text-[var(--brand-coral)]"
          >
            Open ↗
          </a>
        )}
      </div>

      <div className="mt-3 border-t border-[color:rgb(36_82_83_/_0.08)] pt-3">
        <span className="text-xs text-[color:rgb(33_71_72_/_0.42)]">Updated {resource.updated_at}</span>
      </div>
    </div>
  );
}
