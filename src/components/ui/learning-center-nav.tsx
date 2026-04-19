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
    <header className="sticky top-0 z-50 border-b border-[color:var(--brand-line)] bg-[color:rgb(245_241_231_/_0.95)] backdrop-blur-sm">
      {/* Top bar — matches landing page nav */}
      <SiteNav activePage="resources" />

      {/* Sub-nav tabs */}
      <div className="overflow-x-auto border-t border-[color:var(--brand-line)] scrollbar-hide">
        <div className="flex items-center gap-1 px-8 md:px-10 min-w-max">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-semibold px-3.5 py-2.5 transition-all whitespace-nowrap ${
                isActive(link)
                  ? "border-b-2 border-[var(--brand-gold)] text-[var(--brand-teal)]"
                  : "text-[color:var(--brand-muted)] hover:text-[var(--brand-teal)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="space-y-1 border-t border-[color:var(--brand-line)] bg-[var(--brand-surface)] px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-2 text-sm font-medium transition-colors ${
                isActive(link) ? "text-[var(--brand-teal)]" : "text-[color:var(--brand-muted)] hover:text-[var(--brand-teal)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-[color:var(--brand-line)] pt-4">
            <a
              href="https://calendly.com/1stbaseai/30min"
              className="block rounded-full bg-[var(--brand-gold)] px-5 py-3 text-center text-sm font-bold text-[var(--brand-teal-deep)]"
            >
              Book a session
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
