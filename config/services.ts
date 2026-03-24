export interface Service {
  id: string;
  name: string;
  href: string;
  description?: string;
  whatsappMessage?: string;
}

export const services: Service[] = [
  {
    id: "1-to-1-coaching",
    name: "FocusONE",
    href: "/courses/dgca-on-demand-sessions",
    description: "Flexible 1:1 DGCA coaching—book sessions anytime with expert aviation instructors.",
    whatsappMessage: "Hi SkyPrep Aero! I'm interested in your FocusONE program. Can you please provide more details?"
  },
  {
    id: "cohorts",
    name: "Cohorts",
    href: "/courses/cohorts",
    description: "Group training programs with structured learning",
    whatsappMessage: "Hi SkyPrep Aero! I'm interested in joining your Cohorts program. Can you please provide more details?"
  },
  {
    id: "medical",
    name: "DGCA Medical Assistance",
    href: "/services/medical",
    description: "End-to-end guidance for DGCA Class 1 & Class 2 medical clearances with preferred AMEs.",
    whatsappMessage: "Hi SkyPrep Aero! I need help with DGCA medical clearances. Can you please guide me?"
  },
  {
    id: "computer-number",
    name: "DGCA Computer Number Assistance",
    href: "/services/computer-number",
    description: "Comprehensive support for DGCA Computer Number (CN) application process",
    whatsappMessage: "Hi SkyPrep Aero! I'm interested in your DGCA Computer Number Assistance service. Can you please provide more details?"
  },
  {
    id: "elogbook",
    name: "eLogbook Filing Assistance",
    href: "/services/elogbook",
    description: "Complete eLogbook filing and management assistance on DGCA's portal",
    whatsappMessage: "Hi SkyPrep Aero! I'm interested in your eLogbook Filing Assistance service. Can you please provide more details?"
  },
  {
    id: "conversion-training",
    name: "Conversion Training",
    href: "/services/conversion-training",
    description: "Convert your foreign flight training to DGCA-approved licenses",
    whatsappMessage: "Hi SkyPrep Aero! I'm interested in your Conversion Training service. Can you please provide more details?"
  },
  {
    id: "nios-assistance",
    name: "NIOS Assistance for CPL Eligibility",
    href: "/services/nios-assistance",
    description: "NIOS assistance for Commerce, Arts & other streams—meet DGCA 10+2 (Physics & Maths) for CPL in India.",
    whatsappMessage: "Hi SkyPrep Aero! I passed from Commerce/Arts and need NIOS assistance for CPL eligibility. Can you please provide more details?"
  },
  {
    id: "dgca-offline-classes-pune",
    name: "Offline Classes — Pune",
    href: "/courses/dgca-offline-classes-pune",
    description: "In-person DGCA ground classes in Pune. Classroom coaching for CPL/ATPL theory subjects.",
    whatsappMessage: "Hi SkyPrep Aero! I'm interested in your offline DGCA classes in Pune. Please share batch schedule and fee details."
  }
   
  // Temporarily commented out - will be needed later
  // {
  //   id: "subject-wise",
  //   name: "Individual Subject Training",
  //   href: "/services/subject-wise",
  //   description: "Specialized training for individual aviation subjects",
  //   whatsappMessage: "Hi SkyPrep Aero! I'm interested in your Individual Subject Training program. Can you please provide more details?"
  // }
];

// Courses array - only actual training courses
export const courses: Service[] = [
  {
    id: "1-to-1-coaching",
    name: "FocusONE",
    href: "/courses/dgca-on-demand-sessions",
    description: "Flexible 1:1 DGCA coaching—book sessions anytime with expert aviation instructors.",
    whatsappMessage: "Hi SkyPrep Aero! I'm interested in your FocusONE program. Can you please provide more details?"
  },
  {
    id: "cohorts",
    name: "Cohorts",
    href: "/courses/cohorts",
    description: "Group training programs with structured learning",
    whatsappMessage: "Hi SkyPrep Aero! I'm interested in joining your Cohorts program. Can you please provide more details?"
  },
  {
    id: "dgca-offline-classes-pune",
    name: "Offline Classes — Pune",
    href: "/courses/dgca-offline-classes-pune",
    description: "In-person DGCA ground classes in Pune. Classroom coaching for CPL/ATPL theory subjects.",
    whatsappMessage: "Hi SkyPrep Aero! I'm interested in your offline DGCA classes in Pune. Please share batch schedule and fee details."
  }
];

export const whatsappNumber = "+918788162210";

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getServiceByHref = (href: string): Service | undefined => {
  return services.find(service => service.href === href);
};

export const getContactUrl = (serviceId: string): string => {
  return `/contact?service=${serviceId}`;
};

export const getWhatsAppUrl = (serviceId: string): string => {
  const service = getServiceById(serviceId);
  const message = service?.whatsappMessage || "Hi SkyPrep Aero! I'm interested in your aviation training programs. Can you please provide more details?";
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
};

export const getWhatsAppButtonText = (serviceId: string): string => {
  const service = getServiceById(serviceId);
  const serviceName = service?.name || "program";
  return `Contact us on WhatsApp about ${serviceName}`;
};
