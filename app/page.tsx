"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  ChevronRight,
  LineChart,
  Mail,
  MapPin,
  Rocket,
  Sparkles,
} from "lucide-react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Card, SectionHeading } from "@/components/ui";
import {
  contactInfo,
  faqs,
  frameworkLetters,
  matrix,
  pageHighlights,
  processSteps,
  productIcon,
  products,
  projectIcon,
  projects,
  researchDomains,
  servicePillars,
  stats,
  techStack,
  whyItWorks,
} from "@/components/data";
import { ContactForm } from "@/components/contact-form";

export default function Page() {
  const ProductIcon = productIcon;
  const ProjectIcon = projectIcon;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#030711] text-white selection:bg-cyan-300 selection:text-slate-950">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(8,145,178,0.16),transparent_32%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.12),transparent_28%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:42px_42px] opacity-[0.16]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(180deg,rgba(3,7,17,0.15),rgba(3,7,17,0.82)_55%,#030711)]" />

      <Navbar />

      <main className="relative z-10">
        <section id="home" className="mx-auto max-w-7xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-cyan-200"
              >
                <Sparkles className="h-4 w-4" /> {pageHighlights.heroEyebrow}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.08 }}
                className="mt-7 max-w-5xl text-[2.9rem] font-black leading-[0.94] tracking-tight md:text-[5.4rem]"
              >
                {pageHighlights.heroTitle}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.16 }}
                className="mt-7 max-w-3xl text-lg leading-8 text-white/72 md:text-xl"
              >
                {pageHighlights.heroDescription}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.24 }}
                className="mt-9 flex flex-wrap gap-4"
              >
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-2xl bg-cyan-300 px-6 py-3.5 font-semibold text-slate-950 shadow-[0_16px_50px_rgba(34,211,238,0.24)] transition hover:-translate-y-[2px]"
                >
                  Explore Projects <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-white/[0.05] px-6 py-3.5 font-semibold transition hover:bg-white/[0.08]"
                >
                  View Services <ChevronRight className="h-4 w-4" />
                </a>
              </motion.div>

              <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
                {stats.map((item) => (
                  <Card key={item.label} className="p-5">
                    <div className="text-2xl font-black text-cyan-300 md:text-3xl">{item.value}</div>
                    <div className="mt-2 text-sm leading-6 text-white/58">{item.label}</div>
                  </Card>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18 }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-[2.2rem] bg-gradient-to-br from-cyan-400/15 via-blue-500/10 to-violet-500/15 blur-3xl" />
              <Card className="relative p-5 md:p-6">
                <div className="rounded-[1.5rem] border border-white/10 bg-[#071224] p-5 md:p-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <div>
                      <div className="text-xs uppercase tracking-[0.35em] text-cyan-300">Command Surface</div>
                      <div className="mt-2 text-2xl font-black md:text-3xl">Cynexsys Capability Matrix</div>
                    </div>
                    <div className="h-3.5 w-3.5 rounded-full bg-cyan-300 shadow-[0_0_28px_rgba(103,232,249,0.85)]" />
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-4">
                    {matrix.map(([Icon, title, desc]) => (
                      <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                        <Icon className="h-5 w-5 text-cyan-300" />
                        <div className="mt-3 font-semibold">{title}</div>
                        <div className="mt-2 text-sm leading-6 text-white/60">{desc}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/10 p-4">
                      <div className="text-xs uppercase tracking-[0.28em] text-cyan-100/85">Core Thesis</div>
                      <div className="mt-2 text-lg font-semibold">
                        Software should not just function — it should elevate intelligence, speed, and strategic clarity.
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="text-xs uppercase tracking-[0.28em] text-white/50">Delivery Model</div>
                      <div className="mt-2 text-lg font-semibold">
                        Research-led discovery. Fast engineering. Production-ready launch. Continuous evolution.
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-18 md:py-24">
          <SectionHeading
            eyebrow="About Cynexsys"
            title="A next-generation company built at the intersection of research, software, and future systems."
            text="Cynexsys is designed to be more than a development studio. It transforms advanced ideas into deployable systems by combining design clarity, engineering discipline, research fluency, and a sharp product mindset."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <Card className="p-8">
              <div className="text-sm uppercase tracking-[0.32em] text-cyan-300">Positioning</div>
              <h3 className="mt-4 text-3xl font-black">From premium service delivery to long-term product infrastructure.</h3>
              <p className="mt-5 leading-8 text-white/68">
                The Cynexsys model starts with high-value software and research systems for real organizations. From there, it compounds into repeatable modules, intelligent platforms, automation engines, and future product layers that can scale beyond individual client work.
              </p>
            </Card>
            <Card className="p-8">
              <div className="text-sm uppercase tracking-[0.32em] text-cyan-300">Founder Thesis</div>
              <h3 className="mt-4 text-3xl font-black">Engineering the intelligence layer of civilization.</h3>
              <p className="mt-5 leading-8 text-white/68">
                This brand direction is bold by design. Cynexsys communicates ambition, but grounds it in what matters now: useful systems, elegant engineering, measurable impact, and credible execution across research, institutions, and product development.
              </p>
            </Card>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-18 md:py-24">
          <SectionHeading
            eyebrow="Services"
            title="Full-spectrum digital capability for organizations that need more than generic software."
            text="Each service line is designed to stand alone, but also connect into a bigger long-term capability stack — from AI tools to research platforms to scalable infrastructure."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {servicePillars.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="p-7 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10">
                      <Icon className="h-6 w-6 text-cyan-300" />
                    </div>
                    <div className="text-xs uppercase tracking-[0.25em] text-white/40">Premium Delivery</div>
                  </div>
                  <h3 className="mt-5 text-2xl font-black md:text-3xl">{item.title}</h3>
                  <p className="mt-4 leading-8 text-white/68">{item.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.points.map((point) => (
                      <span key={point} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-white/78">
                        {point}
                      </span>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        <section id="research" className="mx-auto max-w-7xl px-6 py-18 md:py-24">
          <SectionHeading
            eyebrow="Research Domains"
            title="A website architecture aligned with serious research and systems work."
            text="The Cynexsys presence should feel credible to institutions, forward-looking to product collaborators, and compelling to organizations seeking advanced digital capability."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {researchDomains.map((item) => (
              <Card key={item.title} className="p-7">
                <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">Domain</div>
                <h3 className="mt-3 text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-8 text-white/68">{item.text}</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="products" className="mx-auto max-w-7xl px-6 py-18 md:py-24">
          <SectionHeading
            eyebrow="Future Product Layer"
            title="The visionary side of Cynexsys — grounded in an executable path."
            text="These product concepts position the brand beyond services while preserving credibility. They are framed as an evolving roadmap, not empty hype."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {products.map((item) => (
              <Card key={item.name} className="p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">{item.tag}</div>
                    <h3 className="mt-3 text-3xl font-black tracking-[0.12em]">{item.name}</h3>
                  </div>
                  <ProductIcon className="h-6 w-6 text-cyan-300" />
                </div>
                <p className="mt-5 leading-8 text-white/68">{item.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-18 md:py-24">
          <SectionHeading
            eyebrow="Projects & Case Study Directions"
            title="A huge portfolio-ready section built to make Cynexsys feel substantial from day one."
            text="These are production-grade project categories you can refine into real case studies over time. They make the site feel expansive, capable, and enterprise-ready even before every case study is filled with final assets."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {projects.map((item) => (
              <Card key={item.title} className="p-8">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs uppercase tracking-[0.25em] text-cyan-200">
                    {item.category}
                  </span>
                  <ProjectIcon className="h-5 w-5 text-cyan-300" />
                </div>
                <h3 className="mt-5 text-2xl font-black md:text-3xl">{item.title}</h3>
                <p className="mt-4 leading-8 text-white/68">{item.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-white/78">
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="framework" className="mx-auto max-w-7xl px-6 py-18 md:py-24">
          <Card className="relative overflow-hidden p-8 md:p-10">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-300/8 via-transparent to-violet-500/10" />
            <SectionHeading
              eyebrow="Signature Framework"
              title="C.I.V.I.L.I.Z.E — the Khaled Md Prottoy framework for building future systems."
              text="This framework turns a broad skill set into a strategic operating system. It communicates process, philosophy, and long-range intent in a way that can live across your brand, proposals, and product roadmap."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {frameworkLetters.map(([letter, word, desc]) => (
                <div key={letter + word} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                  <div className="text-4xl font-black text-cyan-300">{letter}</div>
                  <div className="mt-3 text-xl font-bold">{word}</div>
                  <div className="mt-3 leading-7 text-white/66">{desc}</div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-6 py-18 md:py-24">
          <SectionHeading
            eyebrow="Delivery Process"
            title="How Cynexsys moves from idea to launch with speed, quality, and clarity."
            text="This section makes the company feel structured and professional — essential for clients, partners, and institutions reviewing your capability."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {processSteps.map((item) => (
              <Card key={item.step} className="p-6">
                <div className="text-sm uppercase tracking-[0.32em] text-cyan-300">Step {item.step}</div>
                <div className="mt-3 text-2xl font-black">{item.title}</div>
                <div className="mt-4 leading-7 text-white/68">{item.text}</div>
              </Card>
            ))}
          </div>
        </section>

        <section id="technology" className="mx-auto max-w-7xl px-6 py-18 md:py-24">
          <SectionHeading
            eyebrow="Technology Stack"
            title="A production-ready stack you can build now, deploy fast, and scale later."
            text="The site design is futuristic, but the implementation strategy is practical: modern frontend, API-driven backend, strong data architecture, and cloud-native deployment."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {techStack.map((group) => {
              const Icon = group.icon;
              return (
                <Card key={group.title} className="p-7">
                  <Icon className="h-6 w-6 text-cyan-300" />
                  <div className="mt-4 text-2xl font-black">{group.title}</div>
                  <div className="mt-5 space-y-3">
                    {group.items.map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white/78">
                        {item}
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-18 md:py-24">
          <Card className="p-8 md:p-10">
            <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <div className="text-sm uppercase tracking-[0.35em] text-cyan-300">Why this website works</div>
                <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                  It balances visionary branding with believable execution.
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/68">
                  The strongest technology brands create an emotional reaction first, then earn trust through structure. This site is designed around that principle: cinematic top-layer positioning, followed by deep capability sections, detailed projects, a clear process, and production-ready contact pathways.
                </p>
              </div>
              <div className="grid gap-4">
                {whyItWorks.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white/78">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-18 md:py-24">
          <SectionHeading
            eyebrow="FAQ"
            title="A polished trust-building section for serious visitors."
            text="These questions help make the website feel complete and client-ready while also pre-answering common concerns."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {faqs.map((item) => (
              <Card key={item.q} className="p-7">
                <div className="text-xl font-bold leading-8">{item.q}</div>
                <div className="mt-4 leading-8 text-white/68">{item.a}</div>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 pt-18 md:pb-32 md:pt-24">
          <Card className="relative overflow-hidden p-8 md:p-12">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-transparent to-violet-500/10" />
            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="text-sm uppercase tracking-[0.35em] text-cyan-300">Contact Cynexsys</div>
                <h2 className="mt-4 text-4xl font-black tracking-tight leading-[1.04] md:text-6xl">
                  Build your next system with a company designed for the future.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                  Whether you need a modern website, AI-powered platform, analytics dashboard, research software system, or custom cloud-based product, Cynexsys is positioned to deliver a premium digital experience from concept to deployment.
                </p>
                <div className="mt-8 grid gap-4 text-white/80">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 h-5 w-5 text-cyan-300" />
                    <div>
                      <div className="text-sm uppercase tracking-[0.25em] text-white/45">Email</div>
                      <a className="text-lg font-semibold transition hover:text-cyan-300" href={`mailto:${contactInfo.email}`}>
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 text-cyan-300" />
                    <div>
                      <div className="text-sm uppercase tracking-[0.25em] text-white/45">Address</div>
                      <div className="text-lg font-semibold leading-8">
                        {contactInfo.addressLine1}
                        <br />
                        {contactInfo.addressLine2}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
