import Link from "next/link";
import { Button } from "@/components/ui/button";

interface FooterProps {
  logo: React.ReactNode;
  brandName: string;
  socialLinks: Array<{ icon: React.ReactNode; href: string; label: string }>;
  mainLinks: Array<{ href: string; label: string }>;
  legalLinks: Array<{ href: string; label: string }>;
  copyright: { text: string; license?: string };
}

export function Footer({ logo, brandName, socialLinks, mainLinks, legalLinks, copyright }: FooterProps) {
  return (
    <footer className="border-t border-[color:rgba(245,235,221,0.12)] bg-[var(--brand-graphite-2)] pb-6 pt-16 text-[color:rgba(245,235,221,0.7)] lg:pb-8 lg:pt-24">
      <div className="px-4 lg:px-8">
        <div className="md:flex md:items-start md:justify-between">
          <Link href="/" className="flex items-center gap-x-2" aria-label={brandName}>
            {logo}
            <span className="font-bold text-xl text-[var(--brand-cream)]">{brandName}</span>
          </Link>
          <ul className="flex list-none mt-6 md:mt-0 space-x-3">
            {socialLinks.map((link, i) => (
              <li key={i}>
                <Button variant="secondary" size="icon" className="h-10 w-10 rounded-full border border-[color:rgba(245,235,221,0.12)] bg-[color:rgba(245,235,221,0.08)] text-[color:rgba(245,235,221,0.8)] hover:bg-[color:rgba(245,235,221,0.16)]" asChild>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                    {link.icon}
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 border-t border-[color:rgba(245,235,221,0.12)] pt-6 md:mt-4 md:pt-8 lg:grid lg:grid-cols-10">
          <nav className="lg:mt-0 lg:col-[4/11]">
            <ul className="list-none flex flex-wrap -my-1 -mx-2 lg:justify-end">
              {mainLinks.map((link, i) => (
                <li key={i} className="my-1 mx-2 shrink-0">
                  <a href={link.href} className="text-sm text-[color:rgba(245,235,221,0.7)] transition-colors underline-offset-4 hover:text-[var(--brand-yellow)] hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-6 lg:mt-0 lg:col-[4/11]">
            <ul className="list-none flex flex-wrap -my-1 -mx-3 lg:justify-end">
              {legalLinks.map((link, i) => (
                <li key={i} className="my-1 mx-3 shrink-0">
                  <a href={link.href} className="text-sm text-[color:rgba(245,235,221,0.45)] transition-colors underline-offset-4 hover:text-[color:rgba(245,235,221,0.8)] hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 whitespace-nowrap text-sm leading-6 text-[color:rgba(245,235,221,0.45)] lg:col-[1/4] lg:row-[1/3] lg:mt-0">
            <div>{copyright.text}</div>
            {copyright.license && <div>{copyright.license}</div>}
          </div>
        </div>
      </div>
    </footer>
  );
}
