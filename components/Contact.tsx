import CopyEmail from "./CopyEmail";
import Magnetic from "./motion/Magnetic";
import { contact } from "@/lib/content";

export default function Contact() {
  return (
    <footer id="contact">
      {/* CTA strip, three columns like the reference */}
      <div className="border-y border-lilac/40 bg-mist">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 text-center sm:px-8 lg:grid-cols-[1fr_auto_1fr]">
          <p className="text-sm uppercase leading-relaxed tracking-[0.12em]">
            <span className="text-violet">✦</span> Ready to take your brand
            <br className="hidden lg:block" /> to the next level?
          </p>
          <div className="flex flex-col items-center gap-2">
            <Magnetic strength={0.35}>
              <a
                href={`mailto:${contact.email}`}
                data-cursor-label="Email"
                className="block whitespace-nowrap rounded-full bg-indigo px-5 py-3.5 font-serif text-lg uppercase xs:px-12 xs:py-4 xs:text-2xl tracking-[0.08em] text-paper shadow-lg shadow-indigo/20 transition-colors hover:bg-violet"
              >
                Get in touch
              </a>
            </Magnetic>
            <CopyEmail className="text-sm text-indigo/80" />
          </div>
          <p className="text-sm uppercase leading-relaxed tracking-[0.12em]">
            <span className="text-violet">✦</span> Let&apos;s create stories
            <br className="hidden lg:block" /> worth remembering
          </p>
        </div>
      </div>

      <div className="bg-indigo text-paper">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-10 sm:px-8">
          <p className="text-center font-script text-4xl sm:text-5xl">
            &ldquo;Your story + our strategy = your growth&rdquo;{" "}
            <span className="inline-block animate-pulse text-gold">♥</span>
          </p>
          <ul className="flex max-w-full flex-wrap justify-center gap-x-8 gap-y-2 text-center text-[10px] uppercase tracking-[0.02em] [overflow-wrap:anywhere] xs:text-xs xs:tracking-[0.16em] text-paper/80">
            <li>
              <a href={contact.instagramUrl} className="hover:text-gold">
                {contact.instagram}
              </a>
            </li>
            <li>
              <a href={contact.websiteUrl} className="hover:text-gold">
                {contact.website}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="hover:text-gold">
                {contact.email}
              </a>
            </li>
          </ul>
          <p className="text-[11px] tracking-[0.12em] text-paper/50">
            © {new Date().getFullYear()} The Buzz Crew · Karachi, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
