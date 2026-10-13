"use client";

import React, { useState } from "react";
import {
  Building2,
  User,
  MapPin,
  Phone,
  Mail,
  Globe,
  DollarSign,
  Calendar,
  CalendarRange,
  CalendarCheck,
  FileText,
  CreditCard,
  PenTool,
  CheckCircle2,
  Sparkles,
  Layers,
  Search,
  Code2,
  Cpu,
} from "lucide-react";
import { OrderFormData } from "../types";
import {
  SERVICE_CATEGORIES,
  PAYMENT_MODE_OPTIONS,
} from "../data";
import SignaturePad from "./SignaturePad";

interface OrderFormEditorProps {
  data: OrderFormData;
  onChange: (updated: OrderFormData) => void;
}

export default function OrderFormEditor({
  data,
  onChange,
}: OrderFormEditorProps) {
  const [activeTab, setActiveTab] = useState<"client" | "services" | "payment" | "page2" | "signature">("client");

  const updateField = <K extends keyof OrderFormData>(
    field: K,
    value: OrderFormData[K]
  ) => {
    onChange({
      ...data,
      [field]: value,
    });
  };

  const toggleService = (serviceId: string) => {
    const exists = data.selectedServices.includes(serviceId);
    const updated = exists
      ? data.selectedServices.filter((id) => id !== serviceId)
      : [...data.selectedServices, serviceId];
    updateField("selectedServices", updated);
  };

  const toggleCategoryAll = (categoryIndex: number) => {
    const category = SERVICE_CATEGORIES[categoryIndex];
    const categoryIds = category.services.map((s) => s.id);
    const allSelected = categoryIds.every((id) =>
      data.selectedServices.includes(id)
    );

    let updated: string[];
    if (allSelected) {
      updated = data.selectedServices.filter((id) => !categoryIds.includes(id));
    } else {
      const merged = new Set([...data.selectedServices, ...categoryIds]);
      updated = Array.from(merged);
    }
    updateField("selectedServices", updated);
  };

  const togglePaymentMode = (mode: string) => {
    const exists = data.paymentModes.includes(mode);
    const updated = exists
      ? data.paymentModes.filter((m) => m !== mode)
      : [...data.paymentModes, mode];
    updateField("paymentModes", updated);
  };

  const toggleWebOption = (option: string) => {
    const exists = data.webDesignOptions.includes(option);
    const updated = exists
      ? data.webDesignOptions.filter((o) => o !== option)
      : [...data.webDesignOptions, option];
    updateField("webDesignOptions", updated);
  };

  const toggleSeoOption = (option: string) => {
    const exists = data.seoOptions.includes(option);
    const updated = exists
      ? data.seoOptions.filter((o) => o !== option)
      : [...data.seoOptions, option];
    updateField("seoOptions", updated);
  };

  const toggleYoutubeOption = (option: string) => {
    const exists = data.youtubeOptions.includes(option);
    const updated = exists
      ? data.youtubeOptions.filter((o) => o !== option)
      : [...data.youtubeOptions, option];
    updateField("youtubeOptions", updated);
  };

  const toggleEmailOption = (option: string) => {
    const exists = data.emailOptions.includes(option);
    const updated = exists
      ? data.emailOptions.filter((o) => o !== option)
      : [...data.emailOptions, option];
    updateField("emailOptions", updated);
  };

  const calculateBalance = () => {
    const total = parseFloat(data.totalPackage.replace(/,/g, "")) || 0;
    const advance = parseFloat(data.advancePaid.replace(/,/g, "")) || 0;
    if (total > 0) {
      const balance = Math.max(0, total - advance);
      updateField("balanceAmount", balance.toLocaleString("en-IN"));
    }
  };

  const applyValidityDuration = (months: number) => {
    const baseDateStr = data.packageStartDate || data.date || new Date().toISOString().split("T")[0];
    const d = new Date(baseDateStr);
    d.setMonth(d.getMonth() + months);
    d.setDate(d.getDate() - 1);
    const result = d.toISOString().split("T")[0];
    updateField("validityDate", result);
  };

  const categoryIcons = [Globe, Search, Code2, Cpu];

  return (
    <div className="editor-container">
      {/* Navigation Sub-Tabs */}
      <div className="editor-tabs">
        <button
          type="button"
          onClick={() => setActiveTab("client")}
          className={`tab-btn ${activeTab === "client" ? "active" : ""}`}
        >
          <Building2 size={16} /> Client &amp; Meta
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("services")}
          className={`tab-btn ${activeTab === "services" ? "active" : ""}`}
        >
          <Layers size={16} /> Services ({data.selectedServices.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("payment")}
          className={`tab-btn ${activeTab === "payment" ? "active" : ""}`}
        >
          <CreditCard size={16} /> Payment &amp; Terms
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("page2")}
          className={`tab-btn ${activeTab === "page2" ? "active" : ""}`}
        >
          <FileText size={16} /> Page 2 Instructions
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("signature")}
          className={`tab-btn ${activeTab === "signature" ? "active" : ""}`}
        >
          <PenTool size={16} /> Digital Signature
        </button>
      </div>

      <div className="editor-body">
        {/* TAB 1: CLIENT & ORDER META */}
        {activeTab === "client" && (
          <div className="editor-panel">
            <div className="panel-title-row">
              <h3>Client Information &amp; Order Details</h3>
              <p className="panel-desc">
                Fill the customer contact data and order reference number
              </p>
            </div>

            <div className="form-group">
              <label>
                <FileText size={14} /> Form Reference No :
              </label>
              <input
                type="text"
                value={data.formNo}
                onChange={(e) => updateField("formNo", e.target.value)}
                placeholder="e.g. YT-2026-1048"
                className="form-input"
              />
            </div>

            <div className="input-grid-2">
              <div className="form-group">
                <label
                  htmlFor="package-start-date-input"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    try {
                      const el = document.getElementById("package-start-date-input") as HTMLInputElement | null;
                      el?.showPicker?.();
                    } catch {
                      // ignore
                    }
                  }}
                >
                  <CalendarRange size={14} /> Start Date :
                </label>
                <input
                  id="package-start-date-input"
                  type="date"
                  value={data.packageStartDate}
                  onChange={(e) => {
                    updateField("packageStartDate", e.target.value);
                    updateField("date", e.target.value);
                  }}
                  onClick={(e) => {
                    try {
                      e.currentTarget.showPicker?.();
                    } catch {
                      // ignore
                    }
                  }}
                  className="form-input date-input-field"
                />
              </div>

              <div className="form-group">
                <div className="label-with-quick-actions">
                  <label
                    htmlFor="validity-date-input"
                    style={{ cursor: "pointer", marginBottom: 0 }}
                    onClick={() => {
                      try {
                        const el = document.getElementById("validity-date-input") as HTMLInputElement | null;
                        el?.showPicker?.();
                      } catch {
                        // ignore
                      }
                    }}
                  >
                    <CalendarCheck size={14} /> Valid Till :
                  </label>
                  <div className="quick-duration-pills">
                    <button
                      type="button"
                      onClick={() => applyValidityDuration(1)}
                      className="btn-quick-duration"
                      title="Set validity to 1 month"
                    >
                      +1M
                    </button>
                    <button
                      type="button"
                      onClick={() => applyValidityDuration(3)}
                      className="btn-quick-duration"
                      title="Set validity to 3 months"
                    >
                      +3M
                    </button>
                    <button
                      type="button"
                      onClick={() => applyValidityDuration(6)}
                      className="btn-quick-duration"
                      title="Set validity to 6 months"
                    >
                      +6M
                    </button>
                    <button
                      type="button"
                      onClick={() => applyValidityDuration(12)}
                      className="btn-quick-duration"
                      title="Set validity to 1 year"
                    >
                      +1Y
                    </button>
                  </div>
                </div>
                <input
                  id="validity-date-input"
                  type="date"
                  value={data.validityDate}
                  onChange={(e) => updateField("validityDate", e.target.value)}
                  onClick={(e) => {
                    try {
                      e.currentTarget.showPicker?.();
                    } catch {
                      // ignore
                    }
                  }}
                  className="form-input date-input-field"
                  style={{ marginTop: "4px" }}
                />
              </div>
            </div>

            <div className="form-group">
              <label>
                <Building2 size={14} /> Company Name :
              </label>
              <input
                type="text"
                value={data.companyName}
                onChange={(e) => updateField("companyName", e.target.value)}
                placeholder="e.g. Nexus Enterprise Solutions Pvt Ltd"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>
                <User size={14} /> Full Name of Signatory / Client :
              </label>
              <input
                type="text"
                value={data.fullName}
                onChange={(e) => updateField("fullName", e.target.value)}
                placeholder="e.g. Vikramaditya Sharma"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>
                <MapPin size={14} /> Office / Billing Address :
              </label>
              <textarea
                value={data.address}
                onChange={(e) => updateField("address", e.target.value)}
                placeholder="Complete postal address with city, state & pincode..."
                rows={2}
                className="form-textarea"
              />
            </div>

            <div className="input-grid-2">
              <div className="form-group">
                <label>
                  <Phone size={14} /> Phone / WhatsApp :
                </label>
                <input
                  type="text"
                  value={data.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder="+91 98765 43210"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>
                  <Mail size={14} /> Official Email Address :
                </label>
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="contact@clientdomain.com"
                  className="form-input"
                />
              </div>
            </div>

            <div className="input-grid-2">
              <div className="form-group">
                <label>
                  <Globe size={14} /> Domain Name :
                </label>
                <input
                  type="text"
                  value={data.domainName}
                  onChange={(e) => updateField("domainName", e.target.value)}
                  placeholder="www.clientdomain.com"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>Client GSTIN (Optional) :</label>
                <input
                  type="text"
                  value={data.gstNumber}
                  onChange={(e) => updateField("gstNumber", e.target.value)}
                  placeholder="e.g. 27ABCDE1234F1Z5"
                  className="form-input"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SELECT SERVICES */}
        {activeTab === "services" && (
          <div className="editor-panel">
            <div className="panel-title-row">
              <div className="flex-between">
                <div>
                  <h3>Select YUGORA TECH Services</h3>
                  <p className="panel-desc">
                    4 Core Divisions: Digital Presence, Digital Marketing, Software &amp; Enterprise, AI &amp; Advanced Tech
                  </p>
                </div>
                <div className="badge-count">
                  {data.selectedServices.length} Selected
                </div>
              </div>
            </div>

            <div className="services-selector-grid">
              {SERVICE_CATEGORIES.map((cat, idx) => {
                const IconComponent = categoryIcons[idx] || Sparkles;
                const categoryIds = cat.services.map((s) => s.id);
                const isAllSelected = categoryIds.every((id) =>
                  data.selectedServices.includes(id)
                );

                return (
                  <div key={cat.id} className="service-category-picker-card">
                    <div className="category-picker-header">
                      <div className="cat-title-group">
                        <span className="cat-pill">{cat.number}</span>
                        <div className="cat-icon-title">
                          <IconComponent size={16} />
                          <h4>{cat.title}</h4>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => toggleCategoryAll(idx)}
                        className="btn-select-all-cat"
                      >
                        {isAllSelected ? "Deselect All" : "Select All"}
                      </button>
                    </div>

                    <div className="services-chips-grid">
                      {cat.services.map((svc) => {
                        const checked = data.selectedServices.includes(svc.id);
                        return (
                          <button
                            key={svc.id}
                            type="button"
                            onClick={() => toggleService(svc.id)}
                            className={`service-chip ${checked ? "active" : ""}`}
                          >
                            <span className="chip-indicator">
                              {checked ? "✓" : "+"}
                            </span>
                            <span className="chip-label">{svc.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: PAYMENT & FINANCIALS */}
        {activeTab === "payment" && (
          <div className="editor-panel">
            <div className="panel-title-row">
              <h3>Pricing, Advance &amp; Mode of Payment</h3>
              <p className="panel-desc">
                Set package value, advance collected, pending balance and payment method
              </p>
            </div>

            <div className="input-grid-3">
              <div className="form-group">
                <label>
                  <DollarSign size={14} /> Total Package Amount (₹) :
                </label>
                <input
                  type="text"
                  value={data.totalPackage}
                  onChange={(e) => updateField("totalPackage", e.target.value)}
                  onBlur={calculateBalance}
                  placeholder="e.g. 1,50,000"
                  className="form-input highlight"
                />
              </div>

              <div className="form-group">
                <label>Advance Payment Paid (₹) :</label>
                <input
                  type="text"
                  value={data.advancePaid}
                  onChange={(e) => updateField("advancePaid", e.target.value)}
                  onBlur={calculateBalance}
                  placeholder="e.g. 75,000"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>Remaining Balance (₹) :</label>
                <div className="input-action-wrap">
                  <input
                    type="text"
                    value={data.balanceAmount}
                    onChange={(e) => updateField("balanceAmount", e.target.value)}
                    placeholder="e.g. 75,000"
                    className="form-input"
                  />
                  <button
                    type="button"
                    onClick={calculateBalance}
                    className="btn-calc-mini"
                    title="Calculate Balance"
                  >
                    Auto
                  </button>
                </div>
              </div>
            </div>

            <div className="form-group checkbox-toggle-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={data.gstIncluded}
                  onChange={(e) => updateField("gstIncluded", e.target.checked)}
                />
                <span>Include 18% GST Compliance Note</span>
              </label>
            </div>

            <div className="form-group mt-4">
              <label className="section-sub-label">
                <CreditCard size={14} /> Mode of Payment (Select all that apply) :
              </label>
              <div className="payment-mode-checkboxes">
                {PAYMENT_MODE_OPTIONS.map((mode) => {
                  const checked = data.paymentModes.includes(mode);
                  return (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => togglePaymentMode(mode)}
                      className={`payment-pill ${checked ? "active" : ""}`}
                    >
                      <span className="pill-check">{checked ? "✓" : "○"}</span>
                      <span>{mode}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="form-group mt-4">
              <label>Specific Guidelines (Page 1 Notes) :</label>
              <textarea
                value={data.specificGuidelines}
                onChange={(e) => updateField("specificGuidelines", e.target.value)}
                placeholder="Any special guidelines regarding website, software, or digital marketing scope..."
                rows={3}
                className="form-textarea"
              />
            </div>
          </div>
        )}

        {/* TAB 4: PAGE 2 SPECIAL INSTRUCTIONS */}
        {activeTab === "page2" && (
          <div className="editor-panel">
            <div className="panel-title-row">
              <h3>Page 2: Special Instructions for Our Services</h3>
              <p className="panel-desc">
                Granular configuration for Web Designing, SEO Geography, Ads Keywords, and Mail Services
              </p>
            </div>

            {/* 1. Website Designing */}
            <div className="instruction-box-edit">
              <h4>1. Website Designing &amp; Software</h4>
              <div className="instruction-checks-row">
                {[
                  "New Website Design",
                  "Updation and Maintenance of live Website",
                ].map((opt) => {
                  const checked = data.webDesignOptions.includes(opt);
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => toggleWebOption(opt)}
                      className={`service-chip ${checked ? "active" : ""}`}
                    >
                      <span>{checked ? "✓" : "+"}</span> {opt}
                    </button>
                  );
                })}
              </div>
              <div className="form-group mt-2">
                <label>Tech Stack &amp; Frameworks :</label>
                <input
                  type="text"
                  value={data.webTechStack}
                  onChange={(e) => updateField("webTechStack", e.target.value)}
                  placeholder="e.g. Next.js 15, React, Node.js, AWS Cloud"
                  className="form-input"
                />
              </div>
            </div>

            {/* 2. SEO */}
            <div className="instruction-box-edit">
              <h4>2. Search Engine Optimization (SEO / AEO)</h4>
              <div className="instruction-checks-row">
                {[
                  "SEO Pan India",
                  "International SEO",
                  "Citywise SEO",
                  "Off Page Activity",
                ].map((opt) => {
                  const checked = data.seoOptions.includes(opt);
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => toggleSeoOption(opt)}
                      className={`service-chip ${checked ? "active" : ""}`}
                    >
                      <span>{checked ? "✓" : "+"}</span> {opt}
                    </button>
                  );
                })}
              </div>
              <div className="input-grid-2 mt-2">
                <div className="form-group">
                  <label>Target Countries (if International) :</label>
                  <input
                    type="text"
                    value={data.seoCountries}
                    onChange={(e) => updateField("seoCountries", e.target.value)}
                    placeholder="e.g. USA, UK, UAE"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label>Target Cities (if Citywise) :</label>
                  <input
                    type="text"
                    value={data.seoCities}
                    onChange={(e) => updateField("seoCities", e.target.value)}
                    placeholder="e.g. Mumbai, Pune, Delhi NCR"
                    className="form-input"
                  />
                </div>
              </div>
            </div>

            {/* 3. Google Adwords */}
            <div className="instruction-box-edit">
              <h4>3. Google Adwords &amp; Meta Ads</h4>
              <div className="input-grid-3">
                <div className="form-group">
                  <label>Number of Keywords :</label>
                  <input
                    type="text"
                    value={data.adKeywordsCount}
                    onChange={(e) => updateField("adKeywordsCount", e.target.value)}
                    placeholder="e.g. 25 Keywords"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label>Target Location :</label>
                  <input
                    type="text"
                    value={data.adLocation}
                    onChange={(e) => updateField("adLocation", e.target.value)}
                    placeholder="e.g. Maharashtra &amp; Gujarat"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label>Monthly Ad Spend :</label>
                  <input
                    type="text"
                    value={data.adMonthlyBudget}
                    onChange={(e) => updateField("adMonthlyBudget", e.target.value)}
                    placeholder="e.g. ₹ 40,000 / month"
                    className="form-input"
                  />
                </div>
              </div>
              <div className="form-group mt-2">
                <label>Keywords &amp; Ad Copy Brief :</label>
                <textarea
                  value={data.adKeywordsText}
                  onChange={(e) => updateField("adKeywordsText", e.target.value)}
                  placeholder="Primary keywords, negative keywords, or campaign goals..."
                  rows={2}
                  className="form-textarea"
                />
              </div>
            </div>

            {/* 4. YouTube & Video */}
            <div className="instruction-box-edit">
              <h4>4. YouTube &amp; Video Promotion</h4>
              <div className="instruction-checks-row">
                {["Organic SEO", "Boosting Views"].map((opt) => {
                  const checked = data.youtubeOptions.includes(opt);
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => toggleYoutubeOption(opt)}
                      className={`service-chip ${checked ? "active" : ""}`}
                    >
                      <span>{checked ? "✓" : "+"}</span> {opt}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 5. Email & Domain */}
            <div className="instruction-box-edit">
              <h4>5. Email POP ID&apos;s &amp; Cloud Workspaces</h4>
              <div className="instruction-checks-row">
                {["Pop ID", "G Suite / Google Workspace ID"].map((opt) => {
                  const checked = data.emailOptions.includes(opt);
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => toggleEmailOption(opt)}
                      className={`service-chip ${checked ? "active" : ""}`}
                    >
                      <span>{checked ? "✓" : "+"}</span> {opt}
                    </button>
                  );
                })}
              </div>
              <div className="form-group mt-2">
                <label>Number of Mail IDs :</label>
                <input
                  type="text"
                  value={data.emailIdsCount}
                  onChange={(e) => updateField("emailIdsCount", e.target.value)}
                  placeholder="e.g. 10 Enterprise Email Accounts"
                  className="form-input"
                />
              </div>
            </div>

            {/* 6. Page 2 Guidelines */}
            <div className="instruction-box-edit">
              <h4>6. Page 2 Special Guidelines</h4>
              <textarea
                value={data.page2SpecialGuidelines}
                onChange={(e) => updateField("page2SpecialGuidelines", e.target.value)}
                placeholder="Additional instructions for development milestones, DNS handover, deliverables..."
                rows={2}
                className="form-textarea"
              />
            </div>

            {/* 7. Special Commitment */}
            <div className="instruction-box-edit">
              <h4>7. Special Commitment (Page 2 Last Section)</h4>
              <textarea
                value={data.specialCommitment}
                onChange={(e) => updateField("specialCommitment", e.target.value)}
                placeholder="Enter special commitments (e.g. 100% On-Time Delivery Guarantee, 3 Months Free Support, Dedicated Account Manager, SLA)..."
                rows={6}
                className="form-textarea"
                style={{ minHeight: "140px" }}
              />
            </div>
          </div>
        )}

        {/* TAB 5: SIGNATURE & AUTHORIZATION */}
        {activeTab === "signature" && (
          <div className="editor-panel">
            <div className="panel-title-row">
              <h3>Client Signatures &amp; Designation</h3>
              <p className="panel-desc">
                Capture the digital signature or seal for contract validation
              </p>
            </div>

            <div className="input-grid-2">
              <div className="form-group">
                <label>Signatory Full Name :</label>
                <input
                  type="text"
                  value={data.clientSignatoryName}
                  onChange={(e) => updateField("clientSignatoryName", e.target.value)}
                  placeholder="e.g. Vikramaditya Sharma"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>Designation / Role :</label>
                <input
                  type="text"
                  value={data.clientDesignation}
                  onChange={(e) => updateField("clientDesignation", e.target.value)}
                  placeholder="e.g. Managing Director / Partner"
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group mt-3">
              <label>Client Signature Pad (Drawn directly in browser) :</label>
              <SignaturePad
                onSave={(dataUrl) => updateField("clientSignatureDataUrl", dataUrl)}
                currentSignature={data.clientSignatureDataUrl}
              />
            </div>

            <div className="signature-info-badge mt-4">
              <CheckCircle2 size={16} />
              <span>
                All captured signatures and designations will automatically print
                crisply on both Page 1 and Page 2 in their designated signature boxes.
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
