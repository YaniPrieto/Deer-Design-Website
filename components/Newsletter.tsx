export default function Newsletter() {
  return (
    <section className="bg-[#f5ede4] py-16 text-[#111827]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#8c6a4c]">
            Newsletter Sign Up
          </p>
          <h2 className="mt-2 font-serif text-3xl">
            Ex Files <span className="text-[#c8a97e]">Featuring Your Decisions</span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-700">
            Your guide through life after divorce, co-parenting, and custody
            decisions. Get practical legal insight and clear next steps in your
            inbox.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-700">
            Our attorneys share timely advice for families, finances, and major
            transitions without the legal noise.
          </p>
        </div>

        <form className="grid gap-4">
          <input
            aria-label="Your name"
            className="border border-[#cfc4b9] bg-white px-4 py-3 text-sm outline-none focus:border-[#c8a97e]"
            placeholder="Enter your name"
            type="text"
          />
          <input
            aria-label="Email address"
            className="border border-[#cfc4b9] bg-white px-4 py-3 text-sm outline-none focus:border-[#c8a97e]"
            placeholder="Your email address"
            type="email"
          />
          <button className="bg-[#c8a97e] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#111827]">
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  );
}
