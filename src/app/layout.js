import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "sonner";



const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Smart Sentinel - CCTV, Door Locks, Sensors & Access Control Experts",
  description:
    "Smart Sentinel provides professional installation and maintenance of CCTV cameras, automatic door locks, security sensors, and access control systems. Trusted security solutions for homes and businesses. Get a free security assessment today.",
  keywords: [
    "CCTV installation",
    "hikvision camera installation",
    "automatic door locks",
    "sensor installation",
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
    url: "https://www.smartsentinel.com", 
    type: "website",
    images: [
      {
        url: "/logo/smart-sentinel.jpg", 
        width: 800,
        height: 600,
        alt: "Smart Sentinel Logo",
      },
    ],
  },
};

export default function RootLayout({ children }) {
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
    </html>
  );
}
