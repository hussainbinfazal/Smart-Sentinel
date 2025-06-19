import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header";
import Footer from "./components/Footer";



const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Smart Sentinel - Security & Surveillance Solutions",
  description: "Professional CCTV installation and maintenance services by Hikvision certified experts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`font-inter ${inter.variable} antialiased`}
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
        </ThemeProvider>
      </body>
    </html>
  );
}
