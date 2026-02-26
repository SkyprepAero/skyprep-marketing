export const pageKeywords: Record<string, string[]> = {
  "/": [
    "skyprep aero",
    "skyprep",
    "aviation coaching",
    "pilot training india",
    "dgca ground classes",
    "aviation mentorship",
  ],
  "/about": [
    "about skyprep",
    "aviation coaching team",
    "pilot training experts",
  ],
  "/contact": [
    "contact skyprep",
    "aviation coaching support",
    "pilot training enquiries",
  ],
  "/courses": [
    "aviation courses",
    "pilot coaching program",
    "aviation ground school",
    "dgca exam coaching",
  ],
  "/courses/dgca-on-demand-sessions": [
    "dgca on demand sessions",
    "dgca on demand classes",
    "dgca on demand coaching",
    "online dgca on demand sessions",
    "dgca flexible coaching",
    "one to one aviation coaching",
    "personalized pilot training",
    "pilot mentorship india",
  ],
  "/courses/cohorts": [
    "aviation cohort classes",
    "aviation cohort training",
    "dgca cohort program",
    "dgca cohort classes",
    "pilot group training",
    "pilot exam batches",
  ],
  "/courses/test-series": [
    "dgca test series",
    "dgca mock tests",
    "pilot exam practice",
    "aviation test series",
  ],
  "/services": [
    "aviation services",
    "pilot documentation assistance",
    "dgca support services",
  ],
  "/services/medical": [
    "dgca medical assistance",
    "pilot class 1 medical",
    "aviation medical appointment",
  ],
  "/services/computer-number": [
    "dgca computer number",
    "pilot cn application",
    "aviation documentation support",
  ],
  "/services/elogbook": [
    "elogbook assistance",
    "dgca elogbook",
    "pilot logbook filing",
  ],
  "/services/conversion-training": [
    "pilot license conversion",
    "foreign to dgca conversion",
    "aviation conversion training",
  ],
  "/services/subject-wise": [
    "aviation subject coaching",
    "dgca subject wise classes",
    "pilot ground subjects",
  ],
  "/dgca-requirements": [
    "dgca requirements",
    "commercial pilot requirements",
    "flight training requirements",
  ],
  "/guides/become-a-pilot": [
    "become a pilot guide",
    "pilot career roadmap",
    "aviation guide india",
  ],
  "/enquiry": [
    "skyprep enquiry",
    "aviation coaching enquiry",
    "pilot training enquiry",
  ],
  "/blog": [
    "skyprep blog",
    "aviation training tips",
    "pilot study resources",
  ],
  "/store": [
    "pilot study materials",
    "aviation products",
    "pilot training tools",
  ],
};

export function getPageKeywords(path: string | undefined): string[] | undefined {
  if (!path) return undefined;
  return pageKeywords[path];
}

