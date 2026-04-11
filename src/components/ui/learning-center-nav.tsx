"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/resources", label: "Hub", exact: true },
  { href: "/resources/tools", label: "Tools" },
  { href: "/resources/compare", label: "Compare" },
  { href: "/resources/official-docs", label: "Official Docs" },
  { href: "/resources/prompts", label: "Prompts" },
  { href: "/resources/glossary", label: "Glossary" },
  { href: "/resources/workflows", label: "Workflows" },
  { href: "/resources/news", label: "News" },
  { href: "/resources/pricing", label: "Pricing" },
];

export function LearningCenterNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  function isActive(link: { href: string; exact?: boolean }) {
    if (link.exact) return pathname === link.href;
    return pathname === link.href || pathname.startsWith(link.href + "/");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-[#fdfcfb]/95 backdrop-blur-sm">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        <Link href="/" className="font-black text-xl tracking-tight text-gray-900">
          1stbaseai<span className="text-orange-500">.com</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/learn" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            Learn
          </Link>
          <Link href="/resources" className="text-sm font-bold text-gray-900">
            Resources
          </Link>
          <Link href="/blog" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            Blog
          </Link>
          <a
            href="https://calendly.com/1stbaseai/30min"
            className="bg-gray-900 hover:bg-gray-700 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors"
          >
            Book a session
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-500 hover:text-gray-900"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Sub-nav tabs */}
      <div className="border-t border-gray-100 overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-1 px-6 md:px-10 min-w-max">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-semibold px-3.5 py-2.5 rounded-t-lg transition-all whitespace-nowrap ${
                isActive(link)
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-2 text-sm font-medium transition-colors ${
                isActive(link) ? "text-orange-500" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-100">
            <a
              href="https://calendly.com/1stbaseai/30min"
              className="block text-center bg-gray-900 text-white text-sm font-bold px-5 py-3 rounded-full"
            >
              Book a session
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
