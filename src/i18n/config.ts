export type Locale = 'en' | 'ar';

export const locales: Locale[] = ['en', 'ar'];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ar: 'العربية',
};

export const siteConfig = {
  name: 'Rently.pro',
  domain: 'https://rently.pro',
  email: 'hello@rently.pro',
  userjotUrl: 'https://rentlypro.userjot.com/',
  formSubmitEndpoint: 'https://formsubmit.co/hello@rently.pro',
  formSubmitCode: 'b01b9812a9354c37402d96e4b568bf17',
  social: {
    linkedin: 'https://linkedin.com/company/rently-pro-placeholder',
    instagram: 'https://instagram.com/rently.pro.placeholder',
    x: 'https://x.com/rently_pro_placeholder',
  },
  subjects: {
    earlyAccess: 'Early Access — Rently.pro',
    earlyAccessAr: 'الوصول المبكر — Rently.pro',
    investor: 'Investor Inquiry — Rently.pro',
    investorAr: 'استفسار مستثمر — Rently.pro',
  },
  posthogKey:
    (import.meta.env.PUBLIC_POSTHOG_KEY as string | undefined) ??
    'phc_BGznd7D3b3mJF2uWUSp4so4JmqQcRCmukLZhvezVogBe',
  posthogHost: 'https://us.i.posthog.com',
};

export function getLocalizedPath(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === 'en') return clean === '/' ? '/' : clean;
  return clean === '/' ? '/ar/' : `/ar${clean}`;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'en' ? 'ar' : 'en';
}

export function getContactSuccessUrl(path: string, locale: Locale, hash?: string): string {
  const base = `${siteConfig.domain}${getLocalizedPath(path, locale)}?success=1`;
  return hash ? `${base}${hash}` : base;
}

export function getContactAnchor(locale: Locale): string {
  return `${getLocalizedPath('/', locale)}#contact`;
}
