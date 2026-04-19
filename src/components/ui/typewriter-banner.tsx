"use client";

import Image from "next/image";
import { Typewriter } from "@/components/ui/typewriter";

const tools = [
  "ChatGPT?",
  "Claude?",
  "Gemini?",
  "Copilot?",
  "Grok?",
];

export function TypewriterBanner() {
  return (
    <div className="relative flex w-full items-center justify-center overflow-visible bg-[linear-gradient(180deg,_var(--brand-teal)_0%,_var(--brand-teal-deep)_100%)] px-6 pb-6 pt-10">
      {/* Sloth peeking over the top edge */}
      <div className="absolute -top-[69px] right-16 w-32 pointer-events-none select-none">
        <Image
          src="/sloth.png"
          alt="Byte the sloth"
          width={112}
          height={90}
          className="w-full h-auto"
          draggable={false}
        />
      </div>

      <div className="flex flex-wrap items-baseline gap-x-2 text-2xl font-bold text-[var(--brand-surface)] md:text-4xl">
        Hey, have you tried{" "}
        <Typewriter
          text={tools}
          speed={60}
          deleteSpeed={35}
          waitTime={1800}
          cursorChar="_"
          cursorClassName=""
          className="font-bold text-[var(--brand-gold)]"
        />
      </div>
    </div>
  );
}
