"use client";

import { CLUB } from "@/lib/constants";

export function FacebookEmbed() {
  const pageUrl = encodeURIComponent(CLUB.social.facebook);

  return (
    <section className="bg-falcon-grey py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold text-falcon-charcoal sm:text-3xl">
          Follow Us
        </h2>

        <div className="mt-8 flex justify-center">
          <div className="w-full max-w-lg overflow-hidden rounded-lg bg-white shadow-sm">
            <iframe
              src={`https://www.facebook.com/plugins/page.php?href=${pageUrl}&tabs=timeline&width=500&height=600&small_header=true&adapt_container_width=true`}
              width="500"
              height="600"
              className="w-full border-0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="Feering Falcons Facebook Page"
            />
          </div>
        </div>

        <p className="mt-4 text-center text-sm text-falcon-charcoal/60">
          Can&apos;t see the feed?{" "}
          <a
            href={CLUB.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-falcon-red hover:underline"
          >
            Visit us on Facebook
          </a>
        </p>
      </div>
    </section>
  );
}
