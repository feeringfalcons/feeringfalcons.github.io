import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { JoinForm } from "@/components/ui/JoinForm";
import { CLUB } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Feering Falcons Youth Football Club — developing young footballers in North Essex since 1978.",
};

export default function AboutPage() {
  return (
    <article>
      {/* Opening — no red hero, straight into the story */}
      <section className="pb-8 pt-16 sm:pt-24">
        <Container>
          <ScrollReveal animation="animate-slide-in-left">
            <p className="font-heading text-sm tracking-widest text-falcon-charcoal/30">
              EST. {CLUB.founded}
            </p>
            <h1 className="mt-3 font-heading text-[clamp(3rem,9vw,7rem)] leading-[0.82] tracking-tight text-falcon-charcoal">
              ABOUT
              <br />
              <span className="text-falcon-red">THE CLUB</span>
            </h1>
          </ScrollReveal>
        </Container>
      </section>

      {/* Origin story */}
      <section className="pb-16 sm:pb-20">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-xl leading-relaxed text-falcon-charcoal/80 sm:text-2xl">
                Born in the fields of Feering and Kelvedon, Feering Falcons
                Youth Football Club has been developing young footballers since
                1978. What started as a small group of local kids with a love
                for the game has grown into one of the most established
                grassroots clubs in North Essex.
              </p>
              <p className="mt-6 leading-relaxed text-falcon-charcoal/70">
                We play in the {CLUB.leagues[0].name} and the{" "}
                <a href={CLUB.leagues[1].url} target="_blank" rel="noopener noreferrer" className="text-falcon-red hover:underline">{CLUB.leagues[1].name}</a>
                , and are proud to be an{" "}
                {CLUB.accreditation}. Our philosophy has always been simple:
                development over results, confidence over competition, and a
                genuine love of the game above all else.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Pull quote — full bleed red */}
      <section className="bg-falcon-red py-16 sm:py-20">
        <Container>
          <ScrollReveal>
            <p className="font-heading text-[clamp(2rem,5vw,4rem)] leading-[0.95] text-white">
              DEVELOPMENT OVER RESULTS.
              <br />
              CONFIDENCE OVER COMPETITION.
            </p>
            <p className="mt-6 max-w-xl text-lg italic text-white/60">
              We believe that every child who pulls on a Feering Falcons shirt
              should leave the pitch having had fun, learned something, and
              felt part of a team.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Teams — flowing text */}
      <section id="teams" className="py-16 sm:py-20">
        <Container>
          <ScrollReveal>
            <h2 className="font-heading text-3xl text-falcon-charcoal sm:text-4xl">
              {CLUB.teams.length} TEAMS. ONE CLUB.
            </h2>
            <div className="mt-8">
              <p className="font-heading text-[clamp(1.4rem,3vw,2rem)] leading-relaxed tracking-wide text-falcon-charcoal/80">
                {CLUB.teams.map((team, i) => (
                  <span key={team}>
                    <span className="text-falcon-charcoal">{team}</span>
                    {i < CLUB.teams.length - 1 && (
                      <span className="mx-2 text-falcon-red">/</span>
                    )}
                  </span>
                ))}
              </p>
            </div>
            <p className="mt-6 text-falcon-charcoal/60">
              Playing across the {CLUB.leagues[0].shortName} and{" "}
              <a href={CLUB.leagues[1].url} target="_blank" rel="noopener noreferrer" className="text-falcon-red hover:underline">{CLUB.leagues[1].shortName}</a>
              . We also use{" "}
              {CLUB.secondGround.name} for 7-a-side games.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Match days — charcoal, angular */}
      <section className="section-angle-both bg-falcon-charcoal py-24 sm:py-32">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 className="font-heading text-3xl text-white sm:text-4xl">
                MATCH DAYS AT ELM FARM
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/80">
                Our home ground at {CLUB.ground.name}, {CLUB.ground.postcode},
                is the heart of the club. On match days you&apos;ll find
                The Nest serving teas and bacon rolls, families
                cheering from the sideline, and a real sense of community.
              </p>
              <p className="mt-4 leading-relaxed text-white/60">
                All coaches are DBS-checked with FA qualifications. We take
                safeguarding seriously — every child is looked after by trained,
                dedicated volunteers who love the game.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Annual events */}
      <section className="py-16 sm:py-20">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 className="font-heading text-3xl text-falcon-charcoal sm:text-4xl">
                ANNUAL EVENTS
              </h2>
              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <div className="border-l-4 border-falcon-red pl-6">
                  <p className="font-heading text-xl text-falcon-charcoal">
                    5-A-SIDE TOURNAMENT
                  </p>
                  <p className="mt-2 text-falcon-charcoal/60">
                    Our flagship event each June, attracting over 100 teams from
                    across the region.
                  </p>
                </div>
                <div className="border-l-2 border-falcon-border pl-6">
                  <p className="font-heading text-xl text-falcon-charcoal">
                    PRESENTATION NIGHT
                  </p>
                  <p className="mt-2 text-falcon-charcoal/60">
                    {CLUB.presentationNight} — celebrating the season with
                    awards, trophies, and recognition for every player.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Join Us — red section, form */}
      <section id="join" className="bg-falcon-red py-16 sm:py-20">
        <Container>
          <ScrollReveal>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="font-heading text-[clamp(2.5rem,6vw,4rem)] leading-[0.85] text-white">
                  NEW PLAYERS
                  <br />
                  WELCOME
                </h2>
                <p className="mt-6 text-lg text-white/80">
                  Whether your child is picking up a football for the first time
                  or looking for a new club, we&apos;d love to hear from you.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Friendly environment for players and parents",
                    "FA-qualified, DBS-checked coaches",
                    "Trial sessions available",
                    "Development first, enjoyment always",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2.5 w-2.5 shrink-0 bg-white" />
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-falcon-cream p-6 sm:p-8">
                <p className="mb-6 font-heading text-xl text-falcon-charcoal">
                  REGISTER INTEREST
                </p>
                <JoinForm />
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </article>
  );
}
