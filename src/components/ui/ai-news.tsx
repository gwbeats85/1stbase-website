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

      </div>
    </section>
  );
}
