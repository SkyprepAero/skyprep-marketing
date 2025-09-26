export const siteConfig = {
  name: "SkyPrep Aviation Coaching",
  description:
    "Personalized aviation coaching, courses, and resources for aspiring and professional pilots.",
  url: "https://www.skyprep.co", // update when deploying
  ogImage: "/og.png",
  logo: "/logo.png",
  social: {
    twitter: "https://x.com/theSkyPrep",
    linkedin: "https://www.linkedin.com/company/theskyprep",
    instagram: "https://www.instagram.com/skyprepaero/",
    youtube: "https://www.youtube.com/@skyprep",
  },
  contactEmail: "theskyprep@gmail.com",
} as const;

export type SiteConfig = typeof siteConfig;


