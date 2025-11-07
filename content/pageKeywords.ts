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
  "/courses/1-to-1-coaching": [
    "focusone mentorship",
    "one to one aviation coaching",
    "personalized pilot training",
  ],
  "/courses/cohorts": [
    "aviation cohort classes",
    "dgca cohort program",
    "pilot group training",
  ],
  "/services": [
    "aviation services",
    "pilot documentation assistance",
    "dgca support services",
  ],
  "/services/1-to-1-coaching": [
    "focusone",
    "one to one aviation coaching",
    "pilot mentorship india",
  ],
  "/services/cohorts": [
    "aviation cohort training",
    "pilot exam batches",
    "dgca cohort classes",
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

