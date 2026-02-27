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
        <div role="status" className="border-l-4 border-green-600 bg-green-50 p-6">
          <p className="font-heading text-xl text-green-800">
            ENTRY SUBMITTED
          </p>
          <p className="mt-2 text-sm text-green-700">
            You&apos;ll receive a confirmation email shortly. Please arrange
            payment to confirm your place.
          </p>
        </div>

        <div className="border-l-4 border-falcon-charcoal bg-falcon-charcoal/5 p-5">
          <p className="font-heading text-lg text-falcon-charcoal">
            PAYMENT REMINDER
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
    <form onSubmit={handleSubmit} className="space-y-5">
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
      <input type="checkbox" name="botcheck" className="hidden" />

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
          className="mt-1 block w-full border border-falcon-border bg-white px-4 py-3 text-falcon-charcoal focus:border-falcon-red"
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
          className="mt-1 block w-full border border-falcon-border bg-white px-4 py-3 text-falcon-charcoal focus:border-falcon-red"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact_phone"
            className="block text-sm font-medium text-falcon-charcoal"
          >
            Mobile Number <span className="text-falcon-red">*</span>
          </label>
          <input
            type="tel"
            id="contact_phone"
            name="contact_phone"
            required
            className="mt-1 block w-full border border-falcon-border bg-white px-4 py-3 text-falcon-charcoal focus:border-falcon-red"
          />
        </div>
        <div>
          <label
            htmlFor="contact_email"
            className="block text-sm font-medium text-falcon-charcoal"
          >
            Email <span className="text-falcon-red">*</span>
          </label>
          <input
            type="email"
            id="contact_email"
            name="contact_email"
            required
            className="mt-1 block w-full border border-falcon-border bg-white px-4 py-3 text-falcon-charcoal focus:border-falcon-red"
          />
        </div>
      </div>

      {/* Age group grid */}
      <div>
        <p className="text-sm font-medium text-falcon-charcoal">
          Number of Teams per Age Group
        </p>
        <div className="mt-3 space-y-1">
          {TOURNAMENT.ageGroups.map((ag) => {
            const maxSquad = (
              TOURNAMENT.squadSizes.small.groups as readonly string[]
            ).includes(ag)
              ? TOURNAMENT.squadSizes.small.max
              : TOURNAMENT.squadSizes.large.max;
            return (
              <div
                key={ag}
                className="flex items-center justify-between border-b border-falcon-border py-2"
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
                  className="w-20 border border-falcon-border bg-white px-3 py-2 text-center text-falcon-charcoal focus:border-falcon-red"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Total */}
      <div className="border-l-4 border-falcon-red bg-falcon-red/5 px-5 py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-falcon-charcoal/60">Total teams</p>
            <p className="font-heading text-2xl text-falcon-charcoal">
              {totalTeams}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-falcon-charcoal/60">Total entry fee</p>
            <p className="font-heading text-3xl text-falcon-red">
              £{totalFee}
            </p>
          </div>
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-600">
          Sorry, that didn&apos;t go through. Check your connection and try
          again, or email{" "}
          <a
            href={`mailto:${TOURNAMENT.contact.email}`}
            className="underline"
          >
            {TOURNAMENT.contact.email}
          </a>{" "}
          directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting" || totalTeams === 0}
        className="w-full bg-falcon-red px-6 py-3 font-heading text-lg tracking-wider text-white transition-colors hover:bg-falcon-red-dark disabled:opacity-50"
      >
        {status === "submitting" ? "SUBMITTING..." : "SUBMIT ENTRY"}
      </button>
    </form>
  );
}
