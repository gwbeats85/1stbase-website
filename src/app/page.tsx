import { ShuffleHero as Hero } from "@/components/ui/shuffle-hero";
import { TypewriterBanner } from "@/components/ui/typewriter-banner";
import { UseCases } from "@/components/ui/use-cases";
import { Quiz } from "@/components/ui/quiz";
import { AiNews } from "@/components/ui/ai-news";
import { SiteFooter } from "@/components/ui/site-footer";
import { FloatingChat } from "@/components/ui/floating-chat";
import { LogoMark } from "@/components/ui/logo-mark";

const learnBuckets = [
  {
    label: "Lessons",
    href: "/learn#lessons",
    description: "Structured lessons that go from zero to confident — go in order.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    label: "Resources",
    href: "/learn#resources",
    description: "The best AI tools and links, curated and explained in plain English.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    label: "Downloads",
    href: "/learn#downloads",
    description: "Free cheat sheets and guides you can save and reference any time.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    label: "One-Shot Prompts",
    href: "/learn#prompts",
    description: "Copy, fill in the blanks, paste into any AI. Works instantly.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <TypewriterBanner />
      <UseCases />
      <Quiz />
      <AiNews />

      <section id="learn" className="bg-[var(--brand-cream-2)] px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--brand-blue)]">Free to use</span>
            <h2 className="mb-4 mt-3 text-4xl font-black tracking-tight text-[var(--brand-graphite)] md:text-5xl">
              Your AI Learning Center
            </h2>
            <p className="mx-auto max-w-xl text-lg text-[color:var(--brand-muted)]">
              Lessons, resources, downloads, and prompts — everything in one place, no account needed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {learnBuckets.map((bucket) => (
              <a
                key={bucket.label}
                href={bucket.href}
                className="group flex items-start gap-5 rounded-[1.8rem] border border-[color:var(--brand-line)] bg-[var(--brand-cream-2)] p-6 transition-all hover:-translate-y-0.5 hover:border-[color:var(--brand-line-strong)] hover:shadow-[0_20px_44px_-30px_rgba(21,21,21,0.15)]"
              >
                <span className="mt-0.5 shrink-0 text-[var(--brand-yellow)]">{bucket.icon}</span>
                <div>
                  <p className="mb-1 font-bold text-[var(--brand-graphite)] transition-colors group-hover:text-[var(--brand-blue)]">{bucket.label}</p>
                  <p className="text-sm leading-relaxed text-[color:var(--brand-muted)]">{bucket.description}</p>
                </div>
                <span className="ml-auto mt-0.5 shrink-0 text-[var(--brand-blue)]">→</span>
              </a>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/learn"
              className="inline-flex items-center gap-2 bg-[var(--brand-graphite)] px-8 py-4 text-sm font-bold text-[var(--brand-cream)] transition-colors hover:bg-[var(--brand-graphite-2)]"
            >
              Open the Learning Center →
            </a>
          </div>
        </div>
      </section>

      <section id="newsletter" className="relative overflow-hidden bg-[var(--brand-graphite)] px-6 py-24">
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <LogoMark color="#f5ebdd" size={600} className="absolute -left-24 -bottom-24 opacity-[0.06]" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--brand-yellow)]">Stay in the loop</span>
          <h2 className="mt-3 mb-4 text-4xl font-black text-[var(--brand-cream)] md:text-5xl">
            The AI newsletter that doesn&apos;t waste your time.
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-[color:rgba(245,235,221,0.66)]">
            Real tools. Real workflows. Practical breakdowns every week — no hype, no filler. Free forever.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              autoComplete="email"
              aria-label="Email address"
              placeholder="you@email.com"
              className="flex-1 border border-[color:rgba(245,235,221,0.16)] bg-[color:rgba(245,235,221,0.08)] px-5 py-3 text-sm text-[var(--brand-cream)] placeholder:text-[color:rgba(245,235,221,0.42)] focus:border-[var(--brand-yellow)] focus:outline-none"
              required
            />
            <button
              type="submit"
              className="whitespace-nowrap bg-[var(--brand-yellow)] px-7 py-3 text-sm font-bold text-[var(--brand-graphite)] transition-colors hover:bg-[var(--brand-yellow-deep)]"
            >
              Subscribe Free
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
      <FloatingChat />
    </main>
  );
}
