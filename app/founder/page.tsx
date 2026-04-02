import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { GlassCard, Pill } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Founder", description: "The founder story behind Cynexsys IT." };

export default function FounderPage() {
  return (
    <PageShell eyebrow="Founder" title="Khaled MD. Mehzabin Alam Prottoy" description="The founder vision, journey, and Mastermind behind Cynexsys IT.">
      <div className="grid gap-6 lg:grid-cols-2">
        <GlassCard className="p-8">
          <div className="text-sm uppercase tracking-[0.32em] text-cyan-300">Origin</div>
          <p className="mt-4 leading-8 text-[color:var(--muted)]">
            Cynexsys IT brings together research fluency, software engineering, AI systems, cloud infrastructure, and product strategy into one focused company.
          </p>
        </GlassCard>
        <GlassCard className="p-8">
          <div className="text-sm uppercase tracking-[0.32em] text-cyan-300">Vision</div>
          <p className="mt-4 leading-8 text-[color:var(--muted)]">
            The founder thesis is simple: build the intelligence layer that helps organizations think, operate, and evolve with more clarity. Start with useful systems now, then scale into platforms and infrastructure later.
          </p>
        </GlassCard>
        <GlassCard className="p-8 lg:col-span-2">
          <div className="text-sm uppercase tracking-[0.32em] text-cyan-300">Strength map</div>
          <div className="mt-5 flex flex-wrap gap-2">
            {["AI systems", "Research software", "Institutional software", "Business software", "VR systems", "Hosting Solution", "Cloud infrastructure", "Geospatial workflows", "Institutional systems", "Product strategy"].map((item) => <Pill key={item}>{item}</Pill>)}
          </div>
        </GlassCard>
      </div>
    </PageShell>
  );
}
