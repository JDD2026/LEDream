"use client";

import {
  MessageSquare,
  Clock,
  Users,
  Award,
  HelpCircle,
  Headphones,
  Wrench,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { GradientBackground } from "@/components/animations/GradientBackground";
import { NeonText } from "@/components/animations/NeonText";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { CTAButton } from "@/components/ui/CTAButton";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { IconFeature } from "@/components/ui/IconFeature";
import { NeonCard } from "@/components/ui/NeonCard";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  processSteps,
  journeyIntro,
  whatToExpectContent,
  processFAQ,
  supportContent,
  packageComparisonContent,
} from "@/content/process";
import { contactInfo, siteConfig } from "@/content/site";
import { packages } from "@/content/services";

export function ProcessPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <GradientBackground darkOverlay speed="slow" className="absolute inset-0" />
        <div className="relative z-10 container-standard text-center px-4 py-24 md:py-32">
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 md:left-20 opacity-30 animate-float">
            <Sparkles className="h-8 w-8 text-neon-purple" />
          </div>
          <div className="absolute bottom-40 right-10 md:right-20 opacity-30 animate-float-delayed">
            <MessageSquare className="h-10 w-10 text-neon-blue" />
          </div>

          {/* Headline */}
          <NeonText
            text="Your LEDream Journey"
            color="multicolor"
            intensity="strong"
            animated
            as="h1"
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6"
          />

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-neutral-white/90 max-w-3xl mx-auto leading-relaxed mb-6">
            {journeyIntro}
          </p>

          {/* Brief Intro */}
          <p className="text-base md:text-lg text-neutral-white/80 max-w-2xl mx-auto leading-relaxed">
            We believe every transformation should be as unique as your vision. Our
            personalized approach ensures that from the first consultation to final
            training, you're guided by experts who understand your goals and bring
            your LEDream to life.
          </p>
        </div>
      </section>

      {/* Process Timeline Section */}
      <SectionContainer variant="darker">
        <div className="text-center mb-12">
          <h2 className="text-h2 text-neutral-white mb-4">The LEDream Process</h2>
          <p className="text-lg text-neutral-white/80 max-w-2xl mx-auto">
            A clear, step-by-step journey from vision to reality
          </p>
        </div>
        <ProcessTimeline steps={processSteps} />
      </SectionContainer>

      {/* What to Expect Section */}
      <SectionContainer variant="dark">
        <div className="text-center mb-12">
          <h2 className="text-h2 text-neutral-white mb-4">
            {whatToExpectContent.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {whatToExpectContent.items.map((item, index) => {
            const icons = [Clock, MessageSquare, Users, Award];
            const Icon = icons[index] || Award;
            return (
              <FadeInOnScroll key={item.title} delay={index * 100}>
                <IconFeature
                  icon={Icon}
                  title={item.title}
                  description={item.description}
                  alignment="left"
                />
              </FadeInOnScroll>
            );
          })}
        </div>
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer variant="darker">
        <div className="text-center mb-12">
          <h2 className="text-h2 text-neutral-white mb-4">
            Common Questions About Our Process
          </h2>
          <p className="text-lg text-neutral-white/80 max-w-2xl mx-auto">
            Everything you need to know about your LEDream journey
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {processFAQ.map((faq, index) => (
              <FadeInOnScroll key={index} delay={index * 50}>
                <AccordionItem value={`faq-${index}`} className="border-neutral-white/10">
                  <AccordionTrigger className="text-left text-neutral-white hover:text-neon-blue">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-white/80 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </FadeInOnScroll>
            ))}
          </Accordion>
        </div>
      </SectionContainer>

      {/* Support & Maintenance Section */}
      <SectionContainer variant="dark">
        <div className="text-center mb-12">
          <NeonText
            text={supportContent.title}
            color="blue"
            intensity="medium"
            as="h2"
            className="text-3xl md:text-4xl lg:text-5xl mb-6"
          />
          <p className="text-lg text-neutral-white/80 max-w-2xl mx-auto leading-relaxed">
            {supportContent.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {supportContent.items.map((item, index) => {
            const icons = [Headphones, Wrench, Sparkles, HelpCircle];
            const Icon = icons[index] || HelpCircle;
            return (
              <FadeInOnScroll key={item.title} delay={index * 100}>
                <NeonCard
                  variant={index % 2 === 0 ? "blue" : "purple"}
                  title={item.title}
                  description={item.description}
                  icon={Icon}
                />
              </FadeInOnScroll>
            );
          })}
        </div>
        <div className="text-center">
          <CTAButton
            text="Contact Support"
            href={`mailto:${contactInfo.email}`}
            variant="secondary"
            size="md"
          />
        </div>
      </SectionContainer>

      {/* Package Comparison Context */}
      <SectionContainer variant="darker">
        <div className="text-center mb-12">
          <h2 className="text-h2 text-neutral-white mb-4">
            {packageComparisonContent.title}
          </h2>
          <p className="text-lg text-neutral-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
            {packageComparisonContent.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {packages.map((pkg, index) => (
            <FadeInOnScroll key={pkg.id} delay={index * 100}>
              <NeonCard
                variant={pkg.tierColor as "blue" | "purple" | "magenta"}
                title={pkg.name}
                description={pkg.tagline}
                className="text-center"
              >
                <div className="mt-4">
                  <p className="text-2xl font-bold text-neutral-white mb-2">
                    {pkg.priceDisplay}
                  </p>
                  <p className="text-sm text-neutral-white/70 mb-4">
                    {pkg.features.length} key features
                  </p>
                </div>
              </NeonCard>
            </FadeInOnScroll>
          ))}
        </div>
        <div className="text-center">
          <CTAButton
            text="View Our Packages"
            href="/services"
            variant="secondary"
            size="md"
            icon={ArrowRight}
          />
        </div>
      </SectionContainer>

      {/* Final CTA Section */}
      <SectionContainer variant="gradient" className="relative overflow-hidden">
        <GradientBackground darkOverlay speed="medium" className="absolute inset-0" />
        <div className="relative z-10 text-center">
          <div className="mb-6 flex justify-center">
            <Sparkles className="h-12 w-12 text-neon-magenta animate-pulse" />
          </div>
          <h2 className="text-h2 md:text-h1 text-neutral-white mb-6 font-black">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg md:text-xl text-neutral-white/90 max-w-2xl mx-auto mb-8">
            Let's bring your vision to life with LEDream's proven process. Book your
            free consultation today and take the first step toward your transformation.
          </p>
          <CTAButton
            text="Book Free Consultation"
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

