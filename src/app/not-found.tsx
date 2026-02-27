import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <Image
        src="/logo.png"
        alt="Feering Falcons"
        width={100}
        height={100}
        className="h-20 w-auto opacity-50"
      />
      <h1 className="mt-6 font-heading text-4xl font-bold text-falcon-charcoal">
        Page Not Found
      </h1>
      <p className="mt-3 text-falcon-charcoal/60">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-md bg-falcon-red px-6 py-3 font-semibold text-white transition-colors hover:bg-falcon-red-dark"
      >
        Back to Home
      </Link>
    </Container>
  );
}
