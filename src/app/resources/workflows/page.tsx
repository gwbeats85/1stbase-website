import { LearningCenterNav } from "@/components/ui/learning-center-nav";
import { SiteFooter } from "@/components/ui/site-footer";
import { workflows } from "@/data/resources";

export const metadata = {
  title: "AI Workflows — 1st Base AI",
  description: "Persona-based AI tool stacks with setup order, monthly cost estimates, and common mistakes to avoid.",
};

const difficultyColors = {
  beginner: "bg-green-50 text-green-700 border-green-100",
  intermediate: "bg-blue-50 text-blue-700 border-blue-100",
  advanced: "bg-purple-50 text-purple-700 border-purple-100",
};

const difficultyLabels = {
  beginner: "Beginner-friendly",
  intermediate: "Some experience needed",
  advanced: "Technical background",
};

export default function WorkflowsPage() {
  return (
    <div className="min-h-screen bg-[#fdfcfb] flex flex-col">
      <LearningCenterNav />

      <main className="flex-1 max-w-5xl mx-auto px-6 md:px-10 py-12 w-full">
        <div className="mb-12">
          <span className="text-xs uppercase tracking-widest text-orange-500 font-semibold">Workflows</span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-3 tracking-tight leading-[0.95]">
            AI Workflows
          </h1>
          <p className="text-gray-500 max-w-xl">
            Not sure what tools to combine and in what order? These persona-based stacks give you a complete setup — tools, order, costs, and what to avoid.
          </p>
        </div>

        <div className="space-y-10">
          {workflows.map((workflow) => (
            <div key={workflow.id} className="bg-white border border-gray-100 rounded-3xl overflow-hidden">
              {/* Header */}
              <div className="px-8 pt-8 pb-6 border-b border-gray-50">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                      difficultyColors[workflow.difficulty]
                    }`}
                  >
                    {difficultyLabels[workflow.difficulty]}
                  </span>
                  <span className="text-xs text-gray-400">{workflow.monthly_cost_estimate}</span>
                </div>
                <h2 className="text-2xl font-black text-gray-900 mb-2">{workflow.title}</h2>
                <p className="text-sm text-orange-500 font-medium mb-3">For: {workflow.persona}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{workflow.summary}</p>
              </div>

              <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Tools */}
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-4">Your stack</h3>
                  <div className="space-y-3">
                    {workflow.tools.map((tool, i) => (
                      <div key={tool.name} className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-orange-50 text-orange-500 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">{tool.name}</p>
                          <p className="text-gray-500 text-xs mt-0.5">{tool.role}</p>
                          <p className="text-xs text-gray-300 mt-0.5">{tool.cost}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Setup order */}
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-4">Setup order</h3>
                  <div className="space-y-3">
                    {workflow.setup_order.map((step, i) => (
                      <div key={i} className="flex gap-3 text-sm text-gray-600">
                        <span className="text-orange-400 font-bold shrink-0">→</span>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Common mistakes */}
              <div className="px-8 pb-8">
                <h3 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-4">Common mistakes to avoid</h3>
                <div className="space-y-2">
                  {workflow.common_mistakes.map((mistake, i) => (
                    <div key={i} className="flex gap-3 text-sm text-gray-600 bg-red-50 rounded-xl px-4 py-3">
                      <span className="text-red-400 shrink-0 font-bold">⚠</span>
                      {mistake}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More coming */}
        <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-dashed border-gray-200 text-center">
          <p className="text-gray-500 text-sm font-medium">More workflows coming soon</p>
          <p className="text-gray-400 text-xs mt-1">Student Stack · Small Business · Real Estate · Healthcare · Teachers</p>
        </div>

        {/* CTA */}
        <div className="mt-10 p-8 bg-gray-900 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-black text-xl mb-1">Want a custom stack for your situation?</p>
            <p className="text-gray-400 text-sm">30-minute call — I&apos;ll build your personalized AI toolkit.</p>
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
