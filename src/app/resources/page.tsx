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
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    title: "I just want to use AI",
    desc: "Start here — best free tools, no jargon",
    href: "/resources/tools?filter=beginner",
    color: "bg-[color:rgba(59,130,246,0.08)] hover:bg-[color:rgba(59,130,246,0.14)] border-[color:rgba(59,130,246,0.16)]",
    accent: "text-[var(--brand-blue)]",
    iconColor: "text-[var(--brand-blue)]",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /></svg>,
    title: "I want AI for work",
    desc: "Email, meetings, docs, and productivity",
    href: "/resources/workflows",
    color: "bg-[color:rgba(255,228,94,0.14)] hover:bg-[color:rgba(255,228,94,0.2)] border-[color:rgba(255,228,94,0.22)]",
    accent: "text-[var(--brand-graphite)]",
    iconColor: "text-[var(--brand-yellow-deep)]",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
    title: "I want to build with APIs",
    desc: "Developer stack, API docs, code tools",
    href: "/resources/official-docs",
    color: "bg-[color:rgba(21,21,21,0.05)] hover:bg-[color:rgba(21,21,21,0.08)] border-[color:var(--brand-line)]",
    accent: "text-[var(--brand-graphite)]",
    iconColor: "text-[var(--brand-blue)]",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>,
    title: "I want to compare tools",
    desc: "Side-by-side model comparisons",
    href: "/resources/compare",
    color: "bg-[color:rgba(255,228,94,0.14)] hover:bg-[color:rgba(255,228,94,0.22)] border-[color:rgba(255,228,94,0.24)]",
    accent: "text-[var(--brand-graphite)]",
    iconColor: "text-[var(--brand-yellow-deep)]",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    title: "I want official docs only",
    desc: "Straight from OpenAI, Anthropic, Google",
    href: "/resources/official-docs",
    color: "bg-[color:rgba(21,21,21,0.05)] hover:bg-[color:rgba(21,21,21,0.08)] border-[color:var(--brand-line)]",
    accent: "text-[var(--brand-graphite)]",
    iconColor: "text-[var(--brand-graphite)]",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>,
    title: "I want current AI news",
    desc: "Curated updates from official sources",
    href: "/resources/news",
    color: "bg-[color:rgba(255,228,94,0.14)] hover:bg-[color:rgba(255,228,94,0.2)] border-[color:rgba(255,228,94,0.22)]",
    accent: "text-[var(--brand-graphite)]",
    iconColor: "text-[var(--brand-yellow-deep)]",
  },
];

const navigationSections = [
  {
    href: "/resources/tools",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    title: "AI Tools Directory",
    desc: "Searchable guide to the best AI tools by use case, with free/paid tags and beginner picks.",
    count: `${aiTools.length} tools listed`,
  },
  {
    href: "/resources/official-docs",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
    title: "Official Docs Hub",
    desc: "Curated links to OpenAI, Anthropic, Google, and Perplexity's getting started guides, API docs, pricing, and more.",
    count: "4 providers",
  },
  {
    href: "/resources/compare",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>,
    title: "Compare Tools",
    desc: "Side-by-side comparison tables with verdicts by use case, beginner picks, and who should avoid each tool.",
    count: "9 comparisons",
  },
  {
    href: "/resources/glossary",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>,
    title: "AI Glossary",
    desc: "Plain-English definitions for every AI term — LLM, RAG, tokens, hallucination, and more. Expandable with examples.",
    count: "30 terms",
  },
  {
    href: "/resources/prompts",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>,
    title: "Prompt Library",
    desc: "Copy-paste prompt templates for writing, research, marketing, business, and coding. Fill in the brackets, go.",
    count: "10 prompts",
  },
  {
    href: "/resources/workflows",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
    title: "AI Workflows",
    desc: "Persona-based tool stacks with setup order, cost estimates, and common mistakes to avoid.",
    count: "3 workflows",
  },
  {
    href: "/resources/news",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>,
    title: "AI News & Updates",
    desc: "Curated, filtered news feed from official sources. Filter by date, provider, or category.",
    count: "Updated regularly",
  },
  {
    href: "/resources/pricing",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>,
    title: "Pricing Guide",
    desc: "Free vs paid breakdowns for every major AI tool. No surprises — know what you get before you subscribe.",
    count: "4 tools compared",
  },
];

const featuredTools = aiTools.filter((t) => t.featured).slice(0, 4);
const recentNews = newsItems.slice(0, 3);

export default function ResourcesHubPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--brand-canvas)]">
      <LearningCenterNav />

      <main className="flex-1">
        {/* Hero with Search */}
        <div className="bg-[linear-gradient(135deg,_var(--brand-graphite)_0%,_var(--brand-graphite-2)_100%)] px-6 py-20 text-[var(--brand-cream)] md:px-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.26em] text-[var(--brand-yellow)]">
              AI Learning Center
            </span>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-[0.95] mb-5">
              Everything AI,<br className="hidden md:block" />
              <span className="text-[var(--brand-blue)]"> organized for you.</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-[color:rgba(245,235,221,0.72)]">
              Tools, docs, comparisons, prompts, glossary, and news — all in one place.
              Beginner-friendly. Bookmark what you need.
            </p>
            <ResourcesHeroSearch />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-10">

          {/* Quick Action Cards */}
          <section className="py-14">
            <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-[color:var(--brand-muted)]">
              What are you looking for?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {quickActions.map((action) => (
                <Link
                  key={action.title}
                  href={action.href}
                  className={`group flex flex-col p-5 border rounded-2xl transition-all ${action.color}`}
                >
                  <span className={`mb-3 ${action.iconColor ?? action.accent}`}>{action.icon}</span>
                  <p className={`font-bold text-sm mb-1 ${action.accent}`}>{action.title}</p>
                  <p className="text-xs leading-relaxed text-[color:var(--brand-muted)]">{action.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Featured Tools */}
          <section className="pb-14">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-black text-[var(--brand-graphite)]">Featured Tools</h2>
                <p className="mt-1 text-sm text-[color:var(--brand-muted)]">The ones most people should start with</p>
              </div>
              <Link
                href="/resources/tools"
                className="text-sm font-semibold text-[var(--brand-blue)] transition-colors hover:text-[var(--brand-graphite)]"
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
            <h2 className="mb-2 text-2xl font-black text-[var(--brand-graphite)]">Browse by Category</h2>
            <p className="mb-8 text-sm text-[color:var(--brand-muted)]">Every section of the Learning Center</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {navigationSections.map((section) => (
                <Link
                  key={section.href}
                  href={section.href}
                  className="group flex flex-col rounded-[1.8rem] border border-[color:var(--brand-line)] bg-[var(--brand-surface)] p-6 transition-all hover:-translate-y-0.5 hover:border-[color:rgba(59,130,246,0.35)] hover:shadow-[0_20px_44px_-30px_rgba(21,21,21,0.28)]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[var(--brand-blue)]">{section.icon}</span>
                    <span className="text-xs font-medium text-[color:var(--brand-muted)]">{section.count}</span>
                  </div>
                  <h3 className="mb-2 font-bold text-[var(--brand-graphite)] transition-colors group-hover:text-[var(--brand-blue)]">
                    {section.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-[color:var(--brand-muted)]">{section.desc}</p>
                  <span className="mt-4 text-sm font-semibold text-[var(--brand-blue)]">Explore →</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Recent News */}
          <section className="pb-14">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-black text-[var(--brand-graphite)]">Recent AI Updates</h2>
                <p className="mt-1 text-sm text-[color:var(--brand-muted)]">What just changed — from official sources</p>
              </div>
              <Link
                href="/resources/news"
                className="text-sm font-semibold text-[var(--brand-blue)] transition-colors hover:text-[var(--brand-graphite)]"
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
            <div className="flex flex-col items-center justify-between gap-8 rounded-[2rem] bg-[linear-gradient(135deg,_var(--brand-graphite)_0%,_var(--brand-graphite-2)_100%)] p-10 md:flex-row">
              <div>
                <p className="mb-2 text-2xl font-black text-[var(--brand-cream)]">Not sure where to start?</p>
                <p className="max-w-md text-[color:rgba(245,235,221,0.72)]">
                  Book a free 30-minute intro call and I&apos;ll build you a personal AI toolkit — free, based on your exact goals.
                </p>
              </div>
              <a
                href="https://calendly.com/1stbaseai/30min"
                className="shrink-0 rounded-full bg-[var(--brand-yellow)] px-8 py-4 text-sm font-bold text-[var(--brand-graphite)] transition-colors hover:bg-[color:var(--brand-yellow-deep)]"
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
