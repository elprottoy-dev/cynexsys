import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { GlassCard } from "@/components/ui";

export const metadata: Metadata = { title: "Trust Layer", description: "Evidence tracing, uncertainty scoring, and human approval loops." };

export default function TrustLayerPage() {
  return (
    <PageShell eyebrow="Trust Layer" title="Trust and verification for high stakes digital intelligence" description="A serious systems company needs verification, not just output.">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {["Source tracing", "Uncertainty scoring", "Human approval loops", "Audit logs", "Role based review", "Evidence linked reporting", "Safer automation", "Operational accountability"].map((item) => (
          <GlassCard key={item} className="p-6">
            <p className="leading-8 text-[color:var(--muted)]">{item}</p>
          </GlassCard>
        ))}
      </div>
    </PageShell>
  );
}
