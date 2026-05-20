import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "TN Creative | Premium Creative Agency",
  description:
    "TN Creative helps brands grow through social media management, content creation, video production, branding, and website design. Elevate your brand with creative that performs.",
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
      <body className={`font-sans antialiased ${inter.variable}`}>
         <Script
  src="https://esnaf-local-seo.vercel.app/api/seo-pixel/e2215b31-d3c0-47e8-acbb-ff42fa1e8b3d"
  strategy="afterInteractive"
/>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
