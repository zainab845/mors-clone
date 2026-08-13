import type { Metadata } from "next";
import { Inter_Tight, Instrument_Serif } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({ 
  subsets: ["latin"], 
  variable: "--font-inter-tight" 
});

const instrumentSerif = Instrument_Serif({ 
  weight: "400",
  style: ["italic"],
  subsets: ["latin"], 
  variable: "--font-instrument" 
});

export const metadata: Metadata = {
  title: "Mors - Creative Studio Clone",
  description: "Making timeless identities, packaging, and experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white scroll-smooth">
      <body className={`${interTight.variable} ${instrumentSerif.variable} font-sans antialiased text-gray-900 bg-white`}>
        {children}
      </body>
    </html>
  );
}