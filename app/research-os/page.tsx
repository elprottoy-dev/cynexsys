import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { GlassCard } from "@/components/ui";

export const metadata: Metadata = { title: "Research OS", description: "A multimodal workspace for text, maps, tables, reports, and analysis." };

export default function ResearchOSPage() {
  return (
    <PageShell eyebrow="Research OS" title="One workspace for text, maps, tables, images, and analysis" description="This is the operating system vision for research and evidence work across organizations.">
      <div className="grid gap-6 md:grid-cols-2">
        {["Text and reports", "Maps and spatial layers", "Tables and indicators", "Images and remote sensing", "Voice and multimedia", "Team workflows and approvals"].map((item) => (
          <GlassCard key={item} className="p-8">
            <h2 className="text-2xl font-black">{item}</h2>
            <p className="mt-4 leading-8 text-[color:var(--muted)]">Integrated into one working environment instead of fragmented across disconnected tools and files.</p>
          </GlassCard>
        ))}
      </div>
    </PageShell>
  );
}
