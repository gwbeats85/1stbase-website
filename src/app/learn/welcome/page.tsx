import Link from "next/link";

export const metadata = {
  title: "Welcome to 1st Base — Start Here",
};

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-[#EAE9E0]">
      {/* Nav */}
      <div className="flex items-center justify-between px-8 md:px-10 py-7 border-b border-gray-100">
        <Link href="/" className="font-black text-xl tracking-tight text-[#1a3738]">
          1stbaseai<span className="text-[#c4622d]">.com</span>
        </Link>
        <Link href="/learn" className="text-sm font-medium text-gray-500 hover:text-[#1a3738] transition-colors">
          ← Back to Classroom
        </Link>
      </div>

      <article className="max-w-2xl mx-auto px-8 md:px-10 py-14">

        {/* Badge */}
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#c4622d] bg-orange-50 px-2.5 py-1 rounded-full mb-6">
          Start Here
        </span>

        <h1 className="text-4xl md:text-5xl font-black text-[#1a3738] leading-[0.95] tracking-tight mb-5">
          Welcome to 1st Base
        </h1>

        <div className="flex items-center gap-3 text-sm text-gray-400 mb-10">
          <span>Will Sanchez</span>
          <span>·</span>
          <span>April 2026</span>
          <span>·</span>
          <span>5 min read</span>
        </div>

        <div className="border-t border-gray-100 mb-10" />

        {/* Content */}
        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">

          <p>
            Hey — glad you&apos;re here. I&apos;m Will, and I built 1st Base for one reason: I kept watching smart, motivated people get stuck with AI not because the tools are too complicated, but because nobody showed them how to actually use them.
          </p>

          <p>
            This isn&apos;t a course where you watch 40 hours of video and hope something sticks. This is a classroom built around one idea — solve a real problem in your first session. No fluff. No homework. Just tools you can actually use tomorrow.
          </p>

          <h2 className="text-xl font-black text-[#1a3738] mt-8 mb-2">What&apos;s in here</h2>

          <p>The classroom is organized into four sections:</p>

          <ul className="space-y-3 mt-2">
            {[
              { label: "Lessons", desc: "Step-by-step walkthroughs from foundations to full automation. Go in order — each one builds on the last." },
              { label: "Online Resources", desc: "The best free learning material straight from the AI companies themselves — Anthropic, Google, OpenAI, and more." },
              { label: "Downloads", desc: "Cheat sheets, prompt packs, and guides you can save and reference anytime. Free for members." },
              { label: "One-Shot Prompts", desc: "Copy-paste prompts for the most common tasks. Fill in the brackets, paste into any AI, get results." },
            ].map(({ label, desc }) => (
              <li key={label} className="flex gap-3">
                <svg className="w-4 h-4 text-[#c4622d] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong className="text-[#1a3738]">{label}</strong> — {desc}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-black text-[#1a3738] mt-8 mb-2">Where to start</h2>

          <p>
            If you&apos;re brand new to AI, start with <strong className="text-[#1a3738]">Level 1 — Foundations</strong>. The first lesson walks you through setting up your accounts for ChatGPT, Claude, and Gemini in about 10 minutes. From there, every lesson is short, practical, and built around a specific thing you can do or build.
          </p>

          <p>
            If you already use AI but want to go deeper, skip ahead to Level 2 or 3 — or go straight to the One-Shot Prompts and put those to work today.
          </p>

          <h2 className="text-xl font-black text-[#1a3738] mt-8 mb-2">The community</h2>

          <p>
            The Discord is where the real conversation happens. Ask questions, share what you&apos;re building, and get feedback. I&apos;m in there daily. Don&apos;t learn in isolation — the best results come from people figuring things out together.
          </p>

          <h2 className="text-xl font-black text-[#1a3738] mt-8 mb-2">One last thing</h2>

          <p>
            AI moves fast. This classroom gets updated regularly with new lessons, new prompts, and new resources as the tools evolve. You&apos;re not buying a frozen course — you&apos;re getting access to something that grows with the space.
          </p>

          <p>
            Okay — enough intro. Go take your first base.
          </p>

          <p className="font-bold text-[#1a3738]">— Will</p>

        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col sm:flex-row gap-4">
          <Link
            href="/learn"
            className="inline-flex items-center justify-center bg-[#c4622d] hover:bg-[#a8521f] text-white font-bold px-7 py-3.5 rounded-full transition-colors text-sm"
          >
            Go to the Classroom →
          </Link>
          <a
            href="https://discord.gg/1stbaseai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#255253] hover:bg-[#183839] text-white font-bold px-7 py-3.5 rounded-full transition-colors text-sm"
          >
            Join Discord
          </a>
        </div>

      </article>
    </div>
  );
}
