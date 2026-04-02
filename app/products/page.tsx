import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/animated";
import { GlassCard } from "@/components/ui";
import { products } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore future Cynexsys IT products including SYNAPSE, OMNIA, NEXGRID, and AUTOFORGE.",
};

export default function ProductsPage() {
  return (
    <PageShell
      eyebrow="Products"
      title="Future products with a believable path from service work to platform scale."
      description="These are not empty names. They are structured future product directions built from practical delivery experience."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {products.map((item, index) => (
          <Reveal key={item.slug} delay={index * 0.05}>
            <GlassCard className="p-8">
              <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">{item.tag}</div>
              <h2 className="mt-3 text-3xl font-black tracking-[0.12em]">{item.name}</h2>
              <p className="mt-5 leading-8 text-[color:var(--muted)]">{item.summary}</p>
              <div className="mt-5">
                <Link href={`/products/${item.slug}`} className="text-cyan-300">Open product page</Link>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </PageShell>
  );
}
