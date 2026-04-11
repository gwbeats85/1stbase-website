import { ShuffleHero as Hero } from "@/components/ui/shuffle-hero";
import { TypewriterBanner } from "@/components/ui/typewriter-banner";
import { Fundamentals } from "@/components/ui/fundamentals";
import { UseCases } from "@/components/ui/use-cases";
import { Quiz } from "@/components/ui/quiz";
import { AiNews } from "@/components/ui/ai-news";
import { SiteFooter } from "@/components/ui/site-footer";
import { FloatingChat } from "@/components/ui/floating-chat";

export default function Home() {
  return (
    <main>
      <Hero />
      <TypewriterBanner />
      <Fundamentals />
      <UseCases />
      <Quiz />
      <AiNews />

      {/* Newsletter + Community Section */}
      <section id="newsletter" className="py-24 bg-gray-900 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest text-orange-500 font-semibold">Stay in the loop</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            The AI newsletter that doesn&apos;t waste your time.
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
            Real tools. Real workflows. Practical breakdowns every week — no hype, no filler. Free forever.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-gray-800 border border-gray-700 rounded-full px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors text-sm"
              required
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3 rounded-full text-sm transition-colors whitespace-nowrap"
            >
              Subscribe Free
            </button>
          </form>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-gray-600 text-sm">or</span>
            <a
              href="https://skool.com/1stbaseai"
              target="_blank"
              className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold px-7 py-3 rounded-full text-sm hover:bg-gray-100 transition-colors"
            >
              Join the Community on Skool →
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
      <FloatingChat />
    </main>
  );
}
