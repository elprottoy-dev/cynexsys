import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/animated";
import { GlassCard } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn who Cynexsys IT is, what drives the company, and why the founder vision is built around intelligence systems.",
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
            <div className="text-sm uppercase tracking-[0.32em] text-cyan-300">
              Company identity
            </div>
            <h2 className="mt-4 text-3xl font-black">
              A Core technology company with a long horizon point of view.
            </h2>
            <p className="mt-5 leading-8 text-[color:var(--muted)]">
              Cynexsys IT combines AI, research workflows, geospatial intelligence,
              cloud architecture, automation, and product thinking into one brand
              that can serve institutions today while preparing for platform scale
              tomorrow.
            </p>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.08}>
          <GlassCard className="p-8">
            <div className="text-sm uppercase tracking-[0.32em] text-cyan-300">
              Why now
            </div>
            <h2 className="mt-4 text-3xl font-black">
              The market is moving from tools to intelligence layers.
            </h2>
            <p className="mt-5 leading-8 text-[color:var(--muted)]">
              The next wave of software will connect visibility, memory, reasoning,
              and action. Cynexsys IT is designed to participate in that shift early
              by creating client systems that evolve into reusable modules, then into
              platforms, then into infrastructure products.
            </p>
          </GlassCard>
        </Reveal>

        <Reveal>
          <GlassCard className="p-8 lg:col-span-2">
            <div className="text-sm uppercase tracking-[0.32em] text-cyan-300">
              Core Principles of the company
            </div>
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
                <div
                  key={item}
                  className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-4 text-[color:var(--muted)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </GlassCard>
        </Reveal>
      </div>

      <Reveal>
        <GlassCard className="mt-6 p-10 text-center">
          <div className="text-sm uppercase tracking-[0.32em] text-cyan-300">
            Let’s build something meaningful
          </div>

          <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
            If you have a project in mind, now is the right time to move.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-[color:var(--muted)]">
            Whether you're validating an idea, building a digital product, or upgrading
            an existing system, Cynexsys IT can help turn that vision into a real,
            execution-ready solution with strong technical direction and premium user
            experience.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-2xl bg-cyan-300 px-8 py-4 font-semibold text-slate-950 shadow-[0_16px_50px_rgba(34,211,238,0.24)] transition hover:-translate-y-[2px]"
            >
              Contact us
            </Link>

            <Link
              href="/projects"
              className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] px-8 py-4 font-semibold text-[color:var(--text)] transition hover:bg-white/[0.08] hover:-translate-y-[2px]"
            >
              View Projects
            </Link>
          </div>

          <div className="mx-auto mt-8 grid max-w-4xl gap-4 text-left md:grid-cols-3">
            <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-4">
              <div className="text-sm font-semibold text-cyan-300">Execution-first approach</div>
              <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">
                We focus on building usable systems, not just concepts, slides, or surface-level prototypes.
              </p>
            </div>

            <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-4">
              <div className="text-sm font-semibold text-cyan-300">Multi-domain capability</div>
              <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">
                From AI and analytics to platforms, IoT, and research systems, the work is grounded in real delivery.
              </p>
            </div>

            <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-4">
              <div className="text-sm font-semibold text-cyan-300">Built for momentum</div>
              <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">
                Early decisions shape long-term scale. Starting now helps reduce wasted time, cost, and rework later.
              </p>
            </div>
          </div>
        </GlassCard>
      </Reveal>
    </PageShell>
  );
}
