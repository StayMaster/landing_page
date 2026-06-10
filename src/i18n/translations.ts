import type { Locale } from './config';

export interface Translations {
  meta: {
    homeTitle: string;
    homeDescription: string;
    termsTitle: string;
    termsDescription: string;
    privacyTitle: string;
    privacyDescription: string;
    contactTitle: string;
    contactDescription: string;
    investorTitle: string;
    investorDescription: string;
  };
  nav: {
    features: string;
    howItWorks: string;
    channels: string;
    plans: string;
    faq: string;
    investors: string;
    contact: string;
    requestFeature: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    videoCaption: string;
    quote: string;
    quoteSub: string;
  };
  trust: { label: string }[];
  audience: {
    label: string;
    title: string;
    subtitle: string;
    swipeHint: string;
    items: { title: string; description: string }[];
  };
  problem: {
    label: string;
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  howItWorks: {
    label: string;
    title: string;
    subtitle: string;
    steps: { title: string; description: string }[];
  };
  features: {
    label: string;
    title: string;
    subtitle: string;
    items: { title: string; description: string; icon: string }[];
  };
  channels: {
    label: string;
    title: string;
    subtitle: string;
    liveLabel: string;
    comingSoonLabel: string;
    live: { name: string; description: string }[];
    comingSoon: { name: string; description: string }[];
  };
  platforms: {
    label: string;
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  pricing: {
    label: string;
    title: string;
    subtitle: string;
    note: string;
    sliderLabel: string;
    currency: string;
    perMonth: string;
    getQuote: string;
    trial: { name: string; tagline: string; price: string; features: string[] };
    basic: { name: string; tagline: string; features: string[] };
    pro: { name: string; tagline: string; features: string[]; popular: string };
    cta: string;
  };
  faq: {
    label: string;
    title: string;
    subtitle: string;
    items: { question: string; answer: string }[];
  };
  cta: {
    title: string;
    subtitle: string;
    featureButton: string;
    contactButton: string;
  };
  footer: {
    tagline: string;
    product: string;
    legal: string;
    connect: string;
    contactHeading: string;
    contactFormLink: string;
    terms: string;
    privacy: string;
    investors: string;
    rights: string;
    notInProduction: string;
  };
  contact: {
    sectionLabel: string;
    sectionTitle: string;
    sectionSubtitle: string;
    title: string;
    subtitle: string;
    pageIntro: string;
    pageAsideTitle: string;
    pageAsideItems: string[];
    subjectLabel: string;
    name: string;
    email: string;
    company: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    success: string;
  };
  investor: {
    title: string;
    subtitle: string;
  };
  investors: {
    label: string;
    title: string;
    subtitle: string;
    points: string[];
    cardLabel: string;
    cardTitle: string;
    cardText: string;
    cta: string;
  };
  legal: {
    lastUpdated: string;
    disclaimer: string;
  };
}

const en: Translations = {
  meta: {
    homeTitle: 'Rently.pro — Property Management for Saudi Short-Term Rentals',
    homeDescription:
      'Manage your chalets and client properties across Airbnb and Gathern from one Arabic-first dashboard. Channel sync, unified inbox, and separated reporting.',
    termsTitle: 'Terms of Service — Rently.pro',
    termsDescription: 'Terms of Service for Rently.pro, governed by the laws of the Kingdom of Saudi Arabia.',
    privacyTitle: 'Privacy Policy — Rently.pro',
    privacyDescription: 'How Rently.pro collects, uses, and protects your personal data under Saudi PDPL.',
    contactTitle: 'Contact Us — Rently.pro',
    contactDescription: 'Get in touch for early access to Rently.pro.',
    investorTitle: 'Investors — Rently.pro',
    investorDescription: 'Partnership and investment inquiries for Rently.pro.',
  },
  nav: {
    features: 'Features',
    howItWorks: 'How It Works',
    channels: 'Channels',
    plans: 'Plans',
    faq: 'FAQ',
    investors: 'Investors',
    contact: 'Contact',
    requestFeature: 'Request a Feature',
  },
  hero: {
    badge: 'Early Access — Built in Saudi Arabia',
    title: 'Vacation rental management,',
    titleHighlight: 'built for Saudi property owners',
    subtitle:
      'Your properties — or properties you manage for clients — in one dashboard. Sync Airbnb and Gathern, consolidate guest chat, and see separated reporting per owner.',
    ctaPrimary: 'Get Early Access',
    ctaSecondary: 'See How It Works',
    videoCaption: 'Platform preview — placeholder footage',
    quote: 'Manage your properties with confidence — automate bookings, sync channels, and grow your rental business effortlessly.',
    quoteSub: 'One dashboard. Every channel. True net income per booking.',
  },
  trust: [
    { label: 'Airbnb + Gathern' },
    { label: 'Arabic-first' },
    { label: 'Built for KSA' },
    { label: 'Early Access' },
  ],
  audience: {
    label: 'Who It\'s For',
    title: 'Built for property owners — solo or managing for others',
    subtitle: 'Whether the chalets are yours or belong to clients and friends, Rently.pro keeps portfolios separated with clear reporting and read-only access for sub-users.',
    swipeHint: 'Swipe to explore →',
    items: [
      {
        title: 'Your own portfolio',
        description: 'Manage chalets and villas you own — sync channels, bookings, and finances from one place.',
      },
      {
        title: 'Properties for clients',
        description: 'Run rentals on behalf of others with separated reporting per owner, so everyone sees only their numbers.',
      },
      {
        title: 'Read-only sub-users',
        description: 'Onboard managers, accountants, or owners with viewer access — no accidental edits, full visibility.',
      },
      {
        title: 'Start small, grow steadily',
        description: 'Inspired by platforms like Guesty, but focused on what Saudi operators need first — not enterprise complexity on day one.',
      },
    ],
  },
  problem: {
    label: 'The Problem',
    title: 'Running rentals shouldn\'t mean juggling five tools',
    subtitle: 'Saudi operators list on Airbnb and Gathern while guest messages pile up in WhatsApp and finances live in spreadsheets.',
    items: [
      {
        title: 'Channel chaos',
        description: 'Listings, calendars, and bookings scattered across Airbnb, Gathern, WhatsApp, and spreadsheets.',
      },
      {
        title: 'Scattered conversations',
        description: 'Guest messages on every platform with no single place to reply — slow responses, missed bookings.',
      },
      {
        title: 'Manual sync',
        description: 'Every rate change and availability update copied by hand — double bookings waiting to happen.',
      },
      {
        title: 'Mixed portfolios',
        description: 'Managing your properties alongside client properties with no clean separation in reports or access.',
      },
    ],
  },
  howItWorks: {
    label: 'How It Works',
    title: 'From property to payout in one loop',
    subtitle: 'Create locally, distribute to OTAs, respond from one inbox, see income per property and per owner.',
    steps: [
      { title: 'Add your properties', description: 'Set up chalets with Saudi-specific attributes — yours or assigned to client owners.' },
      { title: 'Sync to channels', description: 'Push availability and rates to Airbnb and Gathern from one calendar.' },
      { title: 'Centralize conversations', description: 'Guest messages from every channel in one inbox — reply without switching apps.' },
      { title: 'Report with clarity', description: 'Separated income and occupancy reports per portfolio, owner, or property.' },
    ],
  },
  features: {
    label: 'Features',
    title: 'Everything operators need. Nothing guests need.',
    subtitle: 'Operator-first tools — channel sync, unified inbox, finance, and team access without the Guesty price tag.',
    items: [
      { title: 'Operator Dashboard', description: 'Occupancy, revenue, active bookings, and upcoming arrivals at a glance.', icon: 'layout-dashboard' },
      { title: 'Unified Inbox', description: 'Consolidated guest chat from all channels — respond faster from one place.', icon: 'message-circle' },
      { title: 'Multi-Channel Sync', description: 'Bidirectional availability, rates, and booking sync with Airbnb and Gathern.', icon: 'refresh-cw' },
      { title: 'Separated Reporting', description: 'Per-owner and per-property reports when you manage rentals for clients.', icon: 'bar-chart' },
      { title: 'Financial Layer', description: 'Income reports, ledger, invoices, and exports — true net income per booking.', icon: 'wallet' },
      { title: 'Team & Sub-users', description: 'Owner, manager, and read-only viewer roles with granular access control.', icon: 'shield' },
    ],
  },
  channels: {
    label: 'Integrations',
    title: 'The channels Saudi operators use — and the ones coming next',
    subtitle: 'Live Airbnb and Gathern integrations today. More OTAs on the roadmap.',
    liveLabel: 'Live now',
    comingSoonLabel: 'Coming soon',
    live: [
      {
        name: 'Airbnb',
        description: 'OAuth connection, listing import, bidirectional sync for availability, rates, and real-time booking webhooks.',
      },
      {
        name: 'Gathern',
        description: 'Native Saudi OTA — listings, reservations, transfers, statements, invoices, and review replies.',
      },
    ],
    comingSoon: [
      { name: 'Booking.com', description: 'Global OTA reach for international guest demand.' },
      { name: 'Expedia', description: 'Expand distribution across the Expedia Group network.' },
      { name: 'Agoda', description: 'Reach travelers across Asia-Pacific markets.' },
      { name: 'Google Vacation Rentals', description: 'List on Google Travel and capture direct search demand.' },
    ],
  },
  platforms: {
    label: 'Platform',
    title: 'Built for how Saudi operators work',
    subtitle: 'Arabic-first UX with local payment and compliance details that global PMS tools overlook.',
    items: [
      { title: 'Arabic + English', description: 'Full bilingual interface with RTL layouts for Arabic.' },
      { title: 'SAR Billing', description: 'Subscriptions in Saudi Riyals via Moyasar when billing launches.' },
      { title: 'Chalet-Ready', description: 'Saudi-specific attributes: majlis, pools, national ID, appliances.' },
      { title: 'Portfolio Groups', description: 'Separate groups for your properties vs. client-managed portfolios.' },
      { title: 'Secure & Audited', description: '2FA, email verification, audit trails, and tenancy scoping.' },
      { title: 'Cloud-Native', description: 'Production infrastructure built for reliability and scale.' },
    ],
  },
  pricing: {
    label: 'Plans',
    title: 'Pricing that scales with your portfolio',
    subtitle: 'Sample monthly pricing per portfolio in SAR. Drag the slider to see how plans adjust by property count.',
    note: 'Illustrative pricing — final rates confirmed before billing launch. 31+ properties: contact us for a custom quote.',
    sliderLabel: 'How many properties do you manage?',
    currency: 'SAR',
    perMonth: '/ month',
    getQuote: 'Contact us for a quote',
    trial: {
      name: 'Free Trial',
      tagline: 'Try everything for one month',
      price: 'Free',
      features: ['Full platform access', 'Airbnb or Gathern connection', 'All core PMS features', 'No credit card required'],
    },
    basic: {
      name: 'Basic',
      tagline: 'Single portfolio, core operations',
      features: [
        'One portfolio group',
        'Channel sync (Airbnb + Gathern)',
        'Booking engine & guest CRM',
        'Financial reporting & invoices',
        'Read-only sub-users',
      ],
    },
    pro: {
      name: 'Pro',
      tagline: 'Multi-portfolio & advanced operations',
      popular: 'Recommended',
      features: [
        'Multi-portfolio management',
        'Multi-account support',
        'Smart lock APIs (TTLock, Tuya & more)',
        'Unlimited channel connections',
        'Separated owner reporting',
        'Team roles & priority support',
      ],
    },
    cta: 'Get Early Access',
  },
  faq: {
    label: 'FAQ',
    title: 'What operators ask before signing up',
    subtitle: 'Honest answers about Rently.pro today and what\'s coming next.',
    items: [
      {
        question: 'What is Rently.pro?',
        answer:
          'Rently.pro is a property management platform built for Saudi short-term rental operators. It brings channel sync (Airbnb, Gathern), booking management, a unified guest inbox, and financial reporting into one Arabic-first dashboard — designed for owners who manage their own properties or rentals on behalf of clients.',
      },
      {
        question: 'Is Rently.pro live yet?',
        answer:
          'Not publicly. The core product is in late beta / early access. You can register interest via our contact form or request features on our Userjot board. Self-serve signup and billing will launch when the commercial layer is ready.',
      },
      {
        question: 'Who is Rently.pro for?',
        answer:
          'Property owners and operators in Saudi Arabia — chalet hosts, villa owners, and small managers who list on Airbnb and/or Gathern. It fits solo hosts with a few units and operators managing properties for clients, with separated reporting and read-only sub-user access.',
      },
      {
        question: 'How is this different from Guesty or global PMS tools?',
        answer:
          'Guesty is a powerful global platform built for scale — and priced accordingly. Rently.pro takes smaller steps: deep native Gathern integration, Arabic-first UX, SAR billing, and Saudi chalet-specific property models. We aim in that direction over time, but start focused on what Saudi operators actually need today.',
      },
      {
        question: 'Which booking channels do you support?',
        answer:
          'Airbnb and Gathern are live today with bidirectional sync. Booking.com, Expedia, Agoda, and Google Vacation Rentals are on the roadmap — shown as coming soon on our site.',
      },
      {
        question: 'Can I manage properties for clients with separate reporting?',
        answer:
          'Yes — that\'s a core use case. Create separate portfolio groups for your own properties vs. client properties. Each owner gets clear, separated reports. Sub-users can be invited with read-only access so clients see their numbers without editing anything.',
      },
      {
        question: 'Will there be a unified inbox for guest messages?',
        answer:
          'Yes. Chat channel consolidation is on the roadmap — bringing guest conversations from connected OTAs into one inbox so you reply without jumping between apps. It\'s listed as a planned feature during early access.',
      },
      {
        question: 'How do I request a feature or report a bug?',
        answer:
          'Use our Userjot board (linked from the site header) to submit feature requests and vote on what we build next. For early access or general questions, use the contact form.',
      },
    ],
  },
  cta: {
    title: 'Ready to simplify your rental operations?',
    subtitle: 'Join early access or tell us what feature you need most on Userjot.',
    featureButton: 'Request a Feature',
    contactButton: 'Get Early Access',
  },
  footer: {
    tagline: 'Property management for Saudi short-term rental operators.',
    product: 'Product',
    legal: 'Legal',
    connect: 'Connect',
    contactHeading: 'Contact Us',
    contactFormLink: 'Or send a message via our contact form →',
    terms: 'Terms of Service',
    privacy: 'Privacy Policy',
    investors: 'Investors',
    rights: 'All rights reserved.',
    notInProduction: 'Product in early access — not yet publicly available.',
  },
  contact: {
    sectionLabel: 'Contact',
    sectionTitle: 'Get in touch',
    sectionSubtitle: 'Register for the waitlist, explore investor opportunities, or send us any other inquiry.',
    title: 'Contact Us',
    subtitle: 'Choose a subject below and tell us how we can help.',
    pageIntro: 'Whether you\'re a property owner joining the waitlist, an investor exploring the space, or a potential partner — we\'d love to hear from you. We typically respond within two business days.',
    pageAsideTitle: 'Other ways to reach us',
    pageAsideItems: [
      'Feature requests → Userjot board (link in header)',
      'Direct email → hello@rently.pro',
      'Investor deck requests → select "Investor interest" above',
    ],
    subjectLabel: 'What is this regarding?',
    name: 'Full Name',
    email: 'Email Address',
    company: 'Company / Portfolio Name',
    message: 'Message',
    messagePlaceholder: 'Tell us about your properties, question, or partnership idea…',
    submit: 'Send Message',
    success: 'Thank you! We received your message and will be in touch soon.',
  },
  investor: {
    title: 'Investor Inquiries',
    subtitle: 'For partnership, strategic, or investment conversations — separate from our early access funnel.',
  },
  investors: {
    label: 'For Investors',
    title: 'Building the operating system for Saudi short-term rentals',
    subtitle:
      'Rently.pro is focused on a defensible wedge — deep Gathern integration, Airbnb connectivity, and Arabic-first UX for a market global PMS tools underserve.',
    points: [
      'Late beta product with live Airbnb + Gathern integrations',
      'B2B SaaS model — portfolio-level subscriptions in SAR',
      'Saudi domestic tourism tailwind (Vision 2030, Gathern dominance)',
      'Roadmap: unified inbox, more OTAs, smart lock APIs, billing UI',
    ],
    cardLabel: 'Investment & partnerships',
    cardTitle: 'Let\'s talk',
    cardText: 'We welcome conversations with strategic and regional investors aligned with hospitality SaaS in MENA.',
    cta: 'Investor inquiry form',
  },
  legal: {
    lastUpdated: 'Last updated: June 10, 2025',
    disclaimer: 'Draft placeholder — review with legal counsel before publication.',
  },
};

const ar: Translations = {
  meta: {
    homeTitle: 'Rently.pro — إدارة العقارات للإيجارات قصيرة المدى في السعودية',
    homeDescription:
      'أدر شاليهاتك وعقارات عملائك عبر Airbnb وGathern من لوحة تحكم واحدة بالعربية. مزامنة القنوات وصندوق وارد موحّد وتقارير منفصلة.',
    termsTitle: 'الشروط والأحكام — Rently.pro',
    termsDescription: 'شروط وأحكام استخدام Rently.pro، وفقاً لأنظمة المملكة العربية السعودية.',
    privacyTitle: 'سياسة الخصوصية — Rently.pro',
    privacyDescription: 'كيف تجمع Rently.pro بياناتك الشخصية وتستخدمها وتحميها وفق نظام حماية البيانات الشخصية السعودي.',
    contactTitle: 'تواصل معنا — Rently.pro',
    contactDescription: 'تواصل للحصول على الوصول المبكر إلى Rently.pro.',
    investorTitle: 'المستثمرون — Rently.pro',
    investorDescription: 'استفسارات الشراكة والاستثمار في Rently.pro.',
  },
  nav: {
    features: 'المميزات',
    howItWorks: 'كيف يعمل',
    channels: 'القنوات',
    plans: 'الخطط',
    faq: 'الأسئلة الشائعة',
    investors: 'المستثمرون',
    contact: 'تواصل',
    requestFeature: 'اطلب ميزة',
  },
  hero: {
    badge: 'الوصول المبكر — صُنع في السعودية',
    title: 'إدارة الإيجارات السياحية،',
    titleHighlight: 'مصمّمة لمالكي العقارات في السعودية',
    subtitle:
      'عقاراتك — أو عقارات تديرها لعملائك — في لوحة تحكم واحدة. زامن Airbnb وGathern، ووحّد محادثات الضيوف، واطّلع على تقارير منفصلة لكل مالك.',
    ctaPrimary: 'احصل على وصول مبكر',
    ctaSecondary: 'اكتشف كيف يعمل',
    videoCaption: 'معاينة المنصة — footage تجريبي',
    quote: 'أدر عقاراتك بثقة — أتمت الحجوزات وزامن القنوات ونمِّ عملك في الإيجار بسهولة.',
    quoteSub: 'لوحة تحكم واحدة. كل قناة. صافي دخل حقيقي لكل حجز.',
  },
  trust: [
    { label: 'Airbnb + Gathern' },
    { label: 'عربي أولاً' },
    { label: 'مُصمّم للسعودية' },
    { label: 'وصول مبكر' },
  ],
  audience: {
    label: 'لمن صُمّم',
    title: 'لمالكي العقارات — سواءً لأنفسهم أو لإدارة عقارات الغير',
    subtitle: 'سواءً كانت الشاليهات ملكك أو لعملاء وأصدقاء، Rently.pro يفصل المحافظ بتقارير واضحة ووصول قراءة فقط للمستخدمين الفرعيين.',
    swipeHint: 'اسحب للاستكشاف ←',
    items: [
      { title: 'محفظتك الخاصة', description: 'أدر الشاليهات والفillas التي تملكها — زامن القنوات والحجوزات والمالية من مكان واحد.' },
      { title: 'عقارات العملاء', description: 'شغّل الإيجارات نيابةً عن الآخرين مع تقارير منفصلة لكل مالك — يرى كل واحد أرقامه فقط.' },
      { title: 'مستخدمون فرعيون للقراءة', description: 'أضف مديرين أو محاسبين أو مالكين بوصول viewer — بدون تعديلات عرضية، مع رؤية كاملة.' },
      { title: 'ابدأ صغيراً وتوسّع تدريجياً', description: 'مستوحى من منصات مثل Guesty، لكن يركز على ما يحتاجه المشغّل السعودي أولاً — لا تعقيد enterprise من اليوم الأول.' },
    ],
  },
  problem: {
    label: 'المشكلة',
    title: 'إدارة الإيجارات لا يجب أن تعني التنقل بين خمس أدوات',
    subtitle: 'المشغّلون السعوديون ينشرون على Airbnb وGathern بينما تتراكم رسائل الضيوف في WhatsApp والمالية في جداول.',
    items: [
      { title: 'فوضى القنوات', description: 'القوائم والتقويمات والحجوزات موزعة بين Airbnb وGathern وWhatsApp وجداول البيانات.' },
      { title: 'محادثات مبعثرة', description: 'رسائل الضيوف على كل منصة دون مكان واحد للرد — بطء في الاستجابة وحجوزات ضائعة.' },
      { title: 'مزامنة يدوية', description: 'كل تغيير سعر أو تحديث توفر يُنسخ يدوياً — والحجز المزدوج ينتظر.' },
      { title: 'محافظ مختلطة', description: 'إدارة عقاراتك مع عقارات العملاء دون فصل واضح في التقارير أو الوصول.' },
    ],
  },
  howItWorks: {
    label: 'كيف يعمل',
    title: 'من العقار إلى الدفع في حلقة واحدة',
    subtitle: 'أنشئ محلياً، وزّع على OTAs، رد من صندوق وارد واحد، واطّلع على الدخل لكل عقار وكل مالك.',
    steps: [
      { title: 'أضف عقاراتك', description: 'أعد الشاليهات بخصائص سعودية — ملكك أو مخصصة لمالكي عملاء.' },
      { title: 'زامن مع القنوات', description: 'انشر التوفر والأسعار على Airbnb وGathern من تقويم واحد.' },
      { title: 'وحّد المحادثات', description: 'رسائل الضيوف من كل قناة في صندوق وارد واحد — رد دون التنقل بين التطبيقات.' },
      { title: 'قارِر بوضوح', description: 'تقارير دخل وإشغال منفصلة لكل محفظة أو مالك أو عقار.' },
    ],
  },
  features: {
    label: 'المميزات',
    title: 'كل ما يحتاجه المشغّل. لا شيء للضيوف.',
    subtitle: 'أدوات للمشغّل — مزامنة القنوات وصندوق وارد موحّد ومالية ووصول الفريق دون سعر Guesty.',
    items: [
      { title: 'لوحة المشغّل', description: 'الإشغال والإيرادات والحجوزات النشطة والوصول القادم في لمحة.', icon: 'layout-dashboard' },
      { title: 'صندوق وارد موحّد', description: 'محادثات الضيوف من كل القنوات — رد أسرع من مكان واحد.', icon: 'message-circle' },
      { title: 'مزامنة متعددة القنوات', description: 'مزامنة ثنائية الاتجاه للتوفر والأسعار والحجوزات مع Airbnb وGathern.', icon: 'refresh-cw' },
      { title: 'تقارير منفصلة', description: 'تقارير لكل مالك وعقار عند إدارة إيجارات للعملاء.', icon: 'bar-chart' },
      { title: 'الطبقة المالية', description: 'تقارير الدخل والدفتر والفواتير — صافي دخل حقيقي لكل حجز.', icon: 'wallet' },
      { title: 'الفريق والمستخدمون الفرعيون', description: 'أدوار المالك والمدير وviewer للقراءة فقط مع تحكم دقيق بالوصول.', icon: 'shield' },
    ],
  },
  channels: {
    label: 'التكاملات',
    title: 'القنوات التي يستخدمها المشغّلون — والقادمة',
    subtitle: 'Airbnb وGathern نشطان اليوم. المزيد من OTAs في خارطة الطريق.',
    liveLabel: 'نشط الآن',
    comingSoonLabel: 'قريباً',
    live: [
      { name: 'Airbnb', description: 'اتصال OAuth واستيراد القوائم ومزامنة ثنائية وwebhooks حجز فورية.' },
      { name: 'Gathern', description: 'OTA سعودي أصلي — القوائم والحجوزات والتحويلات والكشوفات والفواتير.' },
    ],
    comingSoon: [
      { name: 'Booking.com', description: 'وصول OTA عالمي لطلب الضيوف الدولي.' },
      { name: 'Expedia', description: 'توسيع التوزيع عبر شبكة Expedia Group.' },
      { name: 'Agoda', description: 'الوصول لمسافري آسيا والمحيط الهادئ.' },
      { name: 'Google Vacation Rentals', description: 'الظهور على Google Travel والبحث المباشر.' },
    ],
  },
  platforms: {
    label: 'المنصة',
    title: 'مُصمّم لطريقة عمل المشغّلين السعوديين',
    subtitle: 'تجربة عربية أولاً مع تفاصيل الدفع والامتثال التي تغفلها أدوات PMS العالمية.',
    items: [
      { title: 'عربي + إنجليزي', description: 'واجهة ثنائية اللغة كاملة مع تخطيط RTL للعربية.' },
      { title: 'فوترة بالريال', description: 'اشتراكات بالريال السعودي عبر Moyasar عند إطلاق الفوترة.' },
      { title: 'جاهز للشاليهات', description: 'خصائص سعودية: مجلس، مسابح، هوية وطنية، معدات.' },
      { title: 'مجموعات المحافظ', description: 'مجموعات منفصلة لعقاراتك مقابل محافظ العملاء.' },
      { title: 'آمن ومدقّق', description: '2FA والتحقق بالبريد ومسارات تدقيق وعزل المستأجرين.' },
      { title: 'سحابي أصلي', description: 'بنية تحتية إنتاجية مبنية للموثوقية والتوسع.' },
    ],
  },
  pricing: {
    label: 'الخطط',
    title: 'أسعار تتوسع مع محفظتك',
    subtitle: 'أسعار شهرية تقريبية لكل محفظة بالريال. حرّك الشريط لمعرفة كيف تتغير الخطط بعدد العقارات.',
    note: 'أسعار توضيحية — الأسعار النهائية تُؤكد قبل إطلاق الفوترة. 31+ عقار: تواصل للحصول على عرض.',
    sliderLabel: 'كم عقاراً تدير؟',
    currency: 'ريال',
    perMonth: '/ شهر',
    getQuote: 'تواصل للحصول على عرض',
    trial: {
      name: 'تجربة مجانية',
      tagline: 'جرّب كل شيء لمدة شهر',
      price: 'مجاني',
      features: ['وصول كامل للمنصة', 'اتصال Airbnb أو Gathern', 'جميع مميزات PMS الأساسية', 'بدون بطاقة ائتمان'],
    },
    basic: {
      name: 'Basic',
      tagline: 'محفظة واحدة، عمليات أساسية',
      features: [
        'مجموعة محفظة واحدة',
        'مزامنة القنوات (Airbnb + Gathern)',
        'محرك حجوزات وCRM ضيوف',
        'تقارير مالية وفواتير',
        'مستخدمون فرعيون للقراءة',
      ],
    },
    pro: {
      name: 'Pro',
      tagline: 'محافظ متعددة وعمليات متقدمة',
      popular: 'موصى به',
      features: [
        'إدارة محافظ متعددة',
        'دعم حسابات متعددة',
        'واجهات أقفال ذكية (TTLock وTuya وغيرها)',
        'اتصالات قنوات غير محدودة',
        'تقارير منفصلة لكل مالك',
        'أدوار فريق ودعم أولوية',
      ],
    },
    cta: 'احصل على وصول مبكر',
  },
  faq: {
    label: 'الأسئلة الشائعة',
    title: 'ما يسأله المشغّلون قبل التسجيل',
    subtitle: 'إجابات صريحة عن Rently.pro اليوم وما هو قادم.',
    items: [
      {
        question: 'ما هو Rently.pro؟',
        answer: 'Rently.pro منصة إدارة عقارات لمشغّلي الإيجارات قصيرة المدى في السعودية. تجمع مزامنة القنوات (Airbnb، Gathern) وإدارة الحجوزات وصندوق وارد موحّد للضيوف والتقارير المالية في لوحة تحكم بالعربية — للمالكين الذين يديرون عقاراتهم أو عقارات عملائهم.',
      },
      {
        question: 'هل Rently.pro متاح للعامة؟',
        answer: 'ليس بعد. المنتج الأساسي في مرحلة beta متأخرة / وصول مبكر. يمكنك التسجيل عبر نموذج التواصل أو طلب الميزات على Userjot. التسجيل الذاتي والفوترة سيُطلَقان عند جاهزية الطبقة التجارية.',
      },
      {
        question: 'لمن صُمّم Rently.pro؟',
        answer: 'مالكي العقارات والمشغّلين في السعودية — hosts الشاليهات وأصحاب الفillas والمديرين الصغار على Airbnb و/أو Gathern. يناسب الم hosts المنفردين والمشغّلين الذين يديرون عقارات للعملاء مع تقارير منفصلة ووصول قراءة للمستخدمين الفرعيين.',
      },
      {
        question: 'كيف يختلف عن Guesty أو أدوات PMS العالمية؟',
        answer: 'Guesty منصة عالمية قوية مبنية للتوسع — وبسعر يناسب ذلك. Rently.pro يخطو خطوات أصغر: تكامل Gathern أصلي عميق، UX عربي أولاً، فوترة بالريال، ونماذج عقارية للشاليهات السعودية. نتجه لتلك الاتجاهات مع الوقت، لكن نبدأ بما يحتاجه المشغّل السعودي فعلاً اليوم.',
      },
      {
        question: 'ما قنوات الحجز المدعومة؟',
        answer: 'Airbnb وGathern نشطان اليوم بمزامنة ثنائية الاتجاه. Booking.com وExpedia وAgoda وGoogle Vacation Rentals في خارطة الطريق — معروضة كـ"قريباً" على الموقع.',
      },
      {
        question: 'هل يمكنني إدارة عقارات للعملاء بتقارير منفصلة؟',
        answer: 'نعم — هذا use case أساسي. أنشئ مجموعات محفظة منفصلة لعقاراتك مقابل عقارات العملاء. كل مالك يرى تقاريره بوضوح. يمكن دعوة مستخدمين فرعيين بوصول قراءة فقط.',
      },
      {
        question: 'هل سيكون هناك صندوق وارد موحّد لرسائل الضيوف؟',
        answer: 'نعم. توحيد قنوات المحادثة في خارطة الطريق — جمع رسائل الضيوف من OTAs المتصلة في صندوق وارد واحد. مدرج كميزة مخططة خلال الوصول المبكر.',
      },
      {
        question: 'كيف أطلب ميزة أو أبلّغ عن مشكلة؟',
        answer: 'استخدم لوحة Userjot (رابط في الهيدر) لتقديم طلبات الميزات والتصويت على ما نبنيه. للوصول المبكر أو أسئلة عامة، استخدم نموذج التواصل.',
      },
    ],
  },
  cta: {
    title: 'مستعد لتبسيط عمليات الإيجار؟',
    subtitle: 'انضم للوصول المبكر أو أخبرنا ما الميزة التي تحتاجها على Userjot.',
    featureButton: 'اطلب ميزة',
    contactButton: 'احصل على وصول مبكر',
  },
  footer: {
    tagline: 'إدارة العقارات لمشغّلي الإيجارات قصيرة المدى في السعودية.',
    product: 'المنتج',
    legal: 'قانوني',
    connect: 'تواصل',
    contactHeading: 'تواصل معنا',
    contactFormLink: 'أو أرسل رسالة عبر نموذج التواصل ←',
    terms: 'الشروط والأحكام',
    privacy: 'سياسة الخصوصية',
    investors: 'المستثمرون',
    rights: 'جميع الحقوق محفوظة.',
    notInProduction: 'المنتج في مرحلة الوصول المبكر — غير متاح للعامة بعد.',
  },
  contact: {
    sectionLabel: 'تواصل',
    sectionTitle: 'تواصل معنا',
    sectionSubtitle: 'سجّل في قائمة الانتظار، أو استكشف فرص الاستثمار، أو أرسل أي استفسار آخر.',
    title: 'تواصل معنا',
    subtitle: 'اختر الموضوع أدناه وأخبرنا كيف يمكننا مساعدتك.',
    pageIntro: 'سواءً كنت مالك عقار ينضم لقائمة الانتظار، أو مستثمراً يستكشف المجال، أو شريكاً محتملاً — يسعدنا سماعك. نرد عادةً خلال يومي عمل.',
    pageAsideTitle: 'طرق أخرى للتواصل',
    pageAsideItems: [
      'طلبات الميزات → لوحة Userjot (رابط في الهيدر)',
      'بريد مباشر → hello@rently.pro',
      'طلبات deck للمستثمرين → اختر "اهتمام استثماري" أعلاه',
    ],
    subjectLabel: 'بخصوص ماذا؟',
    name: 'الاسم الكامل',
    email: 'البريد الإلكتروني',
    company: 'اسم الشركة / المحفظة',
    message: 'الرسالة',
    messagePlaceholder: 'أخبرنا عن عقاراتك أو سؤالك أو فكرة الشراكة…',
    submit: 'إرسال',
    success: 'شكراً! استلمنا رسالتك وسنتواصل معك قريباً.',
  },
  investor: {
    title: 'استفسارات المستثمرين',
    subtitle: 'للشراكة أو المحادثات الاستراتيجية أو الاستثمار — منفصلة عن funnel الوصول المبكر.',
  },
  investors: {
    label: 'للمستثمرين',
    title: 'نبني نظام التشغيل للإيجارات قصيرة المدى في السعودية',
    subtitle:
      'Rently.pro يركز على ميزة تنافسية — تكامل Gathern عميق، اتصال Airbnb، وتجربة عربية أولاً لسوق تغفله أدوات PMS العالمية.',
    points: [
      'منتج في beta متأخر مع تكاملات Airbnb + Gathern نشطة',
      'نموذج B2B SaaS — اشتراكات على مستوى المحفظة بالريال',
      'رياح مواتية للسياحة الداخلية السعودية (رؤية 2030، هيمنة Gathern)',
      'خارطة الطريق: صندوق وارد موحّد، المزيد من OTAs، APIs أقفال ذكية، واجهة فوترة',
    ],
    cardLabel: 'الاستثمار والشراكات',
    cardTitle: 'لنتحدث',
    cardText: 'نرحب بالمحادثات مع مستثمرين استراتيين وإقليميين متوافقين مع SaaS الضيافة في MENA.',
    cta: 'نموذج استفسار المستثمر',
  },
  legal: {
    lastUpdated: 'آخر تحديث: 10 يونيو 2025',
    disclaimer: 'مسودة أولية — راجع مع مستشار قانوني قبل النشر.',
  },
};

export const translations: Record<Locale, Translations> = { en, ar };

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}

export { en, ar };
