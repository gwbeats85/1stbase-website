"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  {
    id: "who",
    question: "What brings you here?",
    options: [
      "Just curious about AI",
      "I want to use it at my job",
      "I run a small business",
      "I want to learn something specific",
      "Everyone's talking about it and I feel behind",
    ],
  },
  {
    id: "goal",
    question: "What do you actually want AI to help with?",
    options: [
      "Save time on stuff I do every day",
      "Write better — emails, messages, content",
      "Understand what tools are even worth using",
      "Automate something that's taking too long",
      "Honestly not sure yet — that's why I'm here",
    ],
  },
  {
    id: "blocker",
    question: "What's been holding you back?",
    options: [
      "Don't know where to start",
      "Tried it — couldn't get it to do what I wanted",
      "It feels overwhelming",
      "Not sure which tools are worth learning",
      "Nothing, I'm ready to go",
    ],
  },
  {
    id: "style",
    question: "How do you like to learn?",
    options: [
      "One-on-one — someone walk me through it",
      "Group setting / workshop vibe",
      "Just point me to stuff and I'll figure it out",
      "Video call works for me",
    ],
  },
];

type ResultType = "book" | "explore";

function getResult(answers: Record<string, string>): ResultType {
  const { who, blocker, style } = answers;

  if (blocker === "Nothing, I'm ready to go") return "book";
  if (who === "I run a small business") return "book";
  if (who === "I want to use it at my job") return "book";
  if (who === "I want to learn something specific") return "book";
  if (style === "One-on-one — someone walk me through it") return "book";
  if (style === "Video call works for me") return "book";

  return "explore";
}

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/1stbaseai" },
  { label: "X / Twitter", href: "https://x.com/1stbaseai" },
  { label: "YouTube", href: "https://youtube.com/@1stbaseai" },
];

export function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const current = questions[step];
  const resultType = done ? getResult(answers) : null;

  function handleAnswer(answer: string) {
    const next = { ...answers, [current.id]: answer };
    setAnswers(next);
    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 200);
    } else {
      setTimeout(() => setDone(true), 200);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="quiz" className="bg-[var(--brand-graphite)] px-6 py-24">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--brand-blue)]">Quick Questionnaire</span>
          <h2 className="mt-3 text-4xl font-black text-[var(--brand-cream)]">
            Let&apos;s find your starting point
          </h2>
          <p className="mt-2 text-[color:rgba(245,235,221,0.55)]">4 questions. No signup. Just vibes.</p>
        </div>

        {!done ? (
          <>
            <div className="flex gap-2 mb-10">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                    i <= step ? "bg-[var(--brand-yellow)]" : "bg-[color:rgba(245,235,221,0.2)]"
                  }`}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="mb-6 text-2xl font-bold text-[var(--brand-cream)]">{current.question}</h3>
                <div className="space-y-3">
                  {current.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      className="w-full rounded-[1.4rem] border-2 border-[color:var(--brand-line)] bg-[var(--brand-cream-2)] px-6 py-4 text-left font-medium text-[var(--brand-graphite)] transition-all duration-200 hover:border-[color:var(--brand-graphite)] hover:bg-[color:rgba(21,21,21,0.05)]"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </>
        ) : (
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="sent"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="text-6xl mb-4">🦥✌️</div>
                <h3 className="mb-3 text-3xl font-black text-[var(--brand-cream)]">You&apos;re in.</h3>
                <p className="text-[color:rgba(245,235,221,0.55)]">
                  {resultType === "book"
                    ? `I'll hit you back soon. Talk soon, ${name}.`
                    : `Welcome to the crew, ${name}. You'll hear from me soon.`}
                </p>
              </motion.div>
            ) : resultType === "book" ? (
              <motion.div
                key="book"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative rounded-[2rem] border border-[color:var(--brand-line)] bg-[var(--brand-cream-2)] p-8 shadow-[0_18px_42px_-28px_rgba(21,21,21,0.1)]"
              >
                <button
                  onClick={() => { setDone(false); setStep(0); setAnswers({}); }}
                  className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-lg text-[color:var(--brand-muted)] transition-all hover:bg-[color:rgba(21,21,21,0.06)] hover:text-[var(--brand-graphite)]"
                  aria-label="Start over"
                >
                  ✕
                </button>
                <div className="text-4xl mb-4">🦥</div>
                <h3 className="mb-3 text-2xl font-black text-[var(--brand-graphite)]">Let&apos;s make it happen.</h3>
                <p className="mb-8 text-[color:var(--brand-muted)]">
                  Drop your info and I&apos;ll reach out to set something up — a quick call, a session, whatever makes sense for where you&apos;re at.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <label htmlFor="quiz-name" className="sr-only">Your name</label>
                  <input
                    id="quiz-name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    required
                    className="w-full rounded-xl border-2 border-[color:var(--brand-line)] bg-[var(--brand-cream)] px-5 py-4 font-medium text-[var(--brand-graphite)] transition-colors outline-none focus:border-[var(--brand-graphite)]"
                  />
                  <label htmlFor="quiz-email" className="sr-only">Your email</label>
                  <input
                    id="quiz-email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                    className="w-full rounded-xl border-2 border-[color:var(--brand-line)] bg-[var(--brand-cream)] px-5 py-4 font-medium text-[var(--brand-graphite)] transition-colors outline-none focus:border-[var(--brand-graphite)]"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[var(--brand-graphite)] py-4 text-sm font-bold uppercase tracking-wide text-[var(--brand-cream)] transition-colors hover:bg-[var(--brand-graphite-2)]"
                  >
                    Hit me up →
                  </button>
                </form>
                <div className="flex items-center gap-3 my-5">
                  <div className="flex-1 h-px bg-[color:var(--brand-line)]" />
                  <span className="text-xs text-[color:var(--brand-muted)] font-medium">or</span>
                  <div className="flex-1 h-px bg-[color:var(--brand-line)]" />
                </div>
                <a
                  href="https://calendly.com/1stbaseai/30min"
                  className="flex w-full items-center justify-between rounded-2xl border-2 border-[color:var(--brand-line)] px-6 py-4 font-bold text-[var(--brand-graphite)] transition-all hover:border-[color:var(--brand-graphite)]"
                >
                  <span>Text me directly</span>
                  <span className="text-sm font-normal text-[color:var(--brand-muted)]">(432) 279-0502</span>
                </a>
                <p className="mt-5 text-center text-xs text-[color:var(--brand-muted)]">
                  Not ready to commit?{" "}
                  <a href="#meetup" className="font-medium text-[var(--brand-blue)] hover:underline">
                    Join the newsletter instead →
                  </a>
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="explore"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative rounded-[2rem] border border-[color:var(--brand-line)] bg-[var(--brand-cream-2)] p-8 shadow-[0_18px_42px_-28px_rgba(21,21,21,0.1)]"
              >
                <button
                  onClick={() => { setDone(false); setStep(0); setAnswers({}); }}
                  className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-lg text-[color:var(--brand-muted)] transition-all hover:bg-[color:rgba(21,21,21,0.06)] hover:text-[var(--brand-graphite)]"
                  aria-label="Start over"
                >
                  ✕
                </button>
                <div className="text-4xl mb-4">🦥</div>
                <h3 className="mb-3 text-2xl font-black text-[var(--brand-graphite)]">You&apos;re in the right place.</h3>
                <p className="mb-8 text-[color:var(--brand-muted)]">
                  No pressure to jump into anything. Stay in the loop — I send out a weekly AI digest with the tools worth knowing about, and I host meetups in Vancouver WA for people just like you.
                </p>

                <a
                  href="#meetup"
                  className="mb-3 flex w-full items-center justify-between rounded-2xl bg-[var(--brand-graphite)] px-6 py-4 font-bold text-[var(--brand-cream)] transition-colors hover:bg-[var(--brand-graphite-2)]"
                >
                  <span>Join the weekly newsletter</span>
                  <span>→</span>
                </a>

                <a
                  href="https://calendly.com/1stbaseai/30min"
                  className="mb-3 flex w-full items-center justify-between rounded-2xl border-2 border-[color:var(--brand-line)] px-6 py-4 font-bold text-[var(--brand-graphite)] transition-all hover:border-[color:var(--brand-graphite)]"
                >
                  <span>Or just text me</span>
                  <span className="text-sm font-normal text-[color:var(--brand-muted)]">(432) 279-0502</span>
                </a>

                <div className="flex gap-3 mt-4">
                  {SOCIAL_LINKS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-xl border-2 border-[color:var(--brand-line)] py-3 text-center text-sm font-semibold text-[color:var(--brand-muted)] transition-all hover:border-[color:var(--brand-graphite)] hover:text-[var(--brand-graphite)]"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
