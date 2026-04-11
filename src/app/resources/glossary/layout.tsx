import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Glossary — 1st Base AI",
  description: "Plain-English definitions for the AI terms you keep seeing. 30+ terms explained for beginners — no jargon, no fluff.",
};

export default function GlossaryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
