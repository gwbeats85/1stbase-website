"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import newsData from "@/data/news.json";

// ── news.json is updated automatically by n8n every Monday ──
const news = newsData;

export function AiNews() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    window.open(`https://1stbase.beehiiv.com/subscribe?email=${encodeURIComponent(email)}`, "_blank");
    setSubmitted(true);
  }

  return (
    <section id="news" className="py-24 px-6 bg-[#fafaf8]">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-widest text-orange-500 font-semibold">What&apos;s happening</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3">
            AI is moving fast.<br className="hidden md:block" /> Here&apos;s what matters.
          </h2>
          <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto">
            I cut through the hype every week so you don&apos;t have to. Get the tools and news worth knowing about, in plain English.
          </p>
        </div>

        {/* News grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {news.map((item, i) => (
            <motion.a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:border-orange-300 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-orange-500 bg-orange-50 px-3 py-1 rounded-full">
                  {item.tag}
                </span>
                <ExternalLink size={14} className="text-gray-300 group-hover:text-orange-400 transition-colors shrink-0 mt-1" />
              </div>
              <h3 className="font-black text-gray-900 text-lg leading-snug mb-2">{item.headline}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.summary}</p>
              <p className="text-xs text-gray-300">{item.source} · {item.date}</p>
            </motion.a>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-3xl px-8 py-10 text-center max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-black text-white mb-2">Get the weekly digest</h3>
          <p className="text-gray-400 text-sm mb-6">What&apos;s worth your attention in AI — every week, no fluff.</p>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                exit={{ opacity: 0 }}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 bg-white/10 border border-white/20 focus:border-orange-400 rounded-full px-5 py-3.5 text-sm outline-none text-white placeholder:text-gray-500 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-full transition-colors text-sm uppercase tracking-wide shrink-0"
                >
                  Subscribe →
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <p className="text-xl font-black text-white mb-1">You&apos;re in. 🤙</p>
                <p className="text-gray-400 text-sm">First edition coming soon.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
