import type { Metadata } from "next"

export const SITE_URL = "https://www.tncreative.co.za"
export const SITE_NAME = "TN Creative"
export const PHONE = "+27725742696"
export const EMAIL = "ertugrultan@tncreative.co.za"

export const HOME_TITLE =
  "TN Creative | Social Media Management Johannesburg — Digital Agency"

export const HOME_DESCRIPTION =
  "TN Creative is a Johannesburg-based digital agency specialising in social media management, content creation, and online growth for South African businesses."

export const HOME_KEYWORDS = [
  "social media management Johannesburg",
  "digital agency South Africa",
  "social media agency Sandton",
  "content creation Johannesburg",
]

const defaultOpenGraph = {
  siteName: SITE_NAME,
  locale: "en_ZA" as const,
  type: "website" as const,
}

export function buildPageMetadata(input: {
  title: string
  description: string
  keywords: string[]
  path: string
  ogTitle?: string
}): Metadata {
  const canonical = `${SITE_URL}${input.path === "/" ? "" : input.path}`
  const ogTitle = input.ogTitle ?? input.title

  return {
    title: input.title,
    description: input.description,
    keywords: input.keywords,
    alternates: { canonical },
    openGraph: {
      ...defaultOpenGraph,
      title: ogTitle,
      description: input.description,
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: input.description,
    },
  }
}

export const homeMetadata = buildPageMetadata({
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  keywords: HOME_KEYWORDS,
  path: "/",
  ogTitle: "TN Creative | Social Media Management Johannesburg",
})

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  description:
    "Johannesburg-based digital agency specialising in social media management and content creation for South African businesses.",
  url: SITE_URL,
  telephone: PHONE,
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Johannesburg",
    addressRegion: "Gauteng",
    addressCountry: "ZA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -26.2041,
    longitude: 28.0473,
  },
  areaServed: {
    "@type": "City",
    name: "Johannesburg",
  },
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: -26.2041,
      longitude: 28.0473,
    },
    geoRadius: "50000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Social Media Management",
          description:
            "Professional social media management for Johannesburg businesses",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Content Creation",
          description:
            "Creative content production for social media and digital channels",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Marketing",
          description:
            "Full-service digital marketing for South African businesses",
        },
      },
    ],
  },
}
