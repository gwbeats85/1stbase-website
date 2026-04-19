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
    <div className="min-h-screen bg-[#EAE9E0] flex flex-col">
      <SiteNav sticky activePage="blog" />

      {/* Header */}
      <div className="px-8 md:px-10 pt-16 pb-12 max-w-4xl mx-auto w-full">
        <span className="block mb-4 text-xs uppercase tracking-widest text-[#c4622d] font-semibold">
          The Blog
        </span>
        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-[#1a3738] leading-[0.95] mb-4">
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
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#c4622d] bg-orange-50 px-2.5 py-1 rounded-full mb-2">
                  {post.tag}
                </span>
                <p className="text-sm text-gray-400">{post.date}</p>
                <p className="text-sm text-gray-400">{post.readTime}</p>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#1a3738] mb-2 group-hover:text-[#c4622d] transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-gray-500 leading-relaxed">{post.excerpt}</p>
                <span className="inline-block mt-4 text-sm font-semibold text-[#c4622d]">
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
