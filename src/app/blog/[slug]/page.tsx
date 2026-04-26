import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/data/posts";
import { SiteFooter } from "@/components/ui/site-footer";
import { SiteNav } from "@/components/ui/site-nav";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — 1st Base AI`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen flex flex-col bg-[var(--brand-cream)]">
      <SiteNav sticky activePage="blog" />

      {/* Article */}
      <article className="flex-1 px-8 md:px-10 pt-12 pb-24 max-w-2xl mx-auto w-full">
        {/* Back */}
        <Link
          href="/blog"
          className="mb-10 inline-flex items-center gap-1.5 text-sm text-[color:var(--brand-muted)] transition-colors hover:text-[var(--brand-blue)]"
        >
          ← All posts
        </Link>

        {/* Meta */}
        <div className="mb-8">
          <span className="mb-4 inline-block rounded-full bg-[color:rgb(59_130_246_/_0.1)] px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">
            {post.tag}
          </span>
          <h1 className="mb-4 text-4xl font-black leading-[0.95] tracking-tight text-[var(--brand-graphite)] md:text-5xl">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-[color:var(--brand-muted)]">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-10 border-t border-[color:var(--brand-line)]" />

        {/* Content */}
        <div className="space-y-6">
          {post.content.map((block, i) => (
            <div key={i}>
              {block.heading && (
                <h2 className="mb-2 text-xl font-bold text-[var(--brand-graphite)]">{block.heading}</h2>
              )}
              {block.quote && (
                <blockquote className="my-2 border-l-4 border-[var(--brand-yellow)] pl-5 text-lg italic text-[color:var(--brand-muted)]">
                  {block.quote}
                </blockquote>
              )}
              {block.body && (
                <p className="text-lg leading-relaxed text-[color:var(--brand-muted)]">{block.body}</p>
              )}
              {block.list && (
                <ul className="mt-2 space-y-2">
                  {block.list.map((item, j) => (
                    <li key={j} className="flex gap-3 text-lg leading-relaxed text-[color:var(--brand-muted)]">
                      <span className="mt-0.5 shrink-0 font-bold text-[var(--brand-blue)]">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-[2rem] bg-[var(--brand-graphite)] p-8 text-center shadow-[0_28px_80px_-46px_rgba(21,21,21,0.4)]">
          <p className="mb-2 text-xl font-bold text-[var(--brand-cream)]">Want help putting this into practice?</p>
          <p className="mb-6 text-sm text-[color:rgba(245,235,221,0.66)]">Book a free intro call — I&apos;ll show you exactly how to apply this to your situation.</p>
          <a
            href="https://calendly.com/1stbaseai/30min"
            className="inline-block rounded-full bg-[var(--brand-yellow)] px-8 py-3.5 font-bold text-[var(--brand-graphite)] transition-colors hover:bg-[var(--brand-yellow-deep)]"
          >
            Book a free call →
          </a>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
