import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TOURNAMENT, CLUB } from "@/lib/constants";

export const metadata: Metadata = {
  title: "5-A-Side Tournament",
  description: `The Feering Falcons 5-A-Side Tournament, held at Elm Farm every June. The ${TOURNAMENT.lastHeld.year} tournament has finished; the ${TOURNAMENT.nextYear} date is still to be confirmed and entries are not yet open.`,
};

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${CLUB.ground.mapQuery}`;

/**
 * Holding page between tournaments.
 *
 * The day-of content — registration times, what to bring, the full rules, the
 * information letter — is deliberately not here. With no date set it is noise
 * at best and misleading at worst. It all still lives in constants.ts
 * (TOURNAMENT.registration, TOURNAMENT_RULES, the entry form component), so
 * bringing it back for {TOURNAMENT.nextYear} is a matter of restoring sections,
 * not rewriting them.
 */
export default function TournamentPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-falcon-red pb-16 pt-16 sm:pb-20 sm:pt-24">
        <Container>
          <p className="font-heading text-sm tracking-widest text-white/90">
            FEERING FALCONS PRESENT
          </p>
          {/* 14vw/11rem made "TOURNAMENT" wider than the content column at
              desktop widths (1194px of text in a 1088px box), which gave the
              whole page a horizontal scrollbar. 12vw/10rem fits at every
              breakpoint with a little room to spare. */}
          <h1 className="mt-3 font-heading text-[clamp(2.5rem,12vw,10rem)] leading-[0.78] tracking-tight text-white">
            5-A-SIDE
            <br />
            TOURNAMENT
          </h1>
          <p className="mt-6 font-heading text-[clamp(1.5rem,4vw,2.5rem)] text-white/90">
            BACK IN {TOURNAMENT.nextYear}
          </p>
          <p className="mt-4 max-w-xl text-lg text-white/90">
            Our flagship event, held at Elm Farm every {TOURNAMENT.lastHeld.monthHint}.
            The {TOURNAMENT.lastHeld.year} tournament is done and dusted. The
            date for {TOURNAMENT.nextYear} hasn&apos;t been set yet.
          </p>
        </Container>
      </section>

      {/* ── Status stripe — the one thing most visitors came to find out ── */}
      <section className="bg-falcon-red-dark py-5">
        <Container>
          <p className="font-heading text-lg tracking-wider text-white sm:text-xl">
            DATE TO BE CONFIRMED &middot; ENTRIES ARE NOT OPEN YET
          </p>
        </Container>
      </section>

      {/* ── What it is ── */}
      <section className="py-16 sm:py-20">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 className="font-heading text-3xl text-falcon-charcoal sm:text-4xl">
                ONE DAY, OVER 100 TEAMS
              </h2>
              <p className="mt-6 text-xl leading-relaxed text-falcon-charcoal/80">
                Every June, Elm Farm fills up with clubs from right across the
                region for a full day of 5-a-side. Age groups from Under 7s to
                Under 15s, teas and bacon rolls from The Nest, and a proper
                grassroots atmosphere from first whistle to last.
              </p>
              <p className="mt-6 leading-relaxed text-falcon-charcoal/70">
                It is the biggest day in the Feering Falcons calendar and has
                been running for years. Thank you to every team, referee and
                volunteer who made {TOURNAMENT.lastHeld.year} another good one.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── What happens next ── */}
      <section className="section-angle-both bg-falcon-charcoal py-20 sm:py-24">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="font-heading text-sm tracking-[0.2em] text-white/70">
                WHAT HAPPENS NEXT
              </p>
              <h2 className="mt-2 font-heading text-[clamp(2rem,6vw,3.5rem)] leading-[0.9] text-white">
                WE&apos;LL ANNOUNCE THE DATE HERE
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/80">
                Once the {TOURNAMENT.nextYear} date is fixed, it will go up on
                this page along with entry details, the fee, registration times
                and the full rules. Nothing to do in the meantime: there is no
                waiting list and no entry form open.
              </p>
              <p className="mt-4 leading-relaxed text-white/70">
                The quickest way to hear about it is our Facebook page, where
                the date usually goes out first.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={CLUB.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-falcon-red px-7 py-3 font-heading text-lg tracking-wider text-white transition-colors hover:bg-falcon-red-dark"
                >
                  FOLLOW ON FACEBOOK &rarr;
                </a>
                <Link
                  href="/about#join"
                  className="border-2 border-white/40 px-7 py-3 font-heading text-lg tracking-wider text-white transition-colors hover:border-white"
                >
                  JOIN THE CLUB
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── Where it happens ── */}
      <section className="py-16 sm:py-20">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="font-heading text-sm tracking-[0.2em] text-falcon-charcoal/70">
                WHERE IT HAPPENS
              </p>
              <h2 className="mt-2 font-heading text-3xl text-falcon-charcoal sm:text-4xl">
                ELM FARM
              </h2>
              <p className="mt-4 text-lg text-falcon-charcoal/70">
                {CLUB.ground.fullAddress}
              </p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block border-2 border-falcon-charcoal px-6 py-2.5 font-heading text-base tracking-wider text-falcon-charcoal transition-colors hover:bg-falcon-charcoal hover:text-white"
              >
                OPEN IN GOOGLE MAPS &rarr;
              </a>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── Contact ── */}
      <section className="bg-falcon-red py-10 sm:py-12">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-heading text-sm tracking-widest text-white/90">
                TOURNAMENT CONTACT
              </p>
              <p className="mt-1 text-lg text-white">{TOURNAMENT.contact.name}</p>
              <p className="text-white/90">
                Questions about next year&apos;s tournament? Get in touch.
              </p>
            </div>
            <div className="flex flex-col gap-1 text-white/90 sm:text-right">
              <a
                href={`mailto:${TOURNAMENT.contact.email}`}
                className="hover:text-white"
              >
                {TOURNAMENT.contact.email}
              </a>
              <a
                href={`tel:${TOURNAMENT.contact.phone.replace(/\s/g, "")}`}
                className="hover:text-white"
              >
                {TOURNAMENT.contact.phone}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
