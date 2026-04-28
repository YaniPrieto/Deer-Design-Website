import Image from "next/image";

function UtilityIcon({ label }: { label: string }) {
  return (
    <span className="grid h-4 w-4 place-items-center rounded-full border border-[#c8a97e]/60 text-[7px] leading-none text-[#c8a97e]">
      {label}
    </span>
  );
}

const navItems = [
  { label: "About", href: "#certification" },
  { label: "Divorce", href: "#services" },
  { label: "Estate Planning", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Resources", href: "#locations" },
  { label: "Contact", href: "#locations" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#10141c] text-white">
      <div className="border-b border-white/10 bg-[#0b0f15]">
        <div className="mx-auto flex h-7 max-w-6xl items-center justify-between px-6 text-[10px] uppercase tracking-[0.18em] text-[#c8a97e]">
          <div className="flex gap-3">
            <UtilityIcon label="f" />
            <UtilityIcon label="in" />
            <UtilityIcon label="ig" />
            <UtilityIcon label="x" />
          </div>
          <a href="tel:9195550100">Call: 919-555-0100</a>
        </div>
      </div>
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a href="#" className="relative block h-9 w-44">
          <Image
            src="/logo-transparent.png"
            alt="Deerdesigner Law"
            fill
            priority
            sizes="176px"
            className="object-contain object-left"
          />
        </a>
        <div className="hidden items-center gap-6 text-[10px] uppercase tracking-[0.12em] text-slate-300 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition hover:text-[#c8a97e]"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#locations"
          className="border border-[#c8a97e]/70 px-4 py-2 text-[10px] uppercase tracking-[0.15em] text-[#c8a97e] transition hover:bg-[#c8a97e] hover:text-[#0f172a]"
        >
          Schedule a Consultation
        </a>
      </nav>
    </header>
  );
}
