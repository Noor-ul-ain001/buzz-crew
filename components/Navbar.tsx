import Image from "next/image";
import MobileMenu from "./MobileMenu";
import StickyHeader from "./motion/StickyHeader";
import { contact, navLinks } from "@/lib/content";

export default function Navbar() {
  return (
    <StickyHeader>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <Image
            src="/img/logo-mark.png"
            alt=""
            width={441}
            height={396}
            loading="eager"
            className="h-7 w-auto xs:h-9 transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110"
          />
          <span className="font-serif text-sm font-semibold uppercase tracking-[0.1em] xs:text-xl xs:tracking-[0.12em]">
            The Buzz Crew
          </span>
        </a>

        <nav className="flex items-center gap-8 text-sm">
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative uppercase tracking-[0.14em] text-indigo/80 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-indigo after:transition-transform after:duration-300 hover:text-indigo hover:after:origin-left hover:after:scale-x-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${contact.email}`}
            className="hidden rounded-full bg-indigo px-5 py-2 text-xs uppercase tracking-[0.14em] text-paper transition hover:bg-violet md:inline-block"
          >
            Contact
          </a>
          <MobileMenu />
        </nav>
      </div>
    </StickyHeader>
  );
}
