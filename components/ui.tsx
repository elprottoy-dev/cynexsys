import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="text-sm uppercase tracking-[0.35em] text-cyan-300">{eyebrow}</div>
      <h2 className="mt-4 text-4xl font-black tracking-tight leading-[1.02] md:text-6xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-white/68">{text}</p>
    </div>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[1.75rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20 backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}
