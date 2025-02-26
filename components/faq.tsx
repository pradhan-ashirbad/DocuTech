"use client"

import { useState } from 'react'

const faqs = [
  {
    question: "Are DocuTech signatures legally binding?",
    answer:
      "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they're encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!",
  },
  {
    question: "Are DocuTech signatures legally binding?",
    answer:
      "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they're encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!",
  },
  {
    question: "Are DocuTech signatures legally binding?",
    answer:
      "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they're encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!",
  },
  {
    question: "Are DocuTech signatures legally binding?",
    answer:
      "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they're encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="container py-20">
      <h2 className="text-center text-4xl font-bold mb-12">FAQs</h2>
      <div className="mx-auto max-w-[1000px] space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-2xl bg-[#1a365d] text-white overflow-hidden"
          >
            <button
              className="w-full px-8 py-6 flex justify-between items-center text-xl font-medium"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className="text-2xl">{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="px-8 py-6 bg-white text-[#1a365d] rounded-b-2xl">
                <p className="text-lg">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}