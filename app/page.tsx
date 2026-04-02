import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Brain, Building2, Cloud, Globe, Radar, Rocket, Shield, Sparkles } from "lucide-react";
import { Reveal, Float } from "@/components/animated";
import { Container, CTAButtons, GlassCard, Pill, SectionHeading, StatCard } from "@/components/ui";
import { NewsletterForm } from "@/components/newsletter-form";
import { futureModules, investorMetrics, products, projects, servicePillars, site, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description: site.description,
};

export default function HomePage() {
  return (
    <>
      <section className="border-b border-[color:var(--line)] py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-cyan-200">
                  <Sparkles className="h-4 w-4" />
                  Future ready research, software, and intelligence systems
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-7 max-w-5xl text-[2.8rem] font-black leading-[0.94] tracking-tight md:text-[5.4rem]">
                  Building digital systems that feel decades ahead and still work in the real world now.
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-7 max-w-3xl text-lg leading-8 text-[color:var(--muted)] md:text-xl">
                  Cynexsys IT is a future facing research and technology company founded by ElProttoy AKA Khaled Md Prottoy. We build AI systems, research software, geospatial intelligence platforms, institutional dashboards, and long horizon digital products for organizations that need both credibility and ambition.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <CTAButtons />
              </Reveal>
              <div className="mt-12 grid gap-4 md:grid-cols-4">
                {stats.map((item, index) => (
                  <Reveal key={item.label} delay={index * 0.05}>
                    <StatCard value={item.value} label={item.label} />
                  </Reveal>
                ))}
              </div>
            </div>

            <Float>
              <GlassCard className="p-5 md:p-6">
                <div className="grid gap-5 rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--panel)] p-5">
                  <div className="flex items-center justify-between border-b border-[color:var(--line)] pb-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.35em] text-cyan-300">Command Surface</div>
                      <div className="mt-2 text-2xl font-black md:text-3xl">Cynexsys Capability Matrix</div>
                    </div>
                    <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-cyan-300/25 bg-black/40">
                      <Image src="/logo.jpg" alt="Cynexsys logo" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      [Brain, "AI Systems", "Assistants, retrieval, workflow agents, model routing"],
                      [Globe, "Research Tech", "GIS, climate, social data, insight tools"],
                      [Cloud, "Platform Engineering", "APIs, portals, data layers, admin systems"],
                      [Shield, "Infrastructure", "Cloud, security, deployment, observability"],
                    ].map(([Icon, title, desc]) => (
                      <div key={title as string} className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-4">
                        <Icon className="h-5 w-5 text-cyan-300" />
                        <div className="mt-3 font-semibold">{title as string}</div>
                        <div className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{desc as string}</div>
                      </div>
                    ))}
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
                      <div className="text-xs uppercase tracking-[0.28em] text-cyan-100/85">Core thesis</div>
                      <div className="mt-2 text-lg font-semibold">Software should increase intelligence, decision quality, and execution speed, not add complexity.</div>
                    </div>
                    <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-4">
                      <div className="text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">Delivery model</div>
                      <div className="mt-2 text-lg font-semibold">Research, engineer, deploy, evolve.</div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </Float>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Who we are"
              title="A next generation company built at the intersection of research, software, and future systems."
              text="Cynexsys IT is designed to become more than a development studio. It is a long range technology company that turns advanced ideas into deployable systems, blending design clarity, engineering discipline, research fluency, and product strategy."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <GlassCard className="p-8">
                <div className="text-sm uppercase tracking-[0.32em] text-cyan-300">Founder vision</div>
                <h3 className="mt-4 text-3xl font-black">The vision behind Cynexsys IT starts with one belief.</h3>
                <p className="mt-5 leading-8 text-[color:var(--muted)]">
                  ElProttoy AKA Khaled Md Prottoy created Cynexsys IT to build the intelligence layer that helps organizations think, operate, and evolve with more clarity. Instead of making isolated tools, the company is designed to build connected systems, intelligent workflows, and reusable infrastructure that compound over time.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Pill>Research led</Pill>
                  <Pill>Engineering disciplined</Pill>
                  <Pill>Investor ready</Pill>
                  <Pill>Global ambition</Pill>
                </div>
              </GlassCard>
            </Reveal>
            <Reveal delay={0.08}>
              <GlassCard className="p-8">
                <div className="text-sm uppercase tracking-[0.32em] text-cyan-300">What we do</div>
                <h3 className="mt-4 text-3xl font-black">Build systems that can serve today and evolve into products tomorrow.</h3>
                <p className="mt-5 leading-8 text-[color:var(--muted)]">
                  We design AI systems, research platforms, cloud software, institutional dashboards, reporting engines, and digital transformation layers. The current service model funds a larger ambition: platform modules, reusable products, and future infrastructure systems such as SYNAPSE, OMNIA, NEXGRID, and AUTOFORGE.
                </p>
                <div className="mt-5">
                  <Link href="/about" className="inline-flex items-center gap-2 text-cyan-300">
                    Learn more about the company <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-y border-[color:var(--line)] py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title="Full spectrum digital capability for organizations that need more than generic software."
              text="Each service line is designed to stand alone and connect into a bigger capability stack, from AI tools to research platforms to scalable infrastructure."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {servicePillars.map((item, index) => {
              const Icon = [Brain, Globe, Cloud, Building2][index] ?? Brain;
              return (
              <Reveal key={item.title} delay={index * 0.06}>
                <GlassCard className="p-7 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
                      <Icon className="h-6 w-6 text-cyan-300" />
                    </div>
                    <div className="text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">Premium delivery</div>
                  </div>
                  <h3 className="mt-5 text-2xl font-black md:text-3xl">{item.title}</h3>
                  <p className="mt-4 leading-8 text-[color:var(--muted)]">{item.text}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.points.map((point) => <Pill key={point}>{point}</Pill>)}
                  </div>
                </GlassCard>
              </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Investment readiness"
              title="A market story that speaks to both clients and investors."
              text="Cynexsys IT sits inside several of the largest technology opportunity zones now accelerating around the world."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {investorMetrics.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.05}>
                <GlassCard className="p-6">
                  <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">{item.label}</div>
                  <div className="mt-4 text-4xl font-black">{item.value}</div>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
                    Cynexsys IT is positioned where intelligence, infrastructure, analytics, and automation intersect.
                  </p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[color:var(--line)] py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Products"
              title="A service to product flywheel already visible in the brand."
              text="These product concepts help present a future ready identity while staying grounded in practical execution."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {products.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.06}>
                <GlassCard className="p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">{item.tag}</div>
                      <h3 className="mt-3 text-3xl font-black tracking-[0.12em]">{item.name}</h3>
                    </div>
                    <Rocket className="h-6 w-6 text-cyan-300" />
                  </div>
                  <p className="mt-5 leading-8 text-[color:var(--muted)]">{item.summary}</p>
                  <div className="mt-5">
                    <Link href={`/products/${item.slug}`} className="inline-flex items-center gap-2 text-cyan-300">
                      Open product page <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Projects"
              title="Case study style project architecture that makes the company feel substantial from day one."
              text="Each project direction is built to turn into a real case study with challenge, solution, outcomes, stack, and role."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.05}>
                <GlassCard className="p-7">
                  <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">{item.category}</div>
                  <h3 className="mt-4 text-2xl font-black">{item.title}</h3>
                  <p className="mt-4 leading-8 text-[color:var(--muted)]">{item.solution}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.stack.map((stack) => <Pill key={stack}>{stack}</Pill>)}
                  </div>
                  <div className="mt-5">
                    <Link href={`/projects/${item.slug}`} className="inline-flex items-center gap-2 text-cyan-300">
                      View case study <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[color:var(--line)] py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Future of the company"
              title="A future systems roadmap designed to attract serious attention."
              text="Cynexsys IT is not presented as a single product startup. It is positioned as an intelligence company with a progression path from services to platforms to infrastructure."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {futureModules.slice(0, 8).map((item, index) => (
              <Reveal key={item.title} delay={index * 0.03}>
                <GlassCard className="p-6">
                  <div className="text-lg font-bold">{item.title}</div>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">{item.text}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/future" className="inline-flex items-center gap-2 text-cyan-300">
              Explore the full future map <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <GlassCard className="p-8 md:p-10">
                <div className="text-sm uppercase tracking-[0.35em] text-cyan-300">Newsletter and waitlist</div>
                <h2 className="mt-4 text-4xl font-black md:text-5xl">Follow the future of Cynexsys IT.</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
                  Join for investor updates, product thinking, AI architecture notes, and future system releases.
                </p>
                <div className="mt-6">
                  <NewsletterForm />
                </div>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.08}>
              <GlassCard className="p-8 md:p-10">
                <div className="text-sm uppercase tracking-[0.35em] text-cyan-300">What happens next</div>
                <div className="mt-4 grid gap-4">
                  {[
                    "Publish real case studies with screenshots and measurable outcomes.",
                    "Add founder, investor, and insights pages for deeper trust.",
                    "Launch AI architecture and future systems pages to strengthen positioning.",
                    "Expand from premium services into reusable modules and product layers.",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] px-5 py-4 text-[color:var(--muted)]">
                      {item}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
