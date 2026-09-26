import Icon from "./Icon";
import Ornament from "./Ornament";
import Reveal from "./Reveal";
import { principles } from "@/lib/content";

export default function Why() {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <Ornament>Why Buzz Crew?</Ornament>
        </Reveal>

        <ul className="mt-14 grid gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-lilac/40">
          {principles.map((p, i) => (
            <li key={p.title} className="group px-6 text-center">
              <Reveal delay={i * 90}>
                <span className="mx-auto grid h-20 w-20 place-items-center rounded-full border border-lilac/70 text-indigo transition-all duration-500 group-hover:-translate-y-1.5 group-hover:border-indigo group-hover:bg-indigo group-hover:text-paper group-hover:shadow-xl group-hover:shadow-indigo/20">
                  <Icon
                    name={p.icon}
                    className="h-8 w-8 transition-transform duration-500 group-hover:scale-110"
                  />
                </span>
                <h3 className="mt-6 text-sm font-medium uppercase tracking-[0.14em]">
                  {p.title}
                </h3>
                <p className="mx-auto mt-3 max-w-[15rem] text-sm leading-relaxed text-indigo/75">
                  {p.text}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
