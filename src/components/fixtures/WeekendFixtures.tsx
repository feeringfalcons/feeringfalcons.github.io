"use client";

import Link from "next/link";
import { CLUB, TEAMS } from "@/lib/constants";
import {
  clubFixtures,
  describeVenue,
  isCurrentWeek,
  nextFixtureWeek,
  relativeDay,
  type ClubFixture,
} from "@/lib/fixtures";
import { useFullTimeFeed } from "./useFullTimeFeed";
import { useInView } from "./useInView";

/**
 * The club's next matchday: every Falcons fixture in the next week that has any.
 *
 * "Next week with fixtures" rather than "this coming weekend" on purpose. The
 * season has genuine gaps for Christmas, Easter, cup weekends and call-offs, so
 * anchoring to the imminent weekend would leave the homepage empty for weeks at
 * a time. When the block isn't the current week we name the date instead of
 * implying it's imminent.
 *
 * Needs both league feeds, since the club spans two. They're only requested
 * once the section nears the viewport.
 */
export function WeekendFixtures() {
  const { ref, seen } = useInView<HTMLDivElement>();

  const bdyfl = useFullTimeFeed(seen ? CLUB.fullTime.feeds.bdyfl.code : null);
  const cdyl = useFullTimeFeed(seen ? CLUB.fullTime.feeds.cdyl.code : null);

  const loading =
    !seen || bdyfl.status === "loading" || cdyl.status === "loading";

  const all = [
    ...(bdyfl.status === "ready" ? bdyfl.fixtures : []),
    ...(cdyl.status === "ready" ? cdyl.fixtures : []),
  ];
  const week = nextFixtureWeek(clubFixtures(all, TEAMS));

  // Both feeds failing is different from both being empty.
  const bothFailed = bdyfl.status === "failed" && cdyl.status === "failed";

  return (
    <div ref={ref}>
      {loading && (
        <p aria-busy="true" className="text-falcon-charcoal/70">
          Loading fixtures from FA Full-Time&hellip;
        </p>
      )}

      {!loading && bothFailed && (
        <p className="text-falcon-charcoal/70">
          Couldn&apos;t load fixtures just now.{" "}
          <Link href="/fixtures" className="text-falcon-red underline">
            Try the fixtures page
          </Link>
          .
        </p>
      )}

      {!loading && !bothFailed && !week && (
        <p className="text-falcon-charcoal/70">
          No fixtures are published at the moment. The leagues usually load the
          season in shortly before it starts.
        </p>
      )}

      {!loading && week && <WeekBlock week={week} />}
    </div>
  );
}

function WeekBlock({
  week,
}: {
  week: NonNullable<ReturnType<typeof nextFixtureWeek>>;
}) {
  const imminent = isCurrentWeek(week.weekStart);
  const byDate = week.dates.map((date) => ({
    date,
    label: week.fixtures.find((f) => f.dateISO === date)!.dateLabel,
    relative: relativeDay(date),
    fixtures: week.fixtures.filter((f) => f.dateISO === date),
  }));

  return (
    <div>
      <p className="font-heading text-sm tracking-widest text-falcon-charcoal">
        {imminent ? "THIS WEEKEND" : "NEXT FIXTURES"}
      </p>

      {!imminent && (
        <p className="mt-1 text-sm text-falcon-charcoal/70">
          Nothing on this weekend. Next up:
        </p>
      )}

      {byDate.map((day) => (
        <section key={day.date} className="mt-5">
          <h3 className="flex flex-wrap items-baseline gap-x-3 border-b-2 border-falcon-charcoal pb-2">
            <time
              dateTime={day.date}
              className="font-heading text-2xl text-falcon-red"
            >
              {day.relative ?? day.label}
            </time>
            {day.relative && (
              <span className="font-heading text-base tracking-wide text-falcon-charcoal">
                {day.label}
              </span>
            )}
            <span className="font-heading text-sm tracking-widest text-falcon-charcoal">
              {day.fixtures.length} {day.fixtures.length === 1 ? "GAME" : "GAMES"}
            </span>
          </h3>

          <ul>
            {day.fixtures.map((f, i) => (
              <FixtureRow key={`${f.team.id}-${i}`} fixture={f} />
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function FixtureRow({ fixture }: { fixture: ClubFixture }) {
  const venue = describeVenue(fixture);
  return (
    <li className="border-b border-falcon-border py-3">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <Link
          href={`/fixtures?team=${fixture.team.id}`}
          className="font-heading text-lg tracking-wide text-falcon-charcoal underline decoration-falcon-red decoration-2 underline-offset-4 hover:text-falcon-red"
        >
          {fixture.team.label.toUpperCase()}
        </Link>
        <span className="font-heading text-sm tracking-widest text-falcon-charcoal">
          {fixture.isHome ? "HOME" : "AWAY"}
        </span>
        <span className="text-sm text-falcon-charcoal/70">
          {fixture.kickoffTbc ? "Kick-off TBC" : fixture.kickoff}
        </span>
      </div>
      <p className="mt-0.5 text-falcon-charcoal">
        <span className="text-falcon-charcoal/70">v</span> {fixture.opponent}
      </p>
      {venue.kind === "away" && (
        <p className="mt-0.5 text-sm text-falcon-charcoal/70">{venue.name}</p>
      )}
    </li>
  );
}
