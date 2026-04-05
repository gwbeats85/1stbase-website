"use client";

import { Marquee } from "@/components/ui/marquee";

const aiTools = [
  { name: "ChatGPT", company: "OpenAI", tag: "The one everyone knows", bg: "#10a37f", text: "#fff", short: "GPT" },
  { name: "Claude", company: "Anthropic", tag: "Best for writing & reasoning", bg: "#d97706", text: "#fff", short: "Cl" },
  { name: "Gemini", company: "Google", tag: "Plugged into everything Google", bg: "#1a73e8", text: "#fff", short: "Ge" },
  { name: "Grok", company: "xAI", tag: "Elon's AI, real-time web access", bg: "#000", text: "#fff", short: "Gr" },
  { name: "Copilot", company: "Microsoft", tag: "AI baked into Office 365", bg: "#0078d4", text: "#fff", short: "Co" },
  { name: "Meta AI", company: "Meta", tag: "Free, built into WhatsApp & IG", bg: "#0866ff", text: "#fff", short: "Me" },
  { name: "Midjourney", company: "Midjourney", tag: "Best AI image generation", bg: "#111", text: "#fff", short: "Mj" },
  { name: "Perplexity", company: "Perplexity AI", tag: "AI search engine", bg: "#20b2aa", text: "#fff", short: "Px" },
  { name: "Cursor", company: "Anysphere", tag: "AI code editor", bg: "#6366f1", text: "#fff", short: "Cu" },
  { name: "Notion AI", company: "Notion", tag: "AI inside your workspace", bg: "#000", text: "#fff", short: "No" },
  { name: "n8n", company: "n8n GmbH", tag: "Automate anything, open source", bg: "#ea580c", text: "#fff", short: "n8" },
  { name: "Make", company: "Make", tag: "No-code automation workflows", bg: "#6d28d9", text: "#fff", short: "Mk" },
  { name: "Zapier", company: "Zapier", tag: "Connect your apps automatically", bg: "#ff4a00", text: "#fff", short: "Za" },
  { name: "ElevenLabs", company: "ElevenLabs", tag: "Most realistic AI voice", bg: "#111", text: "#fff", short: "El" },
  { name: "Sora", company: "OpenAI", tag: "AI video generation", bg: "#10a37f", text: "#fff", short: "So" },
  { name: "Runway", company: "Runway ML", tag: "AI video editing & creation", bg: "#000", text: "#fff", short: "Rw" },
];

function ToolCard({ tool }: { tool: typeof aiTools[0] }) {
  return (
    <div className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl mx-3 px-5 py-4 min-w-[240px] shadow-sm hover:shadow-md transition-shadow">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-black shrink-0"
        style={{ backgroundColor: tool.bg, color: tool.text }}
      >
        {tool.short}
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-gray-900 text-sm">{tool.name}</span>
        <span className="text-gray-400 text-xs">{tool.tag}</span>
      </div>
    </div>
  );
}

export function AiMarquee() {
  const half = Math.ceil(aiTools.length / 2);
  const row1 = aiTools.slice(0, half);
  const row2 = aiTools.slice(half);

  return (
    <section className="py-16 bg-[#fdfcfb] overflow-hidden">
      <div className="text-center mb-10">
        <span className="text-xs uppercase tracking-widest text-orange-500 font-semibold">The Landscape</span>
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">
          I keep up so you don&apos;t have to
        </h2>
      </div>
      <div className="space-y-3">
        <Marquee speed="normal" reverse pauseOnHover>
          {row1.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </Marquee>
        <Marquee speed="normal" pauseOnHover>
          {row2.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
