import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/animated";
import { GlassCard, Pill } from "@/components/ui";
import { projects } from "@/lib/site";
import ProjectsShowcase from "./projects-showcase";

export const metadata: Metadata = {
  title: "Projects",
  description: "A showcase of AI, web, platform, IoT, immersive, and software engineering projects delivered by Cynexsys.",
};

export default function ProjectsPage() {
  const featured = projects.slice(0, 6);

  return (
    <PageShell
      eyebrow="Projects"
      title="A premium showcase of real shipped systems, experiments, platforms, and execution across AI, web, hardware, and immersive products."
      description="This page now reflects the actual project range behind the company. It keeps the Cynexsys visual identity while presenting work in a more portfolio-driven showcase format."
    >
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <GlassCard className="p-8 md:p-10">
            <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">Project Explorer</div>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
              Featured case studies with real categories, status signals, and project depth.
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-[color:var(--muted)]">
              Browse the portfolio by focus area and open each case study for a clearer snapshot of problem framing,
              delivery direction, technical stack, and operational value.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Pill>16 real projects added</Pill>
              <Pill>AI, web, IoT, immersive</Pill>
              <Pill>Case-study style detail pages</Pill>
            </div>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.06}>
          <GlassCard className="p-8 md:p-10">
            <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">Showcase Snapshot</div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-5">
                <div className="text-3xl font-black text-cyan-300">16</div>
                <div className="mt-2 text-sm leading-6 text-[color:var(--muted)]">Projects now included in the portfolio system</div>
              </div>
              <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-5">
                <div className="text-3xl font-black text-cyan-300">4</div>
                <div className="mt-2 text-sm leading-6 text-[color:var(--muted)]">Core focus zones: AI, web, IoT, immersive systems</div>
              </div>
              <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-5 sm:col-span-2">
                <div className="text-lg font-bold">Selected highlights</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {featured.map((item) => <Pill key={item.slug}>{item.title}</Pill>)}
                </div>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>

      <div className="mt-10">
        <ProjectsShowcase items={projects} />
      </div>
    </PageShell>
  );
}
