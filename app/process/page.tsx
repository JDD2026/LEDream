import type { Metadata } from "next";
import Script from "next/script";
import { ProcessPageContent } from "@/components/pages/ProcessPageContent";
import { processMetadata, processSteps } from "@/content/process";
import { contactInfo, siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: processMetadata.title,
  description: processMetadata.description,
  keywords: processMetadata.keywords,
  openGraph: {
    title: processMetadata.title,
    description: processMetadata.description,
    type: "website",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: processMetadata.title,
    description: processMetadata.description,
  },
};

export default function Process() {
  // Build structured data for HowTo schema
  const howToStructuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "LEDream Transformation Process",
    description: processMetadata.description,
    step: processSteps.map((step, index) => ({
      "@type": "HowToStep",
      position: step.step,
      name: step.title,
      text: step.description,
      ...(step.whatToExpect && {
        itemListElement: step.whatToExpect.map((item, itemIndex) => ({
          "@type": "HowToTip",
          text: item,
        })),
      }),
      ...(step.timeline && {
        totalTime: step.timeline,
      }),
    })),
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="process-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToStructuredData),
        }}
      />
      <ProcessPageContent />
    </>
  );
}

