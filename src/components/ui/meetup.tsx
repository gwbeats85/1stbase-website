"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Meetup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  return (
    <section id="meetup" className="bg-[var(--brand-cream)] px-6 py-24">
      <div className="max-w-3xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-5xl mb-6">🦥</div>
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-blue)]">Community</span>
          <h2 className="mt-3 mb-5 text-4xl font-black text-[var(--brand-graphite)] md:text-5xl">
            Vancouver AI Meetup — you in?
          </h2>
          <p className="mx-auto mb-4 max-w-xl text-lg text-[color:var(--brand-muted)]">
            Thinking about starting a local meetup for anyone building with AI or just curious about it.
            Show what you made, ask questions, meet other people in the 360 who actually get it.
          </p>
          <p className="mx-auto mb-10 max-w-lg text-base text-[color:rgba(21,21,21,0.62)]">
            Drop your email and I&apos;ll keep you posted — first meetup details, a weekly newsletter on
            what&apos;s worth paying attention to in AI, and nothing else.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                exit={{ opacity: 0, y: -10 }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 rounded-full border-2 border-[color:var(--brand-line)] bg-[var(--brand-cream-2)] px-5 py-4 text-sm text-[var(--brand-graphite)] outline-none transition-colors placeholder:text-[color:var(--brand-muted)] focus:border-[var(--brand-blue)]"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-[var(--brand-graphite)] px-8 py-4 text-sm font-bold uppercase tracking-wide text-[var(--brand-cream)] transition-colors hover:bg-[var(--brand-graphite-2)]"
                >
                  I&apos;m in →
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <p className="mb-2 text-2xl font-black text-[var(--brand-graphite)]">You&apos;re on the list. 🤙</p>
                <p className="text-[color:var(--brand-muted)]">I&apos;ll hit you when we&apos;re ready to roll.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-[color:var(--brand-muted)]"
        >
          {["Free. Always.", "No spam ever.", "Vancouver, WA · 360", "Monthly + weekly newsletter"].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="text-[var(--brand-yellow-deep)]">✓</span> {item}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
