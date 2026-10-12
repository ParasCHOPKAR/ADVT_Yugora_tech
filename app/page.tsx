"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import OrderFormEditor from "./components/OrderFormEditor";
import PrintableDocument from "./components/PrintableDocument";
import { OrderFormData } from "./types";
import { INITIAL_FORM_DATA, SAMPLE_FORM_DATA } from "./data";
import { CheckCircle2, Info } from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState<OrderFormData>(SAMPLE_FORM_DATA);
  const [viewMode, setViewMode] = useState<"split" | "editor" | "preview">("split");
  const [pageTab, setPageTab] = useState<"both" | "page1" | "page2">("both");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleLoadSample = () => {
    setFormData(SAMPLE_FORM_DATA);
    showToast("Loaded sample enterprise order details!");
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to clear the form?")) {
      setFormData(INITIAL_FORM_DATA);
      showToast("Form cleared to fresh blank template.");
    }
  };

  const handleExportJson = () => {
    const jsonString = JSON.stringify(formData, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Yugora_Tech_Order_${formData.formNo || "Form"}.json`;
    link.click();
    URL.revokeObjectURL(url);
    showToast("Order exported as JSON file.");
  };

  return (
    <main className="app-container">
      {/* Top Navbar */}
      <Navbar
        viewMode={viewMode}
        setViewMode={setViewMode}
        pageTab={pageTab}
        setPageTab={setPageTab}
        onPrint={handlePrint}
        onLoadSample={handleLoadSample}
        onReset={handleReset}
        onExportJson={handleExportJson}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notification no-print">
          <CheckCircle2 size={16} />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Workspace Layout */}
      <div className={`workspace-layout view-${viewMode}`}>
        {/* Editor Column */}
        {(viewMode === "split" || viewMode === "editor") && (
          <aside className="editor-column no-print">
            <OrderFormEditor data={formData} onChange={setFormData} />
          </aside>
        )}

        {/* Live Document Preview Column */}
        {(viewMode === "split" || viewMode === "preview") && (
          <section className="preview-column">
            <div className="preview-viewport-header no-print">
              <div className="preview-indicator">
                <span className="live-dot"></span>
                <span>Live High-Resolution A4 Contract Preview</span>
              </div>
              <div className="print-tip">
                <Info size={14} />
                <span>Tip: Click &quot;Print / PDF&quot; in the header or press Ctrl+P to save as A4 PDF</span>
              </div>
            </div>

            <div className="preview-sheets-scrollarea">
              <PrintableDocument data={formData} activePageTab={pageTab} />
            </div>
          </section>
        )}
      </div>

      {/* Hidden printable target container for pure print media */}
      <div className="print-only-container">
        <PrintableDocument data={formData} activePageTab={pageTab} />
      </div>
    </main>
  );
}
