import { marked } from 'marked';
import type { Locale } from '../i18n/config';

import termsEn from '../content/legal/en/terms-of-service.md?raw';
import privacyEn from '../content/legal/en/privacy-policy.md?raw';
import termsAr from '../content/legal/ar/terms-of-service.md?raw';
import privacyAr from '../content/legal/ar/privacy-policy.md?raw';

type LegalSlug = 'terms-of-service' | 'privacy-policy';

const legalContent: Record<Locale, Record<LegalSlug, string>> = {
  en: {
    'terms-of-service': termsEn,
    'privacy-policy': privacyEn,
  },
  ar: {
    'terms-of-service': termsAr,
    'privacy-policy': privacyAr,
  },
};

export function renderLegalMarkdown(locale: Locale, slug: LegalSlug): string {
  return marked.parse(legalContent[locale][slug]) as string;
}
