import { LearningCenterNav } from "@/components/ui/learning-center-nav";
import { SiteFooter } from "@/components/ui/site-footer";
import { pricingData } from "@/data/resources";

export const metadata = {
  title: "AI Pricing Guide — 1st Base AI",
  description: "Free vs paid breakdowns for every major AI tool. Know exactly what you get before you subscribe.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#fdfcfb] flex flex-col">
      <LearningCenterNav />

      <main className="flex-1 max-w-6xl mx-auto px-6 md:px-10 py-12 w-full">
        <div className="mb-12">
          <span className="text-xs uppercase tracking-widest text-orange-500 font-semibold">Pricing</span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-3 tracking-tight leading-[0.95]">
            AI Pricing Guide
          </h1>
          <p className="text-gray-500 max-w-xl">
            No surprises. Here&apos;s exactly what you get on every plan for the tools that matter — so you can make an informed decision.
          </p>
        </div>

        {/* Quick summary - "start free" note */}
        <div className="mb-8 p-5 bg-green-50 border border-green-100 rounded-2xl flex items-center gap-4">
          <span className="text-2xl shrink-0">✅</span>
          <div>
            <p className="font-black text-green-900 text-sm">Start free on all four tools</p>
            <p className="text-green-700 text-xs mt-0.5">ChatGPT, Claude, Gemini, and Perplexity all have free tiers. Start there. Upgrade only when you hit the limits.</p>
          </div>
        </div>

        {/* Tool Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {pricingData.map((row) => (
            <div key={row.tool} className="bg-white border border-gray-100 rounded-3xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-4 px-7 py-6 border-b border-gray-50">
                {row.logo ? (
                  <img src={row.logo} alt={row.tool} className="w-9 h-9 object-contain" />
                ) : (
                  <div className="w-9 h-9 rounded-xl bg-gray-900 flex items-center justify-center">
                    <span className="text-white font-black text-sm">{row.tool[0]}</span>
                  </div>
                )}
                <div>
                  <h2 className="font-black text-gray-900">{row.tool}</h2>
                  <p className="text-xs text-gray-400">{row.provider}</p>
                </div>
                {row.free_tier && (
                  <span className="ml-auto text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    Free tier
                  </span>
                )}
              </div>

              {/* Tiers */}
              <div className="grid grid-cols-2 divide-x divide-gray-50">
                {/* Free */}
                <div className="p-5">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Free</p>
                  <p className="text-2xl font-black text-gray-900 mb-3">$0</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{row.free_tier_limits}</p>
                </div>

                {/* Pro */}
                <div className="p-5">
                  <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-3">Pro</p>
                  <p className="text-2xl font-black text-gray-900 mb-3">{row.pro_price}</p>
                  <ul className="space-y-1.5">
                    {row.pro_features.map((feature) => (
                      <li key={feature} className="flex gap-2 text-xs text-gray-600">
                        <span className="text-orange-400 font-bold shrink-0">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom details */}
              <div className="px-7 py-4 border-t border-gray-50 bg-gray-50/50">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Team plan</p>
                    <p className="text-xs text-gray-600">{row.team_price}</p>
                  </div>
                  {row.api_available && (
                    <div>
                      <p className="text-xs text-gray-400 font-medium">API</p>
                      <p className="text-xs text-gray-600">{row.api_pricing}</p>
                    </div>
                  )}
                </div>
                {row.notes && (
                  <p className="text-xs text-gray-400 mt-3 pt-3 border-t border-gray-100">{row.notes}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Full comparison table - desktop */}
        <div className="mb-12">
          <h2 className="text-xl font-black text-gray-900 mb-4">Quick comparison</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100">
            <table className="w-full text-sm bg-white">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-6 py-4 font-bold text-gray-900">Tool</th>
                  <th className="text-center px-6 py-4 font-bold text-gray-900">Free Tier</th>
                  <th className="text-center px-6 py-4 font-bold text-gray-900">Pro Price</th>
                  <th className="text-center px-6 py-4 font-bold text-gray-900">API</th>
                  <th className="text-left px-6 py-4 font-bold text-gray-900">Best for</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((row, i) => (
                  <tr key={row.tool} className={`border-b border-gray-50 hover:bg-orange-50/30 transition-colors ${i === pricingData.length - 1 ? "border-0" : ""}`}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {row.logo ? (
                          <img src={row.logo} alt={row.tool} className="w-6 h-6 object-contain" />
                        ) : (
                          <div className="w-6 h-6 rounded bg-gray-900 flex items-center justify-center">
                            <span className="text-white text-xs font-black">{row.tool[0]}</span>
                          </div>
                        )}
                        <span className="font-semibold text-gray-900">{row.tool}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.free_tier ? (
                        <span className="text-green-500 font-bold">✓</span>
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-gray-900">{row.pro_price}</td>
                    <td className="px-6 py-4 text-center">
                      {row.api_available ? (
                        <span className="text-green-500 font-bold">✓</span>
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-gray-500 text-xs">{row.notes.split(".")[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 bg-gray-900 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-black text-xl mb-1">Not sure which plan to get?</p>
            <p className="text-gray-400 text-sm">Most people don&apos;t need to pay anything at first. Let me help you figure out what makes sense for your budget.</p>
          </div>
          <a
            href="https://calendly.com/1stbaseai/30min"
            className="shrink-0 bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3 rounded-full text-sm transition-colors"
          >
            Book a free call →
          </a>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
