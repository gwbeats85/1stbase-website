import { NewsItem } from "@/data/resources";

const categoryColors: Record<string, string> = {
  "product-update": "bg-[color:rgba(59,130,246,0.1)] text-[var(--brand-blue)]",
  research: "bg-[color:rgba(21,21,21,0.06)] text-[var(--brand-graphite)]",
  policy: "bg-[color:rgba(255,228,94,0.22)] text-[var(--brand-graphite)]",
  industry: "bg-[color:rgba(255,228,94,0.16)] text-[var(--brand-graphite)]",
  tutorial: "bg-[color:rgba(59,130,246,0.08)] text-[var(--brand-blue)]",
};

const categoryLabels: Record<string, string> = {
  "product-update": "Product Update",
  research: "Research",
  policy: "Policy",
  industry: "Industry",
  tutorial: "Tutorial",
};

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-[1.8rem] border border-[color:var(--brand-line)] bg-[var(--brand-surface)] p-5 transition-all hover:-translate-y-0.5 hover:border-[color:rgba(59,130,246,0.35)] hover:shadow-[0_20px_44px_-30px_rgba(21,21,21,0.28)]"
    >
      <div className="flex items-center gap-2 mb-3">
        <span
          className={`rounded-full px-2 py-0.5 text-xs font-semibold ${categoryColors[item.category] ?? "bg-[color:rgba(21,21,21,0.06)] text-[color:var(--brand-muted)]"}`}
        >
          {categoryLabels[item.category] ?? item.category}
        </span>
        {item.official && (
          <span className="text-xs font-medium text-[color:var(--brand-muted)]">Official</span>
        )}
      </div>
      <h3 className="mb-2 text-sm font-bold leading-snug text-[var(--brand-graphite)] transition-colors group-hover:text-[var(--brand-blue)]">
        {item.title}
      </h3>
      <p className="flex-1 text-xs leading-relaxed text-[color:var(--brand-muted)]">{item.summary}</p>
      <div className="mt-4 flex items-center justify-between border-t border-[color:var(--brand-line)] pt-3">
        <span className="text-xs text-[color:rgba(21,21,21,0.42)]">{item.source}</span>
        <span className="text-xs text-[color:rgba(21,21,21,0.42)]">{item.published_at}</span>
      </div>
    </a>
  );
}
