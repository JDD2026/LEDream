import type { SocialLink, PageMetadata } from "./types";

/**
 * Global Site Content
 * 
 * Site-wide content including metadata, contact information, and social links.
 * Used across all pages for consistent branding and information.
 */

export const siteConfig = {
  name: "LEDream",
  tagline: "Where modern art & life become one",
  description:
    "We transform any space into a living art masterpiece through cutting-edge LED art, immersive design & psychedelic fantasy.",
  founded: "Late 2024",
} as const;

export const siteMetadata: PageMetadata = {
  title: "LEDream - Where Modern Art & Life Become One",
  description:
    "Transform any space into a living art masterpiece through cutting-edge LED art, immersive design & psychedelic fantasy. Custom LED installations for residential, commercial, and event spaces.[...]",
  keywords: [
    "LED art",
    "LED installation",
    "immersive design",
    "psychedelic fantasy",
    "custom lighting",
    "LED transformation",
    "art installation",
    "lighting design",
  ],
};

export const contactInfo = {
  phone: "651-210-7253",
  email: "portal@ledream.art",
  consultationForm: "https://tally.so/r/b5ZZE7",
} as const;

/**
 * NOTE: social link URLs previously pointed to AfterGlow accounts.
 * Per instructions, these have been removed so no incorrect/blank links render.
 * Replace with real LEDream profile URLs when available.
 */
export const socialLinks: SocialLink[] = [];
