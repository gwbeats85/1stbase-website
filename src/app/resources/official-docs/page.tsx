import { LearningCenterNav } from "@/components/ui/learning-center-nav";
import { SiteFooter } from "@/components/ui/site-footer";
import { officialDocs } from "@/data/resources";

export const metadata = {
  title: "Official AI Docs Hub — 1st Base AI",
  description: "Curated links to the official documentation for every major AI provider — getting started guides, API docs, pricing, and status pages.",
};

export default function OfficialDocsPage() {
  return (
    <div className="min-h-screen bg-[#EAE9E0] flex flex-col">
      <LearningCenterNav />

      <main className="flex-1 max-w-5xl mx-auto px-6 md:px-10 py-12 w-full">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-widest text-[#c4622d] font-semibold">Official Docs</span>
          <h1 className="text-4xl md:text-5xl font-black text-[#1a3738] mt-2 mb-3 tracking-tight leading-[0.95]">
            Official Docs Hub
          </h1>
          <p className="text-gray-500 max-w-xl">
            Every major AI provider in one place. Getting started, API docs, pricing, status, and safety — all official sources, no guessing.
          </p>
        </div>

        {/* Provider Sections */}
        <div className="space-y-10">
          {officialDocs.map((doc) => (
            <div key={doc.provider} className="bg-white border border-gray-100 rounded-3xl overflow-hidden">
              {/* Provider Header */}
              <div className="flex items-center gap-4 px-7 py-5 border-b border-gray-50">
                {doc.logo ? (
                  <img src={doc.logo} alt={doc.provider} className="w-9 h-9 object-contain" />
                ) : (
                  <div className="w-9 h-9 rounded-xl bg-[#255253] flex items-center justify-center">
                    <span className="text-white font-black text-sm">{doc.provider[0]}</span>
                  </div>
                )}
                <div>
                  <h2 className="font-black text-[#1a3738] text-lg">{doc.provider}</h2>
                  <p className="text-gray-400 text-sm">{doc.description}</p>
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
                      className={`group flex items-start gap-3 px-7 py-5 hover:bg-orange-50 transition-colors ${
                        !isLast ? "border-b border-gray-50" : ""
                      } ${isOdd && !isLast ? "border-l border-gray-50" : ""}`}
                    >
                      <div className="flex-1">
                        <p className="font-semibold text-[#1a3738] text-sm group-hover:text-[#c4622d] transition-colors">
                          {section.label}
                        </p>
                        <p className="text-gray-400 text-xs mt-0.5">{section.description}</p>
                      </div>
                      <span className="text-gray-300 group-hover:text-[#c4622d] text-sm mt-0.5 transition-colors shrink-0">
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
        <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-dashed border-gray-200 text-center">
          <p className="text-gray-500 text-sm font-medium">More providers coming soon</p>
          <p className="text-gray-400 text-xs mt-1">xAI/Grok, Microsoft Copilot, Mistral, Meta Llama</p>
        </div>

        {/* CTA */}
        <div className="mt-10 p-8 bg-[#255253] rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-black text-xl mb-1">Overwhelmed by docs?</p>
            <p className="text-gray-400 text-sm">Book a free call — I&apos;ll point you to exactly what you need to read.</p>
          </div>
          <a
            href="https://calendly.com/1stbaseai/30min"
            className="shrink-0 bg-[#c4622d] hover:bg-[#a8521f] text-white font-bold px-7 py-3 rounded-full text-sm transition-colors"
          >
            Book a call →
          </a>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
