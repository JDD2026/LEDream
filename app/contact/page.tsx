import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { GradientBackground } from "@/components/animations/GradientBackground";
import { NeonText } from "@/components/animations/NeonText";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { ContactForm } from "@/components/forms/ContactForm";
import { CTAButton } from "@/components/ui/CTAButton";
import { ExternalLinkButton } from "@/components/ui/ExternalLinkButton";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { contactMetadata } from "@/content/contact";
import { contactInfo, socialLinks } from "@/content/site";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const metadata: Metadata = {
  title: contactMetadata.title,
  description: contactMetadata.description,
  keywords: contactMetadata.keywords,
  openGraph: {
    title: contactMetadata.title,
    description: contactMetadata.description,
    type: "website",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: contactMetadata.title,
    description: contactMetadata.description,
  },
};

/**
 * Contact Page
 * 
 * Professional contact page with consultation form, contact information,
 * and multiple ways to get in touch with LEDream.
 */
export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <GradientBackground
          darkOverlay
          speed="slow"
          className="absolute inset-0"
        />
        <div className="relative z-10 container-standard text-center px-4 py-24 md:py-32">
          <NeonText
            text="Let's Create Something Extraordinary"
            color="multicolor"
            intensity="strong"
            animated
            as="h1"
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6"
          />
          <p className="text-lg md:text-xl lg:text-2xl text-neutral-white/90 max-w-3xl mx-auto leading-relaxed mb-4">
            Book your complimentary consultation and begin bringing your vision
            to reality.
          </p>
          <p className="text-base md:text-lg text-neutral-white/70 max-w-2xl mx-auto">
            We're here to help transform your space into a living art
            masterpiece. Get in touch today!
          </p>
        </div>
      </section>

      {/* Main Content Section - Two Column Layout */}
      <SectionContainer variant="darker" className="py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Column - Contact Form (60% on desktop) */}
          <div className="lg:col-span-3">
            <FadeInOnScroll>
              <div className="bg-dark-navy/50 backdrop-blur-sm rounded-lg border border-neon-blue/20 p-6 md:p-8 shadow-neon-blue/10">
                <ContactForm />
              </div>
            </FadeInOnScroll>
          </div>

          {/* Right Column - Contact Information (40% on desktop) */}
          <div className="lg:col-span-2">
            <FadeInOnScroll delay={200}>
              <div className="bg-dark-navy/50 backdrop-blur-sm rounded-lg border border-neon-purple/20 p-6 md:p-8 shadow-neon-purple/10 h-fit">
                <h3 className="text-h3 text-neutral-white mb-6 font-heading">
                  Get In Touch
                </h3>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center group-hover:bg-neon-blue/20 group-hover:border-neon-blue/50 transition-all duration-normal">
                      <Phone className="h-5 w-5 text-neon-blue" />
                    </div>
                    <div className="flex-1">
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="block text-lg font-semibold text-neutral-white hover:text-neon-blue transition-colors duration-normal mb-1"
                      >
                        {contactInfo.phone}
                      </a>
                      <p className="text-sm text-neutral-white/60">
                        Call us for immediate assistance
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-neon-purple/10 border border-neon-purple/30 flex items-center justify-center group-hover:bg-neon-purple/20 group-hover:border-neon-purple/50 transition-all duration-normal">
                      <Mail className="h-5 w-5 text-neon-purple" />
                    </div>
                    <div className="flex-1">
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="block text-lg font-semibold text-neutral-white hover:text-neon-purple transition-colors duration-normal mb-1 break-all"
                      >
                        {contactInfo.email}
                      </a>
                      <p className="text-sm text-neutral-white/60">
                        Send us a message anytime
                      </p>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-neon-magenta/10 border border-neon-magenta/30 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-neon-magenta" />
                    </div>
                    <div className="flex-1">
                      <p className="text-lg font-semibold text-neutral-white mb-1">
                        Office Hours
                      </p>
                      <p className="text-sm text-neutral-white/60">
                        By appointment only
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </SectionContainer>

      {/* Alternative CTA Section */}
      <SectionContainer variant="dark" className="py-16 md:py-24">
        <FadeInOnScroll>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-h2 text-neutral-white mb-4 font-heading">
              Prefer to Use Our Booking Form?
            </h2>
            <p className="text-lg text-neutral-white/80 mb-8">
              You can also book your consultation directly through our scheduling
              system
            </p>
            <ExternalLinkButton
              text="Open Booking Form"
              href={contactInfo.consultationForm}
              external
              variant="primary"
              size="lg"
            />
          </div>
        </FadeInOnScroll>
      </SectionContainer>

      {/* Social Media Links Section */}
      <SectionContainer variant="darker" className="py-16 md:py-24">
        <FadeInOnScroll>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-h2 text-neutral-white mb-4 font-heading">
              Follow Our Journey
            </h2>
            <p className="text-lg text-neutral-white/80 mb-8">
              Connect with us on social media to see our latest projects and
              transformations
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {socialLinks.map((social) => {
                const iconMap: Record<string, React.ReactNode> = {
                  instagram: (
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                  facebook: (
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                  youtube: (
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                  linkedin: (
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                };

                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group flex items-center justify-center w-14 h-14 rounded-lg",
                      "bg-dark-navy border border-neutral-white/20",
                      "hover:border-neon-blue hover:bg-neon-blue/10",
                      "transition-all duration-normal",
                      "text-neutral-white hover:text-neon-blue"
                    )}
                    aria-label={social.label}
                  >
                    {iconMap[social.platform] || (
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </FadeInOnScroll>
      </SectionContainer>

      {/* FAQ Quick Links Section */}
      <SectionContainer variant="dark" className="py-16 md:py-24">
        <FadeInOnScroll>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-h2 text-neutral-white mb-4 font-heading">
              Have Questions?
            </h2>
            <p className="text-lg text-neutral-white/80 mb-8">
              Check out our services page for answers to common questions about
              our packages, process, and LED installations.
            </p>
            <CTAButton
              text="View Our Services"
              href="/services"
              variant="secondary"
              size="lg"
            />
          </div>
        </FadeInOnScroll>
      </SectionContainer>
    </>
  );
}

