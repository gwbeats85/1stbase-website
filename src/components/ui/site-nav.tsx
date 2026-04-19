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
        ? "text-[#1a3738] font-semibold"
        : "text-gray-500 hover:text-[#1a3738]"
    }`;

  return (
    <>
      <AboutModal isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
      <div
        className={`flex items-center justify-between px-8 md:px-10 py-6 bg-[#EAE9E0] ${
          sticky ? "sticky top-0 z-50 border-b border-gray-100 bg-[#EAE9E0]/95 backdrop-blur-sm" : ""
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5">
          <LogoMark color="#255253" size={32} />
          <span className="font-bold text-xl tracking-tight text-[#1a3738]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            1st Base <span className="text-[#c4622d]">AI</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          <Link href="/learn" className={linkClass("learn")}>
            Learning Center
          </Link>
          <a
            href="/#newsletter"
            className={linkClass()}
          >
            Newsletter
          </a>
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
          className="bg-[#255253] hover:bg-[#183839] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors"
        >
          Book a session
        </a>
      </div>
    </>
  );
}
