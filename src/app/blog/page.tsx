import Link from "next/link";
import { posts } from "@/data/posts";
import { SiteFooter } from "@/components/ui/site-footer";

export const metadata = {
  title: "Blog — 1st Base AI",
  description: "AI tips, guides, and tutorials for non-technical people.",
};

export default function BlogPage() {
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
          <Link href="/blog" className="text-sm font-medium text-gray-900 transition-colors">Blog</Link>
          <a href="/#about" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">About</a>
        </nav>
        <a
          href="https://calendly.com/1stbaseai/30min"
          className="bg-gray-900 hover:bg-gray-700 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors"
        >
          Book a session
        </a>
      </div>

      {/* Header */}
      <div className="px-8 md:px-10 pt-16 pb-12 max-w-4xl mx-auto w-full">
        <span className="block mb-4 text-xs uppercase tracking-widest text-orange-500 font-semibold">
          The Blog
        </span>
        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-gray-900 leading-[0.95] mb-4">
          AI tips for real people
        </h1>
        <p className="text-lg text-gray-500 max-w-lg">
          No fluff. Practical guides and breakdowns so you can actually use this stuff.
        </p>
      </div>

      {/* Posts */}
      <div className="flex-1 px-8 md:px-10 pb-24 max-w-4xl mx-auto w-full">
        <div className="divide-y divide-gray-100">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col md:flex-row md:items-start gap-4 py-10 hover:opacity-80 transition-opacity"
            >
              {/* Tag + date */}
              <div className="md:w-48 shrink-0">
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-orange-500 bg-orange-50 px-2.5 py-1 rounded-full mb-2">
                  {post.tag}
                </span>
                <p className="text-sm text-gray-400">{post.date}</p>
                <p className="text-sm text-gray-400">{post.readTime}</p>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-gray-500 leading-relaxed">{post.excerpt}</p>
                <span className="inline-block mt-4 text-sm font-semibold text-orange-500">
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
