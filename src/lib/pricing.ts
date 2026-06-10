export type PricingTierId = 'starter' | 'growth' | 'scale' | 'enterprise';

export interface PricingTier {
  id: PricingTierId;
  minProperties: number;
  maxProperties: number | null;
  basicPrice: number | null;
  proPrice: number | null;
}

/** Sample SAR/month base price per property — illustrative until billing ships */
export const pricingTiers: PricingTier[] = [
  { id: 'starter', minProperties: 1, maxProperties: 3, basicPrice: 99, proPrice: 299 },
  { id: 'growth', minProperties: 4, maxProperties: 10, basicPrice: 199, proPrice: 499 },
  { id: 'scale', minProperties: 11, maxProperties: 30, basicPrice: 399, proPrice: 899 },
  { id: 'enterprise', minProperties: 31, maxProperties: null, basicPrice: null, proPrice: null },
];

export const YEARLY_FREE_MONTHS = 2;

export type BillingPeriod = 'monthly' | 'yearly';

export function getTierForPropertyCount(count: number): PricingTier {
  if (count >= 31) return pricingTiers[3];
  if (count >= 11) return pricingTiers[2];
  if (count >= 4) return pricingTiers[1];
  return pricingTiers[0];
}

/** +20% volume discount for each tier above starter (20%, 40%, …) */
export function getTierVolumeDiscountPercent(tierId: PricingTierId): number {
  const index = pricingTiers.findIndex((tier) => tier.id === tierId);
  if (index <= 0 || tierId === 'enterprise') return 0;
  return index * 20;
}

export interface PlanQuote {
  propertyCount: number;
  tierId: PricingTierId;
  perPropertyBase: number;
  subtotal: number;
  volumeDiscountPercent: number;
  monthlyTotal: number;
  billing: BillingPeriod;
  displayAmount: number;
  period: 'month' | 'year';
  compareAtAmount: number | null;
  showYearlySaving: boolean;
}

export function calculatePlanQuote(
  perPropertyBase: number | null,
  propertyCount: number,
  billing: BillingPeriod = 'monthly',
): PlanQuote | null {
  if (perPropertyBase === null) return null;

  const tier = getTierForPropertyCount(propertyCount);
  if (tier.id === 'enterprise') return null;

  const volumeDiscountPercent = getTierVolumeDiscountPercent(tier.id);
  const subtotal = perPropertyBase * propertyCount;
  const monthlyTotal = Math.round(subtotal * (1 - volumeDiscountPercent / 100));

  if (billing === 'monthly') {
    return {
      propertyCount,
      tierId: tier.id,
      perPropertyBase,
      subtotal,
      volumeDiscountPercent,
      monthlyTotal,
      billing,
      displayAmount: monthlyTotal,
      period: 'month',
      compareAtAmount: volumeDiscountPercent > 0 ? subtotal : null,
      showYearlySaving: false,
    };
  }

  const yearlyFull = monthlyTotal * 12;
  const yearlyDiscounted = monthlyTotal * (12 - YEARLY_FREE_MONTHS);

  return {
    propertyCount,
    tierId: tier.id,
    perPropertyBase,
    subtotal,
    volumeDiscountPercent,
    monthlyTotal,
    billing,
    displayAmount: yearlyDiscounted,
    period: 'year',
    compareAtAmount: yearlyFull,
    showYearlySaving: true,
  };
}

export const otaLogos = [
  { slug: 'airbnb', name: 'Airbnb', live: true },
  { slug: 'gathern', name: 'Gathern', live: true },
  { slug: 'booking', name: 'Booking.com', live: false },
  { slug: 'expedia', name: 'Expedia', live: false },
  { slug: 'agoda', name: 'Agoda', live: false },
  { slug: 'google-vr', name: 'Google Vacation Rentals', live: false },
] as const;
