"use client";

import { useState } from "react";
import Link from "next/link";
import { AboutModal } from "@/components/ui/about-modal";
import { LogoMark } from "@/components/ui/logo-mark";

interface SiteNavProps {
  sticky?: boolean;
  activePage?: "blog" | "resources" | "learn";
}

export function SiteNav({ sticky = false, activePage }: SiteNavProps) {
  const [aboutOpen, setAboutOpen] = useState(false);

  const linkClass = (page?: string) =>
    `text-sm font-medium transition-colors ${
      activePage === page
        ? "text-[var(--brand-graphite)] font-semibold"
        : "text-[color:var(--brand-muted)] hover:text-[var(--brand-graphite)]"
    }`;

  return (
    <>
      <AboutModal isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
      <div
        className={`flex items-center justify-between px-8 md:px-10 py-6 bg-[var(--brand-cream)] ${
          sticky ? "sticky top-0 z-50 border-b border-[color:var(--brand-line)] bg-[color:rgb(245_235_221_/_0.9)] backdrop-blur-sm" : ""
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5">
          <LogoMark size={32} />
          <span className="font-bold text-xl tracking-tight text-[var(--brand-graphite)]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            1st Base <span className="text-[var(--brand-blue)]">AI</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          <Link href="/learn" className={linkClass("learn")}>
            Learning Center
          </Link>
          <Link href="/#newsletter" className={linkClass()}>
            Newsletter
          </Link>
          <Link href="/blog" className={linkClass("blog")}>
            Blog
          </Link>
          <button
            onClick={() => setAboutOpen(true)}
            className={linkClass()}
          >
            About
          </button>
        </nav>

        <a
          href="https://calendly.com/1stbaseai/30min"
          className="bg-[var(--brand-graphite)] px-5 py-2.5 text-sm font-bold text-[var(--brand-cream)] transition-colors hover:bg-[var(--brand-graphite-2)]"
        >
          Book a session
        </a>
      </div>
    </>
  );
}
