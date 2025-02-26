"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

type PlanTotal = {
  text: string
  amount: string
}

type BasePlan = {
  name: string
  monthlyPrice: number
  annualPrice: number
  features: string[]
  subtext?: string
  perText?: string
  total?: PlanTotal
}

type Plans = {
  free: BasePlan
  premium: BasePlan
  teams: BasePlan
}

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly")
  const [selectedPlan, setSelectedPlan] = useState<string>("premium")

  const plans: Plans = {
    free: {
      name: "FREE",
      monthlyPrice: 0,
      annualPrice: 0,
      subtext: "No Credit Card required",
      features: ["5 documents a month", "Activity timeline"],
    },
    premium: {
      name: "Premium",
      monthlyPrice: 10,
      annualPrice: 96,
      features: [
        "Unlimited documents",
        "Unlimited signees",
        "Activity timeline",
        "Certificate of completion",
      ],
    },
    teams: {
      name: "Teams",
      monthlyPrice: 8,
      annualPrice: 77,
      subtext: "Minimum total of USD 24/month",
      perText: "/Month per month",
      features: [
        "Everything from Premium",
        "Team management",
        "Transferable contracts",
      ],
      total: {
        text: "Monthly total",
        amount: "USD 24"
      }
    },
  }

  const getPrice = (plan: BasePlan) => {
    return billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice
  }

  const getPriceLabel = (plan: BasePlan, key: string) => {
    if (billingCycle === "annually") return "/Year"
    if (key === "teams") return "/Month per month"
    return "/Month"
  }

  const getCardStyle = (key: string) => {
    const baseStyle = "rounded-3xl p-8 relative transition-all duration-300 cursor-pointer"
    const selectedStyle = "bg-white text-[#1a365d] border shadow-xl transform scale-105"
    const freeStyle = "bg-white border shadow-pink-100 shadow-lg"
    const defaultStyle = "bg-[#1a365d] text-white"

    if (key === selectedPlan) return `${baseStyle} ${selectedStyle}`
    if (key === "free") return `${baseStyle} ${freeStyle}`
    return `${baseStyle} ${defaultStyle}`
  }

  const getButtonStyle = (key: string) => {
    const baseStyle = "w-full mt-4 transition-all duration-300"
    if (key === selectedPlan || key === "free") {
      return `${baseStyle} bg-[#1a365d] text-white hover:bg-[#1a365d]/90`
    }
    return `${baseStyle} bg-white text-[#1a365d] hover:bg-gray-100`
  }

  return (
    <section className="container py-20">
      <h2 className="text-center text-3xl font-bold mb-12">
        Pick your plan. We make this part easy too.
      </h2>

      <div className="flex justify-center mb-12">
        <div className="inline-flex rounded-full bg-gray-100 p-1">
          {["monthly", "annually"].map((cycle) => (
            <button
              key={cycle}
              onClick={() => setBillingCycle(cycle as "monthly" | "annually")}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                billingCycle === cycle
                  ? "bg-[#1a365d] text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {cycle.charAt(0).toUpperCase() + cycle.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {Object.entries(plans).map(([key, plan]) => (
          <div
            key={key}
            onClick={() => setSelectedPlan(key)}
            className={getCardStyle(key)}
          >
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-sm">USD</span>
              <span className="text-4xl font-bold">{getPrice(plan)}</span>
              <span className="text-sm">{getPriceLabel(plan, key)}</span>
            </div>
            
            {plan.subtext && (
              <div className={`text-sm mb-6 ${
                (key === "free" || key === selectedPlan) 
                  ? "bg-gray-100 inline-block px-3 py-1 rounded-full text-[#1a365d]" 
                  : ""
              }`}>
                {plan.subtext}
              </div>
            )}

            <ul className="space-y-4 my-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {plan.total && (
              <div className="flex justify-between items-center mt-8 mb-4">
                <span>{plan.total.text}</span>
                <span>
                  {billingCycle === "monthly" 
                    ? plan.total.amount 
                    : `USD ${getPrice(plan) * 12}`}
                </span>
              </div>
            )}

            <Button className={getButtonStyle(key)}>
              Select Plan
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}