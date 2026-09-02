"use client";

import { CLUB, type ClubTeam } from "@/lib/constants";
import {
  describeVenue,
  relativeDay,
  type TeamFixture,
} from "@/lib/fixtures";

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${CLUB.ground.mapQuery}`;

/**
 * The one thing a parent came for: when and where is my child playing next.
 *
 * Reading order is date, opponent, home/away, kick-off, then venue — glanceable
 * top to bottom without hunting. Home/Away is spelled out in words as well as
 * placed, never carried by colour alone.
 */
export function NextMatch({
  team,
  fixture,
}: {
  team: ClubTeam;
  fixture: TeamFixture;
}) {
  const venue = describeVenue(fixture);
  const today = relativeDay(fixture.dateISO);

  return (
    <div className="border-2 border-falcon-charcoal bg-white">
      <div className="flex items-center justify-between bg-falcon-charcoal px-4 py-2">
        <p className="font-heading text-sm tracking-widest text-white">
          NEXT MATCH &middot; {team.label.toUpperCase()}
        </p>
        <span className="h-2 w-2 rotate-45 bg-falcon-red" aria-hidden="true" />
      </div>

      <div className="p-5 sm:p-6">
        {fixture.isOff && (
          <div
            role="status"
            className="mb-5 border-l-4 border-falcon-red bg-falcon-red/10 px-4 py-3"
          >
            <p className="font-heading text-xl tracking-wide text-falcon-red">
              {fixture.status?.toUpperCase()}
            </p>
            <p className="mt-1 text-sm text-falcon-charcoal/80">
              This match is off. The league will rearrange it, and your team
              manager will confirm the new date.
            </p>
          </div>
        )}

        <p className="font-heading text-[clamp(1.75rem,6vw,2.75rem)] leading-[0.95] text-falcon-red">
          {today ?? fixture.dateLabel}
        </p>
        {today && (
          <p className="mt-1 font-heading text-lg tracking-wide text-falcon-charcoal">
            {fixture.dateLabel}
          </p>
        )}

        <p className="mt-4 font-heading text-sm tracking-widest text-falcon-charcoal">
          {fixture.isHome ? "HOME" : "AWAY"}
          {fixture.competition ? ` · ${fixture.competition.toUpperCase()}` : ""}
        </p>
        <p className="mt-1 text-xl leading-snug text-falcon-charcoal">
          <span className="text-falcon-charcoal/70">v</span> {fixture.opponent}
        </p>

        <dl className="mt-5 border-t-2 border-falcon-border pt-4">
          <dt className="font-heading text-sm tracking-widest text-falcon-charcoal">
            KICK-OFF
          </dt>
          <dd className="mt-1 font-heading text-2xl text-falcon-charcoal">
            {fixture.kickoffTbc ? "TO BE CONFIRMED" : fixture.kickoff}
          </dd>
          {fixture.kickoffTbc && !fixture.isOff && (
            <dd className="mt-1 text-sm text-falcon-charcoal/70">
              Leagues usually confirm kick-off times the Sunday before. Check
              with your team manager.
            </dd>
          )}

          <dt className="mt-4 font-heading text-sm tracking-widest text-falcon-charcoal">
            WHERE
          </dt>
          {venue.kind === "home" && (
            <dd className="mt-1">
              {/* fullAddress already starts with the ground name. */}
              <p className="text-falcon-charcoal">{CLUB.ground.fullAddress}</p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block min-h-12 border-2 border-falcon-charcoal px-5 py-3 font-heading text-base tracking-wider text-falcon-charcoal transition-colors hover:bg-falcon-charcoal hover:text-white"
              >
                DIRECTIONS &rarr;
              </a>
            </dd>
          )}
          {venue.kind === "away" && (
            <dd className="mt-1">
              <p className="text-falcon-charcoal">{venue.name}</p>
              <p className="mt-1 text-sm text-falcon-charcoal/70">
                Venue as listed by the league. Confirm with your team manager
                before travelling.
              </p>
            </dd>
          )}
          {venue.kind === "unknown" && (
            <dd className="mt-1 text-falcon-charcoal">
              Not confirmed. Check with your team manager.
            </dd>
          )}
        </dl>
      </div>
    </div>
  );
}
