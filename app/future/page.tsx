import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/animated";
import { GlassCard } from "@/components/ui";
import { futureModules } from "@/lib/site";

export const metadata: Metadata = {
  title: "Future",
  description: "The future of Cynexsys IT across AI, digital twins, simulations, trust systems, and intelligence infrastructure.",
};

export default function FuturePage() {
  return (
    <PageShell
      eyebrow="Future"
      title="Future of the company - from premium digital delivery to intelligence infrastructure."
      description="This section turns the company story into an investor level roadmap with clear future modules."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {futureModules.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.03}>
            <GlassCard className="p-6">
              <div className="text-xl font-bold">{item.title}</div>
              <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">{item.text}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </PageShell>
  );
}
