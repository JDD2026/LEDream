"use client";

import {
  Sparkles,
  Eye,
  Crown,
  Check,
  X,
  ArrowRight,
  Zap,
  Palette,
  Wrench,
  Users,
  Calendar,
  MessageCircle,
} from "lucide-react";
import { GradientBackground } from "@/components/animations/GradientBackground";
import { NeonText } from "@/components/animations/NeonText";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { CTAButton } from "@/components/ui/CTAButton";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { IconFeature } from "@/components/ui/IconFeature";
import { PackageCard } from "@/components/sections/PackageCard";
import { VideoBackground } from "@/components/ui/VideoBackground";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  packages,
  pageIntro,
  commonInclusions,
  faqItems,
  serviceProcessPreview,
} from "@/content/services";
import { contactInfo } from "@/content/site";
import { cn } from "@/lib/utils";

const packageIcons = {
  spark: Sparkles,
  spectacle: Eye,
  legend: Crown,
};

const inclusionIcons = [
  MessageCircle,
  Palette,
  Zap,
  Wrench,
  Users,
];

const processIcons = [
  MessageCircle,
  Palette,
  Wrench,
];

export function ServicesPageContent() {
  // Build Tally form URL with package pre-selection
  const getTallyUrl = (packageId?: string) => {
    const baseUrl = contactInfo.consultationForm;
    if (packageId) {
      return `${baseUrl}?package=${packageId}`;
    }
    return baseUrl;
  };

  // Comparison table data
  const comparisonFeatures = [
    {
      feature: "Key Focal Point Installation",
      spark: true,
      spectacle: true,
      legend: true,
    },
    {
      feature: "Color-Mapped Lighting Scenes",
      spark: true,
      spectacle: true,
      legend: true,
    },
    {
      feature: "1-2 Signature LED Art Pieces",
      spark: true,
      spectacle: false,
      legend: false,
    },
    {
      feature: "Full-Room Transformation",
      spark: false,
      spectacle: true,
      legend: true,
    },
    {
      feature: "3-4 Signature LED Art Pieces",
      spark: false,
      spectacle: true,
      legend: true,
    },
    {
      feature: "Complete Synchronization",
      spark: false,
      spectacle: true,
      legend: true,
    },
    {
      feature: "Multi-Room Transformation",
      spark: false,
      spectacle: false,
      legend: true,
    },
    {
      feature: "Dedicated Creative Team",
      spark: false,
      spectacle: false,
      legend: true,
    },
    {
      feature: "Ongoing Service & Maintenance",
      spark: false,
      spectacle: false,
      legend: true,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <GradientBackground darkOverlay speed="slow" className="absolute inset-0" />
        <div className="relative z-10 container-standard text-center px-4 py-24 md:py-32">
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 md:left-20 opacity-30 animate-float">
            <Sparkles className="h-8 w-8 text-neon-blue" />
          </div>
          <div className="absolute bottom-40 right-10 md:right-20 opacity-30 animate-float-delayed">
            <Crown className="h-10 w-10 text-neon-purple" />
          </div>

          {/* Headline */}
          <FadeInOnScroll delay={0}>
            <NeonText
              text="LEDream Custom Packages"
              color="multicolor"
              intensity="strong"
              animated
              as="h1"
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6"
            />
          </FadeInOnScroll>

          {/* Subheadline */}
          <FadeInOnScroll delay={100}>
            <p className="text-lg md:text-xl lg:text-2xl text-neutral-white/90 max-w-3xl mx-auto leading-relaxed mb-6">
            Are you ready to begin crafting magic? We offer custom-tailored experiences to transform your vision to reality, from permanent to temporary installations.            </p>
          </FadeInOnScroll>

          {/* Brief Intro */}
          {/* <FadeInOnScroll delay={200}>
            <p className="text-base md:text-lg text-neutral-white/70 max-w-2xl mx-auto leading-relaxed">
              {pageIntro}
            </p>
          </FadeInOnScroll> */}
        </div>
      </section>

      {/* Package Showcase Section */}
      <SectionContainer variant="darker" className="bg-brick-wall">
        <div className="text-center mb-12">
          <FadeInOnScroll delay={0}>
            <h2 className="text-h2 text-neutral-white mb-4">Choose Your LEDream Experience</h2>
            <p className="text-lg text-neutral-white/80 max-w-2xl mx-auto">
              Select the package that best fits your space, vision, and budget
            </p>
          </FadeInOnScroll>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {packages.map((pkg, index) => {
            const Icon = packageIcons[pkg.id as keyof typeof packageIcons];
            const isSpectacle = pkg.id === "spectacle";
            
            return (
              <FadeInOnScroll key={pkg.id} delay={index * 100}>
                <PackageCard
                  package={pkg}
                  icon={Icon}
                  ctaText={
                    pkg.id === "spark"
                      ? "Choose Spark"
                      : pkg.id === "spectacle"
                      ? "Choose Spectacle"
                      : "Become Legend"
                  }
                  ctaHref={getTallyUrl(pkg.id)}
                  highlighted={isSpectacle}
                  className={isSpectacle ? "lg:scale-105" : ""}
                />
              </FadeInOnScroll>
            );
          })}
        </div>
      </SectionContainer>

      {/* Package Comparison Table - Desktop Only */}
      <SectionContainer variant="dark" className="hidden lg:block">
        <div className="text-center mb-12">
          <FadeInOnScroll delay={0}>
            <h2 className="text-h2 text-neutral-white mb-4">Compare Packages</h2>
            <p className="text-lg text-neutral-white/80 max-w-2xl mx-auto">
              See what's included in each package at a glance
            </p>
          </FadeInOnScroll>
        </div>

        <FadeInOnScroll delay={100}>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-neutral-white font-semibold">Feature</TableHead>
                  <TableHead className="text-center text-neon-blue font-semibold">The Spark</TableHead>
                  <TableHead className="text-center text-neon-purple font-semibold">The Spectacle</TableHead>
                  <TableHead className="text-center text-neon-magenta font-semibold">The Legend</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonFeatures.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium text-neutral-white">
                      {row.feature}
                    </TableCell>
                    <TableCell className="text-center">
                      {row.spark ? (
                        <Check className="h-5 w-5 text-neon-blue mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-neutral-white/30 mx-auto" />
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {row.spectacle ? (
                        <Check className="h-5 w-5 text-neon-purple mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-neutral-white/30 mx-auto" />
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {row.legend ? (
                        <Check className="h-5 w-5 text-neon-magenta mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-neutral-white/30 mx-auto" />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </FadeInOnScroll>
      </SectionContainer>

      {/* What's Included Section */}
      <SectionContainer variant="darker">
        <div className="text-center mb-12">
          <FadeInOnScroll delay={0}>
            <h2 className="text-h2 text-neutral-white mb-4">What's Included in Every Package</h2>
            <p className="text-lg text-neutral-white/80 max-w-2xl mx-auto">
              All packages include these essential services and support
            </p>
          </FadeInOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 mt-12">
          {commonInclusions.map((inclusion, index) => {
            const Icon = inclusionIcons[index];
            return (
              <FadeInOnScroll key={inclusion.title} delay={index * 100}>
                <IconFeature
                  icon={Icon}
                  title={inclusion.title}
                  description={inclusion.description}
                  alignment="center"
                />
              </FadeInOnScroll>
            );
          })}
        </div>
      </SectionContainer>

      {/* Custom Package Section */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <VideoBackground
          videoSrc="/OSS2.mp4"
          overlayOpacity={0.7}
          overlayColor="dark-black"
        />
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <FadeInOnScroll delay={0}>
            <div className="mb-6 flex justify-center">
              <div className="p-4 rounded-lg bg-dark-navy/50 border-2 border-neon-blue/50">
                <Palette className="h-12 w-12 text-neon-blue" />
              </div>
            </div>
            <h2 className="text-h2 md:text-h1 text-neutral-white mb-6 font-black">
              Need Something Unique?
            </h2>
            <p className="text-lg md:text-xl text-neutral-white/90 mb-8 leading-relaxed">
              Every LEDream journey is unique. Let's craft a custom package that perfectly fits your vision and budget.
            </p>
            <CTAButton
              text="Discuss Custom Options"
              href={getTallyUrl()}
              external
              variant="primary"
              size="lg"
              icon={ArrowRight}
            />
          </FadeInOnScroll>
        </div>
      </section>

      {/* Process Preview Section */}
      <SectionContainer variant="dark">
        <div className="text-center mb-12">
          <FadeInOnScroll delay={0}>
            <h2 className="text-h2 text-neutral-white mb-4">The LEDream Journey</h2>
            <p className="text-lg text-neutral-white/80 max-w-2xl mx-auto">
              A simplified overview of how we bring your vision to life
            </p>
          </FadeInOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-12">
          {serviceProcessPreview.map((step, index) => {
            const Icon = processIcons[index];
            return (
              <FadeInOnScroll key={step.step} delay={index * 150}>
                <div className="text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-neon-magenta/20 rounded-full blur-xl" />
                      <div className="relative p-6 rounded-full bg-dark-navy border-2 border-neon-blue/30">
                        <Icon className="h-8 w-8 text-neon-blue" />
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-4xl font-black text-neon-blue">0{step.step}</span>
                  </div>
                  <h3 className="text-h4 text-neutral-white font-heading mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-white/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </FadeInOnScroll>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <FadeInOnScroll delay={300}>
            <CTAButton
              text="Learn More About Our Process"
              href="/process"
              variant="secondary"
              size="lg"
              icon={ArrowRight}
            />
          </FadeInOnScroll>
        </div>
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer variant="darker">
        <div className="text-center mb-12">
          <FadeInOnScroll delay={0}>
            <h2 className="text-h2 text-neutral-white mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-neutral-white/80 max-w-2xl mx-auto">
              Everything you need to know about our packages and services
            </p>
          </FadeInOnScroll>
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          <FadeInOnScroll delay={100}>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeInOnScroll>
        </div>
      </SectionContainer>

      {/* Final CTA Section */}
      <SectionContainer variant="gradient" className="relative overflow-hidden">
        <GradientBackground darkOverlay speed="medium" className="absolute inset-0" />
        <div className="relative z-10 text-center">
          <FadeInOnScroll delay={0}>
            <h2 className="text-h2 md:text-h1 text-neutral-white mb-6 font-black">
              Ready to Begin Crafting Magic?
            </h2>
            <p className="text-lg md:text-xl text-neutral-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
              Let's discuss your vision and find the perfect LEDream package for your space.
            </p>
            
            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-neutral-white/80">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-neon-blue" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-neon-blue transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-neon-blue" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-neon-blue transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            <CTAButton
              text="Book Free Consultation"
              href={getTallyUrl()}
              external
              variant="primary"
              size="lg"
              icon={ArrowRight}
            />
          </FadeInOnScroll>
        </div>
      </SectionContainer>
    </>
  );
}

