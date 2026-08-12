"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Renders one FA Full-Time "code snippet" feed.
 *
 * How the official embed works: Full-Time gives you a container div with
 * id="lrep<CODE>", a global `var lrcode = '<CODE>'`, and a script tag pointing
 * at /client/api/cs1.js. That script does nothing except read the global and
 * inject a second script from /js/cs1.html?cs=<CODE>&random=<ts>, which sets
 * innerHTML on the container.
 *
 * We skip the middle step and load /js/cs1.html directly. That matters: the
 * documented snippet depends on a single global `lrcode`, so two feeds on one
 * page race each other. Loading the real endpoint per-instance lets us render
 * as many as we like.
 *
 * Styling: because the markup is injected into our own DOM (it is NOT an
 * iframe), we can restyle it — but only after stripping the inline style
 * attributes Full-Time ships, which are all `!important`. Inline `!important`
 * outranks any stylesheet rule, so CSS alone cannot win; the attributes have
 * to go. Once they're gone, .ft-snippet in globals.css takes over.
 */
export function FullTimeSnippet({
  code,
  label,
  fallbackUrl,
}: {
  code: string;
  label: string;
  fallbackUrl: string;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<
    "loading" | "ready" | "empty" | "failed"
  >("loading");
  // A club-wide feed can run to a hundred rows, which would swamp the
  // homepage. Collapse to a readable window and let people open it out.
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    // Full-Time addresses the container by this exact id.
    const target = document.createElement("div");
    target.id = `lrep${code}`;
    host.appendChild(target);

    function clean() {
      // Drop Full-Time's inline !important styling and its trailing logo/link
      // row, so our own CSS can take over.
      target.querySelectorAll<HTMLElement>("[style]").forEach((el) => {
        el.removeAttribute("style");
      });
      // Legacy presentational attributes Full-Time still emits alongside the
      // inline styles — they override CSS on tables just as stubbornly.
      const legacy = ["border", "cellspacing", "cellpadding", "width", "height", "align"];
      target.querySelectorAll(legacy.map((a) => `[${a}]`).join(", ")).forEach((el) => {
        legacy.forEach((a) => el.removeAttribute(a));
      });
      target.querySelectorAll("img").forEach((el) => el.remove());

      // The leading competition cell is usually a bare &nbsp;, which means the
      // CSS :empty rule never matches and it holds open a dead gutter. Blank
      // it properly so the column can collapse.
      target.querySelectorAll("td").forEach((el) => {
        if (!(el.textContent ?? "").replace(/ /g, "").trim()) {
          el.textContent = "";
        }
      });

      // Both leagues use 06:00 as the "kick-off not set yet" placeholder —
      // times aren't published until the Sunday before. Showing 06:00 reads as
      // a real 6am kick-off, so say what it actually means.
      target.querySelectorAll("td[colspan]").forEach((el) => {
        if (el.textContent && /\b06:00\b/.test(el.textContent)) {
          el.textContent = el.textContent.replace(/\b06:00\b/g, "KICK-OFF TBC");
        }
      });

      // Pick our own club out of the list — the point of putting a league feed
      // on a club site is finding your team at a glance. Only the home/away
      // cells, not the venue column, which is often named after a Falcons
      // pitch and would highlight almost every row.
      target.querySelectorAll("tr").forEach((row) => {
        const cells = row.querySelectorAll("td");
        if (cells.length < 4) return; // date header row
        [1, 3].forEach((i) => {
          const cell = cells[i];
          if (cell && /feering/i.test(cell.textContent ?? "")) {
            cell.classList.add("is-falcons");
          }
        });
      });
    }

    const observer = new MutationObserver(() => {
      if (target.childElementCount > 0) {
        clean();

        // A league that hasn't published yet still returns a table — just one
        // saying "No Schedule". Treat that as empty rather than rendering a
        // stray header row that looks like a broken feed.
        const fixtureRows = [...target.querySelectorAll("tr")].filter(
          (r) => r.querySelectorAll("td").length >= 4,
        ).length;
        if (fixtureRows === 0) {
          target.replaceChildren();
          setState("empty");
          return;
        }

        setState("ready");
        // The cap itself lives in CSS (.ft-collapsed) so it can differ by
        // breakpoint, so measure the host rather than compare to a constant.
        requestAnimationFrame(() => {
          setOverflows(host.scrollHeight > host.clientHeight + 4);
        });
      }
    });
    observer.observe(target, { childList: true, subtree: true });

    // Cache-buster mirrors Full-Time's own: YYYYMMDDHH + first digit of minute.
    const d = new Date();
    const p = (n: number) => String(n).padStart(2, "0");
    const stamp =
      `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}` +
      `${p(d.getHours())}${p(d.getMinutes()).charAt(0)}`;

    const script = document.createElement("script");
    script.src = `https://fulltime.thefa.com/js/cs1.html?cs=${encodeURIComponent(code)}&random=${stamp}`;
    script.async = true;
    script.onerror = () => setState("failed");
    document.head.appendChild(script);

    const timeout = window.setTimeout(() => {
      setState((s) => (s === "loading" ? "failed" : s));
    }, 8000);

    return () => {
      observer.disconnect();
      window.clearTimeout(timeout);
      script.remove();
      target.remove();
    };
  }, [code]);

  return (
    <div className="border-2 border-falcon-charcoal">
      <div className="flex items-center justify-between bg-falcon-charcoal px-4 py-2">
        <p className="font-heading text-sm tracking-widest text-white/70">
          {label.toUpperCase()}
        </p>
        <span className="h-2 w-2 rotate-45 bg-falcon-red" aria-hidden="true" />
      </div>

      <div className="bg-white p-4">
        <div className="relative">
          <div
            ref={hostRef}
            className={`ft-snippet overflow-x-auto ${
              expanded ? "ft-expanded" : "ft-collapsed"
            }`}
          />
          {overflows && !expanded && (
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent"
              aria-hidden="true"
            />
          )}
        </div>

        {overflows && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-3 w-full border-2 border-falcon-charcoal py-2 font-heading text-sm tracking-widest text-falcon-charcoal transition-colors hover:bg-falcon-charcoal hover:text-white"
          >
            {expanded ? "SHOW LESS" : "SHOW ALL FIXTURES"}
          </button>
        )}

        {state === "loading" && (
          <p className="py-6 text-center text-sm text-falcon-charcoal/70">
            Loading from FA Full-Time&hellip;
          </p>
        )}

        {state === "empty" && (
          <div className="py-8 text-center">
            <p className="font-heading text-lg tracking-wide text-falcon-charcoal">
              NOT PUBLISHED YET
            </p>
            <p className="mx-auto mt-2 max-w-xs text-sm text-falcon-charcoal/70">
              The league hasn&apos;t released these fixtures yet. They usually
              go up shortly before the season starts — this page will show them
              as soon as they do.
            </p>
          </div>
        )}

        {state === "failed" && (
          <p className="py-6 text-center text-sm text-falcon-charcoal/70">
            Couldn&apos;t load this feed.{" "}
            <a
              href={fallbackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-falcon-red underline"
            >
              View it on FA Full-Time
            </a>
            .
          </p>
        )}
      </div>
    </div>
  );
}
