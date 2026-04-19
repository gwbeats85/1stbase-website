"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "1stbase_saved_resources";

export function useSaved() {
  const [saved, setSaved] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      setMounted(true);
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) setSaved(new Set(JSON.parse(raw)));
      } catch {}
    });
  }, []);

  const toggle = useCallback((id: string) => {
    setSaved((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(next)));
      } catch {}
      return next;
    });
  }, []);

  const isSaved = useCallback((id: string) => saved.has(id), [saved]);

  return { saved, toggle, isSaved, mounted };
}
