import Image from "next/image";

function SocialIcon({ label }: { label: string }) {
  return (
    <span className="grid h-8 w-8 place-items-center rounded-full border border-[#c8a97e]/70 text-[10px] font-semibold uppercase tracking-normal text-[#c8a97e]">
      {label}
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#11161f] py-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr_2fr]">
        <div>
          <div className="relative h-16 w-56">
            <Image
              src="/logo-transparent.png"
              alt="Deerdesigner Law"
              fill
              sizes="224px"
              className="object-contain object-left"
            />
          </div>
          <div className="mt-8 flex gap-4">
            <SocialIcon label="f" />
            <SocialIcon label="in" />
            <SocialIcon label="ig" />
          </div>
        </div>
        <div className="grid gap-8 text-xs uppercase tracking-[0.14em] text-slate-400 sm:grid-cols-3">
          <div>
            <h3 className="mb-4 text-[#c8a97e]">Quick Links</h3>
            <p className="leading-7">About</p>
            <p className="leading-7">Divorce</p>
            <p className="leading-7">Estate Planning</p>
            <p className="leading-7">Resources</p>
            <p className="leading-7">Schedule Consultation</p>
          </div>
          <div>
            <h3 className="mb-4 text-[#c8a97e]">Family Law</h3>
            <p className="leading-7">Divorce</p>
            <p className="leading-7">Child Custody</p>
            <p className="leading-7">Child Support</p>
            <p className="leading-7">Property Division</p>
            <p className="leading-7">Spousal Support</p>
          </div>
          <div>
            <h3 className="mb-4 text-[#c8a97e]">Estate Planning</h3>
            <p className="leading-7">Wills &amp; Trusts</p>
            <p className="leading-7">Powers of Attorney</p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-6xl flex-col gap-4 px-6 text-[10px] uppercase tracking-[0.18em] text-slate-500 sm:flex-row sm:justify-between">
        <p>Privacy Policy</p>
        <p>&copy; 2026 Deerdesigner Law</p>
        <p>Attorney Advertising</p>
      </div>
    </footer>
  );
}
