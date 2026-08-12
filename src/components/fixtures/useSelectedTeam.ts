"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";
import { TEAMS, type ClubTeam } from "@/lib/constants";

const KEY = "ffyfc-team";
const CHANGED = "ffyfc-team-change";

function read(): string | null {
  try {
    return window.localStorage.getItem(KEY);
  } catch {
    // Private browsing can throw. Not remembering the team is a small loss;
    // breaking the page over it is not.
    return null;
  }
}

function write(id: string | null) {
  try {
    if (id) window.localStorage.setItem(KEY, id);
    else window.localStorage.removeItem(KEY);
  } catch {
    /* see read() */
  }
  // Same-tab listeners: the native `storage` event only fires in *other* tabs,
  // so the homepage module and /fixtures need their own signal to stay in step.
  window.dispatchEvent(new Event(CHANGED));
}

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGED, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGED, onChange);
    window.removeEventListener("storage", onChange);
  };
}

/**
 * The visitor's chosen team, remembered on this device.
 *
 * useSyncExternalStore rather than state-in-an-effect: localStorage is an
 * external store, the server snapshot is legitimately null, and React handles
 * the handover at hydration without a mismatch.
 *
 * ?team= wins over the saved value and replaces it, so a link shared into a
 * team's WhatsApp group shows that team even for someone with another saved.
 */
export function useSelectedTeam() {
  const teamId = useSyncExternalStore(subscribe, read, () => null);

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("team");
    if (fromUrl && TEAMS.some((t) => t.id === fromUrl) && fromUrl !== read()) {
      write(fromUrl);
    }
  }, []);

  const select = useCallback((id: string | null) => write(id), []);

  const team: ClubTeam | null = TEAMS.find((t) => t.id === teamId) ?? null;

  return { team, select };
}
