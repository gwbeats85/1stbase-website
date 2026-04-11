import { LearningCenterNav } from "@/components/ui/learning-center-nav";
import { SiteFooter } from "@/components/ui/site-footer";
import { comparisons } from "@/data/resources";

export const metadata = {
  title: "AI Tool Comparisons — 1st Base AI",
  description: "Side-by-side comparisons of the top AI tools with verdicts by use case, beginner picks, and best value selections.",
};

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-[#fdfcfb] flex flex-col">
      <LearningCenterNav />

      <main className="flex-1 max-w-5xl mx-auto px-6 md:px-10 py-12 w-full">
        <div className="mb-12">
          <span className="text-xs uppercase tracking-widest text-orange-500 font-semibold">Compare</span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-3 tracking-tight leading-[0.95]">
            Tool Comparisons
          </h1>
          <p className="text-gray-500 max-w-xl">
            Stop guessing which AI to use. Each comparison breaks down real use cases so you can pick the right tool for your situation.
          </p>
        </div>

        <div className="space-y-12">
          {comparisons.map((comp) => (
            <div key={comp.id} className="bg-white border border-gray-100 rounded-3xl overflow-hidden">
              {/* Comparison Header */}
              <div className="px-8 pt-8 pb-6 border-b border-gray-50">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {comp.tags.map((tag) => (
                    <span key={tag} className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-black text-gray-900 mb-2">{comp.title}</h2>
                <p className="text-gray-500 text-sm">{comp.summary}</p>
                <div className="mt-2 text-xs text-gray-300">Updated {comp.updated_at}</div>
              </div>

              {/* Use Case Table */}
              <div className="px-8 pt-6 pb-2">
                <h3 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-4">Verdict by use case</h3>
                <div className="space-y-2">
                  {comp.verdict_by_use_case.map((item) => (
                    <div
                      key={item.use_case}
                      className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-orange-50 transition-colors"
                    >
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 text-sm">{item.use_case}</p>
                        <p className="text-gray-400 text-xs mt-0.5">{item.reason}</p>
                      </div>
                      <span className="shrink-0 text-sm font-bold text-orange-500 bg-orange-50 px-3 py-1 rounded-full whitespace-nowrap">
                        {item.winner}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verdict Cards */}
              <div className="px-8 pt-6 pb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 bg-green-50 rounded-2xl border border-green-100">
                  <p className="text-xs font-bold text-green-600 uppercase tracking-widest mb-2">
                    👶 Beginner Pick
                  </p>
                  <p className="text-sm text-gray-700 font-medium">{comp.beginner_pick}</p>
                </div>
                <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100">
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
                    💰 Best Value
                  </p>
                  <p className="text-sm text-gray-700 font-medium">{comp.best_value}</p>
                </div>
                <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                    ⚠️ Avoid If
                  </p>
                  <p className="text-sm text-gray-700 font-medium">{comp.avoid_if}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More coming */}
        <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-dashed border-gray-200 text-center">
          <p className="text-gray-500 text-sm font-medium">More comparisons coming soon</p>
          <p className="text-gray-400 text-xs mt-1">Perplexity vs Gemini · Image Gen Showdown · Coding Tools · Free vs Paid</p>
        </div>

        {/* CTA */}
        <div className="mt-10 p-8 bg-gray-900 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-black text-xl mb-1">Still not sure which to pick?</p>
            <p className="text-gray-400 text-sm">Tell me your situation in 30 minutes and I&apos;ll give you a clear answer.</p>
          </div>
          <a
            href="https://calendly.com/1stbaseai/30min"
            className="shrink-0 bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3 rounded-full text-sm transition-colors"
          >
            Book a call →
          </a>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
