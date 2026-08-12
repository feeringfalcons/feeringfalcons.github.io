import { CLUB } from "@/lib/constants";

/**
 * Fixtures & results, via the FA's official Full-Time embed.
 *
 * Why an iframe rather than build-time scraped data: fulltime.thefa.com sits
 * behind Cloudflare bot management and returns 403 to non-browser clients, so
 * a scheduled GitHub Action cannot fetch it. The official embed loads in the
 * visitor's own browser, which is the sanctioned route.
 *
 * The embed's internals are cross-origin and cannot be restyled, so instead we
 * frame it: club header bar, sharp corners, cream body, matching type. It
 * reads as a panel that belongs to the site rather than a foreign object
 * dropped onto it.
 *
 * Set CLUB.fullTime.embedUrl in constants.ts to switch it on. Until then this
 * renders a link-out card, so the section is never broken or empty.
 */
export function Fixtures() {
  const { embedUrl, publicUrl, height } = CLUB.fullTime;

  return (
    <section id="fixtures" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-heading text-sm tracking-widest text-falcon-charcoal/70">
              THIS WEEKEND
            </p>
            <h2 className="mt-2 font-heading text-[clamp(2rem,5vw,3.5rem)] leading-[0.9] text-falcon-charcoal">
              FIXTURES &amp; RESULTS
            </h2>
          </div>
          <a
            href={publicUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading text-sm tracking-wider text-falcon-red hover:underline"
          >
            FULL TABLES ON FA FULL-TIME &rarr;
          </a>
        </div>

        <div className="mt-8 border-2 border-falcon-charcoal">
          <div className="flex items-center justify-between bg-falcon-charcoal px-4 py-2">
            <p className="font-heading text-sm tracking-widest text-white/70">
              LIVE FROM FA FULL-TIME
            </p>
            <span className="h-2 w-2 rotate-45 bg-falcon-red" aria-hidden="true" />
          </div>

          {embedUrl ? (
            <iframe
              src={embedUrl}
              title="Feering Falcons fixtures and results, from FA Full-Time"
              loading="lazy"
              className="block w-full bg-white"
              style={{ height: `${height}px`, border: 0 }}
            />
          ) : (
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
          )}
        </div>

        <p className="mt-3 text-sm text-falcon-charcoal/70">
          Fixtures are maintained by the leagues on FA Full-Time and can change
          at short notice — always check with your team manager.
        </p>
      </div>
    </section>
  );
}
