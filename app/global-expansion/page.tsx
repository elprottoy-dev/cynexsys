import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { GlassCard } from "@/components/ui";

export const metadata: Metadata = { title: "Global Expansion", description: "Australia anchored, globally aware, and built for wider expansion." };

export default function GlobalExpansionPage() {
  return (
    <PageShell eyebrow="Global Expansion" title="An Australia based launch point with wider regional and global potential" description="Cynexsys IT can serve local work first, then expand across South Asia, the Pacific, and international research and software markets.">
      <div className="grid gap-6 lg:grid-cols-3">
        {[
          "Australia based trust and positioning",
          "South Asia capability bridge",
          "Remote first digital delivery",
          "Research, NGO, and program market access",
          "AI and geospatial specialization",
          "Global client portal and reporting model",
        ].map((item) => (
          <GlassCard key={item} className="p-8">
            <h2 className="text-2xl font-black">{item}</h2>
            <p className="mt-4 leading-8 text-[color:var(--muted)]">This page explains how the company can scale from a strong starting point into a wider market story.</p>
          </GlassCard>
        ))}
      </div>
    </PageShell>
  );
}
