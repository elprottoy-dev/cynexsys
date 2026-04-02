import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { GlassCard } from "@/components/ui";
import { insights } from "@/lib/site";

export const metadata: Metadata = { title: "Insights", description: "Articles and publications from Cynexsys IT." };

export default function InsightsPage() {
  return (
    <PageShell eyebrow="Insights" title="Blog, insight, and publication style content" description="A credibility layer for thought leadership, product direction, and research technology positioning.">
      <div className="grid gap-6 lg:grid-cols-3">
        {insights.map((item) => (
          <GlassCard key={item.slug} className="p-8">
            <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">Insight</div>
            <h2 className="mt-4 text-2xl font-black">{item.title}</h2>
            <p className="mt-4 leading-8 text-[color:var(--muted)]">{item.summary}</p>
            <div className="mt-5 text-cyan-300">Article preview</div>
          </GlassCard>
        ))}
      </div>
    </PageShell>
  );
}
