import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CLUB } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Teams",
  description:
    "Feering Falcons run teams from Under 7 to Under 16, playing in the Colchester and District Youth League.",
};

export default function TeamsPage() {
  return (
    <>
      <section className="bg-falcon-grey py-12 sm:py-16">
        <Container>
          <h1 className="font-heading text-4xl font-bold text-falcon-charcoal sm:text-5xl">
            Our Teams
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-falcon-charcoal/70">
            We run teams from Under 7 through to Under 16, all playing in
            the {CLUB.league}.
          </p>
        </Container>
      </section>

      <Container className="py-12 sm:py-16">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {CLUB.teams.map((team) => (
            <div
              key={team}
              className="border-l-4 border-falcon-red bg-white p-5 shadow-sm"
            >
              <p className="font-heading text-xl font-bold text-falcon-charcoal">
                {team}s
              </p>
              <p className="mt-1 text-sm text-falcon-charcoal/50">
                {CLUB.league}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-falcon-grey-mid pt-8 text-center">
          <p className="text-lg text-falcon-charcoal/80">
            Interested in joining a team?
          </p>
          <Link
            href="/join"
            className="mt-4 inline-block rounded-md bg-falcon-red px-8 py-3 font-semibold text-white transition-colors hover:bg-falcon-red-dark"
          >
            Join Us
          </Link>
        </div>
      </Container>
    </>
  );
}
