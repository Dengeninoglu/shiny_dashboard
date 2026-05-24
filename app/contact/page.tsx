import { TNNavbar } from "@/components/tn-navbar"
import { TNCTA } from "@/components/tn-cta"
import { TNFooter } from "@/components/tn-footer"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  title: "Contact TN Creative | Social Media Agency Johannesburg",
  description:
    "Get in touch with TN Creative — Johannesburg's social media management and digital agency. Request a free consultation today.",
  keywords: [
    "contact digital agency Johannesburg",
    "social media agency contact",
  ],
  path: "/contact",
})

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <TNNavbar />
      <div className="pt-24">
        <TNCTA />
      </div>
      <TNFooter />
    </main>
  )
}
