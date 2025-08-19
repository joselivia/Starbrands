import type { Metadata } from "next";
import "./globals.css";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import AosInit from "@/components/AosInit";
import FooterPage from "@/components/Footer";
import Navbar from "@/components/Navbar";
export const metadata: Metadata = {
  title: "STARBRANDS EAST AFRICA",
  description: "Advertising more about the brands",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
            <AosInit />
        {children}
        <FooterPage />
      </body>
    </html>
  );
}
