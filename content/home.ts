import type { HeroContent, Project, Package, PageMetadata } from "./types";

/**
 * Home Page Content
 * <meta name="google-site-verification" content="eOIvOVXVXSrgNJ7_9_PcHNc_d53_Jzfkp354Nrq_2OQ" />
 * Content for the homepage including hero section, featured projects,
 * and package overview.
 */

export const homeMetadata: PageMetadata = {
  title: "LEDream | Custom LED Lighting Design & Installation in Minneapolis–Saint Paul",
  description:
    "Custom LED lighting design and installation in Minneapolis–Saint Paul. LEDream creates immersive LED, psychedelic art, lighting transformations, and atmosphere-enhancing LED installations for homes, events, and creative spaces in the Twin Cities.",
  keywords: [
  "LED lighting design",
  "LED lighting installation",
  "Minneapolis Twin Cities LED",
  "custom psychedelic art",
  "LED ambiance lighting",
  "residential LED lighting",
  "event LED installation"
  ],
};

/**
 * Hero Section Content
 */
export const heroContent: HeroContent = {
  headline: "Welcome to LEDream - Where Modern Art & Life Become One",
  subheadline:
  "Transform your space into a living art masterpiece with our immersive LED lighting & psychedelic art installations for homes, events and commercial spaces.\n" +
  "We're dream-weavers, reality-shifters and experts of cutting-edge technology.",
  ctaText: "Begin Your Journey",
  ctaHref: "https://tally.so/r/b5ZZE7",
};

/**
 * Featured Projects
 * Three featured projects to showcase on the homepage
 */
export const featuredProjects: Project[] = [
  {
    id: "psychedelic-funhouse",
    title: "Psychedelic Funhouse Fantasy",
    description:
      "We transformed an unremarkable living room into an out-of-this-world wonderland that left jaws open and cameras rolling",
    category: "residential",
    videoUrl: "https://youtu.be/Rl8RiOAwhac",
    images: ["/1.JPG", "/2.JPG", "/3.jpg"],
    tags: ["residential", "immersive", "psychedelic"],
    featured: true,
  },
  {
    id: "fantasy-jungle-nightclub",
    title: "Fantasy Jungle Nightclub",
    description:
      "We transformed Conga Latin Bistro into a psychedelic canopy of green LEDs, radiant flora & lasting impressions for AfterGlow: Reefer Dreamers",
    category: "commercial",
    videoUrl: "TBD", // Placeholder
    images: ["/4.JPG", "/5.JPG", "/6.JPG"],
    tags: ["commercial", "nightclub", "jungle", "green"],
    featured: true,
    client: "Conga Latin Bistro",
    location: "Event: AfterGlow: Reefer Dreamers",
  },
  {
    id: "halloween-wonderland",
    title: "Halloween Wonderland",
    description:
      "We transformed an ordinary event space into an Alice in Wonderland meets Halloween psychedelic magnum opus",
    category: "event",
    videoUrl: "TBD", // Placeholder
    images: ["/7.JPG", "/8.JPG", "/9.JPG"],
    tags: ["event", "halloween", "wonderland", "themed"],
    featured: true,
  },
];

/**
 * Quick Package Overview
 * Brief overview of service packages with CTAs
 */
export const packageOverview: Pick<Package, "id" | "name" | "priceDisplay" | "tagline" | "tierColor">[] = [
  {
    id: "spark",
    name: "The Spark",
    priceDisplay: "$5,000+",
    tagline: "Ideal for intimate gatherings & boutique spaces to shine & surprise",
    tierColor: "blue",
  },
  {
    id: "spectacle",
    name: "The Spectacle",
    priceDisplay: "$10,000+",
    tagline: "For galas, ceremonies & larger spaces to enchant & enrapture",
    tierColor: "purple",
  },
  {
    id: "legend",
    name: "The Legend",
    priceDisplay: "$15,000+",
    tagline: "For venues & clients who wish to become unforgettable",
    tierColor: "magenta",
  },
];

