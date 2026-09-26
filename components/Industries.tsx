import Ornament from "./Ornament";
import Reveal from "./Reveal";
import { industries } from "@/lib/content";

export default function Industries() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal className="text-center">
          <Ornament>Where we&apos;ve worked</Ornament>
          <p className="mt-4 font-script text-[1.75rem] leading-tight text-violet xs:text-4xl xs:leading-[1.11]">
            Cross-industry experience, not a one-vertical playbook
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-lilac/40">
          {industries.map((industry, i) => (
            <li
              key={industry.name}
              data-cursor
              className="group px-5 text-center"
            >
              <Reveal delay={i * 80}>
                <span
                  className="inline-block text-gold transition-transform duration-700 group-hover:rotate-180 group-hover:scale-125 group-hover:text-violet"
                  aria-hidden
                >
                  ◆
                </span>
                <h3 className="mt-3 font-serif text-xl font-medium xs:text-2xl uppercase leading-tight tracking-[0.04em] transition-all duration-500 group-hover:-translate-y-1 group-hover:text-violet">
                  {industry.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-indigo/70">
                  {industry.detail}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
