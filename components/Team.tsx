import Image from "next/image";

const partners = [
  {
    name: "Hannah Deer Designer",
    image: "/partner1.png",
  },
  {
    name: "Katherine Waller",
    image: "/partner2.jpeg",
  },
  {
    name: "Jacqueline Simmons",
    image: "/partner3.jpg",
  },
];

export default function Team() {
  return (
    <section className="bg-[#f5ede4] py-20 text-[#111827]">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="font-serif text-4xl">Meet Our Partners</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-700">
          Our board-certified attorneys guide families with experience,
          strategy, and measured advocacy.
        </p>

        <div className="mx-auto mt-12 grid max-w-[760px] gap-7 sm:grid-cols-3">
          {partners.map((partner) => (
            <article
              key={partner.name}
              className="mx-auto w-full max-w-[210px] overflow-hidden rounded-md bg-[#11161f] text-left shadow-xl"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={partner.image}
                  alt={`${partner.name} portrait`}
                  fill
                  sizes="(min-width: 640px) 210px, 80vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="font-serif text-lg text-white">
                    {partner.name}
                  </h3>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#c8a97e]">
                    Partner
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <a
          href="#locations"
          className="mt-12 inline-block bg-[#c8a97e] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.18em]"
        >
          Meet All Attorneys &rarr;
        </a>
      </div>
    </section>
  );
}
