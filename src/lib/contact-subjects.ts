export type ContactSubjectId = 'waitlist' | 'investor' | 'partnership' | 'other';

export interface ContactSubjectOption {
  id: ContactSubjectId;
  label: string;
  description: string;
  emailSubject: string;
}

export function getContactSubjectOptions(locale: 'en' | 'ar'): ContactSubjectOption[] {
  if (locale === 'ar') {
    return [
      {
        id: 'waitlist',
        label: 'تسجيل في قائمة الانتظار',
        description: 'مهتم بالوصول المبكر أو تجربة المنصة عند الإطلاق. أخبرنا عن محفظتك وعدد العقارات.',
        emailSubject: 'Waitlist — Rently.pro',
      },
      {
        id: 'investor',
        label: 'اهتمام استثماري',
        description: 'للمحادثات الاستراتيجية أو الاستثمار أو الشراكات. منفصل عن طلبات الوصول المبكر للمشغّلين.',
        emailSubject: 'Investor Inquiry — Rently.pro',
      },
      {
        id: 'partnership',
        label: 'شراكة أو تكامل',
        description: 'OTA، مزود خدمات، أو فرصة شراكة تجارية. صف نوع التعاون المقترح.',
        emailSubject: 'Partnership Inquiry — Rently.pro',
      },
      {
        id: 'other',
        label: 'استفسار آخر',
        description: 'أي موضوع آخر — يرجى وصف طلبك بالتفصيل في حقل الرسالة أدناه.',
        emailSubject: 'General Inquiry — Rently.pro',
      },
    ];
  }

  return [
    {
      id: 'waitlist',
      label: 'Waitlist registration',
      description: 'Interested in early access or trying the platform at launch. Tell us about your portfolio and property count.',
      emailSubject: 'Waitlist — Rently.pro',
    },
    {
      id: 'investor',
      label: 'Investor interest',
      description: 'For strategic, investment, or partnership conversations. Separate from operator early-access requests.',
      emailSubject: 'Investor Inquiry — Rently.pro',
    },
    {
      id: 'partnership',
      label: 'Partnership or integration',
      description: 'OTAs, service providers, or business partnerships. Describe the collaboration you have in mind.',
      emailSubject: 'Partnership Inquiry — Rently.pro',
    },
    {
      id: 'other',
      label: 'Other',
      description: 'Anything else — please describe your request in detail in the message field below.',
      emailSubject: 'General Inquiry — Rently.pro',
    },
  ];
}
