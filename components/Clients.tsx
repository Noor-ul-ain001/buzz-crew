import Image from "next/image";
import Ornament from "./Ornament";
import Reveal from "./Reveal";
import { clients } from "@/lib/content";

type Client = (typeof clients)[number];

function LogoRow({
  items,
  reverse = false,
}: {
  items: Client[];
  reverse?: boolean;
}) {
  const tiles = (hidden: boolean) =>
    items.map((client) => (
      <li
        key={client.name}
        aria-hidden={hidden || undefined}
        data-cursor
        className={`group relative mr-4 h-28 w-44 shrink-0 overflow-hidden rounded-full border border-lilac/40 transition-transform duration-500 hover:-translate-y-1 sm:h-32 sm:w-56 ${
          "dark" in client && client.dark ? "bg-indigo" : "bg-white"
        }`}
        style={"bg" in client ? { background: client.bg } : undefined}
      >
        <Image
          src={`/clients/${client.file}`}
          alt={hidden ? "" : client.name}
          fill
          sizes="224px"
          className="object-contain px-8 py-4 opacity-75 grayscale transition duration-500 group-hover:opacity-100 group-hover:grayscale-0"
        />
      </li>
    ));

  return (
    <div className="marquee-wrap overflow-hidden">
      <ul className={`marquee ${reverse ? "marquee-reverse" : ""}`}>
        {tiles(false)}
        {tiles(true)}
      </ul>
    </div>
  );
}

export default function Clients() {
  const half = Math.ceil(clients.length / 2);
  return (
    <section id="clients" className="bg-mist py-24">
      <Reveal className="mx-auto max-w-7xl px-4 text-center sm:px-8">
        <Ornament>Notable clients</Ornament>
        <p className="mt-4 font-script text-[1.75rem] leading-tight text-violet xs:text-4xl xs:leading-[1.11]">
          Local &amp; international brands who trust the crew
        </p>
      </Reveal>

      <div className="mt-14 space-y-4">
        <LogoRow items={clients.slice(0, half)} />
        <LogoRow items={clients.slice(half)} reverse />
      </div>
    </section>
  );
}
