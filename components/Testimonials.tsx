const testimonials = [
  {
    quote:
      "Henderson Law helped me through one of the hardest chapters of my life with clarity, compassion, and a plan.",
    name: "Mary",
    role: "Client",
  },
  {
    quote:
      "My attorney was prepared, responsive, and strategic. I always knew where my case stood and what came next.",
    name: "Jonathan",
    role: "Client",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#11161f] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-[10px] uppercase tracking-[0.24em] text-[#c8a97e]">
          Testimonials
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-cormorant)] text-4xl italic">
          Hear What Our Clients Have to Say
        </h2>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {["All Reviews", "Divorce", "Child Custody", "Property Division"].map(
            (filter) => (
              <span
                key={filter}
                className="rounded-full border border-[#c8a97e]/60 px-4 py-1 text-[10px] uppercase tracking-[0.16em] text-[#c8a97e]"
              >
                {filter}
              </span>
            ),
          )}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="border border-white/10 bg-[#181e28] p-8 text-left shadow-xl"
            >
              <p className="font-serif text-5xl text-[#c8a97e]">&rdquo;</p>
              <blockquote className="mt-3 font-[family-name:var(--font-cormorant)] text-xl italic leading-9 text-slate-200">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-slate-200">
                  <span className="h-5 w-6 border-2 border-slate-500" />
                </span>
                <span>
                  <span className="block text-sm text-white">
                    {testimonial.name}
                  </span>
                  <span className="block text-xs text-slate-400">
                    {testimonial.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8 text-[#c8a97e]">&bull; &#9702; &#9702;</div>
        <a
          href="#locations"
          className="mt-10 inline-block bg-[#c8a97e] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#111827]"
        >
          Read More Testimonials &rarr;
        </a>
      </div>
    </section>
  );
}
