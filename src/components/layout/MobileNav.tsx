"use client";

import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";

export function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white lg:hidden">
      <div className="flex items-center justify-between border-b border-falcon-grey-mid px-4 py-3">
        <Link href="/" onClick={onClose} className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Feering Falcons"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="font-heading text-lg font-bold tracking-tight text-falcon-charcoal">
            Feering Falcons
          </span>
        </Link>

        <button type="button" onClick={onClose} aria-label="Close menu">
          <svg
            className="h-6 w-6 text-falcon-charcoal"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <nav className="flex flex-col px-4 py-6">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="border-b border-falcon-grey py-4 text-lg font-medium text-falcon-charcoal transition-colors hover:text-falcon-red"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/join"
          onClick={onClose}
          className="mt-6 rounded-md bg-falcon-red px-6 py-3 text-center text-lg font-semibold text-white transition-colors hover:bg-falcon-red-dark"
        >
          Join Us
        </Link>
      </nav>
    </div>
  );
}
