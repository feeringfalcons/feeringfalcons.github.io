import type { Fixture } from "@/lib/fixtures";

/**
 * Full-Time's note on a fixture, shown beside it in a list.
 *
 * Off and merely-noted statuses are styled apart: a called-off game is filled
 * red so it reads at a glance, anything else is quieter. The word itself comes
 * from the league rather than from us, so an unfamiliar status still surfaces
 * instead of being swallowed.
 */
export function FixtureStatusTag({ fixture }: { fixture: Fixture }) {
  if (!fixture.status) return null;

  return (
    <span
      className={
        fixture.isOff
          ? "bg-falcon-red px-2 py-0.5 font-heading text-sm tracking-widest text-white"
          : "border border-falcon-border px-2 py-0.5 font-heading text-sm tracking-widest text-falcon-charcoal/70"
      }
    >
      {fixture.status.toUpperCase()}
    </span>
  );
}
