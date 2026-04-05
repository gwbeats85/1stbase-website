"use client";

import { FloatingIconsHero } from '@/components/ui/floating-icons-hero-section';
import type { FloatingIconsHeroProps } from '@/components/ui/floating-icons-hero-section';

const Empty = () => <></>;

const icons: FloatingIconsHeroProps['icons'] = [
  { id: 1,  icon: Empty, img: '/logos/chatgpt.svg',    label: 'ChatGPT',    className: 'top-[12%] left-[8%]' },
  { id: 2,  icon: Empty, img: '/logos/claude.png',     label: 'Claude',     className: 'top-[20%] right-[10%]' },
  { id: 3,  icon: Empty, img: '/logos/gemini.png',     label: 'Gemini',     className: 'top-[70%] left-[8%]' },
  { id: 4,  icon: Empty, img: '/logos/grok.png',       label: 'Grok',       className: 'bottom-[12%] right-[10%]' },
  { id: 5,  icon: Empty, img: '/logos/notion.png',     label: 'Notion',     className: 'top-[6%] left-[32%]' },
  { id: 6,  icon: Empty, img: '/logos/copilot.png',    label: 'Copilot',    className: 'top-[6%] right-[32%]' },
  { id: 7,  icon: Empty, img: '/logos/zapier.png',     label: 'Zapier',     className: 'bottom-[10%] left-[28%]' },
  { id: 8,  icon: Empty, img: '/logos/perplexity.png', label: 'Perplexity', className: 'top-[42%] left-[4%]' },
  { id: 9,  icon: Empty, img: '/logos/youtube.png',    label: 'YouTube',    className: 'top-[75%] right-[28%]' },
  { id: 10, icon: Empty, img: '/logos/midjourney.png', label: 'Midjourney', className: 'top-[88%] left-[55%]' },
  { id: 11, icon: Empty, img: '/logos/linkedin.png',   label: 'LinkedIn',   className: 'top-[50%] right-[4%]' },
  { id: 12, icon: Empty, img: '/logos/whatsapp.svg',   label: 'WhatsApp',   className: 'top-[55%] left-[4%]' },
];

export function Hero() {
  return (
    <FloatingIconsHero
      title="I Teach People How To Use AI"
      subtitle="You already know what you want to do. I teach you the tools to go build it — at your own pace, no tech background needed."
      ctaText="Book a free intro call →"
      ctaHref="#quiz"
      secondaryText="or come to the meetup ↓"
      secondaryHref="#meetup"
      icons={icons}
    />
  );
}
