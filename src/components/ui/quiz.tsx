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

  // High intent — ready to book
  if (blocker === "Nothing, I'm ready to go") return "book";
  if (who === "I run a small business") return "book";
  if (who === "I want to use it at my job") return "book";
  if (who === "I want to learn something specific") return "book";
  if (style === "One-on-one — someone walk me through it") return "book";
  if (style === "Video call works for me") return "book";

  // Everyone else — keep them in the loop, low pressure
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
    <section id="quiz" className="py-24 px-6 bg-white">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-orange-500 font-semibold">Quick Questionnaire</span>
          <h2 className="text-4xl font-black text-gray-900 mt-3">
            Let&apos;s find your starting point
          </h2>
          <p className="text-gray-500 mt-2">4 questions. No signup. Just vibes.</p>
        </div>

        {!done ? (
          <>
            {/* Progress */}
            <div className="flex gap-2 mb-10">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                    i <= step ? "bg-orange-500" : "bg-gray-200"
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{current.question}</h3>
                <div className="space-y-3">
                  {current.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      className="w-full text-left px-6 py-4 rounded-2xl border-2 border-gray-200 hover:border-orange-400 hover:bg-orange-50 transition-all duration-200 font-medium text-gray-700 hover:text-gray-900"
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
                <h3 className="text-3xl font-black text-gray-900 mb-3">You&apos;re in.</h3>
                <p className="text-gray-500">
                  {resultType === "book"
                    ? `I'll hit you back soon. Talk soon, ${name}.`
                    : `Welcome to the crew, ${name}. You'll hear from me soon.`}
                </p>
              </motion.div>
            ) : resultType === "book" ? (
              /* HIGH INTENT — ready to book or learn */
              <motion.div
                key="book"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative bg-[#fafaf8] rounded-3xl p-8 border border-gray-100"
              >
                <button
                  onClick={() => { setDone(false); setStep(0); setAnswers({}); }}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-200 transition-all text-lg"
                  aria-label="Start over"
                >
                  ✕
                </button>
                <div className="text-4xl mb-4">🦥</div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">Let&apos;s make it happen.</h3>
                <p className="text-gray-600 mb-8">
                  Drop your info and I&apos;ll reach out to set something up — a quick call, a session, whatever makes sense for where you&apos;re at.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-orange-400 outline-none font-medium transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-orange-400 outline-none font-medium transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-colors text-sm uppercase tracking-wide"
                  >
                    Hit me up →
                  </button>
                </form>
                <div className="flex items-center gap-3 my-5">
                  <div className="flex-1 h-px bg-gray-200" />
                  <span className="text-xs text-gray-400 font-medium">or</span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>
                <a
                  href="sms:+14322790502&body=Hey Will, I found you through 1stbaseai.com"
                  className="flex items-center justify-between w-full px-6 py-4 rounded-2xl border-2 border-gray-200 hover:border-orange-400 hover:text-orange-500 font-bold text-gray-700 transition-all"
                >
                  <span>Text me directly</span>
                  <span className="text-sm font-normal text-gray-400">(432) 279-0502</span>
                </a>
                <p className="text-center text-xs text-gray-400 mt-5">
                  Not ready to commit?{" "}
                  <a href="#meetup" className="text-orange-500 hover:underline font-medium">
                    Join the newsletter instead →
                  </a>
                </p>
              </motion.div>
            ) : (
              /* LOW INTENT — exploring, not ready to buy */
              <motion.div
                key="explore"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative bg-[#fafaf8] rounded-3xl p-8 border border-gray-100"
              >
                <button
                  onClick={() => { setDone(false); setStep(0); setAnswers({}); }}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-200 transition-all text-lg"
                  aria-label="Start over"
                >
                  ✕
                </button>
                <div className="text-4xl mb-4">🦥</div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">You&apos;re in the right place.</h3>
                <p className="text-gray-600 mb-8">
                  No pressure to jump into anything. Stay in the loop — I send out a weekly AI digest with the tools worth knowing about, and I host meetups in Vancouver WA for people just like you.
                </p>

                {/* Newsletter CTA */}
                <a
                  href="#meetup"
                  className="flex items-center justify-between w-full px-6 py-4 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold transition-colors mb-3"
                >
                  <span>Join the weekly newsletter</span>
                  <span>→</span>
                </a>

                {/* Text option */}
                <a
                  href="sms:+14322790502&body=Hey Will, I found you through 1stbaseai.com"
                  className="flex items-center justify-between w-full px-6 py-4 rounded-2xl border-2 border-gray-200 hover:border-orange-400 hover:text-orange-500 font-bold text-gray-700 transition-all mb-3"
                >
                  <span>Or just text me</span>
                  <span className="text-sm font-normal text-gray-400">(432) 279-0502</span>
                </a>

                {/* Socials */}
                <div className="flex gap-3 mt-4">
                  {SOCIAL_LINKS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-3 rounded-xl border-2 border-gray-200 hover:border-orange-400 hover:text-orange-500 text-sm font-semibold text-gray-600 transition-all"
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
