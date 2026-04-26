import Link from "next/link";
import { posts } from "@/data/posts";
import { SiteFooter } from "@/components/ui/site-footer";
import { SiteNav } from "@/components/ui/site-nav";

export const metadata = {
  title: "Blog — 1st Base AI",
  description: "AI tips, guides, and tutorials for non-technical people.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--brand-cream)]">
      <SiteNav sticky activePage="blog" />

      {/* Header */}
      <div className="px-8 md:px-10 pt-16 pb-12 max-w-4xl mx-auto w-full">
        <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.26em] text-[var(--brand-blue)]">
          The Blog
        </span>
        <h1 className="mb-4 text-5xl font-black leading-[0.95] tracking-tight text-[var(--brand-graphite)] md:text-6xl">
          AI tips for real people
        </h1>
        <p className="max-w-lg text-lg text-[color:var(--brand-muted)]">
          No fluff. Practical guides and breakdowns so you can actually use this stuff.
        </p>
      </div>

      {/* Posts */}
      <div className="flex-1 px-8 md:px-10 pb-24 max-w-4xl mx-auto w-full">
        <div className="divide-y divide-[color:var(--brand-line)]">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-4 py-10 transition-opacity hover:opacity-85 md:flex-row md:items-start"
            >
              {/* Tag + date */}
              <div className="md:w-48 shrink-0">
                <span className="mb-2 inline-block rounded-full bg-[color:rgb(59_130_246_/_0.1)] px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">
                  {post.tag}
                </span>
                <p className="text-sm text-[color:var(--brand-muted)]">{post.date}</p>
                <p className="text-sm text-[color:var(--brand-muted)]">{post.readTime}</p>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="mb-2 text-2xl font-bold leading-snug text-[var(--brand-graphite)] transition-colors group-hover:text-[var(--brand-blue)]">
                  {post.title}
                </h2>
                <p className="leading-relaxed text-[color:var(--brand-muted)]">{post.excerpt}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-[var(--brand-blue)] transition-colors group-hover:text-[var(--brand-blue-deep)]">
                  Read →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
