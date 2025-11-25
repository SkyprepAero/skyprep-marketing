export const siteConfig = {
  name: "SkyPrep Aero | DGCA Ground Classes, Pilot Training & Airline Preparation",
  description:
    "DGCA-aligned pilot coaching with personalised mentoring, cohorts, analytics, and test series. Clear DGCA exams, train with airline captains, and fast-track your aviation career in India.",
  url: process.env.NEXT_PUBLIC_SITE_URL,
  ogImage: "/skyprep-logo-dark.png",
  logo: "/skyprep-logo-dark.png",
  social: {
    twitter: "https://x.com/theSkyPrep",
    linkedin: "https://www.linkedin.com/company/theskyprep",
    instagram: "https://www.instagram.com/skyprepaero/",
    youtube: "https://www.youtube.com/@skyprep",
  },
  contactEmail: "teams@skyprepaero.com",
} as const;

export type SiteConfig = typeof siteConfig;


