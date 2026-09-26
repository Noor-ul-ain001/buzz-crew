import Image from "next/image";
import Ornament from "./Ornament";
import Reveal from "./Reveal";
import { capabilities, services } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal className="text-center">
          <Ornament>What we do</Ornament>
          <p className="mt-4 font-script text-[1.75rem] leading-tight text-violet xs:text-4xl xs:leading-[1.11]">
            Five disciplines, one integrated crew
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service, i) => (
            <li key={service.name}>
              <Reveal delay={i * 80} className="group h-full">
                <article
                  data-cursor
                  className="flex h-full flex-col rounded-t-full bg-paper p-3 pb-7 shadow-sm transition duration-500 group-hover:-translate-y-1.5 group-hover:shadow-xl group-hover:shadow-indigo/10"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-t-full">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 230px, (min-width: 640px) 45vw, 90vw"
                      className="object-cover saturate-[.8] transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-3 pt-6 text-center">
                    <h3 className="font-serif text-2xl font-medium uppercase tracking-[0.05em] transition-colors duration-300 group-hover:text-violet">
                      {service.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-indigo/75">
                      {service.summary}
                    </p>
                    <ul className="mt-4 space-y-1 border-t border-lilac/40 pt-4 text-xs uppercase tracking-[0.1em] text-violet">
                      {service.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-16">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-indigo/60">
            Also in the crew&apos;s toolkit
          </p>
          <ul className="mx-auto mt-5 flex max-w-4xl flex-wrap justify-center gap-2.5">
            {capabilities.map((c) => (
              <li
                key={c}
                data-cursor
                className="rounded-full border border-lilac px-4 py-1.5 text-sm text-indigo/85 transition duration-300 hover:-translate-y-0.5 hover:border-indigo hover:bg-indigo hover:text-paper"
              >
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
