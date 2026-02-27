import Image from "next/image";
import Link from "next/link";
import { CLUB } from "@/lib/constants";

export function Hero() {
  return (
    <section className="section-angle bg-falcon-red pb-36 pt-16 sm:pb-44 sm:pt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-16">
          <div className="lg:flex-1">
            <Image
              src="/logo.png"
              alt="Feering Falcons Youth Football Club"
              width={100}
              height={100}
              className="h-16 w-auto sm:h-20"
              priority
            />

            <h1 className="mt-6 font-heading text-[clamp(4rem,15vw,10rem)] leading-[0.82] tracking-tight text-white">
              TAKE
              <br />
              FLIGHT
            </h1>
          </div>

          <div className="max-w-md pb-4 lg:pb-8">
            <p className="text-lg italic text-white/80 sm:text-xl">
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
        </div>
      </div>
    </section>
  );
}
