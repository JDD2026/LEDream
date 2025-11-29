import Link from "next/link";
import {
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const navigationLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Process", href: "/process" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/afterglow_mpls/",
    icon: Instagram,
    ariaLabel: "Visit LEDream on Instagram",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/AfterGlow.Mpls",
    icon: Facebook,
    ariaLabel: "Visit LEDream on Facebook",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@afterglow_mpls?si=MXpSfPTqwWTahCZH",
    icon: Youtube,
    ariaLabel: "Visit LEDream on YouTube",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/ledream",
    icon: Linkedin,
    ariaLabel: "Visit LEDream on LinkedIn",
  },
];

const CONSULTATION_URL = "https://tally.so/r/b5ZZE7";

/**
 * Footer Component
 * Multi-column footer with company info, links, contact, and CTA.
 * Features brick texture background and neon accents.
 */
export function Footer() {
  return (
    <footer className="bg-dark-black bg-brick-wall relative">
      {/* Top border with neon gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50" />

      <div className="container-standard section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Column */}
          <div className="lg:col-span-1">
            <Logo size="sm" className="mb-4" />
            <p className="text-sm font-semibold text-neon-blue mb-3">
              Where modern art & life become one
            </p>
            <p className="text-sm text-neutral-white/80 mb-4 leading-relaxed">
              Transforming spaces with cutting-edge LED installations that blend
              artistry with innovation.
            </p>
            <p className="text-xs text-neutral-white/60 italic">
              Your LEDream curator & guide - Jester Dapper Dan, Ph.D.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-base font-semibold text-neutral-white mb-4 pb-2 border-b border-dark-navy">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm text-neutral-white/80",
                    "transition-colors duration-normal",
                    "hover:text-neon-blue focus:text-neon-blue",
                    "focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-offset-2 focus:ring-offset-dark-black rounded-sm"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Get In Touch Column */}
          <div>
            <h3 className="text-base font-semibold text-neutral-white mb-4 pb-2 border-b border-dark-navy">
              Get In Touch
            </h3>
            <div className="flex flex-col gap-4">
              {/* Phone */}
              <a
                href="tel:651-210-7253"
                className={cn(
                  "flex items-center gap-3 text-sm text-neutral-white/80",
                  "transition-colors duration-normal",
                  "hover:text-neon-blue focus:text-neon-blue",
                  "focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-offset-2 focus:ring-offset-dark-black rounded-sm"
                )}
                aria-label="Call LEDream at 651-210-7253"
              >
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>651-210-7253</span>
              </a>

              {/* Email */}
              <a
                href="mailto:jesterdapperdan@gmail.com"
                className={cn(
                  "flex items-center gap-3 text-sm text-neutral-white/80",
                  "transition-colors duration-normal",
                  "hover:text-neon-blue focus:text-neon-blue",
                  "focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-offset-2 focus:ring-offset-dark-black rounded-sm",
                  "break-all"
                )}
                aria-label="Email LEDream at jesterdapperdan@gmail.com"
              >
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>jesterdapperdan@gmail.com</span>
              </a>

              {/* Social Media Icons */}
              <div className="mt-2">
                <p className="text-xs text-neutral-white/60 mb-3">Follow Us</p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "text-neutral-white/60",
                          "transition-all duration-normal",
                          "hover:text-neon-blue hover:scale-110",
                          "focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-offset-2 focus:ring-offset-dark-black rounded-sm",
                          "gpu-accelerated"
                        )}
                        aria-label={social.ariaLabel}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter/CTA Column */}
          <div>
            <h3 className="text-base font-semibold text-neutral-white mb-4 pb-2 border-b border-dark-navy">
              Start Your Journey
            </h3>
            <p className="text-sm text-neutral-white/80 mb-6 leading-relaxed">
              Ready to transform your space? Book a consultation and let's bring
              your vision to life.
            </p>
            <Button
              asChild
              className="w-full btn-neon-outline border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-black"
            >
              <a
                href={CONSULTATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 font-semibold text-sm"
              >
                Book Consultation
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-dark-navy">
        <div className="container-standard py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-neutral-white/60 text-center md:text-left">
              © 2024 LEDream. All rights reserved.
            </p>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent md:hidden" />
            <p className="text-xs text-neutral-white/40 text-center md:text-right">
              Designed with{" "}
              <span className="text-neon-magenta">passion</span> and{" "}
              <span className="text-neon-blue">innovation</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

