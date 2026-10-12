import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "YUGORA TECH | Official Order Form & Service Agreement",
  description:
    "Digital order form and contract agreement for YUGORA TECH services across Digital Presence, Digital Marketing, Software & Enterprise, and AI & Advanced Tech.",
  icons: {
    icon: [
      { url: "/LOGO_FINAL.png", type: "image/png" },
      { url: "/LOGO_FINAL.png", sizes: "32x32", type: "image/png" },
      { url: "/LOGO_FINAL.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/LOGO_FINAL.png",
    apple: [
      { url: "/LOGO_FINAL.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
