"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const INTERACTIVE = "a, button, [data-cursor]";
const QUERY = "(pointer: fine) and (prefers-reduced-motion: no-preference)";

// True only for a mouse/trackpad user who hasn't asked for reduced motion.
function subscribe(onChange: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}
const getSnapshot = () => window.matchMedia(QUERY).matches;
const getServerSnapshot = () => false;

// A small dot that tracks the pointer exactly, and a ring that trails behind it.
// The ring grows over anything interactive; elements with data-cursor-label
// show that word inside it. Only on mouse/trackpad devices.
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const enabled = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("has-cursor");

    const target = { x: -100, y: -100 };
    const trail = { x: -100, y: -100 };
    let frame = 0;

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      setVisible(true);
      const el = (e.target as Element).closest?.(INTERACTIVE);
      setHovering(Boolean(el));
      setLabel(el?.getAttribute("data-cursor-label") ?? "");
    };
    const onLeave = () => setVisible(false);

    const tick = () => {
      trail.x += (target.x - trail.x) * 0.18;
      trail.y += (target.y - trail.y) * 0.18;
      if (dot.current)
        dot.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0)`;
      if (ring.current)
        ring.current.style.transform = `translate3d(${trail.x}px, ${trail.y}px, 0)`;
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove);
    document.documentElement.addEventListener("pointerleave", onLeave);
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      document.documentElement.classList.remove("has-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  const size = label ? 76 : hovering ? 52 : 34;

  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed inset-0 z-[100] transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      <div ref={ring} className="absolute left-0 top-0">
        <div
          className={`grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border transition-all duration-300 ease-out ${
            label
              ? "border-indigo bg-indigo text-paper"
              : hovering
                ? "border-teal bg-teal/15"
                : "border-indigo/40"
          }`}
          style={{ width: size, height: size }}
        >
          <span
            className={`text-[10px] uppercase tracking-[0.16em] transition-opacity ${label ? "opacity-100" : "opacity-0"}`}
          >
            {label}
          </span>
        </div>
      </div>
      <div ref={dot} className="absolute left-0 top-0">
        <div
          className={`h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo transition-transform duration-200 ${
            hovering ? "scale-0" : "scale-100"
          }`}
        />
      </div>
    </div>
  );
}
