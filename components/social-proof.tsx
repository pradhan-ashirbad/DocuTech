"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const companies = [
  { name: "US San Diego", logo: "/University_of_California,_San_Diego-Logo.wine.png" },
  { name: "IMEDMA", logo: "/logo-ivirma-slide.png" },
  { name: "Harvard University", logo: "/HOWARD_CLOCKTOWER_LOGO_HORIZONTAL.png" },
  { name: "PharmPlus", logo: "/Logo.png" },
  { name: "Dell", logo: "/Absa_logo_lockup_secondary_logo_RGB_Red_YSM_and_Red_Badge.png" },
  { name: "IBM Research", logo: "/cc90c9eb-81e2-46a7-bce8-759e8fdde16a.png" },
]

export default function SocialProof() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 64.0) {
        setCount((prev) => Math.min(prev + 0.1, 64.0))
      }
    }, 10)

    return () => clearInterval(interval)
  }, [count])

  return (
    <section className="container py-12">
      <motion.p
        className="text-center text-lg font-semibold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {count.toFixed(1)}k businesses and individuals have signed with DocuTech
      </motion.p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
        {companies.map((company, index) => (
          <motion.div
            key={company.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center justify-center"
          >
            <Image
              src={company.logo || "/placeholder.svg"}
              alt={company.name}
              width={120}
              height={40}
              className="opacity-75 transition-opacity hover:opacity-100"
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

