import { calculatePlanQuote, getTierForPropertyCount } from '../lib/pricing.ts';

interface PricingCopy {
  currency: string;
  perMonthTotal: string;
  perYearTotal: string;
  volumeDiscount: string;
  priceBreakdown: string;
  tierLabels: Record<string, string>;
}

function initPricingSection() {
  const section = document.getElementById('plans');
  if (!section) return;

  const configRaw = section.dataset.pricingConfig;
  if (!configRaw) return;

  const pricingCopy: PricingCopy = JSON.parse(configRaw);
  const locale = section.dataset.locale || 'en';

  const slider = section.querySelector<HTMLInputElement>('[data-property-slider]');
  const countOut = section.querySelector<HTMLElement>('[data-property-count]');
  const tierLabel = section.querySelector<HTMLElement>('[data-property-tier-label]');
  const billingButtons = section.querySelectorAll<HTMLButtonElement>('[data-billing]');
  const planCards = {
    basic: section.querySelector<HTMLElement>('[data-plan-card="basic"]'),
    pro: section.querySelector<HTMLElement>('[data-plan-card="pro"]'),
  };

  if (!slider || !countOut || !tierLabel) return;

  let billing: 'monthly' | 'yearly' = 'monthly';

  function formatAmount(value: number) {
    return value.toLocaleString(locale === 'ar' ? 'ar-SA' : 'en-US');
  }

  function fillTemplate(template: string, vars: Record<string, string | number>) {
    return Object.entries(vars).reduce(
      (text, [key, value]) => text.replace(`{${key}}`, String(value)),
      template,
    );
  }

  function updatePlanCard(
    card: HTMLElement | null,
    perPropertyBase: number | null,
    propertyCount: number,
  ) {
    if (!card) return;

    const quoteEl = card.querySelector<HTMLElement>('[data-quote]');
    const wrapEl = card.querySelector<HTMLElement>('[data-price-wrap]');
    const amountEl = card.querySelector<HTMLElement>('[data-price-amount]');
    const periodEl = card.querySelector<HTMLElement>('[data-price-period]');
    const compareEl = card.querySelector<HTMLElement>('[data-price-compare]');
    const breakdownEl = card.querySelector<HTMLElement>('[data-price-breakdown]');
    const discountBadge = card.querySelector<HTMLElement>('[data-discount-badge]');
    const yearlyBadge = card.querySelector<HTMLElement>('[data-yearly-badge]');

    const quote = calculatePlanQuote(perPropertyBase, propertyCount, billing);
    const isEnterprise = getTierForPropertyCount(propertyCount).id === 'enterprise';

    quoteEl?.classList.toggle('hidden', !isEnterprise);
    wrapEl?.classList.toggle('hidden', isEnterprise);

    if (isEnterprise || !quote || !amountEl || !periodEl) return;

    amountEl.textContent = formatAmount(quote.displayAmount);
    periodEl.textContent =
      quote.period === 'month'
        ? `${pricingCopy.currency} ${pricingCopy.perMonthTotal}`
        : `${pricingCopy.currency} ${pricingCopy.perYearTotal}`;

    if (quote.compareAtAmount !== null && compareEl) {
      compareEl.textContent = `${formatAmount(quote.compareAtAmount)} ${pricingCopy.currency}`;
      compareEl.classList.remove('hidden');
    } else {
      compareEl?.classList.add('hidden');
    }

    if (breakdownEl) {
      breakdownEl.textContent = fillTemplate(pricingCopy.priceBreakdown, {
        count: quote.propertyCount,
        rate: formatAmount(quote.perPropertyBase),
        currency: pricingCopy.currency,
      });
    }

    if (discountBadge) {
      if (quote.volumeDiscountPercent > 0) {
        discountBadge.textContent = fillTemplate(pricingCopy.volumeDiscount, {
          percent: quote.volumeDiscountPercent,
        });
        discountBadge.classList.remove('hidden');
      } else {
        discountBadge.classList.add('hidden');
      }
    }

    yearlyBadge?.classList.toggle('hidden', !quote.showYearlySaving);
  }

  function updatePricing(count: string | number) {
    const n = Number(count);
    countOut.textContent = n >= 31 ? '31+' : String(n);

    const tier = getTierForPropertyCount(n);
    tierLabel.textContent = pricingCopy.tierLabels[tier.id] ?? '';

    updatePlanCard(planCards.basic, tier.basicPrice, n);
    updatePlanCard(planCards.pro, tier.proPrice, n);

    if (typeof window.posthog !== 'undefined') {
      window.posthog.capture('pricing_slider_changed', {
        property_count: n,
        tier: tier.id,
        billing,
      });
    }
  }

  billingButtons.forEach((button) => {
    button.addEventListener('click', () => {
      billing = (button.dataset.billing as 'monthly' | 'yearly') || 'monthly';
      billingButtons.forEach((btn) => {
        const active = btn === button;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
      updatePricing(slider.value);
      if (typeof window.posthog !== 'undefined') {
        window.posthog.capture('pricing_billing_toggled', { billing });
      }
    });
  });

  slider.addEventListener('input', () => updatePricing(slider.value));
  slider.addEventListener('change', () => updatePricing(slider.value));
  updatePricing(slider.value);
}

initPricingSection();
