export interface ServiceItem {
  id: string;
  label: string;
  description?: string;
}

export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  accentColor: string;
  services: ServiceItem[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  priceFormatted: string;
  period: string;
  popular?: boolean;
  tagline: string;
  includedSummary: string;
  serviceIds: string[];
}

export interface OrderFormData {
  // Header Meta
  formNo: string;
  date: string;
  packageStartDate: string;
  validityDate: string;
  totalPackage: string;
  advancePaid: string;
  balanceAmount: string;
  gstIncluded: boolean;

  // Selected Pricing Plan Preset (Optional)
  pricingPlan: string;

  // Client Information
  companyName: string;
  fullName: string;
  address: string;
  phone: string;
  email: string;
  domainName: string;
  gstNumber: string;

  // Selected Services (Array of Service IDs across all 5 categories)
  selectedServices: string[];

  // Mode of Payment
  paymentModes: string[];
  otherPaymentMode: string;

  // Page 1 Guidelines
  specificGuidelines: string;

  // Page 2: Special Instructions for Services
  webDesignOptions: string[];
  webTechStack: string;

  seoOptions: string[];
  seoCountries: string;
  seoCities: string;

  adKeywordsCount: string;
  adLocation: string;
  adMonthlyBudget: string;
  adKeywordsText: string;

  youtubeOptions: string[];
  aiCloudOptions: string[];

  emailOptions: string[];
  emailIdsCount: string;

  // WhatsApp & Smart Connect Automation (Page 2 Special Instructions)
  whatsAppTriggers: string[];
  whatsAppMediaTypes: string[];
  whatsAppSimRules: string;
  whatsAppRepeatGap: string;
  whatsAppBlacklist: string;
  whatsAppLanguages: string;
  chatbotOptions: string[];
  smartReviewKitOptions: string[];
  smartReviewGoogleLink: string;
  smsDailyLimit: string;
  digitalProfileDays: string;

  page2SpecialGuidelines: string;
  specialCommitment: string;

  // Signatures
  clientSignatoryName: string;
  clientDesignation: string;
  clientSignatureDataUrl: string;
  representativeName: string;
  signatureDate: string;
}
