import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { UpdateCards } from "@/components/home/UpdateCards";
import { PRESENTATION } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Timely banner — Presentation Night */}
      <section className="bg-falcon-red-dark py-5">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p className="font-heading text-lg tracking-wide text-white sm:text-xl">
            <span className="text-white/60">PRESENTATION NIGHT</span>{" "}
            {PRESENTATION.date.toUpperCase()} &middot; {PRESENTATION.venue.toUpperCase()}
          </p>
          <Link
            href="/presentation"
            className="shrink-0 self-start bg-white px-6 py-2 font-heading text-base tracking-wider text-falcon-red transition-colors hover:bg-falcon-cream sm:self-auto"
          >
            RUNNING ORDER &amp; INFO &rarr;
          </Link>
        </div>
      </section>

      <UpdateCards />
    </>
  );
}
