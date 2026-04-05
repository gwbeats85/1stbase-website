export type ContentBlock = {
  heading?: string;
  body?: string;
  list?: string[];
  quote?: string;
};

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  tag: string;
  content: ContentBlock[];
};

export const posts: Post[] = [
  {
    slug: "ai-tools-for-beginners",
    title: "The 5 AI Tools Every Beginner Should Start With",
    date: "April 3, 2026",
    excerpt:
      "You don't need a tech background to get value from AI. Here are the five tools I recommend to every single person I coach — and why.",
    readTime: "5 min read",
    tag: "Getting Started",
    content: [
      {
        body: "Most people come to me overwhelmed. They've heard about ChatGPT, maybe tried it once, and got a generic response that felt useless. That's not a you problem — that's a prompt problem. Here's where I tell everyone to start.",
      },
      {
        heading: "1. ChatGPT (OpenAI)",
        body: "Still the best starting point. It handles writing, brainstorming, summarizing, and answering questions. Free tier is enough to get going. The skill you need to develop is learning how to ask it specific questions rather than vague ones.",
      },
      {
        heading: "2. Claude (Anthropic)",
        body: "Better than ChatGPT for reading and analyzing long documents. Drop in a PDF, a contract, a report — and ask it questions about what you just gave it. Incredibly useful for anyone who deals with paperwork.",
      },
      {
        heading: "3. Perplexity",
        body: "AI-powered search. Instead of Googling something and reading five articles, Perplexity reads them for you and gives you a direct answer with sources. Use it whenever you'd normally Google something research-heavy.",
      },
      {
        heading: "4. Notion AI",
        body: "If you already use Notion for notes or projects, Notion AI is built right in. It summarizes your notes, drafts documents, and helps you think through ideas without leaving your workspace.",
      },
      {
        heading: "5. Canva AI",
        body: "Design without being a designer. Magic Write generates copy, the AI image tools generate visuals, and Magic Design builds entire presentations from a prompt. If you make content for anything — social media, presentations, flyers — this is essential.",
      },
      {
        heading: "Start with one.",
        body: "Don't try to learn all five at once. Pick the one that matches what you do most, use it daily for two weeks, and let the habit form. That's the whole strategy.",
      },
    ],
  },
  {
    slug: "chatgpt-for-small-business",
    title: "How to Use ChatGPT to Run Your Small Business Smarter",
    date: "March 28, 2026",
    excerpt:
      "From writing emails to handling customer questions — here's how real small business owners are saving hours every week with ChatGPT.",
    readTime: "6 min read",
    tag: "Business",
    content: [
      {
        body: "If you own a small business and you're not using AI yet, you're doing extra work for no reason. I'm not talking about replacing anyone — I'm talking about getting the tedious stuff off your plate.",
      },
      {
        heading: "Write Better Emails in Half the Time",
        body: "Tell ChatGPT: 'Write a follow-up email to a customer who hasn't responded in a week. Keep it short and professional.' That's it. Edit the result to match your voice and send it. What used to take 10 minutes takes 2.",
      },
      {
        heading: "Create Social Media Content",
        body: "Give it your offer, your audience, and the platform. Ask it to write 5 Instagram captions for a business that sells X. You'll get options — pick the one that sounds like you, tweak it, post it.",
      },
      {
        heading: "Answer Customer Questions Consistently",
        body: "Build a knowledge base: paste in your FAQs, your policies, your service list. Tell ChatGPT to answer as your business. You now have a draft response for almost any inquiry. Copy, adjust, send.",
      },
      {
        heading: "Summarize Contracts and Documents",
        body: "Don't read a 10-page contract line by line. Paste it in and say 'Summarize the key points and flag anything unusual.' You still review it, but now you know where to focus.",
      },
      {
        heading: "The Honest Truth",
        body: "AI won't run your business. You still need judgment, relationships, and hustle. But it handles the repetitive, wordy stuff — and that adds up to real hours back in your week.",
      },
    ],
  },
  {
    slug: "what-is-ai-automation",
    title: "What Is AI Automation and Why Should You Care?",
    date: "March 20, 2026",
    excerpt:
      "You've heard the word. Here's what it actually means — and how regular people are using it to stop doing the same tasks over and over.",
    readTime: "4 min read",
    tag: "Automation",
    content: [
      {
        body: "Automation has been around forever. What's new is that AI makes it possible without writing a single line of code. Let me break it down simply.",
      },
      {
        heading: "Automation = doing something automatically when something else happens",
        body: "When someone fills out your contact form → you get an email. When you post on Instagram → it also posts to Facebook. When you get a new client → they get added to your spreadsheet. That's automation. It's been possible for years.",
      },
      {
        heading: "What AI adds to that",
        body: "AI adds intelligence to the middle step. Instead of just moving data from point A to point B, AI can read it, summarize it, write a response, make a decision, or generate something new. Now the automation can actually think a little.",
      },
      {
        heading: "A real example",
        body: "A small business owner I worked with gets customer inquiries by email. Old workflow: read the email, figure out what they want, write a reply. New workflow: email arrives → AI reads it → drafts a tailored response → drops it in drafts for review. She still approves everything. It just takes her 30 seconds instead of 5 minutes.",
      },
      {
        heading: "Tools that make this happen",
        body: "Zapier and Make (formerly Integromat) are the most popular no-code automation tools. They connect apps together. Layer in an AI step with OpenAI or Claude, and you have intelligent automation — no coding required.",
      },
      {
        heading: "Where to start",
        body: "Map out one repetitive task you do every week. Something manual, something you do the same way every time. That's your first automation target. Start there.",
      },
    ],
  },
  {
    slug: "stop-using-ai-wrong",
    title: "You're Using AI Wrong — Here's What's Actually Happening",
    date: "March 12, 2026",
    excerpt:
      "Bad results from AI aren't the AI's fault. Here's the one shift that changes everything about how you use these tools.",
    readTime: "4 min read",
    tag: "Tips",
    content: [
      {
        body: "The most common thing I hear from people who 'tried AI and it didn't work' — they typed one vague sentence and expected magic. That's not how it works.",
      },
      {
        heading: "AI is a contractor, not a mind reader",
        body: "When you hire a contractor, you give them a brief. You tell them what you need, what style you want, what to avoid, who it's for. You don't just say 'build me a thing.' AI is the same.",
      },
      {
        heading: "Vague prompt = vague result",
        body: "'Write me a bio' will get you a generic paragraph that sounds like it was written for a robot. 'Write a two-sentence professional bio for a Vancouver-based AI coach who works with small business owners and non-technical adults' gets you something real.",
      },
      {
        heading: "The fix: add context",
        body: "Before you hit enter, add three things: who you are, who this is for, and what tone you want. That single change improves your results by 80%. Not an exaggeration.",
      },
      {
        heading: "Iterate, don't regenerate",
        body: "If the result is close but not quite right, don't start over. Tell it what to fix. 'Make the second paragraph shorter' or 'make it sound less formal' works great. Treat it like a back-and-forth conversation.",
      },
      {
        heading: "The real shift",
        body: "Stop treating AI like a vending machine you put a coin in. Treat it like a capable person who needs a good brief. The more you give it, the better it performs.",
      },
    ],
  },
  {
    slug: "fear-to-fluent-ai-guide",
    title: "From Fear to Fluent: A Practical Guide to Mastering AI for Your Life and Business",
    date: "April 5, 2026",
    excerpt:
      "You don't need to become a computer scientist to master AI. Here's the full roadmap — from your first prompt to running automations for your business.",
    readTime: "8 min read",
    tag: "Guide",
    content: [
      {
        heading: "Closing the AI Gap",
        body: "In a world where digital headlines move faster than most of us can drink our morning coffee, it is easy to feel like an \"Everyday Learner\" — someone who sees the incredible potential of Artificial Intelligence but feels trapped behind a black box of technical jargon and coding requirements. You might feel like the game has started without you, but here is the truth: mastering AI isn't about becoming a computer scientist.",
      },
      {
        body: "At 1st Base AI, we treat this transition like a baseball diamond. You don't need to hit a home run on your first day; you just need to get to first base. Our mission is to demystify these tools for regular people and small business owners, helping you build exactly what you envision at your own pace.",
      },
      {
        quote: "You already know what you want to do. I teach you the tools to go build it.",
      },
      {
        heading: "Meet the \"Big Four\" AI Partners",
        body: "Navigating the AI landscape is simpler when you know which player to put in which position. Here is the current starting lineup of the leading platforms:",
      },
      {
        heading: "ChatGPT (OpenAI) — Best for General Reasoning & Commerce",
        body: "The platform has evolved into the GPT-5 series, featuring GPT-5.3 Instant for fast answers and GPT-5.4 Thinking for complex problems. For power users, the Pro tier offers \"Thinking Time\" settings — ranging from Light to Heavy — allowing you to prioritize either speed or deep accuracy. Don't miss the Agentic Commerce Protocol (ACP), which lets you shop and checkout with merchants like Etsy or Shopify directly in the chat, or the new CarPlay integration for hands-free productivity on the road.",
      },
      {
        heading: "Gemini (Google) — Best for Ecosystem Integration",
        body: "Gemini's superpower is its deep connection to Google Workspace. It uses Context IQ to reference your Gmail, Drive, and Docs to answer questions. High-value features include Audio Overview, which transforms heavy PDFs or research into a podcast-style conversation between two AI hosts, and Gemini Live for natural, back-and-forth voice coaching.",
      },
      {
        heading: "Claude (Anthropic) — Best for Complex Analysis & Coding",
        body: "Positioned as the ultimate \"Thinking Partner,\" Claude is the industry leader for logic-heavy work. Claude Opus 4.6 is the gold standard for enterprise agents and professional writing, while Claude Sonnet 4.6 provides frontier intelligence for coding and complex data workflows.",
      },
      {
        heading: "Perplexity — Best for Fact-Checking & Research",
        body: "Think of Perplexity as your Swiss-Army-Knife for the live web. It searches the internet in real time and provides up-to-date answers with clear, clickable citations — making it the premier tool for verifying information without the hallucinations common in other models.",
      },
      {
        heading: "AI for Small Business: Reclaiming Your Time",
        body: "For business owners, AI isn't a luxury — it's a productivity engine. By automating the \"blank-page problem,\" these tools can give a business owner back four to five hours a week to focus on growth rather than admin.",
      },
      {
        body: "One of the most important concepts we teach is the \"Trust Paradox.\" While consumers often claim social media is their \"least trusted\" source, it remains their \"high-influence\" source because that is where they engage with friends and family. AI helps you bridge this gap by rapidly identifying unique selling points and emerging customer needs so your messaging hits home.",
      },
      {
        body: "Here's how AI maps to common business needs:",
      },
      {
        list: [
          "Analyzing Finances — Upload docs to NotebookLM and turn raw data into actionable insights in minutes.",
          "Operations — Use Gemini in Workspace to automatically turn meeting notes into follow-up briefs.",
          "Marketing — Use GPT-5.4 or Gemini Vids to brainstorm social posts or build branded promo videos.",
          "Staffing — Build employee resource hubs and training manuals fast with NotebookLM.",
          "Business Strategy — Draft comprehensive proposals from existing files with Claude Opus 4.6.",
        ],
      },
      {
        heading: "The 1st Base AI Roadmap: A Level-Based Approach",
        body: "We reject the \"homework\" model. Our coaching is built on solving real problems in real-time sessions. Here is the path from curiosity to automation:",
      },
      {
        list: [
          "Level 1 — Foundations: What AI actually is (no fluff), prompting basics, and how to choose between ChatGPT, Claude, and Gemini.",
          "Level 2 — Daily Use: Integrating AI into your mobile workflow — writing emails, planning schedules, and using voice modes for research on the go.",
          "Level 3 — Tools Deep Dive: Creative scale, from image generation in Canva AI to simple automations that connect your apps.",
          "Level 4 — Business Track: Group Workshops and Business Retainers to automate customer communication and repetitive back-office workflows.",
        ],
      },
      {
        heading: "Pro Tips: The Prompting Framework",
        body: "Don't just \"ask\" AI — give it a mission. Use this format every time:",
      },
      {
        list: [
          "Instruction: What specifically do you want it to do?",
          "Context: What is the background or persona it should adopt?",
          "Input: What data or text should it use?",
          "Output Format: Do you want a table, a list, or an email draft?",
        ],
      },
      {
        heading: "Pro Tips: Privacy & Safety",
        body: "Treat AI like a public park — don't leave your sensitive luggage unattended.",
      },
      {
        list: [
          "Temporary Chats: Use this feature in ChatGPT for sensitive topics. While these aren't used for training, they are saved for 72 hours before deletion.",
          "Safety for Families: Platforms now include Age Prediction models to protect younger users. Parents can set \"Quiet Hours\" and disable features like image generation or voice mode for teens.",
        ],
      },
      {
        heading: "Take Your First Base",
        body: "AI is a collaboration tool, not a replacement for your human creativity. The goal is to move from uncertainty to fluency by solving the problems right in front of you.",
      },
      {
        body: "3 steps to start today:",
      },
      {
        list: [
          "Take the Quiz: Visit 1stbaseai.com. Our quiz is designed to meet you where you are, routing high-intent learners to booking and explorers to our resources.",
          "Sign up for The First Base Brief: Get our weekly newsletter — one tool, one tip, and one copy-paste prompt you can use immediately.",
          "Join the Vancouver, WA AI Club: If you're local, join our monthly meetup to see these tools in action in a low-pressure environment.",
        ],
      },
      {
        body: "Results aren't built on homework — they are built through real sessions and real problems. It's time to take your first base.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
