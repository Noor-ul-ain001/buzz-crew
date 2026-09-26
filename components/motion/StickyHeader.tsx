"use client";

import { useEffect, useState, type ReactNode } from "react";

// Fixed header that is transparent over the hero, gains a frosted paper
// background once you scroll, slides away while scrolling down and returns
// as soon as you scroll up.
export default function StickyHeader({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    let frame = 0;
    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (Math.abs(y - last) > 6) {
        setHidden(y > last && y > 240);
        last = y;
      }
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-[transform,background-color,box-shadow] duration-500 ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${scrolled ? "bg-paper/80 shadow-[0_1px_0_rgba(201,184,221,0.6)] backdrop-blur-md" : "bg-transparent"}`}
    >
      {children}
    </header>
  );
}
