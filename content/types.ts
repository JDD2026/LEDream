/**
 * Content Type Definitions
 * 
 * TypeScript interfaces for all content structures used throughout the LEDream website.
 * These types ensure type safety and provide autocomplete support.
 */

/**
 * Service package tier
 */
export type PackageTier = "spark" | "spectacle" | "legend";

/**
 * Package tier color
 */
export type TierColor = "red" | "blue" | "purple" | "magenta" | "green";

/**
 * Project category
 */
export type ProjectCategory = "residential" | "commercial" | "event";

/**
 * Process step icon identifier
 */
export type ProcessIcon = "consultation" | "installation" | "training";

/**
 * Team member role
 */
export type TeamRole = "founder" | "curator" | "designer" | "technician";

/**
 * Service Package
 * Represents a service tier (Spark, Spectacle, Legend)
 */
export interface Package {
  id: string;
  name: string;
  price: number;
  priceDisplay: string;
  tagline: string;
  features: string[];
  description: string;
  tierColor: TierColor;
  badge?: string;
}

/**
 * Portfolio Project
 * Represents a completed LED installation project
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  videoUrl?: string;
  images: string[];
  tags: string[];
  featured: boolean;
  client?: string;
  location?: string;
  externalLink?: string;
  externalLinkLabel?: string;
}

/**
 * Process Step
 * Represents a step in the LEDream transformation process
 */
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: ProcessIcon;
  whatToExpect?: string[];
  timeline?: string;
}

/**
 * Team Member
 * Represents a team member or key person
 */
export interface TeamMember {
  name: string;
  title: string;
  credentials?: string;
  bio: string;
  image?: string;
  role: TeamRole;
}

/**
 * Client Testimonial
 * Represents a client testimonial or review
 */
export interface Testimonial {
  id: string;
  client: string;
  quote: string;
  project?: string;
  rating?: number;
  date?: string;
}

/**
 * Origin Story Entry
 * Represents a milestone in LEDream's history
 */
export interface OriginStory {
  year: string;
  story: string;
  highlights?: string[];
}

/**
 * Page Metadata
 * SEO and page information
 */
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
}

/**
 * Hero Section Content
 */
export interface HeroContent {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaHref: string;
}

/**
 * Social Media Link
 */
export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

