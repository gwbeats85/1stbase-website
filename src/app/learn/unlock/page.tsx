"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
    <div className="min-h-screen bg-[#EAE9E0] flex flex-col">
      <div className="flex items-center justify-between px-8 md:px-10 py-7">
        <Link href="/" className="font-black text-xl tracking-tight text-[#1a3738]">
          1stbaseai<span className="text-[#c4622d]">.com</span>
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-50 mb-5">
              <svg className="w-7 h-7 text-[#c4622d]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-2xl font-black text-[#1a3738] mb-1">Member Access</h1>
            <p className="text-gray-500 text-sm">Enter your access password to get in.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 text-[#1a3738] placeholder:text-gray-400 focus:outline-none focus:border-orange-400 text-sm"
              autoFocus
            />
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading || !password}
              className="w-full bg-[#c4622d] hover:bg-[#a8521f] disabled:opacity-40 text-white font-bold py-3.5 rounded-2xl transition-colors text-sm"
            >
              {loading ? "Checking..." : "Get Access →"}
            </button>
          </form>

          <p className="text-center text-xs text-gray-400 mt-6">
            Not a member?{" "}
            <a href="https://calendly.com/1stbaseai/30min" className="text-[#c4622d] hover:underline">
              Book a free intro call
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
