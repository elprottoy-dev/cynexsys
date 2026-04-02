import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { GlassCard } from "@/components/ui";
import { investorMetrics } from "@/lib/site";

export const metadata: Metadata = { title: "Investors", description: "Investor narrative, market opportunity, growth model, and moat." };

export default function InvestorsPage() {
  return (
    <PageShell eyebrow="Investors" title="An investment ready view of Cynexsys IT" description="Positioned where AI, cloud, analytics, geospatial intelligence, and automation meet.">
      <div className="grid gap-6 xl:grid-cols-4">
        {investorMetrics.map((item) => (
          <GlassCard key={item.label} className="p-6">
            <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">{item.label}</div>
            <div className="mt-4 text-4xl font-black">{item.value}</div>
          </GlassCard>
        ))}
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <GlassCard className="p-8">
          <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">Why this company</div>
          <p className="mt-4 leading-8 text-[color:var(--muted)]">
            Cynexsys IT uses a service to product flywheel. Premium service delivery creates revenue, institutional trust, data understanding, reusable modules, and platform design patterns that can compound into software products.
          </p>
        </GlassCard>
        <GlassCard className="p-8">
          <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">Growth model</div>
          <p className="mt-4 leading-8 text-[color:var(--muted)]">
            Phase 1: premium services. Phase 2: reusable modules. Phase 3: productized systems. Phase 4: infrastructure layer. The founder vision is designed to scale without abandoning practical delivery.
          </p>
        </GlassCard>
      </div>
    </PageShell>
  );
}
