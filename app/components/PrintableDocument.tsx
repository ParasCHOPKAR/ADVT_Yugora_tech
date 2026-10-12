"use client";

import React from "react";
import Image from "next/image";
import {
  Phone,
  Globe,
  CheckSquare,
  Square,
  ShieldCheck,
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
                  <span className="meta-label">Date :</span>
                  <span className="meta-value">
                    {data.date
                      ? data.date.split("-").reverse().join(" / ")
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

          {/* SELECT YOUR SERVICES */}
          <div className="sheet-section services-selection-section">
            <div className="section-heading">
              <h2>SELECT YOUR SERVICES</h2>
              <div className="heading-accent-line"></div>
            </div>

            {/* 4-Category Services Grid matching Image 4 */}
            <div className="services-four-columns">
              {SERVICE_CATEGORIES.map((cat) => (
                <div key={cat.id} className="service-category-col">
                  <div className="service-cat-header">
                    <span className="cat-num">{cat.number}</span>
                    <span className="cat-title">{cat.title}</span>
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

            {/* Optional Financial Summary Strip if filled */}
            {(data.advancePaid || data.balanceAmount) && (
              <div className="payment-financial-breakdown">
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
              Specific guidelines, if any ( for Website, Software, Marketing & AI ) :
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
            <h2>TERMS &amp; CONDITION</h2>
            <div className="page2-divider-bar"></div>
          </div>

          {/* 16 Contract Terms Clauses */}
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

          {/* Special Instructions Fields Grid */}
          <div className="special-instructions-grid">
            {/* 1. WEBSITE & SOFTWARE DESIGNING */}
            <div className="special-instruction-card">
              <div className="si-card-title">WEBSITE &amp; SOFTWARE DESIGNING</div>
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
                  <span>Updation and Maintenance of live Website</span>
                </div>
              </div>
              {data.webTechStack && (
                <div className="si-text-field">
                  <span className="lbl">Tech Stack:</span>
                  <span className="val">{data.webTechStack}</span>
                </div>
              )}
            </div>

            {/* 2. SEARCH ENGINE OPTIMIZATION */}
            <div className="special-instruction-card">
              <div className="si-card-title">SEARCH ENGINE OPTIMIZATION (SEO / AEO)</div>
              <div className="si-checkboxes-row four-checks">
                <div className="si-check-item">
                  <span className="custom-checkbox">
                    {data.seoOptions.includes("SEO Pan India") ? (
                      <span className="check-box-checked">✓</span>
                    ) : (
                      <span className="check-box-empty"></span>
                    )}
                  </span>
                  <span>SEO Pan India</span>
                </div>
                <div className="si-check-item">
                  <span className="custom-checkbox">
                    {data.seoOptions.includes("International SEO") ||
                    data.seoOptions.includes("Internation SEO (Countries)") ? (
                      <span className="check-box-checked">✓</span>
                    ) : (
                      <span className="check-box-empty"></span>
                    )}
                  </span>
                  <span>
                    International SEO{" "}
                    {data.seoCountries ? `(${data.seoCountries})` : "(Countries)"}
                  </span>
                </div>
                <div className="si-check-item">
                  <span className="custom-checkbox">
                    {data.seoOptions.includes("Citywise SEO") ? (
                      <span className="check-box-checked">✓</span>
                    ) : (
                      <span className="check-box-empty"></span>
                    )}
                  </span>
                  <span>Citywise SEO</span>
                </div>
                <div className="si-check-item">
                  <span className="custom-checkbox">
                    {data.seoOptions.includes("Off Page Activity") ? (
                      <span className="check-box-checked">✓</span>
                    ) : (
                      <span className="check-box-empty"></span>
                    )}
                  </span>
                  <span>Off Page Activity</span>
                </div>
              </div>
            </div>

            {/* 3. GOOGLE ADWORDS & META ADS */}
            <div className="special-instruction-card">
              <div className="si-card-title">GOOGLE ADWORDS &amp; PAID CAMPAIGNS</div>
              <div className="si-fields-columns">
                <div className="si-text-row">
                  <span className="si-label">Number of Keywords :</span>
                  <span className="si-fill-box">{data.adKeywordsCount || "\u00A0"}</span>
                </div>
                <div className="si-text-row">
                  <span className="si-label">Location :</span>
                  <span className="si-fill-box">{data.adLocation || "\u00A0"}</span>
                </div>
              </div>
              <div className="si-keywords-block">
                <span className="si-label">Keywords / Strategy :</span>
                <div className="si-keywords-box">
                  {data.adKeywordsText || "\u00A0"}
                </div>
              </div>
            </div>

            {/* 4. YOUTUBE & SOCIAL MEDIA PROMOTION */}
            <div className="special-instruction-card">
              <div className="si-card-title">YOUTUBE &amp; SOCIAL MEDIA PROMOTION</div>
              <div className="si-checkboxes-row">
                <div className="si-check-item">
                  <span className="custom-checkbox">
                    {data.youtubeOptions.includes("Organic SEO") ? (
                      <span className="check-box-checked">✓</span>
                    ) : (
                      <span className="check-box-empty"></span>
                    )}
                  </span>
                  <span>Organic SEO</span>
                </div>
                <div className="si-check-item">
                  <span className="custom-checkbox">
                    {data.youtubeOptions.includes("Boosting Views") ? (
                      <span className="check-box-checked">✓</span>
                    ) : (
                      <span className="check-box-empty"></span>
                    )}
                  </span>
                  <span>Boosting Views</span>
                </div>
              </div>
            </div>

            {/* 5. EMAIL POP ID'S & SERVICES */}
            <div className="special-instruction-card">
              <div className="si-card-title">EMAIL POP ID&apos;S &amp; SERVICES</div>
              <div className="si-email-row">
                <div className="si-check-item">
                  <span className="custom-checkbox">
                    {data.emailOptions.includes("Pop ID") ? (
                      <span className="check-box-checked">✓</span>
                    ) : (
                      <span className="check-box-empty"></span>
                    )}
                  </span>
                  <span>Pop ID</span>
                </div>
                <div className="si-check-item">
                  <span className="custom-checkbox">
                    {data.emailOptions.includes("G Suite ID") ||
                    data.emailOptions.includes("G Suite / Google Workspace ID") ? (
                      <span className="check-box-checked">✓</span>
                    ) : (
                      <span className="check-box-empty"></span>
                    )}
                  </span>
                  <span>G Suite / Workspace ID</span>
                </div>
                <div className="si-text-row inline-count">
                  <span className="si-label">Number of ID :</span>
                  <span className="si-fill-box compact">{data.emailIdsCount || "\u00A0"}</span>
                </div>
              </div>
            </div>

            {/* 6. Special Guidelines Page 2 */}
            <div className="special-instruction-card guidelines-card">
              <div className="si-card-title">Special Guidelines :</div>
              <div className="si-guidelines-box">
                {data.page2SpecialGuidelines || "\u00A0"}
              </div>
            </div>

            {/* 7. Special Commitment (Last section of Page 2) */}
            <div className="special-instruction-card commitment-card">
              <div className="si-card-title commitment-title">
                Special Commitment :
              </div>
              <div className="si-commitment-box">
                {data.specialCommitment || "\u00A0"}
              </div>
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
