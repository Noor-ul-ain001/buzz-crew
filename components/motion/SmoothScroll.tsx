"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Inertia scrolling for the whole page. Anchor links (#about, #services…) glide
// too, offset so the section title clears the fixed header.
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.09,
      anchors: { offset: -80 },
    });
    return () => lenis.destroy();
  }, []);

  return null;
}
