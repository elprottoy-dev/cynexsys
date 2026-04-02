import Image from "next/image";
import Link from "next/link";
import { navItems, secondaryNav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--line)] bg-[color:var(--nav)]/70 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 md:grid-cols-[1.15fr_0.85fr_0.9fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-cyan-300/25 bg-black/40">
              <Image src="/logo.jpg" alt="Cynexsys logo" fill className="object-cover" />
            </div>
            <div>
              <div className="text-xl font-black tracking-[0.22em]">{site.name.toUpperCase()}</div>
              <div className="mt-1 text-sm text-[color:var(--muted)]">{site.tagline}</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-[color:var(--muted)]">
            Cynexsys IT creates AI systems, research software, geospatial intelligence platforms, institutional dashboards, and long horizon product architecture for the next era of digital capability.
          </p>
          <div className="mt-5 text-sm text-[color:var(--muted)]">Copyright Cynexsys IT</div>
        </div>

        <div>
          <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">Main pages</div>
          <div className="mt-4 grid gap-3 text-sm text-[color:var(--muted)]">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-cyan-300">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">More</div>
          <div className="mt-4 grid gap-3 text-sm text-[color:var(--muted)]">
            {secondaryNav.slice(0, 5).map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-cyan-300">
                {item.label}
              </Link>
            ))}
            <a href={`mailto:${site.email}`} className="hover:text-cyan-300">{site.email}</a>
            <div>{site.addressLines[0]}</div>
            <div>{site.addressLines[1]}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
