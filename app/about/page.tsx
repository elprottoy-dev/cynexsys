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

const principles = [
  "Intelligence is infrastructure.",
  "Research and engineering should work together.",
  "Systems must become more useful over time.",
  "Service work should create product leverage.",
  "Trust and evidence matter in high stakes settings.",
  "Design should reduce friction, not add noise.",
  "Ambition is strongest when grounded in execution.",
  "Long term value comes from reusable systems.",
];

export default function AboutPage() {
  return (
    <>
      <PageShell
        eyebrow="About"
        title="Who we are, why we exist, and what makes Cynexsys IT different."
        description="Cynexsys IT is built to help organizations move from fragmented software into connected intelligence systems."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <GlassCard className="h-full p-8 md:p-10">
              <div className="max-w-xl">
                <div className="text-sm uppercase tracking-[0.32em] text-cyan-300">
                  Company identity
                </div>
                <h2 className="mt-4 text-3xl font-black leading-tight">
                  A Core technology company with a long horizon point of view.
                </h2>
                <p className="mt-5 leading-8 text-[color:var(--muted)]">
                  Cynexsys IT combines AI, research workflows, geospatial intelligence,
                  cloud architecture, automation, and product thinking into one brand
                  that can serve institutions today while preparing for platform scale
                  tomorrow.
                </p>
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.08}>
            <GlassCard className="h-full p-8 md:p-10">
              <div className="max-w-xl">
                <div className="text-sm uppercase tracking-[0.32em] text-cyan-300">
                  Why now
                </div>
                <h2 className="mt-4 text-3xl font-black leading-tight">
                  The market is moving from tools to intelligence layers.
                </h2>
                <p className="mt-5 leading-8 text-[color:var(--muted)]">
                  The next wave of software will connect visibility, memory, reasoning,
                  and action. Cynexsys IT is designed to participate in that shift early
                  by creating client systems that evolve into reusable modules, then into
                  platforms, then into infrastructure products.
                </p>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </PageShell>

      <section className="relative my-20 border-y border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] py-20 md:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.9),rgba(168,85,247,0.75),transparent)]" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(168,85,247,0.75),rgba(34,211,238,0.9),transparent)]" />
          <div className="absolute left-0 top-10 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute right-0 bottom-10 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-[1600px] px-6 md:px-8 xl:px-10">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <div className="text-sm uppercase tracking-[0.32em] text-cyan-300">
                Core Principles
              </div>
              <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                The principles that shape how Cynexsys IT thinks, builds, and grows.
              </h2>
              <p className="mx-auto mt-5 max-w-3xl leading-8 text-[color:var(--muted)]">
                These principles guide how we approach intelligence systems, product
                execution, long-term value creation, and trust in real-world
                environments.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 2xl:grid-cols-4">
            {principles.map((item, index) => (
              <Reveal key={item} delay={index * 0.04}>
                <div className="group h-full rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--panel)] p-6 md:p-7 transition duration-300 hover:-translate-y-[6px] hover:border-cyan-300/35 hover:shadow-[0_24px_80px_rgba(34,211,238,0.10)]">
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300 ring-1 ring-cyan-300/20">
                      <span className="text-lg font-bold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line)] bg-white/[0.03] text-cyan-300">
                      ✦
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold leading-8 text-[color:var(--text)]">
                      {item}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
                      Principle {index + 1} reflects the execution philosophy behind
                      how Cynexsys approaches systems, design, trust, and long-term
                      product value.
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <Reveal>
            <GlassCard className="p-8 text-center md:p-10 lg:p-12">
              <div className="mx-auto max-w-3xl">
                <div className="text-sm uppercase tracking-[0.32em] text-cyan-300">
                  Let’s build something meaningful
                </div>

                <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
                  If you have a project in mind, now is the right time to move.
                </h2>

                <p className="mx-auto mt-5 max-w-2xl leading-8 text-[color:var(--muted)]">
                  Whether you're validating an idea, building a digital product, or
                  upgrading an existing system, Cynexsys IT can help turn that vision into
                  a real, execution-ready solution with strong technical direction and
                  premium user experience.
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
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </section>
    </>
  );
}
