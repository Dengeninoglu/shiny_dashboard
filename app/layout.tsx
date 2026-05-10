import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"

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
  themeColor: "#0a1628",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body className={`font-sans antialiased ${inter.variable}`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
