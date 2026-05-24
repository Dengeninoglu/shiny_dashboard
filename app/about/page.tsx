import { TNNavbar } from "@/components/tn-navbar"
import { TNAbout } from "@/components/tn-about"
import { TNFooter } from "@/components/tn-footer"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  title: "About TN Creative | Johannesburg Digital Marketing Agency",
  description:
    "TN Creative is a passionate Johannesburg digital agency helping South African businesses grow their online presence through strategic social media and creative content.",
  keywords: [
    "digital agency Johannesburg",
    "about TN Creative",
    "South African marketing agency",
  ],
  path: "/about",
})

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <TNNavbar />
      <div className="pt-24">
        <TNAbout />
      </div>
      <TNFooter />
    </main>
  )
}
