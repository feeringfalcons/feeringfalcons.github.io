import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CLUB } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sponsorship Opportunities",
  description:
    "Sponsor Feering Falcons Youth Football Club — ground banner and pitch map sponsorship opportunities for local businesses.",
};

export default function SponsorshipPage() {
  return (
    <>
      <section className="bg-falcon-grey py-12 sm:py-16">
        <Container>
          <h1 className="font-heading text-4xl font-bold text-falcon-charcoal sm:text-5xl">
            Sponsorship Opportunities
          </h1>
        </Container>
      </section>

      <Container className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl space-y-12">
          {/* Intro */}
          <section>
            <p className="text-lg leading-relaxed text-falcon-charcoal/80">
              Support the club. Build your brand. Be part of something special.
            </p>
            <p className="mt-4 leading-relaxed text-falcon-charcoal/80">
              Feering Falcons is more than just football — we&apos;re a
              community of over 200 young players, 15 teams, and hundreds of
              local families, week in, week out. We&apos;re offering a limited
              number of sponsorship opportunities to help us grow and give your
              business real visibility in the heart of local sport.
            </p>
            <p className="mt-4 leading-relaxed text-falcon-charcoal/80">
              These sponsorships don&apos;t just promote businesses — they help
              create a more professional, welcoming atmosphere for all our
              players and visitors. It&apos;s a win-win for the community.
            </p>
          </section>

          {/* Tiers */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-falcon-charcoal">
              Sponsorship Options
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {/* Ground banner */}
              <div className="border-l-4 border-falcon-red bg-falcon-grey p-6">
                <h3 className="font-heading text-xl font-bold text-falcon-charcoal">
                  Ground Banner Sponsorship
                </h3>
                <p className="mt-3 font-heading text-2xl font-bold text-falcon-red">
                  £300
                  <span className="text-base font-normal text-falcon-charcoal/60">
                    {" "}
                    for 2 years
                  </span>
                </p>
                <p className="mt-1 text-sm text-falcon-charcoal/60">
                  £150 reduced rate for existing kit sponsors
                </p>
                <ul className="mt-4 space-y-2 text-sm text-falcon-charcoal/80">
                  <li>Supply your own banner (up to 2.5m x 1m)</li>
                  <li>
                    Includes margin for 2–3 club-branded banners per sponsor
                  </li>
                  <li>
                    Placement near main entrance and Nest area for high
                    visibility
                  </li>
                </ul>
              </div>

              {/* Pitch map */}
              <div className="border-l-4 border-falcon-red bg-falcon-grey p-6">
                <h3 className="font-heading text-xl font-bold text-falcon-charcoal">
                  Pitch Map Sponsorship
                </h3>
                <p className="mt-3 font-heading text-2xl font-bold text-falcon-red">
                  £500
                  <span className="text-base font-normal text-falcon-charcoal/60">
                    {" "}
                    for 2 years
                  </span>
                </p>
                <ul className="mt-4 space-y-2 text-sm text-falcon-charcoal/80">
                  <li>Sponsorship of the club pitch map</li>
                  <li>Displayed at the entrance to the ground</li>
                  <li>Sent to all visiting teams each week</li>
                  <li>Highly visible and lasting presence at every fixture</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Why sponsor */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-falcon-charcoal">
              Fantastic Exposure Throughout the Year
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                {
                  stat: "30",
                  label: "Game weeks average per season",
                },
                {
                  stat: "15",
                  label: "Teams bringing visiting fans weekly",
                },
                {
                  stat: "200+",
                  label: "Players and hundreds of families",
                },
              ].map((item) => (
                <div key={item.label} className="bg-falcon-grey px-4 py-5 text-center">
                  <p className="font-heading text-3xl font-bold text-falcon-red">
                    {item.stat}
                  </p>
                  <p className="mt-1 text-sm text-falcon-charcoal/60">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-falcon-charcoal/80">
              We handle all the logistics — installation, maintenance, and
              ensuring your banner stays in top shape. All we ask is that you
              supply the banner to the agreed specs.
            </p>
          </section>

          {/* Contact */}
          <section className="border-t border-falcon-grey-mid pt-8 text-center">
            <h2 className="font-heading text-2xl font-bold text-falcon-charcoal">
              Interested?
            </h2>
            <p className="mt-3 text-falcon-charcoal/70">
              Drop us an email at{" "}
              <a
                href={`mailto:${CLUB.contact.sponsorship}`}
                className="text-falcon-red hover:underline"
              >
                {CLUB.contact.sponsorship}
              </a>{" "}
              or speak to your team manager to get started.
            </p>
            <p className="mt-6 font-heading text-xl font-bold text-falcon-charcoal">
              Let&apos;s build a ground that looks like home.
            </p>
            <p className="font-heading text-xl font-bold text-falcon-red">
              Let&apos;s build it together.
            </p>
          </section>
        </div>
      </Container>
    </>
  );
}
