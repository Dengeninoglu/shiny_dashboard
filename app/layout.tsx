import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { HOME_DESCRIPTION, HOME_TITLE, SITE_URL, localBusinessJsonLd } from "@/lib/seo"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: "%s | TN Creative",
  },
  description: HOME_DESCRIPTION,
  keywords: [
    "social media management Johannesburg",
    "digital agency South Africa",
    "social media agency Sandton",
    "content creation Johannesburg",
  ],
  openGraph: {
    title: "TN Creative | Social Media Management Johannesburg",
    description: HOME_DESCRIPTION,
    url: SITE_URL,
    siteName: "TN Creative",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TN Creative | Social Media Management Johannesburg",
    description: HOME_DESCRIPTION,
  },
  alternates: {
    canonical: SITE_URL,
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#0f0f14",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body className={`font-sans antialiased ${inter.variable}`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
