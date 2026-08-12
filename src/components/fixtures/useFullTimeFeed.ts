"use client";

import { useEffect, useState } from "react";
import { parseFixtures, type Fixture } from "@/lib/fixtures";

export type FeedState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "ready"; fixtures: Fixture[] }
  /** Loaded fine, but the league hasn't put any fixtures up yet. */
  | { status: "unpublished" }
  | { status: "failed" };

/**
 * Loads one FA Full-Time feed and returns its fixtures, parsed.
 *
 * Full-Time's published snippet is a container div, a global `var lrcode`, and
 * a loader script that reads that global and injects a *second* script which
 * sets innerHTML on the container. We skip the loader and request the real
 * endpoint directly, because the single global means two feeds on one page
 * would race each other.
 *
 * The container is off-screen and never shown. Full-Time's own markup is only
 * a transport here — everything the visitor sees is rendered from the parsed
 * fixtures, so none of its inline styling matters.
 *
 * Pass code = null to load nothing (a first-time visitor with no team chosen
 * should not be made to download 200KB of fixtures).
 */
export function useFullTimeFeed(code: string | null): FeedState {
  // Stored with the code it belongs to, so switching teams derives "loading"
  // during render rather than needing a setState on the way into the effect.
  const [loaded, setLoaded] = useState<{ code: string; state: FeedState } | null>(
    null,
  );

  useEffect(() => {
    if (!code) return;

    let done = false;

    const host = document.createElement("div");
    host.id = `lrep${code}`;
    // Out of flow and out of the accessibility tree — this is a data carrier,
    // not content. aria-hidden alone would leave the links tabbable.
    host.setAttribute("aria-hidden", "true");
    host.style.cssText =
      "position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);pointer-events:none";
    document.body.appendChild(host);

    function finish(next: FeedState) {
      if (done || !code) return;
      done = true;
      setLoaded({ code, state: next });
    }

    const observer = new MutationObserver(() => {
      if (host.childElementCount === 0) return;
      const fixtures = parseFixtures(host);
      // A league with nothing published still returns a table — one saying
      // "No Schedule". Zero parsed fixtures is how that shows up here.
      finish(
        fixtures.length
          ? { status: "ready", fixtures }
          : { status: "unpublished" },
      );
    });
    observer.observe(host, { childList: true, subtree: true });

    // Cache-buster mirroring Full-Time's own: YYYYMMDDHH + first digit of the
    // minute, so responses stay cacheable for roughly ten minutes.
    const d = new Date();
    const p = (n: number) => String(n).padStart(2, "0");
    const stamp =
      `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}` +
      `${p(d.getHours())}${p(d.getMinutes()).charAt(0)}`;

    const script = document.createElement("script");
    script.src = `https://fulltime.thefa.com/js/cs1.html?cs=${encodeURIComponent(code)}&random=${stamp}`;
    script.async = true;
    script.onerror = () => finish({ status: "failed" });
    document.head.appendChild(script);

    const timer = window.setTimeout(() => finish({ status: "failed" }), 10000);

    return () => {
      done = true;
      observer.disconnect();
      window.clearTimeout(timer);
      script.remove();
      host.remove();
    };
  }, [code]);

  if (!code) return { status: "idle" };
  return loaded?.code === code ? loaded.state : { status: "loading" };
}
