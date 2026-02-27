import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { EntryForm } from "@/components/tournament/EntryForm";
import { TOURNAMENT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tournament Entry Form",
  description: `Enter the Feering Falcons 5-A-Side Tournament — ${TOURNAMENT.date}. £${TOURNAMENT.entryFee} per team.`,
};

export default function TournamentEntryPage() {
  return (
    <>
      <section className="bg-falcon-grey py-12 sm:py-16">
        <Container>
          <h1 className="font-heading text-4xl font-bold text-falcon-charcoal sm:text-5xl">
            Tournament Entry Form
          </h1>
          <p className="mt-2 font-heading text-xl text-falcon-charcoal/70">
            {TOURNAMENT.date}
          </p>
        </Container>
      </section>

      <Container className="py-12 sm:py-16">
        <div className="mx-auto max-w-xl">
          <div className="mb-8 border-l-4 border-falcon-red bg-falcon-grey px-5 py-4">
            <p className="font-heading font-bold text-falcon-charcoal">
              Entries close {TOURNAMENT.deadline}
            </p>
            <p className="mt-1 text-sm text-falcon-charcoal/70">
              First-come-first-served — submit early to avoid disappointment
            </p>
          </div>

          <EntryForm />

          <div className="mt-12 space-y-4">
            <h2 className="font-heading text-xl font-bold text-falcon-charcoal">
              Payment Details
            </h2>
            <div className="border-l-4 border-falcon-red bg-falcon-grey px-5 py-4">
              <p className="font-heading font-bold text-falcon-charcoal">
                Bank Transfer
              </p>
              <div className="mt-2 space-y-1 text-sm text-falcon-charcoal/80">
                <p>
                  Account: {TOURNAMENT.payment.bankName}
                </p>
                <p>
                  Sort code: {TOURNAMENT.payment.sortCode} / Account:{" "}
                  {TOURNAMENT.payment.accountNumber}
                </p>
                <p>Reference: {TOURNAMENT.payment.reference}</p>
              </div>
            </div>
            <div className="border-l-4 border-falcon-grey-mid bg-falcon-grey px-5 py-4">
              <p className="font-heading font-bold text-falcon-charcoal">
                Cheque
              </p>
              <p className="mt-1 text-sm text-falcon-charcoal/80">
                Payable to &ldquo;{TOURNAMENT.payment.chequePayable}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
