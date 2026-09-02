"use client";

import Link from "next/link";
import { CLUB, type ClubTeam } from "@/lib/constants";
import { fixturesForTeam, upcoming, describeVenue } from "@/lib/fixtures";
import { useFullTimeFeed } from "./useFullTimeFeed";
import { NextMatch } from "./NextMatch";
import { FixtureStatusTag } from "./FixtureStatusTag";

function Notice({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-2 border-falcon-charcoal bg-white p-6 text-center">
      <p className="font-heading text-lg tracking-wide text-falcon-charcoal">
        {heading}
      </p>
      <p className="mx-auto mt-2 max-w-sm text-sm text-falcon-charcoal/70">
        {children}
      </p>
    </div>
  );
}

/**
 * Fixtures for one team, in every state that can actually happen.
 *
 * The states are kept distinct on purpose. "The league hasn't published yet",
 * "this team has no upcoming games", "we have no feed for this league" and
 * "the feed failed to load" mean very different things to a parent, and
 * collapsing them into one empty message would be misleading.
 */
export function TeamFixtures({
  team,
  compact = false,
}: {
  team: ClubTeam;
  compact?: boolean;
}) {
  const feed = CLUB.fullTime.feeds[team.source as "bdyfl" | "cdyl"] ?? null;
  const state = useFullTimeFeed(team.source === "none" ? null : feed?.code ?? null);

  if (team.source === "none") {
    return (
      <Notice heading="NO FIXTURES HERE">
        {team.unavailableNote ??
          "We don't have a fixture feed for this team. Check with the team for details."}
      </Notice>
    );
  }

  if (state.status === "loading" || state.status === "idle") {
    return (
      <div
        aria-busy="true"
        className="border-2 border-falcon-charcoal bg-white p-6 text-center"
      >
        <p className="text-sm text-falcon-charcoal/70">
          Loading {team.label} fixtures from FA Full-Time&hellip;
        </p>
      </div>
    );
  }

  if (state.status === "failed") {
    return (
      <Notice heading="COULDN'T LOAD FIXTURES">
        Fixtures come from FA Full-Time and it didn&apos;t respond.{" "}
        <a
          href={CLUB.fullTime.publicUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-falcon-red underline"
        >
          Try FA Full-Time directly
        </a>
        , or check with your team manager.
      </Notice>
    );
  }

  if (state.status === "unpublished") {
    return (
      <Notice heading="NOT PUBLISHED YET">
        {feed?.label} hasn&apos;t released its fixtures yet. They usually go up
        shortly before the season starts, and this page will show them as soon as
        they do.
      </Notice>
    );
  }

  const fixtures = upcoming(fixturesForTeam(state.fixtures, team));

  if (fixtures.length === 0) {
    return (
      <Notice heading="NO UPCOMING FIXTURES">
        {feed?.label} has published fixtures, but none are listed for{" "}
        {team.label} at the moment. Your team manager will have the latest.
      </Notice>
    );
  }

  const [next, ...rest] = fixtures;

  return (
    <div>
      <NextMatch team={team} fixture={next} />

      {compact ? (
        rest.length > 0 && (
          <Link
            href={`/fixtures?team=${team.id}`}
            className="mt-4 block min-h-12 border-2 border-falcon-charcoal px-5 py-3 text-center font-heading text-base tracking-wider text-falcon-charcoal transition-colors hover:bg-falcon-charcoal hover:text-white"
          >
            ALL {team.label.toUpperCase()} FIXTURES ({fixtures.length}) &rarr;
          </Link>
        )
      ) : (
        <UpcomingList fixtures={rest} />
      )}
    </div>
  );
}

function UpcomingList({
  fixtures,
}: {
  fixtures: ReturnType<typeof fixturesForTeam>;
}) {
  if (!fixtures.length) return null;
  return (
    <section className="mt-10">
      <h3 className="font-heading text-xl tracking-wide text-falcon-charcoal">
        THEN AFTER THAT
      </h3>
      <ul className="mt-4 border-t-2 border-falcon-border">
        {fixtures.map((f, i) => {
          const venue = describeVenue(f);
          return (
            <li
              key={`${f.dateISO}-${f.opponent}-${i}`}
              className="border-b border-falcon-border py-4"
            >
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <time
                  dateTime={f.dateISO}
                  className="font-heading text-base tracking-widest text-falcon-red"
                >
                  {f.dateLabel}
                </time>
                <span className="font-heading text-sm tracking-widest text-falcon-charcoal">
                  {f.isHome ? "HOME" : "AWAY"}
                </span>
                <span className="text-sm text-falcon-charcoal/70">
                  {f.kickoffTbc ? "Kick-off TBC" : f.kickoff}
                </span>
                <FixtureStatusTag fixture={f} />
              </div>
              <p
                className={
                  f.isOff
                    ? "mt-1 text-falcon-charcoal/60 line-through"
                    : "mt-1 text-falcon-charcoal"
                }
              >
                <span className="text-falcon-charcoal/70">v</span> {f.opponent}
              </p>
              {venue.kind === "away" && (
                <p className="mt-0.5 text-sm text-falcon-charcoal/70">
                  {venue.name}
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
