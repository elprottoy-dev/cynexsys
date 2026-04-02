"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navItems, secondaryNav, site } from "@/lib/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const allItems = [...navItems, ...secondaryNav];

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[color:var(--nav)]/90 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-cyan-300/25 bg-black/40 shadow-[0_0_40px_rgba(34,211,238,0.22)]">
            <Image src="/logo.jpg" alt="Cynexsys logo" fill className="object-cover" />
          </div>
          <div className="min-w-0">
            <div className="truncate text-lg font-black tracking-[0.2em] md:text-2xl">{site.name.toUpperCase()}</div>
            <div className="hidden text-[10px] uppercase tracking-[0.28em] text-[color:var(--muted)] sm:block">{site.tagline}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 text-sm text-[color:var(--muted)] xl:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className={active ? "text-cyan-300" : "transition-colors hover:text-cyan-300"}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>
          <Link href="/contact" className="hidden rounded-2xl border border-cyan-300/25 bg-cyan-300/10 px-5 py-2.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/15 md:inline-flex">
            Start a project
          </Link>
          <button
            type="button"
            className="inline-flex rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-2.5 xl:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-[color:var(--line)] bg-[color:var(--nav)]/95 xl:hidden">
          <div className="mx-auto grid max-w-7xl gap-5 px-5 py-5 md:px-6">
            <div className="lg:hidden">
              <ThemeToggle />
            </div>
            <div className="grid gap-2">
              {allItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-3 py-2 ${active ? "bg-cyan-300/10 text-cyan-300" : "text-[color:var(--muted)] hover:bg-white/5 hover:text-cyan-300"}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
