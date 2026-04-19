"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SiteNav } from "@/components/ui/site-nav";

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
    <header className="sticky top-0 z-50 bg-[#EAE9E0]/95 backdrop-blur-sm border-b border-gray-100">
      {/* Top bar — matches landing page nav */}
      <SiteNav activePage="resources" />

      {/* Sub-nav tabs */}
      <div className="border-t border-gray-100 overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-1 px-8 md:px-10 min-w-max">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-semibold px-3.5 py-2.5 transition-all whitespace-nowrap ${
                isActive(link)
                  ? "text-[#c4622d] border-b-2 border-[#c4622d]"
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
                isActive(link) ? "text-[#c4622d]" : "text-gray-600 hover:text-[#1a3738]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-100">
            <a
              href="https://calendly.com/1stbaseai/30min"
              className="block text-center bg-[#255253] text-white text-sm font-bold px-5 py-3 rounded-full"
            >
              Book a session
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
