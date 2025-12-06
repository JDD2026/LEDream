"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Process", href: "/process" },
  { name: "Contact", href: "/contact" },
];

const CONSULTATION_URL = "https://tally.so/r/b5ZZE7";

/**
 * Header/Navigation Component
 * Sticky header with dark background, navigation menu, and CTA button.
 * Features smooth scroll behavior and active link detection.
 */
export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    // Close mobile menu when navigation link is clicked
    setIsMobileMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-normal",
        "bg-[rgba(10,10,10,0.95)] backdrop-blur-md",
        "border-b border-dark-navy/50",
        isScrolled && "shadow-lg"
      )}
    >
      <nav
        className="container-standard"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo size="xl" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "relative text-sm font-medium text-neutral-white",
                    "transition-colors duration-normal",
                    "hover:text-neon-blue focus:text-neon-blue",
                    "focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-offset-2 focus:ring-offset-dark-black rounded-sm",
                    active && "text-neon-blue"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.name}
                  {active && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neon-blue"
                      style={{
                        boxShadow: "0 0 5px #00F0FF, 0 0 10px #00F0FF",
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Desktop CTA */}
            <Button
              asChild
              className="hidden md:flex btn-neon-outline border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-black"
            >
              <a
                href={CONSULTATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-semibold transition-all duration-normal"
              >
                Book Consultation
              </a>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-neutral-white hover:text-neon-blue hover:bg-dark-navy"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full sm:w-96 bg-dark-black border-dark-navy"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Logo */}
                  <div className="mb-8 pt-4">
                    <Logo size="sm" />
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
                    {navigationItems.map((item) => {
                      const active = isActive(item.href);
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => handleNavClick(item.href)}
                          className={cn(
                            "text-lg font-medium py-2 px-4 rounded-lg",
                            "transition-all duration-normal",
                            "text-neutral-white",
                            "hover:text-neon-blue hover:bg-dark-navy",
                            "focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-offset-2 focus:ring-offset-dark-black",
                            active && "text-neon-blue bg-dark-navy"
                          )}
                          aria-current={active ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </nav>

                  {/* Mobile CTA */}
                  <div className="mt-auto pt-8 pb-4">
                    <Button
                      asChild
                      className="w-full btn-neon-outline border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-black"
                    >
                      <a
                        href={CONSULTATION_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center py-3 font-semibold"
                      >
                        Book Consultation
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}

