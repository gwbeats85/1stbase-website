export interface UseCaseCard {
  id: number;
  tag: string;
  title: string;
  description: string;
  image: string;
}

export const cards: UseCaseCard[] = [
  {
    id: 1,
    tag: "Everyday Life",
    title: "Use AI like a personal assistant",
    description: "Plan meals, research trips, make decisions faster, draft messages. AI fits right into your daily routine once you know how to talk to it.",
    image: "/cards/everyday.png",
  },
  {
    id: 2,
    tag: "Privacy & Local AI",
    title: "Your AI. Your data. Your hardware.",
    description: "You don't need a $3,000 server. A regular laptop or mini PC can run powerful open-source models like Llama and Mistral — no subscriptions, no data sent anywhere.",
    image: "/cards/local-ai.png",
  },
  {
    id: 3,
    tag: "Open Source AI",
    title: "Free, powerful AI you actually own",
    description: "ChatGPT isn't the only option. There are free models you can run completely offline — great for businesses that can't share sensitive data with big tech.",
    image: "/cards/opensource.png",
  },
  {
    id: 4,
    tag: "At Work",
    title: "Write better, faster — every time",
    description: "Emails, reports, summaries, presentations. AI handles the blank page so you can focus on the parts that actually need you.",
    image: "/cards/work.png",
  },
  {
    id: 5,
    tag: "Creative Projects",
    title: "Generate images, video & more",
    description: "Midjourney, Sora, ElevenLabs — the creative tools are insane right now. I'll show you which ones are worth learning and how to actually use them.",
    image: "/cards/creative.png",
  },
  {
    id: 6,
    tag: "Small Business",
    title: "AI that works for your business",
    description: "Marketing copy, customer replies, social media, inventory tracking. You know your business — AI just handles the repetitive parts.",
    image: "/cards/business.png",
  },
  {
    id: 7,
    tag: "Learn Anything",
    title: "Research and learn at a different speed",
    description: "AI is the best tutor that's ever existed. Ask it anything, go deep on any topic, get explanations that actually make sense.",
    image: "/cards/learn.png",
  },
  {
    id: 8,
    tag: "Automation",
    title: "Let AI handle the boring stuff",
    description: "Repetitive tasks, scheduling, data entry, follow-ups. Once you set it up it just runs. I'll show you how to build your first workflow.",
    image: "/cards/automate.png",
  },
];
