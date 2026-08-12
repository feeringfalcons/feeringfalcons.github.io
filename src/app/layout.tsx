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
    "Youth football club based in Feering and Kelvedon, Essex. Teams from Fledglings to Under 13 playing in the Colchester & District and Blackwater & Dengie youth leagues.",
  // Absolute URLs are required for share previews — without metadataBase the
  // OG image resolves relatively and Facebook/WhatsApp silently drop it.
  metadataBase: new URL("https://feeringfalcons.com"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Feering Falcons Youth Football Club",
    title: "Feering Falcons Youth Football Club",
    description:
      "Grassroots youth football in Feering and Kelvedon, Essex. 16 teams, 200+ players, England Football Accredited. New players welcome.",
    url: "/",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Feering Falcons Youth Football Club — Take Flight. Est. 1978, Elm Farm, Marks Tey.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Feering Falcons Youth Football Club",
    description:
      "Grassroots youth football in Feering and Kelvedon, Essex. New players welcome.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Runs before first paint. Arms the scroll-reveal hidden state only
            when JS is actually available, and force-reveals everything if
            React hasn't hydrated within 3s (slow/failed bundle on poor
            signal) so content can never be stranded at opacity:0. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var d=document.documentElement;d.classList.add('js-reveal');" +
              "setTimeout(function(){if(!d.hasAttribute('data-hydrated'))d.classList.remove('js-reveal')},3000)})()",
          }}
        />
      </head>
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
