import Link from "next/link";
import { Suspense } from "react";
import { FixturesPanel } from "@/components/fixtures/FixturesPanel";

/**
 * Homepage fixtures module — deliberately small.
 *
 * /fixtures is the canonical fixture experience. The homepage still has to
 * explain and sell the club to families who haven't joined, so this shows one
 * team's next match for the parents who have already chosen one, and a plain
 * prompt for everyone else. It fetches nothing until a team is picked.
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
              YOUR NEXT FIXTURE
            </h2>
          </div>
          <Link
            href="/fixtures"
            className="font-heading text-sm tracking-wider text-falcon-red hover:underline"
          >
            ALL FIXTURES &rarr;
          </Link>
        </div>

        <div className="mt-8 max-w-2xl">
          <Suspense fallback={null}>
            <FixturesPanel compact />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
