import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header, Footer } from "@/components/layout";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LEDream - Immersive Fantasy LED Art",
  description:
    "Immersive fantasy LED lighting & psychedelic art installations in Minneapolis–Saint Paul.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "LEDream",
              url: "https://ledream.art",
              description:
                "Immersive fantasy LED lighting & psychedelic art installations in Minneapolis–Saint Paul.",
              email: "portal@ledream.art",
              areaServed: {
                "@type": "AdministrativeArea",
                name: "Minneapolis–Saint Paul, MN",
              },
              sameAs: ["https://mplspartyhub.social"],
            }),
          }}
        />
      </head>

      <body className={`${inter.variable} ${montserrat.variable} font-body`}>
        <Header />
        <main className="pt-16 md:pt-20">{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
