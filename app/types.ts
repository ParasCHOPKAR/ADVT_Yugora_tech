export interface ServiceItem {
  id: string;
  label: string;
}

export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  accentColor: string;
  services: ServiceItem[];
}

export interface OrderFormData {
  // Header Meta
  formNo: string;
  date: string;
  totalPackage: string;
  advancePaid: string;
  balanceAmount: string;
  gstIncluded: boolean;

  // Client Information
  companyName: string;
  fullName: string;
  address: string;
  phone: string;
  email: string;
  domainName: string;
  gstNumber: string;

  // Selected Services (Category -> Array of Service IDs)
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

  page2SpecialGuidelines: string;
  specialCommitment: string;

  // Signatures
  clientSignatoryName: string;
  clientDesignation: string;
  clientSignatureDataUrl: string;
  representativeName: string;
  signatureDate: string;
}
