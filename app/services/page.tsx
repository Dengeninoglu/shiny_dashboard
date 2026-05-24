import { TNNavbar } from "@/components/tn-navbar"
import { TNServices } from "@/components/tn-services"
import { TNFooter } from "@/components/tn-footer"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  title: "Social Media Management Services Johannesburg | TN Creative",
  description:
    "Professional social media management, content creation, and digital marketing services for businesses in Johannesburg and across South Africa. Get a free consultation.",
  keywords: [
    "social media management services Johannesburg",
    "digital marketing agency South Africa",
    "social media agency Sandton",
  ],
  path: "/services",
})

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <TNNavbar />
      <div className="pt-24">
        <TNServices />
      </div>
      <TNFooter />
    </main>
  )
}
