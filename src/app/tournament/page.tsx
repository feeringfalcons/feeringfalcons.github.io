import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TOURNAMENT, TOURNAMENT_RULES, CLUB } from "@/lib/constants";

export const metadata: Metadata = {
  title: "5-A-Side Tournament 2026",
  description: `Information and rules for the Feering Falcons 5-A-Side Tournament, ${TOURNAMENT.date} at Elm Farm. Registration times, what to bring, and the full competition rules.`,
};

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${CLUB.ground.mapQuery}`;

function Bullets({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-falcon-red" />
          <span className="leading-relaxed text-falcon-charcoal/75">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function RuleBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <ScrollReveal className="border-t border-falcon-border pt-8">
      <p className="font-heading text-sm tracking-[0.2em] text-falcon-red">
        {label}
      </p>
      <div className="mt-4">{children}</div>
    </ScrollReveal>
  );
}

export default function TournamentPage() {
  const sessions = [TOURNAMENT.registration.am, TOURNAMENT.registration.pm];

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-falcon-red pb-16 pt-16 sm:pb-20 sm:pt-24">
        <Container>
          <p className="font-heading text-sm tracking-widest text-white/90">
            FEERING FALCONS PRESENT
          </p>
          <h1 className="mt-3 font-heading text-[clamp(2.8rem,14vw,11rem)] leading-[0.78] tracking-tight text-white">
            5-A-SIDE
            <br />
            TOURNAMENT
          </h1>
          <p className="mt-6 font-heading text-[clamp(1.5rem,4vw,2.5rem)] text-white/90">
            {TOURNAMENT.date.toUpperCase()}
          </p>
          <p className="mt-4 max-w-xl text-lg text-white/90">
            The big day is nearly here. Everything you need for the tournament,
            from registration times to the full rules, is below.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#registration"
              className="bg-falcon-charcoal px-8 py-3 font-heading text-lg tracking-wider text-white transition-colors hover:bg-falcon-charcoal-light"
            >
              REGISTRATION TIMES
            </a>
            <a
              href="#rules"
              className="border-2 border-white px-8 py-3 font-heading text-lg tracking-wider text-white transition-colors hover:bg-white hover:text-falcon-red"
            >
              FULL RULES
            </a>
          </div>
        </Container>
      </section>

      {/* ── Entries closed stripe ── */}
      <section className="bg-falcon-red-dark py-5">
        <Container>
          <p className="font-heading text-lg tracking-wider text-white sm:text-xl">
            ENTRIES ARE NOW CLOSED. THANK YOU TO EVERY TEAM TAKING PART. SEE YOU
            ON THE DAY.
          </p>
        </Container>
      </section>

      {/* ── Registration times ── */}
      <section id="registration" className="scroll-mt-24 bg-falcon-charcoal py-16 sm:py-20">
        <Container>
          <ScrollReveal>
            <p className="font-heading text-sm tracking-[0.2em] text-white/70">
              ARRIVING ON THE DAY
            </p>
            <h2 className="mt-2 font-heading text-[clamp(2rem,6vw,3.5rem)] leading-[0.9] text-white">
              REGISTRATION TIMES
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-white/60">
              Find your age group below and please arrive in good time.
              Registration closes before kick-off, so leave a little extra for
              parking and finding the registration tent.
            </p>
          </ScrollReveal>

          <ScrollReveal className="stagger-children mt-10 grid gap-5 sm:grid-cols-2">
            {sessions.map((s) => (
              <div
                key={s.label}
                className="animate-fade-in-up border-t-4 border-falcon-red bg-white p-6 sm:p-8"
              >
                <p className="font-heading text-sm tracking-[0.2em] text-falcon-red">
                  {s.label}
                </p>
                <div className="mt-4 flex flex-wrap items-baseline gap-x-8 gap-y-2">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-falcon-charcoal/70">
                      Register by
                    </p>
                    <p className="font-heading text-3xl text-falcon-charcoal">
                      {s.registerBy}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-falcon-charcoal/70">
                      Kick-off
                    </p>
                    <p className="font-heading text-3xl text-falcon-charcoal">
                      {s.kickOff}
                    </p>
                  </div>
                </div>
                <div className="mt-6 border-t border-falcon-border pt-5">
                  <p className="text-xs uppercase tracking-wider text-falcon-charcoal/70">
                    Age groups
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {s.ageGroups.map((g) => (
                      <span
                        key={g}
                        className="bg-falcon-cream px-3 py-1.5 font-heading text-sm tracking-wide text-falcon-charcoal"
                      >
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </Container>
      </section>

      {/* ── On arrival / what to bring ── */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* On arrival */}
            <ScrollReveal>
              <h2 className="font-heading text-3xl text-falcon-charcoal sm:text-4xl">
                ON ARRIVAL
              </h2>
              <div className="mt-6">
                <Bullets
                  items={[
                    "Complete a team sheet and hand it in at the registration tent on arrival. This applies to every team, including Feering teams.",
                    "There will be a chance to raise any questions with the referees before the start of the event.",
                    `Maximum squad size is ${TOURNAMENT.squadSizes.small.max} players for the Under 7s and 8s, and ${TOURNAMENT.squadSizes.large.max} players for all other age groups.`,
                  ]}
                />
              </div>
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${TOURNAMENT.infoDocument}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block bg-falcon-red px-7 py-3 font-heading text-lg tracking-wider text-white transition-colors hover:bg-falcon-red-dark"
              >
                INFORMATION LETTER &amp; TEAM SHEET (PDF) &rarr;
              </a>
            </ScrollReveal>

            {/* What to bring + on the day */}
            <ScrollReveal>
              <h2 className="font-heading text-3xl text-falcon-charcoal sm:text-4xl">
                WHAT TO BRING
              </h2>
              <div className="mt-6">
                <Bullets
                  items={[
                    "Football boots and trainers. In wet weather it is boots only, otherwise it is your own choice.",
                    "Shinguards, which every player must wear. All jewellery and watches must be removed.",
                    "The first-named team in each game supplies the match ball.",
                  ]}
                />
              </div>
              <div className="mt-8 border-l-4 border-falcon-red bg-falcon-cream p-6">
                <p className="font-heading text-lg tracking-wide text-falcon-charcoal">
                  ON THE DAY
                </p>
                <p className="mt-2 text-falcon-charcoal/70">
                  {TOURNAMENT.onTheDay.join(", ")} stands will be running all day.
                  Bring the family and make a day of it.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── The rules ── */}
      <section id="rules" className="scroll-mt-24 bg-falcon-cream py-16 sm:py-24">
        <Container>
          <ScrollReveal>
            <p className="font-heading text-sm tracking-[0.2em] text-falcon-charcoal/70">
              PLEASE READ CAREFULLY
            </p>
            <h2 className="mt-2 font-heading text-[clamp(2.5rem,8vw,5rem)] leading-[0.85] text-falcon-charcoal">
              THE RULES
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-falcon-charcoal/60">
              The full competition rules are below and in the information letter.
              The referees will be happy to answer any questions before play
              begins.
            </p>
          </ScrollReveal>

          <div className="mt-12 max-w-3xl space-y-10">
            <RuleBlock label="SQUADS">
              <div className="space-y-4">
                {TOURNAMENT_RULES.squads.map((s) => (
                  <div key={s.groups}>
                    <p className="font-heading text-xl text-falcon-charcoal">
                      {s.groups}
                    </p>
                    <p className="mt-1 leading-relaxed text-falcon-charcoal/75">
                      {s.detail}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Bullets items={TOURNAMENT_RULES.players} />
              </div>
            </RuleBlock>

            <RuleBlock label="FORMAT & DURATION">
              <p className="leading-relaxed text-falcon-charcoal/75">
                {TOURNAMENT_RULES.format}
              </p>
              <div className="mt-5 divide-y divide-falcon-border border-y border-falcon-border">
                {TOURNAMENT_RULES.duration.map((d) => (
                  <div
                    key={d.round}
                    className="flex items-baseline justify-between gap-4 py-2.5"
                  >
                    <span className="font-heading text-lg tracking-wide text-falcon-charcoal">
                      {d.round}
                    </span>
                    <span className="text-falcon-charcoal/70">{d.length}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-falcon-charcoal/60">
                {TOURNAMENT_RULES.durationNote}
              </p>
            </RuleBlock>

            <RuleBlock label="THE BALL">
              <Bullets items={TOURNAMENT_RULES.ball} />
            </RuleBlock>

            <RuleBlock label="POINTS & SCORING">
              <Bullets items={TOURNAMENT_RULES.points} />
            </RuleBlock>

            <RuleBlock label="DISCIPLINE">
              <Bullets items={TOURNAMENT_RULES.discipline} />
            </RuleBlock>

            <RuleBlock label="THE PLAY">
              <div className="grid gap-8 sm:grid-cols-2">
                {[TOURNAMENT_RULES.playYounger, TOURNAMENT_RULES.playOlder].map(
                  (p) => (
                    <div key={p.title}>
                      <p className="font-heading text-xl text-falcon-charcoal">
                        {p.title}
                      </p>
                      <p className="mt-1 text-sm italic text-falcon-charcoal/55">
                        {p.intro}
                      </p>
                      <ul className="mt-4 space-y-2.5">
                        {p.rules.map((r) => (
                          <li key={r} className="flex items-start gap-2.5">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-falcon-red" />
                            <span className="text-sm leading-relaxed text-falcon-charcoal/75">
                              {r}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ),
                )}
              </div>
            </RuleBlock>

            <RuleBlock label="REFEREES">
              <Bullets items={TOURNAMENT_RULES.referees} />
            </RuleBlock>
          </div>
        </Container>
      </section>

      {/* ── Getting there ── */}
      <section id="directions" className="scroll-mt-24 bg-falcon-charcoal py-16 sm:py-20">
        <Container>
          <ScrollReveal>
            <p className="font-heading text-sm tracking-[0.2em] text-white/70">
              GETTING THERE
            </p>
            <h2 className="mt-2 font-heading text-[clamp(2rem,6vw,3.5rem)] leading-[0.9] text-white">
              ELM FARM
            </h2>
            <p className="mt-4 text-lg text-white/70">
              {CLUB.ground.fullAddress}
            </p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block border-2 border-white/30 px-6 py-2.5 font-heading text-base tracking-wider text-white transition-colors hover:border-white"
            >
              OPEN IN GOOGLE MAPS &rarr;
            </a>
          </ScrollReveal>

          <ScrollReveal className="stagger-children mt-10 grid gap-8 md:grid-cols-3">
            {TOURNAMENT.directions.map((route) => (
              <div
                key={route.from}
                className="animate-fade-in-up border-t border-white/15 pt-5"
              >
                <p className="font-heading text-lg tracking-wide text-falcon-red-light">
                  {route.from}
                </p>
                <ol className="mt-3 space-y-2">
                  {route.steps.map((step, i) => (
                    <li key={step} className="flex gap-3 text-sm text-white/70">
                      <span className="font-heading text-white/70">{i + 1}</span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
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
                Any questions or unsure of the arrangements? Give Andrew a call.
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
