import Image from "next/image";
import Link from "next/link";
import { CLUB } from "@/lib/constants";

export function Hero() {
  return (
    <section className="section-angle relative overflow-hidden bg-falcon-red pb-36 pt-16 sm:pb-44 sm:pt-24">
      {/* Kit image — behind content, faded into the red */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/player.png`}
          alt=""
          fill
          className="object-cover object-[70%_center] opacity-30 sm:opacity-40 lg:opacity-50"
          sizes="100vw"
          priority
        />
        {/* Soft fade at edges only */}
        <div className="absolute inset-0 bg-gradient-to-t from-falcon-red via-transparent to-falcon-red/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-falcon-red/50 via-transparent to-falcon-red/50" />
      </div>

      {/* Content — staggered entrance */}
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6 lg:px-8 stagger-children">
        <h1 className="animate-fade-in-up font-heading text-[clamp(4rem,15vw,10rem)] leading-[0.82] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.15)]">
          TAKE
          <br />
          FLIGHT
        </h1>

        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logo.png`}
          alt="Feering Falcons Youth Football Club"
          width={180}
          height={180}
          className="animate-fade-in-up mt-8 h-36 w-auto sm:mt-10 sm:h-44"
          priority
        />

        <p className="animate-fade-in-up mt-8 max-w-md text-lg italic text-white/80 sm:text-xl">
          {CLUB.tagline}
        </p>
        <p className="animate-fade-in-up mt-3 text-sm text-white/50">
          Est. {CLUB.founded} &middot; {CLUB.ground.address} &middot;{" "}
          {CLUB.accreditation}
        </p>

        <div className="animate-fade-in-up mt-8 flex gap-3">
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
