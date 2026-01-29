import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import AOSInit from "@/components/AOSInit";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Websoft",
  description: "We offer modern solutions for growing your business. We are team of talented Designers, Developers, Engineers and Content Writers making web-sites, Web-apps as well as Mobile-apps and Desktop-apps for your product to go global",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth">
        <body
          className={`${inter.variable} ${geistMono.variable} antialiased`}
        >
          <AOSInit />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
