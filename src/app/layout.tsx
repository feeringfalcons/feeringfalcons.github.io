import type { Metadata } from "next";
import { Bebas_Neue, Source_Serif_4 } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Feering Falcons Youth Football Club",
    template: "%s | Feering Falcons YFC",
  },
  description:
    "Youth football club based in Feering and Kelvedon, Essex. Teams from Under 6 to Under 14 playing in the Colchester & District and Blackwater & Dengie youth leagues.",
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
      <body
        className={`${bebasNeue.variable} ${sourceSerif.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
