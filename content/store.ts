export type StoreItem = {
  slug: string;
  name: string;
  description: string;
  price?: number;
  currency?: string;
  keywords?: string[];
};

export const storeItems: StoreItem[] = [
  {
    slug: "ifr-briefing-cards",
    name: "IFR Briefing Cards",
    description: "Durable, cockpit-ready IFR briefing cards for quick reference.",
    price: 19.99,
    currency: "USD",
    keywords: [
      "ifr briefing cards",
      "instrument rating reference",
      "pilot study aids",
    ],
  },
  {
    slug: "weight-balance-sheet",
    name: "Weight & Balance Sheet",
    description: "Reusable W&B sheet for quick calculations and cross-checks.",
    price: 9.99,
    currency: "USD",
    keywords: [
      "weight and balance sheet",
      "pilot calculation sheet",
      "aviation performance planning",
    ],
  },
];

