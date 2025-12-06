import type { PageMetadata, Project } from "./types";

/**
 * Portfolio Page Content
 * 
 * Content for the portfolio page including gallery intro and all projects
 * with descriptions, videos, and images.
 */

export const portfolioMetadata: PageMetadata = {
  title: "Portfolio - LEDream Gallery of Transformations",
  description:
    "Visit our gallery of memories & imagine the endless possibilities of your own LEDream transformation journey. See our completed residential, commercial, and event installations.",
  keywords: [
    "LED art portfolio",
    "LED installation gallery",
    "LED transformations",
    "LED project examples",
    "LED installation photos",
  ],
};

/**
 * Gallery Introduction
 */
export const galleryIntro =
  "Visit our gallery of memories & imagine the endless possibilities of your own LEDream transformation journey";

/**
 * All Portfolio Projects
 * Complete list of all projects with full details
 */
export const projects: Project[] = [
  {
    id: "psychedelic-funhouse-fantasy",
    title: "Psychedelic Funhouse Fantasy",
    description:
      "We transformed an unremarkable living room into an out-of-this-world wonderland that left jaws open and cameras rolling – watch our psychedelic masterpiece here.",
    category: "residential",
    videoUrl: "https://www.youtube.com/watch?v=Rl8RiOAwhac",
    images: ["/7.JPG", "/2.JPG", "/3.jpg"],
    tags: ["residential", "event"],
    featured: true,
  },
  {
    id: "fantasy-jungle-nightclub",
    title: "Fantasy Jungle Nightclub",
    description:
      "We transformed Conga Latin Bistro into a psychedelic canopy of green LEDs, radiant flora & lasting impressions for AfterGlow: Reefer Dreamers – watch our wilderness masterpiece here.",
    category: "commercial",
    videoUrl: "https://youtu.be/MGYK27frO-g?si=DJIiMwqECRtIWzID",
    images: ["/3.jpg", "/5.JPG", "/6.JPG"],
    tags: ["commercial", "event"],
    featured: true,
    client: "Conga Latin Bistro",
    location: "AfterGlow: Reefer Dreamers",
  },
  {
    id: "halloween-in-wonderland",
    title: "Halloween in Wonderland",
    description:
      "We transformed an ordinary event space into an Alice in Wonderland meets Halloween psychedelic magnum opus – watch our living Halloween wonderland here.",
    category: "commercial",
    videoUrl: "https://www.youtube.com/watch?v=jjaO22Xkdq0",
    images: ["/4.JPG", "/8.JPG", "/9.JPG"],
    tags: ["commercial", "event"],
    featured: true,
    externalLink: "https://allenphotoworks.pixieset.com/20241019-halloweeninwonderland",
    externalLinkLabel: "View Photo Gallery",
  },
  {
    id: "outer-space-symphony",
    title: "Outer Space Symphony",
    description:
      "We transformed Central Mix into an outer space opera house in psychedelic Neon & LED. Watch our galactic masterpiece here:",
    category: "commercial",
    videoUrl: "https://www.youtube.com/watch?v=-BxYNe_wx7s",
    images: ["/oss.JPG", "/11.JPG", "/12.jpg"],
    tags: ["commercial", "event"],
    featured: true,
    location: "Central Mix",
  },
  {
    id: "journey-to-bowsers-castle",
    title: "Journey to Bowser's Castle",
    description:
      "We transformed Jester's Wondrous Funhouse into a futuristic Bowser's Castle fantasyland in psychedelic Neon & LED. Watch our fiery masterpiece here:",
    category: "residential",
    images: ["/bowser.jpg", "/17.jpg", "/18.jpg"],
    tags: ["residential", "event"],
    featured: true,
    location: "Jester's Wondrous Funhouse",
    externalLink: "https://allenphotoworks.pixieset.com/20250301-afterglowmpls-journeytobowserscastle/",
    externalLinkLabel: "View Photo Gallery",
  },
  {
    id: "untamed-halloween",
    title: "Untamed Halloween",
    description:
      "We transformed Jester's Wondrous Funhouse to a fantasy Halloween jungle in psychedelic Neon & LED. View the photo journey of our immersive wonderland here:",
    category: "residential",
    images: ["/untamed.jpg", "/23.jpg"],
    tags: ["residential", "event"],
    featured: true,
    location: "Jester's Wondrous Funhouse",
    externalLink: "https://pixellephotos.pixieset.com/afterglow",
    externalLinkLabel: "View Photo Gallery",
  },
];

/**
 * Featured Projects Only
 * Filtered list of featured projects for homepage or featured sections
 */
export const featuredPortfolioProjects = projects.filter((project) => project.featured);

