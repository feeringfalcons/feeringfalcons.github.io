import Link from "next/link";

const updates = [
  {
    title: "5-A-Side Tournament",
    description: "Saturday 13th June 2026 — teams from across the region compete at Elm Farm. Enter now!",
    href: "/tournament",
  },
  {
    title: "New Players Welcome",
    description: "All age groups, all abilities. Come along to a session and see what we're about.",
    href: "/join",
  },
  {
    title: "Find Us at Elm Farm",
    description: "Elm Farm, Elm Lane, Marks Tey, CO6 1HU. Matchdays, training, and more.",
    href: "/find-us",
  },
];

export function UpdateCards() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold text-falcon-charcoal sm:text-3xl">
          Latest News
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {updates.map((update) => (
            <Link
              key={update.title}
              href={update.href}
              className="group block border-l-4 border-falcon-red bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="font-heading text-lg font-bold text-falcon-charcoal group-hover:text-falcon-red">
                {update.title}
              </h3>
              <p className="mt-2 text-sm text-falcon-charcoal/70">
                {update.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
