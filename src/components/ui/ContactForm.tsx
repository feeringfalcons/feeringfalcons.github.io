"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
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
      <div className="rounded-md border border-green-200 bg-green-50 p-6 text-center">
        <p className="font-heading text-lg font-bold text-green-800">
          Message sent!
        </p>
        <p className="mt-2 text-sm text-green-700">
          We&apos;ll get back to you as soon as we can.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-falcon-red hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Web3Forms access key — replace with real key */}
      <input
        type="hidden"
        name="access_key"
        value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "YOUR_ACCESS_KEY_HERE"}
      />
      {/* Honeypot */}
      <input type="checkbox" name="botcheck" className="hidden" />

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-falcon-charcoal"
        >
          Name <span className="text-falcon-red">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full rounded-md border border-falcon-grey-mid px-4 py-3 text-falcon-charcoal focus:border-falcon-red focus:outline-none focus:ring-1 focus:ring-falcon-red"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-falcon-charcoal"
        >
          Email <span className="text-falcon-red">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full rounded-md border border-falcon-grey-mid px-4 py-3 text-falcon-charcoal focus:border-falcon-red focus:outline-none focus:ring-1 focus:ring-falcon-red"
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-falcon-charcoal"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="mt-1 block w-full rounded-md border border-falcon-grey-mid px-4 py-3 text-falcon-charcoal focus:border-falcon-red focus:outline-none focus:ring-1 focus:ring-falcon-red"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-falcon-charcoal"
        >
          Message <span className="text-falcon-red">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1 block w-full rounded-md border border-falcon-grey-mid px-4 py-3 text-falcon-charcoal focus:border-falcon-red focus:outline-none focus:ring-1 focus:ring-falcon-red"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md bg-falcon-red px-6 py-3 font-semibold text-white transition-colors hover:bg-falcon-red-dark disabled:opacity-50"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
