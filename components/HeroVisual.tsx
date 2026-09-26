import type { CSSProperties } from "react";
import Image from "next/image";

// Negative delays start each prop at a different point in its drift
const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const phoneFeed = [
  "/img/design.jpg",
  "/clients/halki-aanch.png",
  "/img/video.jpg",
  "/img/print.jpg",
  "/img/team.jpg",
  "/clients/mr-bawarchi.png",
  "/img/network.jpg",
  "/clients/discovery-homes.png",
  "/img/automation.jpg",
  "/clients/ig-civil.png",
  "/img/code.jpg",
  "/clients/farzanas-kitchen.png",
];

// Styled desk flat-lay: laptop showing the site, notebook, pen, coffee, and a
// rotating badge. Everything is sized in container units (cqw) so the whole
// scene scales as one piece from phone to desktop.
export default function HeroVisual() {
  return (
    <div
      className="@container relative mx-auto aspect-[1.08] w-full max-w-[680px]"
      aria-hidden
    >
      {/* Laptop */}
      <div className="absolute right-[2cqw] top-[8cqw] w-[84cqw] -rotate-[4deg]">
        <div className="rounded-t-[2.2cqw] bg-[#1a1240] p-[1.6cqw] shadow-[0_4cqw_8cqw_-3cqw_rgba(31,20,80,0.45)]">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[0.8cqw] bg-paper">
            <Image
              src="/img/team.jpg"
              alt=""
              fill
              loading="eager"
              sizes="(min-width: 1024px) 560px, 90vw"
              className="object-cover object-right saturate-[.75]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-paper from-30% via-paper/85 to-paper/10" />
            <div className="relative flex h-full flex-col gap-[5cqw] p-[4cqw]">
              {/* The rotating badge sits over the left of the screen, so the mini nav keeps to the right */}
              <div className="flex items-center justify-end">
                <span className="flex gap-[2.4cqw] text-[1.3cqw] uppercase tracking-[0.12em] text-indigo/60">
                  <span>Work</span>
                  <span>Services</span>
                  <span>Contact</span>
                </span>
              </div>
              <div>
                <p className="font-script text-[5cqw] leading-none text-violet">
                  Hello, we are
                </p>
                <p className="font-serif text-[6.4cqw] leading-[0.95] text-indigo">
                  Stories worth
                  <br />
                  remembering.
                </p>
                <span className="mt-[2.4cqw] inline-block rounded-full bg-indigo px-[2.6cqw] py-[1cqw] text-[1.2cqw] uppercase tracking-[0.16em] text-paper">
                  See our work
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Keyboard deck */}
        <div className="relative mx-auto h-[2.4cqw] w-[108%] -translate-x-[3.7%] rounded-b-[2cqw] bg-gradient-to-b from-[#dcd6e8] to-[#a39bbd] shadow-[0_2cqw_3cqw_-1cqw_rgba(31,20,80,0.4)]">
          <span className="absolute left-1/2 top-0 h-[0.9cqw] w-[14cqw] -translate-x-1/2 rounded-b-[1cqw] bg-[#bcb3d3]" />
        </div>
      </div>

      {/* Notebook, echoing the "Dream Plan Do" journal in the reference */}
      <div
        className="float absolute -bottom-[2cqw] left-0 w-[29cqw] rotate-[-9deg]"
        style={delay(-2000)}
      >
        <div className="relative aspect-[3/4] rounded-[1.4cqw] bg-gradient-to-br from-[#5b3a8c] to-[#2a1d5e] shadow-[0_3cqw_6cqw_-2cqw_rgba(31,20,80,0.55)]">
          <div className="absolute inset-y-[5cqw] left-[1.4cqw] flex flex-col justify-between">
            {Array.from({ length: 11 }, (_, i) => (
              <span
                key={i}
                className="h-[1.3cqw] w-[2.6cqw] rounded-full border-[0.4cqw] border-[#cfc3e3]"
              />
            ))}
          </div>
          <div className="flex h-full flex-col items-center justify-center pl-[3cqw] text-center font-script text-[4.5cqw] leading-[1.15] text-[#e4cc54]">
            <span>Strategy</span>
            <span>Creation</span>
            <span>Growth</span>
            <span className="mt-[1.5cqw] font-sans text-[2.6cqw]">♥</span>
          </div>
        </div>
      </div>

      {/* Pen */}
      <div className="absolute bottom-[5cqw] left-[36cqw] h-[1.5cqw] w-[24cqw] rotate-[-62deg] rounded-full bg-gradient-to-r from-[#150d3a] via-[#33256e] to-[#150d3a] shadow-md">
        <span className="absolute right-0 top-1/2 h-[0.9cqw] w-[3cqw] -translate-y-1/2 rounded-r-full bg-[#e4cc54]" />
      </div>

      {/* Phone lying on the desk, showing the crew's Instagram grid */}
      <div className="float absolute -bottom-[3cqw] right-[5cqw] w-[19cqw] rotate-[14deg]">
        <div className="rounded-[3cqw] bg-[#1a1240] p-[0.9cqw] shadow-[0_3cqw_6cqw_-2cqw_rgba(31,20,80,0.55)]">
          <div className="relative aspect-[9/18] overflow-hidden rounded-[2.2cqw] bg-paper">
            <span className="absolute left-1/2 top-[1.2cqw] h-[1.4cqw] w-[6cqw] -translate-x-1/2 rounded-full bg-[#1a1240]" />
            <div className="flex items-center gap-[1cqw] px-[1.6cqw] pb-[1.4cqw] pt-[4.4cqw]">
              <span className="grid h-[4.4cqw] w-[4.4cqw] shrink-0 place-items-center rounded-full bg-mist ring-[0.3cqw] ring-gold">
                <Image
                  src="/img/logo-mark.png"
                  alt=""
                  width={441}
                  height={396}
                  className="w-[70%]"
                />
              </span>
              <span className="text-[1.3cqw] font-semibold leading-tight">
                itsbuzzcrew
                <span className="block font-normal text-indigo/60">
                  Digital agency
                </span>
              </span>
            </div>
            <div className="grid grid-cols-3 gap-[0.3cqw]">
              {phoneFeed.map((src) => (
                <div key={src} className="relative aspect-square bg-mist">
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="60px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Rotating badge */}
      <div
        className="float absolute left-[4cqw] top-[1cqw] grid aspect-square w-[22cqw] place-items-center rounded-full bg-paper shadow-[0_2cqw_4cqw_-2cqw_rgba(31,20,80,0.35)]"
        style={delay(-4000)}
      >
        <svg
          viewBox="0 0 100 100"
          className="spin-slow absolute inset-0 h-full w-full text-indigo"
        >
          <defs>
            <path
              id="badge-circle"
              d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"
            />
          </defs>
          <text className="fill-current font-sans text-[8.6px] uppercase tracking-[0.28em]">
            <textPath href="#badge-circle">
              The Buzz Crew • Est. 2022 •
            </textPath>
          </text>
        </svg>
        <Image
          src="/img/logo-mark.png"
          alt=""
          width={441}
          height={396}
          className="w-[42%]"
        />
      </div>
    </div>
  );
}
