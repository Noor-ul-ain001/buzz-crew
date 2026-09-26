import Ornament from "./Ornament";
import Reveal from "./Reveal";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <Ornament>What clients say</Ornament>
        </Reveal>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <li key={t.name}>
              <Reveal delay={i * 100} className="h-full">
                <figure className="group flex h-full flex-col items-center rounded-t-[10rem] border border-lilac/50 bg-mist/60 px-5 pb-8 pt-14 text-center xs:px-8 transition-all duration-500 hover:-translate-y-2 hover:border-lilac hover:bg-mist hover:shadow-xl hover:shadow-indigo/10">
                  <span
                    className="font-serif text-6xl leading-none text-gold transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-125"
                    aria-hidden
                  >
                    &ldquo;
                  </span>
                  <blockquote className="flex-1 font-serif text-xl italic leading-snug xs:text-2xl">
                    {t.quote}
                  </blockquote>
                  <Ornament className="mt-8 w-24" />
                  <figcaption className="mt-4 text-xs uppercase tracking-[0.18em]">
                    <span className="font-medium">{t.name}</span>
                    <span className="block text-indigo/60">{t.place}</span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
