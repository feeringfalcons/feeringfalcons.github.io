import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CLUB } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Feering Falcons Youth Football Club — developing young footballers in North Essex since 1978.",
};

export default function AboutPage() {
  return (
    <article>
      {/* Page header */}
      <section className="bg-falcon-grey py-12 sm:py-16">
        <Container>
          <h1 className="font-heading text-4xl font-bold text-falcon-charcoal sm:text-5xl">
            About Us
          </h1>
        </Container>
      </section>

      <Container className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl space-y-12">
          {/* Origin story */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-falcon-charcoal">
              Our Story
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-falcon-charcoal/80">
              Born in the fields of Feering and Kelvedon, Feering Falcons Youth
              Football Club has been developing young footballers since 1978.
              What started as a small group of local kids with a love for the
              game has grown into one of the most established grassroots clubs in
              North Essex.
            </p>
            <p className="mt-4 leading-relaxed text-falcon-charcoal/80">
              Our philosophy has always been simple: development over results,
              confidence over competition, and a genuine love of the game above
              all else. We believe that every child who pulls on a Feering
              Falcons shirt should leave the pitch having had fun, learned
              something, and felt part of a team.
            </p>
          </section>

          {/* Values */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-falcon-charcoal">
              What We Stand For
            </h2>
            <div className="mt-6 space-y-4">
              {CLUB.values.map((value) => (
                <div
                  key={value.title}
                  className="border-l-4 border-falcon-red bg-falcon-grey px-5 py-4"
                >
                  <p className="font-heading text-lg font-bold text-falcon-charcoal">
                    {value.title}
                  </p>
                  <p className="mt-1 text-falcon-charcoal/70">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* The club today */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-falcon-charcoal">
              The Club Today
            </h2>
            <p className="mt-4 leading-relaxed text-falcon-charcoal/80">
              We run {CLUB.teams.length} teams across age groups from Under 7 to
              Under 16, with over 200 young players registered with the club. We
              play in the {CLUB.league} and are proud to be an{" "}
              {CLUB.accreditation}.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { number: CLUB.teams.length, label: "Teams" },
                { number: "200+", label: "Players" },
                { number: "1978", label: "Founded" },
                { number: "U7–U16", label: "Age Groups" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-falcon-grey px-4 py-5 text-center"
                >
                  <p className="font-heading text-2xl font-bold text-falcon-red">
                    {stat.number}
                  </p>
                  <p className="mt-1 text-sm text-falcon-charcoal/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Match days */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-falcon-charcoal">
              Match Days at Elm Farm
            </h2>
            <p className="mt-4 leading-relaxed text-falcon-charcoal/80">
              Our home ground at {CLUB.ground.name}, {CLUB.ground.postcode}, is
              the heart of the club. On match days you&apos;ll find Bob&apos;s
              Bistro serving teas and bacon rolls, families cheering from the
              sideline, and a real sense of community. It&apos;s what grassroots
              football is all about.
            </p>
            <p className="mt-4 leading-relaxed text-falcon-charcoal/80">
              All of our coaches are DBS-checked and hold FA coaching
              qualifications. We take safeguarding seriously — every child in our
              care is looked after by trained, dedicated volunteers who love the
              game.
            </p>
          </section>

          {/* Annual events */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-falcon-charcoal">
              Annual Events
            </h2>
            <div className="mt-6 space-y-4">
              <div className="border-l-4 border-falcon-red bg-falcon-grey px-5 py-4">
                <p className="font-heading text-lg font-bold text-falcon-charcoal">
                  5-A-Side Tournament
                </p>
                <p className="mt-1 text-falcon-charcoal/70">
                  Our flagship event each June, attracting over 100 teams from
                  across the region.{" "}
                  <Link
                    href="/tournament"
                    className="text-falcon-red hover:underline"
                  >
                    Find out more
                  </Link>
                </p>
              </div>
              <div className="border-l-4 border-falcon-red bg-falcon-grey px-5 py-4">
                <p className="font-heading text-lg font-bold text-falcon-charcoal">
                  Presentation Night
                </p>
                <p className="mt-1 text-falcon-charcoal/70">
                  Celebrating the season&apos;s achievements with awards,
                  trophies, and a chance for every player to be recognised.
                </p>
              </div>
            </div>
          </section>

          {/* Accreditation */}
          <section className="border-t border-falcon-grey-mid pt-8 text-center">
            <p className="font-heading text-lg font-bold text-falcon-charcoal">
              {CLUB.accreditation}
            </p>
            <p className="mt-2 text-sm text-falcon-charcoal/60">
              Meeting the highest standards in grassroots football
            </p>
          </section>
        </div>
      </Container>
    </article>
  );
}
