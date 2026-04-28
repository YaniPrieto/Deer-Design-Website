import Image from "next/image";

export default function Certification() {
  return (
    <section id="certification" className="bg-[#f5ede4] py-20 text-[#111827]">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <div className="flex justify-center lg:justify-start">
          <div className="relative h-64 w-64">
            <Image
              src="/certified.png"
              alt="Board certified seal"
              fill
              sizes="256px"
              className="object-contain"
            />
          </div>
        </div>

        <div>
          <h2 className="font-serif text-4xl leading-tight">
            Caring Representation Led By
            <br />
            <span className="text-[#c8a97e]">
              Board-Certified Specialists.
            </span>
          </h2>
          <p className="mt-6 text-sm leading-7 text-slate-700">
            Our attorneys bring advanced family law training, courtroom
            experience, and thoughtful strategy to matters involving divorce,
            custody, property division, and long-term family planning.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            Certification reflects a high standard of knowledge and
            professionalism, and our team brings that discipline to every client
            relationship.
          </p>
          <a
            href="#services"
            className="mt-7 inline-block bg-[#c8a97e] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#111827]"
          >
            What does it mean to be a certified family law specialist? &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
