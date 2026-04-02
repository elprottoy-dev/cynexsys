import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { GlassCard } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import { NewsletterForm } from "@/components/newsletter-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Cynexsys IT.",
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Start a project, ask a question, or join the Cynexsys IT waitlist."
      description="This page works as a client inquiry funnel, a contact page, and a newsletter waitlist entry point."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <GlassCard className="p-8 md:p-10">
          <div className="text-sm uppercase tracking-[0.32em] text-cyan-300">Project inquiry</div>
          <h2 className="mt-4 text-3xl font-black md:text-4xl">Tell us what you want to build.</h2>
          <p className="mt-4 leading-8 text-[color:var(--muted)]">
            Share your goals, timeline, organization type, and delivery expectations. Cynexsys IT is positioned for websites, platforms, AI systems, research software, and future ready infrastructure design.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </GlassCard>

        <div className="grid gap-6">
          <GlassCard className="p-8">
            <div className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 text-cyan-300" />
              <div>
                <div className="text-sm uppercase tracking-[0.25em] text-[color:var(--muted)]">Email</div>
                <a href={`mailto:${site.email}`} className="mt-2 block text-lg font-semibold">{site.email}</a>
              </div>
            </div>
            <div className="mt-6 flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-cyan-300" />
              <div>
                <div className="text-sm uppercase tracking-[0.25em] text-[color:var(--muted)]">Address</div>
                <div className="mt-2 text-lg font-semibold leading-8">
                  {site.addressLines[0]}<br />
                  {site.addressLines[1]}
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-8">
            <div className="text-sm uppercase tracking-[0.32em] text-cyan-300">Newsletter and waitlist</div>
            <h2 className="mt-4 text-2xl font-black">Follow new products, insights, and future releases.</h2>
            <div className="mt-5">
              <NewsletterForm />
            </div>
          </GlassCard>
        </div>
      </div>
    </PageShell>
  );
}
