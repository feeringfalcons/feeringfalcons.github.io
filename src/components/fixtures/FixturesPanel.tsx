"use client";

import Link from "next/link";
import { TeamPicker } from "./TeamPicker";
import { TeamFixtures } from "./TeamFixtures";
import { useSelectedTeam } from "./useSelectedTeam";

/**
 * Team picker plus that team's fixtures, remembered between visits.
 *
 * compact = the homepage module: next match only, then a link through to the
 * full page. Not compact = the /fixtures page: next match plus the rest.
 *
 * Before a team is chosen nothing is fetched at all. A prospective parent
 * landing on the homepage has no use for 200KB of another club's fixtures.
 */
export function FixturesPanel({ compact = false }: { compact?: boolean }) {
  const { team, select } = useSelectedTeam();

  return (
    <div>
      <div className="max-w-md">
        <TeamPicker
          team={team}
          onChange={select}
          id={compact ? "team-picker-home" : "team-picker-page"}
          label={team ? "Showing fixtures for" : "Find your team's fixtures"}
        />
      </div>

      {/* Reserve nothing and announce politely — the picker is the stable
          anchor, fixtures appear underneath it. */}
      <div className="mt-6" aria-live="polite">
        {team ? (
          <TeamFixtures team={team} compact={compact} />
        ) : (
          <div className="border-2 border-dashed border-falcon-border p-6">
            <p className="text-falcon-charcoal/70">
              Pick a team above to see its next match and upcoming fixtures.
              We&apos;ll remember your choice on this device.
            </p>
            {compact && (
              <Link
                href="/about#join"
                className="mt-4 inline-block font-heading text-sm tracking-wider text-falcon-red hover:underline"
              >
                LOOKING TO JOIN? SEE OUR TEAMS &rarr;
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
