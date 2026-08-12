import { CLUB } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * Four facts, straight after the hero. A prospective parent should be able to
 * size the club up before they scroll — established, big enough to have a team
 * for their child, and FA accredited.
 */
const STATS = [
  { figure: CLUB.founded.toString(), label: "Established" },
  { figure: CLUB.teams.length.toString(), label: "Teams, Fledglings to U13" },
  { figure: CLUB.playerCount, label: "Players every week" },
  { figure: "FA", label: "England Football Accredited" },
];

export function ProofStrip() {
  return (
    <section className="border-b-2 border-falcon-border py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <dl className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:gap-y-0">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={
                  i > 0
                    ? "sm:border-l-2 sm:border-falcon-border sm:pl-6"
                    : undefined
                }
              >
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-heading text-[clamp(2.75rem,7vw,4.5rem)] leading-[0.85] text-falcon-red">
                    {s.figure}
                  </span>
                  <span className="mt-2 block max-w-[10rem] font-heading text-sm tracking-widest text-falcon-charcoal/70">
                    {s.label.toUpperCase()}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </ScrollReveal>
      </div>
    </section>
  );
}
