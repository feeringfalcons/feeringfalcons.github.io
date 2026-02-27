import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CLUB } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Where to Find Us",
  description: `Find Feering Falcons Youth Football Club at ${CLUB.ground.fullAddress}.`,
};

export default function FindUsPage() {
  return (
    <>
      <section className="bg-falcon-grey py-12 sm:py-16">
        <Container>
          <h1 className="font-heading text-4xl font-bold text-falcon-charcoal sm:text-5xl">
            Where to Find Us
          </h1>
        </Container>
      </section>

      <Container className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="font-heading text-2xl font-bold text-falcon-charcoal">
              {CLUB.ground.name}
            </p>
            <p className="mt-2 text-lg text-falcon-charcoal/80">
              {CLUB.ground.fullAddress}
            </p>
            <p className="mt-2 text-sm text-falcon-charcoal/60">
              Use <span className="font-semibold">{CLUB.ground.postcode}</span>{" "}
              for sat nav
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-lg shadow-sm">
            <iframe
              src={`https://maps.google.com/maps?q=${CLUB.ground.mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="400"
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map showing ${CLUB.ground.name}`}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
