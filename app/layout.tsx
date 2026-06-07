import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Resale Lab — Building the Future of Reselling",
  description:
    "The Resale Lab, LLC is a registered resale company combining crosslisting software, storage unit operations, and content creation to help modern resellers grow smarter.",
  keywords: [
    "reselling",
    "crosslisting software",
    "storage unit reselling",
    "resale business",
    "eBay reseller",
    "Mercari",
    "Poshmark",
  ],
  openGraph: {
    title: "The Resale Lab",
    description:
      "Building the future of reselling — software, operations, and content.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
