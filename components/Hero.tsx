import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[570px] overflow-hidden bg-[#0f172a] pt-[84px] text-white">
      <Image
        src="/hero.jpg"
        alt="Family walking together outdoors"
        fill
        priority
        sizes="100vw"
        className="-z-30 object-cover object-[62%_58%]"
      />
      <div className="absolute inset-0 -z-20 bg-[#0b0f15]/72" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#0b0f15]/75 to-transparent" />
      <div className="pointer-events-none absolute -left-36 top-0 h-full w-72 rounded-r-full border-[18px] border-[#c8a97e]/25" />
      <div className="pointer-events-none absolute -right-36 top-0 h-full w-72 rounded-l-full border-[18px] border-[#c8a97e]/25" />

      <div className="mx-auto flex min-h-[490px] max-w-6xl items-center justify-center px-6 py-16">
        <div className="w-full max-w-4xl border border-white/20 bg-[#111827]/45 px-6 py-10 text-center shadow-2xl backdrop-blur-[2px] sm:px-12">
          <h1 className="font-serif text-4xl leading-tight text-white sm:text-6xl">
            Your Future <span className="text-[#c8a97e]">Starts Here</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl font-serif text-sm leading-7 text-slate-200 sm:text-base">
            Divorce &amp; Family Law Attorneys Serving Durham, Raleigh, Cary,
            the Triangle, and Throughout North Carolina.
          </p>
          <p className="mt-7 text-[11px] uppercase tracking-[0.34em] text-[#c8a97e]">
            &#9733; Led by Board Certified Specialists in Family Law &#9733;
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#locations"
              className="inline-flex justify-center bg-[#c8a97e] px-9 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0f172a] transition hover:bg-[#dec49e]"
            >
              Call Now &rarr;
            </a>
            <a
              href="#locations"
              className="inline-flex justify-center border border-white/45 px-9 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:border-[#c8a97e] hover:text-[#c8a97e]"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
