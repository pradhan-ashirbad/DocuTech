import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "DocuTech - AI-Powered Unified Platform",
  description: "Create contracts, agreements & forms in seconds with our AI-powered technology",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.className, "min-h-screen bg-white antialiased")}>{children}</body>
    </html>
  )
}



import './globals.css'