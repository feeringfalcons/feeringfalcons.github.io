import Image from "next/image";
import Link from "next/link";
import { CLUB } from "@/lib/constants";

export function Hero() {
  return (
    <section className="section-angle bg-falcon-red pb-36 pt-16 sm:pb-44 sm:pt-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <h1 className="font-heading text-[clamp(4rem,15vw,10rem)] leading-[0.82] tracking-tight text-white">
          TAKE
          <br />
          FLIGHT
        </h1>

        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logo.png`}
          alt="Feering Falcons Youth Football Club"
          width={180}
          height={180}
          className="mt-8 h-36 w-auto sm:mt-10 sm:h-44"
          priority
        />

        <p className="mt-8 max-w-md text-lg italic text-white/80 sm:text-xl">
          {CLUB.tagline}
        </p>
        <p className="mt-3 text-sm text-white/50">
          Est. {CLUB.founded} &middot; {CLUB.ground.address} &middot;{" "}
          {CLUB.accreditation}
        </p>

        <div className="mt-8 flex gap-3">
          <Link
            href="/about#join"
            className="bg-falcon-charcoal px-8 py-3 font-heading text-lg tracking-wider text-white transition-colors hover:bg-falcon-charcoal-light"
          >
            JOIN US
          </Link>
          <Link
            href="/club#find-us"
            className="border-2 border-white px-8 py-3 font-heading text-lg tracking-wider text-white transition-colors hover:bg-white hover:text-falcon-red"
          >
            FIND US
          </Link>
        </div>
      </div>
    </section>
  );
}
