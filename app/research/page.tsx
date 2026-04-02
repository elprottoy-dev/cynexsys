import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/animated";
import { GlassCard } from "@/components/ui";
import { researchDomains } from "@/lib/site";

export const metadata: Metadata = {
  title: "Research",
  description: "Research domains across environment, GIS, social data, GeoAI, and multimodal research operations.",
};

export default function ResearchPage() {
  return (
    <PageShell
      eyebrow="Research"
      title="Research aligned capabilities for serious data, evidence, and decision systems."
      description="Cynexsys IT is positioned for institutions, labs, NGOs, and future facing teams that need more than a static website or dashboard."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {researchDomains.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.04}>
            <GlassCard className="p-7">
              <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">Domain</div>
              <h2 className="mt-3 text-2xl font-black">{item.title}</h2>
              <p className="mt-4 leading-8 text-[color:var(--muted)]">{item.text}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </PageShell>
  );
}
