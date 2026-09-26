import Image from "next/image";
import Ornament from "./Ornament";
import Reveal from "./Reveal";
import Parallax from "./motion/Parallax";
import { process } from "@/lib/content";

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-indigo py-24 text-paper"
    >
      {/* Still-life photo bleeding off the left edge, as in the reference */}
      <Parallax
        speed={0.12}
        className="absolute -left-24 top-1/4 hidden xl:block"
      >
        <div className="relative h-[26rem] w-[26rem] overflow-hidden rounded-full opacity-90">
          <Image
            src="/img/design.jpg"
            alt=""
            fill
            sizes="416px"
            className="object-cover saturate-[.7]"
          />
        </div>
      </Parallax>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-8 lg:grid-cols-[1fr_300px] xl:pl-72">
        <div className="min-w-0">
          <Reveal>
            <Ornament dark>How we work</Ornament>
            <p className="mt-3 text-center text-sm text-paper/70">
              A repeatable process behind every account
            </p>
          </Reveal>

          <Reveal>
            <ol className="mt-10 space-y-6">
              {process.map((step, i) => (
                <li key={step.title} className="group flex gap-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-paper font-serif text-lg font-semibold text-indigo transition-all duration-300 group-hover:scale-110 group-hover:bg-lilac group-hover:text-paper">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium transition-transform duration-300 group-hover:translate-x-1">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-paper/75">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        {/* Arch frame with a round badge overlapping its base */}
        <Reveal className="relative mx-auto w-full max-w-[260px] pb-14 lg:w-[300px] lg:max-w-none">
          <span
            className="absolute -top-7 left-1/2 -translate-x-1/2 text-3xl text-gold"
            aria-hidden
          >
            ♥
          </span>
          <div className="group rounded-t-full border border-lilac/60 p-3 transition-colors duration-500 hover:border-lilac">
            <div className="relative aspect-[3/4] overflow-hidden rounded-t-full">
              <Image
                src="/img/video.jpg"
                alt="Behind the scenes on a Buzz Crew shoot"
                fill
                sizes="300px"
                className="object-cover saturate-[.8] transition duration-1000 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 grid h-32 w-32 -translate-x-1/2 place-items-center rounded-full bg-paper p-3 text-center text-indigo shadow-xl transition-transform duration-500 hover:scale-105">
            <p className="text-[10px] uppercase leading-snug tracking-[0.14em]">
              Let&apos;s create
              <span className="block font-serif text-lg font-semibold tracking-[0.06em]">
                some buzz
              </span>
              together <span className="text-violet">♥</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
