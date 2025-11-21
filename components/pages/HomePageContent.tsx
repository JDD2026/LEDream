"use client";

import {
  Sparkles,
  Layers,
  Lightbulb,
  Music,
  MessageSquare,
  Wrench,
  GraduationCap,
  ChevronDown,
  Diamond,
  Skull,
  Award,
  Palette,
  Users,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";
import { GradientBackground } from "@/components/animations/GradientBackground";
import { NeonText } from "@/components/animations/NeonText";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { CTAButton } from "@/components/ui/CTAButton";
import { ScrollButton } from "@/components/ui/ScrollButton";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { NeonCard } from "@/components/ui/NeonCard";
import { PackageCard } from "@/components/sections/PackageCard";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { IconFeature } from "@/components/ui/IconFeature";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { VideoBackground } from "@/components/ui/VideoBackground";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import {
  heroContent,
  featuredProjects,
  packageOverview,
} from "@/content/home";
import { contactInfo } from "@/content/site";
import { packages } from "@/content/services";
import { featuredPortfolioProjects } from "@/content/portfolio";
import { processSteps } from "@/content/process";

export function HomePageContent() {
  // Use packages directly - they already match PackageCard format
  const packageCards = packages.map((pkg) => ({
    ...pkg,
    features: pkg.features.slice(0, 4), // Top 4 features for homepage preview
  }));

  // Map projects to ProjectCard format
  const projectCards = featuredPortfolioProjects.map((project) => ({
    title: project.title,
    description: project.description,
    category: project.category,
    image: project.images[0] || "/1.JPG",
    imageAlt: project.title,
    videoUrl: project.videoUrl,
    href: `/portfolio#${project.id}`,
  }));

  // Process steps with icons
  const processStepsWithIcons = [
    {
      ...processSteps[0],
      icon: MessageSquare,
    },
    {
      ...processSteps[1],
      icon: Wrench,
    },
    {
      ...processSteps[2],
      icon: GraduationCap,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <VideoBackground
          videoSrc='/promo1.mp4'
          overlayOpacity={0.7}
          overlayColor="dark-black"
        />
        <div className="relative z-10 container-standard text-center px-4 py-24 md:py-32">
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 md:left-20 opacity-30 animate-float">
            <Diamond className="h-8 w-8 text-neon-blue" />
          </div>
          <div className="absolute bottom-40 right-10 md:right-20 opacity-30 animate-float-delayed">
            <Skull className="h-10 w-10 text-neon-purple" />
          </div>

          {/* Headline */}
          <NeonText
            text={heroContent.headline}
            color="multicolor"
            intensity="strong"
            animated
            as="h1"
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6"
          />

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-neutral-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            {heroContent.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <CTAButton
              text={heroContent.ctaText}
              href={heroContent.ctaHref}
              external
              variant="primary"
              size="lg"
              icon={ArrowRight}
            />
            <ScrollButton
              text="Explore Our Work"
              targetId="portfolio"
              variant="outline"
              size="lg"
            />
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-neon-blue" />
          </div>
        </div>
      </section>

      {/* Trusted By / Client Logos Section */}
      <SectionContainer variant="darker" className="bg-[#0A0A0A]">
        <div className="text-center mb-12">
          <h2 className="text-h2 text-neutral-white mb-4">Trusted by dreamers. Venues transformed</h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-normal">
          {/* Placeholder Client Logos - Replace with actual logos */}
          <div className="flex items-center justify-center h-16 w-32 bg-dark-brick border border-neon-blue/20 rounded px-4 hover:border-neon-blue hover:shadow-neon-blue transition-all">
            <span className="text-neutral-white/60 text-sm font-semibold">Conga Latin Bistro</span>
          </div>
          <div className="flex items-center justify-center h-16 w-32 bg-dark-brick border border-neon-purple/20 rounded px-4 hover:border-neon-purple hover:shadow-neon-purple transition-all">
            <span className="text-neutral-white/60 text-sm font-semibold">Granada Theater</span>
          </div>
          <div className="flex items-center justify-center h-16 w-32 bg-dark-brick border border-neon-magenta/20 rounded px-4 hover:border-neon-magenta hover:shadow-neon-magenta transition-all">
            <span className="text-neutral-white/60 text-sm font-semibold">Jester's Wondrous Funhouse</span>
          </div>
          <div className="flex items-center justify-center h-16 w-32 bg-dark-brick border border-neon-green/20 rounded px-4 hover:border-neon-green hover:shadow-neon-green transition-all">
            <span className="text-neutral-white/60 text-sm font-semibold">Central Mix</span>
          </div>
          <div className="flex items-center justify-center h-16 w-32 bg-dark-brick border border-neon-blue/20 rounded px-4 hover:border-neon-blue hover:shadow-neon-blue transition-all">
            <span className="text-neutral-white/60 text-sm font-semibold">Rev Underground</span>
          </div>
          <div className="flex items-center justify-center h-16 w-32 bg-dark-brick border border-neon-purple/20 rounded px-4 hover:border-neon-purple hover:shadow-neon-magenta transition-all">
            <span className="text-neutral-white/60 text-sm font-semibold">Fountain Room @ Pourhouse</span>
          </div>
        </div>
        
        {/* Image Carousel */}
        <div className="mt-16">
          <ImageCarousel
            images={[
              "/3.jpg",
              "/5.JPG",
              "/6.JPG",
              "/7.JPG",
              "/8.JPG",
              "/10.JPG",
              "/11.JPG",
              "/1.JPG",
            ]}
          />
        </div>
      </SectionContainer>

      {/* Video Showcase Section */}
      <SectionContainer variant="dark" padding="pt-0 md:pt-2 lg:pt-4 pb-16 md:pb-24 lg:pb-32">
        <div className="text-center mb-12">
          <NeonText
            text="See Our Work Come to Life"
            color="blue"
            intensity="medium"
            as="h2"
            className="text-3xl md:text-4xl lg:text-5xl mb-6"
          />
        </div>
        <div className="max-w-5xl mx-auto mb-8">
          <VideoEmbed
            videoUrl="https://youtu.be/Rl8RiOAwhac"
            title="Psychedelic Funhouse Fantasy - LEDream Installation"
            lazy
          />
        </div>
        <p className="text-center text-neutral-white/70 max-w-2xl mx-auto mb-6">
          Experience the transformation of an unremarkable living room into an out-of-this-world wonderland
        </p>
        <div className="text-center">
          <CTAButton
            text="View Full Portfolio"
            href="/portfolio"
            variant="secondary"
            icon={ArrowRight}
          />
        </div>
      </SectionContainer>

      {/* What We Create Section */}
      <SectionContainer variant="darker" className="relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/1.JPG)',
          }}
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-dark-black/70" />
        {/* Content */}
        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-h2 text-neutral-white mb-4">Transform Your Space</h2>
            <p className="text-lg text-neutral-white/80 max-w-2xl mx-auto">
              Step into a world of wonder & excitement with our dazzling LED art.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <FadeInOnScroll delay={0}>
              <NeonCard
                variant="blue"
                title="Immersive Transformations"
                description="Your space re-imagined with custom lightscapes, kinetic effects & color symphonies that transport guests to another universe."
                icon={Sparkles}
              />
            </FadeInOnScroll>
            <FadeInOnScroll delay={100}>
              <NeonCard
                variant="purple"
                title="Architectural Alchemy"
                description="Thresholds, corridors, ceilings & hidden nooks reshaped into vibrant portals to surprise & delight."
                icon={Layers}
              />
            </FadeInOnScroll>
            <FadeInOnScroll delay={200}>
              <NeonCard
                variant="magenta"
                title="Signature Statement Pieces"
                description="One-of-a-kind LED art installations -- bold centerpieces designed to make guests pause, photograph & remember."
                icon={Lightbulb}
              />
            </FadeInOnScroll>
            <FadeInOnScroll delay={300}>
              <NeonCard
                variant="green"
                title="Mood-Responsive Ambience"
                description="Lighting that adapts with music, emotion or time of day -- perfectly tailored to your gathering, gala or feeling."
                icon={Music}
              />
            </FadeInOnScroll>
          </div>
        </div>
      </SectionContainer>

      {/* Service Packages Section */}
      <SectionContainer variant="dark" className="bg-dark-brick/50">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-neutral-white mb-4">LEDream Custom Packages</h2>
          <p className="text-lg text-neutral-white/80 max-w-2xl mx-auto">
            Are you ready to begin crafting magic?
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {packageCards.map((pkg, index) => (
            <FadeInOnScroll key={pkg.name} delay={index * 100}>
              <PackageCard
                package={pkg}
                ctaText="Learn More"
                ctaHref="/services"
              />
            </FadeInOnScroll>
          ))}
        </div>
      </SectionContainer>

      {/* Process Overview Section */}
      <SectionContainer variant="darker">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-neutral-white mb-4">Your LEDream Journey</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {processStepsWithIcons.map((step, index) => {
            const Icon = step.icon;
            return (
              <FadeInOnScroll key={step.step} delay={index * 150}>
                <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-neon-blue/20 rounded-full blur-xl" />
                    <div className="relative bg-dark-brick border-2 border-neon-blue rounded-full p-6">
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
                <p className="text-neutral-white/70 text-sm leading-relaxed">
                  {step.description}
                </p>
                </div>
              </FadeInOnScroll>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <CTAButton
            text="Learn More About Our Process"
            href="/process"
            variant="secondary"
            icon={ArrowRight}
          />
        </div>
      </SectionContainer>

      {/* Featured Projects Gallery */}
      <SectionContainer variant="dark">
        <div className="text-center mb-16" id="portfolio">
          <h2 className="text-h2 text-neutral-white mb-4">Our Latest Masterpieces</h2>
          <p className="text-lg text-neutral-white/80 max-w-2xl mx-auto">
            Visit our gallery of memories & imagine the endless possibilities
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {projectCards.map((project, index) => (
            <FadeInOnScroll key={project.title} delay={index * 100}>
              <ProjectCard project={project} />
            </FadeInOnScroll>
          ))}
        </div>
        <div className="text-center">
          <CTAButton
            text="View Full Portfolio"
            href="/portfolio"
            variant="primary"
            size="lg"
            icon={ArrowRight}
          />
        </div>
      </SectionContainer>

      {/* Testimonials Section */}
      <SectionContainer variant="darker">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-neutral-white mb-4">What Our Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Placeholder Testimonials - Replace with actual testimonials */}
          <TestimonialCard
            quote="LEDream transformed our space into something truly magical. The attention to detail and creative vision exceeded all expectations."
            client="Sarah M."
            project="Residential Installation"
            rating={5}
          />
          <TestimonialCard
            quote="Our event was unforgettable thanks to LEDream. The lighting created an atmosphere that our guests are still talking about months later."
            client="Michael R."
            project="Event Space Transformation"
            rating={5}
          />
          <TestimonialCard
            quote="Working with LEDream was seamless from start to finish. Professional, creative, and absolutely stunning results."
            client="Jennifer L."
            project="Commercial Installation"
            rating={5}
          />
        </div>
      </SectionContainer>

      {/* Why LEDream Section */}
      <SectionContainer variant="dark">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-neutral-white mb-4">Why Choose LEDream?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <IconFeature
            icon={Award}
            title="Unrivaled Expertise"
            description="We transform the pedestrian into unforgettable memories"
            alignment="center"
          />
          <IconFeature
            icon={Palette}
            title="Unmatched Creativity"
            description="We are enthralling entertainers, technical experts & mystical story-tellers"
            alignment="center"
          />
          <IconFeature
            icon={Users}
            title="Unparalleled Professionalism"
            description="Our pros deliver an outstanding experience from start to finish"
            alignment="center"
          />
        </div>
      </SectionContainer>

      {/* Final CTA Section */}
      <SectionContainer variant="gradient" className="relative overflow-hidden">
        <GradientBackground darkOverlay speed="medium" className="absolute inset-0" />
        <div className="relative z-10 text-center">
          <h2 className="text-h2 md:text-h1 text-neutral-white mb-6 font-black">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg md:text-xl text-neutral-white/90 max-w-2xl mx-auto mb-8">
            Book your complimentary consultation and begin bringing your vision to reality.
          </p>
          <div className="mb-12">
            <CTAButton
              text="Book Free Consultation"
              href={contactInfo.consultationForm}
              external
              variant="primary"
              size="lg"
              icon={ArrowRight}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-neutral-white/80">
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-2 hover:text-neon-blue transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>{contactInfo.phone}</span>
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-2 hover:text-neon-blue transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>{contactInfo.email}</span>
            </a>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}

