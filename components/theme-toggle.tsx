"use client";

import { MoonStar, SunMedium } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mode, setMode] = useState<"night" | "day">("night");

  useEffect(() => {
    const saved = window.localStorage.getItem("cynexsys-mode");
    const next = saved === "day" ? "day" : "night";
    setMode(next);
    document.documentElement.dataset.mode = next;
  }, []);

  function toggle() {
    const next = mode === "night" ? "day" : "night";
    setMode(next);
    document.documentElement.dataset.mode = next;
    window.localStorage.setItem("cynexsys-mode", next);
  }

  return (
    <button
      type="button"
      aria-label="Toggle day and night mode"
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] px-3 py-2 text-sm font-medium text-[color:var(--text)] transition hover:translate-y-[-1px] hover:border-cyan-300/35"
    >
      {mode === "night" ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
      <span>{mode === "night" ? "Day mode" : "Night mode"}</span>
    </button>
  );
}
