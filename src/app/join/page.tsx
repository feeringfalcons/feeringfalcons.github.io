import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CLUB } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Join Us",
  description:
    "Join Feering Falcons Youth Football Club — all abilities welcome, teams from Under 7 to Under 16.",
};

export default function JoinPage() {
  return (
    <>
      <section className="bg-falcon-grey py-12 sm:py-16">
        <Container>
          <h1 className="font-heading text-4xl font-bold text-falcon-charcoal sm:text-5xl">
            Join Us
          </h1>
        </Container>
      </section>

      <Container className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl space-y-12">
          {/* Welcome */}
          <section>
            <p className="text-lg leading-relaxed text-falcon-charcoal/80">
              Whether your child is picking up a football for the first time or
              looking for a new club, we&apos;d love to hear from you. All
              abilities are welcome at Feering Falcons.
            </p>
          </section>

          {/* Age groups */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-falcon-charcoal">
              Age Groups
            </h2>
            <p className="mt-3 text-falcon-charcoal/70">
              We currently run teams across the following age groups.
              Availability varies by season — get in touch to find out
              what&apos;s available.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {CLUB.teams.map((team) => (
                <span
                  key={team}
                  className="border border-falcon-red/20 bg-falcon-grey px-3 py-1 text-sm font-medium text-falcon-charcoal"
                >
                  {team}s
                </span>
              ))}
            </div>
          </section>

          {/* What to expect */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-falcon-charcoal">
              What to Expect
            </h2>
            <ul className="mt-4 space-y-3">
              {[
                "A friendly, welcoming environment for players and parents alike",
                "FA-qualified, DBS-checked coaches at every session",
                "Trial sessions available — come along and see what we're about",
                "Development-focused coaching that puts enjoyment first",
                "Part of the Colchester and District Youth League",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 bg-falcon-red" />
                  <span className="text-falcon-charcoal/80">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <section className="border-t border-falcon-grey-mid pt-8 text-center">
            <h2 className="font-heading text-2xl font-bold text-falcon-charcoal">
              Ready to get started?
            </h2>
            <p className="mt-3 text-falcon-charcoal/70">
              Drop us a message and we&apos;ll put you in touch with the right
              team manager.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-md bg-falcon-red px-8 py-3 font-semibold text-white transition-colors hover:bg-falcon-red-dark"
            >
              Get in Touch
            </Link>
          </section>
        </div>
      </Container>
    </>
  );
}
