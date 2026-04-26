import Link from "next/link";
import { LogoMark } from "@/components/ui/logo-mark";

export const metadata = {
  title: "Welcome to 1st Base — Start Here",
};

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-[var(--brand-cream)]">
      {/* Nav */}
      <div className="flex items-center justify-between border-b border-[color:var(--brand-line)] px-8 py-7 md:px-10">
        <Link href="/" className="flex items-center gap-2.5">
          <LogoMark size={32} />
          <span className="text-xl font-bold tracking-tight text-[var(--brand-graphite)]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            1st Base <span className="text-[var(--brand-blue)]">AI</span>
          </span>
        </Link>
        <Link href="/learn" className="text-sm font-medium text-[color:var(--brand-muted)] transition-colors hover:text-[var(--brand-graphite)]">
          ← Back to Classroom
        </Link>
      </div>

      <article className="max-w-2xl mx-auto px-8 md:px-10 py-14">

        {/* Badge */}
        <span className="mb-6 inline-block rounded-full bg-[color:rgba(255,228,94,0.22)] px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--brand-graphite)]">
          Start Here
        </span>

        <h1 className="mb-5 text-4xl font-black leading-[0.95] tracking-tight text-[var(--brand-graphite)] md:text-5xl">
          Welcome to 1st Base
        </h1>

        <div className="mb-10 flex items-center gap-3 text-sm text-[color:var(--brand-muted)]">
          <span>Will Sanchez</span>
          <span>·</span>
          <span>April 2026</span>
          <span>·</span>
          <span>5 min read</span>
        </div>

        <div className="mb-10 border-t border-[color:var(--brand-line)]" />

        {/* Content */}
        <div className="space-y-6 text-lg leading-relaxed text-[color:var(--brand-muted)]">

          <p>
            Hey — glad you&apos;re here. I&apos;m Will, and I built 1st Base for one reason: I kept watching smart, motivated people get stuck with AI not because the tools are too complicated, but because nobody showed them how to actually use them.
          </p>

          <p>
            This isn&apos;t a course where you watch 40 hours of video and hope something sticks. This is a classroom built around one idea — solve a real problem in your first session. No fluff. No homework. Just tools you can actually use tomorrow.
          </p>

          <h2 className="mt-8 mb-2 text-xl font-black text-[var(--brand-graphite)]">What&apos;s in here</h2>

          <p>The classroom is organized into four sections:</p>

          <ul className="space-y-3 mt-2">
            {[
              { label: "Lessons", desc: "Step-by-step walkthroughs from foundations to full automation. Go in order — each one builds on the last." },
              { label: "Online Resources", desc: "The best free learning material straight from the AI companies themselves — Anthropic, Google, OpenAI, and more." },
              { label: "Downloads", desc: "Cheat sheets, prompt packs, and guides you can save and reference anytime. Free for members." },
              { label: "One-Shot Prompts", desc: "Copy-paste prompts for the most common tasks. Fill in the brackets, paste into any AI, get results." },
            ].map(({ label, desc }) => (
              <li key={label} className="flex gap-3">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-yellow-deep)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong className="text-[var(--brand-graphite)]">{label}</strong> — {desc}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-8 mb-2 text-xl font-black text-[var(--brand-graphite)]">Where to start</h2>

          <p>
            If you&apos;re brand new to AI, start with <strong className="text-[var(--brand-graphite)]">Level 1 — Foundations</strong>. The first lesson walks you through setting up your accounts for ChatGPT, Claude, and Gemini in about 10 minutes. From there, every lesson is short, practical, and built around a specific thing you can do or build.
          </p>

          <p>
            If you already use AI but want to go deeper, skip ahead to Level 2 or 3 — or go straight to the One-Shot Prompts and put those to work today.
          </p>

          <h2 className="mt-8 mb-2 text-xl font-black text-[var(--brand-graphite)]">The community</h2>

          <p>
            The Discord is where the real conversation happens. Ask questions, share what you&apos;re building, and get feedback. I&apos;m in there daily. Don&apos;t learn in isolation — the best results come from people figuring things out together.
          </p>

          <h2 className="mt-8 mb-2 text-xl font-black text-[var(--brand-graphite)]">One last thing</h2>

          <p>
            AI moves fast. This classroom gets updated regularly with new lessons, new prompts, and new resources as the tools evolve. You&apos;re not buying a frozen course — you&apos;re getting access to something that grows with the space.
          </p>

          <p>
            Okay — enough intro. Go take your first base.
          </p>

          <p className="font-bold text-[var(--brand-graphite)]">— Will</p>

        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col sm:flex-row gap-4">
          <Link
            href="/learn"
            className="inline-flex items-center justify-center rounded-full bg-[var(--brand-graphite)] px-7 py-3.5 text-sm font-bold text-[var(--brand-cream)] transition-colors hover:bg-[var(--brand-graphite-2)]"
          >
            Go to the Classroom →
          </Link>
          <a
            href="https://discord.gg/1stbaseai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[color:var(--brand-line-strong)] bg-[var(--brand-cream-2)] px-7 py-3.5 text-sm font-bold text-[var(--brand-graphite)] transition-colors hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)]"
          >
            Join Discord
          </a>
        </div>

      </article>
    </div>
  );
}
