"use client";

import { useState } from "react";
import Link from "next/link";
import { AboutModal } from "@/components/ui/about-modal";

interface SiteNavProps {
  sticky?: boolean;
  activePage?: "blog" | "resources" | "learn";
}

export function SiteNav({ sticky = false, activePage }: SiteNavProps) {
  const [aboutOpen, setAboutOpen] = useState(false);

  const linkClass = (page?: string) =>
    `text-sm font-medium transition-colors ${
      activePage === page
        ? "text-gray-900 font-semibold"
        : "text-gray-500 hover:text-gray-900"
    }`;

  return (
    <>
      <AboutModal isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
      <div
        className={`flex items-center justify-between px-8 md:px-10 py-6 bg-[#fdfcfb] ${
          sticky ? "sticky top-0 z-50 border-b border-gray-100 bg-[#fdfcfb]/95 backdrop-blur-sm" : ""
        }`}
      >
        <Link href="/" className="font-black text-xl tracking-tight text-gray-900">
          1stbaseai<span className="text-orange-500">.com</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          <a
            href="/#learn"
            className={linkClass()}
          >
            What You&apos;ll Learn
          </a>
          <a
            href="/#newsletter"
            className={linkClass()}
          >
            Newsletter
          </a>
          <a
            href="https://skool.com/1stbaseai"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass()}
          >
            Community
          </a>
          <Link href="/blog" className={linkClass("blog")}>
            Blog
          </Link>
          <Link href="/resources" className={linkClass("resources")}>
            Learning Center
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
          className="bg-gray-900 hover:bg-gray-700 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors"
        >
          Book a session
        </a>
      </div>
    </>
  );
}
