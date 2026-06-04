import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PRESENTATION, CLUB } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Presentation Night 2026",
  description:
    "Running order and information for Feering Falcons Presentation Night 2026. Friday 5th June at Feering Village Hall, celebrating our players and their season.",
};

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

type Session = (typeof PRESENTATION.sessions)[number];
type ScheduleItem = Session["schedule"][number];

function isHighlight(type: ScheduleItem["type"]) {
  return type === "break" || type === "awards" || type === "close";
}

/* ── Small inline icons for the info points ── */
function InfoIcon({ name }: { name: string }) {
  const common = {
    className: "h-6 w-6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
  };
  switch (name) {
    case "drink":
      return (
        <svg {...common}>
          <path d="M6 4h12l-1.5 9a4 4 0 0 1-4 3.5h-1A4 4 0 0 1 7.5 13L6 4Z" />
          <path d="M12 16.5V21M8.5 21h7M7 8h10" />
        </svg>
      );
    case "speaker":
      return (
        <svg {...common}>
          <path d="M12 14a3.5 3.5 0 0 0 3.5-3.5V6a3.5 3.5 0 1 0-7 0v4.5A3.5 3.5 0 0 0 12 14Z" />
          <path d="M5.5 10.5a6.5 6.5 0 0 0 13 0M12 17.5V21M9 21h6" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5V12l3 2" />
        </svg>
      );
    case "trophy":
      return (
        <svg {...common}>
          <path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" />
          <path d="M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3M9.5 14.5 9 19h6l-.5-4.5M8 21h8" />
        </svg>
      );
    default:
      return null;
  }
}

const INFO_ICONS = ["drink", "speaker", "clock", "trophy"];

function SessionRunOrder({ session }: { session: Session }) {
  const doorsNote = "doorsNote" in session ? session.doorsNote : undefined;

  return (
    <ScrollReveal className="overflow-hidden border border-falcon-border bg-white shadow-sm shadow-falcon-charcoal/5">
      {/* Header strip */}
      <div className="flex flex-col gap-4 bg-falcon-charcoal px-6 py-6 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="font-heading text-sm tracking-[0.2em] text-falcon-red-light">
            {session.title}
          </p>
          <h3 className="mt-1 font-heading text-3xl leading-none text-white sm:text-4xl">
            {session.ages}
          </h3>
        </div>
        <div className="sm:text-right">
          <span className="inline-block border border-white/20 bg-white/5 px-4 py-2 font-heading text-base tracking-wide text-white sm:text-lg">
            DOORS OPEN&nbsp;
            <span className="text-falcon-red-light">{session.doors}</span>
          </span>
        </div>
      </div>

      {doorsNote ? (
        <p className="border-b border-falcon-border bg-falcon-cream px-6 py-3 text-sm italic text-falcon-charcoal/60 sm:px-8">
          {doorsNote}
        </p>
      ) : null}

      {/* Timeline */}
      <ol className="relative px-6 py-6 sm:px-8 sm:py-8">
        {/* spine */}
        <span
          aria-hidden
          className="absolute bottom-8 left-[4.75rem] top-8 w-px bg-falcon-border sm:left-[6.25rem]"
        />
        {session.schedule.map((item) => {
          const highlight = isHighlight(item.type);
          return (
            <li
              key={`${item.time}-${item.label}`}
              className="relative flex items-start gap-4 py-2.5 sm:gap-6"
            >
              {/* time */}
              <span className="w-16 shrink-0 pt-0.5 text-right font-heading text-base tabular-nums tracking-wide text-falcon-red sm:w-20 sm:text-lg">
                {item.time}
              </span>

              {/* node dot */}
              <span
                aria-hidden
                className={`relative z-10 mt-1.5 h-3 w-3 shrink-0 rotate-45 border-2 ${
                  highlight
                    ? "border-falcon-red bg-falcon-red"
                    : "border-falcon-red bg-falcon-cream"
                }`}
              />

              {/* content */}
              {highlight ? (
                <div
                  className={`min-w-0 flex-1 px-4 py-2.5 ${
                    item.type === "awards"
                      ? "bg-falcon-red text-white"
                      : item.type === "close"
                        ? "bg-falcon-charcoal text-white"
                        : "border border-dashed border-falcon-red/50 bg-falcon-red/5 text-falcon-red"
                  }`}
                >
                  <p className="font-heading text-lg tracking-wide sm:text-xl">
                    {item.label}
                  </p>
                  {"person" in item && item.person ? (
                    <p
                      className={`text-sm ${
                        item.type === "awards" ? "text-white/70" : "text-falcon-red/70"
                      }`}
                    >
                      {item.person}
                    </p>
                  ) : null}
                </div>
              ) : (
                <div className="min-w-0 flex-1 pb-1">
                  <p className="font-heading text-xl leading-tight tracking-wide text-falcon-charcoal sm:text-2xl">
                    {item.label}
                  </p>
                  {"person" in item && item.person ? (
                    <p className="text-sm text-falcon-charcoal/55 sm:text-base">
                      {item.type === "welcome" ? "" : "Manager: "}
                      {item.person}
                    </p>
                  ) : null}
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </ScrollReveal>
  );
}

export default function PresentationPage() {
  return (
    <article>
      {/* ── Hero ── */}
      <section className="section-angle relative overflow-hidden bg-falcon-charcoal pb-28 pt-16 sm:pb-36 sm:pt-24">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={`${base}/player.png`}
            alt=""
            fill
            className="object-cover object-[75%_center] opacity-20 sm:opacity-25"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-falcon-charcoal via-falcon-charcoal/70 to-falcon-charcoal/90" />
        </div>

        <Container className="relative">
          <ScrollReveal animation="animate-slide-in-left">
            <p className="font-heading text-sm tracking-[0.25em] text-falcon-red-light">
              {PRESENTATION.date.toUpperCase()} &middot; {PRESENTATION.venue.toUpperCase()}
            </p>
            <h1 className="mt-4 font-heading text-[clamp(3rem,11vw,8.5rem)] leading-[0.8] tracking-tight text-white">
              PRESENTATION
              <br />
              <span className="text-falcon-red-light">NIGHT 2026</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
              {PRESENTATION.intro}
            </p>
          </ScrollReveal>

          {/* Fact chips */}
          <ScrollReveal className="mt-10 grid max-w-3xl grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-4">
            {[
              { k: "DATE", v: "Fri 5 June" },
              { k: "VENUE", v: PRESENTATION.venue },
              { k: "SESSIONS", v: "Two" },
              { k: "DOORS FROM", v: "6:00pm" },
            ].map((f) => (
              <div key={f.k} className="bg-falcon-charcoal px-4 py-4">
                <p className="font-heading text-[0.7rem] tracking-[0.2em] text-falcon-red-light">
                  {f.k}
                </p>
                <p className="mt-1 font-heading text-lg tracking-wide text-white sm:text-xl">
                  {f.v}
                </p>
              </div>
            ))}
          </ScrollReveal>
        </Container>
      </section>

      {/* ── Before you arrive ── */}
      <section className="py-16 sm:py-24">
        <Container>
          <ScrollReveal>
            <p className="font-heading text-sm tracking-[0.2em] text-falcon-charcoal/30">
              A FEW THINGS TO KNOW
            </p>
            <h2 className="mt-2 font-heading text-[clamp(2rem,6vw,3.5rem)] leading-[0.9] text-falcon-charcoal">
              BEFORE YOU ARRIVE
            </h2>
          </ScrollReveal>

          <ScrollReveal className="stagger-children mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {PRESENTATION.info.map((item, i) => (
              <div
                key={item}
                className="animate-fade-in-up flex gap-4 border-t border-falcon-border pt-6"
              >
                <span className="shrink-0 text-falcon-red">
                  <InfoIcon name={INFO_ICONS[i] ?? "clock"} />
                </span>
                <p className="leading-relaxed text-falcon-charcoal/75">{item}</p>
              </div>
            ))}
          </ScrollReveal>

          <ScrollReveal>
            <p className="mt-12 font-heading text-2xl tracking-wide text-falcon-red sm:text-3xl">
              THANK YOU FOR YOUR SUPPORT.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── Session selector ── */}
      <section className="section-angle-both bg-falcon-charcoal py-20 sm:py-28">
        <Container>
          <ScrollReveal>
            <p className="font-heading text-sm tracking-[0.2em] text-white/30">
              NOW FIND YOUR SESSION
            </p>
            <h2 className="mt-2 font-heading text-[clamp(1.8rem,5vw,3rem)] leading-[0.9] text-white">
              WHICH ONE ARE YOU?
            </h2>
          </ScrollReveal>

          <ScrollReveal className="stagger-children mt-8 grid gap-5 sm:grid-cols-2">
            {PRESENTATION.sessions.map((session) => (
              <a
                key={session.title}
                href={`#${session.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="group animate-fade-in-up flex items-center justify-between gap-4 border-l-4 border-falcon-red bg-white p-6 shadow-sm shadow-black/20 transition-all hover:-translate-y-0.5 hover:shadow-lg sm:p-8"
              >
                <div>
                  <p className="font-heading text-sm tracking-[0.2em] text-falcon-red">
                    {session.title} &middot; Doors {session.doors}
                  </p>
                  <p className="mt-2 font-heading text-3xl leading-none text-falcon-charcoal transition-colors group-hover:text-falcon-red sm:text-4xl">
                    {session.ages}
                  </p>
                </div>
                <span
                  aria-hidden
                  className="font-heading text-3xl text-falcon-red transition-transform group-hover:translate-x-1"
                >
                  &darr;
                </span>
              </a>
            ))}
          </ScrollReveal>
        </Container>
      </section>

      {/* ── Running order ── */}
      <section className="py-16 sm:py-24">
        <Container>
          <ScrollReveal>
            <p className="font-heading text-sm tracking-[0.2em] text-falcon-charcoal/30">
              PROGRAMME OF THE EVENING
            </p>
            <h2 className="mt-2 font-heading text-[clamp(2.5rem,8vw,5rem)] leading-[0.85] text-falcon-charcoal">
              RUNNING
              <br />
              ORDER
            </h2>
            <p className="mt-5 max-w-xl text-lg text-falcon-charcoal/60">
              We&apos;re a growing club with lots of teams to celebrate. Please
              have your child at the front with their team, ready for their turn
              on stage.
            </p>
          </ScrollReveal>

          <div className="mt-12 space-y-12">
            {PRESENTATION.sessions.map((session) => (
              <div
                key={session.title}
                id={session.title.toLowerCase().replace(/\s+/g, "-")}
                className="scroll-mt-24"
              >
                <SessionRunOrder session={session} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Closing ── */}
      <section className="section-angle bg-falcon-red py-20 text-white sm:py-28">
        <Container>
          <ScrollReveal>
            <p className="font-heading text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.85]">
              SEE YOU
              <br />
              THERE.
            </p>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              Every child who pulls on a {CLUB.shortName} shirt deserves their
              moment on stage. We can&apos;t wait to celebrate the season with
              you at {PRESENTATION.venue}.
            </p>
          </ScrollReveal>
        </Container>
      </section>
    </article>
  );
}
