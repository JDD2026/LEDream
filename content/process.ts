import type { PageMetadata, ProcessStep } from "./types";

/**
 * Process Page Content
 * 
 * Content for the process page including journey intro and all process steps
 * with descriptions and icons.
 */

export const processMetadata: PageMetadata = {
  title: "Our Process - LEDream Transformation Journey",
  description:
    "Each LEDream journey is unique. Our pros will guide you at each stage of your exciting transformation from vision to reality.",
  keywords: [
    "LED installation process",
    "LED design process",
    "LED consultation",
    "LED installation steps",
  ],
};

/**
 * Journey Introduction
 */
export const journeyIntro =
  "Each LEDream journey is unique. Our pros will guide you at each stage of your exciting transformation.";

/**
 * Process Steps
 * The three main steps in the LEDream transformation process
 */
export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Vision-Crafting Consultation",
    description:
      "We'll begin by formulating your vision, surveying your space & sculpting a proposal that balances creativity with your budget.",
    icon: "consultation",
    whatToExpect: [
      "Initial consultation (phone or in-person)",
      "Space survey and measurements",
      "Vision discussion and mood boarding",
      "Custom proposal development",
      "Budget alignment",
    ],
    timeline: "1-2 weeks",
  },
  {
    step: 2,
    title: "Full-Scale Installation",
    description:
      "Our team of artisans & technicians will transform your space on your preferred schedule & availability.",
    icon: "installation",
    whatToExpect: [
      "Professional installation team",
      "Minimal disruption to your schedule",
      "Quality materials and craftsmanship",
      "Real-time updates and communication",
      "Attention to detail",
    ],
    timeline: "1-4 weeks (depending on package)",
  },
  {
    step: 3,
    title: "Seamless Integration & Training",
    description:
      "We will empower your team with expert training for effortless control, automation & synchronization of your fantasy environment.",
    icon: "training",
    whatToExpect: [
      "Hands-on training session",
      "Control system walkthrough",
      "Troubleshooting guidance",
      "Documentation and resources",
      "Ongoing support options",
    ],
    timeline: "1-2 days",
  },
];

/**
 * What to Expect Section Content
 */
export const whatToExpectContent = {
  title: "What to Expect from Your LEDream Journey",
  items: [
    {
      title: "Typical Project Timelines",
      description:
        "Timeline varies by package: Spark (1-2 weeks), Spectacle (2-4 weeks), Legend (4-8 weeks). We'll provide a detailed schedule during consultation.",
    },
    {
      title: "Communication Approach",
      description:
        "We maintain open communication throughout your journey with regular updates, progress reports, and direct access to your project team.",
    },
    {
      title: "Flexibility and Customization",
      description:
        "Every LEDream journey is unique. We adapt to your schedule, preferences, and evolving needs to ensure the perfect transformation.",
    },
    {
      title: "Quality Assurance",
      description:
        "We use premium materials, expert craftsmanship, and thorough testing to ensure your installation exceeds expectations and stands the test of time.",
    },
  ],
};

/**
 * FAQ Questions and Answers
 */
export const processFAQ = [
  {
    question: "How long does the entire process take?",
    answer:
      "The complete process typically takes 2-8 weeks depending on your package. The Spark package averages 2-3 weeks from consultation to completion. The Spectacle package takes 3-5 weeks, and The Legend package may take 5-8 weeks for full multi-room transformations. We'll provide a detailed timeline during your consultation.",
  },
  {
    question: "Can we use our space during installation?",
    answer:
      "Yes! We work around your schedule and minimize disruption. Most installations can be completed during off-hours or in phases that allow continued use of your space. We'll coordinate with you to find the best approach for your situation.",
  },
  {
    question: "What if we need changes after installation?",
    answer:
      "We're here to help! Minor adjustments can often be made during the training phase. For more significant changes, we offer modification services. The Legend package includes ongoing support for updates and enhancements.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes! All packages include initial training and support. The Legend package includes dedicated ongoing service and maintenance. For Spark and Spectacle packages, we offer support packages and maintenance services to keep your installation running perfectly.",
  },
  {
    question: "What's included in the training?",
    answer:
      "Training includes hands-on instruction on operating your LED system, creating custom scenes, scheduling automation, troubleshooting common issues, and accessing support resources. We ensure your team feels confident managing the system independently.",
  },
  {
    question: "How do you handle project timelines?",
    answer:
      "We provide detailed timelines during consultation and keep you updated throughout the process. We work with your schedule and availability, and we're transparent about any potential delays. Our goal is to deliver on time while maintaining the highest quality standards.",
  },
];

/**
 * Support & Maintenance Section Content
 */
export const supportContent = {
  title: "We're Here for You",
  description:
    "Your LEDream journey doesn't end at installation. We provide ongoing support to ensure your transformation continues to shine.",
  items: [
    {
      title: "Technical Support",
      description:
        "Access to our technical team for troubleshooting, questions, and guidance whenever you need assistance.",
    },
    {
      title: "Maintenance Services",
      description:
        "The Legend package includes ongoing maintenance. We also offer maintenance packages for Spark and Spectacle installations.",
    },
    {
      title: "Upgrade Options",
      description:
        "As your needs evolve, we can help you upgrade your installation with additional features, new LED art pieces, or expanded coverage.",
    },
    {
      title: "Troubleshooting Assistance",
      description:
        "Quick response support for any technical issues, with remote assistance and on-site service when needed.",
    },
  ],
};

/**
 * Package Comparison Context
 */
export const packageComparisonContent = {
  title: "Different Packages, Same Dedication to Quality",
  description:
    "Whether you choose The Spark, The Spectacle, or The Legend, you'll experience the same commitment to excellence, creativity, and customer satisfaction. The process adapts to your package while maintaining our high standards.",
};

