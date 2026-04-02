import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { GlassCard, Pill } from "@/components/ui";
import { Reveal } from "@/components/animated";
import { projects } from "@/lib/site";

export async function generateStaticParams() {
  return projects.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = projects.find((entry) => entry.slug === slug);
  if (!item) return { title: "Project" };
  return {
    title: item.title,
    description: item.summary,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = projects.find((entry) => entry.slug === slug);
  if (!item) notFound();

  return (
    <PageShell eyebrow="Case study" title={item.title} description={item.summary}>
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <GlassCard className="p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                {item.status}
              </span>
              <Pill>{item.category}</Pill>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-5">
                <div className="text-sm uppercase tracking-[0.24em] text-cyan-300">What it solves</div>
                <p className="mt-4 leading-8 text-[color:var(--muted)]">{item.challenge}</p>
              </div>
              <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-5">
                <div className="text-sm uppercase tracking-[0.24em] text-cyan-300">Delivery focus</div>
                <p className="mt-4 leading-8 text-[color:var(--muted)]">{item.role}</p>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 md:p-8">
              <div className="text-sm uppercase tracking-[0.24em] text-cyan-300">Solution overview</div>
              <p className="mt-4 max-w-4xl leading-8 text-[color:var(--muted)]">{item.solution}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.stack.map((tech) => <Pill key={tech}>{tech}</Pill>)}
              </div>
            </div>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.05}>
          <GlassCard className="p-8 md:p-10">
            <div className="text-sm uppercase tracking-[0.24em] text-cyan-300">Project Snapshot</div>
            <div className="mt-6 grid gap-4">
              {item.outcomes.map((outcome) => (
                <div key={outcome} className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-4 text-[color:var(--muted)]">
                  {outcome}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-dashed border-cyan-300/25 bg-cyan-300/5 p-5">
              <div className="text-sm font-semibold text-cyan-200">Presentation-ready case study layout</div>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                This section is designed to hold future screenshots, dashboards, diagrams, or live proof assets without needing to redesign the project page again.
              </p>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </PageShell>
  );
}
