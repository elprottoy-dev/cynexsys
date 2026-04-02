import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { GlassCard } from "@/components/ui";
import { downloadDocs } from "@/lib/site";

export const metadata: Metadata = { title: "Downloads", description: "Download center for company profile, investor snapshot, and service briefs." };

export default function DownloadsPage() {
  return (
    <PageShell eyebrow="Downloads" title="A central place for profile, pitch, and capability documents" description="These cards are ready to connect to future PDF downloads.">
      <div className="grid gap-6 md:grid-cols-2">
        {downloadDocs.map((item) => (
          <GlassCard key={item.title} className="p-8">
            <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">Document</div>
            <h2 className="mt-4 text-2xl font-black">{item.title}</h2>
            <p className="mt-4 leading-8 text-[color:var(--muted)]">{item.subtitle}</p>
            <div className="mt-5 text-cyan-300">Connect PDF download</div>
          </GlassCard>
        ))}
      </div>
    </PageShell>
  );
}
