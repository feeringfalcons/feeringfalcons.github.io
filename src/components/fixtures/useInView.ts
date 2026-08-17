"use client";

import { useEffect, useRef, useState } from "react";

/**
 * True once the element has come near the viewport, and stays true.
 *
 * Used to hold off requesting the fixture feeds until someone actually scrolls
 * towards them. The homepage feeds are a couple of hundred KB between them, and
 * plenty of visitors never get past the hero, so on a patchy rural connection
 * it's worth not spending that up front. rootMargin starts the fetch a screen
 * early so the data is usually there by the time the section is read.
 */
export function useInView<T extends HTMLElement>(rootMargin = "250px") {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setSeen(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, seen]);

  return { ref, seen };
}
