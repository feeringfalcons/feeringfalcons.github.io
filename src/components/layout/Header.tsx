"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-t-4 border-t-falcon-red bg-falcon-cream transition-shadow duration-300 ${
        scrolled ? "shadow-lg shadow-falcon-charcoal/10" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Feering Falcons"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="hidden font-heading text-xl tracking-tight text-falcon-charcoal sm:inline">
            FEERING FALCONS
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link-underline font-heading text-sm tracking-wider text-falcon-charcoal/70 transition-colors hover:text-falcon-red"
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/about#join"
            className="bg-falcon-red px-5 py-2 font-heading text-sm tracking-wider text-white transition-colors hover:bg-falcon-red-dark"
          >
            JOIN US
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
