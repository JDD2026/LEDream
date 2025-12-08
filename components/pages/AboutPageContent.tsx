"use client";

import Image from "next/image";
import {
  Sparkles,
  Heart,
  Cpu,
  DoorOpen,
  Zap,
  Award,
  Palette,
  Users,
  Diamond,
  ArrowRight,
} from "lucide-react";
import { GradientBackground } from "@/components/animations/GradientBackground";
import { NeonText } from "@/components/animations/NeonText";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { CTAButton } from "@/components/ui/CTAButton";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { NeonCard } from "@/components/ui/NeonCard";
import { IconFeature } from "@/components/ui/IconFeature";
import { VideoBackground } from "@/components/ui/VideoBackground";
import {
  welcomeMessage,
  originStory,
  philosophy,
  ledArtSections,
  whyLEDream,
  teamMember,
  closingInvitation,
} from "@/content/about";
import { contactInfo } from "@/content/site";

export function AboutPageContent() {
  const originStoryText = originStory[0];
  const philosophyStatements = [
    "Every LEDream transformation beams with wonder, sensation and excitement.",
    "Every pixel pulses with presence, play and possibility.",
    "Every space becomes a living art masterpiece.",
  ];

  const ledArtIcons = [Cpu, DoorOpen, Zap];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <GradientBackground darkOverlay speed="slow" className="absolute inset-0" />
        <div className="relative z-10 container-standard text-center px-4 py-24 md:py-32">
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 md:left-20 opacity-30 animate-float">
            <Diamond className="h-8 w-8 text-neon-purple" />
          </div>
          <div className="absolute bottom-40 right-10 md:right-20 opacity-30 animate-float-delayed">
            <Sparkles className="h-10 w-10 text-neon-blue" />
          </div>

          {/* Headline */}
          <NeonText
            text="Welcome, Friend"
            color="multicolor"
            intensity="strong"
            animated
            as="h1"
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6"
          />

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-neutral-white/90 max-w-3xl mx-auto leading-relaxed">
            We greet you with open doors and wonder. The world of LEDream beckons -- a world of light, laughter and limitless fun where imagination fuels reality.
          </p>
        </div>
      </section>

      {/* Origin Story Section */}
      <SectionContainer variant="darker">
        <div className="text-center mb-12">
          <h2 className="text-h2 text-neutral-white mb-4">Our Origin Spark</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column: Narrative Text */}
          <FadeInOnScroll delay={0}>
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-neutral-white/90 leading-relaxed">
                LEDream was born in late 2024 from a daring vision: to transform an ordinary space into an extraordinary one.
              </p>
              <p className="text-base md:text-lg text-neutral-white/80 leading-relaxed">
                {originStoryText.story}
              </p>
              <p className="text-base md:text-lg text-neutral-white/80 leading-relaxed">
                After several unforgettable experiences, we discovered our craft—the art of weaving light, color, and imagination into immersive atmospheres that leave guests in awe. Each installation taught us something new about the power of LED & art to transport people to otherworldly realms.
              </p>
              <p className="text-base md:text-lg text-neutral-white/80 leading-relaxed">
                What started as an experiment in transforming spaces has evolved into a passion for creating living art masterpieces. We learned that every pixel matters, every color choice tells a story, and every installation is an opportunity to craft something truly magical.
              </p>
              {originStoryText.highlights && (
                <ul className="space-y-3 mt-6">
                  {originStoryText.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Sparkles className="h-5 w-5 text-neon-blue flex-shrink-0 mt-1" />
                      <span className="text-neutral-white/80">{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </FadeInOnScroll>

          {/* Right Column: Image or Decorative Element */}
          <FadeInOnScroll delay={200}>
            <div className="flex justify-center lg:justify-start w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto lg:mx-0">
              <div className="relative w-full inline-block">
                <Image
                  src="/5.JPG"
                  alt="LEDream Origin"
                  width={800}
                  height={800}
                  className="w-full h-auto rounded-lg border-2 border-neon-blue/30"
                  sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 600px"
                />
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </SectionContainer>

      {/* Philosophy Section */}
      <SectionContainer variant="dark">
        <div className="text-center mb-12">
          <h2 className="text-h2 text-neutral-white mb-4">{philosophy.title}</h2>
          <p className="text-lg text-neutral-white/80 max-w-3xl mx-auto leading-relaxed">
            {philosophy.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {philosophyStatements.map((statement, index) => (
            <FadeInOnScroll key={index} delay={index * 100}>
              <NeonCard
                variant={index === 0 ? "blue" : index === 1 ? "purple" : "magenta"}
                description={statement}
                className="text-center"
              />
            </FadeInOnScroll>
          ))}
        </div>
      </SectionContainer>

      {/* What is LED Art Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <VideoBackground
          videoSrc="/OSS1.mp4"
          overlayOpacity={0.7}
          overlayColor="dark-black"
        />
        <div className="relative z-10 container-standard">
          <div className="text-center mb-12">
            <NeonText
              text="What is LED Art?"
              color="blue"
              intensity="medium"
              as="h2"
              className="text-3xl md:text-4xl lg:text-5xl mb-6"
            />
            <p className="text-lg text-neutral-white/80 max-w-3xl mx-auto leading-relaxed">
              LED art is more than lighting—it's a medium for transformation, a canvas for creativity, and a portal to new dimensions of experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-12">
          {ledArtSections.map((section, index) => {
            const Icon = ledArtIcons[index];
            return (
              <FadeInOnScroll key={section.title} delay={index * 150}>
                <IconFeature
                  icon={Icon}
                  title={section.title}
                  description={section.description}
                  alignment="center"
                />
              </FadeInOnScroll>
            );
          })}
          </div>
        </div>
      </section>

      {/* Why LEDream Section */}
      <SectionContainer variant="dark">
        <div className="text-center mb-12">
          <h2 className="text-h2 text-neutral-white mb-4">Why LEDream?</h2>
          <p className="text-lg text-neutral-white/80 max-w-2xl mx-auto">
            Bring the most creative team in town to realize your vision
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-12">
          {whyLEDream.map((item, index) => {
            const icons = [Award, Palette, Users];
            const Icon = icons[index];
            return (
              <FadeInOnScroll key={item.title} delay={index * 100}>
                <IconFeature
                  icon={Icon}
                  title={item.title}
                  description={item.description}
                  alignment="center"
                />
              </FadeInOnScroll>
            );
          })}
        </div>
      </SectionContainer>

      {/* Meet Your Guide Section */}
      <SectionContainer variant="darker">
        <div className="text-center mb-12">
          <h2 className="text-h2 text-neutral-white mb-4">Your LEDream Curator</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <FadeInOnScroll delay={0}>
            <div className="bg-dark-brick border-2 border-neon-blue/30 rounded-lg p-8 md:p-12 shadow-neon-blue/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Photo */}
                <div className="flex justify-center md:justify-start">
                  <div className="relative w-64 h-64 md:w-80 md:h-80">
                    <Image
                      src="/JDD.jpg"
                      alt={teamMember.name}
                      fill
                      className="object-cover rounded-full border-4 border-neon-blue/50"
                      style={{ objectPosition: 'center 35%' }}
                    />
                  </div>
                </div>

                {/* Bio Content */}
                <div className="space-y-4 text-center md:text-left">
                  <div>
                    <h3 className="text-h3 text-neon-blue font-heading mb-2">
                      {teamMember.name}
                      {teamMember.credentials && `, ${teamMember.credentials}`}
                    </h3>
                    <p className="text-lg text-neutral-white/80 font-semibold mb-4">
                      {teamMember.title}
                    </p>
                  </div>
                  <p className="text-base md:text-lg text-neutral-white/80 leading-relaxed">
                    {teamMember.bio}
                  </p>
                  {/* Decorative Icons */}
                  <div className="flex gap-4 justify-center md:justify-start pt-4">
                    <Diamond className="h-6 w-6 text-neon-purple/60" />
                    <Sparkles className="h-6 w-6 text-neon-blue/60" />
                    <Diamond className="h-6 w-6 text-neon-magenta/60" />
                  </div>
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </SectionContainer>

      {/* Closing CTA Section */}
      <SectionContainer variant="gradient" className="relative overflow-hidden">
        <GradientBackground darkOverlay speed="medium" className="absolute inset-0" />
        <div className="relative z-10 text-center">
          <div className="mb-6 flex justify-center">
            <Heart className="h-12 w-12 text-neon-magenta animate-pulse" />
          </div>
          <h2 className="text-h2 md:text-h1 text-neutral-white mb-6 font-black">
            Let's Build Your Dream Together
          </h2>
          <p className="text-lg md:text-xl text-neutral-white/90 max-w-2xl mx-auto mb-8">
            {closingInvitation}
          </p>
          <CTAButton
            text="Begin Your Journey"
            href={contactInfo.consultationForm}
            external
            variant="primary"
            size="lg"
            icon={ArrowRight}
          />
        </div>
      </SectionContainer>
    </>
  );
}

