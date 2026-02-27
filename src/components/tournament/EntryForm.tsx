"use client";

import { useState, type FormEvent } from "react";
import { TOURNAMENT } from "@/lib/constants";

export function EntryForm() {
  const [teams, setTeams] = useState<Record<string, number>>(
    Object.fromEntries(TOURNAMENT.ageGroups.map((ag) => [ag, 0]))
  );
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const totalTeams = Object.values(teams).reduce((sum, n) => sum + n, 0);
  const totalFee = totalTeams * TOURNAMENT.entryFee;

  function updateTeams(ageGroup: string, value: number) {
    setTeams((prev) => ({ ...prev, [ageGroup]: Math.max(0, value) }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (totalTeams === 0) return;

    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    // Add age group entries as formatted text
    const entries = TOURNAMENT.ageGroups
      .filter((ag) => teams[ag] > 0)
      .map((ag) => `${ag}: ${teams[ag]} team(s)`)
      .join("\n");
    data.append("age_group_entries", entries);
    data.append("total_teams", String(totalTeams));
    data.append("total_fee", `£${totalFee}`);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="space-y-6">
        <div className="rounded-md border border-green-200 bg-green-50 p-6 text-center">
          <p className="font-heading text-lg font-bold text-green-800">
            Entry submitted!
          </p>
          <p className="mt-2 text-sm text-green-700">
            You&apos;ll receive a confirmation email shortly. Please arrange
            payment to confirm your place.
          </p>
        </div>

        <div className="border-l-4 border-falcon-red bg-falcon-grey px-5 py-4">
          <p className="font-heading font-bold text-falcon-charcoal">
            Payment Reminder
          </p>
          <div className="mt-2 space-y-1 text-sm text-falcon-charcoal/80">
            <p>
              Bank transfer: {TOURNAMENT.payment.sortCode} /{" "}
              {TOURNAMENT.payment.accountNumber}
            </p>
            <p>Reference: {TOURNAMENT.payment.reference}</p>
            <p>
              Or cheque payable to &ldquo;{TOURNAMENT.payment.chequePayable}
              &rdquo;
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Web3Forms key */}
      <input
        type="hidden"
        name="access_key"
        value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "YOUR_ACCESS_KEY_HERE"}
      />
      <input
        type="hidden"
        name="subject"
        value="Tournament Entry Form Submission"
      />
      <input
        type="hidden"
        name="from_name"
        value="Feering Falcons Tournament Entry"
      />
      {/* Honeypot */}
      <input type="checkbox" name="botcheck" className="hidden" />

      {/* Club details */}
      <div>
        <label
          htmlFor="club_name"
          className="block text-sm font-medium text-falcon-charcoal"
        >
          Club Name <span className="text-falcon-red">*</span>
        </label>
        <input
          type="text"
          id="club_name"
          name="club_name"
          required
          className="mt-1 block w-full rounded-md border border-falcon-grey-mid px-4 py-3 text-falcon-charcoal focus:border-falcon-red focus:outline-none focus:ring-1 focus:ring-falcon-red"
        />
      </div>

      <div>
        <p className="block text-sm font-medium text-falcon-charcoal">
          FA Affiliated? <span className="text-falcon-red">*</span>
        </p>
        <div className="mt-2 flex gap-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="fa_affiliated"
              value="Yes"
              required
              className="h-4 w-4 accent-falcon-red"
            />
            <span>Yes</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="fa_affiliated"
              value="No"
              className="h-4 w-4 accent-falcon-red"
            />
            <span>No</span>
          </label>
        </div>
      </div>

      <div>
        <label
          htmlFor="contact_name"
          className="block text-sm font-medium text-falcon-charcoal"
        >
          Your Name <span className="text-falcon-red">*</span>
        </label>
        <input
          type="text"
          id="contact_name"
          name="contact_name"
          required
          className="mt-1 block w-full rounded-md border border-falcon-grey-mid px-4 py-3 text-falcon-charcoal focus:border-falcon-red focus:outline-none focus:ring-1 focus:ring-falcon-red"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact_phone"
            className="block text-sm font-medium text-falcon-charcoal"
          >
            Contact Mobile <span className="text-falcon-red">*</span>
          </label>
          <input
            type="tel"
            id="contact_phone"
            name="contact_phone"
            required
            className="mt-1 block w-full rounded-md border border-falcon-grey-mid px-4 py-3 text-falcon-charcoal focus:border-falcon-red focus:outline-none focus:ring-1 focus:ring-falcon-red"
          />
        </div>
        <div>
          <label
            htmlFor="contact_email"
            className="block text-sm font-medium text-falcon-charcoal"
          >
            Contact Email <span className="text-falcon-red">*</span>
          </label>
          <input
            type="email"
            id="contact_email"
            name="contact_email"
            required
            className="mt-1 block w-full rounded-md border border-falcon-grey-mid px-4 py-3 text-falcon-charcoal focus:border-falcon-red focus:outline-none focus:ring-1 focus:ring-falcon-red"
          />
        </div>
      </div>

      {/* Age group grid */}
      <div>
        <p className="text-sm font-medium text-falcon-charcoal">
          Number of Teams per Age Group
        </p>
        <div className="mt-3 space-y-2">
          {TOURNAMENT.ageGroups.map((ag) => {
            const maxSquad = (TOURNAMENT.squadSizes.small.groups as readonly string[]).includes(ag)
              ? TOURNAMENT.squadSizes.small.max
              : TOURNAMENT.squadSizes.large.max;
            return (
              <div
                key={ag}
                className="flex items-center justify-between border-b border-falcon-grey py-2"
              >
                <div>
                  <span className="font-medium text-falcon-charcoal">{ag}</span>
                  <span className="ml-2 text-xs text-falcon-charcoal/50">
                    (max {maxSquad} players)
                  </span>
                </div>
                <input
                  type="number"
                  min={0}
                  max={10}
                  value={teams[ag]}
                  onChange={(e) =>
                    updateTeams(ag, parseInt(e.target.value) || 0)
                  }
                  className="w-20 rounded-md border border-falcon-grey-mid px-3 py-2 text-center text-falcon-charcoal focus:border-falcon-red focus:outline-none focus:ring-1 focus:ring-falcon-red"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Total */}
      <div className="border-l-4 border-falcon-red bg-falcon-grey px-5 py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-falcon-charcoal/60">Total teams</p>
            <p className="font-heading text-xl font-bold text-falcon-charcoal">
              {totalTeams}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-falcon-charcoal/60">Total entry fee</p>
            <p className="font-heading text-2xl font-bold text-falcon-red">
              £{totalFee}
            </p>
          </div>
        </div>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting" || totalTeams === 0}
        className="w-full rounded-md bg-falcon-red px-6 py-3 font-semibold text-white transition-colors hover:bg-falcon-red-dark disabled:opacity-50"
      >
        {status === "submitting" ? "Submitting..." : "Submit Entry"}
      </button>
    </form>
  );
}
