export const COMPANY = {
  name: 'The Gardens Houston',
  shortName: 'The Gardens Houston',
  tagline: 'Boutique Garden Wedding Venue',
  phone: '(281) 481-0181',
  phoneHref: '+12814810181',
  email: 'info@thegardenshouston.net',
  address: '12001 Beamer Rd',
  city: 'Houston, TX 77089',
  serviceArea: 'South Belt · Ellington',
  maxGuests: 500,
  instagram: 'https://www.instagram.com/thegardenshoustonvenue/',
  instagramHandle: '@thegardenshoustonvenue',
  facebook: 'https://www.facebook.com/TheGardensVenue/',
  website: 'https://www.thegardenshouston.net/',
  googleUrl: 'https://www.google.com/maps/search/?api=1&query=The+Gardens+Houston,+12001+Beamer+Rd,+Houston,+TX+77089',
  googleReviewsUrl: 'https://www.google.com/maps/search/The+Gardens+Houston+12001+Beamer+Road+Houston+reviews',
  googleRating: 5.0,
  reviewCount: 5,
};

export const ACCENT = '#2d5016';
export const ACCENT_HOVER = '#c9a227';

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Videos', href: '/videos' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'chapel', label: 'Chapel' },
  { id: 'ballroom', label: 'Ballroom' },
  { id: 'garden', label: 'Garden' },
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number]['id'];

export {
  GALLERY_IMAGES,
  type GalleryImage,
} from './gallery-images';

export const ABOUT_CONTENT = {
  intro: 'The Gardens Houston is a Spanish-style event and wedding venue featuring beautiful ballrooms and an intimate Italian chapel.',
  body: 'A spectacular entrance features a 12-foot water fountain surrounded by lush plants. Accommodates events from 50–500 guests with full-service options.',
  evolution: 'A one-stop shop for weddings, quinceañeras, corporate events, and galas — with in-house catering, floral arrangements, coordinators, and deluxe linen packages.',
};

export const VENUE_HIGHLIGHTS = [
  {
    title: 'Italian Chapel',
    description: 'Intimate chapel seating up to 200 for ceremonies in a romantic, garden-inspired setting.',
  },
  {
    title: 'Four Event Spaces',
    description: 'The Chapel, Ballroom, Garden Room, and The Grande — from intimate gatherings to 500 guests.',
  },
  {
    title: 'Full Service',
    description: 'In-house catering, floral arrangements, coordinators, china packages, and lighted columns.',
  },
  {
    title: 'Garden Entrance',
    description: '12-foot water fountain entrance surrounded by lush landscaping — a stunning first impression.',
  },
];

export const AMENITIES = [
  'Italian Chapel',
  '4 Event Spaces',
  '12-ft Water Fountain',
  'In-House Catering',
  'Open Bar',
  'Bridal Suite',
  'Sound System',
  'On-Site Parking',
  'Wheelchair Accessible',
];

export const REVIEWS = [
  { id: 1, name: 'Matthew (Trevino Studios)', event: 'Wedding · Google Review', rating: 5, text: "I recently photographed a wedding at The Gardens Houston, and it was a wonderful experience. The venue is incredibly photogenic with plenty of spacious areas for portraits, ceremonies, and receptions." },
  { id: 2, name: 'Madeline S.', event: 'Wedding · Google Review', rating: 5, text: "Had my wedding at The Gardens Houston. The staff did such an amazing job — even when it came to changing the tables last minute. Family said everything was beautiful. Dinner was delicious and hot." },
  { id: 3, name: 'shakendra simmons', event: 'Prom · Google Review', rating: 5, text: "I love Carmen so much!!! We\'ve worked together for three proms and every time it gets better and better." },
  { id: 4, name: 'Kandy G.', event: 'Google Review', rating: 5, text: "Excelente elección, buen precio, servicios increíbles — sus actualizaciones son de primera. Vale la pena, recomiendo ampliamente." },
  { id: 5, name: 'Google Reviewer', event: 'Google Review', rating: 5, text: "Very pretty place. I recommend them to whoever. Excellent treatment and kindness — congratulations for their kindness." },
] as const;

export type FaqItem = {
  question: string;
  answer: string;
  link?: { href: string; label: string };
};

export const FAQS: FaqItem[] = [
  {
    question: 'What are your rental rates?',
    answer: 'Packages from $1,000 – $15,000 · 50–500 guests',
  },
  {
    question: 'What is your guest capacity?',
    answer: 'Our venue accommodates up to 500 guests depending on layout and event type.',
  },
  {
    question: 'Where are you located?',
    answer: 'We are located at 12001 Beamer Rd, Houston, TX 77089.',
  },
  {
    question: 'How do I book a tour?',
    answer: 'Contact us through the inquiry form or call us directly to schedule a private tour of the space.',
  },
  {
    question: 'Do you offer parking?',
    answer: 'Yes — on-site and/or street parking is available. Contact us for details specific to your event date.',
  },
];

export { VIDEOS_DATA as VIDEOS, EMBEDS_DATA as EMBEDS } from './videos';
