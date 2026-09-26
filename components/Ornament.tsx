import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  dark?: boolean;
  className?: string;
};

// "✦ TITLE ✦" heading flanked by hairlines, as in the reference.
// With no children it renders a plain hairline with a centre diamond.
export default function Ornament({
  children,
  dark = false,
  className = "",
}: Props) {
  const line = dark ? "bg-paper/30" : "bg-lilac/60";
  const star = dark ? "text-gold" : "text-violet";

  if (!children) {
    return (
      <div className={`flex items-center gap-3 ${className}`} aria-hidden>
        <span className={`draw h-px flex-1 origin-right ${line}`} />
        <span className={`text-[10px] ${star}`}>◆</span>
        <span className={`draw h-px flex-1 origin-left ${line}`} />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center gap-2 xs:gap-4 ${className}`}
    >
      <span className={`draw hidden h-px w-24 origin-right sm:block ${line}`} />
      <span className={`text-sm ${star}`} aria-hidden>
        ✦
      </span>
      <h2 className="text-center font-serif text-[1.25rem] xs:text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium uppercase tracking-[0.08em] track-in sm:whitespace-nowrap">
        {children}
      </h2>
      <span className={`text-sm ${star}`} aria-hidden>
        ✦
      </span>
      <span className={`draw hidden h-px w-24 origin-left sm:block ${line}`} />
    </div>
  );
}
