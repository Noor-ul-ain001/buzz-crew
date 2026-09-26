import type { CSSProperties } from "react";
import Image from "next/image";
import CopyEmail from "./CopyEmail";
import HeroVisual from "./HeroVisual";
import Ornament from "./Ornament";
import Magnetic from "./motion/Magnetic";
import { contact } from "@/lib/content";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const trustLogos = [
  { file: "halki-aanch.png", name: "Halki Aanch by Ayesha" },
  { file: "discovery-homes.png", name: "Discovery Homes" },
  { file: "ig-civil.png", name: "IG Civil Contractor" },
  { file: "nawabs-dynasty.png", name: "Nawab's Dynasty" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-gradient-to-br from-paper via-mist to-[#ddd3ee]"
    >
      <div
        className="window-light pointer-events-none absolute -inset-10"
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-4 pb-16 pt-28 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-8 lg:py-28">
        <div className="min-w-0 max-w-lg">
          <p
            className="rise font-script text-[2.6rem] leading-none xs:text-6xl sm:text-7xl"
            style={delay(100)}
          >
            We tell{" "}
            <span className="whitespace-nowrap">
              your <span className="text-violet">♥</span>
            </span>
          </p>
          <h1
            className="rise mt-1 font-serif xs:-mt-2 text-[clamp(2.75rem,15vw,4rem)] xs:text-[clamp(4rem,10vw,8rem)] font-medium uppercase leading-[0.9] tracking-[0.02em]"
            style={delay(250)}
          >
            Stories
          </h1>
          <p
            className="rise mt-4 font-serif text-2xl xs:text-3xl sm:text-4xl"
            style={delay(400)}
          >
            Strategy. Creation. Growth <span className="text-gold">✦</span>
          </p>

          <div className="rise" style={delay(550)}>
            <Ornament className="mt-7 max-w-sm" />
            <p className="mt-7 text-base leading-relaxed text-indigo/90 xs:text-lg">
              A full-service digital agency from Karachi. We plan, create and
              grow brands across Pakistan, the UAE and the UK, so you{" "}
              <b className="font-semibold">attract the right people</b>.
            </p>
          </div>

          <div
            className="rise mt-9 flex flex-wrap items-center gap-x-6 gap-y-4"
            style={delay(700)}
          >
            <Magnetic>
              <a
                href={`mailto:${contact.email}`}
                className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-indigo px-6 py-3.5 text-xs uppercase tracking-[0.1em] xs:px-9 xs:text-sm xs:tracking-[0.16em] text-paper shadow-lg shadow-indigo/20 transition-colors hover:bg-violet"
              >
                Start a project
                <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  ↗
                </span>
              </a>
            </Magnetic>
            <a
              href="#services"
              className="border-b border-indigo/40 pb-0.5 text-sm uppercase tracking-[0.16em] transition hover:border-indigo"
            >
              Our services
            </a>
          </div>

          <p className="rise mt-5 text-sm text-indigo/75" style={delay(780)}>
            Or write to us: <CopyEmail className="text-indigo" />
          </p>

          {/* Trust row: real client logos */}
          <div
            className="rise mt-12 flex flex-wrap items-center gap-4"
            style={delay(850)}
          >
            <ul className="flex -space-x-3">
              {trustLogos.map((logo) => (
                <li
                  key={logo.file}
                  className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-paper bg-white"
                >
                  <Image
                    src={`/clients/${logo.file}`}
                    alt={logo.name}
                    fill
                    sizes="48px"
                    className="object-contain p-1"
                  />
                </li>
              ))}
            </ul>
            <p className="text-sm leading-snug text-indigo/75">
              <b className="font-semibold text-indigo">90+ projects</b> for
              brands in
              <br />
              Pakistan, the UAE &amp; the UK
            </p>
          </div>
        </div>

        <div className="rise min-w-0" style={delay(300)}>
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
