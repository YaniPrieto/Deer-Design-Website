export default function Contact() {
  return (
    <section id="contact" className="bg-[#0f172a] py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#c8a97e]">
            Contact
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
            Begin with a confidential consultation.
          </h2>
          <p className="mt-6 leading-8 text-slate-300">
            Share the essential facts and our intake team will coordinate the
            right attorney for your matter.
          </p>
        </div>

        <form className="grid gap-5 border border-white/10 bg-[#1e293b] p-7">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-slate-300">
              Name
              <input
                className="rounded-sm border border-white/10 bg-[#0f172a] px-4 py-3 text-white outline-none transition focus:border-[#c8a97e]"
                type="text"
                name="name"
              />
            </label>
            <label className="grid gap-2 text-sm text-slate-300">
              Email
              <input
                className="rounded-sm border border-white/10 bg-[#0f172a] px-4 py-3 text-white outline-none transition focus:border-[#c8a97e]"
                type="email"
                name="email"
              />
            </label>
          </div>
          <label className="grid gap-2 text-sm text-slate-300">
            Matter type
            <input
              className="rounded-sm border border-white/10 bg-[#0f172a] px-4 py-3 text-white outline-none transition focus:border-[#c8a97e]"
              type="text"
              name="matter"
            />
          </label>
          <label className="grid gap-2 text-sm text-slate-300">
            Brief summary
            <textarea
              className="min-h-32 rounded-sm border border-white/10 bg-[#0f172a] px-4 py-3 text-white outline-none transition focus:border-[#c8a97e]"
              name="message"
            />
          </label>
          <button
            type="submit"
            className="rounded-sm bg-[#c8a97e] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#0f172a] transition hover:bg-[#dec49e]"
          >
            Request Consultation
          </button>
        </form>
      </div>
    </section>
  );
}
