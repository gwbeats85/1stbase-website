import Link from "next/link";
import { lessons, onlineResources, downloads, prompts } from "@/data/learn";
import { SiteNav } from "@/components/ui/site-nav";

export const metadata = {
  title: "Learn — 1st Base AI",
};

const levelColors: Record<string, string> = {
  "Start Here": "bg-orange-500 text-white",
  "Level 1": "bg-gray-900 text-white",
  "Level 2": "bg-blue-600 text-white",
  "Level 3": "bg-purple-600 text-white",
  "Level 4": "bg-green-600 text-white",
};

export default function LearnPage() {
  const levels = [
    { label: "Start Here", num: 0 },
    { label: "Level 1 — Foundations", num: 1 },
    { label: "Level 2 — Daily Use", num: 2 },
    { label: "Level 3 — Tools Deep Dive", num: 3 },
  ];

  return (
    <div className="min-h-screen bg-[#fdfcfb]">
      <SiteNav sticky activePage="learn" />

      <div className="max-w-5xl mx-auto px-8 md:px-10 py-14">

        {/* Hero */}
        <div className="mb-14">
          <span className="text-xs uppercase tracking-widest text-orange-500 font-semibold">Member Classroom</span>
          <h1 className="text-5xl font-black text-gray-900 mt-2 mb-3 tracking-tight leading-[0.95]">
            Your AI Learning Hub
          </h1>
          <p className="text-gray-500 text-lg max-w-xl">
            Lessons, resources, downloads, and prompts — everything you need to go from curious to confident.
          </p>
        </div>

        {/* Quick Nav */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
          {[
            {
              label: "Lessons",
              href: "#lessons",
              icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
            },
            {
              label: "Online Resources",
              href: "#resources",
              icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>,
            },
            {
              label: "Downloads",
              href: "#downloads",
              icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
            },
            {
              label: "One-Shot Prompts",
              href: "#prompts",
              icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>,
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex flex-col items-center gap-2 p-5 bg-white border border-gray-100 rounded-2xl hover:border-orange-200 hover:shadow-sm transition-all text-center"
            >
              <span className="text-orange-500">{item.icon}</span>
              <span className="text-sm font-bold text-gray-900">{item.label}</span>
            </a>
          ))}
        </div>

        {/* ── Lessons ── */}
        <section id="lessons" className="mb-16 scroll-mt-8">
          <div className="flex items-center gap-3 mb-7">
            <h2 className="text-2xl font-black text-gray-900">Lessons</h2>
            <span className="text-xs text-gray-400 font-medium">Go in order — each builds on the last</span>
          </div>

          <div className="space-y-10">
            {levels.map(({ label, num }) => {
              const group = lessons.filter((l) => l.level === num);
              if (!group.length) return null;
              return (
                <div key={label}>
                  <h3 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-4">{label}</h3>
                  <div className="space-y-3">
                    {group.map((lesson) => (
                      <div key={lesson.slug} className="relative">
                        {lesson.comingSoon ? (
                          <div className="flex items-center justify-between p-5 bg-white border border-gray-100 rounded-2xl opacity-60">
                            <div className="flex items-center gap-4">
                              <span className={`text-xs font-bold px-2.5 py-1 rounded-full shrink-0 ${levelColors[lesson.levelLabel] ?? "bg-gray-100 text-gray-600"}`}>
                                {lesson.levelLabel}
                              </span>
                              <div>
                                <p className="font-bold text-gray-900 text-sm">{lesson.title}</p>
                                <p className="text-gray-500 text-xs mt-0.5">{lesson.description}</p>
                              </div>
                            </div>
                            <span className="text-xs text-gray-400 shrink-0 ml-4">Coming soon</span>
                          </div>
                        ) : (
                          <Link
                            href={`/learn/${lesson.slug}`}
                            className="group flex items-center justify-between p-5 bg-white border border-gray-100 rounded-2xl hover:border-orange-200 hover:shadow-sm transition-all"
                          >
                            <div className="flex items-center gap-4">
                              <span className={`text-xs font-bold px-2.5 py-1 rounded-full shrink-0 ${levelColors[lesson.levelLabel] ?? "bg-gray-100 text-gray-600"}`}>
                                {lesson.levelLabel}
                              </span>
                              <div>
                                <p className="font-bold text-gray-900 text-sm group-hover:text-orange-500 transition-colors">{lesson.title}</p>
                                <p className="text-gray-500 text-xs mt-0.5">{lesson.description}</p>
                              </div>
                            </div>
                            <span className="text-sm text-orange-500 shrink-0 ml-4">→</span>
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Online Resources ── */}
        <section id="resources" className="mb-16 scroll-mt-8">
          <h2 className="text-2xl font-black text-gray-900 mb-7">Online Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {onlineResources.map((r) => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-2xl hover:border-orange-200 hover:shadow-sm transition-all"
              >
                {r.logo ? (
                  <img src={r.logo} alt={r.company} className="w-9 h-9 object-contain shrink-0 mt-0.5" />
                ) : (
                  <div className="w-9 h-9 rounded-lg bg-gray-900 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-white text-xs font-black">{r.company[0]}</span>
                  </div>
                )}
                <div>
                  <p className="font-bold text-gray-900 text-sm group-hover:text-orange-500 transition-colors">{r.name}</p>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">{r.description}</p>
                </div>
                <span className="text-orange-400 text-sm ml-auto shrink-0 mt-0.5">↗</span>
              </a>
            ))}
          </div>
        </section>

        {/* ── Downloads ── */}
        <section id="downloads" className="mb-16 scroll-mt-8">
          <h2 className="text-2xl font-black text-gray-900 mb-2">Downloads</h2>
          <p className="text-gray-500 text-sm mb-7">Free for members. Save these and use them whenever.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {downloads.map((d) => (
              <div
                key={d.name}
                className={`flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-2xl ${d.comingSoon ? "opacity-60" : "hover:border-orange-200 hover:shadow-sm cursor-pointer transition-all"}`}
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 text-sm">{d.name}</p>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">{d.description}</p>
                </div>
                <span className="text-xs text-gray-400 shrink-0 mt-1">{d.comingSoon ? "Soon" : "PDF"}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── One-Shot Prompts ── */}
        <section id="prompts" className="mb-16 scroll-mt-8">
          <h2 className="text-2xl font-black text-gray-900 mb-2">One-Shot Prompts</h2>
          <p className="text-gray-500 text-sm mb-7">Copy, fill in the brackets, paste into any AI. Done.</p>
          <div className="space-y-4">
            {prompts.map((p) => (
              <div key={p.title} className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-50">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-orange-500 bg-orange-50 px-2.5 py-1 rounded-full">{p.category}</span>
                    <h3 className="font-bold text-gray-900 text-sm">{p.title}</h3>
                  </div>
                </div>
                <div className="px-5 py-4">
                  <pre className="text-xs text-gray-600 font-mono leading-relaxed whitespace-pre-wrap bg-gray-50 rounded-xl p-4">{p.prompt}</pre>
                  {p.tip && (
                    <p className="text-xs text-gray-400 mt-3 flex gap-1.5 items-start">
                      <svg className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {p.tip}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Community ── */}
        <div className="p-8 bg-gray-900 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-black text-xl mb-1">Got a question? Join the community.</p>
            <p className="text-gray-400 text-sm">Ask anything in Discord — I&apos;m in there daily.</p>
          </div>
          <a
            href="https://discord.gg/1stbaseai"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#5865F2] hover:bg-[#4752c4] text-white font-bold px-7 py-3 rounded-full text-sm transition-colors"
          >
            Join Discord →
          </a>
        </div>

      </div>
    </div>
  );
}
