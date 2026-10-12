import { ServiceCategory, OrderFormData } from "./types";

export const COMPANY_DETAILS = {
  name: "YUGORA TECH",
  tagline: "Next-Gen Digital, Enterprise & AI Technology Solutions",
  subtitle: "Trusted Digital Transformation Partner",
  email: "support@yugoratech.com",
  salesEmail: "sales@yugoratech.com",
  phone: "+91 80072 31573 / +91 93091 41300",
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
  "5. If you do not renew your web package, server or maintenance after one year, we will not be responsible for domain names, website content, or mailing services.",
  "6. Any applicable government taxes or levies (including GST @ 18%) will be assessed as per statutory requirements.",
  "7. Scope of Work: Yugora Tech agrees to provide website design, custom software engineering, and digital marketing services as detailed in the project proposal or agreement.",
  "8. Client Responsibilities: The client agrees to provide all necessary materials, API credentials, branding, information, and approvals required for the timely completion of the project. Timely communication and feedback from the client are essential for project velocity.",
  "9. Payment Terms: The client agrees to pay 50% of the total project cost as an upfront deposit before the commencement of work. Milestone payments will be specified in the project proposal, with the final payment due upon project delivery/deployment. Late payments may incur delay charges, and the Company reserves the right to suspend development or access until outstanding payments are cleared.",
  "10. Intellectual Property: Upon receipt of full payment, the client will own the intellectual property rights to the custom source code and unique graphic assets. The Company retains the right to display non-confidential project highlights in its portfolio.",
  "11. Timeline and Delays: A project timeline will be provided in the project proposal. Delays caused by the client in providing content or approvals may result in a proportional extension of delivery milestones.",
  "12. Termination of Services: Either party may terminate the agreement in writing if the other party materially breaches its obligations. Termination fees covering work completed to date may apply.",
  "13. Confidentiality: Both parties agree to keep all confidential business information, trade secrets, database schemas, and proprietary ideas exchanged during the project strictly confidential.",
  "14. Hosting and Domain: If hosting and domain services are managed by the Company, the client agrees to adhere to the terms and acceptable use policies of the respective cloud/infrastructure providers.",
  "15. Legal Compliance: The client is responsible for ensuring the website/app complies with applicable regional and international cyber, copyright, and consumer protection laws.",
  "16. Updates to Terms and Conditions: The Company reserves the right to update these terms and conditions. Clients will be notified in writing of any material amendments.",
];

export const INITIAL_FORM_DATA: OrderFormData = {
  formNo: "YT-2026-1048",
  date: new Date().toISOString().split("T")[0],
  totalPackage: "",
  advancePaid: "",
  balanceAmount: "",
  gstIncluded: false,

  companyName: "",
  fullName: "",
  address: "",
  phone: "",
  email: "",
  domainName: "",
  gstNumber: "",

  selectedServices: [],

  paymentModes: ["NEFT"],
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

  page2SpecialGuidelines: "",

  clientSignatoryName: "",
  clientDesignation: "",
  clientSignatureDataUrl: "",
  representativeName: "Authorized Signatory (Yugora Tech)",
  signatureDate: new Date().toISOString().split("T")[0],
};

export const SAMPLE_FORM_DATA: OrderFormData = {
  formNo: "YT-2026-0428",
  date: "2026-10-12",
  totalPackage: "1,85,000",
  advancePaid: "95,000",
  balanceAmount: "90,000",
  gstIncluded: true,

  companyName: "Nexus Enterprise Solutions Pvt Ltd",
  fullName: "Vikramaditya Sharma",
  address: "704, Tech Boulevard, Sector 62, Noida, Uttar Pradesh - 201309",
  phone: "+91 98112 34567",
  email: "vikram@nexusenterprise.com",
  domainName: "www.nexusenterprise.com",
  gstNumber: "07AAACN1234F1ZX",

  selectedServices: [
    "web_application",
    "ui_ux_design",
    "ecommerce_website",
    "seo_aeo_geo",
    "google_ads",
    "custom_software",
    "api_integration",
    "ai_chatbots",
    "cloud_solutions",
  ],

  paymentModes: ["NEFT", "RTGS"],
  otherPaymentMode: "",

  specificGuidelines:
    "1. Seamless integration with existing inventory database.\n2. Next.js App Router with ultra-fast page load score (95+ Lighthouse).\n3. AI Chatbot trained on internal product catalogue for automated lead capture.\n4. Complete brand guidelines and design system adherence.",

  webDesignOptions: [
    "New Website / Web App Design",
    "Updation and Maintenance of live Website",
  ],
  webTechStack: "Next.js 15, TypeScript, Tailwind/Vanilla CSS, PostgreSQL, AWS",

  seoOptions: ["SEO Pan India", "Citywise SEO", "Off Page Activity"],
  seoCountries: "India, UAE, Singapore",
  seoCities: "Delhi NCR, Mumbai, Bengaluru, Hyderabad",

  adKeywordsCount: "35 High-Intent Keywords",
  adLocation: "Pan-India Metro Cities & GCC Region",
  adMonthlyBudget: "₹ 50,000 / Month",
  adKeywordsText:
    "Enterprise ERP Software, Cloud CRM solutions, AI Business Automation, Custom Software Development Company",

  youtubeOptions: ["Organic SEO", "Boosting Views"],
  aiCloudOptions: ["AI Chatbots", "Cloud Solutions", "API Integration"],

  emailOptions: ["G Suite / Google Workspace ID"],
  emailIdsCount: "15 Enterprise Business IDs",

  page2SpecialGuidelines:
    "Weekly sprint review meetings every Tuesday. Staging server deployment required before final production DNS cutover.",

  clientSignatoryName: "Vikramaditya Sharma",
  clientDesignation: "Managing Director & CEO",
  clientSignatureDataUrl: "",
  representativeName: "Rajesh K. Verma (Chief Solutions Architect)",
  signatureDate: "2026-10-12",
};
