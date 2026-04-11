import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Tools Directory — 1st Base AI",
  description: "Every major AI tool in one place — what it does, who it's for, and whether there's a free tier. Searchable and filterable for beginners and pros.",
};

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
