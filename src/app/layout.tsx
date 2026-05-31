import { JSX, ReactNode } from "react";
import "./globals.css";
import { Toaster } from "sonner";
import { Inter } from 'next/font/google';
import 'react/jsx-runtime';
import { ThemeProvider } from "next-themes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Metadata } from "next";
import Script from "next/script";



const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smart Sentinel - CCTV, Door Locks, Sensors & Access Control Experts",
  description:
    "Smart Sentinel provides professional installation and maintenance of CCTV cameras, automatic door locks, security sensors, and access control systems. Trusted security solutions for homes and businesses. Get a free security assessment today.",
  keywords: [
    "CCTV installation",
    "dahua installation",
    "DAHUA installation",
    "cp-plus installation",
    "CP-PLUS installation",
    "prama installation",
    "PRAMA installation",
    "alba installation",
    "ALBA installation",
    "panasonic installation",
    "PANASONIC installation",
    "hikvision camera installation",
    "HIKVISION camera installation",
    "automatic door locks",
    "AUTOMATIC door locks",
    "sensor installation",
    'cctv camera installation',
    "access control systems",
    "security maintenance",
    "security solutions",
    "Smart Sentinel",
    "home security",
    "business security",
    "surveillance",
    "security services"
  ].join(", "),
  openGraph: {
    title: "Smart Sentinel - CCTV, Door Locks, Sensors & Access Control Experts",
    description:
      "Professional installation and maintenance of CCTV cameras, automatic door locks, security sensors, and access control systems for homes and businesses.",
    url: process.env.NEXT_PUBLIC_BASE_URL, 
    type: "website",
    images: [
      {
        url: "/logo/smart-sentinel.jpg", 
        width: 800,
        height: 600,
        alt: "Smart Sentinel Logo",
      },
    ],
    locale: "en_US",
    siteName: "Smart Sentinel",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL,
    languages: {
       "en-US": "/en",
       "hi-IN": "/hi",
      "es-ES": "/es",
    }
  },
  
};

export default function RootLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body
        className={`font-inter ${inter.variable} antialiased dark:bg-black`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer  />
          <Toaster /> 
        </ThemeProvider>
         
      </body>
      <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
    </html>
  );
}
