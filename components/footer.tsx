import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Github, Linkedin, ArrowRight } from "lucide-react";
import { navItems, secondaryNav, site } from "@/lib/site";
import { Reveal } from "@/components/animated";

export function Footer() {
  return (
    <Reveal>
      <footer className="relative overflow-hidden border-t border-[color:var(--line)] bg-[color:var(--nav)]/75 backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-0 opacity-100">
          <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.9),rgba(168,85,247,0.75),transparent)]" />
          <div className="absolute -left-24 top-10 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-12">
          <div className="mb-8 rounded-[2rem] border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">
                  Ready to build
                </div>
                <h2 className="mt-3 text-2xl font-black leading-tight md:text-3xl">
                  Have a project in mind? Let’s turn it into a premium, execution-ready system.
                </h2>
                <p className="mt-4 text-sm leading-7 text-[color:var(--muted)] md:text-base">
                  Move faster with focused product thinking, modern engineering, and a visual experience
                  that feels serious from the first impression.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-cyan-300 px-6 py-3.5 font-semibold text-slate-950 shadow-[0_16px_50px_rgba(34,211,238,0.22)] transition duration-300 hover:-translate-y-[2px] hover:shadow-[0_20px_60px_rgba(34,211,238,0.32)]"
                >
                  Contact us
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/projects"
                  className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] px-6 py-3.5 font-semibold transition duration-300 hover:-translate-y-[2px] hover:border-cyan-300/35 hover:bg-white/[0.08]"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </div>

          <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-cyan-300/25 bg-black/40">
                  <Image src="/logo.jpg" alt="Cynexsys logo" fill className="object-cover" />
                </div>
                <div>
                  <div className="text-xl font-black tracking-[0.22em]">
                    {site.name.toUpperCase()}
                  </div>
                  <div className="mt-1 text-sm text-[color:var(--muted)]">{site.tagline}</div>
                </div>
              </div>

              <p className="mt-6 max-w-md text-sm leading-7 text-[color:var(--muted)]">
                Cynexsys IT builds AI systems, intelligent platforms, and future-ready software
                that helps organizations operate, decide, and scale with clarity.
              </p>

              <div className="mt-6 flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--line)] bg-[color:var(--panel)] transition duration-300 hover:-translate-y-[2px] hover:border-cyan-300/40 hover:text-cyan-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.16)]"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--line)] bg-[color:var(--panel)] transition duration-300 hover:-translate-y-[2px] hover:border-cyan-300/40 hover:text-cyan-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.16)]"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-6 text-sm text-[color:var(--muted)]">
                © {new Date().getFullYear()} Cynexsys IT
              </div>
            </div>

            <div>
              <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">
                Main Pages
              </div>

              <div className="mt-5 grid gap-3 text-sm text-[color:var(--muted)]">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="transition duration-300 hover:translate-x-1 hover:text-cyan-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">
                Contact & More
              </div>

              <div className="mt-5 grid gap-4 text-sm text-[color:var(--muted)]">
                {secondaryNav.slice(0, 4).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="transition duration-300 hover:translate-x-1 hover:text-cyan-300"
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="flex items-center gap-3 rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-4 transition duration-300 hover:border-cyan-300/30 hover:shadow-[0_0_28px_rgba(34,211,238,0.08)]">
                  <Mail className="h-4 w-4 text-cyan-300" />
                  <a
                    href={`mailto:${site.email}`}
                    className="transition hover:text-cyan-300"
                  >
                    {site.email}
                  </a>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-4 transition duration-300 hover:border-cyan-300/30 hover:shadow-[0_0_28px_rgba(34,211,238,0.08)]">
                  <MapPin className="mt-[2px] h-4 w-4 text-cyan-300" />
                  <div className="leading-6">
                    <div>{site.addressLines[0]}</div>
                    <div>{site.addressLines[1]}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Reveal>
  );
}
