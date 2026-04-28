import type { Metadata } from "next";
import { Aboreto, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-aboreto",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Henderson Law Firm | Family Law Counsel",
  description:
    "Family law counsel for divorce, custody, support, property division, and estate planning matters in North Carolina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${aboreto.variable} ${cormorantGaramond.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
