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
    href: "/services/1-to-1-coaching",
    description: "Personalized one-on-one aviation coaching",
    whatsappMessage: "Hi SkyPrep Aero! I'm interested in your FocusONE program. Can you please provide more details?"
  },
  {
    id: "cohorts",
    name: "Cohorts",
    href: "/services/cohorts",
    description: "Group training programs with structured learning",
    whatsappMessage: "Hi SkyPrep Aero! I'm interested in joining your Cohorts program. Can you please provide more details?"
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
    href: "/courses/1-to-1-coaching",
    description: "Personalized one-on-one aviation coaching",
    whatsappMessage: "Hi SkyPrep Aero! I'm interested in your FocusONE program. Can you please provide more details?"
  },
  {
    id: "cohorts",
    name: "Cohorts",
    href: "/courses/cohorts",
    description: "Group training programs with structured learning",
    whatsappMessage: "Hi SkyPrep Aero! I'm interested in joining your Cohorts program. Can you please provide more details?"
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
