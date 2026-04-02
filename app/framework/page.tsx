import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/animated";
import { GlassCard } from "@/components/ui";
import { frameworkLetters } from "@/lib/site";

export const metadata: Metadata = {
  title: "Framework",
  description: "The C.I.V.I.L.I.Z.E framework by Khaled Md Prottoy.",
};

export default function FrameworkPage() {
  return (
    <PageShell
      eyebrow="Framework"
      title="C.I.V.I.L.I.Z.E - the founder framework for building future systems."
      description="This framework turns a broad skill set into a strategic operating model."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {frameworkLetters.map(([letter, word, desc], index) => (
          <Reveal key={letter + word} delay={index * 0.04}>
            <GlassCard className="p-6">
              <div className="text-4xl font-black text-cyan-300">{letter}</div>
              <div className="mt-3 text-xl font-bold">{word}</div>
              <div className="mt-3 leading-7 text-[color:var(--muted)]">{desc}</div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </PageShell>
  );
}
