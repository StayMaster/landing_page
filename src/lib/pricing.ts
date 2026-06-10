export type PricingTierId = 'starter' | 'growth' | 'scale' | 'enterprise';

export interface PricingTier {
  id: PricingTierId;
  minProperties: number;
  maxProperties: number | null;
  basicPrice: number | null;
  proPrice: number | null;
}

/** Sample SAR/month prices per portfolio — illustrative until billing ships */
export const pricingTiers: PricingTier[] = [
  { id: 'starter', minProperties: 1, maxProperties: 3, basicPrice: 99, proPrice: 299 },
  { id: 'growth', minProperties: 4, maxProperties: 10, basicPrice: 199, proPrice: 499 },
  { id: 'scale', minProperties: 11, maxProperties: 30, basicPrice: 399, proPrice: 899 },
  { id: 'enterprise', minProperties: 31, maxProperties: null, basicPrice: null, proPrice: null },
];

export function getTierForPropertyCount(count: number): PricingTier {
  if (count >= 31) return pricingTiers[3];
  if (count >= 11) return pricingTiers[2];
  if (count >= 4) return pricingTiers[1];
  return pricingTiers[0];
}

export const otaLogos = [
  { slug: 'airbnb', name: 'Airbnb', live: true },
  { slug: 'gathern', name: 'Gathern', live: true },
  { slug: 'booking', name: 'Booking.com', live: false },
  { slug: 'expedia', name: 'Expedia', live: false },
  { slug: 'agoda', name: 'Agoda', live: false },
  { slug: 'google-vr', name: 'Google Vacation Rentals', live: false },
] as const;
