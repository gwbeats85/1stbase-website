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
          <span className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--brand-coral)]">Pricing</span>
          <h1 className="mb-3 mt-2 text-4xl font-black leading-[0.95] tracking-tight text-[var(--brand-teal)] md:text-5xl">
            AI Pricing Guide
          </h1>
          <p className="max-w-xl text-[color:var(--brand-muted)]">
            No surprises. Here&apos;s exactly what you get on every plan for the tools that matter — so you can make an informed decision.
          </p>
        </div>

        {/* Quick summary - "start free" note */}
        <div className="mb-8 flex items-center gap-4 rounded-[1.6rem] border border-[color:rgb(37_82_83_/_0.12)] bg-[color:rgb(37_82_83_/_0.08)] p-5">
          <span className="text-2xl shrink-0">✅</span>
          <div>
            <p className="text-sm font-black text-[var(--brand-teal)]">Start free on all four tools</p>
            <p className="mt-0.5 text-xs text-[color:var(--brand-muted)]">ChatGPT, Claude, Gemini, and Perplexity all have free tiers. Start there. Upgrade only when you hit the limits.</p>
          </div>
        </div>

        {/* Tool Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {pricingData.map((row) => (
            <div key={row.tool} className="overflow-hidden rounded-[2rem] border border-[color:var(--brand-line)] bg-[var(--brand-surface)]">
              {/* Header */}
              <div className="flex items-center gap-4 border-b border-[color:rgb(36_82_83_/_0.08)] px-7 py-6">
                {row.logo ? (
                  <img src={row.logo} alt={row.tool} className="w-9 h-9 object-contain" />
                ) : (
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--brand-teal)]">
                    <span className="text-sm font-black text-[var(--brand-surface)]">{row.tool[0]}</span>
                  </div>
                )}
                <div>
                  <h2 className="font-black text-[var(--brand-teal)]">{row.tool}</h2>
                  <p className="text-xs text-[color:var(--brand-muted)]">{row.provider}</p>
                </div>
                {row.free_tier && (
                  <span className="ml-auto rounded-full bg-[color:rgb(37_82_83_/_0.08)] px-3 py-1 text-xs font-semibold text-[var(--brand-teal)]">
                    Free tier
                  </span>
                )}
              </div>

              {/* Tiers */}
              <div className="grid grid-cols-2 divide-x divide-[color:rgb(36_82_83_/_0.08)]">
                {/* Free */}
                <div className="p-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[color:var(--brand-muted)]">Free</p>
                  <p className="mb-3 text-2xl font-black text-[var(--brand-teal)]">$0</p>
                  <p className="text-xs leading-relaxed text-[color:var(--brand-muted)]">{row.free_tier_limits}</p>
                </div>

                {/* Pro */}
                <div className="p-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--brand-coral)]">Pro</p>
                  <p className="mb-3 text-2xl font-black text-[var(--brand-teal)]">{row.pro_price}</p>
                  <ul className="space-y-1.5">
                    {row.pro_features.map((feature) => (
                      <li key={feature} className="flex gap-2 text-xs text-[color:var(--brand-muted)]">
                        <span className="shrink-0 font-bold text-[var(--brand-gold)]">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom details */}
              <div className="bg-[color:rgb(36_82_83_/_0.04)] px-7 py-4">
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
                  <p className="mt-3 border-t border-[color:rgb(36_82_83_/_0.08)] pt-3 text-xs text-[color:var(--brand-muted)]">{row.notes}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Full comparison table - desktop */}
        <div className="mb-12">
          <h2 className="mb-4 text-xl font-black text-[var(--brand-teal)]">Quick comparison</h2>
          <div className="overflow-x-auto rounded-[1.6rem] border border-[color:var(--brand-line)]">
            <table className="w-full bg-[var(--brand-surface)] text-sm">
              <thead>
                <tr className="border-b border-[color:var(--brand-line)]">
                  <th className="px-6 py-4 text-left font-bold text-[var(--brand-teal)]">Tool</th>
                  <th className="px-6 py-4 text-center font-bold text-[var(--brand-teal)]">Free Tier</th>
                  <th className="px-6 py-4 text-center font-bold text-[var(--brand-teal)]">Pro Price</th>
                  <th className="px-6 py-4 text-center font-bold text-[var(--brand-teal)]">API</th>
                  <th className="px-6 py-4 text-left font-bold text-[var(--brand-teal)]">Best for</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((row, i) => (
                  <tr key={row.tool} className={`border-b border-[color:rgb(36_82_83_/_0.08)] transition-colors hover:bg-[color:rgb(243_193_16_/_0.06)] ${i === pricingData.length - 1 ? "border-0" : ""}`}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {row.logo ? (
                          <img src={row.logo} alt={row.tool} className="w-6 h-6 object-contain" />
                        ) : (
                          <div className="flex h-6 w-6 items-center justify-center rounded bg-[var(--brand-teal)]">
                            <span className="text-xs font-black text-[var(--brand-surface)]">{row.tool[0]}</span>
                          </div>
                        )}
                        <span className="font-semibold text-[var(--brand-teal)]">{row.tool}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.free_tier ? (
                        <span className="font-bold text-[var(--brand-teal)]">✓</span>
                      ) : (
                        <span className="text-[color:rgb(33_71_72_/_0.28)]">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-[var(--brand-teal)]">{row.pro_price}</td>
                    <td className="px-6 py-4 text-center">
                      {row.api_available ? (
                        <span className="font-bold text-[var(--brand-teal)]">✓</span>
                      ) : (
                        <span className="text-[color:rgb(33_71_72_/_0.28)]">—</span>
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
        <div className="flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-[linear-gradient(135deg,_var(--brand-teal)_0%,_var(--brand-teal-deep)_100%)] p-8 md:flex-row">
          <div>
            <p className="mb-1 text-xl font-black text-[var(--brand-surface)]">Not sure which plan to get?</p>
            <p className="text-sm text-[color:rgb(255_253_247_/_0.66)]">Most people don&apos;t need to pay anything at first. Let me help you figure out what makes sense for your budget.</p>
          </div>
          <a
            href="https://calendly.com/1stbaseai/30min"
            className="shrink-0 rounded-full bg-[var(--brand-gold)] px-7 py-3 text-sm font-bold text-[var(--brand-teal-deep)] transition-colors hover:bg-[var(--brand-amber)]"
          >
            Book a free call →
          </a>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
