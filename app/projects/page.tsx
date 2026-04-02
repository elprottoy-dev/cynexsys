import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/animated";
import { GlassCard, Pill } from "@/components/ui";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case study style projects with challenge, solution, outcomes, stack, and role.",
};

export default function ProjectsPage() {
  return (
    <PageShell
      eyebrow="Projects"
      title="Large case study sections that make the company feel substantial and execution ready."
      description="These projects are presented as serious case study architecture that can evolve into real public proofs over time."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((item, index) => (
          <Reveal key={item.slug} delay={index * 0.05}>
            <GlassCard className="p-8">
              <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">{item.category}</div>
              <h2 className="mt-4 text-2xl font-black">{item.title}</h2>
              <p className="mt-4 leading-8 text-[color:var(--muted)]">{item.solution}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.stack.map((tech) => <Pill key={tech}>{tech}</Pill>)}
              </div>
              <div className="mt-5">
                <Link href={`/projects/${item.slug}`} className="text-cyan-300">View case study</Link>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </PageShell>
  );
}
