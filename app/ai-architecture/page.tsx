import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { GlassCard } from "@/components/ui";

export const metadata: Metadata = { title: "AI Architecture", description: "Multi model AI architecture with routing, verification, and private knowledge layers." };

export default function AIArchitecturePage() {
  return (
    <PageShell eyebrow="AI Architecture" title="A model agnostic intelligence stack" description="Claude, GPT, open models, domain tuned models, routing, private knowledge, agents, and verification in one system map.">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          "Model layer - Claude, GPT, open models, and domain specific models.",
          "Router layer - selects the best model for reasoning, coding, retrieval, or synthesis.",
          "Private knowledge layer - reports, docs, files, maps, and institutional memory.",
          "Agent layer - proposals, monitoring, summaries, updates, and operational tasks.",
          "Verification layer - evidence links, uncertainty scoring, and approval controls.",
          "Interface layer - dashboards, chat, forms, portals, and executive views.",
          "Security layer - access control, logging, privacy, and observability.",
          "Product layer - reusable modules that can become platforms and APIs.",
        ].map((item) => (
          <GlassCard key={item} className="p-6">
            <p className="leading-8 text-[color:var(--muted)]">{item}</p>
          </GlassCard>
        ))}
      </div>
    </PageShell>
  );
}
