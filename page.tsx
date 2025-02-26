import Image from "next/image"
import Link from "next/link"
import { Upload, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Desktop_Blue%20-%20V1.3-%20FInal%20Version-OEO05sTG5vSrHF5DSZ926u2FYQwL8k.png"
                alt="DocuTech Logo"
                width={130}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary">
                Features
              </Link>
              <Link href="#why-choose-us" className="text-sm font-medium text-muted-foreground hover:text-primary">
                Why Choose Us
              </Link>
              <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-primary">
                Pricing
              </Link>
              <Link href="#faq" className="text-sm font-medium text-muted-foreground hover:text-primary">
                FAQ
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="/placeholder.svg"
                alt="Discord"
                width={24}
                height={24}
                className="opacity-75 hover:opacity-100"
              />
            </Link>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            AI-Powered Unified Platform;
            <br />
            <span className="text-blue-500">Create</span> Effortlessly
          </h1>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-500">
            Fast, Smart & Secure - Works with Google Drive, Dropbox, Salesforce & Your Favorite Business Tools
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-sm text-muted-foreground">GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-sm text-muted-foreground">NITA Approved</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-sm text-muted-foreground">eIDAS Certified</span>
            </div>
          </div>
          <div className="mx-auto mt-8 max-w-[500px]">
            <div className="flex gap-2">
              <Input placeholder="Drop your file here" />
              <Button className="gap-2">
                <Upload className="h-4 w-4" />
                Upload File
              </Button>
              <Button variant="secondary" className="gap-2">
                <ArrowRight className="h-4 w-4" />
                Generate with AI
              </Button>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="container py-12">
          <p className="text-center text-lg font-semibold">
            64.0k businesses and individuals have signed with DocuTech
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
            {["US San Diego", "IMEDMA", "Harvard University", "PharmPlus", "Dell", "IBM Research"].map((brand) => (
              <div key={brand} className="flex items-center justify-center">
                <Image src="/placeholder.svg" alt={brand} width={120} height={40} className="opacity-75" />
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="container py-20">
          <h2 className="text-center text-3xl font-bold">Why Choose DocuTech</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border bg-card p-6">
              <h3 className="font-semibold">Trusted by Thousands</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Join thousands of satisfied users who trust DocuTech for their document needs
              </p>
            </div>
            <div className="rounded-xl border bg-card p-6">
              <h3 className="font-semibold">SOC-2 Certified</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Enterprise-grade security with SOC-2 certification for peace of mind
              </p>
            </div>
            <div className="rounded-xl border bg-card p-6">
              <h3 className="font-semibold">GDPR & HIPAA Compliant</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Fully compliant with major data protection regulations
              </p>
            </div>
            <div className="rounded-xl border bg-card p-6">
              <h3 className="font-semibold">End-to-end encryption</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Your documents are protected with military-grade encryption
              </p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="container py-20">
          <h2 className="text-center text-3xl font-bold">Pick your plan. We make this part easy too.</h2>
          <Tabs defaultValue="monthly" className="mt-8">
            <TabsList className="mx-auto">
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="annually">Annually</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {/* Free Plan */}
            <div className="rounded-xl border p-6">
              <h3 className="text-xl font-bold">FREE</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-bold">$0</span>
                <span className="ml-1 text-muted-foreground">/month</span>
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  <span>5 documents a month</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  <span>Activity timeline</span>
                </li>
              </ul>
              <Button className="mt-6 w-full">Select Plan</Button>
            </div>

            {/* Premium Plan */}
            <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-6">
              <h3 className="text-xl font-bold">Premium</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-bold">$10</span>
                <span className="ml-1 text-muted-foreground">/month</span>
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  <span>Unlimited documents</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  <span>Unlimited signers</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  <span>Activity timeline</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  <span>Certificate of completion</span>
                </li>
              </ul>
              <Button className="mt-6 w-full">Select Plan</Button>
            </div>

            {/* Teams Plan */}
            <div className="rounded-xl border p-6">
              <h3 className="text-xl font-bold">Teams</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-bold">$24</span>
                <span className="ml-1 text-muted-foreground">/user/month</span>
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  <span>Everything from Premium</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  <span>Team management</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  <span>Transferable contacts</span>
                </li>
              </ul>
              <Button className="mt-6 w-full">Select Plan</Button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="container py-20">
          <h2 className="text-center text-3xl font-bold">FAQs</h2>
          <div className="mx-auto mt-8 max-w-[800px]">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Are DocuTech signatures legally binding?</AccordionTrigger>
                <AccordionContent>
                  Yes! DocuTech signatures are totally legal and legally binding, just like signing with a pen—except
                  digital and way cooler. In fact, as long as they follow the right security rules, courts accept them.
                  So no worries there. Plus, they&apos;re extra protected and tracked, so it&apos;s safer than using a
                  paper contract in your junk drawer!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How secure are DocuTech documents?</AccordionTrigger>
                <AccordionContent>
                  We use enterprise-grade encryption and security measures to protect your documents. All data is
                  encrypted both in transit and at rest.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I integrate DocuTech with my existing tools?</AccordionTrigger>
                <AccordionContent>
                  Yes, DocuTech integrates seamlessly with popular business tools including Google Drive, Dropbox, and
                  Salesforce.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="container py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center space-x-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Desktop_Blue%20-%20V1.3-%20FInal%20Version-OEO05sTG5vSrHF5DSZ926u2FYQwL8k.png"
                alt="DocuTech Logo"
                width={130}
                height={32}
                className="h-8 w-auto"
              />
            </div>
            <nav className="flex gap-6">
              <Link href="#features" className="text-sm text-muted-foreground hover:text-primary">
                Features
              </Link>
              <Link href="#why-choose-us" className="text-sm text-muted-foreground hover:text-primary">
                Why Choose Us
              </Link>
              <Link href="#pricing" className="text-sm text-muted-foreground hover:text-primary">
                Pricing
              </Link>
              <Link href="#faq" className="text-sm text-muted-foreground hover:text-primary">
                FAQ
              </Link>
              <Link href="/legal-terms" className="text-sm text-muted-foreground hover:text-primary">
                Legal terms
              </Link>
              <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">
                Privacy policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

