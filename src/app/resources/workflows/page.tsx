import { LearningCenterNav } from "@/components/ui/learning-center-nav";
import { SiteFooter } from "@/components/ui/site-footer";
import { workflows } from "@/data/resources";

export const metadata = {
  title: "AI Workflows — 1st Base AI",
  description: "Persona-based AI tool stacks with setup order, monthly cost estimates, and common mistakes to avoid.",
};

const difficultyColors = {
  beginner: "border-[color:rgba(255,228,94,0.24)] bg-[color:rgba(255,228,94,0.16)] text-[var(--brand-graphite)]",
  intermediate: "border-[color:rgba(59,130,246,0.2)] bg-[color:rgba(59,130,246,0.1)] text-[var(--brand-blue)]",
  advanced: "border-[color:var(--brand-line)] bg-[color:rgba(21,21,21,0.05)] text-[var(--brand-graphite)]",
};

const difficultyLabels = {
  beginner: "Beginner-friendly",
  intermediate: "Some experience needed",
  advanced: "Technical background",
};

export default function WorkflowsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--brand-canvas)]">
      <LearningCenterNav />

      <main className="flex-1 max-w-5xl mx-auto px-6 md:px-10 py-12 w-full">
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--brand-blue)]">Workflows</span>
          <h1 className="mt-2 mb-3 text-4xl font-black leading-[0.95] tracking-tight text-[var(--brand-graphite)] md:text-5xl">
            AI Workflows
          </h1>
          <p className="max-w-xl text-[color:var(--brand-muted)]">
            Not sure what tools to combine and in what order? These persona-based stacks give you a complete setup — tools, order, costs, and what to avoid.
          </p>
        </div>

        <div className="space-y-10">
          {workflows.map((workflow) => (
            <div key={workflow.id} className="overflow-hidden rounded-3xl border border-[color:var(--brand-line)] bg-[var(--brand-surface)]">
              {/* Header */}
              <div className="border-b border-[color:var(--brand-line)] px-8 pt-8 pb-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                      difficultyColors[workflow.difficulty]
                    }`}
                  >
                    {difficultyLabels[workflow.difficulty]}
                  </span>
                  <span className="text-xs text-[color:var(--brand-muted)]">{workflow.monthly_cost_estimate}</span>
                </div>
                <h2 className="mb-2 text-2xl font-black text-[var(--brand-graphite)]">{workflow.title}</h2>
                <p className="mb-3 text-sm font-medium text-[var(--brand-blue)]">For: {workflow.persona}</p>
                <p className="text-sm leading-relaxed text-[color:var(--brand-muted)]">{workflow.summary}</p>
              </div>

              <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Tools */}
                <div>
                  <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[color:var(--brand-muted)]">Your stack</h3>
                  <div className="space-y-3">
                    {workflow.tools.map((tool, i) => (
                      <div key={tool.name} className="flex gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:rgba(59,130,246,0.1)] text-xs font-bold text-[var(--brand-blue)]">
                          {i + 1}
                        </span>
                        <div>
                          <p className="text-sm font-bold text-[var(--brand-graphite)]">{tool.name}</p>
                          <p className="mt-0.5 text-xs text-[color:var(--brand-muted)]">{tool.role}</p>
                          <p className="mt-0.5 text-xs text-[color:rgba(21,21,21,0.32)]">{tool.cost}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Setup order */}
                <div>
                  <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[color:var(--brand-muted)]">Setup order</h3>
                  <div className="space-y-3">
                    {workflow.setup_order.map((step, i) => (
                      <div key={i} className="flex gap-3 text-sm text-[var(--brand-graphite)]">
                        <span className="shrink-0 font-bold text-[var(--brand-blue)]">→</span>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Common mistakes */}
              <div className="px-8 pb-8">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[color:var(--brand-muted)]">Common mistakes to avoid</h3>
                <div className="space-y-2">
                  {workflow.common_mistakes.map((mistake, i) => (
                    <div key={i} className="flex gap-3 rounded-xl bg-[color:rgba(255,228,94,0.16)] px-4 py-3 text-sm text-[var(--brand-graphite)]">
                      <span className="shrink-0 font-bold text-[var(--brand-blue)]">!</span>
                      {mistake}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More coming */}
        <div className="mt-8 rounded-2xl border border-dashed border-[color:var(--brand-line)] bg-[color:rgba(21,21,21,0.03)] p-6 text-center">
          <p className="text-sm font-medium text-[var(--brand-graphite)]">More workflows coming soon</p>
          <p className="mt-1 text-xs text-[color:var(--brand-muted)]">Student Stack · Small Business · Real Estate · Healthcare · Teachers</p>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-3xl bg-[linear-gradient(135deg,_var(--brand-graphite)_0%,_var(--brand-graphite-2)_100%)] p-8 md:flex-row">
          <div>
            <p className="mb-1 text-xl font-black text-[var(--brand-cream)]">Want a custom stack for your situation?</p>
            <p className="text-sm text-[color:rgba(245,235,221,0.72)]">30-minute call — I&apos;ll build your personalized AI toolkit.</p>
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
