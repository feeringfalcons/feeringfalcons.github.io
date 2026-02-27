import Link from "next/link";
import { CLUB } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function UpdateCards() {
  return (
    <>
      {/* Tournament banner — the main event */}
      <section className="section-angle-both bg-falcon-charcoal py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="font-heading text-sm tracking-widest text-white/30">
              COMING UP
            </p>
            <h2 className="mt-3 font-heading text-[clamp(2.5rem,7vw,5rem)] leading-[0.85] text-white">
              5-A-SIDE
              <br />
              TOURNAMENT
            </h2>
            <p className="mt-4 max-w-lg text-lg text-white/60">
              Saturday 13th June 2026. Teams from across the region at Elm Farm.
              U7 through U15, £50 per team.
            </p>
            <Link
              href="/tournament"
              className="mt-8 inline-block bg-falcon-red px-8 py-3 font-heading text-lg tracking-wider text-white transition-colors hover:bg-falcon-red-dark"
            >
              ENTER NOW &rarr;
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Two tight CTAs */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="stagger-children grid gap-0 sm:grid-cols-2">
            <Link
              href="/about#join"
              className="group border-b-2 border-falcon-border p-8 transition-colors hover:border-falcon-red sm:border-b-0 sm:border-r-2 animate-fade-in-up"
            >
              <p className="font-heading text-sm tracking-widest text-falcon-charcoal/30">
                NEW PLAYERS
              </p>
              <h3 className="mt-2 font-heading text-3xl text-falcon-charcoal transition-colors group-hover:text-falcon-red sm:text-4xl">
                ALL ABILITIES
                <br />
                WELCOME
              </h3>
              <p className="mt-3 max-w-xs text-falcon-charcoal/60">
                {CLUB.teams.length} teams, Fledglings to U14. Come along and see
                what we&apos;re about.
              </p>
            </Link>

            <Link
              href="/club#find-us"
              className="group p-8 transition-colors animate-fade-in-up"
            >
              <p className="font-heading text-sm tracking-widest text-falcon-charcoal/30">
                HOME GROUND
              </p>
              <h3 className="mt-2 font-heading text-3xl text-falcon-charcoal transition-colors group-hover:text-falcon-red sm:text-4xl">
                ELM FARM
                <br />
                MARKS TEY
              </h3>
              <p className="mt-3 max-w-xs text-falcon-charcoal/60">
                {CLUB.ground.fullAddress}. Matchdays, training, and The
                Nest.
              </p>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
