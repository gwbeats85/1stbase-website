import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/data/posts";
import { SiteFooter } from "@/components/ui/site-footer";

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
    <div className="min-h-screen bg-[#fdfcfb] flex flex-col">
      {/* Nav */}
      <div className="flex items-center justify-between px-8 md:px-10 py-7">
        <Link href="/" className="font-black text-xl tracking-tight text-gray-900">
          1stbaseai<span className="text-orange-500">.com</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          <a href="/#learn" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">What You&apos;ll Learn</a>
          <a href="/#news" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">AI News</a>
          <Link href="/blog" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Blog</Link>
          <a href="/#about" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">About</a>
        </nav>
        <a
          href="https://calendly.com/1stbaseai/30min"
          className="bg-gray-900 hover:bg-gray-700 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors"
        >
          Book a session
        </a>
      </div>

      {/* Article */}
      <article className="flex-1 px-8 md:px-10 pt-12 pb-24 max-w-2xl mx-auto w-full">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 transition-colors mb-10"
        >
          ← All posts
        </Link>

        {/* Meta */}
        <div className="mb-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-orange-500 bg-orange-50 px-2.5 py-1 rounded-full mb-4">
            {post.tag}
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-[0.95] mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 mb-10" />

        {/* Content */}
        <div className="space-y-6">
          {post.content.map((block, i) => (
            <div key={i}>
              {block.heading && (
                <h2 className="text-xl font-bold text-gray-900 mb-2">{block.heading}</h2>
              )}
              {block.quote && (
                <blockquote className="border-l-4 border-orange-500 pl-5 my-2 text-gray-500 italic text-lg">
                  {block.quote}
                </blockquote>
              )}
              {block.body && (
                <p className="text-gray-600 leading-relaxed text-lg">{block.body}</p>
              )}
              {block.list && (
                <ul className="mt-2 space-y-2">
                  {block.list.map((item, j) => (
                    <li key={j} className="flex gap-3 text-gray-600 text-lg leading-relaxed">
                      <span className="text-orange-500 font-bold mt-0.5 shrink-0">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-gray-900 rounded-3xl text-center">
          <p className="text-white font-bold text-xl mb-2">Want help putting this into practice?</p>
          <p className="text-gray-400 mb-6 text-sm">Book a free intro call — I&apos;ll show you exactly how to apply this to your situation.</p>
          <a
            href="https://calendly.com/1stbaseai/30min"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-full transition-colors"
          >
            Book a free call →
          </a>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
