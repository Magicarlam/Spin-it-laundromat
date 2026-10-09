
import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteTitle = "Spin-it Laundromat | Fresh Clothes. Fresh Start.";
const siteDescription =
  "Discover professional laundry and garment care services from Spin-it Laundromat. Get in touch to enquire about available services.";

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s | Spin-it Laundromat",
  },
  description: siteDescription,
  applicationName: "Spin-it Laundromat",
  keywords: [
    "Spin-it Laundromat",
    "laundry services",
    "professional laundry care",
    "garment care",
    "clothes cleaning",
    "dry cleaning",
    "shoe cleaning",
    "duvet cleaning",
    "carpet cleaning",
  ],
  openGraph: {
    type: "website",
    locale: "en_KE",
    siteName: "Spin-it Laundromat",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0b0d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-KE">
      <body>{children}</body>
    </html>
  );
}