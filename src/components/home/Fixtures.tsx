import { CLUB } from "@/lib/constants";
import { FullTimeSnippet } from "./FullTimeSnippet";

/**
 * Upcoming fixtures from FA Full-Time.
 *
 * Fixtures only, deliberately — no results or tables. Leagues don't publish
 * results at U11 and below, so a results feed would show U12s and U13s alone,
 * putting exactly the scorelines the club plays down front and centre while
 * younger teams are shielded from the same. "Development over results" is the
 * club's own line; the site should hold to it.
 *
 * Why this is an embed and not our own data: Full-Time publishes no API and no
 * iCal feed, its robots.txt is `User-agent: * / Disallow: /`, and the fixture
 * data is not in the server-rendered HTML anyway — it is injected client-side.
 * So there is nothing to fetch at build time, and the official code snippet is
 * the supported route. See FullTimeSnippet.tsx for how it is made to look
 * native rather than bolted on.
 *
 * Add feeds by filling in CLUB.fullTime.snippets. With none configured this
 * renders a link-out card, so the section is never broken or empty.
 */
export function Fixtures() {
  const { snippets, publicUrl } = CLUB.fullTime;

  return (
    <section id="fixtures" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-heading text-sm tracking-widest text-falcon-charcoal/70">
              UPCOMING
            </p>
            <h2 className="mt-2 font-heading text-[clamp(2rem,5vw,3.5rem)] leading-[0.9] text-falcon-charcoal">
              FIXTURES
            </h2>
          </div>
          <a
            href={publicUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading text-sm tracking-wider text-falcon-red hover:underline"
          >
            ALL FIXTURES ON FA FULL-TIME &rarr;
          </a>
        </div>

        {snippets.length > 0 ? (
          <div
            className={`mt-8 grid gap-8 ${
              snippets.length > 1 ? "lg:grid-cols-2" : ""
            }`}
          >
            {snippets.map((s) => (
              <FullTimeSnippet
                key={s.code}
                code={s.code}
                label={s.label}
                fallbackUrl={publicUrl}
              />
            ))}
          </div>
        ) : (
          <div className="mt-8 border-2 border-falcon-charcoal">
            <div className="flex items-center justify-between bg-falcon-charcoal px-4 py-2">
              <p className="font-heading text-sm tracking-widest text-white/70">
                FA FULL-TIME
              </p>
              <span className="h-2 w-2 rotate-45 bg-falcon-red" aria-hidden="true" />
            </div>
            <div className="bg-white px-6 py-10 text-center">
              <p className="text-falcon-charcoal/70">
                Fixtures, results and league tables for every Feering Falcons
                team are published on FA Full-Time.
              </p>
              <a
                href={publicUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-falcon-red px-8 py-3 font-heading text-lg tracking-wider text-white transition-colors hover:bg-falcon-red-dark"
              >
                VIEW FIXTURES &rarr;
              </a>
            </div>
          </div>
        )}

        <p className="mt-3 text-sm text-falcon-charcoal/70">
          Fixtures are maintained by the leagues on FA Full-Time and can change
          at short notice — always check with your team manager.
        </p>
      </div>
    </section>
  );
}
