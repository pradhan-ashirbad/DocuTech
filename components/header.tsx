import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center">
        {/* Left - Logo */}
        <div className="flex-1">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="image1.png"
              alt="DocuTech Logo"
              width={130}
              height={32}
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Middle - Navigation */}
        <nav className="hidden md:flex gap-6 flex-1 justify-center">
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

        {/* Right - Discord & Button */}
        <div className="flex items-center gap-4 flex-1 justify-end">
          <Link
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <svg width="23" height="18" viewBox="0 0 23 18" fill="currentColor">
              <path d="M19.475 2.127A19.17 19.17 0 0014.965.833a.072.072 0 00-.076.036c-.205.367-.432.844-.591 1.219a17.69 17.69 0 00-5.298 0 12.404 12.404 0 00-.6-1.219.075.075 0 00-.076-.036 19.105 19.105 0 00-4.51 1.294.068.068 0 00-.032.027C1.586 6.633.798 11.008 1.171 15.323a.08.08 0 00.03.054 19.237 19.237 0 005.792 2.923.076.076 0 00.082-.027c.45-.615.85-1.264 1.195-1.947a.074.074 0 00-.041-.103 12.644 12.644 0 01-1.81-.862.075.075 0 01-.007-.124c.122-.091.243-.186.359-.282a.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 01.078.009c.116.096.237.192.36.283a.075.075 0 01-.006.124c-.579.338-1.177.624-1.81.861a.074.074 0 00-.041.104c.35.683.751 1.332 1.194 1.947a.076.076 0 00.083.027 19.186 19.186 0 005.797-2.923.076.076 0 00.03-.054c.447-4.614-.747-8.961-3.167-12.669a.06.06 0 00-.031-.027zM7.547 12.723c-1.142 0-2.084-1.047-2.084-2.333 0-1.285.923-2.332 2.084-2.332 1.17 0 2.103 1.057 2.084 2.332 0 1.286-.923 2.333-2.084 2.333zm7.704 0c-1.142 0-2.084-1.047-2.084-2.333 0-1.285.923-2.332 2.084-2.332 1.17 0 2.103 1.057 2.084 2.332 0 1.286-.914 2.333-2.084 2.333z" />
            </svg>
          </Link>
          <Button variant="default" className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/90">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}