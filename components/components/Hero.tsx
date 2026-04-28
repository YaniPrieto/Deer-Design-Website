import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-6 py-24 text-white sm:px-8">
      <Image
        src="/hero-law-office.png"
        alt="Modern law office interior at dusk"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/65" />

      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-amber-300 sm:text-base">
          Trusted legal guidance
        </p>
        <h1 className="text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
          Your Future Starts Here
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-200 sm:text-lg">
          Strategic counsel for families, founders, and professionals ready to
          protect what matters and move forward with confidence.
        </p>

        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-md bg-amber-400 px-7 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-zinc-950 sm:w-auto"
          >
            Schedule a Consultation
          </a>
          <a
            href="#services"
            className="inline-flex w-full items-center justify-center rounded-md border border-white/70 px-7 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-950 sm:w-auto"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
