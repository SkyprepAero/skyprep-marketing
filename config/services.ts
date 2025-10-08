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
    name: "One to One Coaching",
    href: "/services/1-to-1-coaching",
    description: "Personalized one-on-one aviation coaching",
    whatsappMessage: "Hi SkyPrep Aero! I'm interested in your One to One Coaching program. Can you please provide more details?"
  },
  {
    id: "cohorts",
    name: "Cohorts",
    href: "/services/cohorts",
    description: "Group training programs with structured learning",
    whatsappMessage: "Hi SkyPrep Aero! I'm interested in joining your Cohorts program. Can you please provide more details?"
  },
  // Temporarily commented out - will be needed later
  // {
  //   id: "subject-wise",
  //   name: "Individual Subject Training",
  //   href: "/services/subject-wise",
  //   description: "Specialized training for individual aviation subjects",
  //   whatsappMessage: "Hi SkyPrep Aero! I'm interested in your Individual Subject Training program. Can you please provide more details?"
  // }
];

export const whatsappNumber = "+919588611284";

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
