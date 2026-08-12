import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { FixturesPanel } from "@/components/fixtures/FixturesPanel";
import { CLUB } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Fixtures",
  description:
    "Upcoming fixtures for every Feering Falcons team, live from FA Full-Time. Pick your team to see its next match, kick-off time and venue.",
};

export default function FixturesPage() {
  return (
    <>
      <section className="bg-falcon-red pb-14 pt-14 sm:pb-16 sm:pt-20">
        <Container>
          <p className="font-heading text-sm tracking-widest text-white/90">
            LIVE FROM FA FULL-TIME
          </p>
          <h1 className="mt-3 font-heading text-[clamp(2.5rem,12vw,8rem)] leading-[0.82] tracking-tight text-white">
            FIXTURES
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/90">
            Pick your team once and we&apos;ll remember it. Kick-off times are
            set by the leagues, usually the Sunday before a match.
          </p>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <Suspense fallback={null}>
            <FixturesPanel />
          </Suspense>
        </Container>
      </section>

      <section className="border-t-2 border-falcon-border py-12 sm:py-16">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-heading text-2xl tracking-wide text-falcon-charcoal">
              ABOUT THESE FIXTURES
            </h2>
            <p className="mt-4 leading-relaxed text-falcon-charcoal/70">
              Fixtures are published and maintained by the leagues on FA
              Full-Time, not by the club, and can change at short notice. Always
              check with your team manager before travelling.
            </p>
            <p className="mt-3 leading-relaxed text-falcon-charcoal/70">
              Not every team appears here. Our teams play across the{" "}
              {CLUB.leagues[0].shortName} and {CLUB.leagues[1].shortName}, and
              some age groups — including Fledglings and our U8 Girls — don&apos;t
              have fixtures published through this feed. Pick the team above to
              see exactly where it stands.
            </p>
            <a
              href={CLUB.fullTime.publicUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block font-heading text-sm tracking-wider text-falcon-red hover:underline"
            >
              OPEN FA FULL-TIME &rarr;
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
