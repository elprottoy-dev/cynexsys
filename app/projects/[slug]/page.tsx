import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { GlassCard, Pill } from "@/components/ui";
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
    description: item.solution,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = projects.find((entry) => entry.slug === slug);
  if (!item) notFound();

  return (
    <PageShell eyebrow="Case study" title={item.title} description={item.solution}>
      <div className="grid gap-6 lg:grid-cols-2">
        <GlassCard className="p-8">
          <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">Challenge</div>
          <p className="mt-4 leading-8 text-[color:var(--muted)]">{item.challenge}</p>
        </GlassCard>
        <GlassCard className="p-8">
          <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">Role</div>
          <p className="mt-4 leading-8 text-[color:var(--muted)]">{item.role}</p>
        </GlassCard>
        <GlassCard className="p-8">
          <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">Outcomes</div>
          <div className="mt-4 grid gap-3">
            {item.outcomes.map((outcome) => (
              <div key={outcome} className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-4 text-[color:var(--muted)]">{outcome}</div>
            ))}
          </div>
        </GlassCard>
        <GlassCard className="p-8">
          <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">Stack</div>
          <div className="mt-4 flex flex-wrap gap-2">
            {item.stack.map((tech) => <Pill key={tech}>{tech}</Pill>)}
          </div>
          <div className="mt-6 rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-5 text-[color:var(--muted)]">
            Screenshot placeholder. Replace this box with your real project image, dashboard screenshot, or architecture diagram.
          </div>
        </GlassCard>
      </div>
    </PageShell>
  );
}
