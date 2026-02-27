import Image from "next/image";
import Link from "next/link";
import { CLUB } from "@/lib/constants";

export function Hero() {
  return (
    <section className="bg-falcon-grey py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <Image
          src="/logo.png"
          alt="Feering Falcons Youth Football Club"
          width={200}
          height={200}
          className="mx-auto h-36 w-auto sm:h-48 lg:h-56"
          priority
        />

        <h1 className="mx-auto mt-6 max-w-2xl font-heading text-3xl font-bold tracking-tight text-falcon-charcoal sm:text-4xl lg:text-5xl">
          {CLUB.tagline}
        </h1>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          {CLUB.values.map((value) => (
            <div
              key={value.title}
              className="w-full max-w-xs border-l-4 border-falcon-red bg-white px-4 py-3 text-left shadow-sm"
            >
              <p className="font-heading text-sm font-bold uppercase tracking-wide text-falcon-red">
                {value.title}
              </p>
              <p className="mt-1 text-sm text-falcon-charcoal/70">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/join"
            className="rounded-md bg-falcon-red px-8 py-3 font-semibold text-white transition-colors hover:bg-falcon-red-dark"
          >
            Join Us
          </Link>
          <Link
            href="/find-us"
            className="rounded-md border-2 border-falcon-red px-8 py-3 font-semibold text-falcon-red transition-colors hover:bg-falcon-red hover:text-white"
          >
            Find Us
          </Link>
        </div>
      </div>
    </section>
  );
}
