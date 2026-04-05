import { ShuffleHero as Hero } from "@/components/ui/shuffle-hero";
import { TypewriterBanner } from "@/components/ui/typewriter-banner";
import { Fundamentals } from "@/components/ui/fundamentals";
import { UseCases } from "@/components/ui/use-cases";
import { Quiz } from "@/components/ui/quiz";
import { AiNews } from "@/components/ui/ai-news";
import { About } from "@/components/ui/about";
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
      <About />
      <SiteFooter />
      <FloatingChat />
    </main>
  );
}
