"use client";

import { useState } from "react";
import { contact } from "@/lib/content";

// The email as a mailto link, plus a button that copies it for people
// without a mail app set up.
export default function CopyEmail({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${contact.email}`;
    }
  };

  return (
    <span className={`inline-flex flex-wrap items-center gap-2 ${className}`}>
      <a
        href={`mailto:${contact.email}`}
        className="underline decoration-lilac underline-offset-4 [overflow-wrap:anywhere] transition-colors hover:text-violet hover:decoration-violet"
      >
        {contact.email}
      </a>
      <button
        type="button"
        onClick={copy}
        className="rounded-full border border-lilac px-2.5 py-0.5 text-[11px] uppercase tracking-[0.14em] transition-colors hover:border-indigo hover:bg-indigo hover:text-paper"
      >
        <span aria-live="polite">{copied ? "Copied ✓" : "Copy"}</span>
      </button>
    </span>
  );
}
