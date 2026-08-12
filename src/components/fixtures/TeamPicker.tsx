"use client";

import { TEAMS, type ClubTeam } from "@/lib/constants";

/**
 * Native <select> on purpose. Sixteen options don't justify a custom combobox,
 * and the platform picker is bigger, more familiar and easier one-handed than
 * anything we'd build — which matters when the user is on a touchline holding
 * a coat in the other hand.
 */
export function TeamPicker({
  team,
  onChange,
  label = "Choose your child's team",
  id = "team-picker",
}: {
  team: ClubTeam | null;
  onChange: (id: string | null) => void;
  label?: string;
  id?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-heading text-sm tracking-widest text-falcon-charcoal"
      >
        {label.toUpperCase()}
      </label>
      <select
        id={id}
        value={team?.id ?? ""}
        onChange={(e) => onChange(e.target.value || null)}
        className="mt-2 block w-full min-h-12 border-2 border-falcon-charcoal bg-white px-4 py-3 font-heading text-lg tracking-wide text-falcon-charcoal focus:border-falcon-red"
      >
        <option value="">Select a team…</option>
        {TEAMS.map((t) => (
          <option key={t.id} value={t.id}>
            {t.label}
          </option>
        ))}
      </select>
    </div>
  );
}
