import Link from "next/link";
import { lessons, onlineResources, downloads, prompts } from "@/data/learn";
import { SiteNav } from "@/components/ui/site-nav";

export const metadata = {
  title: "Learn — 1st Base AI",
};

const levelColors: Record<string, string> = {
  "Start Here": "bg-[var(--brand-yellow)] text-[var(--brand-graphite)]",
  "Level 1": "bg-[var(--brand-graphite)] text-[var(--brand-cream)]",
  "Level 2": "bg-[var(--brand-blue)] text-[var(--brand-cream)]",
  "Level 3": "border border-[color:var(--brand-line)] bg-[var(--brand-cream-2)] text-[var(--brand-graphite)]",
  "Level 4": "bg-[color:rgba(59,130,246,0.12)] text-[var(--brand-blue)]",
};

export default function LearnPage() {
  const levels = [
    { label: "Start Here", num: 0 },
    { label: "Level 1 — Foundations", num: 1 },
    { label: "Level 2 — Daily Use", num: 2 },
    { label: "Level 3 — Tools Deep Dive", num: 3 },
  ];

  return (
    <div className="min-h-screen bg-[var(--brand-cream)]">
      <SiteNav sticky activePage="learn" />

      <div className="max-w-5xl mx-auto px-8 md:px-10 py-14">

        {/* Hero */}
        <div className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-blue)]">Member Classroom</span>
          <h1 className="mt-2 mb-3 text-5xl font-black leading-[0.95] tracking-tight text-[var(--brand-graphite)]">
            Your AI Learning Hub
          </h1>
          <p className="max-w-xl text-lg text-[color:var(--brand-muted)]">
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
              className="flex flex-col items-center gap-2 rounded-2xl border border-[color:var(--brand-line)] bg-[var(--brand-cream-2)] p-5 text-center transition-all hover:border-[color:var(--brand-line-strong)] hover:shadow-[0_18px_42px_-30px_rgba(21,21,21,0.12)]"
            >
              <span className="text-[var(--brand-yellow)]">{item.icon}</span>
              <span className="text-sm font-bold text-[var(--brand-graphite)]">{item.label}</span>
            </a>
          ))}
        </div>

        {/* ── Lessons ── */}
        <section id="lessons" className="mb-16 scroll-mt-8">
          <div className="flex items-center gap-3 mb-7">
            <h2 className="text-2xl font-black text-[var(--brand-graphite)]">Lessons</h2>
            <span className="text-xs font-medium text-[color:var(--brand-muted)]">Go in order — each builds on the last</span>
          </div>

          <div className="space-y-10">
            {levels.map(({ label, num }) => {
              const group = lessons.filter((l) => l.level === num);
              if (!group.length) return null;
              return (
                <div key={label}>
                  <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[color:var(--brand-muted)]">{label}</h3>
                  <div className="space-y-3">
                    {group.map((lesson) => (
                      <div key={lesson.slug} className="relative">
                        {lesson.comingSoon ? (
                          <div className="flex items-center justify-between rounded-2xl border border-[color:var(--brand-line)] bg-[var(--brand-cream-2)] p-5 opacity-60">
                            <div className="flex items-center gap-4">
                              <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold ${levelColors[lesson.levelLabel] ?? "border border-[color:var(--brand-line)] bg-[var(--brand-cream)] text-[color:var(--brand-muted)]"}`}>
                                {lesson.levelLabel}
                              </span>
                              <div>
                                <p className="text-sm font-bold text-[var(--brand-graphite)]">{lesson.title}</p>
                                <p className="mt-0.5 text-xs text-[color:var(--brand-muted)]">{lesson.description}</p>
                              </div>
                            </div>
                            <span className="ml-4 shrink-0 text-xs text-[color:var(--brand-muted)]">Coming soon</span>
                          </div>
                        ) : (
                          <Link
                            href={`/learn/${lesson.slug}`}
                            className="group flex items-center justify-between rounded-2xl border border-[color:var(--brand-line)] bg-[var(--brand-cream-2)] p-5 transition-all hover:border-[color:var(--brand-line-strong)] hover:shadow-[0_18px_42px_-30px_rgba(21,21,21,0.12)]"
                          >
                            <div className="flex items-center gap-4">
                              <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold ${levelColors[lesson.levelLabel] ?? "border border-[color:var(--brand-line)] bg-[var(--brand-cream)] text-[color:var(--brand-muted)]"}`}>
                                {lesson.levelLabel}
                              </span>
                              <div>
                                <p className="text-sm font-bold text-[var(--brand-graphite)] transition-colors group-hover:text-[var(--brand-blue)]">{lesson.title}</p>
                                <p className="mt-0.5 text-xs text-[color:var(--brand-muted)]">{lesson.description}</p>
                              </div>
                            </div>
                            <span className="ml-4 shrink-0 text-sm text-[var(--brand-blue)]">→</span>
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
          <h2 className="mb-7 text-2xl font-black text-[var(--brand-graphite)]">Online Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {onlineResources.map((r) => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-2xl border border-[color:var(--brand-line)] bg-[var(--brand-cream-2)] p-5 transition-all hover:border-[color:var(--brand-line-strong)] hover:shadow-[0_18px_42px_-30px_rgba(21,21,21,0.12)]"
              >
                {r.logo ? (
                  <img src={r.logo} alt={r.company} className="w-9 h-9 object-contain shrink-0 mt-0.5" />
                ) : (
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-graphite)]">
                    <span className="text-xs font-black text-[var(--brand-cream)]">{r.company[0]}</span>
                  </div>
                )}
                <div>
                  <p className="text-sm font-bold text-[var(--brand-graphite)] transition-colors group-hover:text-[var(--brand-blue)]">{r.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[color:var(--brand-muted)]">{r.description}</p>
                </div>
                <span className="ml-auto mt-0.5 shrink-0 text-sm text-[var(--brand-blue)]">↗</span>
              </a>
            ))}
          </div>
        </section>

        {/* ── Downloads ── */}
        <section id="downloads" className="mb-16 scroll-mt-8">
          <h2 className="mb-2 text-2xl font-black text-[var(--brand-graphite)]">Downloads</h2>
          <p className="mb-7 text-sm text-[color:var(--brand-muted)]">Free for members. Save these and use them whenever.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {downloads.map((d) => (
              <div
                key={d.name}
                className={`flex items-start gap-4 rounded-2xl border border-[color:var(--brand-line)] bg-[var(--brand-cream-2)] p-5 ${d.comingSoon ? "opacity-60" : "cursor-pointer transition-all hover:border-[color:var(--brand-line-strong)] hover:shadow-[0_18px_42px_-30px_rgba(21,21,21,0.12)]"}`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[color:rgba(255,228,94,0.22)]">
                  <svg className="h-5 w-5 text-[var(--brand-yellow-deep)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-[var(--brand-graphite)]">{d.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[color:var(--brand-muted)]">{d.description}</p>
                </div>
                <span className="mt-1 shrink-0 text-xs text-[color:var(--brand-muted)]">{d.comingSoon ? "Soon" : "PDF"}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── One-Shot Prompts ── */}
        <section id="prompts" className="mb-16 scroll-mt-8">
          <h2 className="mb-2 text-2xl font-black text-[var(--brand-graphite)]">One-Shot Prompts</h2>
          <p className="mb-7 text-sm text-[color:var(--brand-muted)]">Copy, fill in the brackets, paste into any AI. Done.</p>
          <div className="space-y-4">
            {prompts.map((p) => (
              <div key={p.title} className="overflow-hidden rounded-2xl border border-[color:var(--brand-line)] bg-[var(--brand-cream-2)]">
                <div className="flex items-center justify-between border-b border-[color:var(--brand-line)] px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-[color:rgba(59,130,246,0.12)] px-2.5 py-1 text-xs font-semibold text-[var(--brand-blue)]">{p.category}</span>
                    <h3 className="text-sm font-bold text-[var(--brand-graphite)]">{p.title}</h3>
                  </div>
                </div>
                <div className="px-5 py-4">
                  <pre className="whitespace-pre-wrap rounded-xl border border-[color:var(--brand-line)] bg-[var(--brand-cream)] p-4 font-mono text-xs leading-relaxed text-[color:var(--brand-muted)]">{p.prompt}</pre>
                  {p.tip && (
                    <p className="mt-3 flex items-start gap-1.5 text-xs text-[color:var(--brand-muted)]">
                      <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--brand-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* ── Newsletter ── */}
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-[var(--brand-graphite)] p-8 md:flex-row">
          <div>
            <p className="mb-1 text-xl font-black text-[var(--brand-cream)]">Stay sharp. One email a week.</p>
            <p className="text-sm text-[color:rgba(245,235,221,0.68)]">The AI newsletter that doesn&apos;t waste your time. Free, always.</p>
          </div>
          <a
            href="https://1stbase.beehiiv.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-[var(--brand-yellow)] px-7 py-3 text-sm font-bold text-[var(--brand-graphite)] transition-colors hover:bg-[var(--brand-yellow-deep)]"
          >
            Subscribe Free →
          </a>
        </div>

      </div>
    </div>
  );
}
