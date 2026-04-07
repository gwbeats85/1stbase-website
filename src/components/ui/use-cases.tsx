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
  const [active, setActive] = useState(0);
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
    <section id="learn" ref={sectionRef} className="py-24 bg-[#fdfcfb] overflow-hidden">
      <div className="text-center mb-14 px-6">
        <span className="text-xs uppercase tracking-widest text-orange-500 font-semibold">What You&apos;ll Learn</span>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3">
          AI fits into your life — not the other way around
        </h2>
        <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto">
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
                className="shrink-0 w-[340px] bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm select-none"
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
                  <span className="text-xs uppercase tracking-widest text-orange-500 font-semibold">{card.tag}</span>
                  <h3 className="text-lg font-black text-gray-900 mt-2 mb-2">{card.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#fdfcfb] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#fdfcfb] to-transparent pointer-events-none" />
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => handleUserInteract(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              active === i ? "bg-orange-500 w-6" : "bg-gray-300 w-2"
            }`}
          />
        ))}
      </div>

      {/* Arrows */}
      <div className="flex justify-center gap-3 mt-6">
        <button
          onClick={() => handleUserInteract(Math.max(0, active - 1))}
          disabled={active === 0}
          className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-orange-400 hover:text-orange-500 disabled:opacity-30 transition-all"
        >
          ←
        </button>
        <button
          onClick={() => handleUserInteract((active + 1) % cards.length)}
          className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-orange-400 hover:text-orange-500 transition-all"
        >
          →
        </button>
      </div>
    </section>
  );
}
