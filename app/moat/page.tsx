import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { GlassCard } from "@/components/ui";

export const metadata: Metadata = { title: "Moat", description: "The Cynexsys IT moat across services, workflows, trust, and productization." };

export default function MoatPage() {
  return (
    <PageShell eyebrow="Moat" title="Why Cynexsys IT can build defensibility over time" description="A future moat is built through learning loops, institutional trust, reusable systems, and domain specialization.">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {[
          "Service to product flywheel",
          "Workflow moat",
          "Institutional trust moat",
          "Domain knowledge moat",
          "Model orchestration moat",
          "Data understanding moat",
          "Execution speed moat",
          "Brand positioning moat",
          "Research plus engineering moat",
        ].map((item) => (
          <GlassCard key={item} className="p-8">
            <h2 className="text-2xl font-black">{item}</h2>
            <p className="mt-4 leading-8 text-[color:var(--muted)]">This advantage becomes stronger as delivery work creates reusable patterns, better understanding, and more focused products.</p>
          </GlassCard>
        ))}
      </div>
    </PageShell>
  );
}
