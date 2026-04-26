import Image from "next/image";
import { LearningCenterNav } from "@/components/ui/learning-center-nav";
import { SiteFooter } from "@/components/ui/site-footer";
import { officialDocs } from "@/data/resources";

export const metadata = {
  title: "Official AI Docs Hub — 1st Base AI",
  description: "Curated links to the official documentation for every major AI provider — getting started guides, API docs, pricing, and status pages.",
};

export default function OfficialDocsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--brand-canvas)]">
      <LearningCenterNav />

      <main className="flex-1 max-w-5xl mx-auto px-6 md:px-10 py-12 w-full">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--brand-blue)]">Official Docs</span>
          <h1 className="mt-2 mb-3 text-4xl font-black leading-[0.95] tracking-tight text-[var(--brand-graphite)] md:text-5xl">
            Official Docs Hub
          </h1>
          <p className="max-w-xl text-[color:var(--brand-muted)]">
            Every major AI provider in one place. Getting started, API docs, pricing, status, and safety — all official sources, no guessing.
          </p>
        </div>

        {/* Provider Sections */}
        <div className="space-y-10">
          {officialDocs.map((doc) => (
            <div key={doc.provider} className="overflow-hidden rounded-3xl border border-[color:var(--brand-line)] bg-[var(--brand-surface)]">
              {/* Provider Header */}
              <div className="flex items-center gap-4 border-b border-[color:var(--brand-line)] px-7 py-5">
                {doc.logo ? (
                  <Image
                    src={doc.logo}
                    alt={doc.provider}
                    width={36}
                    height={36}
                    className="h-9 w-9 object-contain"
                  />
                ) : (
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--brand-graphite)]">
                    <span className="text-sm font-black text-[var(--brand-cream)]">{doc.provider[0]}</span>
                  </div>
                )}
                <div>
                  <h2 className="text-lg font-black text-[var(--brand-graphite)]">{doc.provider}</h2>
                  <p className="text-sm text-[color:var(--brand-muted)]">{doc.description}</p>
                </div>
              </div>

              {/* Doc Links Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {doc.sections.map((section, i) => {
                  const isLast = i === doc.sections.length - 1;
                  const isOdd = (i % 2 === 1);
                  return (
                    <a
                      key={section.label}
                      href={section.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-start gap-3 px-7 py-5 transition-colors hover:bg-[color:rgba(59,130,246,0.06)] ${
                        !isLast ? "border-b border-[color:var(--brand-line)]" : ""
                      } ${isOdd && !isLast ? "border-l border-[color:var(--brand-line)]" : ""}`}
                    >
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-[var(--brand-graphite)] transition-colors group-hover:text-[var(--brand-blue)]">
                          {section.label}
                        </p>
                        <p className="mt-0.5 text-xs text-[color:var(--brand-muted)]">{section.description}</p>
                      </div>
                      <span className="mt-0.5 shrink-0 text-sm text-[color:rgba(21,21,21,0.32)] transition-colors group-hover:text-[var(--brand-blue)]">
                        ↗
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mt-8 rounded-2xl border border-dashed border-[color:var(--brand-line)] bg-[color:rgba(21,21,21,0.03)] p-6 text-center">
          <p className="text-sm font-medium text-[var(--brand-graphite)]">More providers coming soon</p>
          <p className="mt-1 text-xs text-[color:var(--brand-muted)]">xAI/Grok, Microsoft Copilot, Mistral, Meta Llama</p>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-3xl bg-[linear-gradient(135deg,_var(--brand-graphite)_0%,_var(--brand-graphite-2)_100%)] p-8 md:flex-row">
          <div>
            <p className="mb-1 text-xl font-black text-[var(--brand-cream)]">Overwhelmed by docs?</p>
            <p className="text-sm text-[color:rgba(245,235,221,0.72)]">Book a free call — I&apos;ll point you to exactly what you need to read.</p>
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
