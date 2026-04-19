"use client";

import { motion } from "framer-motion";

const tools = [
  { name: "ChatGPT", color: "#10a37f", letter: "G" },
  { name: "Claude", color: "#d97706", letter: "C" },
  { name: "Notion", color: "#000000", letter: "N" },
  { name: "Zapier", color: "#ff4a00", letter: "Z" },
  { name: "Make", color: "#6d28d9", letter: "M" },
  { name: "n8n", color: "#ea580c", letter: "n" },
  { name: "Slack", color: "#4a154b", letter: "S" },
  { name: "HubSpot", color: "#ff7a59", letter: "H" },
  { name: "Airtable", color: "#2d7ff9", letter: "A" },
  { name: "Monday", color: "#f6144e", letter: "m" },
  { name: "Asana", color: "#f06a6a", letter: "A" },
  { name: "Gemini", color: "#1a73e8", letter: "Ge" },
  { name: "Midjourney", color: "#000000", letter: "Mj" },
  { name: "Pipedream", color: "#3b82f6", letter: "P" },
  { name: "Salesforce", color: "#00a1e0", letter: "Sf" },
  { name: "Typeform", color: "#262627", letter: "T" },
  { name: "ActiveCampaign", color: "#356ae6", letter: "Ac" },
  { name: "Webflow", color: "#4353ff", letter: "W" },
];

const rows = [
  tools.slice(0, 6),
  tools.slice(6, 12),
  tools.slice(12, 18),
];

export function AppChaos() {
  return (
    <section className="py-24 px-6 bg-[#EAE9E0] overflow-hidden">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <span className="text-xs uppercase tracking-widest text-[#c4622d] font-semibold">The Reality</span>
        <h2 className="text-4xl md:text-5xl font-black text-[#1a3738] mt-3 mb-4">
          This is what AI looks like right now
        </h2>
        <p className="text-gray-500 text-lg">
          Overwhelming, right? That&apos;s exactly why people need someone to just explain what&apos;s worth learning — and actually show them how.
        </p>
      </div>

      <div className="space-y-4 max-w-5xl mx-auto">
        {rows.map((row, rowIdx) => (
          <div key={rowIdx} className="flex justify-center gap-4 flex-wrap">
            {row.map((tool, i) => {
              const delay = (rowIdx * 6 + i) * 0.05;
              const isEdge = i === 0 || i === row.length - 1;
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: isEdge ? 0.3 : 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay, duration: 0.4 }}
                  whileHover={{ scale: 1.08, opacity: 1 }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 bg-white cursor-default"
                  title={tool.name}
                >
                  <span
                    className="text-sm font-black"
                    style={{ color: tool.color }}
                  >
                    {tool.letter}
                  </span>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="#quiz"
          className="inline-block bg-[#c4622d] hover:bg-[#a8521f] text-white font-bold px-8 py-4 rounded-full transition-colors text-sm uppercase tracking-wide"
        >
          Let&apos;s figure out where to start →
        </a>
      </div>
    </section>
  );
}
