"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { LogoMark } from "@/components/ui/logo-mark";

const socialLinks = [
  {
    href: "https://x.com/1stbaseai",
    label: "X / Twitter",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: "https://instagram.com/1stbaseai",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: "https://github.com/1stbaseai",
    label: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    href: "mailto:juantacosancho@gmail.com",
    label: "Email",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function AboutModal({ isOpen, onClose }: Props) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[#0e2829]/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg px-4"
          >
            <div className="relative bg-[#255253] rounded-3xl overflow-hidden shadow-2xl border border-[#2e6364]">

              {/* Watermark */}
              <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
                <LogoMark color="#EAE9E0" size={340} className="absolute -right-16 -bottom-16 opacity-[0.06]" />
              </div>

              {/* Terracotta accent bar */}
              <div className="h-1 w-full bg-[#c4622d]" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-[#EAE9E0]/40 hover:text-[#EAE9E0] transition-colors p-1.5 rounded-full hover:bg-[#EAE9E0]/10"
              >
                <X size={18} />
              </button>

              <div className="relative px-8 pt-8 pb-10">
                {/* Label */}
                <span className="text-xs uppercase tracking-widest text-[#c4622d] font-semibold">Your guide</span>

                {/* Name */}
                <h2 className="text-5xl font-black text-[#EAE9E0] mt-3 mb-1 leading-none">
                  Hey, I&apos;m Will.
                </h2>
                <p className="text-[#c4622d] text-sm font-semibold mb-6">Vancouver, WA · @1stbaseai</p>

                {/* Bio */}
                <p className="text-[#EAE9E0]/70 text-base leading-relaxed mb-8">
                  I&apos;m deep into AI and I love showing people how to actually use it. You already know what you want to do — I just teach you the tools to go build it yourself. No tech background needed. Just curiosity.
                </p>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {[
                    { value: "1-on-1", label: "Coaching" },
                    { value: "Weekly", label: "Newsletter" },
                    { value: "Free", label: "Community" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-[#1a3738] rounded-2xl px-4 py-4 text-center border border-[#2e6364]">
                      <div className="text-[#EAE9E0] font-black text-lg">{stat.value}</div>
                      <div className="text-[#EAE9E0]/40 text-xs mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Social icons */}
                <div className="flex gap-2 mb-8">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={link.label}
                      className="w-9 h-9 rounded-xl bg-[#1a3738] border border-[#2e6364] flex items-center justify-center text-[#EAE9E0]/50 hover:text-[#c4622d] hover:border-[#c4622d]/50 transition-all"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://calendly.com/1stbaseai/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-[#c4622d] hover:bg-[#a8521f] text-white font-bold px-6 py-3 rounded-full text-sm transition-colors"
                  >
                    Book a free intro call →
                  </a>
                  <a
                    href="mailto:juantacosancho@gmail.com"
                    className="flex-1 text-center border border-[#2e6364] hover:border-[#c4622d]/60 text-[#EAE9E0]/60 hover:text-[#EAE9E0] font-semibold px-6 py-3 rounded-full text-sm transition-all"
                  >
                    Send me a message
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
