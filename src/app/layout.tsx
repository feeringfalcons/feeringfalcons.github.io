import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Feering Falcons Youth Football Club",
    template: "%s | Feering Falcons YFC",
  },
  description:
    "Youth football club based in Feering and Kelvedon, Essex. Teams from Under 7 to Under 16 playing in the Colchester and District Youth League.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Feering Falcons Youth Football Club",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
