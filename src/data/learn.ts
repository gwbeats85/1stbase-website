export type Lesson = {
  slug: string;
  title: string;
  level: number;
  levelLabel: string;
  tag: string;
  description: string;
  duration: string;
  comingSoon?: boolean;
};

export type OnlineResource = {
  name: string;
  company: string;
  url: string;
  description: string;
  logo?: string;
};

export type Download = {
  name: string;
  description: string;
  filename?: string;
  comingSoon?: boolean;
};

export type Prompt = {
  title: string;
  category: string;
  prompt: string;
  tip?: string;
};

// ── Lessons ──────────────────────────────────────────────────────────────────

export const lessons: Lesson[] = [
  // Level 1 — Foundations
  {
    slug: "welcome",
    title: "Welcome to 1st Base — Start Here",
    level: 0,
    levelLabel: "Start Here",
    tag: "Welcome",
    description: "What this community is, how it works, and the fastest path to getting value from AI.",
    duration: "5 min read",
  },
  {
    slug: "set-up-your-toolkit",
    title: "Set Up Your AI Toolkit",
    level: 1,
    levelLabel: "Level 1",
    tag: "Foundations",
    description: "Create your free accounts for ChatGPT, Claude, and Gemini. Takes 10 minutes. Do this first.",
    duration: "10 min",
    comingSoon: true,
  },
  {
    slug: "your-first-prompt",
    title: "Your First Prompt",
    level: 1,
    levelLabel: "Level 1",
    tag: "Foundations",
    description: "The exact formula for talking to AI that actually works. One simple structure changes everything.",
    duration: "8 min",
    comingSoon: true,
  },
  {
    slug: "choosing-the-right-tool",
    title: "Which AI Should You Use?",
    level: 1,
    levelLabel: "Level 1",
    tag: "Foundations",
    description: "ChatGPT vs Claude vs Gemini vs Perplexity — when to use each one and why.",
    duration: "10 min",
    comingSoon: true,
  },
  // Level 2 — Daily Use
  {
    slug: "ai-for-email",
    title: "Write Better Emails in 2 Minutes",
    level: 2,
    levelLabel: "Level 2",
    tag: "Daily Use",
    description: "Stop staring at a blank email. Drop your bullet points in, get a polished draft out.",
    duration: "8 min",
    comingSoon: true,
  },
  {
    slug: "ai-on-mobile",
    title: "Using AI on Your Phone",
    level: 2,
    levelLabel: "Level 2",
    tag: "Daily Use",
    description: "Voice mode, camera, on-the-go research. Your phone is now the most powerful tool in your pocket.",
    duration: "10 min",
    comingSoon: true,
  },
  // Level 3 — Tools
  {
    slug: "image-generation-basics",
    title: "Generate Images with AI",
    level: 3,
    levelLabel: "Level 3",
    tag: "Tools",
    description: "Canva AI, Midjourney, and free tools. How to get images that actually look good.",
    duration: "12 min",
    comingSoon: true,
  },
  {
    slug: "automation-intro",
    title: "Your First Automation",
    level: 3,
    levelLabel: "Level 3",
    tag: "Tools",
    description: "Connect two apps together with Zapier — no code. Set it up once, let it run forever.",
    duration: "15 min",
    comingSoon: true,
  },
];

// ── Online Resources ──────────────────────────────────────────────────────────

export const onlineResources: OnlineResource[] = [
  {
    name: "Anthropic Learn",
    company: "Anthropic",
    url: "https://www.anthropic.com/learn",
    description: "Official courses on building with Claude and using AI at work.",
    logo: "/logos/claude.png",
  },
  {
    name: "OpenAI Academy",
    company: "OpenAI",
    url: "https://academy.openai.com/",
    description: "Expert-led workshops and on-demand videos from the ChatGPT team.",
    logo: "/logos/chatgpt.svg",
  },
  {
    name: "Google AI Skills",
    company: "Google",
    url: "https://www.skills.google/paths/249",
    description: "Free learning paths for Gemini and Google Workspace AI tools.",
    logo: "/logos/gemini.png",
  },
  {
    name: "Perplexity Guide",
    company: "Perplexity",
    url: "https://www.perplexity.ai/hub/getting-started",
    description: "How to use Perplexity as your AI-powered research engine.",
    logo: "/logos/perplexity.png",
  },
  {
    name: "Cursor Docs",
    company: "Cursor",
    url: "https://cursor.com/learn",
    description: "Learn the AI code editor changing how developers write software.",
  },
];

// ── Downloads ─────────────────────────────────────────────────────────────────

export const downloads: Download[] = [
  {
    name: "AI Quick-Start Cheat Sheet",
    description: "One page. The 5 tools, 5 prompts, and 5 habits that get you going immediately.",
    comingSoon: true,
  },
  {
    name: "Prompt Template Pack",
    description: "20 copy-paste prompts for email, social media, business tasks, and research.",
    comingSoon: true,
  },
  {
    name: "AI Tool Comparison Guide",
    description: "Side-by-side breakdown of ChatGPT, Claude, Gemini, and Perplexity — what each does best.",
    comingSoon: true,
  },
  {
    name: "AI Glossary",
    description: "Plain-English definitions for every AI term you'll actually encounter.",
    comingSoon: true,
  },
];

// ── One-Shot Prompts ──────────────────────────────────────────────────────────

export const prompts: Prompt[] = [
  {
    title: "Professional Email Writer",
    category: "Communication",
    prompt: `Write a professional email based on these bullet points:\n\n[paste your bullet points here]\n\nTone: [professional / friendly / direct]\nLength: [short / medium]`,
    tip: "Replace the brackets with your actual info before sending.",
  },
  {
    title: "Summarize Any Document",
    category: "Research",
    prompt: `Summarize the following document in plain English. Give me:\n1. The main point in one sentence\n2. 5 key takeaways\n3. Anything I should pay close attention to\n\n[paste document text here]`,
  },
  {
    title: "Social Media Caption",
    category: "Marketing",
    prompt: `Write 5 Instagram captions for a [type of business] that sells [product/service].\n\nTone: [casual / professional / funny]\nInclude a call to action in each one.\nKeep each under 150 characters.`,
  },
  {
    title: "Business Idea Validator",
    category: "Business",
    prompt: `I have a business idea: [describe your idea in 2-3 sentences].\n\nGive me:\n1. The biggest strength of this idea\n2. The top 3 risks or challenges\n3. Who the ideal first customer would be\n4. One thing I should test before investing more time`,
  },
  {
    title: "Learn Anything Faster",
    category: "Learning",
    prompt: `I want to learn [topic] as a complete beginner.\n\nGive me:\n1. A plain-English explanation of what it is\n2. The 3 most important concepts I need to understand first\n3. The best free resource to start with\n4. A simple first exercise I can do today`,
  },
  {
    title: "Meeting Follow-Up Email",
    category: "Communication",
    prompt: `Write a follow-up email after a meeting. Here are my notes from the meeting:\n\n[paste your notes]\n\nInclude: what was discussed, action items, and next steps. Keep it under 200 words.`,
  },
];
