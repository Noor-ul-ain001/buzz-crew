import Image from "next/image";
import Ornament from "./Ornament";
import Reveal from "./Reveal";
import CountUp from "./motion/CountUp";
import Parallax from "./motion/Parallax";
import { stats, whoWeAre } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="border-t border-lilac/30 bg-paper py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="relative mx-auto w-full max-w-sm">
          <div className="group relative aspect-[3/4] overflow-hidden rounded-t-full border-[10px] border-mist shadow-xl shadow-indigo/10">
            <Parallax speed={-0.06} className="absolute -inset-y-10 inset-x-0">
              <Image
                src="/img/team.jpg"
                alt="The crew around a meeting table"
                fill
                sizes="(min-width: 1024px) 380px, 90vw"
                className="object-cover saturate-[.85] transition duration-1000 group-hover:scale-105"
              />
            </Parallax>
          </div>
          <div className="absolute -bottom-8 -right-4 grid h-32 w-32 transition-transform duration-500 hover:rotate-[-10deg] hover:scale-105 place-items-center rounded-full border border-lilac bg-paper p-4 text-center shadow-lg sm:-right-10">
            <p className="text-[11px] uppercase leading-tight tracking-[0.14em]">
              Est.
              <span className="block font-serif text-3xl normal-case tracking-normal">
                2022
              </span>
              Karachi
            </p>
          </div>
        </Reveal>

        <Reveal>
          <p className="font-script text-4xl text-violet xs:text-5xl">
            Hello, we are
          </p>
          <h2 className="font-serif text-[clamp(2.75rem,5vw,4rem)] font-medium uppercase leading-none tracking-[0.03em]">
            The Buzz Crew
          </h2>
          <Ornament className="mt-6 max-w-xs" />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-indigo/85">
            {whoWeAre.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-x-3 gap-y-6 xs:gap-6 border-t border-lilac/40 pt-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-serif text-5xl leading-none text-violet">
                  <CountUp value={s.value} />
                </dt>
                <dd className="mt-2 text-[10px] uppercase tracking-[0.04em] text-indigo/80 xs:text-xs xs:tracking-[0.12em]">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-indigo/60">
            Based in Pakistan, UAE &amp; UK
          </p>
        </Reveal>
      </div>
    </section>
  );
}
