import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const geistUrbanist = Urbanist({
  variable: "--font-geist-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sonic",
  description: "Designed by Daeva",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistUrbanist.className} antialiased dark`}>
        {children}
      </body>
    </html>
  );
}
