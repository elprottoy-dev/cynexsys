import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/animated";
import { GlassCard } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description: "Learn who Cynexsys IT is, what drives the company, and why the founder vision is built around intelligence systems.",
};

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="Who we are, why we exist, and what makes Cynexsys IT different."
      description="Cynexsys IT is built to help organizations move from fragmented software into connected intelligence systems."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <GlassCard className="p-8">
            <div className="text-sm uppercase tracking-[0.32em] text-cyan-300">Company identity</div>
            <h2 className="mt-4 text-3xl font-black">A premium technology company with a long horizon point of view.</h2>
            <p className="mt-5 leading-8 text-[color:var(--muted)]">
              Cynexsys IT combines AI, research workflows, geospatial intelligence, cloud architecture, automation, and product thinking into one brand that can serve institutions today while preparing for platform scale tomorrow.
            </p>
          </GlassCard>
        </Reveal>
        <Reveal delay={0.08}>
          <GlassCard className="p-8">
            <div className="text-sm uppercase tracking-[0.32em] text-cyan-300">Why now</div>
            <h2 className="mt-4 text-3xl font-black">The market is moving from tools to intelligence layers.</h2>
            <p className="mt-5 leading-8 text-[color:var(--muted)]">
              The next wave of software will connect visibility, memory, reasoning, and action. Cynexsys IT is designed to participate in that shift early by creating client systems that evolve into reusable modules, then into platforms, then into infrastructure products.
            </p>
          </GlassCard>
        </Reveal>
        <Reveal>
          <GlassCard className="p-8 lg:col-span-2">
            <div className="text-sm uppercase tracking-[0.32em] text-cyan-300">Core philosophy</div>
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {[
                "Intelligence is infrastructure.",
                "Research and engineering should work together.",
                "Systems must become more useful over time.",
                "Service work should create product leverage.",
                "Trust and evidence matter in high stakes settings.",
                "Design should reduce friction, not add noise.",
                "Ambition is strongest when grounded in execution.",
                "Long term value comes from reusable systems.",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-4 text-[color:var(--muted)]">{item}</div>
              ))}
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </PageShell>
  );
}
