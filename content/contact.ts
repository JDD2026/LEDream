import type { PageMetadata } from "./types";

/**
 * Contact Page Content
 * 
 * Content for the contact page including headlines, contact information,
 * and consultation form details.
 */

export const contactMetadata: PageMetadata = {
  title: "Contact LEDream - Begin Your Transformation Journey",
  description:
    "Let's create something extraordinary together. Book your complimentary consultation now or schedule a visit to our showroom to begin bringing your vision to reality.",
  keywords: [
    "contact LEDream",
    "LED installation consultation",
    "LED design consultation",
    "LED art consultation",
  ],
};

/**
 * Page Headlines
 * Multiple headline options for flexibility
 */
export const headlines = {
  primary: "Let's Create Something Extraordinary",
  secondary: "Begin Your LEDream Journey",
} as const;

/**
 * Subheadline
 */
export const subheadline =
  "Book your complimentary consultation now or schedule a visit to our showroom to begin bringing your vision to reality.";

/**
 * Contact Information
 */
export const contactPageInfo = {
  phone: {
    label: "Call us",
    number: "651-210-7253",
    href: "tel:651-210-7253",
  },
  email: {
    label: "Email us",
    address: "jesterdapperdan@gmail.com",
    href: "mailto:jesterdapperdan@gmail.com",
  },
} as const;

/**
 * Consultation Form
 */
export const consultationForm = {
  url: "https://tally.so/r/b5ZZE7",
  text: "Book Consultation",
  description: "Fill out our consultation form to get started",
} as const;

/**
 * Closing Message
 */
export const closingMessage =
  "LEDream delivers spectacle & quality befitting your imagination.";

