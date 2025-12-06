import Script from "next/script";
import { GradientBackground } from "@/components/animations/GradientBackground";
import { NeonText } from "@/components/animations/NeonText";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { CTAButton } from "@/components/ui/CTAButton";
import { VideoBackground } from "@/components/ui/VideoBackground";
import { portfolioMetadata, projects, galleryIntro } from "@/content/portfolio";
import { contactInfo } from "@/content/site";

/**
 * Portfolio Page
 * 
 * Displays LEDream's project gallery with filtering and call-to-action sections.
 */
export default function PortfolioPage() {

  // Build structured data for portfolio
  const portfolioStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: portfolioMetadata.title,
    description: portfolioMetadata.description,
    url: "https://ledream.com/portfolio",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((project, index) => ({
        "@type": "CreativeWork",
        position: index + 1,
        name: project.title,
        description: project.description,
        category: project.category,
        image: project.images[0] ? `https://ledream.com${project.images[0]}` : undefined,
        video: project.videoUrl && project.videoUrl !== "TBD"
          ? {
              "@type": "VideoObject",
              embedUrl: project.videoUrl,
              name: project.title,
            }
          : undefined,
      })),
    },
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="portfolio-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioStructuredData),
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <GradientBackground
          colors={["#FF3D00", "#00F0FF", "#BF00FF", "#FF10F0"]}
          speed="slow"
          darkOverlay
          className="absolute inset-0"
        />
        <div className="relative z-10 container-standard text-center px-4 py-24 md:py-32">
          <NeonText
            text="Our Latest Masterpieces"
            color="multicolor"
            intensity="strong"
            animated
            as="h1"
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6"
          />
          <p className="text-lg md:text-xl lg:text-2xl text-neutral-white/90 max-w-3xl mx-auto leading-relaxed">
            {galleryIntro}
          </p>
        </div>
      </section>

      {/* Projects Grid Section */}
      <SectionContainer variant="dark" className="py-16 md:py-24">
        <ProjectGrid
          projects={projects}
          loading={false}
        />
      </SectionContainer>

      {/* CTA Section */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <VideoBackground
          videoSrc={'/promo2.mp4'}
          overlayOpacity={0.7}
          overlayColor="dark-black"
        />
        <div className="text-center space-y-8 relative z-10">
          <div className="space-y-4">
            <h2 className="text-h2 text-neutral-white font-heading">
              Imagine Your Own Masterpiece
            </h2>
            <p className="text-neutral-white/70 text-lg max-w-2xl mx-auto">
              Every project begins with a vision. Let's bring yours to life.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              text="Book Your Consultation"
              href={contactInfo.consultationForm}
              external
              variant="primary"
              size="lg"
            />
            <CTAButton
              text="View Our Services"
              href="/services"
              variant="secondary"
              size="lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}

