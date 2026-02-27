import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EntryForm } from "@/components/tournament/EntryForm";
import { TOURNAMENT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "5-A-Side Tournament 2026",
  description: `Feering Falcons 5-A-Side Tournament -${TOURNAMENT.date} at Elm Farm. Teams from U7 to U15, £50 per team entry.`,
};

export default function TournamentPage() {
  return (
    <>
      {/* Hero -full event poster */}
      <section className="bg-falcon-red pb-20 pt-16 sm:pb-28 sm:pt-24">
        <Container>
          <p className="font-heading text-sm tracking-widest text-white/40">
            FEERING FALCONS PRESENT
          </p>
          <h1 className="mt-3 font-heading text-[clamp(4rem,14vw,11rem)] leading-[0.78] tracking-tight text-white">
            5-A-SIDE
            <br />
            TOURNAMENT
          </h1>
          <div className="mt-8 flex flex-col gap-1 sm:flex-row sm:items-end sm:gap-8">
            <p className="font-heading text-[clamp(1.5rem,4vw,2.5rem)] text-white/90">
              {TOURNAMENT.date.toUpperCase()}
            </p>
            <p className="text-xl text-white/60">
              £{TOURNAMENT.entryFee} per team
            </p>
          </div>
          <a
            href="#enter"
            className="mt-10 inline-block bg-falcon-charcoal px-10 py-4 font-heading text-xl tracking-wider text-white transition-colors hover:bg-falcon-charcoal-light"
          >
            ENTER NOW
          </a>
        </Container>
      </section>

      {/* Deadline -punchy red stripe */}
      <section className="bg-falcon-red-dark py-5">
        <Container>
          <p className="font-heading text-lg tracking-wider text-white sm:text-xl">
            DEADLINE: {TOURNAMENT.deadline.toUpperCase()} &mdash; FIRST COME,
            FIRST SERVED
          </p>
        </Container>
      </section>

      {/* Details -charcoal section */}
      <section className="bg-falcon-charcoal py-16 sm:py-20">
        <Container>
          <ScrollReveal>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div className="space-y-8">
                <div>
                  <p className="font-heading text-sm tracking-widest text-white/30">
                    AGE GROUPS
                  </p>
                  <p className="mt-2 text-xl text-white/80">
                    U7 through U15 (2025/26 season)
                  </p>
                </div>
                <div>
                  <p className="font-heading text-sm tracking-widest text-white/30">
                    SQUAD SIZES
                  </p>
                  <p className="mt-2 text-white/80">
                    Max {TOURNAMENT.squadSizes.small.max} players (U7–U8)
                  </p>
                  <p className="text-white/80">
                    Max {TOURNAMENT.squadSizes.large.max} players (U9+)
                  </p>
                </div>
                <div>
                  <p className="font-heading text-sm tracking-widest text-white/30">
                    FORMAT
                  </p>
                  <p className="mt-2 text-white/80">
                    Morning and afternoon sessions
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <p className="font-heading text-sm tracking-widest text-white/30">
                    VENUE
                  </p>
                  <p className="mt-2 text-white/80">{TOURNAMENT.venue}</p>
                </div>
                <div>
                  <p className="font-heading text-sm tracking-widest text-white/30">
                    PRIZES
                  </p>
                  <p className="mt-2 text-white/80">
                    Medals for players, trophies for teams
                  </p>
                </div>
                <div>
                  <p className="font-heading text-sm tracking-widest text-white/30">
                    TEAMS
                  </p>
                  <p className="mt-2 text-white/80">
                    Over 100 teams each year
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Payment -red section */}
      <section className="bg-falcon-red py-16 sm:py-20">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 className="font-heading text-3xl text-white sm:text-4xl">
                PAYMENT
              </h2>
              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <div className="border-l-4 border-white/30 pl-6">
                  <p className="font-heading text-lg text-white">
                    BANK TRANSFER
                  </p>
                  <div className="mt-3 space-y-1 text-white/70">
                    <p>
                      <span className="text-white">
                        {TOURNAMENT.payment.bankName}
                      </span>
                    </p>
                    <p>
                      Sort code:{" "}
                      <span className="text-white">
                        {TOURNAMENT.payment.sortCode}
                      </span>
                    </p>
                    <p>
                      Account:{" "}
                      <span className="text-white">
                        {TOURNAMENT.payment.accountNumber}
                      </span>
                    </p>
                    <p>
                      Ref:{" "}
                      <span className="text-white">
                        {TOURNAMENT.payment.reference}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="border-l-4 border-white/20 pl-6">
                  <p className="font-heading text-lg text-white">CHEQUE</p>
                  <p className="mt-3 text-white/70">
                    Payable to &ldquo;
                    <span className="text-white">
                      {TOURNAMENT.payment.chequePayable}
                    </span>
                    &rdquo;
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Entry form -charcoal section */}
      <section id="enter" className="bg-falcon-charcoal py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-xl">
            <h2 className="font-heading text-3xl text-white sm:text-4xl">
              ENTER YOUR TEAM
            </h2>
            <p className="mt-3 text-white/50">
              Entries close {TOURNAMENT.deadline}. Submit early to secure your
              place.
            </p>
            <div className="mt-8 bg-falcon-cream p-6 sm:p-8">
              <EntryForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Contact -red bottom */}
      <section className="bg-falcon-red py-10 sm:py-12">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-heading text-sm tracking-widest text-white/40">
                TOURNAMENT CONTACT
              </p>
              <p className="mt-1 text-lg text-white">
                {TOURNAMENT.contact.name}
              </p>
            </div>
            <div className="flex flex-col gap-1 text-white/70 sm:text-right">
              <a
                href={`mailto:${TOURNAMENT.contact.email}`}
                className="hover:text-white"
              >
                {TOURNAMENT.contact.email}
              </a>
              <p>
                <a
                  href={`tel:${TOURNAMENT.contact.phone.replace(/\s/g, "")}`}
                  className="hover:text-white"
                >
                  {TOURNAMENT.contact.phone}
                </a>{" "}
                <span className="text-white/40">
                  ({TOURNAMENT.contact.phoneHours})
                </span>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
