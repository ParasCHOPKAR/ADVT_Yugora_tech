import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export interface ExportPdfOptions {
  filename?: string;
  onProgress?: (current: number, total: number) => void;
}

/**
 * Captures document sheets from the specified container element and directly downloads an A4 PDF.
 */
export async function exportDocumentToPdf(
  containerId: string = "pdf-export-container",
  options: ExportPdfOptions = {}
): Promise<void> {
  const container = document.getElementById(containerId);
  if (!container) {
    throw new Error("PDF export container element not found");
  }

  // Find all .a4-sheet elements
  const sheets = Array.from(
    container.querySelectorAll<HTMLElement>(".a4-sheet")
  );

  if (sheets.length === 0) {
    throw new Error("No document sheets found to export");
  }

  // Wait for all images inside the export container to load completely
  const images = Array.from(container.querySelectorAll<HTMLImageElement>("img"));
  if (images.length > 0) {
    await Promise.all(
      images.map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise<void>((resolve) => {
          img.onload = () => resolve();
          img.onerror = () => resolve();
          setTimeout(resolve, 1500); // 1.5s timeout safety fallback
        });
      })
    );
  }

  // Initialize jsPDF for A4 portrait
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
    compress: true,
  });

  for (let i = 0; i < sheets.length; i++) {
    const sheet = sheets[i];
    options.onProgress?.(i + 1, sheets.length);

    const canvas = await html2canvas(sheet, {
      scale: 2, // 2x gives retina ~300 DPI clarity
      useCORS: true,
      allowTaint: true,
      logging: false,
      backgroundColor: "#ffffff",
      windowWidth: sheet.offsetWidth || 794,
    });

    const imgData = canvas.toDataURL("image/jpeg", 0.96);

    if (i > 0) {
      pdf.addPage("a4", "portrait");
    }

    // A4 dimensions in mm: 210 x 297
    pdf.addImage(imgData, "JPEG", 0, 0, 210, 297, undefined, "FAST");
  }

  const filename = options.filename || "Yugora_Tech_Order_Form.pdf";
  pdf.save(filename);
}
