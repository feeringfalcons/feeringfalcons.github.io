import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Policies & Procedures",
  description:
    "Club policies and procedures for Feering Falcons Youth Football Club — constitution, code of conduct, safeguarding, and more.",
};

const policies = [
  {
    title: "Club Constitution",
    description:
      "Our club constitution sets out the rules and procedures that guide how we operate as a youth football club, ensuring we maintain our standards and values.",
    href: "/documents/constitution.pdf",
  },
  {
    title: "Code of Conduct",
    description:
      "Our code of conduct outlines the behaviour and standards we expect from all players, parents, coaches, and officials to maintain a positive and respectful environment for everyone at the club.",
    href: "/documents/code-of-conduct.pdf",
  },
  {
    title: "Child Protection Policy",
    description:
      "Our child protection policy ensures the safety and wellbeing of all young players in our care, setting out clear procedures and safeguards to create a secure environment where children can enjoy football.",
    href: "/documents/child-protection-policy.pdf",
    safeguardingLink: true,
  },
  {
    title: "Complaints Procedure",
    description:
      "Sets out the steps for raising and resolving complaints within the club, ensuring all concerns are handled fairly and transparently.",
    href: "/documents/complaints-procedure.pdf",
  },
  {
    title: "Equality Policy",
    description:
      "Our commitment to equality and inclusion, ensuring football at Feering Falcons is open and welcoming to everyone.",
    href: "/documents/equality-policy.pdf",
  },
  {
    title: "Data Protection Policy",
    description:
      "How we collect, store, and protect the personal data of our players, parents, and volunteers.",
    href: "/documents/feering-falcons-data-protection-policy.pdf",
  },
  {
    title: "Privacy Notice",
    description:
      "Details of how your personal information is used when you interact with the club.",
    href: "/documents/feering-falcons-privacy-notice.pdf",
  },
  {
    title: "FA Whole Game System Privacy Policy",
    description:
      "The Football Association's privacy policy covering the Whole Game System used for player and team registrations.",
    href: "/documents/the-fa-whole-game-system-privacy-policy.pdf",
  },
];

export default function PoliciesPage() {
  return (
    <>
      <section className="bg-falcon-grey py-12 sm:py-16">
        <Container>
          <h1 className="font-heading text-4xl font-bold text-falcon-charcoal sm:text-5xl">
            Policies &amp; Procedures
          </h1>
          <p className="mt-3 text-falcon-charcoal/60">2025/26 Season</p>
        </Container>
      </section>

      <Container className="py-12 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {policies.map((policy) => (
            <div
              key={policy.title}
              className="flex flex-col border-l-4 border-falcon-red bg-white p-6 shadow-sm"
            >
              <h2 className="font-heading text-lg font-bold text-falcon-charcoal">
                {policy.title}
              </h2>
              <p className="mt-2 grow text-sm text-falcon-charcoal/70">
                {policy.description}
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href={policy.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-falcon-red hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                  Download PDF
                </a>
                {policy.safeguardingLink && (
                  <Link
                    href="/safeguarding"
                    className="text-sm text-falcon-charcoal/60 hover:text-falcon-red"
                  >
                    View Safeguarding page &rarr;
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
