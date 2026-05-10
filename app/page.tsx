import { TNNavbar } from "@/components/tn-navbar"
import { TNHero } from "@/components/tn-hero"

import { TNServices } from "@/components/tn-services"
import { TNWhyUs } from "@/components/tn-why-us"
import { TNPortfolio } from "@/components/tn-portfolio"
import { TNProcess } from "@/components/tn-process"
import { TNTestimonials } from "@/components/tn-testimonials"
import { TNAbout } from "@/components/tn-about"
import { TNCTA } from "@/components/tn-cta"
import { TNFooter } from "@/components/tn-footer"
import { SmokeBackground } from "@/components/smoke-background"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <SmokeBackground />
      <div className="relative z-10">
        <TNNavbar />
        <TNHero />
        <TNServices />
        <TNWhyUs />
        <TNPortfolio />
        <TNProcess />
        <TNTestimonials />
        <TNAbout />
        <TNCTA />
        <TNFooter />
      </div>
    </main>
  )
}
