"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    avatar: "/placeholder.svg",
    name: "John Doe",
    role: "CEO",
    company: "Tech Corp",
    text: "Create contracts, agreements & forms in seconds with our AI-powered technology",
  },
  {
    id: 2,
    avatar: "/placeholder.svg",
    name: "Jane Smith",
    role: "Legal Director",
    company: "Law Firm",
    text: "Create contracts, agreements & forms in seconds with our AI-powered technology",
  },
  {
    id: 3,
    avatar: "/placeholder.svg",
    name: "Mike Johnson",
    role: "Operations Manager",
    company: "Enterprise Co",
    text: "Create contracts, agreements & forms in seconds with our AI-powered technology",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="container py-12">
      <h2 className="text-center text-2xl font-bold mb-8">What our users say</h2>
      <div className="relative">
        <div className="flex items-center justify-center gap-6">
          <Button variant="outline" size="icon" className="absolute left-0 z-10" onClick={prevSlide}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="testimonial-card min-w-[300px] flex-shrink-0 rounded-xl border bg-white p-6 mx-4"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">{testimonial.text}</p>
                  <div className="mt-4 flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Button variant="outline" size="icon" className="absolute right-0 z-10" onClick={nextSlide}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

