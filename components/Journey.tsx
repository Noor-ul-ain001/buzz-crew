import Ornament from "./Ornament";
import Reveal from "./Reveal";
import { founders, journey } from "@/lib/content";

export default function Journey() {
  return (
    <section className="border-t border-lilac/30 bg-paper pb-24">
      <div className="mx-auto max-w-7xl px-4 pt-24 sm:px-8">
        <Reveal className="text-center">
          <Ornament>Our journey</Ornament>
          <p className="mt-4 font-script text-[1.75rem] leading-tight text-violet xs:text-4xl xs:leading-[1.11]">
            From a small startup to a full-service crew
          </p>
        </Reveal>

        <Reveal>
          <ol className="relative mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <span
              className="draw absolute inset-x-0 top-[7px] hidden h-px origin-left bg-lilac/60 [transition-duration:2s] lg:block"
              aria-hidden
            />
            {journey.map((step) => (
              <li key={step.year} className="group relative text-center">
                <div>
                  <span
                    className="relative mx-auto block h-3.5 w-3.5 rotate-45 bg-violet transition-transform duration-500 group-hover:rotate-[225deg] group-hover:scale-150"
                    aria-hidden
                  />
                  <p className="mt-6 font-serif text-5xl font-medium transition-colors duration-300 group-hover:text-violet">
                    {step.year}
                  </p>
                  <h3 className="mt-2 text-sm font-medium uppercase tracking-[0.14em]">
                    {step.title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-[15rem] text-sm leading-relaxed text-indigo/70">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="mt-24 text-center">
          <h3 className="font-serif text-2xl font-medium uppercase tracking-[0.06em] xs:text-4xl">
            Meet the founders
          </h3>
          <p className="mt-2 text-sm text-indigo/70">
            Three founders, one shared vision
          </p>
          <ul className="mt-10 flex flex-wrap justify-center gap-10">
            {founders.map((f) => (
              <li key={f.name} className="group w-40">
                <span className="mx-auto grid h-28 w-28 place-items-center rounded-full border border-lilac bg-mist font-script text-6xl text-violet transition-all duration-500 group-hover:-translate-y-1.5 group-hover:bg-indigo group-hover:text-paper group-hover:shadow-xl group-hover:shadow-indigo/20">
                  {f.name.replace("Ms. ", "")[0]}
                </span>
                <p className="mt-4 font-serif text-2xl">{f.name}</p>
                <p className="text-xs uppercase tracking-[0.16em] text-indigo/60">
                  {f.role}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
