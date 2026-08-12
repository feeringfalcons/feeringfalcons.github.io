"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveals children as they scroll into view.
 *
 * Progressive enhancement matters here: this is a statically exported site, so
 * every section is already in the prerendered HTML. The hidden starting state
 * is therefore applied by CSS that only bites once the inline script in
 * layout.tsx has added `js-reveal` to <html>. No JS (or a failed bundle on
 * patchy rural 4G) means the content simply renders visible, rather than
 * sitting there at opacity:0 forever.
 */
export function ScrollReveal({
  children,
  className = "",
  animation = "animate-fade-in-up",
  stagger = false,
}: {
  children: React.ReactNode;
  className?: string;
  animation?: string;
  stagger?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Tell the safety timeout in layout.tsx that React got here, so it knows
    // the observers below are live and it doesn't need to force-reveal.
    document.documentElement.setAttribute("data-hydrated", "");

    // Reduced motion is handled purely in CSS (globals.css keeps .reveal fully
    // opaque under the media query), so there's nothing to special-case here.
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className} ${stagger ? "stagger-children" : ""} ${
        visible ? `reveal-visible ${animation}` : ""
      }`}
    >
      {children}
    </div>
  );
}
