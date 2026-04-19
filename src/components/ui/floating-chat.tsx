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
            className="w-80 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white"
          >
            {/* Header */}
            <div className="bg-[#255253] px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#c4622d] flex items-center justify-center text-white font-black text-sm">W</div>
                <div>
                  <p className="text-white font-bold text-sm leading-none">Will</p>
                  <p className="text-gray-400 text-xs mt-0.5">1st Base AI · usually replies fast</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-gray-500 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="px-4 py-4 flex flex-col gap-3 max-h-64 overflow-y-auto bg-white">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "items-end gap-2"}`}>
                  {msg.from === "will" && (
                    <div className="w-6 h-6 rounded-full bg-[#c4622d] flex items-center justify-center text-white font-black text-xs shrink-0">W</div>
                  )}
                  <div
                    className={`text-sm rounded-2xl px-4 py-2.5 max-w-[80%] ${
                      msg.from === "user"
                        ? "bg-blue-500 text-white rounded-br-sm"
                        : "bg-gray-100 text-[#1a3738] rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="px-3 py-3 border-t border-gray-100 flex items-center gap-2 bg-white">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={replied ? "Check your texts soon!" : "Ask anything..."}
                disabled={replied}
                className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm outline-none placeholder:text-gray-400 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || replied}
                className="w-8 h-8 rounded-full bg-blue-500 hover:bg-blue-600 disabled:opacity-30 flex items-center justify-center shrink-0 transition-colors"
              >
                <Send size={14} className="text-white ml-0.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-[#c4622d] hover:bg-[#a8521f] shadow-lg flex items-center justify-center text-white transition-colors"
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
