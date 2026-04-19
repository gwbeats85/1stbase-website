"use client";

import { motion } from "framer-motion";
import { Layers, Target, Zap } from "lucide-react";

const points = [
  {
    icon: Layers,
    title: "The fundamentals don't change",
    body: "ChatGPT, Claude, Gemini — they all work on the same core ideas. Learn those once and every tool clicks faster.",
  },
  {
    icon: Target,
    title: "The right tool for the right job",
    body: "Not every AI tool is built for the same thing. I'll show you what's actually worth your time based on what you're trying to do.",
  },
  {
    icon: Zap,
    title: "Go at your own pace",
    body: "No courses, no homework. Just real sessions where you bring what you're working on and we figure it out together.",
  },
];

export function Fundamentals() {
  return (
    <section className="bg-[var(--brand-canvas)] px-6 py-14">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {points.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col gap-3 rounded-[1.8rem] border border-[color:var(--brand-line)] bg-[var(--brand-surface)] p-6 shadow-[0_18px_42px_-30px_rgba(24,56,57,0.3)]"
          >
            <p.icon className="h-6 w-6 text-[var(--brand-gold)]" strokeWidth={1.75} />
            <h3 className="text-lg font-bold leading-snug text-[var(--brand-teal)]">{p.title}</h3>
            <p className="text-sm leading-relaxed text-[color:var(--brand-muted)]">{p.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
