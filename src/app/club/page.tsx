import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ContactForm } from "@/components/ui/ContactForm";
import { CLUB, POLICIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Club Info",
  description:
    "Everything you need to know about Feering Falcons Youth Football Club — location, safeguarding, policies, and contact details.",
};

export default function ClubInfoPage() {
  return (
    <>
      {/* Anchor nav */}
      <nav className="border-b border-falcon-border pt-12 sm:pt-20">
        <Container>
          <div className="flex flex-wrap gap-x-4 gap-y-1 pb-4">
            {[
              { label: "Find Us", href: "#find-us" },
              { label: "Officers", href: "#officers" },
              { label: "Safeguarding", href: "#safeguarding" },
              { label: "Policies", href: "#policies" },
              { label: "Contact", href: "#contact" },
            ].map((link, i, arr) => (
              <span key={link.href} className="flex items-center gap-4">
                <a
                  href={link.href}
                  className="font-heading text-sm tracking-wider text-falcon-charcoal/50 transition-colors hover:text-falcon-red"
                >
                  {link.label.toUpperCase()}
                </a>
                {i < arr.length - 1 && (
                  <span className="text-falcon-red/30">/</span>
                )}
              </span>
            ))}
          </div>
        </Container>
      </nav>

      {/* Opening — leads with the map, no red hero */}
      <section id="find-us" className="pt-8 pb-16 sm:pt-12 sm:pb-20">
        <Container>
          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
              <div className="lg:col-span-2">
                <p className="font-heading text-sm tracking-widest text-falcon-charcoal/30">
                  HOME GROUND
                </p>
                <h1 className="mt-3 font-heading text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.85] tracking-tight text-falcon-charcoal">
                  ELM
                  <br />
                  <span className="text-falcon-red">FARM</span>
                </h1>
                <div className="mt-6 border-l-4 border-falcon-red pl-6">
                  <p className="text-lg text-falcon-charcoal/80">
                    {CLUB.ground.fullAddress}
                  </p>
                  <p className="mt-1 text-sm text-falcon-charcoal/50">
                    Use {CLUB.ground.postcode} for sat nav
                  </p>
                </div>
                <p className="mt-6 text-falcon-charcoal/60">
                  We also use {CLUB.secondGround.name} for 7-a-side games.
                </p>
              </div>
              <div className="overflow-hidden border-2 border-falcon-border lg:col-span-3">
                <iframe
                  src={`https://maps.google.com/maps?q=${CLUB.ground.mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="400"
                  className="border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map showing ${CLUB.ground.name}`}
                />
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Officers — compact */}
      <section id="officers" className="border-t border-falcon-border py-12 sm:py-16">
        <Container>
          <ScrollReveal>
            <h2 className="font-heading text-2xl text-falcon-charcoal sm:text-3xl">
              CLUB OFFICERS
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { role: "Chairman", ...CLUB.officers.chairman },
                { role: "Secretary", ...CLUB.officers.secretary },
                { role: "Treasurer", ...CLUB.officers.treasurer },
                { role: "Welfare Officer", ...CLUB.officers.childWelfare },
              ].map((officer) => (
                <div key={officer.role}>
                  <p className="font-heading text-sm tracking-widest text-falcon-red">
                    {officer.role.toUpperCase()}
                  </p>
                  <p className="mt-1 text-lg font-medium text-falcon-charcoal">
                    {officer.name}
                  </p>
                  <a
                    href={`mailto:${officer.email}`}
                    className="text-sm text-falcon-charcoal/50 hover:text-falcon-red"
                  >
                    {officer.email}
                  </a>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Safeguarding — red, serious */}
      <section id="safeguarding" className="bg-falcon-red py-16 sm:py-20">
        <Container>
          <ScrollReveal>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="font-heading text-3xl text-white sm:text-4xl">
                  SAFEGUARDING
                </h2>
                <p className="mt-6 text-lg text-white/80">
                  The safety and wellbeing of every young player is our highest
                  priority. Feering Falcons is committed to providing a safe
                  environment for children to enjoy football.
                </p>

                <div className="mt-8 border-l-4 border-white/30 pl-6">
                  <p className="font-heading text-lg text-white">
                    CLUB WELFARE OFFICER
                  </p>
                  <p className="mt-2 text-white/80">
                    <span className="font-medium text-white">
                      {CLUB.officers.childWelfare.name}
                    </span>
                    {" — "}
                    <a
                      href={`mailto:${CLUB.officers.childWelfare.email}`}
                      className="text-white/70 underline hover:text-white"
                    >
                      {CLUB.officers.childWelfare.email}
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <ul className="space-y-3">
                  {[
                    "All coaches and volunteers are DBS-checked",
                    "Coaches hold FA qualifications and first aid training",
                    "We follow the FA's Safeguarding Children Policy",
                    "Clear reporting procedures for any concerns",
                    "Regular safeguarding training for all staff",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2.5 w-2.5 shrink-0 bg-white" />
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <p className="font-heading text-lg text-white">
                    REPORT A CONCERN
                  </p>
                  <div className="mt-3 space-y-2 text-white/70">
                    <p>
                      Speak to the Welfare Officer or any team manager
                    </p>
                    <p>
                      FA Safeguarding:{" "}
                      <a href="tel:08001691863" className="text-white hover:underline">
                        0800 169 1863
                      </a>
                    </p>
                    <p>
                      NSPCC:{" "}
                      <a href="tel:08088005000" className="text-white hover:underline">
                        0808 800 5000
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Policies — simple list */}
      <section id="policies" className="py-16 sm:py-20">
        <Container>
          <ScrollReveal>
            <h2 className="font-heading text-2xl text-falcon-charcoal sm:text-3xl">
              POLICIES & PROCEDURES
            </h2>
            <p className="mt-1 text-sm text-falcon-charcoal/40">
              2025/26 Season
            </p>
            <div className="mt-6">
              {POLICIES.map((policy) => (
                <a
                  key={policy.title}
                  href={policy.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-falcon-border py-4 transition-colors hover:border-falcon-red"
                >
                  <span className="font-medium text-falcon-charcoal group-hover:text-falcon-red">
                    {policy.title}
                  </span>
                  <span className="flex items-center gap-2 text-sm text-falcon-charcoal/30 group-hover:text-falcon-red">
                    <span className="hidden sm:inline">PDF</span>
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
            <div className="mt-4">
              <a
                href="https://www.thefa.com/football-rules-governance/safeguarding"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-falcon-red hover:underline"
              >
                FA Safeguarding Resources &rarr;
              </a>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Contact — charcoal section */}
      <section id="contact" className="bg-falcon-charcoal py-16 sm:py-20">
        <Container>
          <ScrollReveal>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="font-heading text-3xl text-white sm:text-4xl">
                  GET IN TOUCH
                </h2>
                <p className="mt-4 text-white/60">
                  Got a question about the club? Drop us a message and
                  we&apos;ll get back to you.
                </p>
                <p className="mt-6 text-white/60">
                  Or find us on{" "}
                  <a
                    href={CLUB.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 underline hover:text-white"
                  >
                    Facebook
                  </a>
                  {" and "}
                  <a
                    href={CLUB.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 underline hover:text-white"
                  >
                    Instagram
                  </a>
                  .
                </p>
              </div>
              <div className="bg-falcon-cream p-6 sm:p-8">
                <ContactForm />
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
