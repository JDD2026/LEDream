import type { Metadata } from "next";
import Script from "next/script";
import { AboutPageContent } from "@/components/pages/AboutPageContent";
import { aboutMetadata } from "@/content/about";
import { contactInfo, siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: aboutMetadata.title,
  description: aboutMetadata.description,
  keywords: aboutMetadata.keywords,
  openGraph: {
    title: aboutMetadata.title,
    description: aboutMetadata.description,
    type: "website",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: aboutMetadata.title,
    description: aboutMetadata.description,
  },
};

export default function About() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="about-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteConfig.name,
            description: siteConfig.description,
            url: "https://ledream.com/about",
            founder: {
              "@type": "Person",
              name: "Jester Dapper Dan",
              jobTitle: "Founder & LEDream Curator",
            },
            foundingDate: "2024",
          }),
        }}
      />
      <AboutPageContent />
    </>
  );
}

