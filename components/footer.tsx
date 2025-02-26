import Link from "next/link"
import Image from "next/image"
import { FaWhatsapp, FaFacebook, FaLinkedin, FaDiscord, FaEnvelope, FaComments } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="bg-[#1a365d] text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Left side - Logo and tagline */}
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <Image
                src="image.png"
                alt="DocuTech Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              {/* <span className="text-xl font-semibold">DocuTech</span> */}
            </div>
            <span className="text-sm text-gray-300">Powered by Classy Endeavors</span>
          </div>

          {/* Middle - Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="#features" className="text-white hover:text-gray-300">
              Features
            </Link>
            <Link href="#why-choose-us" className="text-white hover:text-gray-300">
              Why Choose Us
            </Link>
            <Link href="#pricing" className="text-white hover:text-gray-300">
              Pricing
            </Link>
            <Link href="#faq" className="text-white hover:text-gray-300">
              FAQ
            </Link>
            <Link href="/legal-terms" className="text-white hover:text-gray-300">
              Legal terms
            </Link>
            <Link href="/privacy-policy" className="text-white hover:text-gray-300">
              Privacy policy
            </Link>
          </nav>

          {/* Right side - Social Icons */}
          <div className="flex space-x-4">
            <Link href="#" className="text-white hover:text-gray-300">
              <FaWhatsapp size={20} />
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              <FaFacebook size={20} />
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              <FaLinkedin size={20} />
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              <FaDiscord size={20} />
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              <FaEnvelope size={20} />
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              <FaComments size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}