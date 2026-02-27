"use client";

import { useState, type FormEvent } from "react";

export function JoinForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="border-l-4 border-green-600 bg-green-50 p-6">
        <p className="font-heading text-xl text-green-800">ENQUIRY SENT</p>
        <p className="mt-2 text-sm text-green-700">
          Your team manager or secretary will be in touch shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-falcon-red hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="hidden"
        name="access_key"
        value="1cd1f0ad-f61b-48da-8c5f-7b956493ad7f"
      />
      <input
        type="hidden"
        name="subject"
        value="New Player Enquiry"
      />
      <input type="checkbox" name="botcheck" className="hidden" />

      <div>
        <label
          htmlFor="join-name"
          className="block text-sm font-medium text-falcon-charcoal"
        >
          Your Name <span className="text-falcon-red">*</span>
        </label>
        <input
          type="text"
          id="join-name"
          name="name"
          required
          className="mt-1 block w-full border border-falcon-border bg-white px-4 py-3 text-falcon-charcoal focus:border-falcon-red"
        />
      </div>

      <div>
        <label
          htmlFor="join-age"
          className="block text-sm font-medium text-falcon-charcoal"
        >
          Child&apos;s Age Group
        </label>
        <input
          type="text"
          id="join-age"
          name="age_group"
          placeholder="e.g. Under 8"
          className="mt-1 block w-full border border-falcon-border bg-white px-4 py-3 text-falcon-charcoal placeholder:text-falcon-charcoal/40 focus:border-falcon-red"
        />
      </div>

      <div>
        <label
          htmlFor="join-email"
          className="block text-sm font-medium text-falcon-charcoal"
        >
          Email <span className="text-falcon-red">*</span>
        </label>
        <input
          type="email"
          id="join-email"
          name="email"
          required
          className="mt-1 block w-full border border-falcon-border bg-white px-4 py-3 text-falcon-charcoal focus:border-falcon-red"
        />
      </div>

      <div>
        <label
          htmlFor="join-message"
          className="block text-sm font-medium text-falcon-charcoal"
        >
          Anything else we should know?
        </label>
        <textarea
          id="join-message"
          name="message"
          rows={3}
          className="mt-1 block w-full border border-falcon-border bg-white px-4 py-3 text-falcon-charcoal focus:border-falcon-red"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-600">
          Sorry, that didn&apos;t go through. Check your connection and try
          again, or email{" "}
          <a href="mailto:secretary@feeringfalcons.com" className="underline">
            secretary@feeringfalcons.com
          </a>{" "}
          directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-falcon-red px-6 py-3 font-heading tracking-wider text-white transition-colors hover:bg-falcon-red-dark disabled:opacity-50"
      >
        {status === "submitting" ? "SENDING..." : "REGISTER INTEREST"}
      </button>
    </form>
  );
}
