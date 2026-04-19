"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { AboutModal } from "@/components/ui/about-modal";
import { LogoMark } from "@/components/ui/logo-mark";

const logos = [
  { id: 1,  src: "/logos/chatgpt.svg",     label: "ChatGPT" },
  { id: 2,  src: "/logos/claude.png",      label: "Claude" },
  { id: 3,  src: "/logos/gemini.png",      label: "Gemini" },
  { id: 4,  src: "/logos/grok.png",        label: "Grok" },
  { id: 5,  src: "/logos/elevenlabs.svg",  label: "ElevenLabs" },
  { id: 6,  src: "/logos/copilot.png",     label: "Copilot" },
  { id: 7,  src: "/logos/mistral.svg",     label: "Mistral" },
  { id: 8,  src: "/logos/perplexity.png",  label: "Perplexity" },
  { id: 9,  src: "/logos/suno.svg",        label: "Suno" },
  { id: 10, src: "/logos/anthropic.svg",   label: "Anthropic" },
  { id: 11, src: "/logos/huggingface.svg", label: "Hugging Face" },
  { id: 12, src: "/logos/midjourney.png",  label: "Midjourney" },
  { id: 13, src: "/logos/ollama.svg",      label: "Ollama" },
  { id: 14, src: "/logos/runway.png",      label: "Runway" },
  { id: 15, src: "/logos/replicate.svg",   label: "Replicate" },
  { id: 16, src: "/logos/meta.svg",        label: "Meta AI" },
];

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  let i = arr.length;
  while (i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function generateSquares() {
  return shuffle(logos).map((logo) => (
    <motion.div
      key={logo.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center p-3"
    >
      <img
        src={logo.src}
        alt={logo.label}
        className="w-10 h-10 object-contain"
        draggable={false}
      />
    </motion.div>
  ));
}

function ShuffleGrid() {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [squares, setSquares] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    // Only run shuffle on the client to avoid hydration mismatch
    setSquares(generateSquares());
    function go() {
      setSquares(generateSquares());
      timeoutRef.current = setTimeout(go, 3000);
    }
    timeoutRef.current = setTimeout(go, 3000);
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[360px] md:h-[480px] gap-2">
      {squares}
    </div>
  );
}

export function ShuffleHero() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-[#EAE9E0] flex flex-col overflow-hidden">
      {/* Background watermark */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <LogoMark color="#255253" size={700} className="absolute -right-32 -top-24 opacity-[0.045]" />
      </div>
      <AboutModal isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
      {/* Nav */}
      <div className="relative flex items-center justify-between px-8 md:px-10 py-7">
        <a href="/" className="flex items-center gap-2.5">
          <LogoMark color="#255253" size={32} />
          <span className="font-bold text-xl tracking-tight text-[#1a3738]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            1st Base <span className="text-[#c4622d]">AI</span>
          </span>
        </a>
        <nav className="relative hidden md:flex items-center gap-7">
          <a href="/learn" className="text-sm font-medium text-gray-500 hover:text-[#1a3738] transition-colors">Learning Center</a>
          <a href="#newsletter" className="text-sm font-medium text-gray-500 hover:text-[#1a3738] transition-colors">Newsletter</a>
          <a href="/blog" className="text-sm font-medium text-gray-500 hover:text-[#1a3738] transition-colors">Blog</a>
          <button onClick={() => setAboutOpen(true)} className="text-sm font-medium text-gray-500 hover:text-[#1a3738] transition-colors">About</button>
        </nav>
        <a
          href="https://calendly.com/1stbaseai/30min"
          className="bg-[#255253] hover:bg-[#183839] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors"
        >
          Book a session
        </a>
      </div>

      {/* Hero content */}
      <div className="flex-1 flex items-center">
        <div className="w-full px-8 md:px-10 py-8 md:py-0 grid grid-cols-1 md:grid-cols-2 items-center gap-12 max-w-7xl mx-auto">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="block mb-4 text-xs uppercase tracking-widest text-[#c4622d] font-semibold">
              Vancouver, WA · AI Education & Coaching
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#1a3738] leading-[0.92] mb-6">
              I Teach People How To Use AI
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-md">
              You already know what you want to do. I teach you the tools to go build it — at your own pace, no tech background needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a
                href="https://calendly.com/1stbaseai/30min"
                className="bg-[#c4622d] hover:bg-[#a8521f] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
              >
                Book a free intro call →
              </a>
              <a
                href="/learn"
                className="text-gray-400 hover:text-gray-700 font-medium text-sm transition-colors"
              >
                or start learning free →
              </a>
            </div>
          </motion.div>

          {/* Right — shuffle grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <ShuffleGrid />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
