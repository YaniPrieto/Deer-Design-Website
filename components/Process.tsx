const steps = [
  {
    title: "Consult",
    text: "We hear your concerns and clarify the legal issues that need immediate attention.",
  },
  {
    title: "Match",
    text: "You are paired with the attorney whose experience fits your goals and matter type.",
  },
  {
    title: "Advocate",
    text: "Your team moves forward with a focused strategy for negotiation or litigation.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-[#f5ede4] py-20 text-[#111827]">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="font-serif text-4xl">
          Close Attention To What You Need
        </h2>

        <div className="mx-auto mt-12 grid max-w-3xl gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className="relative">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#0f172a] font-serif text-lg text-[#c8a97e]">
                0{index + 1}
              </div>
              {index < steps.length - 1 ? (
                <div className="pointer-events-none absolute left-[calc(50%+2.75rem)] top-7 hidden w-[calc(100%-5.5rem)] items-center md:flex">
                  <span className="h-px flex-1 bg-[#111827]/35" />
                  <span className="ml-3 font-serif text-2xl leading-none text-[#111827]">
                    &rarr;
                  </span>
                </div>
              ) : null}
              <h3 className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em]">
                {step.title}
              </h3>
              <p className="mt-5 text-sm leading-7 text-slate-700">
                {step.text}
              </p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-sm leading-7 text-slate-700">
          From the first conversation, our team helps you understand the
          decisions ahead and the practical steps that follow.
        </p>
        <a
          href="#locations"
          className="mt-8 inline-block bg-[#c8a97e] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.18em]"
        >
          Learn What Happens Next &rarr;
        </a>
      </div>
    </section>
  );
}
