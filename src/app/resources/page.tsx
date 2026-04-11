import Link from "next/link";
import { LearningCenterNav } from "@/components/ui/learning-center-nav";
import { SiteFooter } from "@/components/ui/site-footer";
import { aiTools, newsItems } from "@/data/resources";
import { ResourcesHeroSearch } from "@/components/ui/resources-hero-search";
import { FeaturedResourceCard } from "@/components/ui/featured-resource-card";
import { NewsCard } from "@/components/ui/news-card";

export const metadata = {
  title: "AI Learning Center — 1st Base AI",
  description:
    "Your complete AI reference hub. Find the right tools, compare models, learn key terms, and bookmark resources you actually need.",
};

const quickActions = [
  {
    emoji: "🚀",
    title: "I just want to use AI",
    desc: "Start here — best free tools, no jargon",
    href: "/resources/tools?filter=beginner",
    color: "bg-orange-50 hover:bg-orange-100 border-orange-100",
    accent: "text-orange-500",
  },
  {
    emoji: "💼",
    title: "I want AI for work",
    desc: "Email, meetings, docs, and productivity",
    href: "/resources/workflows",
    color: "bg-blue-50 hover:bg-blue-100 border-blue-100",
    accent: "text-blue-600",
  },
  {
    emoji: "🔌",
    title: "I want to build with APIs",
    desc: "Developer stack, API docs, code tools",
    href: "/resources/official-docs",
    color: "bg-purple-50 hover:bg-purple-100 border-purple-100",
    accent: "text-purple-600",
  },
  {
    emoji: "⚖️",
    title: "I want to compare tools",
    desc: "Side-by-side model comparisons",
    href: "/resources/compare",
    color: "bg-green-50 hover:bg-green-100 border-green-100",
    accent: "text-green-600",
  },
  {
    emoji: "📄",
    title: "I want official docs only",
    desc: "Straight from OpenAI, Anthropic, Google",
    href: "/resources/official-docs",
    color: "bg-gray-50 hover:bg-gray-100 border-gray-100",
    accent: "text-gray-700",
  },
  {
    emoji: "📰",
    title: "I want current AI news",
    desc: "Curated updates from official sources",
    href: "/resources/news",
    color: "bg-amber-50 hover:bg-amber-100 border-amber-100",
    accent: "text-amber-600",
  },
];

const navigationSections = [
  {
    href: "/resources/tools",
    icon: "🛠️",
    title: "AI Tools Directory",
    desc: "Searchable guide to the best AI tools by use case, with free/paid tags and beginner picks.",
    count: `${aiTools.length} tools listed`,
  },
  {
    href: "/resources/official-docs",
    icon: "📚",
    title: "Official Docs Hub",
    desc: "Curated links to OpenAI, Anthropic, Google, and Perplexity's getting started guides, API docs, pricing, and more.",
    count: "4 providers",
  },
  {
    href: "/resources/compare",
    icon: "⚖️",
    title: "Compare Tools",
    desc: "Side-by-side comparison tables with verdicts by use case, beginner picks, and who should avoid each tool.",
    count: "2 comparisons",
  },
  {
    href: "/resources/glossary",
    icon: "📖",
    title: "AI Glossary",
    desc: "Plain-English definitions for every AI term — LLM, RAG, tokens, hallucination, and more. Expandable with examples.",
    count: "15 terms",
  },
  {
    href: "/resources/prompts",
    icon: "⚡",
    title: "Prompt Library",
    desc: "Copy-paste prompt templates for writing, research, marketing, business, and coding. Fill in the brackets, go.",
    count: "10 prompts",
  },
  {
    href: "/resources/workflows",
    icon: "🔄",
    title: "AI Workflows",
    desc: "Persona-based tool stacks with setup order, cost estimates, and common mistakes to avoid.",
    count: "3 workflows",
  },
  {
    href: "/resources/news",
    icon: "📰",
    title: "AI News & Updates",
    desc: "Curated, filtered news feed from official sources. Filter by date, provider, or category.",
    count: "Updated regularly",
  },
  {
    href: "/resources/pricing",
    icon: "💰",
    title: "Pricing Guide",
    desc: "Free vs paid breakdowns for every major AI tool. No surprises — know what you get before you subscribe.",
    count: "4 tools compared",
  },
];

const featuredTools = aiTools.filter((t) => t.featured).slice(0, 4);
const recentNews = newsItems.slice(0, 3);

export default function ResourcesHubPage() {
  return (
    <div className="min-h-screen bg-[#fdfcfb] flex flex-col">
      <LearningCenterNav />

      <main className="flex-1">
        {/* Hero with Search */}
        <div className="bg-gray-900 text-white px-6 md:px-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block mb-4 text-xs uppercase tracking-widest text-orange-400 font-semibold">
              AI Learning Center
            </span>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-[0.95] mb-5">
              Everything AI,<br className="hidden md:block" />
              <span className="text-orange-500"> organized for you.</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
              Tools, docs, comparisons, prompts, glossary, and news — all in one place.
              Beginner-friendly. Bookmark what you need.
            </p>
            <ResourcesHeroSearch />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-10">

          {/* Quick Action Cards */}
          <section className="py-14">
            <h2 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-6">
              What are you looking for?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {quickActions.map((action) => (
                <Link
                  key={action.title}
                  href={action.href}
                  className={`group flex flex-col p-5 border rounded-2xl transition-all ${action.color}`}
                >
                  <span className="text-2xl mb-3">{action.emoji}</span>
                  <p className={`font-bold text-sm mb-1 ${action.accent}`}>{action.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{action.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Featured Tools */}
          <section className="pb-14">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-black text-gray-900">Featured Tools</h2>
                <p className="text-gray-500 text-sm mt-1">The ones most people should start with</p>
              </div>
              <Link
                href="/resources/tools"
                className="text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
              >
                View all {aiTools.length} →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featuredTools.map((tool) => (
                <FeaturedResourceCard key={tool.id} resource={tool} />
              ))}
            </div>
          </section>

          {/* Section Grid */}
          <section className="pb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-2">Browse by Category</h2>
            <p className="text-gray-500 text-sm mb-8">Every section of the Learning Center</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {navigationSections.map((section) => (
                <Link
                  key={section.href}
                  href={section.href}
                  className="group flex flex-col p-6 bg-white border border-gray-100 rounded-2xl hover:border-orange-200 hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{section.icon}</span>
                    <span className="text-xs text-gray-400 font-medium">{section.count}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{section.desc}</p>
                  <span className="text-sm font-semibold text-orange-500 mt-4">Explore →</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Recent News */}
          <section className="pb-14">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-black text-gray-900">Recent AI Updates</h2>
                <p className="text-gray-500 text-sm mt-1">What just changed — from official sources</p>
              </div>
              <Link
                href="/resources/news"
                className="text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
              >
                All news →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {recentNews.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="pb-16">
            <div className="bg-gray-900 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <p className="text-white font-black text-2xl mb-2">Not sure where to start?</p>
                <p className="text-gray-400 max-w-md">
                  Book a free 30-minute intro call and I&apos;ll build you a personal AI toolkit — free, based on your exact goals.
                </p>
              </div>
              <a
                href="https://calendly.com/1stbaseai/30min"
                className="shrink-0 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full text-sm transition-colors"
              >
                Book a free call →
              </a>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
