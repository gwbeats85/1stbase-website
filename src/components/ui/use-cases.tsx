"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const CARD_WIDTH = 340;
const CARD_GAP = 20;
const STEP = CARD_WIDTH + CARD_GAP;
const AUTO_INTERVAL = 3000;

const cards = [
  {
    id: 1,
    tag: "Everyday Life",
    title: "Use AI like a personal assistant",
    description: "Plan meals, research trips, make decisions faster, draft messages. AI fits right into your daily routine once you know how to talk to it.",
    image: "/cards/everyday.png",
  },
  {
    id: 2,
    tag: "Privacy & Local AI",
    title: "Your AI. Your data. Your hardware.",
    description: "You don't need a $3,000 server. A regular laptop or mini PC can run powerful open-source models like Llama and Mistral — no subscriptions, no data sent anywhere.",
    image: "/cards/local-ai.png",
  },
  {
    id: 3,
    tag: "Open Source AI",
    title: "Free, powerful AI you actually own",
    description: "ChatGPT isn't the only option. There are free models you can run completely offline — great for businesses that can't share sensitive data with big tech.",
    image: "/cards/opensource.png",
  },
  {
    id: 4,
    tag: "At Work",
    title: "Write better, faster — every time",
    description: "Emails, reports, summaries, presentations. AI handles the blank page so you can focus on the parts that actually need you.",
    image: "/cards/work.png",
  },
  {
    id: 5,
    tag: "Creative Projects",
    title: "Generate images, video & more",
    description: "Midjourney, Sora, ElevenLabs — the creative tools are insane right now. I'll show you which ones are worth learning and how to actually use them.",
    image: "/cards/creative.png",
  },
  {
    id: 6,
    tag: "Small Business",
    title: "AI that works for your business",
    description: "Marketing copy, customer replies, social media, inventory tracking. You know your business — AI just handles the repetitive parts.",
    image: "/cards/business.png",
  },
  {
    id: 7,
    tag: "Learn Anything",
    title: "Research and learn at a different speed",
    description: "AI is the best tutor that's ever existed. Ask it anything, go deep on any topic, get explanations that actually make sense.",
    image: "/cards/learn.png",
  },
  {
    id: 8,
    tag: "Automation",
    title: "Let AI handle the boring stuff",
    description: "Repetitive tasks, scheduling, data entry, follow-ups. Once you set it up it just runs. I'll show you how to build your first workflow.",
    image: "/cards/automate.png",
  },
];

export function UseCases() {
  const [active, setActive] = useState(Math.floor(cards.length / 2));
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const pauseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scroll-linked entry — cards slide in with your scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 0.75"],
  });
  const entryX = useTransform(scrollYProgress, [0, 1], [320, 0]);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % cards.length);
  }, []);

  useEffect(() => {
    if (!isInView || paused) return;
    const interval = setInterval(next, AUTO_INTERVAL);
    return () => clearInterval(interval);
  }, [isInView, paused, next]);

  function handleUserInteract(i: number) {
    setActive(i);
    setPaused(true);
    if (pauseTimer.current) clearTimeout(pauseTimer.current);
    pauseTimer.current = setTimeout(() => setPaused(false), 6000);
  }

  const [offset, setOffset] = useState(0);
  useEffect(() => {
    function calc() {
      const vw = window.innerWidth;
      const center = vw / 2 - CARD_WIDTH / 2;
      setOffset(center - active * STEP);
    }
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [active]);

  return (
    <section id="learn" ref={sectionRef} className="overflow-hidden py-24 bg-[var(--brand-cream-2)]">
      <div className="text-center mb-14 px-6">
        <span className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--brand-blue)]">What You&apos;ll Learn</span>
        <h2 className="mt-3 text-4xl font-black text-[var(--brand-graphite)] md:text-5xl">
          AI fits into your life — not the other way around
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-lg text-[color:var(--brand-muted)]">
          Whatever you&apos;re trying to do, there&apos;s probably an AI tool for it. I&apos;ll show you which ones are worth your time.
        </p>
      </div>

      {/* Cards track — outer div handles scroll entry, inner handles carousel */}
      <div className="relative">
        <motion.div style={{ x: entryX }}>
          <motion.div
            ref={trackRef}
            className="flex gap-5 cursor-grab active:cursor-grabbing"
            animate={{ x: offset }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            drag="x"
            dragConstraints={{ left: -(cards.length * STEP), right: cards.length * STEP }}
            onDragEnd={(_, info) => {
              if (info.offset.x < -50) handleUserInteract(Math.min(active + 1, cards.length - 1));
              else if (info.offset.x > 50) handleUserInteract(Math.max(active - 1, 0));
            }}
          >
            {cards.map((card, i) => (
              <motion.div
                key={card.id}
                onClick={() => handleUserInteract(i)}
                animate={{ scale: active === i ? 1 : 0.93, opacity: active === i ? 1 : 0.55 }}
                transition={{ duration: 0.35 }}
                className="w-[340px] shrink-0 select-none overflow-hidden rounded-[2rem] border border-[color:var(--brand-line)] bg-[var(--brand-cream-2)] shadow-[0_18px_42px_-28px_rgba(21,21,21,0.12)]"
              >
                <div className="relative w-full h-52">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    draggable={false}
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-blue)]">{card.tag}</span>
                  <h3 className="mb-2 mt-2 text-lg font-black text-[var(--brand-graphite)]">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-[color:var(--brand-muted)]">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Fade edges */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-24 bg-gradient-to-r from-[var(--brand-cream-2)] to-transparent" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-24 bg-gradient-to-l from-[var(--brand-cream-2)] to-transparent" />
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => handleUserInteract(i)}
            aria-label={`Show use case ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              active === i ? "w-6 bg-[var(--brand-yellow)]" : "w-2 bg-[color:rgba(21,21,21,0.15)]"
            }`}
          />
        ))}
      </div>

      {/* Arrows */}
      <div className="flex justify-center gap-3 mt-6">
        <button
          onClick={() => handleUserInteract(Math.max(0, active - 1))}
          disabled={active === 0}
          aria-label="Previous use case"
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[color:var(--brand-line)] text-[color:var(--brand-muted)] transition-all hover:border-[color:var(--brand-graphite)] hover:text-[var(--brand-graphite)] disabled:opacity-30"
        >
          ←
        </button>
        <button
          onClick={() => handleUserInteract((active + 1) % cards.length)}
          aria-label="Next use case"
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[color:var(--brand-line)] text-[color:var(--brand-muted)] transition-all hover:border-[color:var(--brand-graphite)] hover:text-[var(--brand-graphite)]"
        >
          →
        </button>
      </div>
    </section>
  );
}
