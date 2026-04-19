import { NewsItem } from "@/data/resources";

const categoryColors: Record<string, string> = {
  "product-update": "bg-blue-50 text-blue-600",
  research: "bg-purple-50 text-purple-600",
  policy: "bg-amber-50 text-amber-600",
  industry: "bg-green-50 text-green-600",
  tutorial: "bg-orange-50 text-[#a8521f]",
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
      className="group flex flex-col bg-white border border-gray-100 rounded-2xl p-5 hover:border-[#e8b99a] hover:shadow-md transition-all"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[item.category] ?? "bg-gray-100 text-gray-500"}`}>
          {categoryLabels[item.category] ?? item.category}
        </span>
        {item.official && (
          <span className="text-xs font-medium text-gray-400">Official</span>
        )}
      </div>
      <h3 className="font-bold text-[#1a3738] text-sm leading-snug mb-2 group-hover:text-[#c4622d] transition-colors">
        {item.title}
      </h3>
      <p className="text-gray-500 text-xs leading-relaxed flex-1">{item.summary}</p>
      <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between">
        <span className="text-xs text-gray-300">{item.source}</span>
        <span className="text-xs text-gray-300">{item.published_at}</span>
      </div>
    </a>
  );
}
