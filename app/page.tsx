import type { Metadata } from "next";
import Script from "next/script";
import { HomePageContent } from "@/components/pages/HomePageContent";
import { homeMetadata } from "@/content/home";
import { contactInfo, siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: homeMetadata.title,
  description: homeMetadata.description,
  keywords: homeMetadata.keywords,
  openGraph: {
    title: homeMetadata.title,
    description: homeMetadata.description,
    type: "website",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: homeMetadata.title,
    description: homeMetadata.description,
  },
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteConfig.name,
            description: siteConfig.description,
            url: "https://ledream.com",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: contactInfo.phone,
              contactType: "Customer Service",
              email: contactInfo.email,
            },
            sameAs: [
              "https://www.instagram.com/afterglow_mpls/",
              "https://www.facebook.com/AfterGlow.Mpls",
              "https://youtube.com/@afterglow_mpls?si=MXpSfPTqwWTahCZH",
            ],
          }),
        }}
      />
      <HomePageContent />
    </>
  );
}
