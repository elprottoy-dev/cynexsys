import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { GlassCard } from "@/components/ui";
import { products } from "@/lib/site";

export async function generateStaticParams() {
  return products.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = products.find((entry) => entry.slug === slug);
  if (!item) return { title: "Product" };
  return {
    title: item.name,
    description: item.summary,
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = products.find((entry) => entry.slug === slug);
  if (!item) notFound();

  return (
    <PageShell eyebrow="Product" title={`${item.name} - ${item.tag}`} description={item.summary}>
      <GlassCard className="p-8">
        <div className="grid gap-4">
          {item.sections.map((section) => (
            <div key={section} className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-5 text-[color:var(--muted)]">
              {section}
            </div>
          ))}
        </div>
      </GlassCard>
    </PageShell>
  );
}
