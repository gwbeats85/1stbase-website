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
    <section id="meetup" className="py-24 px-6 bg-[#fafaf8]">
      <div className="max-w-3xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-5xl mb-6">🦥</div>
          <span className="text-xs uppercase tracking-widest text-orange-500 font-semibold">Community</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-5">
            Vancouver AI Meetup — you in?
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mb-4">
            Thinking about starting a local meetup for anyone building with AI or just curious about it.
            Show what you made, ask questions, meet other people in the 360 who actually get it.
          </p>
          <p className="text-gray-400 text-base max-w-lg mx-auto mb-10">
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
                  className="flex-1 border-2 border-gray-200 focus:border-orange-400 rounded-full px-5 py-4 text-sm outline-none transition-colors bg-white"
                />
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-colors text-sm uppercase tracking-wide shrink-0"
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
                <p className="text-2xl font-black text-gray-900 mb-2">You&apos;re on the list. 🤙</p>
                <p className="text-gray-400">I&apos;ll hit you when we&apos;re ready to roll.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-400"
        >
          {["Free. Always.", "No spam ever.", "Vancouver, WA · 360", "Monthly + weekly newsletter"].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="text-orange-400">✓</span> {item}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
