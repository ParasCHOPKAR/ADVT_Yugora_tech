"use client";

import React from "react";
import Image from "next/image";
import {
  Printer,
  Sparkles,
  RotateCcw,
  Download,
  Eye,
  SlidersHorizontal,
  Columns,
  FileCheck2,
} from "lucide-react";
import { COMPANY_DETAILS } from "../data";

interface NavbarProps {
  viewMode: "split" | "editor" | "preview";
  setViewMode: (mode: "split" | "editor" | "preview") => void;
  pageTab: "both" | "page1" | "page2";
  setPageTab: (tab: "both" | "page1" | "page2") => void;
  onPrint: () => void;
  onLoadSample: () => void;
  onReset: () => void;
  onExportJson: () => void;
}

export default function Navbar({
  viewMode,
  setViewMode,
  pageTab,
  setPageTab,
  onPrint,
  onLoadSample,
  onReset,
  onExportJson,
}: NavbarProps) {
  return (
    <header className="top-navbar no-print">
      <div className="navbar-left">
        <div className="nav-brand-group">
          <Image
            src="/yugora-logo.png"
            alt="YUGORA TECH Logo"
            width={40}
            height={40}
            className="nav-logo"
            priority
          />
          <div className="nav-brand-meta">
            <span className="brand-firm-name">{COMPANY_DETAILS.name}</span>
            <span className="brand-app-label">Order Form &amp; Service Agreement</span>
          </div>
        </div>
      </div>

      <div className="navbar-center">
        {/* View Mode Controls */}
        <div className="view-mode-pill-group">
          <button
            type="button"
            onClick={() => setViewMode("split")}
            className={`pill-btn ${viewMode === "split" ? "active" : ""}`}
            title="Split screen: Editor and Live Contract side-by-side"
          >
            <Columns size={15} />
            <span>Split View</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode("editor")}
            className={`pill-btn ${viewMode === "editor" ? "active" : ""}`}
            title="Form Editor only"
          >
            <SlidersHorizontal size={15} />
            <span>Editor</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode("preview")}
            className={`pill-btn ${viewMode === "preview" ? "active" : ""}`}
            title="Print-ready document preview"
          >
            <Eye size={15} />
            <span>Preview</span>
          </button>
        </div>

        {/* Page Tab Selector */}
        <div className="page-tab-pill-group">
          <button
            type="button"
            onClick={() => setPageTab("both")}
            className={`tab-pill-btn ${pageTab === "both" ? "active" : ""}`}
          >
            All Pages (1 &amp; 2)
          </button>
          <button
            type="button"
            onClick={() => setPageTab("page1")}
            className={`tab-pill-btn ${pageTab === "page1" ? "active" : ""}`}
          >
            Page 1: Order
          </button>
          <button
            type="button"
            onClick={() => setPageTab("page2")}
            className={`tab-pill-btn ${pageTab === "page2" ? "active" : ""}`}
          >
            Page 2: Terms
          </button>
        </div>
      </div>

      <div className="navbar-right">
        <button
          type="button"
          onClick={onLoadSample}
          className="btn-nav-action secondary"
          title="Pre-populate with sample enterprise data"
        >
          <Sparkles size={15} />
          <span>Demo Data</span>
        </button>

        <button
          type="button"
          onClick={onReset}
          className="btn-nav-action ghost"
          title="Reset to clean blank order form"
        >
          <RotateCcw size={15} />
          <span>Reset</span>
        </button>

        <button
          type="button"
          onClick={onExportJson}
          className="btn-nav-action ghost"
          title="Download order details as JSON"
        >
          <Download size={15} />
          <span>Export</span>
        </button>

        <button
          type="button"
          onClick={onPrint}
          className="btn-nav-action primary"
          title="Print or save as high resolution PDF"
        >
          <Printer size={16} />
          <span>Print / PDF</span>
        </button>
      </div>
    </header>
  );
}
