import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { TOURNAMENT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "5-A-Side Tournament 2026",
  description: `Feering Falcons 5-A-Side Tournament — ${TOURNAMENT.date} at Elm Farm. Teams from U7 to U15, £50 per team entry.`,
};

export default function TournamentPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-falcon-red py-16 sm:py-24">
        <Container className="text-center text-white">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl lg:text-6xl">
            5-A-Side Tournament
          </h1>
          <p className="mt-4 font-heading text-2xl font-bold sm:text-3xl">
            {TOURNAMENT.date}
          </p>
          <p className="mt-2 text-xl text-white/80">
            £{TOURNAMENT.entryFee} per team
          </p>
          <Link
            href="/tournament/enter"
            className="mt-8 inline-block rounded-md bg-white px-8 py-3 font-semibold text-falcon-red transition-colors hover:bg-falcon-grey"
          >
            Enter Now
          </Link>
        </Container>
      </section>

      <Container className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl space-y-12">
          {/* Key details */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-falcon-charcoal">
              Key Details
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { label: "Age Groups", value: "U7 through U15 (2025/26 season)" },
                {
                  label: "Squad Sizes",
                  value: `Max ${TOURNAMENT.squadSizes.small.max} (U7–U8), Max ${TOURNAMENT.squadSizes.large.max} (U9+)`,
                },
                { label: "Format", value: "Morning and afternoon sessions" },
                { label: "Prizes", value: "Medals for players, trophies for teams" },
                { label: "Venue", value: TOURNAMENT.venue },
                { label: "Teams", value: "Over 100 teams each year" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border-l-4 border-falcon-red bg-falcon-grey px-4 py-4"
                >
                  <p className="text-sm font-medium text-falcon-charcoal/60">
                    {item.label}
                  </p>
                  <p className="mt-1 font-medium text-falcon-charcoal">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Important info */}
          <section className="border-l-4 border-falcon-red bg-falcon-grey px-6 py-5">
            <h2 className="font-heading text-xl font-bold text-falcon-charcoal">
              Important Information
            </h2>
            <ul className="mt-3 space-y-2 text-falcon-charcoal/80">
              <li>
                Registration deadline:{" "}
                <span className="font-semibold">{TOURNAMENT.deadline}</span>
              </li>
              <li>First-come-first-served — submit early to avoid disappointment</li>
              <li>No entries accepted after the deadline</li>
            </ul>
          </section>

          {/* Payment */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-falcon-charcoal">
              Payment Information
            </h2>
            <div className="mt-6 space-y-4">
              <div className="border-l-4 border-falcon-red bg-falcon-grey px-5 py-4">
                <p className="font-heading font-bold text-falcon-charcoal">
                  Bank Transfer
                </p>
                <div className="mt-2 space-y-1 text-sm text-falcon-charcoal/80">
                  <p>
                    Account name:{" "}
                    <span className="font-medium">{TOURNAMENT.payment.bankName}</span>
                  </p>
                  <p>
                    Sort code:{" "}
                    <span className="font-medium">{TOURNAMENT.payment.sortCode}</span>
                  </p>
                  <p>
                    Account number:{" "}
                    <span className="font-medium">
                      {TOURNAMENT.payment.accountNumber}
                    </span>
                  </p>
                  <p>
                    Reference:{" "}
                    <span className="font-medium">
                      {TOURNAMENT.payment.reference}
                    </span>
                  </p>
                </div>
              </div>
              <div className="border-l-4 border-falcon-grey-mid bg-falcon-grey px-5 py-4">
                <p className="font-heading font-bold text-falcon-charcoal">
                  Cheque
                </p>
                <p className="mt-1 text-sm text-falcon-charcoal/80">
                  Payable to{" "}
                  <span className="font-medium">
                    &ldquo;{TOURNAMENT.payment.chequePayable}&rdquo;
                  </span>
                </p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-falcon-charcoal">
              Contact
            </h2>
            <div className="mt-4 space-y-1 text-falcon-charcoal/80">
              <p className="font-medium text-falcon-charcoal">
                {TOURNAMENT.contact.name}
              </p>
              <p>
                <a
                  href={`mailto:${TOURNAMENT.contact.email}`}
                  className="text-falcon-red hover:underline"
                >
                  {TOURNAMENT.contact.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${TOURNAMENT.contact.phone.replace(/\s/g, "")}`}
                  className="text-falcon-red hover:underline"
                >
                  {TOURNAMENT.contact.phone}
                </a>{" "}
                ({TOURNAMENT.contact.phoneHours})
              </p>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="border-t border-falcon-grey-mid pt-8 text-center">
            <Link
              href="/tournament/enter"
              className="inline-block rounded-md bg-falcon-red px-8 py-3 font-semibold text-white transition-colors hover:bg-falcon-red-dark"
            >
              Enter Now
            </Link>
          </section>
        </div>
      </Container>
    </>
  );
}
