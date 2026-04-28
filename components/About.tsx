import Image from "next/image";

const stats = [
  ["92%", "matters resolved before trial"],
  ["24hr", "client response standard"],
  ["4", "core advisory practices"],
];

export default function About() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative min-h-[420px] overflow-hidden border border-white/10">
          <Image
            src="/hero.png"
            alt="Clients receiving family-focused legal guidance"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0f172a]/35" />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#c8a97e]">
            The firm
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
            A measured legal partner when the stakes are personal.
          </h2>
          <p className="mt-6 leading-8 text-slate-300">
            We combine rigorous preparation with calm client service. Every
            engagement begins with a precise understanding of the objective,
            the risks, and the practical path toward resolution.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {stats.map(([value, label]) => (
              <div key={value} className="border-l border-[#c8a97e] pl-5">
                <p className="font-serif text-3xl text-white">{value}</p>
                <p className="mt-2 text-sm leading-5 text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
