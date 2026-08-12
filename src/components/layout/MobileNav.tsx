"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { NAV_LINKS, CLUB } from "@/lib/constants";

export function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<Element | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Move focus into the drawer on open and hand it back to whatever opened it
  // on close, so keyboard and screen-reader users aren't dumped at the top.
  useEffect(() => {
    if (open) {
      openerRef.current = document.activeElement;
      closeRef.current?.focus();
    } else if (openerRef.current instanceof HTMLElement) {
      openerRef.current.focus();
      openerRef.current = null;
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    // `inert` while closed: without it the drawer's links stay in the tab
    // order and keyboard users tab through an invisible menu.
    <div
      inert={!open}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-falcon-charcoal/60"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={`absolute inset-y-0 right-0 w-full max-w-sm bg-falcon-cream shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-falcon-border px-4 py-3">
          <Link href="/" onClick={onClose} className="flex items-center gap-3">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logo.png`}
              alt="Feering Falcons"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="font-heading text-xl tracking-tight text-falcon-charcoal">
              FEERING FALCONS
            </span>
          </Link>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="-m-3 p-3"
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
              className="border-b border-falcon-border py-4 font-heading text-xl tracking-wider text-falcon-charcoal transition-colors hover:text-falcon-red"
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
          <a
            href={CLUB.shop}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="border-b border-falcon-border py-4 font-heading text-xl tracking-wider text-falcon-charcoal transition-colors hover:text-falcon-red"
          >
            SHOP
          </a>
          <Link
            href="/about#join"
            onClick={onClose}
            className="mt-6 bg-falcon-red px-6 py-3 text-center font-heading text-xl tracking-wider text-white transition-colors hover:bg-falcon-red-dark"
          >
            JOIN US
          </Link>
        </nav>
      </div>
    </div>
  );
}
