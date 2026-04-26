"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LogoMark } from "@/components/ui/logo-mark";

export default function UnlockPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/learn/unlock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/learn");
    } else {
      setError("Wrong password. Check your welcome email or DM @1stbaseai.");
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-[var(--brand-cream)]">
      <div className="flex items-center justify-between border-b border-[color:var(--brand-line)] px-8 py-7 md:px-10">
        <Link href="/" className="flex items-center gap-2.5">
          <LogoMark size={32} />
          <span className="text-xl font-bold tracking-tight text-[var(--brand-graphite)]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            1st Base <span className="text-[var(--brand-blue)]">AI</span>
          </span>
        </Link>
      </div>

      <div className="flex flex-1 items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:rgba(255,228,94,0.22)]">
              <svg className="h-7 w-7 text-[var(--brand-graphite)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="mb-1 text-2xl font-black text-[var(--brand-graphite)]">Member Access</h1>
            <p className="text-sm text-[color:var(--brand-muted)]">Enter your access password to get in.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-2xl border border-[color:var(--brand-line-strong)] bg-[var(--brand-cream-2)] px-4 py-3.5 text-sm text-[var(--brand-graphite)] outline-none transition-colors placeholder:text-[color:var(--brand-muted)] focus:border-[var(--brand-blue)]"
              autoFocus
            />
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading || !password}
              className="w-full rounded-2xl bg-[var(--brand-graphite)] py-3.5 text-sm font-bold text-[var(--brand-cream)] transition-colors hover:bg-[var(--brand-graphite-2)] disabled:opacity-40"
            >
              {loading ? "Checking..." : "Get Access →"}
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-[color:var(--brand-muted)]">
            Not a member?{" "}
            <a href="https://calendly.com/1stbaseai/30min" className="text-[var(--brand-blue)] hover:underline">
              Book a free intro call
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
