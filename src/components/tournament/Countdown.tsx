"use client";

import { useSyncExternalStore } from "react";

// Nothing to subscribe to: the count only needs to be right when the page loads.
const subscribe = () => () => {};

/** Whole days from today (visitor's local date) to an ISO yyyy-mm-dd date. */
function daysUntil(iso: string): number {
  const [y, m, d] = iso.split("-").map(Number);
  const now = new Date();
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((Date.UTC(y, m - 1, d) - today) / 86_400_000);
}

/**
 * "201 DAYS TO GO". Worked out in the browser, never at build time: the site
 * is a static export, so a build-time number would go stale the next day.
 * The server render reserves the line's height so nothing jumps on load.
 */
export function Countdown({
  dateISO,
  className = "",
}: {
  dateISO: string;
  className?: string;
}) {
  const days = useSyncExternalStore(
    subscribe,
    () => daysUntil(dateISO),
    () => null,
  );

  const label =
    days === null || days < 0
      ? null
      : days === 0
        ? "IT'S TODAY!"
        : days === 1
          ? "TOMORROW!"
          : `${days} DAYS TO GO`;

  if (label === null) {
    return (
      <p className={`invisible ${className}`} aria-hidden="true">
        000 DAYS TO GO
      </p>
    );
  }
  return <p className={className}>{label}</p>;
}
