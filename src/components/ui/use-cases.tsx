"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { cards } from "@/data/use-cases";

const CARD_WIDTH = 340;
const CARD_GAP = 20;
const STEP = CARD_WIDTH + CARD_GAP;
const AUTO_INTERVAL = 3000;

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
    <section id="learn" ref={sectionRef} className="overflow-hidden py-24">
      <div className="text-center mb-14 px-6">
        <span className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--brand-coral)]">What You&apos;ll Learn</span>
        <h2 className="mt-3 text-4xl font-black text-[var(--brand-teal)] md:text-5xl">
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
                className="w-[340px] shrink-0 select-none overflow-hidden rounded-[2rem] border border-[color:var(--brand-line)] bg-[var(--brand-surface)] shadow-[0_18px_42px_-28px_rgba(24,56,57,0.45)]"
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
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-coral)]">{card.tag}</span>
                  <h3 className="mb-2 mt-2 text-lg font-black text-[var(--brand-teal)]">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-[color:var(--brand-muted)]">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Fade edges */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-24 bg-gradient-to-r from-[var(--brand-canvas)] to-transparent" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-24 bg-gradient-to-l from-[var(--brand-canvas)] to-transparent" />
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => handleUserInteract(i)}
            aria-label={`Show use case ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              active === i ? "w-6 bg-[var(--brand-gold)]" : "w-2 bg-[color:rgb(33_71_72_/_0.18)]"
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
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[color:var(--brand-line)] text-[color:var(--brand-muted)] transition-all hover:border-[var(--brand-gold)] hover:text-[var(--brand-teal)] disabled:opacity-30"
        >
          ←
        </button>
        <button
          onClick={() => handleUserInteract((active + 1) % cards.length)}
          aria-label="Next use case"
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[color:var(--brand-line)] text-[color:var(--brand-muted)] transition-all hover:border-[var(--brand-gold)] hover:text-[var(--brand-teal)]"
        >
          →
        </button>
      </div>
    </section>
  );
}
