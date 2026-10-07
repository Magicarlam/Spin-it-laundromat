import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spin-it Laundromat | Fresh Clothes. Fresh Start.",
  description:
    "Professional laundry and garment care services from Spin-it Laundromat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}