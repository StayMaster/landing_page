# Rently.pro Landing Page — Scope Document

> **Status:** Revised per owner feedback (Jun 2025)  
> **Product:** Rently.pro  
> **Domain:** https://rently.pro (confirmed)  
> **Stage:** Pre-production — early access + feature requests, not self-serve signup

---

## 1. Product Understanding

**Rently.pro** is a B2B SaaS Property Management System (PMS) + channel manager for Saudi short-term rental operators. Operator-facing only — not a guest marketplace.

**North star benchmark:** [Guesty](https://www.guesty.com/) — but Rently.pro takes **smaller, focused steps** for the Saudi market rather than enterprise complexity on day one.

**Target clients:**
- Property **owners** managing their own chalets/villas
- Operators managing properties **for clients and friends**
- Mixed portfolios with **separated reporting** per owner
- **Read-only sub-users** onboarded for clients, accountants, or viewers

**Core value proposition:**
- One Arabic-first dashboard: properties, channels, bookings, finance
- Live **Airbnb + Gathern** sync; more OTAs on roadmap
- **Unified inbox** (chat channel consolidation) — planned/roadmap
- Separated income reporting per reservation and per owner
- Built for KSA: Arabic RTL, SAR/Moyasar (when billing ships), chalet-specific attributes

**Taglines:**
- "Vacation rental management, built for Saudi property owners."
- "One dashboard. Every channel. True net income per booking."

**What we are NOT claiming:**
- Public production launch (early access only)
- Live customer metrics or numeric stats on the landing page
- Self-serve billing/checkout
- Guest-facing booking site
- Full Guesty feature parity

---

## 2. Landing Page Goals

| Goal | Implementation |
|------|----------------|
| Early access signups | Contact form → FormSubmit.co → hello@rently.pro |
| Feature requests | Userjot board (not a waitlist) |
| Investor conversations | Separate `/investors` funnel |
| Differentiation vs. spreadsheets + global PMS | Problem/solution, audience section, channels, FAQ |
| Trust (bilingual, local) | EN + AR RTL, legal pages, professional design |
| SEO / social | Meta, OG, Twitter, sitemap, JSON-LD |
| Analytics (optional) | PostHog via `PUBLIC_POSTHOG_KEY` env var |

---

## 3. Site Structure

```
/                          → Home (EN)
/ar/                       → Home (AR, RTL)
/contact                   → Early access form (FormSubmit.co)
/ar/contact
/investors                 → Investor inquiry form (separate subject)
/ar/investors
/terms-of-service          → Terms (KSA law, draft)
/ar/terms-of-service
/privacy-policy            → Privacy (PDPL-aligned draft)
/ar/privacy-policy
```

**External links:**
- **Userjot:** Feature requests — `https://userjot.com/rently` *(confirm board URL)*
- **FormSubmit:** `https://formsubmit.co/hello@rently.pro`
- **Social:** Dummy placeholders until accounts exist
- **Email:** hello@rently.pro

---

## 4. Page Sections (Home)

1. Navigation — anchors, language, theme, "Request a Feature" (Userjot)
2. Hero — headline, early access CTA → `/contact`, hero video placeholder
3. Trust badges — **no numbers** (Airbnb + Gathern, Arabic-first, KSA, Early Access)
4. Quote card — secondary hero with stock image
5. **Who It's For** — own properties, client properties, read-only sub-users, start small
6. Problem — channel chaos, scattered chat, manual sync, mixed portfolios
7. How It Works — add property → sync channels → unified inbox → separated reporting
8. Features — dashboard, unified inbox, channel sync, separated reporting, finance, team/RBAC
9. **Channels** — Live: Airbnb, Gathern | Coming soon: Booking.com, Expedia, Agoda, Google Vacation Rentals
10. Platform — bilingual, SAR, chalet-ready, portfolio groups, security
11. **Plans** — Free Trial (1 month), Basic, Pro — **no prices**, placeholder copy only
12. **FAQ** — Guesty-style accordion (8 questions)
13. CTA — Userjot feature request + early access contact
14. Footer — legal, investors link, dummy social

**Explicitly excluded:** Team/founders section, live metrics, pricing numbers

---

## 5. Funnels

| Funnel | Destination | Email subject |
|--------|-------------|---------------|
| Early access | `/contact` via FormSubmit.co | `Early Access — Rently.pro` |
| Feature request | Userjot (external) | N/A |
| Investor inquiry | `/investors` via FormSubmit.co | `Investor Inquiry — Rently.pro` |

---

## 6. Design System

| Element | Spec |
|---------|------|
| Framework | Astro 5 + Tailwind CSS 3 |
| Style | Card-based, `rounded-3xl` / `rounded-4xl` |
| Animations | Scroll-triggered fade/slide (Intersection Observer) |
| Typography | Inter + IBM Plex Sans Arabic |
| Colors | Emerald brand, full dark mode |
| Imagery | Unsplash/Coverr placeholders |

---

## 7. Internationalization

- English (LTR) at `/`; Arabic (RTL) at `/ar/*`
- All UI in `src/i18n/translations.ts`
- Legal pages: separate MD per locale

---

## 8. Legal Pages

- Draft Terms + Privacy (KSA / PDPL aligned)
- Owner confirmed: no legal review block for launch prep

---

## 9. Analytics — Free Options

| Tool | Notes |
|------|-------|
| **PostHog** *(recommended, wired)* | Free tier: product analytics, session replay, feature flags. Set `PUBLIC_POSTHOG_KEY` at build. |
| Plausible | Privacy-friendly, paid but lightweight |
| Umami | Self-hostable, open source |
| Cloudflare Web Analytics | Free, basic page views if on Cloudflare |

PostHog snippet is in `BaseLayout.astro` — activates only when env key is set.

---

## 10. Confirmed Decisions (Owner)

| Topic | Decision |
|-------|----------|
| Userjot | Feature requests, not waitlist |
| Contact | hello@rently.pro via FormSubmit.co |
| Social | Dummy URLs for now |
| Pricing | No numbers — Free Trial / Basic / Pro placeholders |
| Coming soon OTAs | Booking.com, Expedia, Agoda, Google Vacation Rentals |
| Stats | Avoid numbers on landing page |
| Legal review | Not blocking |
| Domain | rently.pro |
| Logo | Text "R" mark — fine for now |
| OTA logos/names | OK to display |
| Team section | No |
| Investors | Separate `/investors` funnel |
| Unified inbox | On roadmap — mentioned in features + FAQ |
| Benchmark | Guesty-inspired, smaller scope |

---

## 11. Open Items

1. **Userjot board URL** — confirm exact feature request board link
2. **FormSubmit activation** — first submission requires email confirmation from FormSubmit
3. **PostHog** — create project and add `PUBLIC_POSTHOG_KEY` to deploy env when ready
4. **Social URLs** — replace placeholders when accounts exist
5. **Plan pricing** — announce before billing UI ships

---

## 12. Tech Stack

| Layer | Choice |
|-------|--------|
| SSG | Astro 5 |
| CSS | Tailwind 3 + @tailwindcss/typography |
| Forms | FormSubmit.co |
| Feature requests | Userjot |
| Analytics | PostHog (optional) |
| i18n | Custom JSON + route locales |
| Deploy | Any static host |

---

## 13. Revision Log

| Date | Change |
|------|--------|
| 2025-06-10 | Initial scope draft |
| 2025-06-10 | Owner feedback: Userjot for features, FormSubmit, no pricing, FAQ, audience, investor funnel, coming-soon OTAs, no stats, PostHog |
