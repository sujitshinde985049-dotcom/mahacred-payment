import type { Metadata } from "next";
import { Manrope, DM_Sans } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const display = Manrope({ variable: "--font-display", subsets: ["latin"] });
const body = DM_Sans({ variable: "--font-body", subsets: ["latin"] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mahacred-firstpaytech.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Mahacred Firstpaytech | Banking Payment Technology", template: "%s | Mahacred Firstpaytech" },
  description: "Modern payment, collection and merchant enablement technology for co-operative banks, financial institutions and businesses.",
  keywords: ["co-operative bank technology", "UPI AutoPay", "virtual accounts", "payment collections", "merchant acquiring"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_IN", siteName: "Mahacred Firstpaytech", title: "Empowering Co-operative Banks with Modern Digital Payment Technology", description: "Technology-driven payment, collection and merchant enablement solutions." },
  twitter: { card: "summary_large_image", title: "Mahacred Firstpaytech", description: "Powering Digital Payments. Simplifying Collections." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${body.variable}`}><Header /><main>{children}</main><Footer /></body></html>;
}
