"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Send } from "lucide-react";

export function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ from: "will" | "user"; text: string }[]>([
    { from: "will", text: "Hey! What can I help you with? Ask me anything about AI or my sessions." },
  ]);
  const [replied, setReplied] = useState(false);

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || replied) return;
    const msg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { from: "user", text: msg }]);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "will", text: "Got it — I'll hit you back soon. You can also text me at (432) 279-0502." },
      ]);
      setReplied(true);
    }, 900);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 16 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-80 overflow-hidden rounded-3xl border border-[color:var(--brand-line)] bg-[var(--brand-surface)] shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-[linear-gradient(135deg,_var(--brand-teal)_0%,_var(--brand-teal-deep)_100%)] px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--brand-gold)] text-sm font-black text-[var(--brand-teal-deep)]">W</div>
                <div>
                  <p className="text-sm font-bold leading-none text-[var(--brand-surface)]">Will</p>
                  <p className="mt-0.5 text-xs text-[color:rgb(255_253_247_/_0.54)]">1st Base AI · usually replies fast</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close chat" className="text-[color:rgb(255_253_247_/_0.42)] transition-colors hover:text-[var(--brand-surface)]">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex max-h-64 flex-col gap-3 overflow-y-auto bg-[var(--brand-surface)] px-4 py-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "items-end gap-2"}`}>
                  {msg.from === "will" && (
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-gold)] text-xs font-black text-[var(--brand-teal-deep)]">W</div>
                  )}
                  <div
                    className={`text-sm rounded-2xl px-4 py-2.5 max-w-[80%] ${
                      msg.from === "user"
                        ? "rounded-br-sm bg-[var(--brand-teal)] text-[var(--brand-surface)]"
                        : "rounded-bl-sm bg-[color:rgb(36_82_83_/_0.08)] text-[var(--brand-ink)]"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="flex items-center gap-2 border-t border-[color:var(--brand-line)] bg-[var(--brand-surface)] px-3 py-3">
              <label htmlFor="floating-chat-input" className="sr-only">Ask Will about AI</label>
              <input
                id="floating-chat-input"
                name="message"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={replied ? "Check your texts soon!" : "Ask anything..."}
                aria-label="Ask Will about AI"
                autoComplete="off"
                disabled={replied}
                className="flex-1 rounded-full bg-[color:rgb(36_82_83_/_0.08)] px-4 py-2 text-sm text-[var(--brand-ink)] outline-none ring-0 placeholder:text-[color:var(--brand-muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-gold)] disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || replied}
                aria-label="Send message"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--brand-gold)] transition-colors hover:bg-[var(--brand-amber)] disabled:opacity-30"
              >
                <Send size={14} className="ml-0.5 text-[var(--brand-teal-deep)]" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-gold)] text-[var(--brand-teal-deep)] shadow-lg transition-colors hover:bg-[var(--brand-amber)]"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle size={22} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
