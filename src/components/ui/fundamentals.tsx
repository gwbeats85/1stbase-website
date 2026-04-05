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
    <section className="bg-gray-900 pb-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {points.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col gap-3"
          >
            <p.icon className="w-6 h-6 text-orange-500" strokeWidth={1.75} />
            <h3 className="text-white font-bold text-lg leading-snug">{p.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{p.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
