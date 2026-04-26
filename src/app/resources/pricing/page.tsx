import { LearningCenterNav } from "@/components/ui/learning-center-nav";
import { SiteFooter } from "@/components/ui/site-footer";
import { pricingData } from "@/data/resources";

export const metadata = {
  title: "AI Pricing Guide — 1st Base AI",
  description: "Free vs paid breakdowns for every major AI tool. Know exactly what you get before you subscribe.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--brand-canvas)]">
      <LearningCenterNav />

      <main className="flex-1 max-w-6xl mx-auto px-6 md:px-10 py-12 w-full">
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--brand-blue)]">Pricing</span>
          <h1 className="mb-3 mt-2 text-4xl font-black leading-[0.95] tracking-tight text-[var(--brand-graphite)] md:text-5xl">
            AI Pricing Guide
          </h1>
          <p className="max-w-xl text-[color:var(--brand-muted)]">
            No surprises. Here&apos;s exactly what you get on every plan for the tools that matter — so you can make an informed decision.
          </p>
        </div>

        {/* Quick summary - "start free" note */}
        <div className="mb-8 flex items-center gap-4 rounded-[1.6rem] border border-[color:rgba(59,130,246,0.16)] bg-[color:rgba(59,130,246,0.08)] p-5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color:rgba(59,130,246,0.12)] text-[var(--brand-blue)]">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <div>
            <p className="text-sm font-black text-[var(--brand-graphite)]">Start free on all four tools</p>
            <p className="mt-0.5 text-xs text-[color:var(--brand-muted)]">ChatGPT, Claude, Gemini, and Perplexity all have free tiers. Start there. Upgrade only when you hit the limits.</p>
          </div>
        </div>

        {/* Tool Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {pricingData.map((row) => (
            <div key={row.tool} className="overflow-hidden rounded-[2rem] border border-[color:var(--brand-line)] bg-[var(--brand-surface)]">
              {/* Header */}
              <div className="flex items-center gap-4 border-b border-[color:var(--brand-line)] px-7 py-6">
                {row.logo ? (
                  <img src={row.logo} alt={row.tool} className="w-9 h-9 object-contain" />
                ) : (
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--brand-graphite)]">
                    <span className="text-sm font-black text-[var(--brand-cream)]">{row.tool[0]}</span>
                  </div>
                )}
                <div>
                  <h2 className="font-black text-[var(--brand-graphite)]">{row.tool}</h2>
                  <p className="text-xs text-[color:var(--brand-muted)]">{row.provider}</p>
                </div>
                {row.free_tier && (
                  <span className="ml-auto rounded-full bg-[color:rgba(59,130,246,0.1)] px-3 py-1 text-xs font-semibold text-[var(--brand-blue)]">
                    Free tier
                  </span>
                )}
              </div>

              {/* Tiers */}
              <div className="grid grid-cols-2 divide-x divide-[color:var(--brand-line)]">
                {/* Free */}
                <div className="p-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[color:var(--brand-muted)]">Free</p>
                  <p className="mb-3 text-2xl font-black text-[var(--brand-graphite)]">$0</p>
                  <p className="text-xs leading-relaxed text-[color:var(--brand-muted)]">{row.free_tier_limits}</p>
                </div>

                {/* Pro */}
                <div className="p-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--brand-blue)]">Pro</p>
                  <p className="mb-3 text-2xl font-black text-[var(--brand-graphite)]">{row.pro_price}</p>
                  <ul className="space-y-1.5">
                    {row.pro_features.map((feature) => (
                      <li key={feature} className="flex gap-2 text-xs text-[color:var(--brand-muted)]">
                        <span className="shrink-0 font-bold text-[var(--brand-blue)]">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom details */}
              <div className="bg-[color:rgba(21,21,21,0.03)] px-7 py-4">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <p className="text-xs font-medium text-[color:var(--brand-muted)]">Team plan</p>
                    <p className="text-xs text-[var(--brand-ink)]">{row.team_price}</p>
                  </div>
                  {row.api_available && (
                    <div>
                      <p className="text-xs font-medium text-[color:var(--brand-muted)]">API</p>
                      <p className="text-xs text-[var(--brand-ink)]">{row.api_pricing}</p>
                    </div>
                  )}
                </div>
                {row.notes && (
                  <p className="mt-3 border-t border-[color:var(--brand-line)] pt-3 text-xs text-[color:var(--brand-muted)]">{row.notes}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Full comparison table - desktop */}
        <div className="mb-12">
          <h2 className="mb-4 text-xl font-black text-[var(--brand-graphite)]">Quick comparison</h2>
          <div className="overflow-x-auto rounded-[1.6rem] border border-[color:var(--brand-line)]">
            <table className="w-full bg-[var(--brand-surface)] text-sm">
              <thead>
                <tr className="border-b border-[color:var(--brand-line)]">
                  <th className="px-6 py-4 text-left font-bold text-[var(--brand-graphite)]">Tool</th>
                  <th className="px-6 py-4 text-center font-bold text-[var(--brand-graphite)]">Free Tier</th>
                  <th className="px-6 py-4 text-center font-bold text-[var(--brand-graphite)]">Pro Price</th>
                  <th className="px-6 py-4 text-center font-bold text-[var(--brand-graphite)]">API</th>
                  <th className="px-6 py-4 text-left font-bold text-[var(--brand-graphite)]">Best for</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((row, i) => (
                  <tr key={row.tool} className={`border-b border-[color:var(--brand-line)] transition-colors hover:bg-[color:rgba(59,130,246,0.05)] ${i === pricingData.length - 1 ? "border-0" : ""}`}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {row.logo ? (
                          <img src={row.logo} alt={row.tool} className="w-6 h-6 object-contain" />
                        ) : (
                          <div className="flex h-6 w-6 items-center justify-center rounded bg-[var(--brand-graphite)]">
                            <span className="text-xs font-black text-[var(--brand-cream)]">{row.tool[0]}</span>
                          </div>
                        )}
                        <span className="font-semibold text-[var(--brand-graphite)]">{row.tool}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.free_tier ? (
                        <span className="font-bold text-[var(--brand-blue)]">✓</span>
                      ) : (
                        <span className="text-[color:rgba(21,21,21,0.28)]">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-[var(--brand-graphite)]">{row.pro_price}</td>
                    <td className="px-6 py-4 text-center">
                      {row.api_available ? (
                        <span className="font-bold text-[var(--brand-blue)]">✓</span>
                      ) : (
                        <span className="text-[color:rgba(21,21,21,0.28)]">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-xs text-[color:var(--brand-muted)]">{row.notes.split(".")[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-[linear-gradient(135deg,_var(--brand-graphite)_0%,_var(--brand-graphite-2)_100%)] p-8 md:flex-row">
          <div>
            <p className="mb-1 text-xl font-black text-[var(--brand-cream)]">Not sure which plan to get?</p>
            <p className="text-sm text-[color:rgba(245,235,221,0.72)]">Most people don&apos;t need to pay anything at first. Let me help you figure out what makes sense for your budget.</p>
          </div>
          <a
            href="https://calendly.com/1stbaseai/30min"
            className="shrink-0 rounded-full bg-[var(--brand-yellow)] px-7 py-3 text-sm font-bold text-[var(--brand-graphite)] transition-colors hover:bg-[color:var(--brand-yellow-deep)]"
          >
            Book a free call →
          </a>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
