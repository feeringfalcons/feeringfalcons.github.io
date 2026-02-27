import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Safeguarding",
  description:
    "Safeguarding at Feering Falcons Youth Football Club — child protection, welfare officer, and reporting procedures.",
};

export default function SafeguardingPage() {
  return (
    <>
      <section className="bg-falcon-grey py-12 sm:py-16">
        <Container>
          <h1 className="font-heading text-4xl font-bold text-falcon-charcoal sm:text-5xl">
            Safeguarding
          </h1>
        </Container>
      </section>

      <Container className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl space-y-12">
          {/* Commitment */}
          <section>
            <p className="text-lg leading-relaxed text-falcon-charcoal/80">
              The safety and wellbeing of every young player is our highest
              priority. Feering Falcons is committed to providing a safe
              environment for children to enjoy football.
            </p>
          </section>

          {/* Welfare officer */}
          <section className="border-l-4 border-falcon-red bg-falcon-grey px-6 py-5">
            <h2 className="font-heading text-xl font-bold text-falcon-charcoal">
              Club Welfare Officer
            </h2>
            <p className="mt-2 text-falcon-charcoal/70">
              <span className="font-semibold text-falcon-charcoal">
                [Name TBC]
              </span>{" "}
              — Club Welfare Officer
            </p>
            <p className="mt-1 text-sm text-falcon-charcoal/60">
              Contact details to be confirmed. Please speak to any team manager
              in the meantime.
            </p>
          </section>

          {/* Practices */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-falcon-charcoal">
              Our Safeguarding Practices
            </h2>
            <ul className="mt-4 space-y-3">
              {[
                "All coaches and volunteers are DBS-checked",
                "Coaches hold FA qualifications and first aid training",
                "We follow the FA's Safeguarding Children Policy",
                "Clear reporting procedures for any concerns",
                "Regular safeguarding training for all staff",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 bg-falcon-red" />
                  <span className="text-falcon-charcoal/80">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Reporting */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-falcon-charcoal">
              How to Report a Concern
            </h2>
            <div className="mt-6 space-y-4">
              <div className="border-l-4 border-falcon-red bg-falcon-grey px-5 py-4">
                <p className="font-heading font-bold text-falcon-charcoal">
                  Internal — Club Welfare Officer
                </p>
                <p className="mt-1 text-sm text-falcon-charcoal/70">
                  Speak to the Club Welfare Officer or any team manager
                </p>
              </div>
              <div className="border-l-4 border-falcon-grey-mid bg-falcon-grey px-5 py-4">
                <p className="font-heading font-bold text-falcon-charcoal">
                  The FA Safeguarding Team
                </p>
                <p className="mt-1 text-sm text-falcon-charcoal/70">
                  0800 169 1863
                </p>
              </div>
              <div className="border-l-4 border-falcon-grey-mid bg-falcon-grey px-5 py-4">
                <p className="font-heading font-bold text-falcon-charcoal">
                  NSPCC Helpline
                </p>
                <p className="mt-1 text-sm text-falcon-charcoal/70">
                  0808 800 5000
                </p>
              </div>
            </div>
          </section>

          {/* Resources */}
          <section className="border-t border-falcon-grey-mid pt-8">
            <h2 className="font-heading text-2xl font-bold text-falcon-charcoal">
              Further Resources
            </h2>
            <div className="mt-4 space-y-2">
              <a
                href="https://www.thefa.com/football-rules-governance/safeguarding"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-falcon-red hover:underline"
              >
                FA Safeguarding &rarr;
              </a>
              <a
                href="/documents/child-protection-policy.pdf"
                className="block text-falcon-red hover:underline"
              >
                Download our Child Protection Policy (PDF) &rarr;
              </a>
            </div>
          </section>
        </div>
      </Container>
    </>
  );
}
