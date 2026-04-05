"use client";

import { motion } from "framer-motion";

const socialLinks = [
  {
    href: "https://x.com/1stbaseai",
    label: "X",
    bg: "bg-black",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: "https://instagram.com/1stbaseai",
    label: "Instagram",
    bg: "bg-gradient-to-br from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
      </svg>
    ),
  },
  {
    href: "https://github.com/1stbaseai",
    label: "GitHub",
    bg: "bg-[#24292e]",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    href: "mailto:juantacosancho@gmail.com",
    label: "Email",
    bg: "bg-[#EA4335]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export function About() {
  return (
    <section id="about" className="bg-gray-900 py-28 px-6">
      <div className="max-w-3xl mx-auto flex flex-col gap-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-widest text-orange-400 font-semibold">Your guide</span>
          <h2 className="text-5xl md:text-7xl font-black text-white mt-4 mb-6 leading-tight">
            Hey, I&apos;m Will.
          </h2>
          <p className="text-gray-400 text-xl leading-relaxed max-w-2xl">
            I&apos;m based in Vancouver, WA — deep into AI and love showing people how to actually use it.
            You already know what you want to do. I just teach you the tools so you can go build it yourself.
            No tech background needed. Just curiosity.
          </p>
        </motion.div>

        {/* Branded icon row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex gap-3"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              title={link.label}
              className={`w-12 h-12 rounded-2xl ${link.bg} flex items-center justify-center hover:scale-110 transition-transform`}
            >
              {link.icon}
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-col sm:flex-row gap-3 pt-2"
        >
          <a
            href="https://calendly.com/1stbaseai/30min"
            className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-colors text-sm uppercase tracking-wide"
          >
            Book a free intro call
          </a>
          <a
            href="mailto:juantacosancho@gmail.com"
            className="inline-flex items-center justify-center border border-gray-700 hover:border-orange-400 hover:text-orange-400 text-gray-400 font-semibold px-8 py-4 rounded-full transition-all text-sm"
          >
            Send me a message
          </a>
        </motion.div>

      </div>
    </section>
  );
}
