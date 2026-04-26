"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import newsData from "@/data/news.json";

const news = newsData;

export function AiNews() {
  return (
    <section id="news" className="bg-[color:rgb(245_235_221_/_0.45)] px-6 py-24">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--brand-blue)]">What&apos;s happening</span>
          <h2 className="mt-3 text-4xl font-black text-[var(--brand-graphite)] md:text-5xl">
            AI is moving fast.<br className="hidden md:block" /> Here&apos;s what matters.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-[color:var(--brand-muted)]">
            I cut through the hype every week so you don&apos;t have to. Get the tools and news worth knowing about, in plain English.
          </p>
        </div>

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
              className="group rounded-[1.8rem] border border-[color:var(--brand-line)] bg-[var(--brand-cream-2)] p-6 shadow-[0_18px_42px_-28px_rgba(21,21,21,0.1)] transition-all hover:-translate-y-0.5 hover:border-[color:rgba(21,21,21,0.22)] hover:shadow-[0_22px_52px_-28px_rgba(21,21,21,0.16)]"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="rounded-full bg-[color:rgba(59,130,246,0.1)] px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-blue)]">
                  {item.tag}
                </span>
                <ExternalLink size={14} className="mt-1 shrink-0 text-[color:rgba(21,21,21,0.24)] transition-colors group-hover:text-[var(--brand-graphite)]" />
              </div>
              <h3 className="mb-2 text-lg font-black leading-snug text-[var(--brand-graphite)]">{item.headline}</h3>
              <p className="mb-4 text-sm leading-relaxed text-[color:var(--brand-muted)]">{item.summary}</p>
              <p className="text-xs text-[color:rgba(21,21,21,0.44)]">{item.source} · {item.date}</p>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
