import { contactInfo, footerBlurb } from "@/components/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-8 md:flex-row md:items-center">
        <div>
          <div className="text-xl font-black tracking-[0.22em]">CYNEXSYS</div>
          <div className="mt-1 text-sm text-white/50">Engineering the Intelligence Layer of Civilization</div>
        </div>
        <div className="max-w-2xl text-sm leading-7 text-white/45">{footerBlurb}</div>
        <div className="text-sm text-white/55">
          <div>{contactInfo.email}</div>
          <div>{contactInfo.addressLine2}</div>
        </div>
      </div>
    </footer>
  );
}
