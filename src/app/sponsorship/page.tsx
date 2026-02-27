import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CLUB } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sponsorship Opportunities",
  description:
    "Sponsor Feering Falcons Youth Football Club -ground banner and pitch map sponsorship opportunities for local businesses.",
};

export default function SponsorshipPage() {
  return (
    <>
      {/* Opening -leads with the pitch, no red hero */}
      <section className="pb-12 pt-16 sm:pt-24">
        <Container>
          <ScrollReveal animation="animate-slide-in-left">
            <p className="font-heading text-sm tracking-widest text-falcon-charcoal/30">
              SPONSORSHIP OPPORTUNITIES
            </p>
            <h1 className="mt-3 font-heading text-[clamp(3rem,9vw,7rem)] leading-[0.82] tracking-tight text-falcon-charcoal">
              SPONSOR
              <br />
              <span className="text-falcon-red">THE FALCONS</span>
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-falcon-charcoal/80 sm:text-2xl">
              With {CLUB.teams.length} teams, 200+ players, 30 game weeks, and
              hundreds of visiting families each season, your brand gets
              genuine, sustained visibility in the heart of local sport.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Pricing -the big reveal */}
      <section className="bg-falcon-charcoal py-16 sm:py-20">
        <Container>
          <ScrollReveal>
            <div className="grid gap-0 sm:grid-cols-2">
              {/* Ground banner */}
              <div className="border-b-2 border-white/10 p-8 sm:border-b-0 sm:border-r-2 sm:p-10">
                <p className="font-heading text-sm tracking-widest text-white/30">
                  GROUND BANNER
                </p>
                <p className="mt-4 font-heading text-[clamp(4rem,8vw,6rem)] leading-none text-white">
                  £300
                </p>
                <p className="mt-2 text-white/40">
                  for 2 years &mdash; £150 for existing kit sponsors
                </p>
                <ul className="mt-8 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 bg-falcon-red" />
                    <span className="text-white/70">
                      Your banner up to 2.5m x 1m
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 bg-falcon-red" />
                    <span className="text-white/70">
                      2–3 club-branded banners per sponsor
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 bg-falcon-red" />
                    <span className="text-white/70">
                      Near main entrance and Nest area
                    </span>
                  </li>
                </ul>
              </div>

              {/* Pitch map */}
              <div className="p-8 sm:p-10">
                <p className="font-heading text-sm tracking-widest text-white/30">
                  PITCH MAP
                </p>
                <p className="mt-4 font-heading text-[clamp(4rem,8vw,6rem)] leading-none text-falcon-red">
                  £500
                </p>
                <p className="mt-2 text-white/40">for 2 years</p>
                <ul className="mt-8 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 bg-falcon-red" />
                    <span className="text-white/70">
                      Sponsor the club pitch map
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 bg-falcon-red" />
                    <span className="text-white/70">
                      Displayed at ground entrance
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 bg-falcon-red" />
                    <span className="text-white/70">
                      Sent to visiting teams weekly
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 bg-falcon-red" />
                    <span className="text-white/70">
                      Lasting presence at every fixture
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Community pitch */}
      <section className="py-16 sm:py-20">
        <Container>
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="text-lg leading-relaxed text-falcon-charcoal/70">
                Feering Falcons is more than just football -we&apos;re a
                community of local families, week in, week out. These
                sponsorships don&apos;t just promote businesses -they help
                create a more professional, welcoming atmosphere for all our
                players and visitors.
              </p>
              <p className="mt-4 text-falcon-charcoal/60">
                We handle all logistics -installation, maintenance, and
                keeping your banner in top shape.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* CTA -red closing */}
      <section className="bg-falcon-red py-16 sm:py-20">
        <Container>
          <ScrollReveal>
            <p className="max-w-2xl text-xl italic text-white/70 sm:text-2xl">
              Let&apos;s build a ground that looks like home.
            </p>
            <p className="mt-3 font-heading text-[clamp(2rem,5vw,4rem)] leading-[0.85] text-white">
              LET&apos;S BUILD IT
              <br />
              TOGETHER.
            </p>
            <p className="mt-8">
              <a
                href={`mailto:${CLUB.contact.sponsorship}`}
                className="inline-block bg-falcon-charcoal px-8 py-3 font-heading text-lg tracking-wider text-white transition-colors hover:bg-falcon-charcoal-light"
              >
                GET IN TOUCH
              </a>
            </p>
            <p className="mt-4 text-sm text-white/50">
              Or speak to your team manager
            </p>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
