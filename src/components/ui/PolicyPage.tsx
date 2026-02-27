import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CLUB } from "@/lib/constants";

export function PolicyPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="pt-12 pb-20 sm:pt-20 sm:pb-28">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Link
            href="/club#policies"
            className="inline-flex items-center gap-1 text-sm text-falcon-charcoal/50 transition-colors hover:text-falcon-red"
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Club Info
          </Link>

          <h1 className="mt-6 font-heading text-3xl tracking-tight text-falcon-charcoal sm:text-4xl">
            {title.toUpperCase()}
          </h1>

          <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-sm text-falcon-charcoal/40">
            <p>
              Chairman: {CLUB.officers.chairman.name} &mdash;{" "}
              <a
                href={`mailto:${CLUB.officers.chairman.email}`}
                className="hover:text-falcon-red"
              >
                {CLUB.officers.chairman.email}
              </a>
            </p>
            <p>
              Secretary: {CLUB.officers.secretary.name} &mdash;{" "}
              <a
                href={`mailto:${CLUB.officers.secretary.email}`}
                className="hover:text-falcon-red"
              >
                {CLUB.officers.secretary.email}
              </a>
            </p>
          </div>

          <div className="mt-10 space-y-6 text-falcon-charcoal/80 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:text-falcon-charcoal [&_h2]:sm:text-2xl [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-lg [&_h3]:text-falcon-charcoal [&_ol]:list-decimal [&_ol]:space-y-3 [&_ol]:pl-6 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_a]:text-falcon-red [&_a]:underline [&_a:hover]:text-falcon-red-dark">
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}
