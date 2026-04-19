import { NewsItem } from "@/data/resources";

const categoryColors: Record<string, string> = {
  "product-update": "bg-[color:rgb(37_82_83_/_0.08)] text-[var(--brand-teal)]",
  research: "bg-[color:rgb(47_48_49_/_0.08)] text-[var(--brand-charcoal)]",
  policy: "bg-[color:rgb(243_193_16_/_0.14)] text-[var(--brand-teal-deep)]",
  industry: "bg-[color:rgb(244_163_12_/_0.14)] text-[var(--brand-teal-deep)]",
  tutorial: "bg-[color:rgb(242_84_76_/_0.12)] text-[var(--brand-coral)]",
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
      className="group flex flex-col rounded-[1.8rem] border border-[color:var(--brand-line)] bg-[var(--brand-surface)] p-5 transition-all hover:-translate-y-0.5 hover:border-[color:rgb(243_193_16_/_0.35)] hover:shadow-[0_20px_44px_-30px_rgba(24,56,57,0.5)]"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[item.category] ?? "bg-gray-100 text-gray-500"}`}>
          {categoryLabels[item.category] ?? item.category}
        </span>
        {item.official && (
          <span className="text-xs font-medium text-[color:var(--brand-muted)]">Official</span>
        )}
      </div>
      <h3 className="mb-2 text-sm font-bold leading-snug text-[var(--brand-teal)] transition-colors group-hover:text-[var(--brand-coral)]">
        {item.title}
      </h3>
      <p className="flex-1 text-xs leading-relaxed text-[color:var(--brand-muted)]">{item.summary}</p>
      <div className="mt-4 flex items-center justify-between border-t border-[color:rgb(36_82_83_/_0.08)] pt-3">
        <span className="text-xs text-[color:rgb(33_71_72_/_0.42)]">{item.source}</span>
        <span className="text-xs text-[color:rgb(33_71_72_/_0.42)]">{item.published_at}</span>
      </div>
    </a>
  );
}
