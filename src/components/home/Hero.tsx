import Image from "next/image";
import Link from "next/link";
import { CLUB } from "@/lib/constants";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function Hero() {
  return (
    <section className="section-angle relative overflow-hidden bg-falcon-red pb-24 pt-12 sm:pb-44 sm:pt-24">
      {/* Kit image — behind content, faded into the red.
          Plain <picture> rather than next/image: static export runs with
          images.unoptimized, so next/image would ship the single full-size
          source. These WebP variants are pre-built (see scripts/build-images.py)
          and cut the mobile hero from 2.83MB to 22KB. */}
      <div className="pointer-events-none absolute inset-0">
        <picture>
          <source
            type="image/webp"
            sizes="100vw"
            srcSet={[640, 1024, 1536]
              .map((w) => `${base}/player-${w}.webp ${w}w`)
              .join(", ")}
          />
          <img
            src={`${base}/player-fallback.jpg`}
            alt=""
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-[70%_center] opacity-30 sm:opacity-40 lg:opacity-50"
          />
        </picture>
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
          src={`${base}/logo.png`}
          alt="Feering Falcons Youth Football Club"
          width={180}
          height={180}
          className="animate-fade-in-up mt-6 h-24 w-auto sm:mt-10 sm:h-44"
          priority
        />

        <p className="animate-fade-in-up mt-6 max-w-md text-lg italic text-white/90 sm:mt-8 sm:text-xl">
          {CLUB.tagline}
        </p>
        <p className="animate-fade-in-up mt-3 text-sm text-white/75">
          Est. {CLUB.founded} &middot; {CLUB.ground.address} &middot;{" "}
          {CLUB.accreditation}
        </p>

        <div className="animate-fade-in-up mt-6 flex gap-3 sm:mt-8">
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
