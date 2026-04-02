import type { Metadata } from "next";
import "./globals.css";
import { metadataSummary } from "@/components/data";

export const metadata: Metadata = {
  title: "Cynexsys | Engineering the Intelligence Layer of Civilization",
  description: metadataSummary,
  metadataBase: new URL("https://www.cynexsys.com"),
  openGraph: {
    title: "Cynexsys",
    description: metadataSummary,
    url: "https://www.cynexsys.com",
    siteName: "Cynexsys",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cynexsys",
    description: metadataSummary,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
