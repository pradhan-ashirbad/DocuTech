import Header from "@/components/header"
import Hero from "@/components/hero"
import SocialProof from "@/components/social-proof"
import Testimonials from "@/components/testimonials"
import Features from "@/components/features"
import Pricing from "@/components/pricing"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="bg-[#1E3A8A] py-1 text-center text-sm text-white">No Sign up required</div>
      <Header />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <Testimonials />
        <Features />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

