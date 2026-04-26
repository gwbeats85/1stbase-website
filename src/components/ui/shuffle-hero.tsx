"use client";

import Link from "next/link";
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

function createSquares(source = logos) {
  return source.map((logo) => (
    <motion.div
      key={logo.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="flex h-full w-full items-center justify-center rounded-[1.6rem] border border-[color:var(--brand-line)] bg-[linear-gradient(180deg,_rgb(255_248_238)_0%,_rgb(237_224_206)_100%)] p-3 shadow-[0_18px_42px_-28px_rgba(21,21,21,0.18)]"
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
  const [squares, setSquares] = useState<React.ReactNode[]>(() => createSquares());

  useEffect(() => {
    function go() {
      setSquares(createSquares(shuffle(logos)));
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
    <section className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-[var(--brand-cream)]">
      <div className="absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(circle_at_top_right,_rgb(255_228_94_/_0.12),_transparent_35%),radial-gradient(circle_at_left_center,_rgb(59_130_246_/_0.06),_transparent_26%)]" aria-hidden="true" />
      {/* Background watermark */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <LogoMark color="#151515" size={700} className="absolute -right-32 -top-24 opacity-[0.04]" />
      </div>
      <AboutModal isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
      {/* Nav */}
      <div className="relative flex items-center justify-between px-8 md:px-10 py-7">
        <Link href="/" className="flex items-center gap-2.5">
          <LogoMark color="#151515" size={32} />
          <span className="font-bold text-xl tracking-tight text-[var(--brand-graphite)]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            1st Base <span className="text-[var(--brand-blue)]">AI</span>
          </span>
        </Link>
        <nav className="relative hidden md:flex items-center gap-7">
          <Link href="/learn" className="text-sm font-medium text-[color:var(--brand-muted)] transition-colors hover:text-[var(--brand-blue)]">Learning Center</Link>
          <a href="#newsletter" className="text-sm font-medium text-[color:var(--brand-muted)] transition-colors hover:text-[var(--brand-blue)]">Newsletter</a>
          <Link href="/blog" className="text-sm font-medium text-[color:var(--brand-muted)] transition-colors hover:text-[var(--brand-blue)]">Blog</Link>
          <button onClick={() => setAboutOpen(true)} className="text-sm font-medium text-[color:var(--brand-muted)] transition-colors hover:text-[var(--brand-blue)]">About</button>
        </nav>
        <a
          href="https://calendly.com/1stbaseai/30min"
          className="bg-[var(--brand-graphite)] px-5 py-2.5 text-sm font-bold text-[var(--brand-cream)] transition-colors hover:bg-[var(--brand-graphite-2)]"
        >
          Book a session
        </a>
      </div>

      {/* Hero content */}
      <div className="flex-1 flex items-center">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-8 py-8 md:grid-cols-2 md:px-10 md:py-0">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.26em] text-[var(--brand-blue)]">
              Vancouver, WA · AI Education & Coaching
            </span>
            <h1 className="mb-6 text-5xl font-black leading-[0.92] tracking-tight text-[var(--brand-graphite)] md:text-6xl lg:text-7xl">
              I Teach People How To Use AI
            </h1>
            <p className="mb-10 max-w-lg text-lg leading-relaxed text-[color:var(--brand-muted)]">
              You already know what you want to do. I help you pick the right tools, learn the fundamentals, and actually use AI without getting lost in the hype.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a
                href="https://calendly.com/1stbaseai/30min"
                className="bg-[var(--brand-graphite)] px-8 py-4 text-base font-bold text-[var(--brand-cream)] transition-colors hover:bg-[var(--brand-graphite-2)]"
              >
                Book a free intro call →
              </a>
              <Link
                href="/learn"
                className="text-sm font-medium text-[var(--brand-blue)] transition-colors hover:text-[var(--brand-blue-deep)]"
              >
                or start learning free →
              </Link>
            </div>
          </motion.div>

          {/* Right — shuffle grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="rounded-[2rem] border border-[color:var(--brand-line)] bg-[color:rgba(245,235,221,0.72)] p-4 shadow-[0_28px_80px_-46px_rgba(21,21,21,0.25)] backdrop-blur-sm">
              <div className="mb-4 flex items-center justify-between rounded-[1.4rem] border border-[color:var(--brand-line)] bg-[color:rgba(245,235,221,0.76)] px-4 py-3 text-sm">
                <span className="font-semibold text-[var(--brand-blue)]">Tools I teach with</span>
                <span className="text-[color:var(--brand-muted)]">The tools change. The fundamentals don&apos;t.</span>
              </div>
              <ShuffleGrid />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
