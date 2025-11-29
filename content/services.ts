import type { PageMetadata, Package } from "./types";

/**
 * Services Page Content
 * 
 * Content for the services page including page intro and all service packages
 * (Spark, Spectacle, Legend) with features and pricing.
 */

export const servicesMetadata: PageMetadata = {
  title: "Services - LEDream Custom LED Installations",
  description:
    "Are you ready to begin crafting magic? We offer custom-tailored LED installation experiences. Choose from The Spark, The Spectacle, or The Legend packages.",
  keywords: [
    "LED installation services",
    "custom LED art",
    "LED packages",
    "immersive lighting",
    "LED design services",
  ],
};

/**
 * Page Introduction
 */
export const pageIntro =
  "Are you ready to begin crafting magic? We offer custom-tailored experiences designed to transform your space into a living art masterpiece.";

/**
 * Service Packages
 * All three service tiers with complete details
 */
export const packages: Package[] = [
  {
    id: "spark",
    name: "The Spark",
    price: 5000,
    priceDisplay: "$5,000+",
    tagline: "Ideal for intimate gatherings & boutique spaces to shine & surprise",
    description:
      "Perfect for intimate spaces. The Spark package includes immersive LED installations that transform key focal points into stunning visual experiences.",
    features: [
      "Immersive LED installation of key focal points (entrances, bars, feature walls)",
      "Color-mapped lighting scenes tailored to your purpose",
      "1-2 signature LED art statement pieces designed to delight",
      "Hands-on training for simple control & automation",
    ],
    tierColor: "blue",
    badge: "Perfect for intimate spaces",
  },
  {
    id: "spectacle",
    name: "The Spectacle",
    price: 10000,
    priceDisplay: "$10,000+",
    tagline: "For galas, ceremonies & larger spaces to enchant & enrapture",
    description:
      "Designed for larger events and spaces that demand a complete transformation. The Spectacle package creates an immersive environment that captivates and amazes.",
    features: [
      "Everything in the Spark, plus:",
      "Full-room transformation with dynamic ceilings, walls & thresholds",
      "3-4 signature LED art statement pieces to enthrall & entrance",
      "Complete synchronization & training to create custom atmospheres",
    ],
    tierColor: "purple",
    badge: "Most Popular",
  },
  {
    id: "legend",
    name: "The Legend",
    price: 15000,
    priceDisplay: "$15,000+",
    tagline: "For venues & clients who wish to become unforgettable",
    description:
      "The ultimate LEDream experience. The Legend package creates a multi-room immersive fantasy that becomes the talk of the town. Perfect for venues and clients who want to make a lasting impression.",
    features: [
      "Everything in the Spectacle, plus:",
      "Multi-room or whole-venue transformation",
      "Ultimate immersive fantasy atmosphere with dazzling designs",
      "Dedicated creative team to weave a custom narrative theme",
      "Ongoing service & maintenance",
    ],
    tierColor: "magenta",
    badge: "Ultimate Experience",
  },
];

/**
 * Common inclusions in all packages
 */
export const commonInclusions = [
  {
    title: "Professional Consultation",
    description: "Expert guidance to understand your vision and space requirements",
  },
  {
    title: "Custom Design",
    description: "Tailored design solutions that perfectly fit your space and purpose",
  },
  {
    title: "Quality Materials",
    description: "Premium LED materials and hardware for lasting installations",
  },
  {
    title: "Professional Installation",
    description: "Expert installation by our skilled team with attention to detail",
  },
  {
    title: "Training & Support",
    description: "Comprehensive training and ongoing support for your team",
  },
];

/**
 * FAQ Questions and Answers
 */
export const faqItems = [
  {
    question: "How do I choose the right package?",
    answer:
      "Consider your space size, event type, and desired impact. The Spark is perfect for intimate spaces and boutique venues. The Spectacle works well for larger events and full-room transformations. The Legend is ideal for venues seeking a complete, unforgettable experience with ongoing support. We offer free consultations to help you determine the best fit.",
  },
  {
    question: "Can I upgrade my package later?",
    answer:
      "Yes! We understand that needs evolve. You can upgrade from The Spark to The Spectacle or from The Spectacle to The Legend. We'll work with you to seamlessly integrate additional features and installations into your existing setup.",
  },
  {
    question: "What's the typical timeline for installation?",
    answer:
      "Timeline varies based on package complexity and space size. The Spark typically takes 1-2 weeks from consultation to completion. The Spectacle requires 2-4 weeks, and The Legend may take 4-8 weeks for full multi-room transformations. We'll provide a detailed timeline during your consultation.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes! All packages include initial training and support. The Legend package includes dedicated ongoing service and maintenance. For Spark and Spectacle packages, we offer support packages and maintenance services to ensure your installation continues to shine.",
  },
];

/**
 * Process Preview Steps
 */
export const serviceProcessPreview = [
  {
    step: 1,
    title: "Consultation",
    description: "We discuss your vision, space, and goals to create a custom plan",
  },
  {
    step: 2,
    title: "Design & Planning",
    description: "Our team designs your LED transformation with detailed planning",
  },
  {
    step: 3,
    title: "Installation & Training",
    description: "Professional installation followed by comprehensive training",
  },
];

