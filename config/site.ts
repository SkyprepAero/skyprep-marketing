export const siteConfig = {
  name: "SkyPrep Aviation Coaching",
  description:
    "Personalized aviation coaching, courses, and resources for aspiring and professional pilots.",
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


