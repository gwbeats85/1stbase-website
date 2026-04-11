// ── Resource Data Model ───────────────────────────────────────────────────────

export type ResourceCategory =
  | "tools"
  | "official-docs"
  | "compare"
  | "prompts"
  | "glossary"
  | "workflows"
  | "news"
  | "pricing"
  | "safety"
  | "best-of";

export type ResourceType =
  | "tool"
  | "course"
  | "documentation"
  | "guide"
  | "comparison"
  | "glossary-term"
  | "workflow"
  | "news"
  | "prompt"
  | "pricing";

export type Audience = "beginner" | "intermediate" | "advanced" | "all";
export type PricingType = "free" | "freemium" | "paid" | "subscription" | "usage-based";
export type ResourceStatus = "active" | "deprecated" | "beta" | "coming-soon";

export interface Resource {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: ResourceCategory;
  provider?: string;
  resource_type: ResourceType;
  audience: Audience;
  official_source: boolean;
  free_tier: boolean;
  pricing_type: PricingType;
  tags: string[];
  url?: string;
  updated_at: string;
  reviewed_at: string;
  featured: boolean;
  status: ResourceStatus;
  related_items?: string[];
}

// ── AI Tools ──────────────────────────────────────────────────────────────────

export const aiTools: Resource[] = [
  {
    id: "chatgpt",
    slug: "chatgpt",
    title: "ChatGPT",
    summary: "OpenAI's flagship AI assistant. Best for everyday tasks, writing, coding, and image generation via DALL-E. The most-used AI tool in the world.",
    category: "tools",
    provider: "OpenAI",
    resource_type: "tool",
    audience: "all",
    official_source: true,
    free_tier: true,
    pricing_type: "freemium",
    tags: ["chat", "writing", "images", "voice", "code", "popular"],
    url: "https://chatgpt.com",
    updated_at: "2025-03",
    reviewed_at: "2025-03",
    featured: true,
    status: "active",
    related_items: ["claude", "gemini"],
  },
  {
    id: "claude",
    slug: "claude",
    title: "Claude",
    summary: "Anthropic's AI assistant. Exceptional at long documents, nuanced writing, and reasoning. Known for being helpful, harmless, and honest.",
    category: "tools",
    provider: "Anthropic",
    resource_type: "tool",
    audience: "all",
    official_source: true,
    free_tier: true,
    pricing_type: "freemium",
    tags: ["chat", "writing", "documents", "coding", "analysis"],
    url: "https://claude.ai",
    updated_at: "2025-03",
    reviewed_at: "2025-03",
    featured: true,
    status: "active",
    related_items: ["chatgpt", "gemini"],
  },
  {
    id: "gemini",
    slug: "gemini",
    title: "Gemini",
    summary: "Google's AI assistant, deeply integrated with Google Workspace. Best for research, Gmail, Docs, and using Google's search power.",
    category: "tools",
    provider: "Google",
    resource_type: "tool",
    audience: "all",
    official_source: true,
    free_tier: true,
    pricing_type: "freemium",
    tags: ["chat", "search", "google-workspace", "research", "multimodal"],
    url: "https://gemini.google.com",
    updated_at: "2025-03",
    reviewed_at: "2025-03",
    featured: true,
    status: "active",
    related_items: ["chatgpt", "claude", "perplexity"],
  },
  {
    id: "perplexity",
    slug: "perplexity",
    title: "Perplexity AI",
    summary: "AI-powered search engine that cites sources. Best for real-time research, fact-checking, and replacing Google searches with context.",
    category: "tools",
    provider: "Perplexity",
    resource_type: "tool",
    audience: "all",
    official_source: true,
    free_tier: true,
    pricing_type: "freemium",
    tags: ["search", "research", "citations", "real-time"],
    url: "https://perplexity.ai",
    updated_at: "2025-03",
    reviewed_at: "2025-03",
    featured: false,
    status: "active",
    related_items: ["chatgpt", "gemini"],
  },
  {
    id: "grok",
    slug: "grok",
    title: "Grok",
    summary: "xAI's AI assistant, available in X (Twitter). Has real-time access to X posts and can generate images. Good for social media research.",
    category: "tools",
    provider: "xAI",
    resource_type: "tool",
    audience: "intermediate",
    official_source: true,
    free_tier: true,
    pricing_type: "freemium",
    tags: ["chat", "social-media", "real-time", "images"],
    url: "https://x.com/i/grok",
    updated_at: "2025-03",
    reviewed_at: "2025-03",
    featured: false,
    status: "active",
    related_items: ["chatgpt"],
  },
  {
    id: "copilot",
    slug: "copilot",
    title: "Microsoft Copilot",
    summary: "Microsoft's AI embedded in Windows, Office, and Bing. If you use Microsoft 365, this is already available to you — use it.",
    category: "tools",
    provider: "Microsoft",
    resource_type: "tool",
    audience: "all",
    official_source: true,
    free_tier: true,
    pricing_type: "freemium",
    tags: ["microsoft", "office", "windows", "chat", "integration"],
    url: "https://copilot.microsoft.com",
    updated_at: "2025-03",
    reviewed_at: "2025-03",
    featured: false,
    status: "active",
    related_items: ["chatgpt"],
  },
  {
    id: "midjourney",
    slug: "midjourney",
    title: "Midjourney",
    summary: "The gold standard for AI image generation. Produces stunning, artistic images. Requires a subscription but results are unmatched.",
    category: "tools",
    provider: "Midjourney",
    resource_type: "tool",
    audience: "intermediate",
    official_source: true,
    free_tier: false,
    pricing_type: "subscription",
    tags: ["images", "art", "creative", "design"],
    url: "https://midjourney.com",
    updated_at: "2025-01",
    reviewed_at: "2025-01",
    featured: false,
    status: "active",
    related_items: ["dall-e", "stable-diffusion"],
  },
  {
    id: "canva-ai",
    slug: "canva-ai",
    title: "Canva AI",
    summary: "AI image generation and design tools built into Canva. Best for non-designers who need quick, polished visual content.",
    category: "tools",
    provider: "Canva",
    resource_type: "tool",
    audience: "beginner",
    official_source: true,
    free_tier: true,
    pricing_type: "freemium",
    tags: ["images", "design", "social-media", "beginner-friendly", "templates"],
    url: "https://canva.com",
    updated_at: "2025-02",
    reviewed_at: "2025-02",
    featured: false,
    status: "active",
    related_items: ["midjourney"],
  },
  {
    id: "cursor",
    slug: "cursor",
    title: "Cursor",
    summary: "AI-powered code editor that understands your entire codebase. Replaces VS Code for developers. The best AI coding tool available.",
    category: "tools",
    provider: "Anysphere",
    resource_type: "tool",
    audience: "advanced",
    official_source: true,
    free_tier: true,
    pricing_type: "freemium",
    tags: ["coding", "developer", "code-editor", "AI-ide"],
    url: "https://cursor.com",
    updated_at: "2025-03",
    reviewed_at: "2025-03",
    featured: false,
    status: "active",
    related_items: ["github-copilot"],
  },
  {
    id: "notebooklm",
    slug: "notebooklm",
    title: "NotebookLM",
    summary: "Google's AI research tool. Upload your documents and have a conversation with them. Generates audio overviews (podcasts) from your files.",
    category: "tools",
    provider: "Google",
    resource_type: "tool",
    audience: "all",
    official_source: true,
    free_tier: true,
    pricing_type: "free",
    tags: ["research", "documents", "audio", "study", "beginner-friendly"],
    url: "https://notebooklm.google",
    updated_at: "2025-02",
    reviewed_at: "2025-02",
    featured: true,
    status: "active",
    related_items: ["perplexity"],
  },
];

// ── Official Docs ─────────────────────────────────────────────────────────────

export interface OfficialDoc {
  provider: string;
  logo?: string;
  description: string;
  sections: {
    label: string;
    url: string;
    description: string;
  }[];
}

export const officialDocs: OfficialDoc[] = [
  {
    provider: "OpenAI",
    logo: "/logos/chatgpt.svg",
    description: "ChatGPT, GPT-4, DALL-E, Whisper, and the OpenAI API",
    sections: [
      { label: "Get Started", url: "https://help.openai.com/en/articles/6783457-what-is-chatgpt", description: "What is ChatGPT and how to use it" },
      { label: "ChatGPT Help Center", url: "https://help.openai.com", description: "Official support and how-to guides" },
      { label: "API Documentation", url: "https://platform.openai.com/docs", description: "For developers building with OpenAI APIs" },
      { label: "Model Overview", url: "https://platform.openai.com/docs/models", description: "All models, capabilities, and context windows" },
      { label: "Pricing", url: "https://openai.com/pricing", description: "ChatGPT Plus, Team, Enterprise plans" },
      { label: "System Status", url: "https://status.openai.com", description: "Real-time uptime and incident history" },
      { label: "Safety & Trust", url: "https://openai.com/safety", description: "Research and policies on AI safety" },
      { label: "OpenAI Academy", url: "https://academy.openai.com", description: "Free learning paths and structured courses" },
      { label: "Blog & Research", url: "https://openai.com/blog", description: "Latest news, research, and announcements" },
      { label: "Community & Plugins", url: "https://platform.openai.com/docs/plugins/overview", description: "Community projects, plugins, and integrations" },
    ],
  },
  {
    provider: "Anthropic",
    logo: "/logos/claude.png",
    description: "Claude — Anthropic's AI assistant and API",
    sections: [
      { label: "Get Started with Claude", url: "https://www.anthropic.com/claude", description: "Start using Claude in minutes" },
      { label: "Claude.ai Help", url: "https://support.anthropic.com", description: "Official Claude support center" },
      { label: "API Documentation", url: "https://docs.anthropic.com", description: "Full API reference for developers" },
      { label: "Claude Model Cards", url: "https://www.anthropic.com/model-catalog", description: "Claude 3 family — Haiku, Sonnet, Opus" },
      { label: "Pricing", url: "https://www.anthropic.com/pricing", description: "Claude Pro, Team, and API pricing" },
      { label: "System Status", url: "https://status.anthropic.com", description: "Service uptime and incidents" },
      { label: "Safety & Research", url: "https://www.anthropic.com/research", description: "Constitutional AI and safety work" },
      { label: "Anthropic Learn", url: "https://www.anthropic.com/learn", description: "Learning resources and guides for Claude" },
      { label: "Blog & News", url: "https://www.anthropic.com/blog", description: "Latest announcements and technical posts" },
      { label: "Research Papers", url: "https://www.anthropic.com/research", description: "Academic research and Constitutional AI papers" },
    ],
  },
  {
    provider: "Google",
    logo: "/logos/gemini.png",
    description: "Gemini — Google's AI assistant, models, and API",
    sections: [
      { label: "Get Started with Gemini", url: "https://gemini.google.com/app", description: "Try Gemini in your browser" },
      { label: "Gemini Help Center", url: "https://support.google.com/gemini", description: "Official support and guides" },
      { label: "API Documentation", url: "https://ai.google.dev/docs", description: "Gemini API reference for developers" },
      { label: "Model Overview", url: "https://deepmind.google/technologies/gemini/", description: "Gemini 1.5 Flash, Pro, Ultra" },
      { label: "AI Studio", url: "https://aistudio.google.com", description: "Free API playground — no code needed" },
      { label: "System Status", url: "https://status.cloud.google.com", description: "Google Cloud and API uptime" },
      { label: "Safety Principles", url: "https://ai.google/responsibility/principles/", description: "Google's AI responsibility work" },
      { label: "Google AI Skills", url: "https://www.skills.google/paths/249", description: "Free structured learning paths for AI" },
      { label: "Blog & Research", url: "https://blog.google/technology/ai", description: "Latest AI announcements and research from Google" },
      { label: "Pricing & Quotas", url: "https://ai.google.dev/pricing", description: "Gemini API pricing and usage quotas" },
    ],
  },
  {
    provider: "Perplexity",
    logo: "/logos/perplexity.png",
    description: "Perplexity AI — AI-powered search and research",
    sections: [
      { label: "Getting Started", url: "https://www.perplexity.ai/hub/getting-started", description: "How to use Perplexity for research" },
      { label: "Help Center", url: "https://www.perplexity.ai/hub", description: "Guides, tips, and use cases" },
      { label: "Pricing", url: "https://www.perplexity.ai/pro", description: "Perplexity Pro plan details" },
    ],
  },
];

// ── Comparisons ───────────────────────────────────────────────────────────────

export interface Comparison {
  id: string;
  title: string;
  slug: string;
  summary: string;
  tools: string[];
  verdict_by_use_case: { use_case: string; winner: string; reason: string }[];
  beginner_pick: string;
  best_value: string;
  avoid_if: string;
  updated_at: string;
  tags: string[];
}

export const comparisons: Comparison[] = [
  {
    id: "chatgpt-vs-claude",
    title: "ChatGPT vs Claude",
    slug: "chatgpt-vs-claude",
    summary: "The two most popular AI assistants. Both are excellent — but they have different strengths.",
    tools: ["ChatGPT", "Claude"],
    verdict_by_use_case: [
      { use_case: "Writing emails and documents", winner: "Claude", reason: "More natural tone, better at long content" },
      { use_case: "Coding and debugging", winner: "ChatGPT", reason: "Larger ecosystem, Code Interpreter, plugins" },
      { use_case: "Summarizing PDFs", winner: "Claude", reason: "200k context window handles massive files" },
      { use_case: "Image generation", winner: "ChatGPT", reason: "Native DALL-E 3 integration built in" },
      { use_case: "Research and fact-checking", winner: "ChatGPT", reason: "Web browsing plugin is more mature" },
    ],
    beginner_pick: "ChatGPT — larger community and more tutorials online",
    best_value: "Claude — free tier is generous and quality is excellent",
    avoid_if: "You need image generation daily — Claude doesn't do images",
    updated_at: "2025-03",
    tags: ["comparison", "beginners", "writing", "coding"],
  },
  {
    id: "chatgpt-vs-gemini",
    title: "ChatGPT vs Gemini",
    slug: "chatgpt-vs-gemini",
    summary: "OpenAI vs Google. If you're in the Google orbit, Gemini might already be the better fit.",
    tools: ["ChatGPT", "Gemini"],
    verdict_by_use_case: [
      { use_case: "Email drafting in Gmail", winner: "Gemini", reason: "Built directly into Gmail sidebar" },
      { use_case: "General chat and Q&A", winner: "ChatGPT", reason: "More refined conversation, better memory" },
      { use_case: "Google Docs writing", winner: "Gemini", reason: "Native integration in Google Docs" },
      { use_case: "Image analysis", winner: "ChatGPT", reason: "GPT-4V is more accurate and detailed" },
      { use_case: "Research with citations", winner: "Gemini", reason: "Better web search integration" },
    ],
    beginner_pick: "Gemini — if you already use Gmail and Google Docs",
    best_value: "Gemini — free tier is strong, Google One bundle is excellent deal",
    avoid_if: "You need a standalone, powerful AI without Google ecosystem lock-in",
    updated_at: "2025-02",
    tags: ["comparison", "google", "email", "workspace"],
  },
];

// ── Glossary ──────────────────────────────────────────────────────────────────

export interface GlossaryTerm {
  id: string;
  term: string;
  one_line: string;
  explanation: string;
  example?: string;
  related_terms?: string[];
  tags: string[];
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: "llm",
    term: "LLM",
    one_line: "Large Language Model — the AI brain behind tools like ChatGPT and Claude.",
    explanation: "A type of AI trained on massive amounts of text to understand and generate human language. LLMs predict the next most likely word or token given what came before — billions of times, very fast. This is how ChatGPT, Claude, and Gemini all work.",
    example: "GPT-4 is an LLM. It was trained on text from the internet, books, and code. When you type a question, it predicts the best response word by word.",
    related_terms: ["prompt", "tokens", "inference", "model"],
    tags: ["technical", "foundational"],
  },
  {
    id: "prompt",
    term: "Prompt",
    one_line: "The input you type into an AI — your request, question, or instruction.",
    explanation: "A prompt is anything you type into an AI chat window. It can be a question, a command, a document to analyze, or a detailed instruction with context. The quality of your prompt directly affects the quality of the response. 'Prompt engineering' is the skill of writing prompts that get better results.",
    example: "Bad prompt: 'write an email'\nGood prompt: 'Write a short, professional email declining a meeting request. Reason: scheduling conflict. Keep it under 100 words and maintain a warm tone.'",
    related_terms: ["prompt-engineering", "system-prompt", "context-window"],
    tags: ["beginner", "foundational", "practical"],
  },
  {
    id: "prompt-engineering",
    term: "Prompt Engineering",
    one_line: "The skill of crafting better prompts to get better AI results.",
    explanation: "Getting good results from AI takes practice. Prompt engineering is the art and science of structuring your inputs for better outputs. Key techniques include: giving the AI a role, providing context, being specific about format, using examples, and iterating on what doesn't work.",
    example: "Instead of 'Summarize this', try: 'You are a business analyst. Summarize this report in 5 bullet points for a CEO with no technical background.'",
    related_terms: ["prompt", "system-prompt", "chain-of-thought"],
    tags: ["beginner", "practical", "skill"],
  },
  {
    id: "tokens",
    term: "Tokens",
    one_line: "The units AI models use to process text — roughly 3/4 of a word each.",
    explanation: "AI models don't read word by word — they process 'tokens', which are chunks of text. A token is about 3-4 characters or 3/4 of a word. Pricing and context limits are measured in tokens. 1,000 words ≈ 1,300 tokens. This is why APIs charge per-token and why long documents hit limits.",
    example: "'ChatGPT is great' = 4 tokens: ['Chat', 'G', 'PT', ' is', ' great']",
    related_terms: ["context-window", "llm", "api"],
    tags: ["technical", "pricing", "foundational"],
  },
  {
    id: "context-window",
    term: "Context Window",
    one_line: "How much text an AI can 'see' and remember during a conversation.",
    explanation: "Every AI model has a limit on how much text it can process at once — this is the context window, measured in tokens. Claude's is up to 200,000 tokens (≈150,000 words). ChatGPT's is 128,000. Older models had 4,000. When you hit the limit, the AI starts forgetting the beginning of the conversation.",
    example: "Uploading a 50-page PDF works with Claude (200k context) but might fail with an older model limited to 4,000 tokens.",
    related_terms: ["tokens", "llm", "memory"],
    tags: ["technical", "foundational"],
  },
  {
    id: "hallucination",
    term: "Hallucination",
    one_line: "When AI confidently states something that is factually wrong.",
    explanation: "AI models sometimes generate plausible-sounding but completely false information. This is called hallucination. It happens because models are probability machines — they predict likely next words, not verified facts. Always fact-check AI output on important matters. Use Perplexity or ChatGPT with web search to reduce hallucinations.",
    example: "Ask an AI to cite sources and it may confidently produce fake journal articles with real-looking DOI numbers that don't exist.",
    related_terms: ["rag", "grounding", "verification"],
    tags: ["beginner", "important", "safety"],
  },
  {
    id: "rag",
    term: "RAG",
    one_line: "Retrieval-Augmented Generation — giving AI access to real documents to reduce hallucination.",
    explanation: "RAG is a technique where an AI is connected to a database of documents and retrieves relevant information before answering. Instead of relying on training data alone, it looks up real facts first. NotebookLM uses RAG — you upload your files, it searches them before responding.",
    example: "NotebookLM with RAG: you upload your company handbook, then ask questions — it retrieves the actual text before answering, not guessing.",
    related_terms: ["hallucination", "grounding", "vector-database"],
    tags: ["technical", "intermediate"],
  },
  {
    id: "system-prompt",
    term: "System Prompt",
    one_line: "Hidden instructions given to an AI before the conversation starts.",
    explanation: "A system prompt is a set of instructions that define the AI's role, personality, and constraints for a session. You don't see it in products — it's set by developers. You can write your own in tools like ChatGPT's 'Custom Instructions' to persist across conversations.",
    example: "A customer service chatbot has a system prompt like: 'You are a helpful support agent for Acme Corp. Only answer questions about our products. Always be polite and escalate complaints to a human.'",
    related_terms: ["prompt", "prompt-engineering", "llm"],
    tags: ["intermediate", "technical"],
  },
  {
    id: "api",
    term: "API",
    one_line: "Application Programming Interface — how software talks to other software.",
    explanation: "An API is how developers connect their apps to AI models. When you use ChatGPT inside another app, it's using the OpenAI API. APIs cost money based on how many tokens you use. You don't need to know about APIs to use AI tools — but it helps to know they exist when you see 'API key' in an app.",
    related_terms: ["tokens", "llm", "sdk"],
    tags: ["technical", "developer", "intermediate"],
  },
  {
    id: "multimodal",
    term: "Multimodal",
    one_line: "AI that can understand multiple types of input — text, images, audio, video.",
    explanation: "Most early AI was text-only. Modern models are multimodal — they can see images, listen to audio, process video, and read documents in addition to text. GPT-4o can hear you speak and respond with voice. Claude can analyze images. Gemini can process video.",
    example: "Taking a photo of a math problem and asking ChatGPT to solve it — that's multimodal AI.",
    related_terms: ["llm", "vision", "voice"],
    tags: ["beginner", "foundational"],
  },
  {
    id: "fine-tuning",
    term: "Fine-tuning",
    one_line: "Training a pre-built AI model on your specific data to specialize it.",
    explanation: "Fine-tuning takes a general-purpose model (like GPT-4) and trains it further on a specific dataset. The result is a model that's better at a specific task. For example, a medical AI fine-tuned on clinical notes will outperform a general model on medical tasks.",
    related_terms: ["llm", "training-data", "foundation-model"],
    tags: ["technical", "advanced"],
  },
  {
    id: "ai-agent",
    term: "AI Agent",
    one_line: "An AI that can take actions, not just answer questions.",
    explanation: "AI agents are AI systems that can use tools, browse the web, run code, send emails, or interact with software — not just generate text. They can complete multi-step tasks with less human input. Tools like Operator (OpenAI) and Claude Projects work this way.",
    example: "Ask an agent: 'Book me a flight next Tuesday from Portland to Seattle under $200.' It searches flights, compares prices, and books — without you lifting a finger.",
    related_terms: ["llm", "automation", "mcp"],
    tags: ["intermediate", "advanced", "automation"],
  },
  {
    id: "mcp",
    term: "MCP",
    one_line: "Model Context Protocol — a standard way to connect AI to external tools and data.",
    explanation: "MCP (Model Context Protocol), developed by Anthropic, is an open standard for connecting AI assistants to data sources and tools — like databases, files, or APIs. It's like a universal plug for AI integrations, similar to USB for hardware. Becoming industry standard in 2025.",
    related_terms: ["ai-agent", "api", "integration"],
    tags: ["technical", "advanced", "2025-trend"],
  },
  {
    id: "foundation-model",
    term: "Foundation Model",
    one_line: "A large, general-purpose AI model trained to do many things before being specialized.",
    explanation: "Foundation models (like GPT-4, Claude 3, Gemini) are trained on massive datasets and can do many tasks out of the box — write, code, reason, analyze images. Companies and developers then build specialized apps on top of them. Most AI products you use are built on foundation models.",
    related_terms: ["llm", "fine-tuning", "api"],
    tags: ["foundational", "technical"],
  },
  {
    id: "temperature",
    term: "Temperature",
    one_line: "Controls how creative vs. predictable an AI's responses are.",
    explanation: "Temperature is a setting (0 to 2) that controls randomness in AI output. Low temperature (0.1) = very predictable, consistent, conservative answers. High temperature (1.5) = more creative, varied, sometimes wild. Most tools set this automatically — you rarely adjust it directly unless using an API.",
    related_terms: ["llm", "api", "prompt-engineering"],
    tags: ["technical", "intermediate"],
  },
];

// ── Workflows ─────────────────────────────────────────────────────────────────

export interface Workflow {
  id: string;
  slug: string;
  title: string;
  persona: string;
  summary: string;
  tools: { name: string; role: string; cost: string }[];
  setup_order: string[];
  monthly_cost_estimate: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  common_mistakes: string[];
  tags: string[];
}

export const workflows: Workflow[] = [
  {
    id: "freelancer-content-creator",
    slug: "freelancer-content-creator",
    title: "The Freelancer / Content Creator Stack",
    persona: "Freelancers, writers, social media managers, content creators",
    summary: "Maximize your output without burning out. This stack handles writing, images, scheduling, and research — so you can focus on the actual creative work.",
    tools: [
      { name: "Claude", role: "Primary writing assistant — emails, drafts, scripts, captions", cost: "Free or $20/mo" },
      { name: "ChatGPT", role: "Image generation via DALL-E, research, coding tasks", cost: "Free or $20/mo" },
      { name: "Canva AI", role: "Design, social graphics, quick image editing", cost: "Free or $15/mo" },
      { name: "Perplexity", role: "Research with sources — no hallucination worries", cost: "Free or $20/mo" },
    ],
    setup_order: [
      "Sign up for Claude free tier first — use it for all writing for 2 weeks",
      "Add ChatGPT (free) for image generation and anything Claude can't do",
      "Connect Canva if you post visual content regularly",
      "Add Perplexity when you need reliable sourced research",
    ],
    monthly_cost_estimate: "$0–$40/mo depending on how heavy your usage is",
    difficulty: "beginner",
    common_mistakes: [
      "Starting with paid plans before knowing which tools you'll actually use",
      "Using AI for everything at once — pick one use case and master it first",
      "Not refinining your prompts — bland output is almost always a prompt problem",
    ],
    tags: ["freelance", "content", "writing", "social-media", "beginner"],
  },
  {
    id: "business-professional",
    slug: "business-professional",
    title: "The Business Professional Stack",
    persona: "Managers, executives, consultants, knowledge workers",
    summary: "Work smarter in meetings, emails, and documents. These tools cut your administrative time in half without requiring any technical skill.",
    tools: [
      { name: "Gemini for Workspace", role: "AI directly in Gmail, Docs, Sheets — no switching tabs", cost: "Included with Google Workspace or $20/mo" },
      { name: "Claude", role: "Long-form analysis, executive summaries, strategy documents", cost: "Free or $20/mo" },
      { name: "Otter.ai", role: "Meeting transcription and AI summaries", cost: "Free or $17/mo" },
      { name: "Perplexity", role: "Quick cited research without hallucination risk", cost: "Free" },
    ],
    setup_order: [
      "Enable Gemini in your Google Workspace (if your company uses Google)",
      "Set up Claude for your big writing tasks — briefings, emails, analysis",
      "Add Otter.ai to your next Zoom call and see the magic",
      "Bookmark Perplexity for any research that needs citations",
    ],
    monthly_cost_estimate: "$0–$40/mo depending on what your company covers",
    difficulty: "beginner",
    common_mistakes: [
      "Sharing sensitive company data with AI tools that aren't approved by IT",
      "Not checking AI output before sending — it's a first draft, not a final draft",
      "Skipping the setup step — customize Claude/ChatGPT with your role and company context",
    ],
    tags: ["business", "productivity", "email", "meetings", "beginner"],
  },
  {
    id: "developer-builder",
    slug: "developer-builder",
    title: "The Developer / Builder Stack",
    persona: "Software developers, indie hackers, no-code builders",
    summary: "The coding stack is completely different from consumer AI. These tools are built for people who write or build software.",
    tools: [
      { name: "Cursor", role: "AI-powered VS Code replacement — writes and debugs code", cost: "Free or $20/mo" },
      { name: "Claude API", role: "Building AI into your own apps via the API", cost: "Usage-based — starts cheap" },
      { name: "GitHub Copilot", role: "AI completions inside any editor", cost: "$10/mo" },
      { name: "ChatGPT", role: "Architecture discussions, quick prototyping, debugging", cost: "Free or $20/mo" },
    ],
    setup_order: [
      "Download Cursor — it's VS Code with AI built in, instant upgrade",
      "Set up a Claude API key if you're building anything with AI features",
      "Add GitHub Copilot if you're in a team environment",
      "Use ChatGPT for high-level architecture and concept discussions",
    ],
    monthly_cost_estimate: "$20–$50/mo depending on API usage",
    difficulty: "advanced",
    common_mistakes: [
      "Trusting AI code without testing it — always run what it gives you",
      "Not using context well — paste the relevant code, not just your question",
      "Ignoring the cost of API calls — set spending limits when you start",
    ],
    tags: ["developer", "coding", "builder", "api", "advanced"],
  },
];

// ── Prompts Library ───────────────────────────────────────────────────────────

export interface PromptItem {
  id: string;
  title: string;
  category: string;
  audience: Audience;
  tags: string[];
  prompt: string;
  tip?: string;
  use_with?: string[];
}

export const promptLibrary: PromptItem[] = [
  {
    id: "email-writer",
    title: "Professional Email Writer",
    category: "Communication",
    audience: "beginner",
    tags: ["email", "writing", "professional"],
    prompt: `Write a professional email based on these bullet points:\n\n[paste your bullet points here]\n\nTone: [professional / friendly / direct]\nLength: [short / medium]`,
    tip: "Replace the brackets with your actual info before sending.",
    use_with: ["Claude", "ChatGPT", "Gemini"],
  },
  {
    id: "summarize-doc",
    title: "Summarize Any Document",
    category: "Research",
    audience: "beginner",
    tags: ["research", "summarize", "documents"],
    prompt: `Summarize the following document in plain English. Give me:\n1. The main point in one sentence\n2. 5 key takeaways\n3. Anything I should pay close attention to\n\n[paste document text here]`,
    use_with: ["Claude", "ChatGPT", "NotebookLM"],
  },
  {
    id: "social-caption",
    title: "Social Media Caption Generator",
    category: "Marketing",
    audience: "beginner",
    tags: ["social-media", "marketing", "instagram"],
    prompt: `Write 5 Instagram captions for a [type of business] that sells [product/service].\n\nTone: [casual / professional / funny]\nInclude a call to action in each one.\nKeep each under 150 characters.`,
    use_with: ["ChatGPT", "Claude", "Gemini"],
  },
  {
    id: "idea-validator",
    title: "Business Idea Validator",
    category: "Business",
    audience: "beginner",
    tags: ["business", "ideas", "strategy"],
    prompt: `I have a business idea: [describe your idea in 2-3 sentences].\n\nGive me:\n1. The biggest strength of this idea\n2. The top 3 risks or challenges\n3. Who the ideal first customer would be\n4. One thing I should test before investing more time`,
    use_with: ["Claude", "ChatGPT"],
  },
  {
    id: "learn-anything",
    title: "Learn Anything Faster",
    category: "Learning",
    audience: "beginner",
    tags: ["learning", "education", "study"],
    prompt: `I want to learn [topic] as a complete beginner.\n\nGive me:\n1. A plain-English explanation of what it is\n2. The 3 most important concepts I need to understand first\n3. The best free resource to start with\n4. A simple first exercise I can do today`,
    use_with: ["Claude", "ChatGPT", "Gemini"],
  },
  {
    id: "meeting-followup",
    title: "Meeting Follow-Up Email",
    category: "Communication",
    audience: "beginner",
    tags: ["email", "meetings", "professional"],
    prompt: `Write a follow-up email after a meeting. Here are my notes from the meeting:\n\n[paste your notes]\n\nInclude: what was discussed, action items, and next steps. Keep it under 200 words.`,
    use_with: ["Claude", "Gemini", "ChatGPT"],
  },
  {
    id: "job-description",
    title: "Job Description Writer",
    category: "HR & Hiring",
    audience: "intermediate",
    tags: ["hr", "hiring", "business"],
    prompt: `Write a job description for a [job title] at a [company type] company.\n\nMust-have requirements:\n- [requirement 1]\n- [requirement 2]\n\nNice-to-have skills:\n- [skill 1]\n\nCulture notes: [1-2 sentences about company vibe]\n\nMake it sound compelling, not like a legal document.`,
    use_with: ["Claude", "ChatGPT"],
  },
  {
    id: "content-repurpose",
    title: "Repurpose Content for Multiple Platforms",
    category: "Marketing",
    audience: "intermediate",
    tags: ["content", "social-media", "marketing", "repurpose"],
    prompt: `I have the following piece of content:\n\n[paste your article/post/video transcript]\n\nRepurpose this into:\n1. A 280-character tweet/X post\n2. A LinkedIn post (200-300 words, professional tone)\n3. 3 Instagram caption options (each under 150 characters)\n4. A 60-second script for a TikTok or Reel`,
    use_with: ["Claude", "ChatGPT"],
  },
  {
    id: "code-reviewer",
    title: "Code Reviewer",
    category: "Development",
    audience: "advanced",
    tags: ["coding", "developer", "review"],
    prompt: `Review the following code and give me:\n1. Any bugs or logic errors\n2. Security concerns I should address\n3. Performance improvements\n4. Readability suggestions\n\nLanguage: [language]\nContext: [what this code does]\n\n\`\`\`\n[paste your code here]\n\`\`\``,
    use_with: ["Claude", "ChatGPT", "Cursor"],
  },
  {
    id: "seo-blog-outline",
    title: "SEO Blog Post Outline",
    category: "Content",
    audience: "intermediate",
    tags: ["seo", "blog", "content", "writing"],
    prompt: `Create an SEO-optimized blog post outline for the topic: [your topic]\n\nTarget keyword: [primary keyword]\nTarget audience: [who will read this]\nGoal: [what should readers do or know after reading]\n\nFormat:\n- H1 title (with keyword)\n- Introduction hook\n- 4-6 H2 sections with H3 bullets\n- FAQ section\n- Conclusion with CTA`,
    use_with: ["Claude", "ChatGPT"],
  },
];

// ── News Items ────────────────────────────────────────────────────────────────

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  provider?: string;
  url: string;
  published_at: string;
  category: "product-update" | "research" | "policy" | "industry" | "tutorial";
  official: boolean;
  tags: string[];
}

export const newsItems: NewsItem[] = [
  {
    id: "claude-3-7",
    title: "Claude 3.7 Sonnet Released — Biggest Upgrade Yet",
    summary: "Anthropic released Claude 3.7 with extended thinking mode, better coding, and improved reasoning on complex multi-step tasks.",
    source: "Anthropic Blog",
    provider: "Anthropic",
    url: "https://www.anthropic.com/news/claude-3-7-sonnet",
    published_at: "2025-02-24",
    category: "product-update",
    official: true,
    tags: ["claude", "model-release", "reasoning"],
  },
  {
    id: "gpt4o-image-gen",
    title: "GPT-4o Now Generates Images Natively in ChatGPT",
    summary: "OpenAI replaced DALL-E with native GPT-4o image generation in ChatGPT. The results are significantly more accurate and consistent.",
    source: "OpenAI Blog",
    provider: "OpenAI",
    url: "https://openai.com/blog",
    published_at: "2025-03-25",
    category: "product-update",
    official: true,
    tags: ["chatgpt", "image-generation", "gpt-4o"],
  },
  {
    id: "gemini-2-flash",
    title: "Gemini 2.0 Flash Launches — Free and Fast",
    summary: "Google launched Gemini 2.0 Flash, an extremely fast and capable model available for free in Gemini and via API.",
    source: "Google DeepMind Blog",
    provider: "Google",
    url: "https://deepmind.google/technologies/gemini/flash/",
    published_at: "2025-02-05",
    category: "product-update",
    official: true,
    tags: ["gemini", "model-release", "free"],
  },
  {
    id: "mcp-open-standard",
    title: "MCP Becomes an Industry Standard — Major Platforms Adopt",
    summary: "Model Context Protocol, originally from Anthropic, has been adopted by OpenAI, Google, and major tool providers as the standard for AI integrations.",
    source: "The Verge",
    provider: "Anthropic",
    url: "https://anthropic.com/news/model-context-protocol",
    published_at: "2025-03-10",
    category: "industry",
    official: false,
    tags: ["mcp", "standards", "integration", "2025"],
  },
];

// ── Pricing Data ──────────────────────────────────────────────────────────────

export interface PricingRow {
  tool: string;
  provider: string;
  logo?: string;
  free_tier: boolean;
  free_tier_limits: string;
  pro_price: string;
  pro_features: string[];
  team_price: string;
  api_available: boolean;
  api_pricing: string;
  notes: string;
}

export const pricingData: PricingRow[] = [
  {
    tool: "ChatGPT",
    provider: "OpenAI",
    logo: "/logos/chatgpt.svg",
    free_tier: true,
    free_tier_limits: "GPT-4o mini, limited GPT-4o messages, no image gen",
    pro_price: "$20/mo",
    pro_features: ["GPT-4o unlimited", "DALL-E 3 image gen", "Advanced voice mode", "Web browsing", "Code Interpreter"],
    team_price: "$25/user/mo",
    api_available: true,
    api_pricing: "Usage-based — GPT-4o: ~$5/1M tokens",
    notes: "Most widely used. Best ecosystem of third-party integrations.",
  },
  {
    tool: "Claude",
    provider: "Anthropic",
    logo: "/logos/claude.png",
    free_tier: true,
    free_tier_limits: "Claude 3.5 Sonnet, daily message limits, no Projects",
    pro_price: "$20/mo",
    pro_features: ["5x more messages", "Claude 3.7 Sonnet", "Projects (custom context)", "Priority access", "Extended thinking"],
    team_price: "$25/user/mo",
    api_available: true,
    api_pricing: "Usage-based — Claude 3.5 Sonnet: ~$3/1M tokens",
    notes: "Best for long documents and nuanced writing. Largest context window.",
  },
  {
    tool: "Gemini",
    provider: "Google",
    logo: "/logos/gemini.png",
    free_tier: true,
    free_tier_limits: "Gemini Pro, limited advanced queries, no Workspace features",
    pro_price: "$20/mo (Google One AI Premium)",
    pro_features: ["Gemini Advanced (1.5 Ultra)", "Gemini in Gmail, Docs, Sheets", "2TB Google storage included", "NotebookLM Plus"],
    team_price: "Included in Google Workspace Business plans",
    api_available: true,
    api_pricing: "Usage-based — Gemini 1.5 Flash: free tier available",
    notes: "Best value if you use Google Workspace. Storage + AI in one plan.",
  },
  {
    tool: "Perplexity",
    provider: "Perplexity",
    logo: "/logos/perplexity.png",
    free_tier: true,
    free_tier_limits: "5 Pro searches/day, unlimited standard searches",
    pro_price: "$20/mo",
    pro_features: ["300+ Pro searches/day", "File uploads", "Image generation", "API access"],
    team_price: "$40/user/mo",
    api_available: true,
    api_pricing: "Usage-based — contact for pricing",
    notes: "Best if your primary use is research and finding cited sources.",
  },
];
