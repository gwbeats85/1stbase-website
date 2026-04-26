import { LearningCenterNav } from "@/components/ui/learning-center-nav";
import { SiteFooter } from "@/components/ui/site-footer";
import { comparisons } from "@/data/resources";

export const metadata = {
  title: "AI Tool Comparisons — 1st Base AI",
  description: "Side-by-side comparisons of the top AI tools with verdicts by use case, beginner picks, and best value selections.",
};

export default function ComparePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--brand-canvas)]">
      <LearningCenterNav />

      <main className="flex-1 max-w-5xl mx-auto px-6 md:px-10 py-12 w-full">
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--brand-blue)]">Compare</span>
          <h1 className="mt-2 mb-3 text-4xl font-black leading-[0.95] tracking-tight text-[var(--brand-graphite)] md:text-5xl">
            Tool Comparisons
          </h1>
          <p className="max-w-xl text-[color:var(--brand-muted)]">
            Stop guessing which AI to use. Each comparison breaks down real use cases so you can pick the right tool for your situation.
          </p>
        </div>

        <div className="space-y-12">
          {comparisons.map((comp) => (
            <div key={comp.id} className="overflow-hidden rounded-3xl border border-[color:var(--brand-line)] bg-[var(--brand-surface)]">
              {/* Comparison Header */}
              <div className="border-b border-[color:var(--brand-line)] px-8 pt-8 pb-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {comp.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-[color:rgba(21,21,21,0.05)] px-2 py-0.5 text-xs text-[color:var(--brand-muted)]">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="mb-2 text-2xl font-black text-[var(--brand-graphite)]">{comp.title}</h2>
                <p className="text-sm text-[color:var(--brand-muted)]">{comp.summary}</p>
                <div className="mt-2 text-xs text-[color:rgba(21,21,21,0.32)]">Updated {comp.updated_at}</div>
              </div>

              {/* Use Case Table */}
              <div className="px-8 pt-6 pb-2">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[color:var(--brand-muted)]">Verdict by use case</h3>
                <div className="space-y-2">
                  {comp.verdict_by_use_case.map((item) => (
                    <div
                      key={item.use_case}
                      className="flex items-start gap-4 rounded-xl bg-[color:rgba(21,21,21,0.03)] p-4 transition-colors hover:bg-[color:rgba(59,130,246,0.06)]"
                    >
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-[var(--brand-graphite)]">{item.use_case}</p>
                        <p className="mt-0.5 text-xs text-[color:var(--brand-muted)]">{item.reason}</p>
                      </div>
                      <span className="shrink-0 whitespace-nowrap rounded-full bg-[color:rgba(59,130,246,0.1)] px-3 py-1 text-sm font-bold text-[var(--brand-blue)]">
                        {item.winner}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verdict Cards */}
              <div className="px-8 pt-6 pb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-[color:rgba(255,228,94,0.24)] bg-[color:rgba(255,228,94,0.16)] p-5">
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[var(--brand-graphite)]">
                    Beginner Pick
                  </p>
                  <p className="text-sm font-medium text-[var(--brand-graphite)]">{comp.beginner_pick}</p>
                </div>
                <div className="rounded-2xl border border-[color:rgba(59,130,246,0.2)] bg-[color:rgba(59,130,246,0.1)] p-5">
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[var(--brand-blue)]">
                    Best Value
                  </p>
                  <p className="text-sm font-medium text-[var(--brand-graphite)]">{comp.best_value}</p>
                </div>
                <div className="rounded-2xl border border-[color:var(--brand-line)] bg-[color:rgba(21,21,21,0.03)] p-5">
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[color:var(--brand-muted)]">
                    Avoid If
                  </p>
                  <p className="text-sm font-medium text-[var(--brand-graphite)]">{comp.avoid_if}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More coming */}
        <div className="mt-8 rounded-2xl border border-dashed border-[color:var(--brand-line)] bg-[color:rgba(21,21,21,0.03)] p-6 text-center">
          <p className="text-sm font-medium text-[var(--brand-graphite)]">More comparisons coming soon</p>
          <p className="mt-1 text-xs text-[color:var(--brand-muted)]">Perplexity vs Gemini · Image Gen Showdown · Coding Tools · Free vs Paid</p>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-3xl bg-[linear-gradient(135deg,_var(--brand-graphite)_0%,_var(--brand-graphite-2)_100%)] p-8 md:flex-row">
          <div>
            <p className="mb-1 text-xl font-black text-[var(--brand-cream)]">Still not sure which to pick?</p>
            <p className="text-sm text-[color:rgba(245,235,221,0.72)]">Tell me your situation in 30 minutes and I&apos;ll give you a clear answer.</p>
          </div>
          <a
            href="https://calendly.com/1stbaseai/30min"
            className="shrink-0 rounded-full bg-[var(--brand-yellow)] px-7 py-3 text-sm font-bold text-[var(--brand-graphite)] transition-colors hover:bg-[color:var(--brand-yellow-deep)]"
          >
            Book a call →
          </a>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
