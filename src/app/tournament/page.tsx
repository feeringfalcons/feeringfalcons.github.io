import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Countdown } from "@/components/tournament/Countdown";
import { WhatsAppShare } from "@/components/tournament/WhatsAppShare";
import { TOURNAMENT, CLUB } from "@/lib/constants";

const shareTitle = `5-A-Side Tournament · Sat 12 June ${TOURNAMENT.nextYear}`;
const shareDescription =
  "Feering Falcons 5-a-side at Elm Farm, Marks Tey. Under 7s to Under 15s, over 100 teams and a BBQ all day. Entries open soon.";

export const metadata: Metadata = {
  title: "5-A-Side Tournament",
  description: `The Feering Falcons 5-A-Side Tournament returns to Elm Farm on ${TOURNAMENT.date}. Under 7s to Under 15s. Entries open soon.`,
  // A page-level openGraph replaces the layout's wholesale, so the shared
  // fields are repeated. Without this, a link pasted into WhatsApp previews
  // as the generic club card ("Register your interest in playing").
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Feering Falcons Youth Football Club",
    title: shareTitle,
    description: shareDescription,
    url: "/tournament",
    images: [
      {
        url: "/tournament-og.jpg",
        width: 1200,
        height: 630,
        alt: `Feering Falcons 5-a-side tournament, Saturday 12 June ${TOURNAMENT.nextYear}, Elm Farm, Marks Tey. Under 7 to Under 15.`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: shareTitle,
    description: shareDescription,
    images: ["/tournament-og.jpg"],
  },
};

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${CLUB.ground.mapQuery}`;

const FACTS = [
  { label: "WHERE", value: "Elm Farm, Marks Tey" },
  { label: "AGES", value: "U7 to U15" },
  { label: "TEAMS", value: "Over 100" },
  { label: "ENTRIES", value: "Opening soon" },
];

// How the day runs, from the 2026 information letter and rules sheet.
const THE_DAY = [
  {
    stat: "100+",
    title: "TEAMS",
    body: "Clubs from right across the region, in every age group from Under 7s to Under 15s.",
  },
  {
    stat: "AM / PM",
    title: "TWO SESSIONS",
    body: "Age groups are split between a morning and an afternoon session, so you are not there all day.",
  },
  {
    stat: "5 MINS",
    title: "EACH WAY",
    body: "Short, fast group games mean lots of matches for every team. Then quarter-finals, semis and a final.",
  },
  {
    stat: "BBQ",
    title: "ALL DAY",
    body: "Bacon, sausages and burgers off the BBQ all day, plus a cake stall and hot and cold drinks.",
  },
];

/**
 * The page coaches land on from a WhatsApp link: date set, entries not open.
 *
 * The first screen on a phone answers what a coach needs to decide: when,
 * where, which ages, and how to pass it on. The day-of detail (registration
 * times, the full rules, the entry form) still lives in constants.ts and the
 * EntryForm component, ready to come back when entries open.
 */
export default function TournamentPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-falcon-red pb-14 pt-14 sm:pb-20 sm:pt-20">
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, decorative */}
        <img
          src={`${base}/logo.png`}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-10 hidden w-[30rem] opacity-[0.12] lg:block xl:-right-10"
        />
        <Container className="relative">
          <p className="font-heading text-sm tracking-widest text-white/90 sm:text-base">
            FEERING FALCONS PRESENT
          </p>
          {/* 12vw/10rem keeps "TOURNAMENT" inside the content column at every
              breakpoint; any wider and the page scrolls sideways. */}
          <h1 className="mt-3 font-heading text-[clamp(2.5rem,12vw,10rem)] leading-[0.78] tracking-tight text-white">
            5-A-SIDE
            <br />
            TOURNAMENT
          </h1>

          {/* The date on an angled white band that runs off the left edge:
              the falcon-wing motif, and the one fact everyone is looking for. */}
          <div className="-ml-4 mt-8 inline-block bg-white py-2 pl-4 pr-10 [clip-path:polygon(0_0,100%_0,calc(100%-1.5rem)_100%,0_100%)] sm:-ml-6 sm:mt-10 sm:pl-6 sm:pr-14 lg:-ml-8 lg:pl-8">
            <p className="font-heading text-[clamp(1.9rem,8.5vw,5rem)] leading-none tracking-wide text-falcon-red">
              <time dateTime={TOURNAMENT.dateISO}>
                {TOURNAMENT.date.toUpperCase()}
              </time>
            </p>
          </div>
          <Countdown
            dateISO={TOURNAMENT.dateISO}
            className="mt-4 font-heading text-2xl tracking-widest text-white sm:text-3xl"
          />

          <dl className="mt-8 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-5 border-t border-white/30 pt-6 sm:grid-cols-4">
            {FACTS.map((fact) => (
              <div key={fact.label}>
                <dt className="font-heading text-sm tracking-[0.2em] text-white/75">
                  {fact.label}
                </dt>
                <dd className="mt-1 font-heading text-xl leading-tight text-white sm:text-2xl">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <WhatsAppShare />
            <a
              href={`mailto:${TOURNAMENT.contact.email}`}
              className="border-2 border-white/60 px-7 py-3 font-heading text-lg tracking-wider text-white transition-colors hover:border-white hover:bg-white/10"
            >
              QUESTIONS? EMAIL US
            </a>
          </div>
        </Container>
      </section>

      {/* ── The day ── */}
      <section className="py-16 sm:py-24">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="font-heading text-sm tracking-[0.2em] text-falcon-red">
                THE DAY
              </p>
              <h2 className="mt-2 font-heading text-[clamp(2.25rem,7vw,4.5rem)] leading-[0.9] text-falcon-charcoal">
                A FULL DAY OF FOOTBALL AT ELM FARM
              </h2>
              <p className="mt-6 text-xl leading-relaxed text-falcon-charcoal/80">
                Every June, Elm Farm fills up with teams and families from
                right across the region for the biggest day in the Feering
                Falcons calendar. Pitches marked out across the whole ground,
                games going on all day, and a proper grassroots atmosphere
                from first whistle to last.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="stagger-children mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {THE_DAY.map((item) => (
              <div
                key={item.title}
                className="animate-fade-in-up border-b-4 border-falcon-red bg-white p-6 shadow-sm [clip-path:polygon(0_0,calc(100%-1.5rem)_0,100%_1.5rem,100%_100%,0_100%)]"
              >
                <p className="font-heading text-5xl leading-none text-falcon-red">
                  {item.stat}
                </p>
                <p className="mt-1 font-heading text-xl tracking-wider text-falcon-charcoal">
                  {item.title}
                </p>
                <p className="mt-3 leading-relaxed text-falcon-charcoal/75">
                  {item.body}
                </p>
              </div>
            ))}
          </ScrollReveal>

          {/* The flypast follows Trooping the Colour, held on a Saturday in
              mid-June. Expected 12 June 2027 but not officially announced as
              of Nov 2026, so the copy says "usually" about the route. Check
              this each year: if the dates stop lining up, take it out. */}
          <ScrollReveal className="mt-4">
            <div className="bg-falcon-red p-6 text-white sm:p-8 [clip-path:polygon(0_0,100%_0,calc(100%-2rem)_100%,0_100%)]">
              <p className="font-heading text-sm tracking-[0.2em] text-white/80">
                KEEP AN EYE ON THE SKY AROUND LUNCHTIME
              </p>
              <p className="mt-1 font-heading text-[clamp(2rem,6vw,3.5rem)] leading-[0.9]">
                THE KING&apos;S BIRTHDAY FLYPAST
              </p>
              <p className="mt-3 max-w-2xl pr-6 text-lg leading-relaxed text-white/90">
                The RAF flypast for the King&apos;s Birthday falls on tournament
                day again in {TOURNAMENT.nextYear}, and its route into London
                usually brings it straight over the ground.
              </p>
            </div>
          </ScrollReveal>

          <p className="mt-6 text-sm text-falcon-charcoal/70">
            Based on how the {TOURNAMENT.lastHeld.year} tournament ran. Times,
            the format and the full rules are confirmed when entries open.
          </p>
        </Container>
      </section>

      {/* ── Pass it on ── */}
      <section className="section-angle-both bg-falcon-charcoal py-20 sm:py-28">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="font-heading text-sm tracking-[0.2em] text-white/70">
                ENTRIES OPEN SOON
              </p>
              <h2 className="mt-2 font-heading text-[clamp(2.25rem,7vw,4rem)] leading-[0.9] text-white">
                GET IT IN YOUR CLUB&apos;S DIARY
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/80">
                Entries for {TOURNAMENT.nextYear} aren&apos;t open yet. When
                they are, the entry form, the fee and registration times will
                go up on this page. Until then, the most useful thing you can
                do is send it to the other managers at your club, so every
                team has the date in the diary.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <WhatsAppShare />
                <a
                  href={CLUB.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white/40 px-7 py-3 font-heading text-lg tracking-wider text-white transition-colors hover:border-white"
                >
                  FOLLOW ON FACEBOOK &rarr;
                </a>
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
              <p className="mt-1 text-lg text-white">
                Questions about the {TOURNAMENT.nextYear} tournament? Get in
                touch.
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
