import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { GlassCard } from "@/components/ui";

export const metadata: Metadata = { title: "Digital Twin Lab", description: "Operational mirrors, simulation, and forecasting systems." };

export default function DigitalTwinLabPage() {
  return (
    <PageShell eyebrow="Digital Twin Lab" title="Operational mirrors for organizations, infrastructure, and programs" description="A future capability for forecasting, scenario simulation, and decision confidence.">
      <div className="grid gap-6 lg:grid-cols-3">
        {["Organization twins", "Program twins", "Infrastructure twins", "Risk simulation", "Scenario planning", "Decision rehearsal"].map((item) => (
          <GlassCard key={item} className="p-8">
            <h2 className="text-2xl font-black">{item}</h2>
            <p className="mt-4 leading-8 text-[color:var(--muted)]">This capability can help leaders compare options before they deploy time, money, or operational change in the real world.</p>
          </GlassCard>
        ))}
      </div>
    </PageShell>
  );
}
