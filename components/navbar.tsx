"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/components/data";

function formatLabel(item: string) {
  return item.charAt(0).toUpperCase() + item.slice(1);
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030711]/70 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-cyan-300/80 via-sky-400/80 to-violet-500/90 shadow-[0_0_40px_rgba(34,211,238,0.22)]" />
          <div>
            <div className="text-xl font-black tracking-[0.22em] md:text-2xl">CYNEXSYS</div>
            <div className="text-[10px] uppercase tracking-[0.35em] text-white/50">
              Engineering the Intelligence Layer of Civilization
            </div>
          </div>
        </a>

        <nav className="hidden xl:flex items-center gap-6 text-sm text-white/70">
          {navItems.map((item) => (
            <a key={item} href={`#${item}`} className="transition-colors hover:text-cyan-300">
              {formatLabel(item)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-2xl border border-cyan-300/25 bg-cyan-300/10 px-5 py-2.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/15 md:inline-flex"
          >
            Start a Project
          </a>
          <button
            type="button"
            className="inline-flex rounded-2xl border border-white/10 bg-white/[0.04] p-2.5 xl:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#030711]/95 xl:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="rounded-2xl px-4 py-3 text-white/75 transition hover:bg-white/[0.04] hover:text-cyan-300"
                onClick={() => setOpen(false)}
              >
                {formatLabel(item)}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
