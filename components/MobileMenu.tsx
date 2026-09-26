"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { contact, navLinks } from "@/lib/content";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  // The sticky header is transformed, which would trap a fixed overlay inside
  // it, so the overlay is portalled to <body> once we're on the client.
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  // Close on Escape and stop the page scrolling behind the open menu
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="relative z-50 grid h-10 w-10 place-items-center rounded-full border border-indigo/30"
      >
        <span
          className={`absolute h-px w-4 bg-indigo transition ${open ? "rotate-45" : "-translate-y-1"}`}
        />
        <span
          className={`absolute h-px w-4 bg-indigo transition ${open ? "-rotate-45" : "translate-y-1"}`}
        />
      </button>

      {mounted &&
        createPortal(
          <div
            id="mobile-menu"
            className={`fixed inset-0 z-20 flex flex-col items-center justify-center gap-8 bg-paper transition-opacity duration-300 ${
              open ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <span className="text-gold" aria-hidden>
              ✦
            </span>
            <ul className="space-y-5 text-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    tabIndex={open ? 0 : -1}
                    className="font-serif text-4xl uppercase tracking-[0.08em]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${contact.email}`}
              tabIndex={open ? 0 : -1}
              className="rounded-full bg-indigo px-8 py-3 text-sm uppercase tracking-[0.16em] text-paper"
            >
              Contact
            </a>
          </div>,
          document.body,
        )}
    </div>
  );
}
