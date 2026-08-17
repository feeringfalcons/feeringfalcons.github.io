import Link from "next/link";
import { WeekendFixtures } from "@/components/fixtures/WeekendFixtures";

/**
 * Homepage matchday section: the club's next fixture weekend, all teams.
 *
 * The team picker lives on /fixtures rather than here. On the homepage the
 * useful question is "is there football on, and who's playing", which suits a
 * whole-club view; a parent who wants only their own team can tap the team name
 * on any row, or the link through to /fixtures.
 */
export function Fixtures() {
  return (
    <section id="fixtures" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-heading text-sm tracking-widest text-falcon-charcoal/70">
              MATCH DAY
            </p>
            <h2 className="mt-2 font-heading text-[clamp(2rem,5vw,3.5rem)] leading-[0.9] text-falcon-charcoal">
              WHO&apos;S PLAYING
            </h2>
          </div>
          <Link
            href="/fixtures"
            className="font-heading text-sm tracking-wider text-falcon-red hover:underline"
          >
            FIND YOUR TEAM&apos;S FIXTURES &rarr;
          </Link>
        </div>

        <div className="mt-8 max-w-3xl">
          <WeekendFixtures />
        </div>
      </div>
    </section>
  );
}
