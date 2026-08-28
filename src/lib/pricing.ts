export type PricingPackage = {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export const VENUE_PACKAGES: PricingPackage[] = [
  {
    id: 'intimate',
    name: 'Intimate Gathering',
    price: 'From $1,000',
    description: 'Garden Room or Chapel for smaller celebrations up to 100 guests.',
    features: ["Italian Chapel", "Garden entrance", "In-house catering available", "Bridal suite", "On-site parking"],
  },
  {
    id: 'ballroom',
    name: 'Ballroom Package',
    price: 'From $5,000',
    description: 'Full ballroom experience with fountain entrance and full-service coordination.',
    highlighted: true,
    features: ["Ballroom or The Grande", "Full-service catering", "Floral arrangements", "Coordinator included", "Up to 500 guests"],
  },
];

export const ADD_ONS: PricingPackage[] = [];

export const PRICING_NOTES = ["Packages from $1,000 \u2013 $15,000 \u00b7 50\u2013500 guests", "Capacity up to 500 guests depending on layout.", "Contact us to schedule a tour and receive a detailed quote."];
