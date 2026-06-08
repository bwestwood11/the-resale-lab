import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter, Barlow_Condensed } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "900"],
  style: ["normal"],
})
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The Resale Lab — Storage Unit Flipping, Crosslisting Software & Reselling Content",
  description:
    "The Resale Lab, LLC is a registered resale business combining storage unit auction sourcing, crosslisting software for eBay, Mercari, Poshmark & Depop, and authentic reselling content on YouTube and TikTok.",
  keywords: [
    "reselling",
    "crosslisting software",
    "storage unit reselling",
    "storage unit auction",
    "eBay reseller",
    "Mercari crosslist",
    "Poshmark seller",
    "Depop listings",
    "Facebook Marketplace flipping",
    "resale business",
  ],
  openGraph: {
    title: "The Resale Lab — The Full Stack Resale Company",
    description:
      "Storage unit flipping, crosslisting software, and authentic reselling content. A registered LLC.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        geistSans.variable,
        geistMono.variable,
        inter.variable,
        barlowCondensed.variable,
        "font-sans"
      )}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
