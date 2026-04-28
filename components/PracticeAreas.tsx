const services = [
  {
    icon: "divorce",
    title: "Divorce & Separation",
    text: "Steady counsel through property division, support, custody, and complex negotiations.",
  },
  {
    icon: "assets",
    title: "High Asset Divorce",
    text: "Sophisticated representation for business interests, investments, and valuation disputes.",
  },
  {
    icon: "custody",
    title: "Child Custody",
    text: "Practical advocacy for parenting schedules, decision-making, and family stability.",
  },
  {
    icon: "support",
    title: "Child Support",
    text: "Guidance around income, expenses, enforcement, and modifications.",
  },
  {
    icon: "property",
    title: "Property Division",
    text: "Strategic counsel for distributing homes, retirement assets, and shared obligations.",
  },
  {
    icon: "spousal",
    title: "Spousal Support",
    text: "Clear representation for alimony claims, agreements, and court proceedings.",
  },
  {
    icon: "prenup",
    title: "Prenuptial Agreements",
    text: "Carefully drafted agreements designed to protect assets and reduce uncertainty.",
  },
  {
    icon: "estate",
    title: "Estate Planning",
    text: "Focused estate plans for wills, trusts, powers of attorney, and family protection.",
  },
  {
    icon: "mediation",
    title: "Mediation",
    text: "Constructive resolution support for clients seeking durable agreements.",
  },
];

function PracticeIcon({ name }: { name: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.6,
  };

  return (
    <svg
      aria-hidden="true"
      className="h-9 w-9 text-[#c8a97e]"
      viewBox="0 0 48 48"
    >
      {name === "divorce" ? (
        <>
          <circle cx="17" cy="15" r="5" {...common} />
          <circle cx="31" cy="15" r="5" {...common} />
          <path d="M8 34c1.4-7 5.2-11 10-11 2.4 0 4.5 1 6 2.8" {...common} />
          <path d="M40 34c-1.4-7-5.2-11-10-11-2.4 0-4.5 1-6 2.8" {...common} />
          <path d="M24 12v24" {...common} />
        </>
      ) : null}
      {name === "assets" ? (
        <>
          <path d="M24 8v30" {...common} />
          <path d="M12 16h24" {...common} />
          <path d="M15 16 9 29h12l-6-13Z" {...common} />
          <path d="M33 16 27 29h12l-6-13Z" {...common} />
          <path d="M17 38h14" {...common} />
        </>
      ) : null}
      {name === "custody" ? (
        <>
          <circle cx="24" cy="14" r="5" {...common} />
          <path d="M15 38c1.2-8 4.2-13 9-13s7.8 5 9 13" {...common} />
          <path d="M12 22c-2.8 1.8-4.2 4.4-4.2 7.6" {...common} />
          <path d="M36 22c2.8 1.8 4.2 4.4 4.2 7.6" {...common} />
          <path d="M16 31c2.2 2 4.8 3 8 3s5.8-1 8-3" {...common} />
        </>
      ) : null}
      {name === "support" ? (
        <>
          <path d="M10 30c5.5 0 7-5.5 12-5.5h4.5c2 0 3.5 1.3 3.5 3.1 0 1.7-1.4 3.1-3.5 3.1H22" {...common} />
          <path d="M29 29.5 36.5 25c1.8-1 3.8-.5 4.7 1 .8 1.5.3 3.3-1.4 4.4L28 38H10" {...common} />
          <path d="M10 25v15" {...common} />
          <path d="M21 12c2-3 6-3 8 0 2-3 6-1.5 6 2.4 0 4.8-6 8.2-10 10.6-4-2.4-10-5.8-10-10.6 0-3.9 4-5.4 6-2.4Z" {...common} />
        </>
      ) : null}
      {name === "property" ? (
        <>
          <path d="m8 24 16-13 16 13" {...common} />
          <path d="M13 22v18h22V22" {...common} />
          <path d="M20 40V28h8v12" {...common} />
          <path d="M31 14v-4h5v8" {...common} />
        </>
      ) : null}
      {name === "spousal" ? (
        <>
          <circle cx="19" cy="27" r="7" {...common} />
          <circle cx="29" cy="21" r="7" {...common} />
          <path d="M14 13h10" {...common} />
          <path d="M19 8v10" {...common} />
          <path d="M29 8h9v9" {...common} />
          <path d="m38 8-8 8" {...common} />
        </>
      ) : null}
      {name === "prenup" ? (
        <>
          <path d="M13 7h18l6 6v28H13V7Z" {...common} />
          <path d="M31 7v7h7" {...common} />
          <path d="M18 22h14" {...common} />
          <path d="M18 29h14" {...common} />
          <path d="M18 36h8" {...common} />
        </>
      ) : null}
      {name === "estate" ? (
        <>
          <path d="M14 18h20v23H14V18Z" {...common} />
          <path d="M18 18v-6h12v6" {...common} />
          <path d="M20 26h8" {...common} />
          <path d="M20 32h8" {...common} />
          <path d="M34 27l4-4 3 3-7 7-3 1 1-3Z" {...common} />
        </>
      ) : null}
      {name === "mediation" ? (
        <>
          <path d="M8 24h8l6 6c1.4 1.4 3.6 1.4 5 0l5-5" {...common} />
          <path d="M40 24h-8l-6-6c-1.4-1.4-3.6-1.4-5 0l-5 5" {...common} />
          <path d="m15 31 5 5c1.4 1.4 3.6 1.4 5 0l8-8" {...common} />
          <path d="M8 18v12" {...common} />
          <path d="M40 18v12" {...common} />
        </>
      ) : null}
    </svg>
  );
}

export default function PracticeAreas() {
  return (
    <section id="services" className="bg-[#11161f] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] uppercase tracking-[0.24em] text-[#c8a97e]">
            North Carolina Family Law Attorneys
          </p>
          <h2 className="mt-3 font-serif text-4xl italic leading-tight text-white">
            Legal Guidance For Every Step Forward
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="min-h-48 border border-white/10 bg-gradient-to-br from-[#252b35] to-[#171c25] p-6 shadow-xl"
            >
              <PracticeIcon name={service.icon} />
              <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-slate-400">
                {service.text}
              </p>
              <a
                href="#locations"
                className="mt-6 inline-block text-[10px] uppercase tracking-[0.18em] text-[#c8a97e]"
              >
                Learn More &rarr;
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
