import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI News & Updates — 1st Base AI",
  description: "Curated AI news for people who don't have time to follow everything. What actually matters, updated regularly.",
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
