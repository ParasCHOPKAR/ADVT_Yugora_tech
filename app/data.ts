import { ServiceCategory, OrderFormData, PricingPlan } from "./types";

export const COMPANY_DETAILS = {
  name: "YUGORA TECH",
  tagline: "Next-Gen Digital, Enterprise & AI Technology Solutions",
  subtitle: "Yugora Tech Digital & Software Solutions",
  email: "support@yugoratech.com",
  salesEmail: "sales@yugoratech.com",
  phone: "+91 98902 31573",
  website: "www.yugoratech.com",
  address: "Innovation Tech Hub, Pune / Mumbai, Maharashtra, India",
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "digital_presence",
    number: "01",
    title: "DIGITAL PRESENCE",
    accentColor: "#0070F3",
    services: [
      { id: "domain_hosting", label: "Domain & Hosting" },
      { id: "static_website", label: "Static Website" },
      { id: "dynamic_website", label: "Dynamic Website" },
      { id: "ecommerce_website", label: "E-Commerce Website" },
      { id: "web_application", label: "Web Application" },
      { id: "ui_ux_design", label: "UI/UX Design" },
      { id: "website_dev", label: "Website Development" },
    ],
  },
  {
    id: "digital_marketing",
    number: "02",
    title: "DIGITAL MARKETING",
    accentColor: "#00B4D8",
    services: [
      { id: "seo_aeo_geo", label: "SEO / AEO / GEO" },
      { id: "google_ads", label: "Google Ads" },
      { id: "meta_ads", label: "Meta Ads" },
      { id: "digital_marketing", label: "Digital Marketing" },
      { id: "social_media_marketing", label: "Social Media Marketing" },
      { id: "youtube_marketing", label: "YouTube Marketing" },
      { id: "local_seo", label: "Local SEO" },
      { id: "graphic_design_video", label: "Graphic Design & Video" },
    ],
  },
  {
    id: "software_enterprise",
    number: "03",
    title: "SOFTWARE & ENTERPRISE",
    accentColor: "#2563EB",
    services: [
      { id: "erp_crm_hrms", label: "ERP / CRM / HRMS" },
      { id: "custom_software", label: "Custom Software" },
      { id: "web_app_dev", label: "Web App Dev" },
      { id: "mobile_app_dev", label: "Mobile App Dev" },
      { id: "saas_dev", label: "SaaS Development" },
      { id: "api_integration", label: "API Integration" },
      { id: "workflow_automation", label: "Workflow Automation" },
    ],
  },
  {
    id: "ai_advanced_tech",
    number: "04",
    title: "AI & ADVANCED TECH",
    accentColor: "#F59E0B",
    services: [
      { id: "ai_solutions", label: "AI Solutions" },
      { id: "ai_automation", label: "AI Automation" },
      { id: "ai_chatbots", label: "AI Chatbots" },
      { id: "data_analytics_bi", label: "Data Analytics / BI" },
      { id: "iot_solutions", label: "IoT Solutions" },
      { id: "cloud_solutions", label: "Cloud Solutions" },
      { id: "devops_cicd", label: "DevOps & CI/CD" },
      { id: "cyber_security", label: "Cyber Security" },
    ],
  },
  {
    id: "whatsapp_smart_connect",
    number: "05",
    title: "WHATSAPP & SMART CONNECT",
    accentColor: "#10B981",
    services: [
      { id: "auto_whatsapp_call", label: "Auto WhatsApp After Call" },
      { id: "whatsapp_chatbot", label: "WhatsApp Chatbot Automation" },
      { id: "whatsapp_marketing", label: "WhatsApp Marketing" },
      { id: "auto_sms_call", label: "Auto SMS After Call (100/day)" },
      { id: "smart_digital_profile", label: "Smart Digital Business Profile" },
      { id: "daily_promo_posts", label: "365 Days Daily Greeting Posts" },
      { id: "smart_connect_qr", label: "Smart CONNECT QR (AI Review Kit)" },
      { id: "unified_dashboard", label: "Unified Dashboard App" },
    ],
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: 1499,
    priceFormatted: "1,499",
    period: "per year",
    tagline: "Essential SMS & Branding Toolkit",
    includedSummary: "Auto SMS after call (100/day), Smart Digital Business Card & mini-website, 365 daily posts",
    serviceIds: ["auto_sms_call", "smart_digital_profile", "daily_promo_posts"],
  },
  {
    id: "standard",
    name: "Standard",
    price: 4199,
    priceFormatted: "4,199",
    period: "per year",
    tagline: "Starter + Auto WhatsApp After Call",
    includedSummary: "Starter + Auto WhatsApp message after call with rich media (Text, Images, Videos, PDFs & Links)",
    serviceIds: ["auto_sms_call", "smart_digital_profile", "daily_promo_posts", "auto_whatsapp_call"],
  },
  {
    id: "advance",
    name: "Advance",
    price: 14199,
    priceFormatted: "14,199",
    period: "per year",
    tagline: "Standard + WhatsApp Chatbot",
    includedSummary: "Standard + 24x7 WhatsApp Chatbot automation with button flows, lead qualification & CRM integration",
    serviceIds: ["auto_sms_call", "smart_digital_profile", "daily_promo_posts", "auto_whatsapp_call", "whatsapp_chatbot"],
  },
  {
    id: "chatbot_standalone",
    name: "WhatsApp Chatbot",
    price: 9999,
    priceFormatted: "9,999",
    period: "per year",
    tagline: "Dedicated WhatsApp Chatbot",
    includedSummary: "Standalone WhatsApp chatbot automation, button menu, 24x7 automated replies & lead capture",
    serviceIds: ["whatsapp_chatbot"],
  },
  {
    id: "smart_qr_kit",
    name: "Smart AI-Review QR Kit",
    price: 3499,
    priceFormatted: "3,499",
    period: "per year",
    tagline: "Google Review Booster with Standee & NFC",
    includedSummary: "Review QR standee + Free NFC card, AI review suggestions, keyword dashboard, AI auto-replies",
    serviceIds: ["smart_connect_qr"],
  },
  {
    id: "business_growth",
    name: "Business Growth",
    price: 14999,
    priceFormatted: "14,999",
    period: "per year",
    popular: true,
    tagline: "All-in-One Growth Suite",
    includedSummary: "Everything: Auto SMS, WhatsApp after call, digital card, 365 daily posts, chatbot & Smart AI-Review QR kit",
    serviceIds: [
      "auto_sms_call",
      "smart_digital_profile",
      "daily_promo_posts",
      "auto_whatsapp_call",
      "whatsapp_chatbot",
      "smart_connect_qr",
      "unified_dashboard",
    ],
  },
];

export const WHATSAPP_TRIGGER_OPTIONS = [
  "Incoming Calls",
  "Outgoing Calls",
  "Missed Calls",
];

export const WHATSAPP_MEDIA_OPTIONS = [
  "Text Message",
  "Images / Posters",
  "Videos",
  "PDF Catalogs / Brochures",
  "Web & Payment Links",
];

export const WHATSAPP_SIM_OPTIONS = [
  "Both SIM 1 & SIM 2",
  "SIM 1 Only",
  "SIM 2 Only",
];

export const WHATSAPP_REPEAT_OPTIONS = [
  "24 Hours (Once per day per caller)",
  "12 Hours",
  "6 Hours",
  "2 Hours",
  "Every Call (No delay)",
];

export const CHATBOT_FEATURE_OPTIONS = [
  "24x7 Automated Replies",
  "Button-based WhatsApp Automation",
  "Smart Lead Qualification",
  "Instant Product & Catalog Suggestions",
  "Multi-Language Support",
  "CRM, Payment & API Integrations",
];

export const SMART_REVIEW_KIT_OPTIONS = [
  "Printed Acrylic QR Standee",
  "Free Tap-to-Review NFC Card",
  "AI SEO-Friendly Review Suggestions",
  "Keyword Optimization Dashboard",
  "AI Auto-Replies to Reviews",
  "Auto-Removal of Posted Suggestions",
];

export const PAYMENT_MODE_OPTIONS = [
  "Cheque",
  "NEFT",
  "RTGS",
  "Credit / Debit Card",
  "UPI / QR Code",
  "Net Banking",
];

export const TERMS_AND_CONDITIONS = [
  "1. The information contained on the website/software is solely the responsibility of the client's signatory, and the signatory hereby agrees to fully indemnify Yugora Tech in this regard as and when any claims, demands, etc.",
  "2. The website/software will be placed on the signatory's domain name within one month of receiving the complete website matter, photos, designs, and so on, as well as receipt of the full payment.",
  "3. Please make sure that the website content, product information, and photos you provide are your own or properly licensed.",
  "4. If a legal dispute arises in the future, our company will not be held liable under any circumstances beyond the direct contractual project value.",
  "5. If you do not renew your web package, server, WhatsApp automation or maintenance after one year, we will not be responsible for domain names, content, AI quotas, or mailing services.",
  "6. Any applicable government taxes or levies (including GST @ 18%) will be assessed as per statutory requirements.",
  "7. Scope of Work: Yugora Tech agrees to provide website design, custom software engineering, WhatsApp automation and digital marketing services as detailed in the project proposal.",
  "8. Client Responsibilities: The client agrees to provide all necessary materials, API credentials, branding, information, and approvals required for the timely completion of the project.",
  "9. WhatsApp & SMS Compliance: Auto SMS & WhatsApp automations are subject to Meta WhatsApp Business policies and regional telecom guidelines. Sending limit is within standard network quotas.",
  "10. Smart AI Review Kit: The kit includes one printed QR standee and one NFC card. AI suggestions and review keyword dashboards remain active during the active subscription validity period.",
  "11. Payment Terms: The client agrees to pay upfront deposit or package subscription before commencement of work. Milestone payments will be specified in the proposal.",
  "12. Intellectual Property: Upon receipt of full payment, the client will own intellectual property rights to custom deliverables. Yugora Tech retains right to showcase non-confidential project highlights.",
  "13. Timeline and Delays: A project timeline will be provided in proposal. Delays caused by the client in providing content may result in proportional milestone extensions.",
  "14. Termination of Services: Either party may terminate the agreement in writing if the other party materially breaches its obligations. Termination fees covering work completed apply.",
  "15. Confidentiality: Both parties agree to keep all confidential business information, trade secrets, database schemas, and customer contact numbers strictly confidential.",
  "16. Updates to Terms and Conditions: The Company reserves the right to update these terms and conditions. Clients will be notified in writing of any material amendments.",
];

export const INITIAL_FORM_DATA: OrderFormData = {
  formNo: "YT-2026-1048",
  date: new Date().toISOString().split("T")[0],
  packageStartDate: new Date().toISOString().split("T")[0],
  validityDate: "",
  totalPackage: "",
  advancePaid: "",
  balanceAmount: "",
  gstIncluded: false,

  pricingPlan: "",

  companyName: "",
  fullName: "",
  address: "",
  phone: "",
  email: "",
  domainName: "",
  gstNumber: "",

  selectedServices: [],

  paymentModes: ["UPI / QR Code"],
  otherPaymentMode: "",

  specificGuidelines: "",

  webDesignOptions: [],
  webTechStack: "",

  seoOptions: [],
  seoCountries: "",
  seoCities: "",

  adKeywordsCount: "",
  adLocation: "",
  adMonthlyBudget: "",
  adKeywordsText: "",

  youtubeOptions: [],
  aiCloudOptions: [],

  emailOptions: [],
  emailIdsCount: "",

  // WhatsApp & Smart Connect Automation
  whatsAppTriggers: ["Incoming Calls", "Outgoing Calls", "Missed Calls"],
  whatsAppMediaTypes: ["Text Message", "Images / Posters", "PDF Catalogs / Brochures", "Web & Payment Links"],
  whatsAppSimRules: "Both SIM 1 & SIM 2",
  whatsAppRepeatGap: "24 Hours (Once per day per caller)",
  whatsAppBlacklist: "Internal staff, personal family contacts, emergency numbers",
  whatsAppLanguages: "English, Hindi, Regional Languages",
  chatbotOptions: [
    "24x7 Automated Replies",
    "Button-based WhatsApp Automation",
    "Smart Lead Qualification",
    "Instant Product & Catalog Suggestions",
  ],
  smartReviewKitOptions: [
    "Printed Acrylic QR Standee",
    "Free Tap-to-Review NFC Card",
    "AI SEO-Friendly Review Suggestions",
    "Keyword Optimization Dashboard",
    "AI Auto-Replies to Reviews",
  ],
  smartReviewGoogleLink: "",
  smsDailyLimit: "100 SMS / Day (Sent from own SIM number)",
  digitalProfileDays: "365 Days Daily Greeting & Promotional Posts",

  page2SpecialGuidelines: "",
  specialCommitment: "",

  clientSignatoryName: "",
  clientDesignation: "",
  clientSignatureDataUrl: "",
  representativeName: "Authorized Signatory (Yugora Tech)",
  signatureDate: new Date().toISOString().split("T")[0],
};

export const SAMPLE_FORM_DATA: OrderFormData = {
  formNo: "YT-2026-0428",
  date: "2026-10-12",
  packageStartDate: "2026-10-15",
  validityDate: "2027-10-14",
  totalPackage: "14,999",
  advancePaid: "14,999",
  balanceAmount: "0",
  gstIncluded: true,

  pricingPlan: "Business Growth",

  companyName: "Nexus Enterprise Solutions Pvt Ltd",
  fullName: "Vikramaditya Sharma",
  address: "704, Tech Boulevard, Sector 62, Noida, Uttar Pradesh - 201309",
  phone: "+91 98112 34567",
  email: "vikram@nexusenterprise.com",
  domainName: "www.nexusenterprise.com",
  gstNumber: "07AAACN1234F1ZX",

  selectedServices: [
    "auto_whatsapp_call",
    "whatsapp_chatbot",
    "auto_sms_call",
    "smart_digital_profile",
    "daily_promo_posts",
    "smart_connect_qr",
    "unified_dashboard",
    "web_application",
    "ui_ux_design",
  ],

  paymentModes: ["UPI / QR Code", "NEFT"],
  otherPaymentMode: "",

  specificGuidelines:
    "1. Setup Auto WhatsApp message after incoming, outgoing & missed calls with brochure PDF.\n2. Configure 24x7 interactive button-based chatbot for instant lead capture and service quotation.\n3. Deploy Smart AI-Review QR Kit with printed Acrylic Standee & NFC card for reception desk.\n4. Enable Unified Dashboard App with daily branding toolkit for marketing team.",

  webDesignOptions: [
    "New Website / Web App Design",
    "Updation and Maintenance of live Website",
  ],
  webTechStack: "Next.js 15, TypeScript, Tailwind/Vanilla CSS, Cloud WhatsApp API",

  seoOptions: ["SEO Pan India", "Citywise SEO", "Off Page Activity"],
  seoCountries: "India, UAE, Singapore",
  seoCities: "Delhi NCR, Mumbai, Bengaluru, Hyderabad",

  adKeywordsCount: "35 High-Intent Keywords",
  adLocation: "Pan-India Metro Cities & GCC Region",
  adMonthlyBudget: "₹ 50,000 / Month",
  adKeywordsText:
    "Enterprise ERP Software, Cloud CRM solutions, WhatsApp Business Automation, AI Chatbot integration",

  youtubeOptions: ["Organic SEO", "Boosting Views"],
  aiCloudOptions: ["AI Chatbots", "Cloud Solutions", "API Integration"],

  emailOptions: ["G Suite / Google Workspace ID"],
  emailIdsCount: "15 Enterprise Business IDs",

  // WhatsApp & Smart Connect Automation
  whatsAppTriggers: ["Incoming Calls", "Outgoing Calls", "Missed Calls"],
  whatsAppMediaTypes: [
    "Text Message",
    "Images / Posters",
    "PDF Catalogs / Brochures",
    "Web & Payment Links",
  ],
  whatsAppSimRules: "Both SIM 1 & SIM 2",
  whatsAppRepeatGap: "24 Hours (Once per day per caller)",
  whatsAppBlacklist: "Internal team (12 numbers), Vendor delivery contacts",
  whatsAppLanguages: "English & Hindi (Auto-detect user language)",
  chatbotOptions: [
    "24x7 Automated Replies",
    "Button-based WhatsApp Automation",
    "Smart Lead Qualification",
    "Instant Product & Catalog Suggestions",
    "CRM, Payment & API Integrations",
  ],
  smartReviewKitOptions: [
    "Printed Acrylic QR Standee",
    "Free Tap-to-Review NFC Card",
    "AI SEO-Friendly Review Suggestions",
    "Keyword Optimization Dashboard",
    "AI Auto-Replies to Reviews",
    "Auto-Removal of Posted Suggestions",
  ],
  smartReviewGoogleLink: "g.page/r/nexus-enterprise-reviews",
  smsDailyLimit: "100 SMS / Day (Sent from own SIM number)",
  digitalProfileDays: "365 Days Daily Greeting & Promotional Posts",

  page2SpecialGuidelines:
    "Deploy WhatsApp Call Automation on executive Android devices. Provide printed QR standee at Noida HQ within 5 business days. Configure webhooks for lead CRM sync.",
  specialCommitment:
    "100% Delivery Guarantee: Full onboarding within 48 hours. Free replacement for NFC card during the 1-year subscription period. Dedicated account manager with priority WhatsApp technical support.",

  clientSignatoryName: "Vikramaditya Sharma",
  clientDesignation: "Managing Director & CEO",
  clientSignatureDataUrl: "",
  representativeName: "Rajesh K. Verma (Chief Solutions Architect)",
  signatureDate: "2026-10-12",
};
