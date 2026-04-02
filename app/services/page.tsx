import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/animated";
import { GlassCard, Pill } from "@/components/ui";
import { servicePillars } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Professional service lines across AI systems, research software, cloud architecture, and institutional digital transformation.",
};

export default function ServicesPage() {
  return (
    <PageShell
      eyebrow="Services"
      title="What we do, from strategy to production grade delivery."
      description="Each service line is designed to solve real problems now and create reusable value later."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {servicePillars.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.06}>
            <GlassCard className="p-8">
              <div className="text-sm uppercase tracking-[0.32em] text-cyan-300">Service line</div>
              <h2 className="mt-4 text-3xl font-black">{item.title}</h2>
              <p className="mt-4 leading-8 text-[color:var(--muted)]">{item.text}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.points.map((point) => <Pill key={point}>{point}</Pill>)}
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </PageShell>
  );
}
