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
    <div className="relative w-full bg-[#255253] pt-10 pb-4 px-6 flex items-center justify-center overflow-visible">
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

      <div className="text-white text-2xl md:text-4xl font-bold flex flex-wrap items-baseline gap-x-2">
        Hey, have you tried{" "}
        <Typewriter
          text={tools}
          speed={60}
          deleteSpeed={35}
          waitTime={1800}
          cursorChar="_"
          cursorClassName=""
          className="text-[#c4622d] font-bold"
        />
      </div>
    </div>
  );
}
