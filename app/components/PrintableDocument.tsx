"use client";

import React from "react";
import Image from "next/image";
import {
  Phone,
  Globe,
  ShieldCheck,
  Zap,
  MessageSquare,
  QrCode,
  Tag,
} from "lucide-react";
import { OrderFormData } from "../types";
import {
  COMPANY_DETAILS,
  SERVICE_CATEGORIES,
  PAYMENT_MODE_OPTIONS,
  TERMS_AND_CONDITIONS,
} from "../data";

interface PrintableDocumentProps {
  data: OrderFormData;
  activePageTab?: "both" | "page1" | "page2";
}

export default function PrintableDocument({
  data,
  activePageTab = "both",
}: PrintableDocumentProps) {
  const isSelected = (serviceId: string) =>
    data.selectedServices.includes(serviceId);

  const isPaymentModeSelected = (mode: string) =>
    data.paymentModes.includes(mode);

  return (
    <div className="printable-root">
      {/* ================= PAGE 1 ================= */}
      {(activePageTab === "both" || activePageTab === "page1") && (
        <section className="a4-sheet order-sheet-page1" id="order-form-page-1">
          {/* Top Banner Header */}
          <div className="sheet-header">
            {/* Left Brand Badge */}
            <div className="header-brand-badge">
              <div className="brand-logo-wrap">
                <Image
                  src="/yugora-logo.png"
                  alt="YUGORA TECH Logo"
                  width={48}
                  height={48}
                  className="brand-logo-img"
                  priority
                  unoptimized
                />
                <div className="brand-text-block">
                  <h1 className="brand-title">{COMPANY_DETAILS.name}</h1>
                  <span className="brand-slogan">
                    INNOVATE DIGITAL ... TRANSFORM FUTURE ...
                  </span>
                </div>
              </div>
            </div>

            {/* Right Header Navy Block */}
            <div className="header-navy-banner">
              <div className="header-title-wrap">
                <div className="header-order-title">
                  ORDER <span className="text-highlight">Form</span>{" "}
                  <span className="gold-pipe">|</span>{" "}
                  <span className="gold-co-name">YUGORA TECH</span>
                </div>
                <div className="header-tagline">{COMPANY_DETAILS.subtitle}</div>
              </div>

              {/* Yellow/Orange Order Meta Box */}
              <div className="header-meta-box">
                <div className="meta-row">
                  <span className="meta-label">Form No :</span>
                  <span className="meta-value">{data.formNo || "YT-2026-____"}</span>
                </div>
                <div className="meta-row">
                  <span className="meta-label">Start Date :</span>
                  <span className="meta-value">
                    {data.packageStartDate
                      ? data.packageStartDate.split("-").reverse().join(" / ")
                      : data.date
                      ? data.date.split("-").reverse().join(" / ")
                      : "__ / __ / ____"}
                  </span>
                </div>
                <div className="meta-row">
                  <span className="meta-label">Valid Till :</span>
                  <span className="meta-value">
                    {data.validityDate
                      ? data.validityDate.split("-").reverse().join(" / ")
                      : "__ / __ / ____"}
                  </span>
                </div>
                <div className="meta-row">
                  <span className="meta-label">Total Package :</span>
                  <span className="meta-value meta-package-value">
                    {data.totalPackage ? `₹ ${data.totalPackage} /-` : "₹ _________ /-"}
                  </span>
                </div>
              </div>
            </div>

            {/* Sub-header Contact Strip */}
            <div className="header-contact-strip">
              <div className="contact-item phone-only-item">
                <Phone size={13} className="contact-icon" />
                <span className="phone-number-bold">+91 98902 31573</span>
              </div>
            </div>
          </div>

          {/* CLIENT INFORMATION */}
          <div className="sheet-section client-info-section">
            <div className="section-heading">
              <h2>CLIENT INFORMATION</h2>
              <div className="heading-accent-line"></div>
            </div>

            <div className="form-fields-grid">
              <div className="field-row">
                <span className="field-label">Company Name :</span>
                <span className="field-value-box">{data.companyName || "\u00A0"}</span>
              </div>

              <div className="field-row">
                <span className="field-label">Full Name :</span>
                <span className="field-value-box">{data.fullName || "\u00A0"}</span>
              </div>

              <div className="field-row">
                <span className="field-label">Address :</span>
                <span className="field-value-box">{data.address || "\u00A0"}</span>
              </div>

              <div className="field-row split-fields">
                <div className="half-field">
                  <span className="field-label">Phone :</span>
                  <span className="field-value-box">{data.phone || "\u00A0"}</span>
                </div>
                <div className="half-field">
                  <span className="field-label">Email :</span>
                  <span className="field-value-box">{data.email || "\u00A0"}</span>
                </div>
              </div>

              <div className="field-row split-fields">
                <div className="half-field flex-grow">
                  <span className="field-label">Domain Name :</span>
                  <span className="field-value-box">{data.domainName || "\u00A0"}</span>
                </div>
                {data.gstNumber && (
                  <div className="half-field">
                    <span className="field-label">GSTIN :</span>
                    <span className="field-value-box">{data.gstNumber}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* SELECT YOUR SERVICES (5 DIVISIONS) */}
          <div className="sheet-section services-selection-section">
            <div className="section-heading">
              <h2>SELECT YOUR SERVICES</h2>
              <div className="heading-accent-line"></div>
            </div>

            {/* 5-Category Services Grid */}
            <div className="services-five-columns">
              {SERVICE_CATEGORIES.map((cat) => (
                <div key={cat.id} className="service-category-col">
                  <div className="service-cat-header">
                    <span
                      className="cat-num"
                      style={{ color: cat.accentColor }}
                    >
                      {cat.number}
                    </span>
                    <span
                      className="cat-title"
                      style={{ color: cat.accentColor }}
                    >
                      {cat.title}
                    </span>
                  </div>

                  <div className="cat-services-list">
                    {cat.services.map((svc) => {
                      const checked = isSelected(svc.id);
                      return (
                        <div
                          key={svc.id}
                          className={`service-checkbox-item ${
                            checked ? "is-selected" : ""
                          }`}
                        >
                          <span className="custom-checkbox">
                            {checked ? (
                              <span className="check-box-checked">✓</span>
                            ) : (
                              <span className="check-box-empty"></span>
                            )}
                          </span>
                          <span className="service-label-text">{svc.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MODE OF PAYMENT */}
          <div className="sheet-section payment-section">
            <div className="section-heading">
              <h2>MODE OF PAYMENT</h2>
              <div className="heading-accent-line"></div>
            </div>

            <div className="payment-options-row">
              {PAYMENT_MODE_OPTIONS.map((mode) => {
                const checked = isPaymentModeSelected(mode);
                return (
                  <div key={mode} className="payment-checkbox-item">
                    <span className="custom-checkbox">
                      {checked ? (
                        <span className="check-box-checked">✓</span>
                      ) : (
                        <span className="check-box-empty"></span>
                      )}
                    </span>
                    <span className="payment-mode-label">{mode}</span>
                  </div>
                );
              })}
            </div>

            {/* Financial Summary Strip */}
            {(data.advancePaid ||
              data.balanceAmount ||
              data.pricingPlan ||
              (data.packageStartDate && data.validityDate)) && (
              <div className="payment-financial-breakdown">
                {data.pricingPlan && (
                  <div className="breakdown-tag plan-tag">
                    <Tag size={12} className="tag-icon" />
                    <span className="lbl">Plan:</span>
                    <span className="val plan-val">{data.pricingPlan}</span>
                  </div>
                )}
                {data.packageStartDate && data.validityDate && (
                  <div className="breakdown-tag period-tag">
                    <span className="lbl">Validity:</span>
                    <span className="val">
                      {data.packageStartDate.split("-").reverse().join("/")} to{" "}
                      {data.validityDate.split("-").reverse().join("/")}
                    </span>
                  </div>
                )}
                {data.advancePaid && (
                  <div className="breakdown-tag">
                    <span className="lbl">Advance Paid:</span>
                    <span className="val">₹ {data.advancePaid}</span>
                  </div>
                )}
                {data.balanceAmount && (
                  <div className="breakdown-tag">
                    <span className="lbl">Balance Due:</span>
                    <span className="val">₹ {data.balanceAmount}</span>
                  </div>
                )}
                {data.gstIncluded && (
                  <div className="breakdown-tag gst-tag">
                    <ShieldCheck size={12} />
                    <span>Includes 18% GST Applicable</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Specific guidelines */}
          <div className="sheet-section guidelines-section">
            <div className="guidelines-title">
              Specific guidelines, if any (for Website, Software, WhatsApp Automation &amp; AI) :
            </div>
            <div className="guidelines-content-box">
              {data.specificGuidelines ? (
                <p className="guidelines-text">{data.specificGuidelines}</p>
              ) : (
                <div className="empty-guidelines-lines">
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
              )}
            </div>
          </div>

          {/* Signatures Row */}
          <div className="sheet-signatures-row">
            <div className="signature-col client-signature-col">
              <div className="sig-line-top"></div>
              <div className="sig-name">
                {data.clientSignatoryName || "______________________________"}
              </div>
              <div className="sig-designation">
                {data.clientDesignation || "Name & Designation"}
              </div>
            </div>

            <div className="signature-col client-stamp-col">
              <div className="signature-preview-slot">
                {data.clientSignatureDataUrl ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={data.clientSignatureDataUrl}
                    alt="Client Signature"
                    className="client-signature-drawn"
                  />
                ) : (
                  <div className="sig-placeholder-space"></div>
                )}
              </div>
              <div className="sig-line-top"></div>
              <div className="sig-designation party-stamp-label">
                Signature &amp; Stamp of the Party
              </div>
            </div>
          </div>

          {/* Bottom Footer Bar */}
          <div className="sheet-footer-bar">
            <div className="footer-gold-curve"></div>
            <div className="footer-navy-main">
              <div className="footer-website">
                <Globe size={14} className="footer-globe-icon" />
                <span>{COMPANY_DETAILS.website}</span>
              </div>
              <div className="footer-contact-mini">
                <span>{COMPANY_DETAILS.salesEmail}</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= PAGE 2 ================= */}
      {(activePageTab === "both" || activePageTab === "page2") && (
        <section className="a4-sheet order-sheet-page2" id="order-form-page-2">
          {/* Page 2 Header */}
          <div className="page2-header-title">
            <h2>TERMS &amp; CONDITIONS</h2>
            <div className="page2-divider-bar"></div>
          </div>

          {/* 16 Contract Terms Clauses in 2 compact columns */}
          <div className="terms-clauses-wrapper">
            <div className="terms-grid-paragraphs">
              {TERMS_AND_CONDITIONS.map((clause, idx) => (
                <p key={idx} className="clause-paragraph">
                  {clause}
                </p>
              ))}
            </div>
          </div>

          {/* Special Instructions Title */}
          <div className="special-instructions-header">
            <h3>Special Instructions for Our Services</h3>
            <div className="special-divider-line"></div>
          </div>

          {/* Special Instructions 2-Column Grid */}
          <div className="special-instructions-grid-2col">
            {/* 1. WHATSAPP CALL AUTOMATION */}
            <div className="special-instruction-card whatsapp-card-accent">
              <div className="si-card-title-row">
                <span className="si-card-title">1. AUTO WHATSAPP AFTER CALL</span>
                <span className="si-badge-tag">MAIN FEATURE</span>
              </div>
              <div className="si-chips-compact">
                <span className="sub-lbl">Triggers:</span>
                {["Incoming Calls", "Outgoing Calls", "Missed Calls"].map((trig) => (
                  <span
                    key={trig}
                    className={`mini-check-chip ${
                      data.whatsAppTriggers.includes(trig) ? "checked" : ""
                    }`}
                  >
                    {data.whatsAppTriggers.includes(trig) ? "✓" : "○"} {trig}
                  </span>
                ))}
              </div>
              <div className="si-chips-compact mt-1">
                <span className="sub-lbl">Media:</span>
                {["Text", "Images", "PDF Brochure", "Videos", "Links"].map((m) => {
                  const has = data.whatsAppMediaTypes.some((t) =>
                    t.toLowerCase().includes(m.toLowerCase())
                  );
                  return (
                    <span
                      key={m}
                      className={`mini-check-chip ${has ? "checked" : ""}`}
                    >
                      {has ? "✓" : "○"} {m}
                    </span>
                  );
                })}
              </div>
              <div className="si-meta-subrow mt-1">
                <div className="si-sub-item">
                  <span className="lbl">SIM Rules:</span>
                  <span className="val">{data.whatsAppSimRules || "Both SIMs"}</span>
                </div>
                <div className="si-sub-item">
                  <span className="lbl">Repeat Gap:</span>
                  <span className="val">{data.whatsAppRepeatGap || "24 Hours"}</span>
                </div>
              </div>
              {data.whatsAppBlacklist && (
                <div className="si-sub-item full mt-1">
                  <span className="lbl">Blacklist / Exclude:</span>
                  <span className="val">{data.whatsAppBlacklist}</span>
                </div>
              )}
            </div>

            {/* 2. WHATSAPP CHATBOT AUTOMATION */}
            <div className="special-instruction-card whatsapp-card-accent">
              <div className="si-card-title-row">
                <span className="si-card-title">2. WHATSAPP CHATBOT AUTOMATION</span>
                <span className="si-badge-tag">24×7 BOT</span>
              </div>
              <div className="si-chips-grid">
                {[
                  "24x7 Automated Replies",
                  "Button-based Automation",
                  "Smart Lead Qualification",
                  "Instant Product Suggestions",
                  "Multi-Language Support",
                  "CRM & Payment Integration",
                ].map((opt) => {
                  const has = data.chatbotOptions.some((o) =>
                    o.toLowerCase().includes(opt.slice(0, 10).toLowerCase())
                  );
                  return (
                    <span
                      key={opt}
                      className={`mini-check-chip ${has ? "checked" : ""}`}
                    >
                      {has ? "✓" : "○"} {opt}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* 3. SMART CONNECT QR (AI REVIEW KIT) */}
            <div className="special-instruction-card qr-card-accent">
              <div className="si-card-title-row">
                <span className="si-card-title">3. SMART CONNECT QR (AI REVIEW KIT)</span>
                <span className="si-badge-tag qr-tag">REPUTATION</span>
              </div>
              <div className="si-chips-grid">
                {[
                  "Printed QR Standee",
                  "Free Tap NFC Card",
                  "AI SEO Suggestions",
                  "Keyword Dashboard",
                  "AI Auto-Replies",
                ].map((opt) => {
                  const has = data.smartReviewKitOptions.some((o) =>
                    o.toLowerCase().includes(opt.slice(0, 8).toLowerCase())
                  );
                  return (
                    <span
                      key={opt}
                      className={`mini-check-chip ${has ? "checked" : ""}`}
                    >
                      {has ? "✓" : "○"} {opt}
                    </span>
                  );
                })}
              </div>
              <div className="si-meta-subrow mt-1">
                <div className="si-sub-item">
                  <span className="lbl">Auto SMS:</span>
                  <span className="val">{data.smsDailyLimit || "100 SMS / Day"}</span>
                </div>
                <div className="si-sub-item">
                  <span className="lbl">Digital Profile:</span>
                  <span className="val">{data.digitalProfileDays || "365 Days Posts"}</span>
                </div>
              </div>
            </div>

            {/* 4. WEBSITE & SOFTWARE DESIGNING */}
            <div className="special-instruction-card">
              <div className="si-card-title">4. WEBSITE &amp; SOFTWARE DESIGNING</div>
              <div className="si-checkboxes-row">
                <div className="si-check-item">
                  <span className="custom-checkbox">
                    {data.webDesignOptions.includes("New Website Design") ||
                    data.webDesignOptions.includes("New Website / Web App Design") ? (
                      <span className="check-box-checked">✓</span>
                    ) : (
                      <span className="check-box-empty"></span>
                    )}
                  </span>
                  <span>New Website Design</span>
                </div>
                <div className="si-check-item">
                  <span className="custom-checkbox">
                    {data.webDesignOptions.includes(
                      "Updation and Maintenance of live Website"
                    ) ? (
                      <span className="check-box-checked">✓</span>
                    ) : (
                      <span className="check-box-empty"></span>
                    )}
                  </span>
                  <span>Live Updation &amp; Support</span>
                </div>
              </div>
              {data.webTechStack && (
                <div className="si-text-field mt-1">
                  <span className="lbl">Tech Stack:</span>
                  <span className="val">{data.webTechStack}</span>
                </div>
              )}
            </div>

            {/* 5. SEARCH ENGINE OPTIMIZATION (SEO / AEO) */}
            <div className="special-instruction-card">
              <div className="si-card-title">5. SEO / AEO GEOGRAPHY</div>
              <div className="si-chips-compact">
                {["SEO Pan India", "International SEO", "Citywise SEO", "Off Page Activity"].map(
                  (opt) => (
                    <span
                      key={opt}
                      className={`mini-check-chip ${
                        data.seoOptions.includes(opt) ? "checked" : ""
                      }`}
                    >
                      {data.seoOptions.includes(opt) ? "✓" : "○"} {opt}
                    </span>
                  )
                )}
              </div>
              {(data.seoCountries || data.seoCities) && (
                <div className="si-meta-subrow mt-1">
                  {data.seoCountries && (
                    <div className="si-sub-item">
                      <span className="lbl">Countries:</span>
                      <span className="val">{data.seoCountries}</span>
                    </div>
                  )}
                  {data.seoCities && (
                    <div className="si-sub-item">
                      <span className="lbl">Cities:</span>
                      <span className="val">{data.seoCities}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* 6. GOOGLE ADWORDS & PAID CAMPAIGNS */}
            <div className="special-instruction-card">
              <div className="si-card-title">6. GOOGLE ADWORDS &amp; META ADS</div>
              <div className="si-meta-subrow">
                <div className="si-sub-item">
                  <span className="lbl">Keywords:</span>
                  <span className="val">{data.adKeywordsCount || "N/A"}</span>
                </div>
                <div className="si-sub-item">
                  <span className="lbl">Location:</span>
                  <span className="val">{data.adLocation || "Target Market"}</span>
                </div>
                {data.adMonthlyBudget && (
                  <div className="si-sub-item">
                    <span className="lbl">Budget:</span>
                    <span className="val">{data.adMonthlyBudget}</span>
                  </div>
                )}
              </div>
              {data.adKeywordsText && (
                <div className="si-keywords-block mt-1">
                  <span className="lbl">Strategy:</span>
                  <div className="si-keywords-box-compact">
                    {data.adKeywordsText}
                  </div>
                </div>
              )}
            </div>

            {/* 7. YOUTUBE, SOCIAL MEDIA & EMAIL WORKSPACES */}
            <div className="special-instruction-card">
              <div className="si-card-title">7. YOUTUBE &amp; EMAIL WORKSPACE</div>
              <div className="si-chips-compact">
                {["Organic SEO", "Boosting Views", "Pop ID", "G Suite / Workspace"].map(
                  (opt) => {
                    const has =
                      data.youtubeOptions.includes(opt) ||
                      data.emailOptions.some((e) =>
                        e.toLowerCase().includes(opt.slice(0, 4).toLowerCase())
                      );
                    return (
                      <span
                        key={opt}
                        className={`mini-check-chip ${has ? "checked" : ""}`}
                      >
                        {has ? "✓" : "○"} {opt}
                      </span>
                    );
                  }
                )}
              </div>
              {data.emailIdsCount && (
                <div className="si-sub-item mt-1">
                  <span className="lbl">Mail Accounts:</span>
                  <span className="val">{data.emailIdsCount}</span>
                </div>
              )}
            </div>

            {/* 8. Special Guidelines */}
            <div className="special-instruction-card guidelines-card">
              <div className="si-card-title">8. SPECIAL GUIDELINES</div>
              <div className="si-guidelines-box-compact">
                {data.page2SpecialGuidelines || "No specific customization notes."}
              </div>
            </div>
          </div>

          {/* 9. Special Commitment - Full Width Band */}
          <div className="special-commitment-band">
            <div className="commitment-title-strip">
              SPECIAL COMMITMENT &amp; SLA GUARANTEE :
            </div>
            <div className="commitment-text-box">
              {data.specialCommitment ||
                "100% On-Time Delivery Guarantee, 3 Months Complimentary Maintenance & Bug-Fix Support post deployment, Dedicated Technical Account Manager."}
            </div>
          </div>

          {/* Page 2 Signatures */}
          <div className="sheet-signatures-row page2-signatures">
            <div className="signature-col client-signature-col">
              <div className="sig-line-top"></div>
              <div className="sig-name">
                {data.clientSignatoryName || "______________________________"}
              </div>
              <div className="sig-designation">
                {data.clientDesignation || "Name & Designation"}
              </div>
            </div>

            <div className="signature-col client-stamp-col">
              <div className="signature-preview-slot">
                {data.clientSignatureDataUrl ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={data.clientSignatureDataUrl}
                    alt="Client Signature"
                    className="client-signature-drawn"
                  />
                ) : (
                  <div className="sig-placeholder-space"></div>
                )}
              </div>
              <div className="sig-line-top"></div>
              <div className="sig-designation party-stamp-label">
                Signature &amp; Stamp of the Party
              </div>
            </div>
          </div>

          {/* Page 2 Footer */}
          <div className="sheet-footer-bar">
            <div className="footer-gold-curve"></div>
            <div className="footer-navy-main">
              <div className="footer-website">
                <Globe size={14} className="footer-globe-icon" />
                <span>{COMPANY_DETAILS.website}</span>
              </div>
              <div className="footer-contact-mini">
                <span>{COMPANY_DETAILS.salesEmail}</span>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
