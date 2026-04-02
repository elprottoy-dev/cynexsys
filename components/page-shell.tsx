import { ReactNode } from "react";
import { Container, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/animated";

export function PageShell({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children: ReactNode }) {
  return (
    <>
      <section className="border-b border-[color:var(--line)] py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading eyebrow={eyebrow} title={title} text={description} />
          </Reveal>
        </Container>
      </section>
      <section className="py-14 md:py-20">
        <Container>{children}</Container>
      </section>
    </>
  );
}
