const offices = [
  {
    name: "Durham Office",
    city: "Durham, North Carolina",
  },
  {
    name: "Cary Office",
    city: "Cary, North Carolina",
  },
  {
    name: "Wake Forest Office",
    city: "Wake Forest, North Carolina",
  },
  {
    name: "Pittsboro Office",
    city: "Pittsboro, North Carolina",
  },
];

function LocationIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-8 w-8 text-[#c8a97e]"
      fill="none"
      viewBox="0 0 48 48"
    >
      <path
        d="M24 42s13-11.3 13-23A13 13 0 0 0 11 19c0 11.7 13 23 13 23Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
      <circle
        cx="24"
        cy="19"
        r="4.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export default function Locations() {
  return (
    <section id="locations" className="border-t border-white/10 bg-[#11161f] py-14 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {offices.map((office) => (
          <article key={office.name} className="text-center">
            <div className="mx-auto grid h-10 w-10 place-items-center">
              <LocationIcon />
            </div>
            <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.16em]">
              {office.name}
            </h3>
            <p className="mt-2 text-xs leading-5 text-slate-400">
              {office.city}
              <br />
              Consultations by appointment
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
