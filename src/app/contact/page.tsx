import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Feering Falcons Youth Football Club. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-falcon-grey py-12 sm:py-16">
        <Container>
          <h1 className="font-heading text-4xl font-bold text-falcon-charcoal sm:text-5xl">
            Contact Us
          </h1>
        </Container>
      </section>

      <Container className="py-12 sm:py-16">
        <div className="mx-auto max-w-xl">
          <p className="mb-8 text-falcon-charcoal/80">
            Got a question, want to join a team, or just want to say hello? Fill
            in the form below and we&apos;ll get back to you.
          </p>

          <ContactForm />

          <p className="mt-8 text-center text-sm text-falcon-charcoal/60">
            Or find us on{" "}
            <a
              href="https://www.facebook.com/feeringfalconsfc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-falcon-red hover:underline"
            >
              Facebook
            </a>
          </p>
        </div>
      </Container>
    </>
  );
}
