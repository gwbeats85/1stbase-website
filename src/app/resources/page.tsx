import Link from "next/link";
import { SiteFooter } from "@/components/ui/site-footer";

export const metadata = {
  title: "Free Learning Resources — 1st Base AI",
  description: "The best free AI learning resources from the companies building the tools — Anthropic, Google, OpenAI, Cursor, Perplexity, and more.",
};

const resources = [
  {
    name: "Anthropic",
    logo: "/logos/claude.png",
    badge: "Free",
    title: "Anthropic Learn",
    description: "Courses on building with Claude, using AI at work, and personal productivity. Multiple learning tracks with certificates.",
    highlights: [
      "Build with Claude (API development)",
      "Claude for work & organizations",
      "AI Fluency for non-technical users",
      "Model Context Protocol (MCP) guides",
    ],
    url: "https://www.anthropic.com/learn",
    cta: "Start learning →",
  },
  {
    name: "OpenAI",
    logo: "/logos/chatgpt.svg",
    badge: "Free",
    title: "OpenAI Academy",
    description: "Expert-led workshops, on-demand videos, and community discussions covering AI fundamentals to advanced integrations.",
    highlights: [
      "AI fundamentals & ChatGPT basics",
      "Teaching with AI",
      "Business implementation guides",
      "Certification courses available",
    ],
    url: "https://academy.openai.com/",
    cta: "Visit academy →",
  },
  {
    name: "Google",
    logo: "/logos/gemini.png",
    badge: "Free",
    title: "Google AI Skills",
    description: "Google's official learning paths for Gemini and AI-powered Workspace tools — built for both students and professionals.",
    highlights: [
      "Google AI Essentials course",
      "Gemini for Google Workspace",
      "Deep Research & Audio Overviews",
      "Google Skills learning paths",
    ],
    url: "https://www.skills.google/paths/249",
    cta: "Browse courses →",
  },
  {
    name: "Perplexity",
    logo: "/logos/perplexity.png",
    badge: "Free",
    title: "Perplexity Guide",
    description: "Getting started guides, Spaces tutorials, research mode walkthroughs, and tips for using Perplexity as your AI research engine.",
    highlights: [
      "Getting started & basics",
      "Perplexity Spaces for research",
      "Advanced search techniques",
      "Student & academic guides",
    ],
    url: "https://www.perplexity.ai/hub/getting-started",
    cta: "Read the guide →",
  },
  {
    name: "Cursor",
    logo: null,
    badge: "Free",
    title: "Cursor Docs & Tutorials",
    description: "Official docs and tutorials for the AI code editor that's changing how developers write software. Great intro to AI-assisted coding.",
    highlights: [
      "Quickstart guide",
      "AI code completion & chat",
      "MCP integration tutorials",
      "Advanced documentation techniques",
    ],
    url: "https://cursor.com/learn",
    cta: "Read the docs →",
  },
  {
    name: "xAI / Grok",
    logo: "/logos/grok.png",
    badge: "Free Docs",
    title: "xAI Developer Tutorials",
    description: "Hands-on tutorials covering Grok's API, text generation, image analysis, and function calling. More technical — great for curious learners.",
    highlights: [
      "API setup & key generation",
      "Text generation & streaming",
      "Image analysis capabilities",
      "Python & JavaScript SDKs",
    ],
    url: "https://docs.x.ai/docs/tutorial",
    cta: "Read tutorials →",
  },
];

const badgeColors: Record<string, string> = {
  "Free": "bg-green-50 text-green-600",
  "Free Docs": "bg-blue-50 text-blue-600",
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-[#fdfcfb] flex flex-col">
      {/* Nav */}
      <div className="flex items-center justify-between px-8 md:px-10 py-7">
        <Link href="/" className="font-black text-xl tracking-tight text-gray-900">
          1stbaseai<span className="text-orange-500">.com</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          <a href="/#learn" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">What You&apos;ll Learn</a>
          <a href="/#news" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">AI News</a>
          <Link href="/blog" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Blog</Link>
          <Link href="/resources" className="text-sm font-medium text-gray-900 transition-colors">Resources</Link>
          <a href="/#about" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">About</a>
        </nav>
        <a
          href="https://calendly.com/1stbaseai/30min"
          className="bg-gray-900 hover:bg-gray-700 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors"
        >
          Book a session
        </a>
      </div>

      {/* Header */}
      <div className="px-8 md:px-10 pt-16 pb-12 max-w-6xl mx-auto w-full">
        <span className="block mb-4 text-xs uppercase tracking-widest text-orange-500 font-semibold">
          Free Resources
        </span>
        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-gray-900 leading-[0.95] mb-4">
          Learn straight from<br className="hidden md:block" /> the source
        </h1>
        <p className="text-lg text-gray-500 max-w-xl">
          Every major AI company has free learning material. Here&apos;s where to go — curated so you don&apos;t have to hunt.
        </p>
      </div>

      {/* Cards */}
      <div className="flex-1 px-8 md:px-10 pb-24 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((r) => (
            <a
              key={r.name}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-white border border-gray-100 rounded-3xl p-7 hover:border-orange-200 hover:shadow-lg transition-all"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  {r.logo ? (
                    <img src={r.logo} alt={r.name} className="w-9 h-9 object-contain" />
                  ) : (
                    <div className="w-9 h-9 rounded-lg bg-gray-900 flex items-center justify-center">
                      <span className="text-white text-xs font-black">C</span>
                    </div>
                  )}
                  <span className="font-bold text-gray-900">{r.name}</span>
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeColors[r.badge] ?? "bg-gray-100 text-gray-500"}`}>
                  {r.badge}
                </span>
              </div>

              {/* Title + description */}
              <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                {r.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {r.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1.5 mb-6 flex-1">
                {r.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-600">
                    <span className="text-orange-400 font-bold shrink-0">·</span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <span className="text-sm font-semibold text-orange-500 group-hover:text-orange-600 transition-colors">
                {r.cta}
              </span>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-10 bg-gray-900 rounded-3xl text-center">
          <p className="text-white font-bold text-2xl mb-2">Not sure where to start?</p>
          <p className="text-gray-400 mb-7 max-w-md mx-auto">
            Book a free intro call and I&apos;ll point you to exactly the right resource for your goals — no wasted time.
          </p>
          <a
            href="https://calendly.com/1stbaseai/30min"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-full transition-colors"
          >
            Book a free call →
          </a>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
