"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-falcon-grey-mid bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Feering Falcons"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="hidden font-heading text-lg font-bold tracking-tight text-falcon-charcoal sm:inline">
            Feering Falcons
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-falcon-charcoal/70 transition-colors hover:text-falcon-red"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/join"
            className="rounded-md bg-falcon-red px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-falcon-red-dark"
          >
            Join Us
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="lg:hidden"
            aria-label="Open menu"
          >
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
