"use client";

import React from "react";
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

interface FlipLinkProps {
  children: string;
  href: string;
}

const FlipLink = ({ children, href }: FlipLinkProps) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{ lineHeight: 0.75 }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
            transition={{ duration: DURATION, ease: "easeInOut", delay: STAGGER * i }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
            transition={{ duration: DURATION, ease: "easeInOut", delay: STAGGER * i }}
            className="inline-block text-[var(--brand-blue)]"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export const RevealLinks = () => {
  return (
    <section className="w-full bg-[var(--brand-graphite)] px-8 py-24 text-[var(--brand-cream)]">
      <p className="mb-12 text-sm font-medium uppercase tracking-widest text-[color:rgba(245,235,221,0.48)]">Find me online</p>
      <FlipLink href="https://x.com/1stbaseai">Twitter / X</FlipLink>
      <FlipLink href="https://instagram.com/1stbaseai">Instagram</FlipLink>
      <FlipLink href="https://github.com/1stbaseai">GitHub</FlipLink>
      <FlipLink href="mailto:juantacosancho@gmail.com">Email</FlipLink>
    </section>
  );
};
