import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Prompt Library — 1st Base AI",
  description: "Ready-to-use prompts for work, writing, research, and more. Copy, paste, and customize for your exact situation.",
};

export default function PromptsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
