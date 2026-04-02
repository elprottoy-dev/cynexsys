"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/animated";
import { GlassCard, Pill } from "@/components/ui";

type ProjectItem = {
  slug: string;
  title: string;
  category: string;
  status: string;
  summary: string;
  challenge: string;
  solution: string;
  role: string;
  outcomes: string[];
  stack: string[];
};

const filters = ["All", "AI & Data", "Web & Platforms", "IoT & Hardware", "Immersive & Blockchain"] as const;

export default function ProjectsShowcase({ items }: { items: ProjectItem[] }) {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const filtered = useMemo(() => {
    if (active === "All") return items;
    return items.filter((item) => item.category === active);
  }, [active, items]);

  return (
    <section>
      <Reveal>
        <div className="flex flex-wrap items-center gap-3">
          {filters.map((filter) => {
            const activeState = active === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  activeState
                    ? "border-cyan-300 bg-cyan-300 text-slate-950 shadow-[0_16px_40px_rgba(34,211,238,0.18)]"
                    : "border-[color:var(--line)] bg-[color:var(--panel)] text-[color:var(--text)] hover:border-cyan-300/35 hover:bg-white/[0.06]"
                }`}
                aria-pressed={activeState}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </Reveal>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((item, index) => (
          <Reveal key={item.slug} delay={index * 0.04}>
            <GlassCard className="flex h-full flex-col p-7 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">{item.category}</div>
                  <h2 className="mt-4 text-2xl font-black leading-tight">{item.title}</h2>
                </div>
                <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                  {item.status}
                </span>
              </div>

              <p className="mt-5 flex-1 leading-8 text-[color:var(--muted)]">{item.summary}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <Pill key={tech}>{tech}</Pill>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-4">
                <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">What it solves</div>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{item.challenge}</p>
              </div>

              <div className="mt-6">
                <Link href={`/projects/${item.slug}`} className="inline-flex items-center gap-2 text-cyan-300 transition hover:text-cyan-200">
                  Open case study
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
