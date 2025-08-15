import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
