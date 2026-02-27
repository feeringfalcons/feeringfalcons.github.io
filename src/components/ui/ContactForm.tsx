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
      <div role="status" className="border-l-4 border-green-600 bg-green-50 p-6">
        <p className="font-heading text-xl text-green-800">MESSAGE SENT</p>
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="hidden"
        name="access_key"
        value="1cd1f0ad-f61b-48da-8c5f-7b956493ad7f"
      />
      <input type="checkbox" name="botcheck" className="hidden" />

      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-medium text-falcon-charcoal"
        >
          Name <span className="text-falcon-red">*</span>
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          required
          className="mt-1 block w-full border border-falcon-border bg-white px-4 py-3 text-falcon-charcoal focus:border-falcon-red"
        />
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="block text-sm font-medium text-falcon-charcoal"
        >
          Email <span className="text-falcon-red">*</span>
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          required
          className="mt-1 block w-full border border-falcon-border bg-white px-4 py-3 text-falcon-charcoal focus:border-falcon-red"
        />
      </div>

      <div>
        <label
          htmlFor="contact-subject"
          className="block text-sm font-medium text-falcon-charcoal"
        >
          Subject
        </label>
        <input
          type="text"
          id="contact-subject"
          name="subject"
          className="mt-1 block w-full border border-falcon-border bg-white px-4 py-3 text-falcon-charcoal focus:border-falcon-red"
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-falcon-charcoal"
        >
          Message <span className="text-falcon-red">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
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
        {status === "submitting" ? "SENDING..." : "SEND MESSAGE"}
      </button>
    </form>
  );
}
