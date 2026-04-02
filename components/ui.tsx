import { ReactNode } from "react";
import Link from "next/link";

export function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-7xl px-5 md:px-6">{children}</div>;
}

export function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="max-w-4xl">
      <div className="text-sm uppercase tracking-[0.35em] text-cyan-300">{eyebrow}</div>
      <h1 className="mt-4 text-4xl font-black leading-[1.02] tracking-tight md:text-6xl">{title}</h1>
      {text ? <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">{text}</p> : null}
    </div>
  );
}

export function GlassCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--panel)] shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:translate-y-[-2px] hover:border-cyan-300/30 ${className}`}>
      <div className="absolute inset-0 pointer-events-none opacity-70 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.08),transparent_40%)]" />
      <div className="relative">{children}</div>
    </div>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return <span className="rounded-full border border-[color:var(--line)] bg-[color:var(--pill)] px-3 py-1.5 text-sm text-[color:var(--text)]/85">{children}</span>;
}

export function CTAButtons() {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <Link href="/projects" className="rounded-2xl bg-cyan-300 px-6 py-3.5 font-semibold text-slate-950 shadow-[0_16px_50px_rgba(34,211,238,0.24)] transition hover:-translate-y-[2px]">
        Explore projects
      </Link>
      <Link href="/contact" className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] px-6 py-3.5 font-semibold transition hover:bg-white/[0.08]">
        Start a project
      </Link>
    </div>
  );
}

export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <GlassCard className="p-5">
      <div className="text-3xl font-black text-cyan-300">{value}</div>
      <div className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{label}</div>
    </GlassCard>
  );
}
